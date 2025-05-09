// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished } from "./UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished";
import { UpdateAlertRuleRequestTriggerConditionExtensionError } from "./UpdateAlertRuleRequestTriggerConditionExtensionError";
import { UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount } from "./UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount";
import { UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage } from "./UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage";
import { UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate } from "./UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate";
import { UpdateAlertRuleRequestTriggerConditionExtensionTimeout } from "./UpdateAlertRuleRequestTriggerConditionExtensionTimeout";
import { UpdateAlertRuleRequestTriggerConditionExtensionUnFinished } from "./UpdateAlertRuleRequestTriggerConditionExtensionUnFinished";


export class UpdateAlertRuleRequestTriggerConditionExtension extends $dara.Model {
  /**
   * @remarks
   * The configuration for an alert of the CycleUnfinished type.
   */
  cycleUnfinished?: UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished;
  /**
   * @remarks
   * The configuration for an alert of the Error type.
   */
  error?: UpdateAlertRuleRequestTriggerConditionExtensionError;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorCount type.
   */
  instanceErrorCount?: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount;
  /**
   * @remarks
   * The configuration for an alert of the InstanceErrorPercentage type.
   */
  instanceErrorPercentage?: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage;
  /**
   * @remarks
   * The configuration for an alert of the InstanceTransferFluctuate type.
   */
  instanceTransferFluctuate?: UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate;
  /**
   * @remarks
   * The configuration for an alert of the Timeout type.
   */
  timeout?: UpdateAlertRuleRequestTriggerConditionExtensionTimeout;
  /**
   * @remarks
   * The configuration for an alert of the UnFinished type.
   */
  unFinished?: UpdateAlertRuleRequestTriggerConditionExtensionUnFinished;
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
      cycleUnfinished: UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished,
      error: UpdateAlertRuleRequestTriggerConditionExtensionError,
      instanceErrorCount: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorCount,
      instanceErrorPercentage: UpdateAlertRuleRequestTriggerConditionExtensionInstanceErrorPercentage,
      instanceTransferFluctuate: UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate,
      timeout: UpdateAlertRuleRequestTriggerConditionExtensionTimeout,
      unFinished: UpdateAlertRuleRequestTriggerConditionExtensionUnFinished,
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

