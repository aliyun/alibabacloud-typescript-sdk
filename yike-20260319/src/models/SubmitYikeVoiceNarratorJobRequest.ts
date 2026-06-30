// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeVoiceNarratorJobRequest extends $dara.Model {
  /**
   * @remarks
   * The node request content. JSON string. Contains the following parameters:
   * - SceneType: string. The common scenarios type. Valid values: `briefing-voiceover`: news broadcast or financial education industry.
   * - TextType: int. The text type. Valid values: `1`: raw text (product or news information, which the system automatically converts into a voiceover script). `2`: voiceover script.
   * - TextContent: string. The text content. Maximum length: 10000 characters.
   * - UserMaterials: Array\\<Object\\>. The list of user materials. Fields: MediaId: the media asset ID (an image or video uploaded to Wanjing Yike).
   * - NarrationVoiceId: string. The narration voice ID. For valid values, see the documentation. Default value: `sys_ElegantProperMiddleAgedWoman`.
   * - VoiceDuration: int. The expected voiceover duration. Set this parameter when `TextType==1`. Unit: seconds. Default value: 60. The final video duration is slightly shorter than the expected duration.
   * - AspectRatio: string. The video aspect ratio. Valid values: `16:9`, `9:16`, `4:3`, `3:4`.
   * - Resolution: string. The video resolution. Valid values: `720P`, `1080P`.
   * - OutputLanguages: Array\\<String\\>. The output video languages. Multiple values are supported (currently only Chinese is supported). Valid values: `CN`: Chinese (default). `EN`: English. `YUE`: Cantonese.
   * - WithSubtitles: bool. Specifies whether to include subtitles. Valid values: true: includes subtitles (default). false: does not include subtitles.
   * 
   * -- The following parameters are for the portrait-mode packaging template and are valid only for the briefing-voiceover type. --
   * - TargetAspectRatio: string. The aspect ratio adapted for portrait mode. Valid values: `16:9`, `9:16`, `4:3`, `3:4`.
   * - Title: string. The main title displayed in the template.
   * - SubHeading: string. The subtitle displayed in the template.
   * - Date: string. The date displayed in the template.
   * - Watermark: object. The watermark displayed in the template. Fields: Text: the watermark text.
   * - EnabledAICover: bool. Specifies whether to use AI to generate a cover image.
   * - IPCharacter: Object. Specifies whether the AI-generated cover image includes an IP character. Fields: MediaId: the media asset ID. MediaUrl: a publicly accessible URL.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"SceneType\\":\\"briefing-voiceover\\"，"TextType\\":2,\\"TextContent\\":\\"Today, Beijing held a press conference to announce plans to further optimize the city\\"s transportation network, including adding three new subway lines within the next three years....\\",\\"AspectRatio\\":\\"16:9\\", \\"Resolution\\":\\"720P\\", \\"OutputLanguages\\":[\\"CN\\",\\"YUE\\"]"}
   */
  jobParams?: string;
  /**
   * @remarks
   * The custom user parameter. JSON string. The callback result carries this parameter as-is (for example, newsKey).
   * 
   * System reserved field: NotifyAddress. The callback URL. The system sends a callback to this URL after the task is completed.
   * `{"NotifyAddress": "http://xxx.callback.url"}`.
   * 
   * @example
   * {\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://cms.example.com/callback/video-task\\"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      jobParams: 'JobParams',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobParams: 'string',
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

