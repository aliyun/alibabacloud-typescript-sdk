// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCertificateDetailResponseBodyCertChain extends $dara.Model {
  /**
   * @remarks
   * The common name in the certificate chain.
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
   * The end time of the certificate chain validity period.
   * 
   * @example
   * 17352613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The start time of the certificate chain validity period.
   * 
   * @example
   * 17322633180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The remaining days of the certificate chain validity period.
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
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
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  buyInAliyun?: boolean;
  /**
   * @remarks
   * The certificate content that uses a non-Chinese cryptographic algorithm. This field is returned when the CertFilter request parameter is set to false, and is not returned when set to true.
   * 
   * @example
   * ---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * The certificate chain information.
   */
  certChain?: GetUserCertificateDetailResponseBodyCertChain[];
  /**
   * @remarks
   * The certificate ID appended with "-cn-hangzhou". For example, if the certificate ID is 123, the CertIdentifier is "123-cn-hangzhou".
   * 
   * @example
   * 13781326-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @example
   * E696C2DB574DF99467A90BEF62B341294A9B0C731D228A0BD38265E1467D8EF0
   */
  certSha2?: string;
  /**
   * @remarks
   * The city where the company or organization of the certificate purchaser is located.
   * 
   * @example
   * hangzhou
   */
  city?: string;
  /**
   * @remarks
   * The primary domain name bound to the certificate.
   * 
   * @example
   * *.com
   */
  common?: string;
  /**
   * @remarks
   * The country where the company or organization of the certificate purchaser is located.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The encryption certificate content in PEM format that uses a Chinese cryptographic algorithm. This field is returned when the CertFilter request parameter is set to false, and is not returned when set to true.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCA***
   * -----END CERTIFICATE-----
   */
  encryptCert?: string;
  /**
   * @remarks
   * The private key of the encryption certificate in PEM format that uses a Chinese cryptographic algorithm. This field is returned when the CertFilter request parameter is set to false, and is not returned when set to true.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEI****
   * -----END EC PRIVATE KEY-----
   */
  encryptPrivateKey?: string;
  /**
   * @remarks
   * The certificate expiration date, in the format of YYYY-MM-DD.
   * 
   * @example
   * 2023-10-25
   */
  endDate?: string;
  /**
   * @remarks
   * Indicates whether the certificate has expired. Valid values:
   * - **true**: The certificate has expired.
   * - **false**: The certificate has not expired.
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The certificate fingerprint.
   * 
   * @example
   * 1D7801BBE772D5DE55CBF1F88AEB41A42402DA07
   */
  fingerprint?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 121345
   */
  id?: number;
  /**
   * @remarks
   * The resource instance ID.
   * 
   * @example
   * cas-ivauto-hqito6
   */
  instanceId?: string;
  /**
   * @remarks
   * The certification authority.
   * 
   * @example
   * Digicert
   */
  issuer?: string;
  /**
   * @remarks
   * The private key that uses a non-Chinese cryptographic algorithm. This field is returned when the CertFilter request parameter is set to false, and is not returned when set to true.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * cert_name
   */
  name?: string;
  /**
   * @remarks
   * The end time of the certificate validity period.
   * 
   * @example
   * 17326613180000
   */
  notAfter?: number;
  /**
   * @remarks
   * The start time of the certificate validity period.
   * 
   * @example
   * 17321613180000
   */
  notBefore?: number;
  /**
   * @remarks
   * The ID of the certificate application order.
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
   * The province where the company or organization of the certificate purchaser is located.
   * 
   * @example
   * zhejiang
   */
  province?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * All domain names bound to the certificate.
   * 
   * @example
   * *.com
   */
  sans?: string;
  /**
   * @remarks
   * The certificate serial number.
   * 
   * @example
   * 033cd852608689ef5e368fde89e0961769e8
   */
  serialNo?: string;
  /**
   * @remarks
   * The SHA-2 value of the certificate.
   * 
   * @example
   * 573415B23243066AD345AE5A57BD0FAE94F598BDD06D906278B5FF318F090FC8
   */
  sha2?: string;
  /**
   * @remarks
   * The signing certificate content in PEM format that uses a Chinese cryptographic algorithm. This field is returned when the CertFilter request parameter is set to false, and is not returned when set to true.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIICDzCCAbagAw****
   * -----END CERTIFICATE-----
   */
  signCert?: string;
  /**
   * @remarks
   * The private key of the signing certificate in PEM format that uses a Chinese cryptographic algorithm. This field is returned when the CertFilter request parameter is set to false, and is not returned when set to true.
   * 
   * @example
   * -----BEGIN EC PRIVATE KEY-----
   * MHcCAQEEILR****
   * -----END EC PRIVATE KEY-----
   */
  signPrivateKey?: string;
  /**
   * @remarks
   * The certificate issuance date, in the format of YYYY-MM-DD.
   * 
   * @example
   * 2018-07-13
   */
  startDate?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: GetUserCertificateDetailResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      buyInAliyun: 'BuyInAliyun',
      cert: 'Cert',
      certChain: 'CertChain',
      certIdentifier: 'CertIdentifier',
      certSha2: 'CertSha2',
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
      certSha2: 'string',
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

