// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppPolicyRequestVideoPolicy extends $dara.Model {
  /**
   * @example
   * 60
   */
  frameRate?: number;
  /**
   * @example
   * 1080
   */
  sessionResolutionHeight?: number;
  /**
   * @example
   * 1920
   */
  sessionResolutionWidth?: number;
  /**
   * @example
   * video
   */
  streamingMode?: string;
  /**
   * @example
   * false
   */
  terminalResolutionAdaptive?: boolean;
  visualQualityStrategy?: string;
  /**
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

