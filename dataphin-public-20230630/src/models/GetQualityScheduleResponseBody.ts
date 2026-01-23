// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityScheduleResponseBodyQualityScheduleInfo extends $dara.Model {
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
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
  isRefByRule?: boolean;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  qualityScheduleInfo?: GetQualityScheduleResponseBodyQualityScheduleInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

