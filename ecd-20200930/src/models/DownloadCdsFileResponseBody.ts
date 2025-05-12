// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DownloadCdsFileResponseBodyDownloadFileModel } from "./DownloadCdsFileResponseBodyDownloadFileModel";


export class DownloadCdsFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the file.
   */
  downloadFileModel?: DownloadCdsFileResponseBodyDownloadFileModel;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3ED9519-DD73-5C86-9C0A-43C9281C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      downloadFileModel: 'DownloadFileModel',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadFileModel: DownloadCdsFileResponseBodyDownloadFileModel,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.downloadFileModel && typeof (this.downloadFileModel as any).validate === 'function') {
      (this.downloadFileModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

