// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoDetextJobRequest extends $dara.Model {
  /**
   * @remarks
   * The user-level idempotency token. Maximum length: 40 characters. If the same user submits a request with the same token, the original job is returned.
   * 
   * @example
   * detext-client-20260820-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The input configuration JSON string. You must provide exactly one of VideoUrl or VideoMediaId.
   * 
   * This parameter is required.
   * 
   * @example
   * {"VideoUrl":"https://example.com/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The text removal parameters JSON string. TextTargets detects and removes text within specified regions. FullEraseTargets repairs entire rectangular regions regardless of text detection. EraseAllText controls only text filtering and does not expand the removal region. For parameter details, default behavior, and combination examples, see the supplementary request parameter description.
   * 
   * @example
   * {"EraseAllText":true,"TimeRanges":[[12,15]],"TextTargets":[{"Box":[0.1,0.8,0.8,0.15]}]}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The output configuration JSON string. OssUri specifies an OSS directory or MP4 file path in the format oss://bucket/path. It cannot contain query parameters or fragments. A directory path automatically appends detext.mp4. A path ending in .mp4 without a trailing slash is used directly as the target file. If not specified, a signed URL for the result is returned in the query response.
   * 
   * @example
   * {"OssUri":"oss://example-bucket/video-detext/job-001/"}
   */
  output?: string;
  /**
   * @remarks
   * The custom data JSON string used for pass-through in desired-state notifications. For MNS callbacks, use NotifyAddress to specify a queue name prefixed with yike-callback, and use NotifyMnsEndpoint to specify the MNS endpoint of the same account. For HTTP(S) callbacks, use NotifyAddress to specify the full URL.
   * 
   * @example
   * {"NotifyAddress":"yike-callback-example","NotifyMnsEndpoint":"http://<AccountId>.mns.cn-shanghai.aliyuncs.com/"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      input: 'Input',
      jobParameters: 'JobParameters',
      output: 'Output',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      input: 'string',
      jobParameters: 'string',
      output: 'string',
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

