// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainByDomainNameResponseBodyDnsList extends $dara.Model {
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

export class QueryDomainByDomainNameResponseBody extends $dara.Model {
  dnsList?: QueryDomainByDomainNameResponseBodyDnsList;
  domainName?: string;
  domainNameProxyService?: boolean;
  domainNameVerificationStatus?: string;
  email?: string;
  emailVerificationClientHold?: boolean;
  emailVerificationStatus?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  instanceId?: string;
  premium?: boolean;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrantUpdatingStatus?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  requestId?: string;
  transferOutStatus?: string;
  transferProhibitionLock?: string;
  updateProhibitionLock?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainName: 'DomainName',
      domainNameProxyService: 'DomainNameProxyService',
      domainNameVerificationStatus: 'DomainNameVerificationStatus',
      email: 'Email',
      emailVerificationClientHold: 'EmailVerificationClientHold',
      emailVerificationStatus: 'EmailVerificationStatus',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      instanceId: 'InstanceId',
      premium: 'Premium',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrantUpdatingStatus: 'RegistrantUpdatingStatus',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      requestId: 'RequestId',
      transferOutStatus: 'TransferOutStatus',
      transferProhibitionLock: 'TransferProhibitionLock',
      updateProhibitionLock: 'UpdateProhibitionLock',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: QueryDomainByDomainNameResponseBodyDnsList,
      domainName: 'string',
      domainNameProxyService: 'boolean',
      domainNameVerificationStatus: 'string',
      email: 'string',
      emailVerificationClientHold: 'boolean',
      emailVerificationStatus: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      instanceId: 'string',
      premium: 'boolean',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrantUpdatingStatus: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      requestId: 'string',
      transferOutStatus: 'string',
      transferProhibitionLock: 'string',
      updateProhibitionLock: 'string',
      userId: 'string',
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

