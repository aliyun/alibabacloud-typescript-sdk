// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataConditionScheduleParamList extends $dara.Model {
  /**
   * @example
   * 失败重跑条件
   */
  conditionName?: string;
  /**
   * @example
   * 0 30 * * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * false
   */
  followScheduleParam?: boolean;
  /**
   * @example
   * 1
   */
  nodeStatus?: number;
  /**
   * @example
   * {"type":"EXPRESSION_GROUP","operator":"or"}
   */
  scheduleConditionJson?: string;
  /**
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
   * @example
   * 23:59
   */
  endTime?: string;
  /**
   * @example
   * 30
   */
  interval?: number;
  /**
   * @example
   * MINUTE
   */
  intervalUnit?: string;
  /**
   * @example
   * DAY_INTERVAL
   */
  schedulePeriod?: string;
  /**
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
   * @example
   * 23:59
   */
  endTime?: string;
  /**
   * @example
   * 30
   */
  interval?: number;
  /**
   * @example
   * MINUTE
   */
  intervalUnit?: string;
  /**
   * @example
   * DAY_INTERVAL
   */
  schedulePeriod?: string;
  /**
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
  conditionScheduleParamList?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataConditionScheduleParamList[];
  /**
   * @example
   * 0 0 1 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  customCronExpression?: boolean;
  customIntervalConfig?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfig;
  /**
   * @example
   * CUSTOM_TIME_PERIOD
   */
  customIntervalConfigType?: string;
  customIntervalConfigs?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponseResultDataCustomIntervalConfigs[];
  /**
   * @example
   * 1704153600000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1709516800000
   */
  gmtModify?: number;
  /**
   * @example
   * true
   */
  hasReference?: boolean;
  /**
   * @example
   * 30001012
   */
  modifierId?: string;
  /**
   * @example
   * 李四
   */
  modifierName?: string;
  /**
   * @example
   * DAILY
   */
  scheduleIntervalType?: string;
  /**
   * @example
   * 工作日每天凌晨1点调度
   */
  scheduleTemplateDesc?: string;
  /**
   * @example
   * 12345
   */
  scheduleTemplateId?: number;
  /**
   * @example
   * 每天凌晨1点
   */
  scheduleTemplateName?: string;
  /**
   * @example
   * BASE_SCHEDULE_TEMPLATE
   */
  scheduleTemplateType?: string;
  /**
   * @example
   * 1
   */
  scheduleType?: number;
  /**
   * @example
   * 30001011
   */
  tenantId?: number;
  /**
   * @example
   * 30001011
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  /**
   * @example
   * 9999-01-01
   */
  validEndDate?: string;
  /**
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
   * @example
   * 1
   */
  count?: number;
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listScheduleTemplatesResponse?: ListScheduleTemplatesResponseBodyListScheduleTemplatesResponse;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

