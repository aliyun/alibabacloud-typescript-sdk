// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppPolicyRequestVideoPolicy extends $dara.Model {
  /**
   * @remarks
   * The frame rate (FPS).
   * 
   * Enumerated values:
   * 
   * *   30: 30 FPS
   * *   60: 60 FPS
   * 
   * @example
   * 60
   */
  frameRate?: number;
  /**
   * @remarks
   * The height of the resolution, in pixels.
   * 
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @remarks
   * The width of the resolution, in pixels.
   * 
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  /**
   * @remarks
   * The stream mode. This parameter is used together with `Webrtc` to specify the protocol type.
   * 
   * *   If you set `Webrtc` to `true` and `StreamingMode` to `video`, Web Real-Time Communications (WebRTC) streams are used.
   * *   If you set `Webrtc` to `false` and `StreamingMode` to `video`, video streams are used.
   * *   If you set `Webrtc` to `false` and `StreamingMode` to `mix`, mixed streams are used.
   * 
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @remarks
   * Whether to use adaptive resolution.
   * 
   * *   `true`: The session resolution changes with the display area of the terminal. In this case, `SessionResolutionWidth` indicates the maximum resolution width and `SessionResolutionHeight` indicates the maximum resolution height.
   * *   `false`: The session resolution does not change with the display area of the terminal. In this case, `SessionResolutionWidth` specifies the fixed resolution width and `SessionResolutionHeight` specifies the fixed resolution height.
   * 
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  /**
   * @remarks
   * The image quality policy.
   * 
   * Enumerated values:
   * 
   * *   adaptive: adaptive.
   * *   smooth: smooth first.
   * *   quality: quality first.
   * 
   * @example
   * smooth
   */
  visualQualityStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable WebRTC. This parameter is used together with `StreamingMode` to specify the protocol type.
   * 
   * *   If you set `Webrtc` to `true` and `StreamingMode` to `video`, WebRTC streams are used.
   * *   If you set `Webrtc` to `false` and `StreamingMode` to `video`, video streams are used.
   * *   If you set `Webrtc` to `false` and `StreamingMode` to `mix`, mixed streams are used.
   * 
   * @example
   * true
   */
  webrtc?: boolean;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      sessionResolutionHeight: 'SessionResolutionHeight',
      sessionResolutionWidth: 'SessionResolutionWidth',
      streamingMode: 'StreamingMode',
      terminalResolutionAdaptive: 'TerminalResolutionAdaptive',
      visualQualityStrategy: 'VisualQualityStrategy',
      webrtc: 'Webrtc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'number',
      sessionResolutionHeight: 'number',
      sessionResolutionWidth: 'number',
      streamingMode: 'string',
      terminalResolutionAdaptive: 'boolean',
      visualQualityStrategy: 'string',
      webrtc: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-ee2znjktwgxu2****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Enumerated values:
   * 
   * *   CloudApp: RDS Cloud App
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * Displays the policy.
   */
  videoPolicy?: ModifyAppPolicyRequestVideoPolicy;
  static names(): { [key: string]: string } {
    return {
      appPolicyId: 'AppPolicyId',
      productType: 'ProductType',
      videoPolicy: 'VideoPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPolicyId: 'string',
      productType: 'string',
      videoPolicy: ModifyAppPolicyRequestVideoPolicy,
    };
  }

  validate() {
    if(this.videoPolicy && typeof (this.videoPolicy as any).validate === 'function') {
      (this.videoPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

