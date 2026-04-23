// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScrollDomainListResponseBodyDataDomainDnsList extends $dara.Model {
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

export class ScrollDomainListResponseBodyDataDomainTagTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyDataDomainTag extends $dara.Model {
  tag?: ScrollDomainListResponseBodyDataDomainTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ScrollDomainListResponseBodyDataDomainTagTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyDataDomain extends $dara.Model {
  dnsList?: ScrollDomainListResponseBodyDataDomainDnsList;
  domainAuditStatus?: string;
  domainGroupId?: string;
  domainGroupName?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  email?: string;
  expirationCurrDateDiff?: number;
  expirationDate?: string;
  expirationDateLong?: number;
  expirationDateStatus?: string;
  instanceId?: string;
  premium?: boolean;
  productId?: string;
  registrantOrganization?: string;
  registrantType?: string;
  registrationDate?: string;
  registrationDateLong?: number;
  remark?: string;
  resourceGroupId?: string;
  tag?: ScrollDomainListResponseBodyDataDomainTag;
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      dnsList: 'DnsList',
      domainAuditStatus: 'DomainAuditStatus',
      domainGroupId: 'DomainGroupId',
      domainGroupName: 'DomainGroupName',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      email: 'Email',
      expirationCurrDateDiff: 'ExpirationCurrDateDiff',
      expirationDate: 'ExpirationDate',
      expirationDateLong: 'ExpirationDateLong',
      expirationDateStatus: 'ExpirationDateStatus',
      instanceId: 'InstanceId',
      premium: 'Premium',
      productId: 'ProductId',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      registrationDate: 'RegistrationDate',
      registrationDateLong: 'RegistrationDateLong',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsList: ScrollDomainListResponseBodyDataDomainDnsList,
      domainAuditStatus: 'string',
      domainGroupId: 'string',
      domainGroupName: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      email: 'string',
      expirationCurrDateDiff: 'number',
      expirationDate: 'string',
      expirationDateLong: 'number',
      expirationDateStatus: 'string',
      instanceId: 'string',
      premium: 'boolean',
      productId: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      registrationDate: 'string',
      registrationDateLong: 'number',
      remark: 'string',
      resourceGroupId: 'string',
      tag: ScrollDomainListResponseBodyDataDomainTag,
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    if(this.dnsList && typeof (this.dnsList as any).validate === 'function') {
      (this.dnsList as any).validate();
    }
    if(this.tag && typeof (this.tag as any).validate === 'function') {
      (this.tag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBodyData extends $dara.Model {
  domain?: ScrollDomainListResponseBodyDataDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': ScrollDomainListResponseBodyDataDomain },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScrollDomainListResponseBody extends $dara.Model {
  data?: ScrollDomainListResponseBodyData;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 722AB7F5-61F0-408C-A012-4784AFD34083
   */
  requestId?: string;
  /**
   * @remarks
   * The scroll ID.
   * 
   * @example
   * test
   */
  scrollId?: string;
  /**
   * @remarks
   * The number of remaining domain names to be queried.
   * 
   * @example
   * 200
   */
  totalItemNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scrollId: 'ScrollId',
      totalItemNum: 'TotalItemNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScrollDomainListResponseBodyData,
      pageSize: 'number',
      requestId: 'string',
      scrollId: 'string',
      totalItemNum: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

