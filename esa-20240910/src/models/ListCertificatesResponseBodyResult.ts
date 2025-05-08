// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCertificatesResponseBodyResultDCV } from "./ListCertificatesResponseBodyResultDcv";


export class ListCertificatesResponseBodyResult extends $dara.Model {
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
   * The certificate ID on Certificate Management Service.
   * 
   * @example
   * 30000569
   */
  casId?: string;
  /**
   * @remarks
   * The Common Name of the certificate.
   * 
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2022-06-24 07:48:51
   */
  createTime?: string;
  /**
   * @remarks
   * The Domain Control Validation (DCV) information.
   */
  DCV?: ListCertificatesResponseBodyResultDCV[];
  /**
   * @remarks
   * The SHA-256 fingerprint of the certificate.
   * 
   * @example
   * 1dc5fc9af4eead2570c70d94b416130baeb6d4429b51fd3557379588456a****
   */
  fingerprintSha256?: string;
  /**
   * @remarks
   * The certificate ID on ESA.
   * 
   * @example
   * baba39055622c008b90285a8838e****
   */
  id?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @remarks
   * The Common Name of the certificate issuer.
   * 
   * @example
   * GlobalSign Organization Validation CA - SHA256 - G3
   */
  issuerCN?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * yourCertName
   */
  name?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2024-03-31 02:08:00
   */
  notAfter?: string;
  /**
   * @remarks
   * The time when the certificate takes effect.
   * 
   * @example
   * 2023-03-31 02:08:00
   */
  notBefore?: string;
  /**
   * @remarks
   * The public key algorithm of the certificate.
   * 
   * @example
   * RSA
   */
  pubAlg?: string;
  /**
   * @remarks
   * The region where the certificate is stored.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The Subject Alternative Name (SAN) of the certificate.
   * 
   * @example
   * www.example.com,*.example.com
   */
  SAN?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * babab022c5e9b27bf9c64d7f4b16****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate.
   * 
   * @example
   * SHA256-RSA
   */
  sigAlg?: string;
  /**
   * @remarks
   * The certificate status.
   * 
   * *   OK
   * *   Expired
   * *   Expiring
   * *   Issued
   * *   Applying
   * *   ApplyFailed
   * *   Canceled
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * *   cas: certificate that is purchased by using Certificate Management Service
   * *   upload: custom certificate that you upload
   * *   free: free certificate
   * 
   * @example
   * free
   */
  type?: string;
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 2023-04-20 06:18:42
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
      DCV: { 'type': 'array', 'itemType': ListCertificatesResponseBodyResultDCV },
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

