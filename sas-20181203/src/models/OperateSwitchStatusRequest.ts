// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSwitchStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * >  You can call the ListContainerWebDefenseRule operation to query the IDs of rules.
   * 
   * This parameter is required.
   * 
   * @example
   * 900001
   */
  ruleId?: number;
  /**
   * @remarks
   * The status of the rule. Valid values: on and off.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

