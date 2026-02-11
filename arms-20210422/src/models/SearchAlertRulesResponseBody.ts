// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext extends $dara.Model {
  alarmContentSubTitle?: string;
  alarmContentTemplate?: string;
  content?: string;
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContentSubTitle: 'AlarmContentSubTitle',
      alarmContentTemplate: 'AlarmContentTemplate',
      content: 'Content',
      subTitle: 'SubTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContentSubTitle: 'string',
      alarmContentTemplate: 'string',
      content: 'string',
      subTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules extends $dara.Model {
  aggregates?: string;
  alias?: string;
  measure?: string;
  NValue?: number;
  operator?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      alias: 'Alias',
      measure: 'Measure',
      NValue: 'NValue',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: 'string',
      alias: 'string',
      measure: 'string',
      NValue: 'number',
      operator: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule extends $dara.Model {
  operator?: string;
  rules?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      rules: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRuleRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions extends $dara.Model {
  key?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam extends $dara.Model {
  appGroupId?: string;
  appId?: string;
  dimensions?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions[];
  pid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      dimensions: 'Dimensions',
      pid: 'Pid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appId: 'string',
      dimensions: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParamDimensions },
      pid: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRulesNotice extends $dara.Model {
  endTime?: number;
  noticeEndTime?: number;
  noticeStartTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      noticeEndTime: 'NoticeEndTime',
      noticeStartTime: 'NoticeStartTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      noticeEndTime: 'number',
      noticeStartTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBeanAlertRules extends $dara.Model {
  alarmContext?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext;
  alertLevel?: string;
  alertRule?: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule;
  alertTitle?: string;
  alertType?: number;
  alertVersion?: number;
  alertWay?: string[];
  alertWays?: string[];
  config?: string;
  contactGroupIdList?: string;
  contactGroupIds?: string;
  createTime?: number;
  id?: number;
  metricParam?: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam;
  notice?: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice;
  regionId?: string;
  status?: string;
  taskId?: number;
  taskStatus?: string;
  title?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContext: 'AlarmContext',
      alertLevel: 'AlertLevel',
      alertRule: 'AlertRule',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      alertVersion: 'AlertVersion',
      alertWay: 'AlertWay',
      alertWays: 'AlertWays',
      config: 'Config',
      contactGroupIdList: 'ContactGroupIdList',
      contactGroupIds: 'ContactGroupIds',
      createTime: 'CreateTime',
      id: 'Id',
      metricParam: 'MetricParam',
      notice: 'Notice',
      regionId: 'RegionId',
      status: 'Status',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      title: 'Title',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContext: SearchAlertRulesResponseBodyPageBeanAlertRulesAlarmContext,
      alertLevel: 'string',
      alertRule: SearchAlertRulesResponseBodyPageBeanAlertRulesAlertRule,
      alertTitle: 'string',
      alertType: 'number',
      alertVersion: 'number',
      alertWay: { 'type': 'array', 'itemType': 'string' },
      alertWays: { 'type': 'array', 'itemType': 'string' },
      config: 'string',
      contactGroupIdList: 'string',
      contactGroupIds: 'string',
      createTime: 'number',
      id: 'number',
      metricParam: SearchAlertRulesResponseBodyPageBeanAlertRulesMetricParam,
      notice: SearchAlertRulesResponseBodyPageBeanAlertRulesNotice,
      regionId: 'string',
      status: 'string',
      taskId: 'number',
      taskStatus: 'string',
      title: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.alarmContext && typeof (this.alarmContext as any).validate === 'function') {
      (this.alarmContext as any).validate();
    }
    if(this.alertRule && typeof (this.alertRule as any).validate === 'function') {
      (this.alertRule as any).validate();
    }
    if(Array.isArray(this.alertWay)) {
      $dara.Model.validateArray(this.alertWay);
    }
    if(Array.isArray(this.alertWays)) {
      $dara.Model.validateArray(this.alertWays);
    }
    if(this.metricParam && typeof (this.metricParam as any).validate === 'function') {
      (this.metricParam as any).validate();
    }
    if(this.notice && typeof (this.notice as any).validate === 'function') {
      (this.notice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponseBodyPageBean extends $dara.Model {
  alertRules?: SearchAlertRulesResponseBodyPageBeanAlertRules[];
  pageNumber?: number;
  pageSize?: number;
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
      alertRules: { 'type': 'array', 'itemType': SearchAlertRulesResponseBodyPageBeanAlertRules },
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

export class SearchAlertRulesResponseBody extends $dara.Model {
  pageBean?: SearchAlertRulesResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertRulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

