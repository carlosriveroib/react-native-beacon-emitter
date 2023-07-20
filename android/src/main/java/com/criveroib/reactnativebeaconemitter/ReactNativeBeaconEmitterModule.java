package com.criveroib.reactnativebeaconemitter;

import androidx.annotation.NonNull;
import android.bluetooth.le.AdvertiseSettings;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import org.altbeacon.beacon.Beacon;
import org.altbeacon.beacon.BeaconParser;
import org.altbeacon.beacon.BeaconTransmitter;

import java.util.Arrays;

@ReactModule(name = ReactNativeBeaconEmitterModule.NAME)
public class ReactNativeBeaconEmitterModule extends ReactContextBaseJavaModule {
    public static final String NAME = "ReactNativeBeaconEmitter";
    private final ReactApplicationContext context;
    private static BeaconTransmitter beaconTransmitter = null;

    public ReactNativeBeaconEmitterModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void start(String uuid, int major, int minor) {
        Beacon beacon = new Beacon.Builder()
            .setId1(uuid)
            .setId2(String.valueOf(major))
            .setId3(String.valueOf(minor))
            .setManufacturer(0x0118)
            .setTxPower(-59)
            .setDataFields(Arrays.asList(new Long[] {0l}))
            .build();

        BeaconParser beaconParser = new BeaconParser()
            .setBeaconLayout("m:2-3=beac,i:4-19,i:20-21,i:22-23,p:24-24,d:25-25");

        this.beaconTransmitter = new BeaconTransmitter(context, beaconParser);
        this.beaconTransmitter.setAdvertiseMode(AdvertiseSettings.ADVERTISE_MODE_LOW_LATENCY);
        this.beaconTransmitter.setAdvertiseTxPowerLevel(AdvertiseSettings.ADVERTISE_TX_POWER_HIGH);

        this.beaconTransmitter.startAdvertising(beacon);
    }

    @ReactMethod
    public void stop() {
        if (this.beaconTransmitter != null) {
            try {
                this.beaconTransmitter.stopAdvertising();
            } catch (Exception ex) {
            }
        }
    }
}
