// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityScheduleRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * The cron expression for timed scheduling.
   * 
   * @example
   * * * 1/* * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The ID of the schedule resource. If specified, the operation updates the existing resource. If not specified, the operation creates a new resource.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the schedule resource.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The partition expression for custom expressions.
   * 
   * @example
   * ds=${yyyyMMdd}
   */
  partitionExpression?: string;
  /**
   * @remarks
   * The partition type. Valid values:
   * - EVERY_DAY: every day.
   * - PRE_DAY: previous day.
   * - TODAY: current day.
   * - FIRST_DAY_OF_WEEK: first day of the week (Sunday).
   * - CUSTOM: custom.
   * 
   * @example
   * CUSTOM
   */
  partitionType?: string;
  /**
   * @remarks
   * The scheduling interval type for timed scheduling. Valid values:
   * - DAILY: day.
   * - WEEKLY: week.
   * - MONTHLY: month.
   * - HOURLY: hour.
   * - MINUTELY: minute.
   * 
   * @example
   * DAILY
   */
  periodScheduleIntervalType?: string;
  /**
   * @remarks
   * The scheduling interval values for timed scheduling.
   */
  periodScheduleParamList?: string[];
  /**
   * @remarks
   * The trigger method for fixed task triggers. Valid values:
   * - ALL_TASKS_FINISHED
   * - ONE_TASKS_FINISHED
   * - PRE_ONE_TASKS_START.
   * 
   * @example
   * ONE_TASKS_FINISHED
   */
  staticTaskTriggerType?: string;
  /**
   * @remarks
   * The checklist of trigger nodes for trigger scheduling.
   */
  triggerNodeList?: string[];
  /**
   * @remarks
   * The trigger method for trigger scheduling. Valid values:
   * - STATIC_TASK_TRIGGER: fixed task trigger.
   * - CODE_CHECK_TRIGGER: code check trigger.
   * 
   * @example
   * STATIC_TASK_TRIGGER
   */
  triggerType?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - PERIOD_SCHEDULE: timed scheduling.
   * - MANUAL_SCHEDULE: manual trigger.
   * - CODE_CHECK_TRIGGER: code check trigger.
   * - STATIC_TASK_TRIGGER: fixed task trigger.
   * - DEPENDENCY_SCHEDULE: dependency scheduling.
   * 
   * This parameter is required.
   * 
   * @example
   * PERIOD_SCHEDULE
   */
  type?: string;
  /**
   * @remarks
   * The validation scope. Valid values:
   * - TASK_REFERRED_PARTITION: task update partition.
   * - USER_DEFINED_PARTITION: custom partition.
   * 
   * @example
   * TASK_REFERRED_PARTITION
   */
  validatePartitionType?: string;
  /**
   * @remarks
   * The ID of the monitored object.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      id: 'Id',
      name: 'Name',
      partitionExpression: 'PartitionExpression',
      partitionType: 'PartitionType',
      periodScheduleIntervalType: 'PeriodScheduleIntervalType',
      periodScheduleParamList: 'PeriodScheduleParamList',
      staticTaskTriggerType: 'StaticTaskTriggerType',
      triggerNodeList: 'TriggerNodeList',
      triggerType: 'TriggerType',
      type: 'Type',
      validatePartitionType: 'ValidatePartitionType',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      id: 'number',
      name: 'string',
      partitionExpression: 'string',
      partitionType: 'string',
      periodScheduleIntervalType: 'string',
      periodScheduleParamList: { 'type': 'array', 'itemType': 'string' },
      staticTaskTriggerType: 'string',
      triggerNodeList: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
      type: 'string',
      validatePartitionType: 'string',
      watchId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.periodScheduleParamList)) {
      $dara.Model.validateArray(this.periodScheduleParamList);
    }
    if(Array.isArray(this.triggerNodeList)) {
      $dara.Model.validateArray(this.triggerNodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The update instruction.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityScheduleRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      upsertCommand: UpsertQualityScheduleRequestUpsertCommand,
    };
  }

  validate() {
    if(this.upsertCommand && typeof (this.upsertCommand as any).validate === 'function') {
      (this.upsertCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

