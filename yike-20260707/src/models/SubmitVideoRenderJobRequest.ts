// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRenderJobRequest extends $dara.Model {
  /**
   * @remarks
   * The complete creative script (JSON string) after user confirmation or editing. The structure aligns with the JSON content in the `Result` file returned by the `GetRemakeScriptJob` API.
   * 
   * @example
   * {
   * "schemaVersion":"creative/v1",
   * "algoResult":{...},
   * "extraInfo":{...}
   * }
   */
  script?: string;
  /**
   * @remarks
   * The rendering settings (JSON string).
   * 
   * - **Resolution** (String, required): The resolution. Valid values: `720P`, `1080P`.
   *   - **AspectRatio** (String, optional): The video aspect ratio. Valid values: `9:16`, `16:9`, `1:1`. Default value: `9:16`.
   *   - **VoiceoverLanguage** (String, optional): The voiceover language. Valid values: `zh` (Chinese), `en` (English), `es` (Spanish), `pt` (Portuguese), `fr` (French), `de` (German), `ja` (Japanese), `ko` (Korean), `ar` (Arabic). Default value: `zh`.
   *   - **WithSubtitles** (Bool, optional): Specifies whether to generate subtitles. Default value: `true`.
   *   - **TTS** (Object, optional): The TTS configuration. If not specified, the default voice is used. This parameter applies only to single-person scenarios with voiceover only.
   * 
   *     - **VoiceUrl** (String, optional): The URL of the voice file. The URL must be an HTTP or HTTPS address. If specified, the voiceover for the entire video uses this voice.
   * 
   *   - **Bgm** (String, optional): The URL or 32-character media asset ID of the background music.
   * 
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
   * @remarks
   * The custom user parameter in JSON format.
   * 
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

