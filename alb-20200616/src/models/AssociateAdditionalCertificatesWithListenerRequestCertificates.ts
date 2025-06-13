// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAdditionalCertificatesWithListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Only server certificates are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cert-123
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

