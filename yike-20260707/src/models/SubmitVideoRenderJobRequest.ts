// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoRenderJobRequest extends $dara.Model {
  /**
   * @remarks
   * The complete creative script confirmed or edited by the user, provided as a JSON string. The structure aligns with the JSON content in the Result file returned by the GetRemakeScriptJob API.
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
   * The rendering settings, provided as a JSON string.
   * 
   * - **Resolution** (String, required): The resolution. Valid values: `720P` and `1080P`.
   *   - **AspectRatio** (String, optional): The video aspect ratio. Valid values: `9:16`, `16:9`, and `1:1`. Default value: `9:16`.
   *   - **VoiceoverLanguage** (String, optional): The voiceover language. Valid values: `zh` (Chinese), `en` (English), `es` (Spanish), `pt` (Portuguese), `fr` (French), `de` (German), `ja` (Japanese), `ko` (Korean), and `ar` (Arabic). Default value: `zh`.
   *   - **WithSubtitles** (Boolean, optional): Specifies whether to generate subtitles. Default value: `true`.
   *   - **TTS** (Object, optional): The text-to-speech (TTS) configuration. If this parameter is not specified, the default voice is used. This parameter applies only to single-person scenarios and pure voiceovers.
   * 
   *     - **VoiceUrl** (String, optional): The URL of the voice file, which must be an HTTP or HTTPS URL. If specified, this voice is used for the voiceover throughout the entire video.
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
   * The user-defined parameters, provided as a JSON string.
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

