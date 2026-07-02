// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeVideoCloneJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job request content. JSON string that contains the following parameters:
   * - SceneType: string. The replication scene type. Valid values: `variant-clone`: full replication, applicable to same-category content rewriting scenarios where only partial elements (person/voice/image/text) are replaced.
   * - OriginalVideo: object type that contains the following field: MediaId - the media asset ID (video uploaded to the platform).
   * - SceneConfig: JSON string type. The scene extension parameters. For the variant-clone type, the value is `{"OldProductName":"xxx","ProductName":"xxx"}`.
   * - UserMaterials: Array<Object> type. The list of user materials that contains the following field: MediaId - the media asset ID (image or video uploaded to the platform).
   * - AvatarData: object type. The digital human information. AvatarPortrait: required, string, the portrait image URL. AvatarVoice: optional, string, the audio URL (used as a reference for audio replication).
   * - Resolution: string type. The video resolution. Valid values: `720P`, `1080P`.
   * - WithSubtitles: bool type. Specifies whether to include subtitles. Valid values: true: includes subtitles (default). false: does not include subtitles.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "JobParams": "{\\"SceneType\\":\\"variant-clone\\",\\"OriginalVideo\\":{\\"MediaId\\":\\"1d342ee****c71f18000e7f6d45b6302\\"},\\"SceneConfig\\":\\xxxxxxxxx\\",\\"Resolution\\":\\"720P\\",\\"AvatarData\\":{\\"AvatarPortrait\\":\\"https://example-bucket.oss-cn-shanghai.aliyuncs.com/sucai/videoremake/0518/shuziren-005.png\\",\\"AvatarVoice\\":\\"xxxxxx\\"},\\"UserMaterials\\":[{\\"MediaId\\":\\"e3785e10****71f1bfc9e7f6c6586301\\"}],\\"WithSubtitles\\":true}"
   * }
   */
  jobParams?: string;
  /**
   * @remarks
   * The custom user parameter. JSON string. The callback result carries this value as-is (for example, newsKey).
   * 
   * System reserved field NotifyAddress: the callback URL. The system sends a callback to this URL after the task is completed. Example: {"NotifyAddress": "http://xxx.callback.url"}
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

