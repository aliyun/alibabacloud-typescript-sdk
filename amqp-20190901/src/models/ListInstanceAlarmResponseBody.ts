// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVOAlarmDetailsAlarmDetail extends $dara.Model {
  alertState?: string;
  comparisonOperator?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  groupId?: string;
  groupName?: string;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      groupId: 'GroupId',
      groupName: 'GroupName',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      comparisonOperator: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      groupId: 'string',
      groupName: 'string',
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVOAlarmDetails extends $dara.Model {
  alarmDetail?: ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVOAlarmDetailsAlarmDetail[];
  static names(): { [key: string]: string } {
    return {
      alarmDetail: 'AlarmDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmDetail: { 'type': 'array', 'itemType': ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVOAlarmDetailsAlarmDetail },
    };
  }

  validate() {
    if(Array.isArray(this.alarmDetail)) {
      $dara.Model.validateArray(this.alarmDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVO extends $dara.Model {
  alarmCount?: number;
  alarmDetails?: ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVOAlarmDetails;
  hasConfigAlarm?: boolean;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      alarmDetails: 'AlarmDetails',
      hasConfigAlarm: 'HasConfigAlarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      alarmDetails: ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVOAlarmDetails,
      hasConfigAlarm: 'boolean',
    };
  }

  validate() {
    if(this.alarmDetails && typeof (this.alarmDetails as any).validate === 'function') {
      (this.alarmDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVO extends $dara.Model {
  alarmVO?: ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVO;
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      alarmVO: 'AlarmVO',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmVO: ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVOAlarmVO,
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    if(this.alarmVO && typeof (this.alarmVO as any).validate === 'function') {
      (this.alarmVO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAlarmResponseBodyDataVoList extends $dara.Model {
  commodityInstanceAlarmVO?: ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVO[];
  static names(): { [key: string]: string } {
    return {
      commodityInstanceAlarmVO: 'CommodityInstanceAlarmVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityInstanceAlarmVO: { 'type': 'array', 'itemType': ListInstanceAlarmResponseBodyDataVoListCommodityInstanceAlarmVO },
    };
  }

  validate() {
    if(Array.isArray(this.commodityInstanceAlarmVO)) {
      $dara.Model.validateArray(this.commodityInstanceAlarmVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAlarmResponseBodyData extends $dara.Model {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  voList?: ListInstanceAlarmResponseBodyDataVoList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      voList: 'VoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      voList: ListInstanceAlarmResponseBodyDataVoList,
    };
  }

  validate() {
    if(this.voList && typeof (this.voList as any).validate === 'function') {
      (this.voList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAlarmResponseBody extends $dara.Model {
  code?: number;
  data?: ListInstanceAlarmResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListInstanceAlarmResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

