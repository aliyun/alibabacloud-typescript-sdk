// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtension } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtension";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionTarget } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionTarget";


export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerCondition extends $dara.Model {
  /**
   * @remarks
   * The extended information about the rule. This parameter is required for specific types of alerts.
   */
  extension?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtension;
  /**
   * @remarks
   * The monitored objects.
   */
  target?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionTarget;
  /**
   * @remarks
   * The alert type. Valid values:
   * 
   * *   Finished: An instance is successfully run.
   * *   UnFinished: An instance does not finish running before a specified point in time.
   * *   Error: An error occurs on an instance.
   * *   CycleUnfinished: An instance does not finish running as expected within a specific cycle.
   * *   Timeout: An instance times out.
   * *   InstanceTransferComplete: An instance is generated by the auto triggered node.
   * *   InstanceTransferFluctuate: The number of generated instances fluctuates.
   * *   ExhaustedError: An error persists after an instance is automatically rerun.
   * *   InstanceKeyword: An instance with errors contains specified keywords.
   * *   InstanceErrorCount: The number of instances on which an error occurs reaches a specified threshold.
   * *   InstanceErrorPercentage: The proportion of instances on which an error occurs in the workspace to the total number of instances reaches a specified threshold.
   * *   ResourceGroupPercentage: The usage rate of the resource group reaches a specified threshold.
   * *   ResourceGroupWaitCount: The number of instances that are waiting for resources in the resource group reaches a specified threshold.
   * 
   * @example
   * Error
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtension,
      target: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionTarget,
      type: 'string',
    };
  }

  validate() {
    if(this.extension && typeof (this.extension as any).validate === 'function') {
      (this.extension as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

