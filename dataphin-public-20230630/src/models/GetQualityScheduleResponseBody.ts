// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityScheduleResponseBodyQualityScheduleInfo extends $dara.Model {
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
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
   * The ID of the scheduling object.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the scheduling object is referenced by a rule.
   */
  isRefByRule?: boolean;
  /**
   * @remarks
   * The ID of the last modifier.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The modification time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the scheduling object.
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
   * - EVERY_DAY: Every day.
   * - PRE_DAY: Previous day.
   * - TODAY: Current day.
   * - FIRST_DAY_OF_WEEK: First day of the week (Sunday).
   * - CUSTOM: Custom.
   * 
   * @example
   * CUSTOM
   */
  partitionType?: string;
  /**
   * @remarks
   * The scheduling epoch type for timed scheduling. Valid values:
   * - DAILY: Daily.
   * - WEEKLY: Weekly.
   * - MONTHLY: Monthly.
   * - HOURLY: Hourly.
   * - MINUTELY: Minutely.
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
   * The trigger method for fixed task triggers. Valid values:
   * - ALL_TASKS_FINISHED: All tasks finished.
   * - ONE_TASKS_FINISHED: One task finished.
   * - PRE_ONE_TASKS_START: Previous task started.
   * 
   * @example
   * ONE_TASKS_FINISHED
   */
  staticTaskTriggerType?: string;
  /**
   * @remarks
   * The list of trigger tasks for trigger scheduling.
   */
  triggerNodeList?: string[];
  /**
   * @remarks
   * The trigger method for trigger scheduling. Valid values:
   * - STATIC_TASK_TRIGGER: Fixed task trigger.
   * - CODE_CHECK_TRIGGER: Code check trigger.
   * 
   * @example
   * STATIC_TASK_TRIGGER
   */
  triggerType?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - PERIOD_SCHEDULE: Timed scheduling.
   * - MANUAL_SCHEDULE: Manual trigger.
   * - CODE_CHECK_TRIGGER: Code check trigger.
   * - STATIC_TASK_TRIGGER: Fixed node trigger.
   * - DEPENDENCY_SCHEDULE: Dependency scheduling.
   * 
   * @example
   * PERIOD_SCHEDULE
   */
  type?: string;
  /**
   * @remarks
   * The validation scope. Valid values:
   * - TASK_REFERRED_PARTITION: Task updated partition.
   * - USER_DEFINED_PARTITION: User-defined partition.
   * 
   * @example
   * TASK_REFERRED_PARTITION
   */
  validatePartitionType?: string;
  /**
   * @remarks
   * The ID of the monitored object.
   * 
   * @example
   * 22
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      cronExpression: 'CronExpression',
      id: 'Id',
      isRefByRule: 'IsRefByRule',
      modifier: 'Modifier',
      modifyTime: 'ModifyTime',
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
      createTime: 'string',
      creator: 'string',
      cronExpression: 'string',
      id: 'number',
      isRefByRule: 'boolean',
      modifier: 'string',
      modifyTime: 'string',
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

export class GetQualityScheduleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The details of the scheduling object.
   */
  qualityScheduleInfo?: GetQualityScheduleResponseBodyQualityScheduleInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      qualityScheduleInfo: 'QualityScheduleInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      qualityScheduleInfo: GetQualityScheduleResponseBodyQualityScheduleInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.qualityScheduleInfo && typeof (this.qualityScheduleInfo as any).validate === 'function') {
      (this.qualityScheduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

