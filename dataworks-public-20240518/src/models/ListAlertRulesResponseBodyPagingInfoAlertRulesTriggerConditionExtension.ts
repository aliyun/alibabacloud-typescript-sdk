// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinished } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinished";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionError } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionError";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorCount } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorCount";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorPercentage } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorPercentage";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceTransferFluctuate } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceTransferFluctuate";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionTimeout } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionTimeout";
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionUnFinished } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionUnFinished";


export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The configuration for an alert of the CycleUnfinished type.
   */
  cycleUnfinished?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The configuration for an alert of the Error type.
   */
  error?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionError;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorCount type.
   */
  instanceErrorCount?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorPercentage type.
   */
  instanceErrorPercentage?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The configuration for an alert of the InstanceTransferFluctuate type.
   */
  instanceTransferFluctuate?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The configuration for an alert of the Timeout type.
   */
  timeout?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The configuration for an alert of the UnFinished type.
   */
  unFinished?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionUnFinished;
  static names(): { [key: string]: string } {
    return {
      cycleUnfinished: 'CycleUnfinished',
      error: 'Error',
      instanceErrorCount: 'InstanceErrorCount',
      instanceErrorPercentage: 'InstanceErrorPercentage',
      instanceTransferFluctuate: 'InstanceTransferFluctuate',
      timeout: 'Timeout',
      unFinished: 'UnFinished',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleUnfinished: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinished,
      error: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionError,
      instanceErrorCount: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionTimeout,
      unFinished: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionUnFinished,
    };
  }

  validate() {
    if(this.cycleUnfinished && typeof (this.cycleUnfinished as any).validate === 'function') {
      (this.cycleUnfinished as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    if(this.instanceErrorCount && typeof (this.instanceErrorCount as any).validate === 'function') {
      (this.instanceErrorCount as any).validate();
    }
    if(this.instanceErrorPercentage && typeof (this.instanceErrorPercentage as any).validate === 'function') {
      (this.instanceErrorPercentage as any).validate();
    }
    if(this.instanceTransferFluctuate && typeof (this.instanceTransferFluctuate as any).validate === 'function') {
      (this.instanceTransferFluctuate as any).validate();
    }
    if(this.timeout && typeof (this.timeout as any).validate === 'function') {
      (this.timeout as any).validate();
    }
    if(this.unFinished && typeof (this.unFinished as any).validate === 'function') {
      (this.unFinished as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

