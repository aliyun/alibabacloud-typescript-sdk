// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataConditionScheduleParamList extends $dara.Model {
  /**
   * @remarks
   * The name of the condition.
   * 
   * @example
   * Rerun on failure condition
   */
  conditionName?: string;
  /**
   * @remarks
   * The cron expression used after the condition is met.
   * 
   * @example
   * 0 30 * * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether the condition is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to follow the main schedule parameter.
   * 
   * @example
   * false
   */
  followScheduleParam?: boolean;
  /**
   * @remarks
   * The node schedule status after the condition is met. Valid values:
   * - 1: Normal.
   * - 2: Paused.
   * - 3: Dry run.
   * 
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @remarks
   * The conditional expression tree as a JSON character string. The keys are in lower camel case and must be parsed by the caller.
   * 
   * @example
   * {"type":"EXPRESSION_GROUP","operator":"or"}
   */
  scheduleConditionJson?: string;
  /**
   * @remarks
   * The schedule time used after the condition is met.
   * 
   * @example
   * 00:30
   */
  scheduleTime?: string;
  static names(): { [key: string]: string } {
    return {
      conditionName: 'ConditionName',
      cronExpression: 'CronExpression',
      enable: 'Enable',
      followScheduleParam: 'FollowScheduleParam',
      nodeStatus: 'NodeStatus',
      scheduleConditionJson: 'ScheduleConditionJson',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionName: 'string',
      cronExpression: 'string',
      enable: 'boolean',
      followScheduleParam: 'boolean',
      nodeStatus: 'number',
      scheduleConditionJson: 'string',
      scheduleTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfig extends $dara.Model {
  /**
   * @remarks
   * The end time of the effective period.
   * 
   * @example
   * 23:59
   */
  endTime?: string;
  /**
   * @remarks
   * The interval value.
   * 
   * @example
   * 30
   */
  interval?: number;
  /**
   * @remarks
   * The interval unit.
   * 
   * @example
   * MINUTE
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The schedule period to which the interval belongs.
   * 
   * @example
   * DAY_INTERVAL
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The start time of the effective period.
   * 
   * @example
   * 00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfigs extends $dara.Model {
  /**
   * @remarks
   * The end time of the effective period.
   * 
   * @example
   * 23:59
   */
  endTime?: string;
  /**
   * @remarks
   * The interval value.
   * 
   * @example
   * 30
   */
  interval?: number;
  /**
   * @remarks
   * The interval unit.
   * 
   * @example
   * MINUTE
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The schedule period to which the interval belongs.
   * 
   * @example
   * DAY_INTERVAL
   */
  schedulePeriod?: string;
  /**
   * @remarks
   * The start time of the effective period.
   * 
   * @example
   * 00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      schedulePeriod: 'SchedulePeriod',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'number',
      intervalUnit: 'string',
      schedulePeriod: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultData extends $dara.Model {
  /**
   * @remarks
   * The condition-based schedule parameters. This parameter has a value only for condition-based schedule templates.
   */
  conditionScheduleParamList?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataConditionScheduleParamList[];
  /**
   * @remarks
   * The cron expression for automatic scheduling. Refer to Linux cron expressions.
   * 
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specifies whether a custom cron expression is used.
   * 
   * @example
   * true
   */
  customCronExpression?: boolean;
  /**
   * @remarks
   * The custom schedule interval configuration. This configuration takes effect only when used together with CustomIntervalConfigType.
   */
  customIntervalConfig?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfig;
  /**
   * @remarks
   * The type of the custom interval configuration. Valid values: TIME_POINT, TIME_PERIOD, CUSTOM_TIME_POINT, and CUSTOM_TIME_PERIOD.
   * 
   * @example
   * CUSTOM_TIME_PERIOD
   */
  customIntervalConfigType?: string;
  /**
   * @remarks
   * The custom schedule interval configurations. This parameter is valid only when CustomIntervalConfigType is set to CUSTOM_TIME_PERIOD.
   */
  customIntervalConfigs?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfigs[];
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1704153600000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1709516800000
   */
  gmtModify?: number;
  /**
   * @remarks
   * Specifies whether the schedule template is referenced by a node.
   * 
   * @example
   * true
   */
  hasReference?: boolean;
  /**
   * @remarks
   * The ID of the modifier.
   * 
   * @example
   * 30001012
   */
  modifierId?: string;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * Li Si
   */
  modifierName?: string;
  /**
   * @remarks
   * The schedule interval type. Valid values: YEARLY, MONTHLY, WEEKLY, DAILY, HOURLY, and MINUTELY.
   * 
   * @example
   * DAILY
   */
  scheduleIntervalType?: string;
  /**
   * @remarks
   * The description of the schedule template.
   * 
   * @example
   * Scheduled at 1:00 AM on weekdays
   */
  scheduleTemplateDesc?: string;
  /**
   * @remarks
   * The ID of the schedule template, which is used to bind a schedule template when updating a node.
   * 
   * @example
   * 12345
   */
  scheduleTemplateId?: number;
  /**
   * @remarks
   * The name of the schedule template.
   * 
   * @example
   * 1:00 AM every day
   */
  scheduleTemplateName?: string;
  /**
   * @remarks
   * The templatetype. Valid values: BASE_SCHEDULE_TEMPLATE: basic scheduling template, CONDITION_SCHEDULE_TEMPLATE: conditional scheduling template.
   * 
   * @example
   * BASE_SCHEDULE_TEMPLATE
   */
  scheduleTemplateType?: string;
  /**
   * @remarks
   * The schedule type. Valid values: normal scheduling, dry run scheduling, and paused scheduling.
   * 
   * @example
   * 1
   */
  scheduleType?: number;
  /**
   * @remarks
   * The ID of the tenant to which the schedule template belongs.
   * 
   * @example
   * 30001011
   */
  tenantId?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 30001011
   */
  userId?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * Zhang San
   */
  userName?: string;
  /**
   * @remarks
   * The end date of the effective period, in the yyyy-MM-dd format.
   * 
   * @example
   * 9999-01-01
   */
  validEndDate?: string;
  /**
   * @remarks
   * The start date of the effective period, in the yyyy-MM-dd format.
   * 
   * @example
   * 2024-01-01
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      conditionScheduleParamList: 'ConditionScheduleParamList',
      cronExpression: 'CronExpression',
      customCronExpression: 'CustomCronExpression',
      customIntervalConfig: 'CustomIntervalConfig',
      customIntervalConfigType: 'CustomIntervalConfigType',
      customIntervalConfigs: 'CustomIntervalConfigs',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      hasReference: 'HasReference',
      modifierId: 'ModifierId',
      modifierName: 'ModifierName',
      scheduleIntervalType: 'ScheduleIntervalType',
      scheduleTemplateDesc: 'ScheduleTemplateDesc',
      scheduleTemplateId: 'ScheduleTemplateId',
      scheduleTemplateName: 'ScheduleTemplateName',
      scheduleTemplateType: 'ScheduleTemplateType',
      scheduleType: 'ScheduleType',
      tenantId: 'TenantId',
      userId: 'UserId',
      userName: 'UserName',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionScheduleParamList: { 'type': 'array', 'itemType': ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataConditionScheduleParamList },
      cronExpression: 'string',
      customCronExpression: 'boolean',
      customIntervalConfig: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfig,
      customIntervalConfigType: 'string',
      customIntervalConfigs: { 'type': 'array', 'itemType': ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfigs },
      gmtCreate: 'number',
      gmtModify: 'number',
      hasReference: 'boolean',
      modifierId: 'string',
      modifierName: 'string',
      scheduleIntervalType: 'string',
      scheduleTemplateDesc: 'string',
      scheduleTemplateId: 'number',
      scheduleTemplateName: 'string',
      scheduleTemplateType: 'string',
      scheduleType: 'number',
      tenantId: 'number',
      userId: 'string',
      userName: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionScheduleParamList)) {
      $dara.Model.validateArray(this.conditionScheduleParamList);
    }
    if(this.customIntervalConfig && typeof (this.customIntervalConfig as any).validate === 'function') {
      (this.customIntervalConfig as any).validate();
    }
    if(Array.isArray(this.customIntervalConfigs)) {
      $dara.Model.validateArray(this.customIntervalConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTemplatesResponseBodyListScheduleTemplatesResponse extends $dara.Model {
  /**
   * @remarks
   * The total number of schedule templates that meet the specified conditions. This number is not limited by pagination.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The schedule templates.
   */
  resultData?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultData[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resultData: 'ResultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resultData: { 'type': 'array', 'itemType': ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultData },
    };
  }

  validate() {
    if(Array.isArray(this.resultData)) {
      $dara.Model.validateArray(this.resultData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduleTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The schedule template list response.
   */
  listScheduleTemplatesResponse?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponse;
  /**
   * @remarks
   * The error message of the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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
      listScheduleTemplatesResponse: 'ListScheduleTemplatesResponse',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listScheduleTemplatesResponse: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponse,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.listScheduleTemplatesResponse && typeof (this.listScheduleTemplatesResponse as any).validate === 'function') {
      (this.listScheduleTemplatesResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

