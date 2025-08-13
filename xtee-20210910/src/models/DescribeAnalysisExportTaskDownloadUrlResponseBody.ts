// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnalysisExportTaskDownloadUrlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Download URL.
   * 
   * @example
   * https://xxxxx-oss-xxxxx.xxxxxx.aliyuncs.com/xx/xx/xxx/xxxxxx.csv?Expires=1753433384&OSSAccessKeyId=xxxxxxxxx&Signature=%2F%xxxxxxxxxxxx%3D
   */
  downloadFileUrl?: string;
  /**
   * @remarks
   * Download execution time
   * 
   * @example
   * 1753891199000
   */
  executeTime?: number;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadFileUrl: 'downloadFileUrl',
      executeTime: 'executeTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileUrl: 'string',
      executeTime: 'number',
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

export class DescribeAnalysisExportTaskDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeAnalysisExportTaskDownloadUrlResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeAnalysisExportTaskDownloadUrlResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

