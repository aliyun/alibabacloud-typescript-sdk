// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRenderJobRequest extends $dara.Model {
  /**
   * @example
   * {
   * "schemaVersion":"creative/v1",
   * "algoResult":{...},
   * "extraInfo":{...}
   * }
   */
  script?: string;
  /**
   * @example
   * {
   *   "VoiceoverLanguage": "zh",
   *   "Resolution": "1080P",
   *   "AspectRatio": "9:16",
   *   "TTS": {
   *     "VoiceUrl": "http://xxx.mp3"
   *   },
   *   "WithSubtitles": true,
   *   "Bgm": "http://xxx.mp3"
   * }
   */
  settings?: string;
  /**
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      settings: 'Settings',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      settings: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

