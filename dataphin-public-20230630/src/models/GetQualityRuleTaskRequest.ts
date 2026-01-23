// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11
   */
  ruleTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      ruleTaskId: 'RuleTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      ruleTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

