// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafScenesResponseBodyDefenseScenes extends $dara.Model {
  /**
   * @remarks
   * The type of the protection policy, which is the same as the DefenseScenes parameter in request parameters.
   * 
   * @example
   * waf_group
   */
  defenseScene?: string;
  /**
   * @remarks
   * The total number of policies of this type that were configured.
   * 
   * @example
   * 10
   */
  policyCount?: number;
  /**
   * @remarks
   * The total number of protection rules that were configured in this type of the policy.
   * 
   * @example
   * 12
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      policyCount: 'PolicyCount',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      policyCount: 'number',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The types of the protection policies.
   */
  defenseScenes?: DescribeDcdnWafScenesResponseBodyDefenseScenes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D7BB13C-DD84-5654-A835-B8E1385DE274
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseScenes: 'DefenseScenes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScenes: { 'type': 'array', 'itemType': DescribeDcdnWafScenesResponseBodyDefenseScenes },
      requestId: 'string',
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

