// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeVideoCloneJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *   "JobParams": "{\\"SceneType\\":\\"variant-clone\\",\\"OriginalVideo\\":{\\"MediaId\\":\\"1d342ee****c71f18000e7f6d45b6302\\"},\\"SceneConfig\\":\\xxxxxxxxx\\",\\"Resolution\\":\\"720P\\",\\"AvatarData\\":{\\"AvatarPortrait\\":\\"https://example-bucket.oss-cn-shanghai.aliyuncs.com/sucai/videoremake/0518/shuziren-005.png\\",\\"AvatarVoice\\":\\"xxxxxx\\"},\\"UserMaterials\\":[{\\"MediaId\\":\\"e3785e10****71f1bfc9e7f6c6586301\\"},{\\"MediaId\\":\\"e34196a05****1f1bfb0f6f7d44b6301\\"},{\\"MediaId\\":\\"e3628c205****1f1bfc5f7f6d4496301\\"},{\\"MediaId\\":\\"e35e1f505****1f1bfc9e7f6c6586301\\"},{\\"MediaId\\":\\"e37bb9705****1f18000e7f6d45b6301\\"}],\\"WithSubtitles\\":true,\\"VoiceDuration\\":15}",
   *   "UserData": "{\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://example.com/callback/video-task\\"}"
   * }
   */
  jobParams?: string;
  /**
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

