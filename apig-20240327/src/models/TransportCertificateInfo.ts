// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransportCertificateInfo extends $dara.Model {
  algorithm?: string;
  certIdentifier?: string;
  certName?: string;
  certificateMatchStatus?: string;
  commonName?: string;
  coveredDomains?: string[];
  issuer?: string;
  matchedDomains?: string[];
  notAfterTimestamp?: number;
  notBeforeTimestamp?: number;
  sans?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      certIdentifier: 'certIdentifier',
      certName: 'certName',
      certificateMatchStatus: 'certificateMatchStatus',
      commonName: 'commonName',
      coveredDomains: 'coveredDomains',
      issuer: 'issuer',
      matchedDomains: 'matchedDomains',
      notAfterTimestamp: 'notAfterTimestamp',
      notBeforeTimestamp: 'notBeforeTimestamp',
      sans: 'sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certIdentifier: 'string',
      certName: 'string',
      certificateMatchStatus: 'string',
      commonName: 'string',
      coveredDomains: { 'type': 'array', 'itemType': 'string' },
      issuer: 'string',
      matchedDomains: { 'type': 'array', 'itemType': 'string' },
      notAfterTimestamp: 'number',
      notBeforeTimestamp: 'number',
      sans: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coveredDomains)) {
      $dara.Model.validateArray(this.coveredDomains);
    }
    if(Array.isArray(this.matchedDomains)) {
      $dara.Model.validateArray(this.matchedDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

