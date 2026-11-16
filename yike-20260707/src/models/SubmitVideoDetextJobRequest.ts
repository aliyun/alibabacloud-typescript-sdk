// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoDetextJobRequest extends $dara.Model {
  /**
   * @remarks
   * The user-level idempotency token. The token can be up to 40 characters in length. If the same user submits the request repeatedly with the same token, the original task is returned.
   * 
   * @example
   * detext-client-20260820-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The input configuration JSON string. You must specify either VideoUrl or VideoMediaId, but not both.
   * 
   * This parameter is required.
   * 
   * @example
   * {"VideoUrl":"https://example.com/input.mp4"}
   */
  input?: string;
  /**
   * @remarks
   * The text erasure parameters JSON string. TextTargets is used to detect and erase text. FullEraseTargets is used to inpaint entire regions. EraseAllText only controls text filtering and does not expand the region. For parameters, default behaviors, and combination examples, see the supplementary description of request parameters.
   * 
   * @example
   * {"EraseAllText":true,"TimeRanges":[[12,15]],"TextTargets":[{"Box":[0.1,0.8,0.8,0.15]}]}
   */
  jobParameters?: string;
  /**
   * @remarks
   * The output configuration JSON string. You can use OssUri to specify an OSS directory or an MP4 file path. The path cannot contain query parameters or fragments. If a directory is specified, detext.mp4 is automatically appended. If the path ends with .mp4 and has no trailing slash, it is used directly as the destination file. If OssUri is not specified, a signed URL for the processing result is returned in the query result.
   * 
   * @example
   * {"OssUri":"oss://example-bucket/video-detext/job-001/"}
   */
  output?: string;
  /**
   * @remarks
   * The custom data JSON string used for pass-through in final state notifications. For Message Service (MNS) callbacks, use NotifyAddress to specify the queue name prefixed with yike-callback, and use NotifyMnsEndpoint to specify the MNS endpoint of the same account. For HTTP or HTTPS callbacks, use NotifyAddress to specify the complete URL.
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

