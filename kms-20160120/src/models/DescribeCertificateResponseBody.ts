// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the certificate.
   * 
   * @example
   * acs:kms:cn-hangzhou:159498693826****:certificate/9a28de48-8d8b-484d-a766-dec4****"
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2020-10-13T03:05:03Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether the private key of the certificate can be exported for use. Valid values:
   * 
   * *   true: The private key of the certificate can be exported for use. This is the default value.
   * *   false: The private key of the certificate cannot be exported for use.
   * 
   * @example
   * true
   */
  exportablePrivateKey?: boolean;
  /**
   * @remarks
   * The certificate issuer in the distinguished name (DN) format.
   * 
   * @example
   * CN=testCA,OU=kms,O=aliyun,C=CN
   */
  issuer?: string;
  /**
   * @remarks
   * The type of the key.
   * 
   * @example
   * RSA_2048
   */
  keySpec?: string;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 2022-10-13T03:09:00Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 2020-10-13T03:09:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * edb671a3-c5a1-4ebe-a1de-d748b640bdf2
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 12345678
   */
  serial?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate. Valid values:
   * 
   * *   RSA2048-SHA256
   * *   ECDSA-SHA256
   * *   SM2-SM3
   * 
   * @example
   * ECDSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   PENDING: The certificate is to be imported.
   * *   ACTIVE: The certificate is enabled.
   * *   INACTIVE: The certificate is disabled.
   * *   REVOKED: The certificate is revoked.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The subject of the certificate, which is in the DN format.
   * 
   * @example
   * CN=userName,OU=aliyun,O=aliyun,C=CN
   */
  subject?: string;
  /**
   * @remarks
   * The alias of the certificate subject.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   */
  subjectAlternativeNames?: string[];
  /**
   * @remarks
   * The public key identifier of the certificate subject.
   * 
   * @example
   * 79 36 26 DE 9F F5 15 E3 56 DC ****
   */
  subjectKeyIdentifier?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * -----BEGIN PUBLIC KEY----- MIIBIjA -----END PUBLIC KEY-----
   */
  subjectPublicKey?: string;
  /**
   * @remarks
   * The tag of the certificate.
   * 
   * @example
   * [{\\"TagKey\\":\\"S1key1\\",\\"TagValue\\":\\"S1val1\\"},{\\"TagKey\\":\\"S1key2\\",\\"TagValue\\":\\"S2val2\\"}]
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 2020-12-23T06:10:13Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      certificateId: 'CertificateId',
      createdAt: 'CreatedAt',
      exportablePrivateKey: 'ExportablePrivateKey',
      issuer: 'Issuer',
      keySpec: 'KeySpec',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      serial: 'Serial',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      subject: 'Subject',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      subjectKeyIdentifier: 'SubjectKeyIdentifier',
      subjectPublicKey: 'SubjectPublicKey',
      tags: 'Tags',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      certificateId: 'string',
      createdAt: 'string',
      exportablePrivateKey: 'boolean',
      issuer: 'string',
      keySpec: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
      serial: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      subject: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
      subjectKeyIdentifier: 'string',
      subjectPublicKey: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subjectAlternativeNames)) {
      $dara.Model.validateArray(this.subjectAlternativeNames);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

