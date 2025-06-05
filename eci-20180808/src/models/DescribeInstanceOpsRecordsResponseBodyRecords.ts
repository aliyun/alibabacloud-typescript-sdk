// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceOpsRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M task was created.
   * 
   * @example
   * 2021-12-29T15:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the O\\&M task expires.
   * 
   * @example
   * 2099-12-29T15:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the O\\&M task.
   * - Ready
   * - Failed
   * - Expired
   * - Closed
   * - Success
   * 
   * @example
   * Ready
   */
  opsStatus?: string;
  /**
   * @remarks
   * The type of the O\\&M task.
   * 
   * @example
   * coredump
   */
  opsType?: string;
  /**
   * @remarks
   * The content of the O\\&M result. The value is the download URL of the files that are generated for the O\\&M task. This parameter is returned only when the value of the OpsStatus parameter is Success.
   * 
   * @example
   * https://******
   */
  resultContent?: string;
  /**
   * @remarks
   * The type of the O\\&M result. This parameter is returned only when the value of the OpsStatus parameter is Success.\\
   * The only value of the parameter is Oss. The value indicates that the files generated for the O\\&M task are saved to Object Storage Service (OSS) buckets.
   * 
   * @example
   * OSS
   */
  resultType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      opsStatus: 'OpsStatus',
      opsType: 'OpsType',
      resultContent: 'ResultContent',
      resultType: 'ResultType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expireTime: 'string',
      opsStatus: 'string',
      opsType: 'string',
      resultContent: 'string',
      resultType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

