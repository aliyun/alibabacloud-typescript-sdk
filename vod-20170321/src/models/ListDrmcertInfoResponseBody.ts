// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDRMCertInfoResponseBodyDRMCertInfoList extends $dara.Model {
  ask?: string;
  certId?: string;
  certName?: string;
  creationTime?: string;
  DRMType?: string;
  description?: string;
  passPhrase?: string;
  privateKey?: string;
  servCert?: string;
  static names(): { [key: string]: string } {
    return {
      ask: 'Ask',
      certId: 'CertId',
      certName: 'CertName',
      creationTime: 'CreationTime',
      DRMType: 'DRMType',
      description: 'Description',
      passPhrase: 'PassPhrase',
      privateKey: 'PrivateKey',
      servCert: 'ServCert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ask: 'string',
      certId: 'string',
      certName: 'string',
      creationTime: 'string',
      DRMType: 'string',
      description: 'string',
      passPhrase: 'string',
      privateKey: 'string',
      servCert: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDRMCertInfoResponseBody extends $dara.Model {
  DRMCertInfoList?: ListDRMCertInfoResponseBodyDRMCertInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DRMCertInfoList: 'DRMCertInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DRMCertInfoList: { 'type': 'array', 'itemType': ListDRMCertInfoResponseBodyDRMCertInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DRMCertInfoList)) {
      $dara.Model.validateArray(this.DRMCertInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

