// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished";
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError";
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount";
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage";
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate";
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout";
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished";


export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The configuration for an alert of the CycleUnfinished type.
   */
  cycleUnfinished?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The configuration for an alert of the Error type.
   */
  error?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorCount type.
   */
  instanceErrorCount?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorPercentage type.
   */
  instanceErrorPercentage?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The configuration for an alert of the InstanceTransferFluctuate type.
   */
  instanceTransferFluctuate?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The configuration for an alert of the Timeout type.
   */
  timeout?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The configuration for an alert of the UnFinished type.
   */
  unFinished?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished;
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
      cycleUnfinished: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished,
      error: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionError,
      instanceErrorCount: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionTimeout,
      unFinished: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionUnFinished,
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

