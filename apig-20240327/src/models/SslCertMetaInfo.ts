// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SslCertMetaInfo extends $dara.Model {
  algorithm?: string;
  certId?: number;
  certIdentifier?: string;
  certName?: string;
  commonName?: string;
  domain?: string;
  domainMatchCert?: boolean;
  fingerprint?: string;
  instanceId?: string;
  isChainCompleted?: boolean;
  issuer?: string;
  keySize?: string;
  md5?: string;
  notAfterTimestamp?: number;
  notBeforeTimestamp?: number;
  sans?: string;
  serialNo?: string;
  sha2?: string;
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

