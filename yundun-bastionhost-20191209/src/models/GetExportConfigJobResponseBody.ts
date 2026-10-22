// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExportConfigJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the configuration backup file.
   * 
   * @example
   * https://bastionhost-cn-hangzhou-164***.oss-cn-hangzhou.aliyuncs.com/bastionhost-cn-2******
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the configuration backup download URL. Unit: seconds. The value is a UNIX timestamp.
   * 
   * @example
   * 1679393152
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the configuration backup export task.
   * 
   * @example
   * 2
   */
  jobId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98DBE5C2-7D7A-5393-9E5A-71074336D33B
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the configuration backup export task.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      jobId: 'JobId',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      expireTime: 'number',
      jobId: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

