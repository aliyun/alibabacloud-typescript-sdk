// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadInstanceCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the downloaded certificate.
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CCFAAB4-97B7-5800-B9F2-685EB596E3EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
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

