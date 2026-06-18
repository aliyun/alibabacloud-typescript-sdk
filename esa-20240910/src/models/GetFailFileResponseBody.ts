// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFailFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download link for the failed task file.
   * 
   * @example
   * https://****.oss-cn-shenzhen.aliyuncs.com/fail-1593805857882113?Expires=1708659191&OSSAccessKeyId=**********&Signature=**********
   */
  downloadLink?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

