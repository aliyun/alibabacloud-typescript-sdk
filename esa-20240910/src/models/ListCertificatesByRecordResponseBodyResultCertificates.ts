// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordResponseBodyResultCertificates extends $dara.Model {
  /**
   * @example
   * 30000137
   */
  casId?: string;
  /**
   * @example
   * www.example.com
   */
  commonName?: string;
  /**
   * @example
   * 2023-02-28 06:17:11
   */
  createTime?: string;
  /**
   * @example
   * 1dc5fc9af4eead2570c70d94b416130baeb6d4429b51fd3557379588456aca66
   */
  fingerprintSha256?: string;
  id?: string;
  /**
   * @example
   * GlobalSign nv-sa
   */
  issuer?: string;
  /**
   * @example
   * GlobalSign Organization Validation CA - SHA256 - G3
   */
  issuerCN?: string;
  name?: string;
  /**
   * @example
   * 2024-02-28 06:17:11
   */
  notAfter?: string;
  /**
   * @example
   * 2023-02-28 06:17:11
   */
  notBefore?: string;
  /**
   * @example
   * RSA
   */
  pubAlg?: string;
  region?: string;
  /**
   * @example
   * www.example.com,*.example.com
   */
  SAN?: string;
  /**
   * @example
   * baba39055622c008b90285a8838ed09a
   */
  serialNumber?: string;
  /**
   * @example
   * SHA256-RSA
   */
  sigAlg?: string;
  status?: string;
  /**
   * @example
   * free
   */
  type?: string;
  /**
   * @example
   * 2023-02-28 06:17:11
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      casId: 'CasId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
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
      casId: 'string',
      commonName: 'string',
      createTime: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

