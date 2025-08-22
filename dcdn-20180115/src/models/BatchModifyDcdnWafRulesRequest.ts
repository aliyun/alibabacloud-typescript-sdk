// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchModifyDcdnWafRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  policyId?: number;
  /**
   * @remarks
   * The configurations of the protection rule.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"id":135,"type":"web_sdk","status":"on","config":{"mode":"automatic","crossDomain":"example.com"},"action":""},{"id":149,"type":"intelligence_fake_crawler","status":"on","config":{},"action":"deny"}]
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

