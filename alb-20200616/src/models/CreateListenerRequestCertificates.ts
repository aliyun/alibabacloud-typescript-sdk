// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Only server certificates are supported. You can specify up to 20 certificate IDs.
   * 
   * @example
   * 103705*******
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

