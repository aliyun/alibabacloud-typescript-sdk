// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppPolicyRequestVideoPolicy extends $dara.Model {
  /**
   * @remarks
   * The frame rate (FPS).
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
   * The streaming mode. This parameter is used together with the Webrtc parameter to specify the protocol type.
   * 
   * - Webrtc=`true` and StreamingMode=`video`: WebRTC stream.
   * - Webrtc=`false` and StreamingMode=`video`: video stream.
   * - Webrtc=`false` and StreamingMode=`mix`: mixed stream.
   * 
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @remarks
   * Specifies whether to use adaptive resolution.
   * 
   * - `true`: The session resolution follows changes in the terminal display area. In this case, SessionResolutionWidth and SessionResolutionHeight specify the maximum resolution values.
   * 
   * - `false`: The session resolution does not follow changes in the terminal display area. In this case, the resolution is fixed to the values of SessionResolutionWidth and SessionResolutionHeight.
   * 
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  /**
   * @remarks
   * The visual quality strategy.
   * 
   * @example
   * smooth
   */
  visualQualityStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable WebRTC. This parameter is used together with the StreamingMode parameter to specify the protocol type.
   * 
   * - Webrtc=`true` and StreamingMode=`video`: WebRTC stream.
   * - Webrtc=`false` and StreamingMode=`video`: video stream.
   * - Webrtc=`false` and StreamingMode=`mix`: mixed stream.
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
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The display policy.
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

