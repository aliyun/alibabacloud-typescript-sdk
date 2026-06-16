// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsResponseBodyDomainsFiling extends $dara.Model {
  /**
   * @remarks
   * The ICP filing number associated with the domain name. Both entity and website ICP filing numbers are supported.
   * 
   * @example
   * xICPxxxxxx-xx
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
  /**
   * @remarks
   * The brand ID.
   * 
   * @example
   * brand_xxxx
   */
  brandId?: string;
  /**
   * @remarks
   * The time when the domain name was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the domain name is the default one.
   * 
   * @example
   * false
   */
  defaultDomain?: boolean;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * - system_init: The default domain name that is generated during initialization.
   * 
   * - user_custom: A custom domain name.
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * The ICP filing information about the domain name.
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
   * The lock status of the domain name. Valid values:
   * 
   * - unlock: Normal.
   * 
   * - lockByLicense: The domain name is unavailable due to license limitations.
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The time when the domain name was last updated. This value is a UNIX timestamp. Unit: milliseconds.
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
   * The list of domain names.
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

