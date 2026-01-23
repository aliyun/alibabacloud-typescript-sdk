// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityScheduleRequestUpsertCommand extends $dara.Model {
  /**
   * @example
   * * * 1/* * * *
   */
  cronExpression?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * ds=${yyyyMMdd}
   */
  partitionExpression?: string;
  /**
   * @example
   * CUSTOM
   */
  partitionType?: string;
  /**
   * @example
   * DAILY
   */
  periodScheduleIntervalType?: string;
  periodScheduleParamList?: string[];
  /**
   * @example
   * ONE_TASKS_FINISHED
   */
  staticTaskTriggerType?: string;
  triggerNodeList?: string[];
  /**
   * @example
   * STATIC_TASK_TRIGGER
   */
  triggerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PERIOD_SCHEDULE
   */
  type?: string;
  /**
   * @example
   * TASK_REFERRED_PARTITION
   */
  validatePartitionType?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

