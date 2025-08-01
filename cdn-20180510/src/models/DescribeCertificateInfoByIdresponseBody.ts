// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo extends $dara.Model {
  /**
   * @remarks
   * The time at which the certificate expires.
   * 
   * @example
   * 2098-02-08 08:02:07 +0000 UTC
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 1644xx
   */
  certId?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * example_cert
   */
  certName?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * *   free: a free certificate
   * *   cas: a certificate purchased by using Certificate Management Service
   * *   upload: a user-uploaded certificate
   * 
   * @example
   * cas
   */
  certType?: string;
  /**
   * @remarks
   * The time when the certificate became effective.
   * 
   * @example
   * 2015-12-21 08:02:07 +0000 UTC
   */
  createTime?: string;
  /**
   * @remarks
   * The domain names that use the certificate.
   * 
   * @example
   * ["example.com"]
   */
  domainList?: string;
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nxxx-----END CERTIFICATE-----\\n
   */
  httpsCrt?: string;
  static names(): { [key: string]: string } {
    return {
      certExpireTime: 'CertExpireTime',
      certId: 'CertId',
      certName: 'CertName',
      certType: 'CertType',
      createTime: 'CreateTime',
      domainList: 'DomainList',
      httpsCrt: 'HttpsCrt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certExpireTime: 'string',
      certId: 'string',
      certName: 'string',
      certType: 'string',
      createTime: 'string',
      domainList: 'string',
      httpsCrt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo },
    };
  }

  validate() {
    if(Array.isArray(this.certInfo)) {
      $dara.Model.validateArray(this.certInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateInfoByIDResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeCertificateInfoByIDResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C1E43DC-9E51-4771-82C0-7D5ECEB547A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeCertificateInfoByIDResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certInfos && typeof (this.certInfos as any).validate === 'function') {
      (this.certInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

