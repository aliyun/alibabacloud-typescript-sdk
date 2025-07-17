// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduling cycle of the instance. Valid values: [1,288].
   * 
   * @example
   * 1
   */
  cycleId?: number;
  /**
   * @remarks
   * The latest completion time of the instance within the scheduling cycle. The time is in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 01:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycleId: 'CycleId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleId: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The configurations of the scheduling cycle and timeout period of the instance.
   */
  cycleAndTime?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime },
    };
  }

  validate() {
    if(Array.isArray(this.cycleAndTime)) {
      $dara.Model.validateArray(this.cycleAndTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionError extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an alert is triggered if a batch synchronization task is automatically rerun upon a failure.
   * 
   * @example
   * false
   */
  autoRerunAlertEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the real-time computing tasks. This parameter is required when you monitor real-time computing tasks.
   */
  streamTaskIds?: number[];
  static names(): { [key: string]: string } {
    return {
      autoRerunAlertEnabled: 'AutoRerunAlertEnabled',
      streamTaskIds: 'StreamTaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRerunAlertEnabled: 'boolean',
      streamTaskIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.streamTaskIds)) {
      $dara.Model.validateArray(this.streamTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorCount extends $dara.Model {
  /**
   * @remarks
   * The maximum number of instances on which an error occurs. Valid values: [1,10000].
   * 
   * @example
   * 10
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceErrorPercentage extends $dara.Model {
  /**
   * @remarks
   * The maximum percentage of instances on which an error occurs in the workspace to the total number of instances. Valid values: [1-100].
   * 
   * @example
   * 10
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionInstanceTransferFluctuate extends $dara.Model {
  /**
   * @remarks
   * The maximum percentage of fluctuation in the number of auto triggered node instances that are generated in your workspace. Valid values: [1-100].
   * 
   * @example
   * 10
   */
  percentage?: number;
  /**
   * @remarks
   * The way in which the number of auto triggered node instances that are generated in your workspace fluctuates. Valid values:
   * 
   * *   abs: the absolute value. The number of instances increases or decreases.
   * *   increase: The number of instances increases.
   * *   decrease: The number of instances decreases.
   * 
   * @example
   * abs
   */
  trend?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      trend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionTimeout extends $dara.Model {
  /**
   * @remarks
   * The timeout period. Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionUnFinished extends $dara.Model {
  /**
   * @remarks
   * The latest completion time of the instance. The period is in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 12:00
   */
  unFinishedTime?: string;
  static names(): { [key: string]: string } {
    return {
      unFinishedTime: 'UnFinishedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unFinishedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionTarget extends $dara.Model {
  /**
   * @remarks
   * The nodes that are not to be monitored.
   */
  allowTasks?: number[];
  /**
   * @remarks
   * The IDs of monitored objects.
   */
  ids?: number[];
  /**
   * @remarks
   * The type of the monitored objects. Valid values:
   * 
   * *   Task: node
   * *   Baseline: baseline
   * *   Project: workspace
   * *   BizProcess: workflow
   * 
   * @example
   * Task
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowTasks: 'AllowTasks',
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowTasks: { 'type': 'array', 'itemType': 'number' },
      ids: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowTasks)) {
      $dara.Model.validateArray(this.allowTasks);
    }
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListAlertRulesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The rules.
   */
  alertRules?: ListAlertRulesResponseBodyPagingInfoAlertRules[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertRules: 'AlertRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRules: { 'type': 'array', 'itemType': ListAlertRulesResponseBodyPagingInfoAlertRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertRules)) {
      $dara.Model.validateArray(this.alertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListAlertRulesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6C6B486-E3A2-5D52-9E76-D9380485D946
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListAlertRulesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

