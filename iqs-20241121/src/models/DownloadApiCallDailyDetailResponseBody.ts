// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadApiCallDailyDetailResponseBody extends $dara.Model {
  /**
   * @example
   * https://
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 37A6ED15-DB44-50B5-B0DF-9449EED8FDF4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
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

