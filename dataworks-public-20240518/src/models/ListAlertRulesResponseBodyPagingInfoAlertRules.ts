// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerCondition } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerCondition";


export class ListAlertRulesResponseBodyPagingInfoAlertRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 22125
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * error_test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * @example
   * 1933790683****
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   */
  triggerCondition?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerCondition;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      owner: 'Owner',
      triggerCondition: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      owner: 'string',
      triggerCondition: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerCondition,
    };
  }

  validate() {
    if(this.triggerCondition && typeof (this.triggerCondition as any).validate === 'function') {
      (this.triggerCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

