// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeAvatarNarratorJobRequest extends $dara.Model {
  /**
   * @remarks
   * The node request content. JSON string. This parameter contains the following fields:
   * 
   * - SceneType: string. The common scenario type. Valid values: `creator-talk`: knowledge sharing, applicable to influencer sharing and explanation scenarios in industries such as finance and education.
   * - TextType: int. The text type. Valid values: 1: raw script (product or news information, which the system automatically converts to an oral broadcast script). 2: oral broadcast script.
   * - TextContent: string. The text content. Maximum length: 10000 characters.
   * - UserMaterials: Array\\<Object\\>. The list of user materials. Fields: MediaId: the media asset ID (image or video uploaded to Wanjing Yike).
   * - AvatarData: object. The digital human information. AvatarPortrait: required, string, the URL of the portrait image. AvatarVoice: optional, string, the audio URL (used as a reference for voice cloning) or a voice ID from the library (see the Wanjing Yike voice library. The system selects automatically).
   * - VoiceDuration: int. The expected oral broadcast duration. Settings for this field apply when TextType is 1. Unit: seconds. Default value: 60. The final video duration is slightly shorter than the expected duration.
   * - AspectRatio: string. The video dimensions. Valid values: 16:9, 9:16, 4:3, 3:4.
   * - Resolution: string. The video resolution. Valid values: 720P, 1080P.
   * - OutputLanguages: Array. The output video languages. Multiple values are supported. Currently, only Chinese is supported. Valid values: CN: Chinese (default). EN: English. YUE: Cantonese.
   * - WithSubtitles: bool. Specifies whether to include subtitles. Valid values: true: include subtitles (default). false: do not include subtitles.
   * 
   * -- The following parameters are for the vertical screen packaging template and are valid only for the creator-talk type. --
   * - TargetAspectRatio: string. The dimensions adapted for vertical screen. Valid values: `16:9`, `9:16`, `4:3`, `3:4`.
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
   * {
   *   "JobParams": "{\\"SceneType\\":\\"creator-talk\\",\\"TextType\\":1,\\"TextContent\\":\\"大摩点评美团业绩：无惊吓无惊喜，核心博弈点依然在市场份额与利润率回升。\\",\\"AspectRatio\\":\\"4:3\\",\\"Resolution\\":\\"720P\\",\\"OutputLanguages\\":[\\"CN\\",\\"EN\\",\\"YUE\\"],\\"VoiceDuration\\":15,\\"UserMaterials\\":[{\\"MediaId\\":\\"d5a26b50****71f1bfd9e7f6d45b6302\\"},{\\"MediaId\\":\\"4ce65730****71f1bfd9e7f6d45b6302\\"}],\\"WithSubtitles\\":true,\\"AvatarData\\":{\\"AvatarPortrait\\":\\"https://example-bucket.oss-cn-shanghai.aliyuncs.com/aigc/market/cloth/avatar_image.png\\",\\"AvatarVoice\\":\\"sys_ElegantProperMiddleAgedWoman\\"}}",
   *   "UserData": "{\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://example.com/callback/video-task\\"}"
   * }
   */
  jobParams?: string;
  /**
   * @remarks
   * The custom user parameter. JSON string. This parameter is returned as-is in the callback result (for example, newsKey).
   * 
   * The system reserved field NotifyAddress specifies the callback URL. The system sends a callback to this URL after the task is complete. Example: {"NotifyAddress": "http://xxx.callback.url"}.
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

