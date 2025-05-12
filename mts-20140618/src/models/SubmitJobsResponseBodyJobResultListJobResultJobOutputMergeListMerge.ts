// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputMergeListMerge extends $dara.Model {
  /**
   * @remarks
   * The duration of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 00000.20
   */
  duration?: string;
  /**
   * @remarks
   * The OSS URL of the clip.
   * 
   * *   Example: `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object-****.flv`.
   * *   The OSS URL of the object must be URL-encoded by using the UTF-8 standard.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object-****.flv
   */
  mergeURL?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role used for delegated authorization.
   * 
   * @example
   * acs:ram::<your uid>:role/<your role name>
   */
  roleArn?: string;
  /**
   * @remarks
   * The start point in time of the clip.
   * 
   * *   Format: `hh:mm:ss[.SSS]` or `sssss[.SSS]`.
   * *   Examples: 01:59:59.999 and 32000.23.
   * 
   * @example
   * 00000.50
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      mergeURL: 'MergeURL',
      roleArn: 'RoleArn',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      mergeURL: 'string',
      roleArn: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

