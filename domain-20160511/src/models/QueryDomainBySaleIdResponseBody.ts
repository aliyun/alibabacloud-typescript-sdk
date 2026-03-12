// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainBySaleIdResponseBodyDnsList extends $dara.Model {
  dns?: string[];
  static names(): { [key: string]: string } {
    return {
      dns: 'Dns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dns: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dns)) {
      $dara.Model.validateArray(this.dns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDomainBySaleIdResponseBody extends $dara.Model {
  chineseContactPerson?: string;
  chineseHolder?: string;
  creationDate?: string;
  dnsList?: QueryDomainBySaleIdResponseBodyDnsList;
  domainName?: string;
  domainRegType?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  englishContactPerson?: string;
  englishHolder?: string;
  expirationDate?: string;
  holderEmail?: string;
  premium?: boolean;
  remark?: string;
  safetyLock?: string;
  saleId?: string;
  transferLock?: string;
  transferOutStatus?: string;
  userId?: string;
  whoisProtected?: boolean;
  static names(): { [key: string]: string } {
    return {
      chineseContactPerson: 'ChineseContactPerson',
      chineseHolder: 'ChineseHolder',
      creationDate: 'CreationDate',
      dnsList: 'DnsList',
      domainName: 'DomainName',
      domainRegType: 'DomainRegType',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      englishContactPerson: 'EnglishContactPerson',
      englishHolder: 'EnglishHolder',
      expirationDate: 'ExpirationDate',
      holderEmail: 'HolderEmail',
      premium: 'Premium',
      remark: 'Remark',
      safetyLock: 'SafetyLock',
      saleId: 'SaleId',
      transferLock: 'TransferLock',
      transferOutStatus: 'TransferOutStatus',
      userId: 'UserId',
      whoisProtected: 'WhoisProtected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseContactPerson: 'string',
      chineseHolder: 'string',
      creationDate: 'string',
      dnsList: QueryDomainBySaleIdResponseBodyDnsList,
      domainName: 'string',
      domainRegType: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      englishContactPerson: 'string',
      englishHolder: 'string',
      expirationDate: 'string',
      holderEmail: 'string',
      premium: 'boolean',
      remark: 'string',
      safetyLock: 'string',
      saleId: 'string',
      transferLock: 'string',
      transferOutStatus: 'string',
      userId: 'string',
      whoisProtected: 'boolean',
    };
  }

  validate() {
    if(this.dnsList && typeof (this.dnsList as any).validate === 'function') {
      (this.dnsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

