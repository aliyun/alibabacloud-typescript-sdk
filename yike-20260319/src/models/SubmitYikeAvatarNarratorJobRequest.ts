// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeAvatarNarratorJobRequest extends $dara.Model {
  /**
   * @remarks
   * The task request content. The value is a JSON string that contains the following parameters:
   * 
   * - SceneType: string. The common scenario type. Valid values:
   *   - creator-talk: knowledge explanation. Applicable to scenarios such as news, popular science, and financial explanation.
   *   - avatar-broadcast: digital human broadcasting. A fixed single-shot scenario.
   * - TextType: int. The text type. Valid values:
   *   - 1: raw script. The system automatically converts product or news information into an oral broadcast script. This value is not supported for avatar-broadcast.
   *   - 2: oral broadcast script.
   * - TextContent: string. The text content. Maximum length: 10,000 characters.
   * - UserMaterials: Array\\<Object\\>. The list of user materials. This parameter is not supported for avatar-broadcast. Fields:
   *   - MediaId: the media asset ID. The ID of an image or video uploaded to Wanjing Yike.
   * - AvatarData: object. The digital human information.
   *   - AvatarPortrait: required. String. The URL of the portrait image.
   *   - AvatarVoice: optional. String. The URL of an audio file for voice cloning reference, or a voice ID from the built-in voice library. For more information, see the Wanjing Yike voice library. If this parameter is not specified, the system automatically selects a voice.
   * - VoiceDuration: int. The expected oral broadcast duration. Set this parameter when TextType is set to 1. Unit: seconds. Default value: 60. The final video duration is slightly shorter than the expected duration.
   * - AspectRatio: string. The video dimensions. Valid values: 16:9, 9:16, 4:3, and 3:4.
   * - Resolution: string. The video resolution. Valid values: 720P and 1080P.
   * - WithSubtitles: bool. Specifies whether to add subtitles. Valid values:
   *   - true (default): Add subtitles.
   *   - false: Do not add subtitles.
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
   * The custom user parameter. The value is a JSON string that is returned as-is in the callback result, for example, newsKey.
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

