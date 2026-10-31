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
   * The ID of the schedule object. Pass this parameter to update the object, or omit it to create a new object.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the schedule object.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The custom partition expression.
   * 
   * @example
   * ds=${yyyyMMdd}
   */
  partitionExpression?: string;
  /**
   * @remarks
   * The partition type. Valid values:
   * - EVERY_DAY: every day.
   * - PRE_DAY: yesterday.
   * - TODAY: today.
   * - FIRST_DAY_OF_WEEK: the first day of the week (Sunday).
   * - CUSTOM: custom.
   * 
   * @example
   * CUSTOM
   */
  partitionType?: string;
  /**
   * @remarks
   * The scheduling epoch type for timed scheduling. Valid values:
   * - DAILY: daily.
   * - WEEKLY: weekly.
   * - MONTHLY: monthly.
   * - HOURLY: hourly.
   * - MINUTELY: minutely.
   * 
   * @example
   * DAILY
   */
  periodScheduleIntervalType?: string;
  /**
   * @remarks
   * The scheduling epoch values for timed scheduling.
   */
  periodScheduleParamList?: string[];
  /**
   * @remarks
   * The trigger method for static task triggers. Valid values:
   * - ALL_TASKS_FINISHED: All tasks are finished.
   * - ONE_TASKS_FINISHED: One task is finished.
   * - PRE_ONE_TASKS_START: The previous task is started.
   * 
   * @example
   * ONE_TASKS_FINISHED
   */
  staticTaskTriggerType?: string;
  /**
   * @remarks
   * The list of trigger tasks for the trigger schedule.
   */
  triggerNodeList?: string[];
  /**
   * @remarks
   * The trigger method for the trigger schedule. Valid values:
   * - STATIC_TASK_TRIGGER: static task trigger.
   * - CODE_CHECK_TRIGGER: code check trigger.
   * 
   * @example
   * STATIC_TASK_TRIGGER
   */
  triggerType?: string;
  /**
   * @remarks
   * The schedule type. Valid values:
   * - PERIOD_SCHEDULE: timed scheduling.
   * - MANUAL_SCHEDULE: manual trigger.
   * - CODE_CHECK_TRIGGER: code check trigger.
   * - STATIC_TASK_TRIGGER: static task trigger.
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
   * - TASK_REFERRED_PARTITION: task updated partition.
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The upsert command.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityScheduleRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

