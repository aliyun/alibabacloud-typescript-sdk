// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCertificateResponseBodyResultDCV } from "./GetCertificateResponseBodyResultDcv";


export class GetCertificateResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The error code returned for certificate application.
   * 
   * @example
   * 2
   */
  applyCode?: number;
  /**
   * @remarks
   * The error message returned for certificate application.
   * 
   * @example
   * canceled
   */
  applyMessage?: string;
  /**
   * @remarks
   * Cloud certificate ID.
   * 
   * @example
   * 30000478
   */
  casId?: string;
  /**
   * @remarks
   * Common Name (CN) field of the certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2020-05-12 02:00:53
   */
  createTime?: string;
  /**
   * @remarks
   * The Domain Control Validation (DCV) information.
   */
  DCV?: GetCertificateResponseBodyResultDCV[];
  /**
   * @remarks
   * SHA256 fingerprint of the certificate.
   * 
   * @example
   * 1dc5fc9af4eead2570c70d94b416130baeb6d4429b51fd3557379588456aca66
   */
  fingerprintSha256?: string;
  /**
   * @remarks
   * Certificate ID.
   * 
   * @example
   * babaded901474b9693acf530e0fb1d95
   */
  id?: string;
  /**
   * @remarks
   * Certificate issuer.
   * 
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @remarks
   * Certificate issuing authority.
   * 
   * @example
   * DigiCert Global Root CA
   */
  issuerCN?: string;
  /**
   * @remarks
   * Certificate name.
   * 
   * @example
   * yourCertName
   */
  name?: string;
  /**
   * @remarks
   * End time of the certificate validity period.
   * 
   * @example
   * 2023-11-26T16:00:00Z
   */
  notAfter?: string;
  /**
   * @remarks
   * Start time of the certificate validity period.
   * 
   * @example
   * 2023-11-26T16:00:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * Certificate public key algorithm.
   * 
   * @example
   * ECDSA
   */
  pubAlg?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Subject Alternative Name (SAN) of the certificate.
   * 
   * @example
   * www.example.com,*.example.com
   */
  SAN?: string;
  /**
   * @remarks
   * Serial number of the certificate.
   * 
   * @example
   * babaded901474b9693acf530e0fb1daa
   */
  serialNumber?: string;
  /**
   * @remarks
   * Certificate signature algorithm.
   * 
   * @example
   * ECDSA-SHA1
   */
  sigAlg?: string;
  /**
   * @remarks
   * Certificate status.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * Certificate type.
   * 
   * @example
   * free
   */
  type?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2022-09-22 05:33:13
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      applyCode: 'ApplyCode',
      applyMessage: 'ApplyMessage',
      casId: 'CasId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      DCV: 'DCV',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      issuerCN: 'IssuerCN',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubAlg: 'PubAlg',
      region: 'Region',
      SAN: 'SAN',
      serialNumber: 'SerialNumber',
      sigAlg: 'SigAlg',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyCode: 'number',
      applyMessage: 'string',
      casId: 'string',
      commonName: 'string',
      createTime: 'string',
      DCV: { 'type': 'array', 'itemType': GetCertificateResponseBodyResultDCV },
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      issuerCN: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubAlg: 'string',
      region: 'string',
      SAN: 'string',
      serialNumber: 'string',
      sigAlg: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DCV)) {
      $dara.Model.validateArray(this.DCV);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

