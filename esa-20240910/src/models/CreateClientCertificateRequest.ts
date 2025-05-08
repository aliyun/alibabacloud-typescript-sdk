// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate signing request (CSR).
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   */
  CSR?: string;
  /**
   * @remarks
   * The type of the private key algorithm.
   * 
   * @example
   * RSA
   */
  pkeyType?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The validity period of the certificate. Unit: day.
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

