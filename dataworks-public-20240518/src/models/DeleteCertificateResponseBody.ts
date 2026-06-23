// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * D9A61DC0-B922-421B-B706
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the certificate file was successfully deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

