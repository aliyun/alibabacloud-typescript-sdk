// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished } from "./CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished";
import { CreateAlertRuleRequestTriggerConditionExtensionError } from "./CreateAlertRuleRequestTriggerConditionExtensionError";
import { CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount } from "./CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount";
import { CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage } from "./CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage";
import { CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate } from "./CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate";
import { CreateAlertRuleRequestTriggerConditionExtensionTimeout } from "./CreateAlertRuleRequestTriggerConditionExtensionTimeout";
import { CreateAlertRuleRequestTriggerConditionExtensionUnFinished } from "./CreateAlertRuleRequestTriggerConditionExtensionUnFinished";


export class CreateAlertRuleRequestTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The configuration for an alert of the CycleUnfinished type.
   */
  cycleUnfinished?: CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The configuration for an alert of the Error type.
   */
  error?: CreateAlertRuleRequestTriggerConditionExtensionError;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorCount type.
   */
  instanceErrorCount?: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorPercentage type.
   */
  instanceErrorPercentage?: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The configuration for an alert of the InstanceTransferFluctuate type.
   */
  instanceTransferFluctuate?: CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The configuration for an alert of the Timeout type.
   */
  timeout?: CreateAlertRuleRequestTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The configuration for an alert of the UnFinished type.
   */
  unFinished?: CreateAlertRuleRequestTriggerConditionExtensionUnFinished;
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
      cycleUnfinished: CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinished,
      error: CreateAlertRuleRequestTriggerConditionExtensionError,
      instanceErrorCount: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: CreateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: CreateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: CreateAlertRuleRequestTriggerConditionExtensionTimeout,
      unFinished: CreateAlertRuleRequestTriggerConditionExtensionUnFinished,
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

