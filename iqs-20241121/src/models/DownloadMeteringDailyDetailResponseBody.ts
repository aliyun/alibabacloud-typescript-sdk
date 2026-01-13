// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadMeteringDailyDetailResponseBody extends $dara.Model {
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
   * ECB2144C-E277-5434-80E6-12D26678D364
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

