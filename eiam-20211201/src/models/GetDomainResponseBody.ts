// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainResponseBodyDomainFiling extends $dara.Model {
  /**
   * @remarks
   * <notice>The ICP filing number is only applicable for services in the China region.  For non-China regions, no validation or display of this record number will be performed.</notice>
   * The ICP filing number associated with the domain name, with a maximum length of 64 characters.
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
  brandId?: string;
  /**
   * @remarks
   * The start time when the change order was created.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * Whether it is the default domain.
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
   * login.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Domain ID.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **system_init**: Initialize domain
   * *   **user_custom**: user custom domain
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * Domain registration information.
   */
  filing?: GetDomainResponseBodyDomainFiling;
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
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is normal.
   * *   **lockByLicense**: Not available due to license restrictions.
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The time when the service was updated.
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
   * The domain name.
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

