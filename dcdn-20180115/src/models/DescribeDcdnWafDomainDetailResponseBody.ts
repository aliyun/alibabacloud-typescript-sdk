// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafDomainDetailResponseBodyDomainDefenseScenes extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy. Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: whitelist
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * @example
   * 10000002
   */
  policyId?: number;
  /**
   * @remarks
   * The IDs of the protection policy.
   * 
   * @example
   * 10000001,10000004
   */
  policyIds?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      policyId: 'PolicyId',
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      policyId: 'number',
      policyIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailResponseBodyDomain extends $dara.Model {
  /**
   * @remarks
   * The types of the protection policies.
   */
  defenseScenes?: DescribeDcdnWafDomainDetailResponseBodyDomainDefenseScenes[];
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: { 'type': 'array', 'itemType': DescribeDcdnWafDomainDetailResponseBodyDomainDefenseScenes },
      domainName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.defenseScenes)) {
      $dara.Model.validateArray(this.defenseScenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the accelerated domain name.
   */
  domain?: DescribeDcdnWafDomainDetailResponseBodyDomain;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 153ca2cd-3c01-44be-82C0-64dbc6c88630
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
      domain: DescribeDcdnWafDomainDetailResponseBodyDomain,
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

