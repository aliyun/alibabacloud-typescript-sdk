// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserCertificate extends $dara.Model {
  /**
   * @example
   * cert-aabbccdd
   */
  certId?: string;
  /**
   * @example
   * 用于测试
   */
  certificate?: string;
  /**
   * @example
   * xxxx
   */
  description?: string;
  dnsNames?: string[];
  /**
   * @example
   * 1734492686
   */
  expTimeUnix?: number;
  /**
   * @example
   * 1734523812
   */
  gmtCreateUnix?: number;
  /**
   * @example
   * 1734523812
   */
  gmtModifiedUnix?: number;
  /**
   * @example
   * 证书1
   */
  name?: string;
  /**
   * @example
   * xxxx
   */
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certificate: 'Certificate',
      description: 'Description',
      dnsNames: 'DnsNames',
      expTimeUnix: 'ExpTimeUnix',
      gmtCreateUnix: 'GmtCreateUnix',
      gmtModifiedUnix: 'GmtModifiedUnix',
      name: 'Name',
      privateKey: 'PrivateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certificate: 'string',
      description: 'string',
      dnsNames: { 'type': 'array', 'itemType': 'string' },
      expTimeUnix: 'number',
      gmtCreateUnix: 'number',
      gmtModifiedUnix: 'number',
      name: 'string',
      privateKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsNames)) {
      $dara.Model.validateArray(this.dnsNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

