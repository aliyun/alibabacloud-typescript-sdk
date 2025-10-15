// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsResponseBodyDomainsFiling extends $dara.Model {
  /**
   * @remarks
   * The ICP number associated with the domain name. Both the entity ICP number and website ICP number are supported.
   * 
   * @example
   * Zhexx-xxxxxx
   */
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomains extends $dara.Model {
  brandId?: string;
  /**
   * @remarks
   * The time when the domain name was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the domain name is the default domain.
   * 
   * @example
   * false
   */
  defaultDomain?: boolean;
  /**
   * @remarks
   * The domain.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   system_init: an initial domain name.
   * *   user_custom: a custom domain name.
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * The information about the Internet content provider (ICP) filing of the domain name.
   */
  filing?: ListDomainsResponseBodyDomainsFiling;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the domain name is locked. Valid values:
   * 
   * *   unlock
   * *   lockByLicense
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The time when the domain name was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      brandId: 'BrandId',
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      domain: 'Domain',
      domainId: 'DomainId',
      domainType: 'DomainType',
      filing: 'Filing',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brandId: 'string',
      createTime: 'number',
      defaultDomain: 'boolean',
      domain: 'string',
      domainId: 'string',
      domainType: 'string',
      filing: ListDomainsResponseBodyDomainsFiling,
      instanceId: 'string',
      lockMode: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.filing && typeof (this.filing as any).validate === 'function') {
      (this.filing as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the domain names.
   */
  domains?: ListDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomains },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

