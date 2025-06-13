// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenerCertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate ID. Only server certificates are supported.
   * 
   * @example
   * 12315790343_166f8204689_1714763408_70998****
   */
  certificateId?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * Indicates whether the certificate is the default certificate of the listener. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the certificate is associated with the listener. Valid values:
   * 
   * *   **Associating**
   * *   **Associated**
   * *   **Diassociating**
   * 
   * @example
   * Associating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      isDefault: 'IsDefault',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateType: 'string',
      isDefault: 'boolean',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

