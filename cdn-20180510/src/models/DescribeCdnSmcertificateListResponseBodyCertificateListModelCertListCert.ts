// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * yourCertldentifier
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * yourCertCommon
   */
  common?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * yourCertIssuer
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      common: 'Common',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      certName: 'string',
      common: 'string',
      issuer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

