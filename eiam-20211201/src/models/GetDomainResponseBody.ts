// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainResponseBodyDomainFiling extends $dara.Model {
  /**
   * @remarks
   * The ICP filing number that is associated with the domain name. The ICP filing number can be for an entity or a website.
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

export class GetDomainResponseBodyDomain extends $dara.Model {
  /**
   * @remarks
   * The ID of the brand.
   * 
   * @example
   * brand_xxxxx
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
   * Specifies whether the domain name is the default domain name.
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
   * login.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * - system_init: The initial domain name.
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
  filing?: GetDomainResponseBodyDomainFiling;
  /**
   * @remarks
   * The ID of the instance.
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
   * - lockByLicense: The domain name is unavailable due to license restrictions.
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
      filing: GetDomainResponseBodyDomainFiling,
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

export class GetDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name object.
   */
  domain?: GetDomainResponseBodyDomain;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: GetDomainResponseBodyDomain,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domain && typeof (this.domain as any).validate === 'function') {
      (this.domain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

