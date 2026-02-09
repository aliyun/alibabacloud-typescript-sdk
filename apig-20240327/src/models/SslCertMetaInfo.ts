// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SslCertMetaInfo extends $dara.Model {
  /**
   * @remarks
   * The algorithm.
   * 
   * @example
   * RSA2048
   */
  algorithm?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 1234567890
   */
  certId?: number;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * cert-123
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * example.com
   */
  certName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * api.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The certificate matching the domain name.
   * 
   * @example
   * true
   */
  domainMatchCert?: boolean;
  /**
   * @remarks
   * The certificate fingerprint.
   * 
   * @example
   * A1:B2:C3:D4:E5:F6:78:90:AB:CD:EF:12:34:56:78:90
   */
  fingerprint?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1234567890
   */
  instanceId?: string;
  /**
   * @remarks
   * isChainCompleted
   * 
   * @example
   * true
   */
  isChainCompleted?: boolean;
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * DigiCert Inc
   */
  issuer?: string;
  /**
   * @remarks
   * The key size.
   * 
   * @example
   * 2048
   */
  keySize?: string;
  /**
   * @remarks
   * The md5 value.
   * 
   * @example
   * A1B2C3D4E5F67890ABCDEF1234567890
   */
  md5?: string;
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 1234567890000
   */
  notAfterTimestamp?: number;
  /**
   * @remarks
   * The time when the certificate starts to take effect.
   * 
   * @example
   * 1234567890000
   */
  notBeforeTimestamp?: number;
  /**
   * @remarks
   * sans
   * 
   * @example
   * *.example.com,api.example.com,www.example.com
   */
  sans?: string;
  /**
   * @remarks
   * The serial number.
   * 
   * @example
   * 03:A1:B2:C3:D4:E5:F6:78:90:AB:CD:EF:12:34:56:78:90
   */
  serialNo?: string;
  /**
   * @remarks
   * The sha2 value.
   * 
   * @example
   * A1B2C3D4E5F67890ABCDEF1234567890ABCDEF1234567890ABCDEF1234567890
   */
  sha2?: string;
  /**
   * @remarks
   * The signature algorithm.
   * 
   * @example
   * sha256WithRSAEncryption
   */
  signAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      certId: 'certId',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      commonName: 'commonName',
      domain: 'domain',
      domainMatchCert: 'domainMatchCert',
      fingerprint: 'fingerprint',
      instanceId: 'instanceId',
      isChainCompleted: 'isChainCompleted',
      issuer: 'issuer',
      keySize: 'keySize',
      md5: 'md5',
      notAfterTimestamp: 'notAfterTimestamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      sans: 'sans',
      serialNo: 'serialNo',
      sha2: 'sha2',
      signAlgorithm: 'signAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certId: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      domainMatchCert: 'boolean',
      fingerprint: 'string',
      instanceId: 'string',
      isChainCompleted: 'boolean',
      issuer: 'string',
      keySize: 'string',
      md5: 'string',
      notAfterTimestamp: 'number',
      notBeforeTimestamp: 'number',
      sans: 'string',
      serialNo: 'string',
      sha2: 'string',
      signAlgorithm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

