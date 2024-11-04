// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AlertEventIntegrationPolicyForModify extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertEventIntegrationPolicyName?: string;
  description?: string;
  filterSetting?: FilterSetting;
  integrationSetting?: string;
  transformerSetting?: TransformAction[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertEventIntegrationPolicyName: 'alertEventIntegrationPolicyName',
      description: 'description',
      filterSetting: 'filterSetting',
      integrationSetting: 'integrationSetting',
      transformerSetting: 'transformerSetting',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventIntegrationPolicyName: 'string',
      description: 'string',
      filterSetting: FilterSetting,
      integrationSetting: 'string',
      transformerSetting: { 'type': 'array', 'itemType': TransformAction },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertEventIntegrationPolicyForView extends $tea.Model {
  alertEventIntegrationPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  alertEventIntegrationPolicyName?: string;
  createTime?: string;
  description?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  integrationSetting?: string;
  transformerSetting?: TransformAction[];
  type?: string;
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      alertEventIntegrationPolicyId: 'alertEventIntegrationPolicyId',
      alertEventIntegrationPolicyName: 'alertEventIntegrationPolicyName',
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      integrationSetting: 'integrationSetting',
      transformerSetting: 'transformerSetting',
      type: 'type',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertEventIntegrationPolicyId: 'string',
      alertEventIntegrationPolicyName: 'string',
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      integrationSetting: 'string',
      transformerSetting: { 'type': 'array', 'itemType': TransformAction },
      type: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAction extends $tea.Model {
  actions?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricFilterDef extends $tea.Model {
  dim?: string;
  displayNameCn?: string;
  displayNameEn?: string;
  hidden?: boolean;
  opt?: string;
  supportedOpts?: AlertRuleAlertMetricFilterDefSupportedOpts[];
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      displayNameCn: 'displayNameCn',
      displayNameEn: 'displayNameEn',
      hidden: 'hidden',
      opt: 'opt',
      supportedOpts: 'supportedOpts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      displayNameCn: 'string',
      displayNameEn: 'string',
      hidden: 'boolean',
      opt: 'string',
      supportedOpts: { 'type': 'array', 'itemType': AlertRuleAlertMetricFilterDefSupportedOpts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricInput extends $tea.Model {
  filterValues?: AlertRuleAlertMetricInputFilterValue[];
  groupId?: string;
  metricId?: string;
  paramValues?: AlertRuleAlertMetricInputParamValue[];
  static names(): { [key: string]: string } {
    return {
      filterValues: 'filterValues',
      groupId: 'groupId',
      metricId: 'metricId',
      paramValues: 'paramValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterValues: { 'type': 'array', 'itemType': AlertRuleAlertMetricInputFilterValue },
      groupId: 'string',
      metricId: 'string',
      paramValues: { 'type': 'array', 'itemType': AlertRuleAlertMetricInputParamValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricInputFilterValue extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dim?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  opt?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      opt: 'opt',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      opt: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricInputParamValue extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricParamDef extends $tea.Model {
  maxWidth?: number;
  minWidth?: number;
  name?: string;
  placeholderCn?: string;
  placeholderEn?: string;
  type?: string;
  value?: string;
  values?: AlertRuleAlertMetricParamDefValues[];
  static names(): { [key: string]: string } {
    return {
      maxWidth: 'maxWidth',
      minWidth: 'minWidth',
      name: 'name',
      placeholderCn: 'placeholderCn',
      placeholderEn: 'placeholderEn',
      type: 'type',
      value: 'value',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxWidth: 'number',
      minWidth: 'number',
      name: 'string',
      placeholderCn: 'string',
      placeholderEn: 'string',
      type: 'string',
      value: 'string',
      values: { 'type': 'array', 'itemType': AlertRuleAlertMetricParamDefValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleCondition extends $tea.Model {
  /**
   * @remarks
   * type=SLS_CONDITION时指定，满足条件几次后告警，默认为1
   */
  alertCount?: number;
  /**
   * @remarks
   * type=SLS_CONDITION时指定
   */
  caseList?: AlertRuleConditionCaseList[];
  compareList?: AlertRuleConditionCompareList[];
  noDataAppendValue?: string;
  /**
   * @remarks
   * 无数据时按什么级别告警，不指定则不对无数据报警
   */
  nodataAlertLevel?: string;
  /**
   * @remarks
   * 规则条件类型，可选值：SLS_CONDITION
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertCount: 'alertCount',
      caseList: 'caseList',
      compareList: 'compareList',
      noDataAppendValue: 'noDataAppendValue',
      nodataAlertLevel: 'nodataAlertLevel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCount: 'number',
      caseList: { 'type': 'array', 'itemType': AlertRuleConditionCaseList },
      compareList: { 'type': 'array', 'itemType': AlertRuleConditionCompareList },
      noDataAppendValue: 'string',
      nodataAlertLevel: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleDataSource extends $tea.Model {
  dsList?: AlertRuleDataSourceDsList[];
  /**
   * @remarks
   * 实例id，当type=PROMETHEUS_DS/ENTERPRISE_DS时必填，为prometheus实例的clusterId或指标仓库名称
   */
  instanceId?: string;
  namespace?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dsList: 'dsList',
      instanceId: 'instanceId',
      namespace: 'namespace',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dsList: { 'type': 'array', 'itemType': AlertRuleDataSourceDsList },
      instanceId: 'string',
      namespace: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleLabelFilter extends $tea.Model {
  labels?: { [key: string]: string };
  opt?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      opt: 'opt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      opt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleNotification extends $tea.Model {
  contacts?: string[];
  customWebhooks?: string[];
  dingWebhooks?: string[];
  fsWebhooks?: string[];
  groups?: string[];
  notifyTime?: AlertRuleTimeSpan;
  silenceTime?: number;
  slackWebhooks?: string[];
  wxWebhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      customWebhooks: 'customWebhooks',
      dingWebhooks: 'dingWebhooks',
      fsWebhooks: 'fsWebhooks',
      groups: 'groups',
      notifyTime: 'notifyTime',
      silenceTime: 'silenceTime',
      slackWebhooks: 'slackWebhooks',
      wxWebhooks: 'wxWebhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      customWebhooks: { 'type': 'array', 'itemType': 'string' },
      dingWebhooks: { 'type': 'array', 'itemType': 'string' },
      fsWebhooks: { 'type': 'array', 'itemType': 'string' },
      groups: { 'type': 'array', 'itemType': 'string' },
      notifyTime: AlertRuleTimeSpan,
      silenceTime: 'number',
      slackWebhooks: { 'type': 'array', 'itemType': 'string' },
      wxWebhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleNotificationFilter extends $tea.Model {
  contacts?: string[];
  customWebhooks?: string[];
  dingWebhooks?: string[];
  fsWebhooks?: string[];
  groups?: string[];
  slackWebhooks?: string[];
  wxWebhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      customWebhooks: 'customWebhooks',
      dingWebhooks: 'dingWebhooks',
      fsWebhooks: 'fsWebhooks',
      groups: 'groups',
      slackWebhooks: 'slackWebhooks',
      wxWebhooks: 'wxWebhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      customWebhooks: { 'type': 'array', 'itemType': 'string' },
      dingWebhooks: { 'type': 'array', 'itemType': 'string' },
      fsWebhooks: { 'type': 'array', 'itemType': 'string' },
      groups: { 'type': 'array', 'itemType': 'string' },
      slackWebhooks: { 'type': 'array', 'itemType': 'string' },
      wxWebhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQuery extends $tea.Model {
  duration?: number;
  expr?: string;
  firstJoin?: AlertRuleSlsQueryJoin;
  groupFieldList?: string[];
  groupType?: string;
  queries?: AlertRuleQueryQueries[];
  secondJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * 查询类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      expr: 'expr',
      firstJoin: 'firstJoin',
      groupFieldList: 'groupFieldList',
      groupType: 'groupType',
      queries: 'queries',
      secondJoin: 'secondJoin',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      expr: 'string',
      firstJoin: AlertRuleSlsQueryJoin,
      groupFieldList: { 'type': 'array', 'itemType': 'string' },
      groupType: 'string',
      queries: { 'type': 'array', 'itemType': AlertRuleQueryQueries },
      secondJoin: AlertRuleSlsQueryJoin,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleSend extends $tea.Model {
  action?: AlertRuleAction;
  notification?: AlertRuleNotification;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      notification: 'notification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: AlertRuleAction,
      notification: AlertRuleNotification,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleSlsQueryJoin extends $tea.Model {
  conditions?: AlertRuleSlsQueryJoinConditions[];
  /**
   * @remarks
   * 集合操作类型。
   *   ● CrossJoin： 笛卡尔积
   *   ● FullJoin：全联
   *   ● InnerJoin：内联
   *   ● LeftExclude： 左斥
   *   ● RightExclude：右斥
   *   ● LeftJoin：左联
   *   ● RightJoin：右联
   *   ● NoJoin：不合并
   *   ● Concat： 拼接
   *   https://help.aliyun.com/zh/sls/user-guide/set-query-statistics-statement
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': AlertRuleSlsQueryJoinConditions },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleTimeSpan extends $tea.Model {
  dayOfWeek?: number[];
  endTime?: string;
  gmtOffset?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dayOfWeek: 'dayOfWeek',
      endTime: 'endTime',
      gmtOffset: 'gmtOffset',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayOfWeek: { 'type': 'array', 'itemType': 'number' },
      endTime: 'string',
      gmtOffset: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterSetting extends $tea.Model {
  conditions?: FilterSettingConditions[];
  expression?: string;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expression: 'expression',
      relation: 'relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': FilterSettingConditions },
      expression: 'string',
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaintainWindowForModify extends $tea.Model {
  description?: string;
  effective?: string;
  endTime?: string;
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  maintainWindowName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effective: 'effective',
      endTime: 'endTime',
      filterSetting: 'filterSetting',
      maintainWindowName: 'maintainWindowName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effective: 'string',
      endTime: 'string',
      filterSetting: FilterSetting,
      maintainWindowName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaintainWindowForView extends $tea.Model {
  createTime?: string;
  description?: string;
  effective?: string;
  enable?: boolean;
  endTime?: string;
  filterSetting?: FilterSetting;
  maintainWindowId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maintainWindowName?: string;
  startTime?: string;
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      effective: 'effective',
      enable: 'enable',
      endTime: 'endTime',
      filterSetting: 'filterSetting',
      maintainWindowId: 'maintainWindowId',
      maintainWindowName: 'maintainWindowName',
      startTime: 'startTime',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      effective: 'string',
      enable: 'boolean',
      endTime: 'string',
      filterSetting: FilterSetting,
      maintainWindowId: 'string',
      maintainWindowName: 'string',
      startTime: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModify extends $tea.Model {
  customTemplateEntries?: NotifyStrategyForModifyCustomTemplateEntries[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForModifyGroupingSetting;
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: NotifyStrategyForModifyRoutes[];
  static names(): { [key: string]: string } {
    return {
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      notifyStrategyName: 'notifyStrategyName',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForModifyCustomTemplateEntries },
      description: 'string',
      groupingSetting: NotifyStrategyForModifyGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      notifyStrategyName: 'string',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForView extends $tea.Model {
  createTime?: string;
  customTemplateEntries?: NotifyStrategyForViewCustomTemplateEntries[];
  description?: string;
  enable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForViewGroupingSetting;
  ignoreRestoredNotification?: boolean;
  notifyStrategyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: NotifyStrategyForViewRoutes[];
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      enable: 'enable',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      notifyStrategyId: 'notifyStrategyId',
      notifyStrategyName: 'notifyStrategyName',
      routes: 'routes',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForViewCustomTemplateEntries },
      description: 'string',
      enable: 'boolean',
      groupingSetting: NotifyStrategyForViewGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      notifyStrategyId: 'string',
      notifyStrategyName: 'string',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForViewRoutes },
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionForModify extends $tea.Model {
  description?: string;
  filterSetting?: FilterSetting;
  notifyStrategyId?: string;
  pushingSetting?: SubscriptionForModifyPushingSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  subscriptionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      filterSetting: 'filterSetting',
      notifyStrategyId: 'notifyStrategyId',
      pushingSetting: 'pushingSetting',
      subscriptionName: 'subscriptionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForModifyPushingSetting,
      subscriptionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionForView extends $tea.Model {
  createTime?: string;
  description?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  notifyStrategyId?: string;
  pushingSetting?: SubscriptionForViewPushingSetting;
  subscriptionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subscriptionName?: string;
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      notifyStrategyId: 'notifyStrategyId',
      pushingSetting: 'pushingSetting',
      subscriptionId: 'subscriptionId',
      subscriptionName: 'subscriptionName',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      notifyStrategyId: 'string',
      pushingSetting: SubscriptionForViewPushingSetting,
      subscriptionId: 'string',
      subscriptionName: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformAction extends $tea.Model {
  filterSetting?: FilterSetting;
  labelKey?: string;
  mapping?: { [key: string]: string };
  regExp?: string;
  source?: string;
  target?: string;
  type?: string;
  value?: string;
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      filterSetting: 'filterSetting',
      labelKey: 'labelKey',
      mapping: 'mapping',
      regExp: 'regExp',
      source: 'source',
      target: 'target',
      type: 'type',
      value: 'value',
      variable: 'variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterSetting: FilterSetting,
      labelKey: 'string',
      mapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regExp: 'string',
      source: 'string',
      target: 'string',
      type: 'string',
      value: 'string',
      variable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformerForModify extends $tea.Model {
  actions?: TransformAction[];
  description?: string;
  filterSetting?: FilterSetting;
  quitAfterMatch?: boolean;
  sortId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  transformerName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      description: 'description',
      filterSetting: 'filterSetting',
      quitAfterMatch: 'quitAfterMatch',
      sortId: 'sortId',
      transformerName: 'transformerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': TransformAction },
      description: 'string',
      filterSetting: FilterSetting,
      quitAfterMatch: 'boolean',
      sortId: 'number',
      transformerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransformerForView extends $tea.Model {
  actions?: TransformAction[];
  createTime?: string;
  description?: string;
  enable?: boolean;
  filterSetting?: FilterSetting;
  quitAfterMatch?: boolean;
  sortId?: number;
  transformerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transformerName?: string;
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      createTime: 'createTime',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      quitAfterMatch: 'quitAfterMatch',
      sortId: 'sortId',
      transformerId: 'transformerId',
      transformerName: 'transformerName',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': TransformAction },
      createTime: 'string',
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      quitAfterMatch: 'boolean',
      sortId: 'number',
      transformerId: 'string',
      transformerName: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsRequest extends $tea.Model {
  alertActionIds?: string[];
  alertActionName?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      alertActionName: 'alertActionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      alertActionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsShrinkRequest extends $tea.Model {
  alertActionIdsShrink?: string;
  alertActionName?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIdsShrink: 'alertActionIds',
      alertActionName: 'alertActionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIdsShrink: 'string',
      alertActionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBody extends $tea.Model {
  alertActions?: ListAlertActionsResponseBodyAlertActions[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertActions: 'alertActions',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActions: { 'type': 'array', 'itemType': ListAlertActionsResponseBodyAlertActions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlertActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlertActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricFilterDefSupportedOpts extends $tea.Model {
  displayNameCn?: string;
  displayNameEn?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayNameCn: 'displayNameCn',
      displayNameEn: 'displayNameEn',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayNameCn: 'string',
      displayNameEn: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleAlertMetricParamDefValues extends $tea.Model {
  labelCn?: string;
  labelEn?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      labelCn: 'labelCn',
      labelEn: 'labelEn',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelCn: 'string',
      labelEn: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCaseList extends $tea.Model {
  condition?: string;
  countCondition?: string;
  level?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
      level: 'level',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
      level: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompareListValueLevelList extends $tea.Model {
  level?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleConditionCompareList extends $tea.Model {
  aggregate?: string;
  oper?: string;
  value?: number;
  valueLevelList?: AlertRuleConditionCompareListValueLevelList[];
  yoyTimeUnit?: string;
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      oper: 'oper',
      value: 'value',
      valueLevelList: 'valueLevelList',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      oper: 'string',
      value: 'number',
      valueLevelList: { 'type': 'array', 'itemType': AlertRuleConditionCompareListValueLevelList },
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleDataSourceDsList extends $tea.Model {
  project?: string;
  regionId?: string;
  store?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      regionId: 'regionId',
      store: 'store',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      regionId: 'string',
      store: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleQueryQueries extends $tea.Model {
  duration?: number;
  /**
   * @remarks
   * 时间偏移结束时间(相对)，如果指定了start、end，则不指定window。
   */
  end?: number;
  /**
   * @remarks
   * 查询表达式
   * 
   * This parameter is required.
   */
  expr?: string;
  /**
   * @remarks
   * sls查询的时间偏移开始时间(相对)，如果指定了start、end，则不指定window。  例如：start=15， timeUnit=minute，表示15分钟前
   */
  start?: number;
  /**
   * @remarks
   * start和end、window的时间单位： day/hour/minute/second
   */
  timeUnit?: string;
  /**
   * @remarks
   * 整点时间查询区间。  如果指定了window则不指定start、end
   */
  window?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      end: 'end',
      expr: 'expr',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      end: 'number',
      expr: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleSlsQueryJoinConditions extends $tea.Model {
  /**
   * @remarks
   * 条件的左操作参数，格式为$<query_idx>.<结果集字段名>
   */
  firstField?: string;
  /**
   * @remarks
   * <, >, ==, !=, <=, >=
   */
  oper?: string;
  /**
   * @remarks
   * 条件的右操作参数，格式为$<query_idx>.<结果集字段名>
   */
  secondField?: string;
  static names(): { [key: string]: string } {
    return {
      firstField: 'firstField',
      oper: 'oper',
      secondField: 'secondField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstField: 'string',
      oper: 'string',
      secondField: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterSettingConditions extends $tea.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyCustomTemplateEntries extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  targetType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'targetType',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      templateUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyGroupingSetting extends $tea.Model {
  groupingKeys?: string[];
  periodMin?: number;
  silenceSec?: number;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      groupingKeys: 'groupingKeys',
      periodMin: 'periodMin',
      silenceSec: 'silenceSec',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupingKeys: { 'type': 'array', 'itemType': 'string' },
      periodMin: 'number',
      silenceSec: 'number',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyRoutesChannels extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelType?: string;
  enabledSubChannels?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  receivers?: string[];
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      enabledSubChannels: 'enabledSubChannels',
      receivers: 'receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      enabledSubChannels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyRoutesEffectTimeRange extends $tea.Model {
  dayInWeek?: number[];
  endTimeInMinute?: number;
  startTimeInMinute?: number;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dayInWeek: 'dayInWeek',
      endTimeInMinute: 'endTimeInMinute',
      startTimeInMinute: 'startTimeInMinute',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayInWeek: { 'type': 'array', 'itemType': 'number' },
      endTimeInMinute: 'number',
      startTimeInMinute: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyRoutes extends $tea.Model {
  channels?: NotifyStrategyForModifyRoutesChannels[];
  effectTimeRange?: NotifyStrategyForModifyRoutesEffectTimeRange;
  filterSetting?: FilterSetting;
  severities?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      effectTimeRange: 'effectTimeRange',
      filterSetting: 'filterSetting',
      severities: 'severities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutesChannels },
      effectTimeRange: NotifyStrategyForModifyRoutesEffectTimeRange,
      filterSetting: FilterSetting,
      severities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForViewCustomTemplateEntries extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  targetType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'targetType',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      templateUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForViewGroupingSetting extends $tea.Model {
  groupingKeys?: string[];
  periodMin?: number;
  silenceSec?: number;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      groupingKeys: 'groupingKeys',
      periodMin: 'periodMin',
      silenceSec: 'silenceSec',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupingKeys: { 'type': 'array', 'itemType': 'string' },
      periodMin: 'number',
      silenceSec: 'number',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForViewRoutesChannels extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelType?: string;
  enabledSubChannels?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  receivers?: string[];
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      enabledSubChannels: 'enabledSubChannels',
      receivers: 'receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      enabledSubChannels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForViewRoutesEffectTimeRange extends $tea.Model {
  dayInWeek?: number[];
  endTimeInMinute?: number;
  startTimeInMinute?: number;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dayInWeek: 'dayInWeek',
      endTimeInMinute: 'endTimeInMinute',
      startTimeInMinute: 'startTimeInMinute',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayInWeek: { 'type': 'array', 'itemType': 'number' },
      endTimeInMinute: 'number',
      startTimeInMinute: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForViewRoutes extends $tea.Model {
  channels?: NotifyStrategyForViewRoutesChannels[];
  effectTimeRange?: NotifyStrategyForViewRoutesEffectTimeRange;
  filterSetting?: FilterSetting;
  severities?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      effectTimeRange: 'effectTimeRange',
      filterSetting: 'filterSetting',
      severities: 'severities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyStrategyForViewRoutesChannels },
      effectTimeRange: NotifyStrategyForViewRoutesEffectTimeRange,
      filterSetting: FilterSetting,
      severities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionForModifyPushingSetting extends $tea.Model {
  alertActionIds?: string[];
  responsePlanId?: string;
  restoreActionIds?: string[];
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      responsePlanId: 'responsePlanId',
      restoreActionIds: 'restoreActionIds',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      responsePlanId: 'string',
      restoreActionIds: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionForViewPushingSetting extends $tea.Model {
  alertActionIds?: string[];
  responsePlanId?: string;
  restoreActionIds?: string[];
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      responsePlanId: 'responsePlanId',
      restoreActionIds: 'restoreActionIds',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      responsePlanId: 'string',
      restoreActionIds: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsEssParam extends $tea.Model {
  essGroupId?: string;
  essRuleId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      essGroupId: 'essGroupId',
      essRuleId: 'essRuleId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      essGroupId: 'string',
      essRuleId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsFcParam extends $tea.Model {
  function?: string;
  regionId?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      regionId: 'regionId',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      regionId: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsMnsParam extends $tea.Model {
  mnsType?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mnsType: 'mnsType',
      name: 'name',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsType: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsPagerDutyParam extends $tea.Model {
  key?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsSlsParam extends $tea.Model {
  logstore?: string;
  project?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActionsWebhookParam extends $tea.Model {
  contentType?: string;
  headers?: { [key: string]: string };
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      headers: 'headers',
      method: 'method',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      method: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertActionsResponseBodyAlertActions extends $tea.Model {
  alertActionId?: string;
  alertActionName?: string;
  essParam?: ListAlertActionsResponseBodyAlertActionsEssParam;
  fcParam?: ListAlertActionsResponseBodyAlertActionsFcParam;
  mnsParam?: ListAlertActionsResponseBodyAlertActionsMnsParam;
  pagerDutyParam?: ListAlertActionsResponseBodyAlertActionsPagerDutyParam;
  slsParam?: ListAlertActionsResponseBodyAlertActionsSlsParam;
  type?: string;
  webhookParam?: ListAlertActionsResponseBodyAlertActionsWebhookParam;
  static names(): { [key: string]: string } {
    return {
      alertActionId: 'alertActionId',
      alertActionName: 'alertActionName',
      essParam: 'essParam',
      fcParam: 'fcParam',
      mnsParam: 'mnsParam',
      pagerDutyParam: 'pagerDutyParam',
      slsParam: 'slsParam',
      type: 'type',
      webhookParam: 'webhookParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionId: 'string',
      alertActionName: 'string',
      essParam: ListAlertActionsResponseBodyAlertActionsEssParam,
      fcParam: ListAlertActionsResponseBodyAlertActionsFcParam,
      mnsParam: ListAlertActionsResponseBodyAlertActionsMnsParam,
      pagerDutyParam: ListAlertActionsResponseBodyAlertActionsPagerDutyParam,
      slsParam: ListAlertActionsResponseBodyAlertActionsSlsParam,
      type: 'string',
      webhookParam: ListAlertActionsResponseBodyAlertActionsWebhookParam,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 查询告警动作
   * 
   * @param tmpReq - ListAlertActionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertActionsResponse
   */
  async listAlertActionsWithOptions(tmpReq: ListAlertActionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlertActionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAlertActionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alertActionIds)) {
      request.alertActionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertActionIds, "alertActionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alertActionIdsShrink)) {
      query["alertActionIds"] = request.alertActionIdsShrink;
    }

    if (!Util.isUnset(request.alertActionName)) {
      query["alertActionName"] = request.alertActionName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAlertActions",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/alertActions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlertActionsResponse>(await this.callApi(params, req, runtime), new ListAlertActionsResponse({}));
  }

  /**
   * 查询告警动作
   * 
   * @param request - ListAlertActionsRequest
   * @returns ListAlertActionsResponse
   */
  async listAlertActions(request: ListAlertActionsRequest): Promise<ListAlertActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertActionsWithOptions(request, headers, runtime);
  }

}
