// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCertificateDetailResponseBodyCertChain extends $dara.Model {
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * test
   */
  commonName?: string;
  /**
   * @remarks
   * The common name of the issuer.
   * 
   * @example
   * Encryption Everywhere DV TLS CA - G2
   */
  issuerCommonName?: string;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 17322613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 17302633180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The remaining days of the certificate validity period.
   * 
   * @example
   * 1000
   */
  remainDay?: number;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      issuerCommonName: 'IssuerCommonName',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      remainDay: 'RemainDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      issuerCommonName: 'string',
      notAfter: 'number',
      notBefore: 'number',
      remainDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponseBodyTags extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserCertificateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * RSA
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether the certificate was purchased from Alibaba Cloud. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  buyInAliyun?: boolean;
  /**
   * @remarks
   * The content of the certificate if the certificate does not use an SM algorithm. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * ---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The certificate chain.
   */
  certChain?: GetUserCertificateDetailResponseBodyCertChain[];
  /**
   * @remarks
   * The certificate identifier. The value is in the "Certificate ID-cn-hangzhou" format. For example, if the ID of the certificate is 123, the value of CertIdentifier is 123-cn-hangzhou.
   * 
   * @example
   * 10741304-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The city of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The primary domain name that is bound to the certificate.
   * 
   * @example
   * *.com
   */
  common?: string;
  /**
   * @remarks
   * The country or region of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The content of the encryption certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCA***
   * -----END CERTIFICATE-----
   */
  encryptCert?: string;
  /**
   * @remarks
   * The private key of the encryption certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEI****
   * -----END EC PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * The expiration date of the certificate.
   * 
   * @example
   * 2023-10-25
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the certificate has expired. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The fingerprint of the certificate.
   * 
   * @example
   * 1D7801BBE772D5DE55CBF1F88AEB41A42402DA07
   */
  fingerprint?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 121345
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the resource.
   * 
   * @example
   * cas-upload-50yf1q
   */
  instanceId?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The private key of the certificate if the certificate does not use an SM algorithm. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * cert_name
   */
  name?: string;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 17322613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 17312613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 123456
   */
  orderId?: number;
  /**
   * @remarks
   * The name of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * Alibaba
   */
  orgName?: string;
  /**
   * @remarks
   * The province of the company or organization to which the certificate purchaser belongs.
   * 
   * @example
   * zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * All domain names that are bound to the certificate.
   * 
   * @example
   * *.com
   */
  sans?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 06ea4879591ddf84e6c8b6ba43607ccf
   */
  serialNo?: string;
  /**
   * @remarks
   * The SHA-2 value of the certificate.
   * 
   * @example
   * 840707695D5EE41323102DDC2CB4924AA561012FBDC4E1A6324147119ED3C339
   */
  sha2?: string;
  /**
   * @remarks
   * The content of the signing certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw****
   * -----END CERTIFICATE-----
   */
  signCert?: string;
  /**
   * @remarks
   * The private key of the signing certificate if the certificate uses an SM algorithm and is encoded in the PEM format. If certFilter is set to false, this parameter is returned. Otherwise, this parameter is not returned.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEILR****
   * -----END EC PRIVATE KEY-----
   */
  signPrivateKey?: string;
  /**
   * @remarks
   * The issuance date of the certificate.
   * 
   * @example
   * 2018-07-13
   */
  startDate?: string;
  tags?: GetUserCertificateDetailResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      buyInAliyun: 'BuyInAliyun',
      cert: 'Cert',
      certChain: 'CertChain',
      certIdentifier: 'CertIdentifier',
      city: 'City',
      common: 'Common',
      country: 'Country',
      encryptCert: 'EncryptCert',
      encryptPrivateKey: 'EncryptPrivateKey',
      endDate: 'EndDate',
      expired: 'Expired',
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      issuer: 'Issuer',
      key: 'Key',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      orderId: 'OrderId',
      orgName: 'OrgName',
      province: 'Province',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      sans: 'Sans',
      serialNo: 'SerialNo',
      sha2: 'Sha2',
      signCert: 'SignCert',
      signPrivateKey: 'SignPrivateKey',
      startDate: 'StartDate',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      buyInAliyun: 'boolean',
      cert: 'string',
      certChain: { 'type': 'array', 'itemType': GetUserCertificateDetailResponseBodyCertChain },
      certIdentifier: 'string',
      city: 'string',
      common: 'string',
      country: 'string',
      encryptCert: 'string',
      encryptPrivateKey: 'string',
      endDate: 'string',
      expired: 'boolean',
      fingerprint: 'string',
      id: 'number',
      instanceId: 'string',
      issuer: 'string',
      key: 'string',
      name: 'string',
      notAfter: 'number',
      notBefore: 'number',
      orderId: 'number',
      orgName: 'string',
      province: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signCert: 'string',
      signPrivateKey: 'string',
      startDate: 'string',
      tags: { 'type': 'array', 'itemType': GetUserCertificateDetailResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.certChain)) {
      $dara.Model.validateArray(this.certChain);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

