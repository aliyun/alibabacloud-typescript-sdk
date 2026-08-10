// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeAvatarNarratorJobRequest extends $dara.Model {
  /**
   * @remarks
   * The node request content. JSON string that contains the following parameters:
   * 
   * - SceneType: string. The common scenario type. Valid values:
   *   - creator-talk: knowledge explanation, suitable for news, science, and finance explanation scenarios.
   *   - avatar-broadcast: digital human broadcast, fixed single-shot scenario.
   *   - creator-sales-oneshot: influencer marketing, single-shot oral broadcast mixed-editing scenario.
   * - TextType: int. The text type. Valid values:
   *   - 1: raw script (product or news information, automatically converted to oral broadcast script by the system. Not supported for avatar-broadcast).
   *   - 2: oral broadcast script.
   * - TextContent: string. The text content. Maximum length: 10000 characters.
   * - UserMaterials: Array<Object>. The user material list (not supported for avatar-broadcast). Contains the following fields:
   *   - MediaId: the media asset ID (image or video uploaded to Wanjing Yike).
   *   - Type: the media type (valid values: image, video).
   *   - Action: the material usage method. Valid values:
   *     - match: intelligently matches suitable segments from video materials based on the oral broadcast script.
   *     - insert: intelligently determines the insertion position of video materials based on the oral broadcast script.
   *     - insert_first: prepends the video material.
   *     - insert_last: appends the video material.
   * - AvatarData: object. The digital human information.
   *   - AvatarPortrait: required. String. The portrait image URL.
   *   - AvatarVoice: optional. String. An audio URL (used as a reference for voice cloning) or a voice ID from the library (refer to the Wanjing Yike voice library. The system selects automatically if not specified).
   * - VoiceDuration: int. The expected oral broadcast duration. Set this parameter when TextType is 1. Unit: seconds. Default value: 60. The final video duration is slightly less than the expected duration.
   * - AspectRatio: string. The output dimensions. Valid values: 16:9, 9:16, 4:3, 3:4.
   * - Resolution: string. The video resolution. Valid values: 720P, 1080P.
   * - WithSubtitles: bool. Specifies whether to include subtitles. Valid values:
   *   - true: includes subtitles. This is the default value.
   *   - false: does not include subtitles.
   * - EnabledAICover: bool. Specifies whether to generate a cover image (AI-generated based on the oral broadcast content).
   * - IPCharacter: object. The AI cover character. Specify either MediaId or MediaUrl.
   * - EndCard: string. The video ending image (image media asset ID or URL). Commonly used for marketing CTA conversion.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "JobParams": "{\\"SceneType\\":\\"creator-talk\\",\\"TextType\\":1,\\"TextContent\\":\\"Morgan Stanley comments on Meituan\\"s performance: no scares, no surprises. The core debate remains on market share and profit margin recovery.\\",\\"AspectRatio\\":\\"4:3\\",\\"Resolution\\":\\"720P\\",\\"OutputLanguages\\":[\\"CN\\",\\"EN\\",\\"YUE\\"],\\"VoiceDuration\\":15,\\"UserMaterials\\":[{\\"MediaId\\":\\"d5a26b50****71f1bfd9e7f6d45b6302\\"},{\\"MediaId\\":\\"4ce65730****71f1bfd9e7f6d45b6302\\"}],\\"WithSubtitles\\":true,\\"AvatarData\\":{\\"AvatarPortrait\\":\\"https://example-bucket.oss-cn-shanghai.aliyuncs.com/aigc/market/cloth/avatar_image.png\\",\\"AvatarVoice\\":\\"sys_ElegantProperMiddleAgedWoman\\"}}",
   *   "UserData": "{\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://example.com/callback/video-task\\"}"
   * }
   */
  jobParams?: string;
  /**
   * @remarks
   * The custom user parameter. JSON string. The callback result carries this parameter as-is (for example, newsKey).
   * 
   * System reserved field: NotifyAddress. The callback URL. The system sends a callback to this URL after the task is completed. Example: {"NotifyAddress": "http://xxx.callback.url"}.
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

