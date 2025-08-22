// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateDcdnWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  policyId?: number;
  /**
   * @remarks
   * The configuration of the protection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * {"name":"ttttt","action":"monitor","conditions":[{"key":"URL","opValue":"match-one","values":"1,2,3,4,5"},{"key":"Header","opValue":"contain-one","subKey":"testheader","values":"6,7,8,9,10"}],"ratelimit":{"target":"header","interval":10,"threshold":5,"ttl":1800,"subKey":"testheadercc","status":{"code":"502","count":5}},"ccStatus":"on","effect":"rule","status":"on"}
   */
  ruleConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      ruleConfigs: 'RuleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      ruleConfigs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

