// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate signing request (CSR) content.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   */
  CSR?: string;
  /**
   * @remarks
   * The private key algorithm type. This parameter is required if CSR is not provided.
   * 
   * @example
   * RSA
   */
  pkeyType?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The validity period of the certificate. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 365
   */
  validityDays?: number;
  static names(): { [key: string]: string } {
    return {
      CSR: 'CSR',
      pkeyType: 'PkeyType',
      siteId: 'SiteId',
      validityDays: 'ValidityDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CSR: 'string',
      pkeyType: 'string',
      siteId: 'number',
      validityDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

