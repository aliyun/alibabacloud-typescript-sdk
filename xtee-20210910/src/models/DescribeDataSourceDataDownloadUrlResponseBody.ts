// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourceDataDownloadUrlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Download URL.
   * 
   * @example
   * https:/xxxxx.oss-cn-xxxxxx.aliyuncs.com/xxxx/xxx/xxxxxx/xxx/xxxxxxxxxx?Expires=1753421064&OSSAccessKeyId=xxxxxxx&Signature=xxxxxxx%3D
   */
  downloadFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      downloadFileUrl: 'downloadFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourceDataDownloadUrlResponseBody extends $dara.Model {
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
   * Return object
   */
  resultObject?: DescribeDataSourceDataDownloadUrlResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeDataSourceDataDownloadUrlResponseBodyResultObject,
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

