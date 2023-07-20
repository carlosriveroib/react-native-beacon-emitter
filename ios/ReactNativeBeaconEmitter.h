
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNReactNativeBeaconEmitterSpec.h"

@interface ReactNativeBeaconEmitter : NSObject <NativeReactNativeBeaconEmitterSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ReactNativeBeaconEmitter : NSObject <RCTBridgeModule>
#endif

@end
