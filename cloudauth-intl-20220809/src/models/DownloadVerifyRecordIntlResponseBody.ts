// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadVerifyRecordIntlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Task ID, returned in asynchronous mode, used later with QueryDownloadTaskIntl to download the exported file.
   * 
   * @example
   * 202511284106866
   */
  downloadTaskId?: string;
  /**
   * @remarks
   * Exported file download link.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth.oss-cn-shanghai.aliyuncs.com/console/xxxxxx/KYC_INVOKE_STATISTICS.xlxs
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVerifyRecordIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: DownloadVerifyRecordIntlResponseBodyData;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DownloadVerifyRecordIntlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

