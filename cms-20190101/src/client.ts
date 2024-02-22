// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AlertEvent extends $tea.Model {
  alertName?: string;
  alertStatus?: string;
  arn?: string;
  content?: string;
  customLabels?: { [key: string]: any };
  deDupId?: string;
  details?: string;
  eventName?: string;
  eventType?: string;
  expression?: string;
  metrics?: AlertEventMetrics[];
  product?: string;
  resourceInfo?: { [key: string]: any };
  ruleName?: string;
  severity?: string;
  source?: string;
  summary?: string;
  timestamp?: number;
  traceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertStatus: 'AlertStatus',
      arn: 'Arn',
      content: 'Content',
      customLabels: 'CustomLabels',
      deDupId: 'DeDupId',
      details: 'Details',
      eventName: 'EventName',
      eventType: 'EventType',
      expression: 'Expression',
      metrics: 'Metrics',
      product: 'Product',
      resourceInfo: 'ResourceInfo',
      ruleName: 'RuleName',
      severity: 'Severity',
      source: 'Source',
      summary: 'Summary',
      timestamp: 'Timestamp',
      traceId: 'TraceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertStatus: 'string',
      arn: 'string',
      content: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      deDupId: 'string',
      details: 'string',
      eventName: 'string',
      eventType: 'string',
      expression: 'string',
      metrics: { 'type': 'array', 'itemType': AlertEventMetrics },
      product: 'string',
      resourceInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleName: 'string',
      severity: 'string',
      source: 'string',
      summary: 'string',
      timestamp: 'number',
      traceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertStrategyRelation extends $tea.Model {
  alertName?: string;
  strategyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      strategyUuid: 'StrategyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      strategyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Dimension extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EscalationRule extends $tea.Model {
  createTime?: string;
  description?: string;
  escalations?: EscalationRuleEscalations[];
  name?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      escalations: 'Escalations',
      name: 'Name',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      escalations: { 'type': 'array', 'itemType': EscalationRuleEscalations },
      name: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Incident extends $tea.Model {
  actionTime?: number;
  alertCount?: number;
  endTime?: number;
  groupingData?: { [key: string]: any };
  groupingId?: string;
  groupingKey?: string;
  incidentId?: string;
  incidentStatus?: string;
  severity?: string;
  startTime?: number;
  strategyUuid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionTime: 'ActionTime',
      alertCount: 'AlertCount',
      endTime: 'EndTime',
      groupingData: 'GroupingData',
      groupingId: 'GroupingId',
      groupingKey: 'GroupingKey',
      incidentId: 'IncidentId',
      incidentStatus: 'IncidentStatus',
      severity: 'Severity',
      startTime: 'StartTime',
      strategyUuid: 'StrategyUuid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTime: 'number',
      alertCount: 'number',
      endTime: 'number',
      groupingData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      groupingId: 'string',
      groupingKey: 'string',
      incidentId: 'string',
      incidentStatus: 'string',
      severity: 'string',
      startTime: 'number',
      strategyUuid: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Matcher extends $tea.Model {
  label?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricStat extends $tea.Model {
  associated?: { [key: string]: string };
  dimensions?: Dimension[];
  logTime?: number;
  measurements?: { [key: string]: any };
  metric?: string;
  namespace?: string;
  period?: number;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      associated: 'Associated',
      dimensions: 'Dimensions',
      logTime: 'LogTime',
      measurements: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
      period: 'Period',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associated: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dimensions: { 'type': 'array', 'itemType': Dimension },
      logTime: 'number',
      measurements: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metric: 'string',
      namespace: 'string',
      period: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJob extends $tea.Model {
  createTime?: string;
  detail?: string;
  jobStatus?: string;
  plan?: MigrationJobPlan;
  ruleNames?: string[];
  source?: MigrationJobSource[];
  updateTime?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      detail: 'Detail',
      jobStatus: 'JobStatus',
      plan: 'Plan',
      ruleNames: 'RuleNames',
      source: 'Source',
      updateTime: 'UpdateTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      detail: 'string',
      jobStatus: 'string',
      plan: MigrationJobPlan,
      ruleNames: { 'type': 'array', 'itemType': 'string' },
      source: { 'type': 'array', 'itemType': MigrationJobSource },
      updateTime: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategy extends $tea.Model {
  createTime?: string;
  description?: string;
  escalationSetting?: NotificationStrategyEscalationSetting;
  filterSetting?: NotificationStrategyFilterSetting;
  groupingSetting?: NotificationStrategyGroupingSetting;
  name?: string;
  product?: string;
  pushingSetting?: NotificationStrategyPushingSetting;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      escalationSetting: 'EscalationSetting',
      filterSetting: 'FilterSetting',
      groupingSetting: 'GroupingSetting',
      name: 'Name',
      product: 'Product',
      pushingSetting: 'PushingSetting',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      escalationSetting: NotificationStrategyEscalationSetting,
      filterSetting: NotificationStrategyFilterSetting,
      groupingSetting: NotificationStrategyGroupingSetting,
      name: 'string',
      product: 'string',
      pushingSetting: NotificationStrategyPushingSetting,
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationTemplate extends $tea.Model {
  createTime?: string;
  description?: string;
  enContent?: string;
  enItemContent?: string;
  enTitle?: string;
  name?: string;
  type?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  wraperType?: string;
  zhContent?: string;
  zhItemContent?: string;
  zhTitle?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      enContent: 'EnContent',
      enItemContent: 'EnItemContent',
      enTitle: 'EnTitle',
      name: 'Name',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
      wraperType: 'WraperType',
      zhContent: 'ZhContent',
      zhItemContent: 'ZhItemContent',
      zhTitle: 'ZhTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enContent: 'string',
      enItemContent: 'string',
      enTitle: 'string',
      name: 'string',
      type: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      wraperType: 'string',
      zhContent: 'string',
      zhItemContent: 'string',
      zhTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushingTarget extends $tea.Model {
  arn?: string;
  createTime?: string;
  description?: string;
  httpRequestTarget?: PushingTargetHttpRequestTarget;
  name?: string;
  range?: string;
  templateUuid?: string;
  type?: string;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createTime: 'CreateTime',
      description: 'Description',
      httpRequestTarget: 'HttpRequestTarget',
      name: 'Name',
      range: 'Range',
      templateUuid: 'TemplateUuid',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createTime: 'string',
      description: 'string',
      httpRequestTarget: PushingTargetHttpRequestTarget,
      name: 'string',
      range: 'string',
      templateUuid: 'string',
      type: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Subscription extends $tea.Model {
  conditions?: SubscriptionConditions[];
  createTime?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  product?: string;
  relation?: string;
  strategyUuid?: string;
  updateTime?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      createTime: 'CreateTime',
      description: 'Description',
      enabled: 'Enabled',
      name: 'Name',
      product: 'Product',
      relation: 'Relation',
      strategyUuid: 'StrategyUuid',
      updateTime: 'UpdateTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': SubscriptionConditions },
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      product: 'string',
      relation: 'string',
      strategyUuid: 'string',
      updateTime: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequest extends $tea.Model {
  groupIds?: string[];
  regionId?: string;
  tag?: AddTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTagsResponseBody;
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
      body: AddTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateRequest extends $tea.Model {
  applyMode?: string;
  enableEndTime?: number;
  enableStartTime?: number;
  groupId?: number;
  notifyLevel?: number;
  silenceTime?: number;
  templateIds?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      applyMode: 'ApplyMode',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      groupId: 'GroupId',
      notifyLevel: 'NotifyLevel',
      silenceTime: 'SilenceTime',
      templateIds: 'TemplateIds',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyMode: 'string',
      enableEndTime: 'number',
      enableStartTime: 'number',
      groupId: 'number',
      notifyLevel: 'number',
      silenceTime: 'number',
      templateIds: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: ApplyMetricRuleTemplateResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: ApplyMetricRuleTemplateResponseBodyResource,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyMetricRuleTemplateResponseBody;
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
      body: ApplyMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorRequest extends $tea.Model {
  regionId?: string;
  taskList?: BatchCreateInstantSiteMonitorRequestTaskList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskList: { 'type': 'array', 'itemType': BatchCreateInstantSiteMonitorRequestTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: BatchCreateInstantSiteMonitorResponseBodyData[];
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
      code: 'string',
      data: { 'type': 'array', 'itemType': BatchCreateInstantSiteMonitorResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateInstantSiteMonitorResponseBody;
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
      body: BatchCreateInstantSiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateIntantSiteMonitorRequest extends $tea.Model {
  regionId?: string;
  taskList?: BatchCreateIntantSiteMonitorRequestTaskList[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskList: { 'type': 'array', 'itemType': BatchCreateIntantSiteMonitorRequestTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateIntantSiteMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateIntantSiteMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateIntantSiteMonitorResponseBody;
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
      body: BatchCreateIntantSiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportRequest extends $tea.Model {
  cursor?: string;
  length?: number;
  measurements?: string[];
  metric?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      length: 'Length',
      measurements: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      length: 'number',
      measurements: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportShrinkRequest extends $tea.Model {
  cursor?: string;
  length?: number;
  measurementsShrink?: string;
  metric?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      length: 'Length',
      measurementsShrink: 'Measurements',
      metric: 'Metric',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      length: 'number',
      measurementsShrink: 'string',
      metric: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportResponseBody extends $tea.Model {
  anchor?: number;
  code?: number;
  cursor?: string;
  dataResults?: MetricStat[];
  hasNext?: boolean;
  length?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      anchor: 'Anchor',
      code: 'Code',
      cursor: 'Cursor',
      dataResults: 'DataResults',
      hasNext: 'HasNext',
      length: 'Length',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchor: 'number',
      code: 'number',
      cursor: 'string',
      dataResults: { 'type': 'array', 'itemType': MetricStat },
      hasNext: 'boolean',
      length: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchExportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchExportResponseBody;
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
      body: BatchExportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsCallNumOrderRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  period?: number;
  periodUnit?: string;
  phoneCount?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsCallNumOrderResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsCallNumOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCmsCallNumOrderResponseBody;
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
      body: CreateCmsCallNumOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsOrderRequest extends $tea.Model {
  apiCount?: string;
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  customTimeSeries?: string;
  eventStoreNum?: string;
  eventStoreTime?: string;
  logMonitorStream?: string;
  payType?: string;
  period?: number;
  periodUnit?: string;
  phoneCount?: string;
  siteEcsNum?: string;
  siteOperatorNum?: string;
  siteTaskNum?: string;
  smsCount?: string;
  suggestType?: string;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      customTimeSeries: 'CustomTimeSeries',
      eventStoreNum: 'EventStoreNum',
      eventStoreTime: 'EventStoreTime',
      logMonitorStream: 'LogMonitorStream',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      phoneCount: 'PhoneCount',
      siteEcsNum: 'SiteEcsNum',
      siteOperatorNum: 'SiteOperatorNum',
      siteTaskNum: 'SiteTaskNum',
      smsCount: 'SmsCount',
      suggestType: 'SuggestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'string',
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      customTimeSeries: 'string',
      eventStoreNum: 'string',
      eventStoreTime: 'string',
      logMonitorStream: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      phoneCount: 'string',
      siteEcsNum: 'string',
      siteOperatorNum: 'string',
      siteTaskNum: 'string',
      smsCount: 'string',
      suggestType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsOrderResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCmsOrderResponseBody;
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
      body: CreateCmsOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsSmspackageOrderRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenewPeriod?: number;
  autoUseCoupon?: boolean;
  period?: number;
  periodUnit?: string;
  smsCount?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      smsCount: 'SmsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenewPeriod: 'number',
      autoUseCoupon: 'boolean',
      period: 'number',
      periodUnit: 'string',
      smsCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsSmspackageOrderResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCmsSmspackageOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCmsSmspackageOrderResponseBody;
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
      body: CreateCmsSmspackageOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupRequest extends $tea.Model {
  contactGroupList?: string[];
  enableInstallAgent?: boolean;
  enableSubscribeEvent?: boolean;
  matchExpress?: CreateDynamicTagGroupRequestMatchExpress[];
  matchExpressFilterRelation?: string;
  regionId?: string;
  tagKey?: string;
  tagRegionId?: string;
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      enableInstallAgent: 'EnableInstallAgent',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      tagKey: 'TagKey',
      tagRegionId: 'TagRegionId',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      enableInstallAgent: 'boolean',
      enableSubscribeEvent: 'boolean',
      matchExpress: { 'type': 'array', 'itemType': CreateDynamicTagGroupRequestMatchExpress },
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      tagKey: 'string',
      tagRegionId: 'string',
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupResponseBody extends $tea.Model {
  code?: string;
  id?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDynamicTagGroupResponseBody;
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
      body: CreateDynamicTagGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequest extends $tea.Model {
  groupId?: number;
  groupMetricRules?: CreateGroupMetricRulesRequestGroupMetricRules[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMetricRules: 'GroupMetricRules',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupMetricRules: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRules },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resources?: CreateGroupMetricRulesResponseBodyResources;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: CreateGroupMetricRulesResponseBodyResources,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupMetricRulesResponseBody;
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
      body: CreateGroupMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequest extends $tea.Model {
  alertConfig?: CreateGroupMonitoringAgentProcessRequestAlertConfig[];
  groupId?: string;
  matchExpress?: CreateGroupMonitoringAgentProcessRequestMatchExpress[];
  matchExpressFilterRelation?: string;
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestAlertConfig },
      groupId: 'string',
      matchExpress: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestMatchExpress },
      matchExpressFilterRelation: 'string',
      processName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resource?: CreateGroupMonitoringAgentProcessResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resource: CreateGroupMonitoringAgentProcessResponseBodyResource,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupMonitoringAgentProcessResponseBody;
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
      body: CreateGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequest extends $tea.Model {
  alertConfig?: CreateHostAvailabilityRequestAlertConfig;
  taskOption?: CreateHostAvailabilityRequestTaskOption;
  alertConfigEscalationList?: CreateHostAvailabilityRequestAlertConfigEscalationList[];
  alertConfigTargetList?: CreateHostAvailabilityRequestAlertConfigTargetList[];
  groupId?: number;
  instanceList?: string[];
  regionId?: string;
  taskName?: string;
  taskScope?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      taskOption: 'TaskOption',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      alertConfigTargetList: 'AlertConfigTargetList',
      groupId: 'GroupId',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: CreateHostAvailabilityRequestAlertConfig,
      taskOption: CreateHostAvailabilityRequestTaskOption,
      alertConfigEscalationList: { 'type': 'array', 'itemType': CreateHostAvailabilityRequestAlertConfigEscalationList },
      alertConfigTargetList: { 'type': 'array', 'itemType': CreateHostAvailabilityRequestAlertConfigTargetList },
      groupId: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      taskScope: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHostAvailabilityResponseBody;
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
      body: CreateHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorNamespaceRequest extends $tea.Model {
  description?: string;
  namespace?: string;
  namespaceRegion?: string;
  namespaceType?: string;
  regionId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      namespaceRegion: 'NamespaceRegion',
      namespaceType: 'NamespaceType',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      namespaceRegion: 'string',
      namespaceType: 'string',
      regionId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHybridMonitorNamespaceResponseBody;
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
      body: CreateHybridMonitorNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorSLSGroupRequest extends $tea.Model {
  regionId?: string;
  SLSGroupConfig?: CreateHybridMonitorSLSGroupRequestSLSGroupConfig[];
  SLSGroupDescription?: string;
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      SLSGroupConfig: 'SLSGroupConfig',
      SLSGroupDescription: 'SLSGroupDescription',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      SLSGroupConfig: { 'type': 'array', 'itemType': CreateHybridMonitorSLSGroupRequestSLSGroupConfig },
      SLSGroupDescription: 'string',
      SLSGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorSLSGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorSLSGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHybridMonitorSLSGroupResponseBody;
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
      body: CreateHybridMonitorSLSGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequest extends $tea.Model {
  attachLabels?: CreateHybridMonitorTaskRequestAttachLabels[];
  cloudAccessId?: string[];
  collectInterval?: string;
  collectTargetType?: string;
  description?: string;
  groupId?: string;
  namespace?: string;
  regionId?: string;
  SLSProcessConfig?: CreateHybridMonitorTaskRequestSLSProcessConfig;
  targetUserId?: string;
  targetUserIdList?: string;
  taskName?: string;
  taskType?: string;
  YARMConfig?: string;
  static names(): { [key: string]: string } {
    return {
      attachLabels: 'AttachLabels',
      cloudAccessId: 'CloudAccessId',
      collectInterval: 'CollectInterval',
      collectTargetType: 'CollectTargetType',
      description: 'Description',
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
      SLSProcessConfig: 'SLSProcessConfig',
      targetUserId: 'TargetUserId',
      targetUserIdList: 'TargetUserIdList',
      taskName: 'TaskName',
      taskType: 'TaskType',
      YARMConfig: 'YARMConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLabels: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestAttachLabels },
      cloudAccessId: { 'type': 'array', 'itemType': 'string' },
      collectInterval: 'string',
      collectTargetType: 'string',
      description: 'string',
      groupId: 'string',
      namespace: 'string',
      regionId: 'string',
      SLSProcessConfig: CreateHybridMonitorTaskRequestSLSProcessConfig,
      targetUserId: 'string',
      targetUserIdList: 'string',
      taskName: 'string',
      taskType: 'string',
      YARMConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateHybridMonitorTaskResponseBody;
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
      body: CreateHybridMonitorTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorRequest extends $tea.Model {
  address?: string;
  ispCities?: string;
  optionsJson?: string;
  randomIspCity?: number;
  regionId?: string;
  taskName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      randomIspCity: 'RandomIspCity',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      randomIspCity: 'number',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorResponseBody extends $tea.Model {
  code?: string;
  createResultList?: CreateInstantSiteMonitorResponseBodyCreateResultList[];
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResultList: 'CreateResultList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResultList: { 'type': 'array', 'itemType': CreateInstantSiteMonitorResponseBodyCreateResultList },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstantSiteMonitorResponseBody;
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
      body: CreateInstantSiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleBlackListRequest extends $tea.Model {
  category?: string;
  effectiveTime?: string;
  enableEndTime?: string;
  enableStartTime?: string;
  instances?: string[];
  metrics?: CreateMetricRuleBlackListRequestMetrics[];
  name?: string;
  namespace?: string;
  regionId?: string;
  scopeType?: string;
  scopeValue?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      effectiveTime: 'EffectiveTime',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      instances: 'Instances',
      metrics: 'Metrics',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
      scopeValue: 'ScopeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      effectiveTime: 'string',
      enableEndTime: 'string',
      enableStartTime: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      metrics: { 'type': 'array', 'itemType': CreateMetricRuleBlackListRequestMetrics },
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      scopeType: 'string',
      scopeValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleBlackListResponseBody extends $tea.Model {
  code?: string;
  id?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleBlackListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMetricRuleBlackListResponseBody;
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
      body: CreateMetricRuleBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesRequest extends $tea.Model {
  overwrite?: string;
  resources?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      resources: 'Resources',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'string',
      resources: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMetricRuleResourcesResponseBody;
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
      body: CreateMetricRuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequest extends $tea.Model {
  alertTemplates?: CreateMetricRuleTemplateRequestAlertTemplates[];
  description?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': CreateMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMetricRuleTemplateResponseBody;
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
      body: CreateMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessRequest extends $tea.Model {
  instanceId?: string;
  processName?: string;
  processUser?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processName: 'string',
      processUser: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessResponseBody extends $tea.Model {
  code?: string;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitorAgentProcessResponseBody;
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
      body: CreateMonitorAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupRequest extends $tea.Model {
  contactGroups?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponseBody extends $tea.Model {
  code?: number;
  groupId?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      groupId: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitorGroupResponseBody;
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
      body: CreateMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdRequest extends $tea.Model {
  contactGroupList?: string[];
  enableInstallAgent?: boolean;
  enableSubscribeEvent?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      enableInstallAgent: 'EnableInstallAgent',
      enableSubscribeEvent: 'EnableSubscribeEvent',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
      enableInstallAgent: 'boolean',
      enableSubscribeEvent: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdResponseBody extends $tea.Model {
  code?: string;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupByResourceGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitorGroupByResourceGroupIdResponseBody;
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
      body: CreateMonitorGroupByResourceGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesRequest extends $tea.Model {
  groupId?: string;
  instances?: CreateMonitorGroupInstancesRequestInstances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instances: { 'type': 'array', 'itemType': CreateMonitorGroupInstancesRequestInstances },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitorGroupInstancesResponseBody;
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
      body: CreateMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyRequest extends $tea.Model {
  endTime?: number;
  groupId?: string;
  policyType?: string;
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      policyType: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'number',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupNotifyPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitorGroupNotifyPolicyResponseBody;
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
      body: CreateMonitorGroupNotifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessRequest extends $tea.Model {
  instanceId?: string;
  processName?: string;
  processUser?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processName: 'string',
      processUser: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  id?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitoringAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMonitoringAgentProcessResponseBody;
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
      body: CreateMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorRequest extends $tea.Model {
  address?: string;
  alertIds?: string;
  customSchedule?: string;
  interval?: string;
  ispCities?: string;
  optionsJson?: string;
  regionId?: string;
  taskName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      customSchedule: 'CustomSchedule',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      customSchedule: 'string',
      interval: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBody extends $tea.Model {
  code?: string;
  createResultList?: CreateSiteMonitorResponseBodyCreateResultList;
  data?: CreateSiteMonitorResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createResultList: 'CreateResultList',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createResultList: CreateSiteMonitorResponseBodyCreateResultList,
      data: CreateSiteMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSiteMonitorResponseBody;
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
      body: CreateSiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CursorRequest extends $tea.Model {
  endTime?: string;
  matchers?: Matcher[];
  metric?: string;
  namespace?: string;
  period?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      matchers: 'Matchers',
      metric: 'Metric',
      namespace: 'Namespace',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      matchers: { 'type': 'array', 'itemType': Matcher },
      metric: 'string',
      namespace: 'string',
      period: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CursorShrinkRequest extends $tea.Model {
  endTime?: string;
  matchersShrink?: string;
  metric?: string;
  namespace?: string;
  period?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      matchersShrink: 'Matchers',
      metric: 'Metric',
      namespace: 'Namespace',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      matchersShrink: 'string',
      metric: 'string',
      namespace: 'string',
      period: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CursorResponseBody extends $tea.Model {
  code?: number;
  cursor?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cursor: 'Cursor',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      cursor: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CursorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CursorResponseBody;
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
      body: CursorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactRequest extends $tea.Model {
  contactName?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteContactResponseBody;
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
      body: DeleteContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteContactGroupResponseBody;
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
      body: DeleteContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomMetricRequest extends $tea.Model {
  groupId?: string;
  md5?: string;
  metricName?: string;
  regionId?: string;
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      regionId: 'RegionId',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      regionId: 'string',
      UUID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomMetricResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomMetricResponseBody;
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
      body: DeleteCustomMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupRequest extends $tea.Model {
  dynamicTagRuleId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicTagGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDynamicTagGroupResponseBody;
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
      body: DeleteDynamicTagGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsRequest extends $tea.Model {
  ids?: string[];
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRuleTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventRuleTargetsResponseBody;
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
      body: DeleteEventRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRulesRequest extends $tea.Model {
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventRulesResponseBody;
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
      body: DeleteEventRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputRequest extends $tea.Model {
  destName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterOutputResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExporterOutputResponseBody;
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
      body: DeleteExporterOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleRequest extends $tea.Model {
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExporterRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExporterRuleResponseBody;
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
      body: DeleteExporterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessRequest extends $tea.Model {
  groupId?: string;
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupMonitoringAgentProcessResponseBody;
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
      body: DeleteGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHostAvailabilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHostAvailabilityResponseBody;
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
      body: DeleteHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorNamespaceRequest extends $tea.Model {
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHybridMonitorNamespaceResponseBody;
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
      body: DeleteHybridMonitorNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorSLSGroupRequest extends $tea.Model {
  regionId?: string;
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      SLSGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorSLSGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorSLSGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHybridMonitorSLSGroupResponseBody;
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
      body: DeleteHybridMonitorSLSGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorTaskRequest extends $tea.Model {
  namespace?: string;
  regionId?: string;
  targetUserId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      regionId: 'RegionId',
      targetUserId: 'TargetUserId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      regionId: 'string',
      targetUserId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteHybridMonitorTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteHybridMonitorTaskResponseBody;
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
      body: DeleteHybridMonitorTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorRequest extends $tea.Model {
  logId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logId: 'LogId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLogMonitorResponseBody;
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
      body: DeleteLogMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleBlackListRequest extends $tea.Model {
  id?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleBlackListResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleBlackListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricRuleBlackListResponseBody;
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
      body: DeleteMetricRuleBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesRequest extends $tea.Model {
  resources?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricRuleResourcesResponseBody;
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
      body: DeleteMetricRuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsRequest extends $tea.Model {
  regionId?: string;
  ruleId?: string;
  targetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  failIds?: DeleteMetricRuleTargetsResponseBodyFailIds;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failIds: 'FailIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failIds: DeleteMetricRuleTargetsResponseBodyFailIds,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricRuleTargetsResponseBody;
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
      body: DeleteMetricRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateRequest extends $tea.Model {
  regionId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: DeleteMetricRuleTemplateResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DeleteMetricRuleTemplateResponseBodyResource,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricRuleTemplateResponseBody;
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
      body: DeleteMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesRequest extends $tea.Model {
  id?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMetricRulesResponseBody;
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
      body: DeleteMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupRequest extends $tea.Model {
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBody extends $tea.Model {
  code?: number;
  group?: DeleteMonitorGroupResponseBodyGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      group: 'Group',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      group: DeleteMonitorGroupResponseBodyGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMonitorGroupResponseBody;
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
      body: DeleteMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupDynamicRuleRequest extends $tea.Model {
  category?: string;
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupDynamicRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupDynamicRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMonitorGroupDynamicRuleResponseBody;
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
      body: DeleteMonitorGroupDynamicRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupInstancesRequest extends $tea.Model {
  category?: string;
  groupId?: number;
  instanceIdList?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIdList: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMonitorGroupInstancesResponseBody;
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
      body: DeleteMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyRequest extends $tea.Model {
  groupId?: string;
  policyType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      policyType: 'PolicyType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      policyType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: number;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'number',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupNotifyPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMonitorGroupNotifyPolicyResponseBody;
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
      body: DeleteMonitorGroupNotifyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessRequest extends $tea.Model {
  instanceId?: string;
  processId?: string;
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      processId: 'string',
      processName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitoringAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMonitoringAgentProcessResponseBody;
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
      body: DeleteMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsRequest extends $tea.Model {
  isDeleteAlarms?: boolean;
  regionId?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      isDeleteAlarms: 'IsDeleteAlarms',
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleteAlarms: 'boolean',
      regionId: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteSiteMonitorsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      code: 'string',
      data: DeleteSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSiteMonitorsResponseBody;
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
      body: DeleteSiteMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListRequest extends $tea.Model {
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBody extends $tea.Model {
  alertList?: DescribeActiveMetricRuleListResponseBodyAlertList;
  code?: string;
  datapoints?: DescribeActiveMetricRuleListResponseBodyDatapoints;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertList: 'AlertList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertList: DescribeActiveMetricRuleListResponseBodyAlertList,
      code: 'string',
      datapoints: DescribeActiveMetricRuleListResponseBodyDatapoints,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeActiveMetricRuleListResponseBody;
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
      body: DescribeActiveMetricRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListRequest extends $tea.Model {
  ascending?: boolean;
  endTime?: string;
  groupId?: string;
  metricName?: string;
  namespace?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  startTime?: string;
  state?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ascending: 'Ascending',
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      state: 'State',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascending: 'boolean',
      endTime: 'string',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      state: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBody extends $tea.Model {
  alarmHistoryList?: DescribeAlertHistoryListResponseBodyAlarmHistoryList;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarmHistoryList: 'AlarmHistoryList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistoryList: DescribeAlertHistoryListResponseBodyAlarmHistoryList,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertHistoryListResponseBody;
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
      body: DescribeAlertHistoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountRequest extends $tea.Model {
  contactGroup?: string;
  endTime?: number;
  eventType?: string;
  groupBy?: string;
  groupId?: string;
  lastMin?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  searchKey?: string;
  sendStatus?: string;
  sourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      eventType: 'EventType',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      eventType: 'string',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBody extends $tea.Model {
  alertLogCount?: DescribeAlertLogCountResponseBodyAlertLogCount[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogCount: 'AlertLogCount',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogCount: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCount },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertLogCountResponseBody;
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
      body: DescribeAlertLogCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramRequest extends $tea.Model {
  contactGroup?: string;
  endTime?: number;
  eventType?: string;
  groupBy?: string;
  groupId?: string;
  lastMin?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  searchKey?: string;
  sendStatus?: string;
  sourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      eventType: 'EventType',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      eventType: 'string',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBody extends $tea.Model {
  alertLogHistogramList?: DescribeAlertLogHistogramResponseBodyAlertLogHistogramList[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogHistogramList: 'AlertLogHistogramList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogHistogramList: { 'type': 'array', 'itemType': DescribeAlertLogHistogramResponseBodyAlertLogHistogramList },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertLogHistogramResponseBody;
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
      body: DescribeAlertLogHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListRequest extends $tea.Model {
  contactGroup?: string;
  endTime?: number;
  eventType?: string;
  groupBy?: string;
  groupId?: string;
  lastMin?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  ruleId?: string;
  ruleName?: string;
  searchKey?: string;
  sendStatus?: string;
  sourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
      endTime: 'EndTime',
      eventType: 'EventType',
      groupBy: 'GroupBy',
      groupId: 'GroupId',
      lastMin: 'LastMin',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      searchKey: 'SearchKey',
      sendStatus: 'SendStatus',
      sourceType: 'SourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: 'string',
      endTime: 'number',
      eventType: 'string',
      groupBy: 'string',
      groupId: 'string',
      lastMin: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      searchKey: 'string',
      sendStatus: 'string',
      sourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBody extends $tea.Model {
  alertLogList?: DescribeAlertLogListResponseBodyAlertLogList[];
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLogList: 'AlertLogList',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLogList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogList },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertLogListResponseBody;
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
      body: DescribeAlertLogListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesRequest extends $tea.Model {
  alertBeforeTime?: string;
  dimensions?: string;
  groupId?: string;
  namespace?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      alertBeforeTime: 'AlertBeforeTime',
      dimensions: 'Dimensions',
      groupId: 'GroupId',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertBeforeTime: 'string',
      dimensions: 'string',
      groupId: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resources?: DescribeAlertingMetricRuleResourcesResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resources: DescribeAlertingMetricRuleResourcesResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAlertingMetricRuleResourcesResponseBody;
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
      body: DescribeAlertingMetricRuleResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBody extends $tea.Model {
  code?: string;
  contactGroupList?: DescribeContactGroupListResponseBodyContactGroupList;
  contactGroups?: DescribeContactGroupListResponseBodyContactGroups;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactGroupList: 'ContactGroupList',
      contactGroups: 'ContactGroups',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactGroupList: DescribeContactGroupListResponseBodyContactGroupList,
      contactGroups: DescribeContactGroupListResponseBodyContactGroups,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContactGroupListResponseBody;
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
      body: DescribeContactGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListRequest extends $tea.Model {
  chanelType?: string;
  chanelValue?: string;
  contactName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chanelType: 'ChanelType',
      chanelValue: 'ChanelValue',
      contactName: 'ContactName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chanelType: 'string',
      chanelValue: 'string',
      contactName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBody extends $tea.Model {
  code?: string;
  contacts?: DescribeContactListResponseBodyContacts;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListResponseBodyContacts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContactListResponseBody;
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
      body: DescribeContactListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBody extends $tea.Model {
  code?: string;
  contacts?: DescribeContactListByContactGroupResponseBodyContacts;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListByContactGroupResponseBodyContacts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeContactListByContactGroupResponseBody;
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
      body: DescribeContactListByContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeRequest extends $tea.Model {
  endTime?: string;
  eventId?: string;
  groupId?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBody extends $tea.Model {
  code?: string;
  customEvents?: DescribeCustomEventAttributeResponseBodyCustomEvents;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEvents: 'CustomEvents',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEvents: DescribeCustomEventAttributeResponseBodyCustomEvents,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomEventAttributeResponseBody;
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
      body: DescribeCustomEventAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountRequest extends $tea.Model {
  endTime?: string;
  eventId?: string;
  groupId?: string;
  name?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      name: 'Name',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      name: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBody extends $tea.Model {
  code?: string;
  customEventCounts?: DescribeCustomEventCountResponseBodyCustomEventCounts;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEventCounts: 'CustomEventCounts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEventCounts: DescribeCustomEventCountResponseBodyCustomEventCounts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomEventCountResponseBody;
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
      body: DescribeCustomEventCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramRequest extends $tea.Model {
  endTime?: string;
  eventId?: string;
  groupId?: string;
  level?: string;
  name?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventId: 'EventId',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventId: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBody extends $tea.Model {
  code?: string;
  eventHistograms?: DescribeCustomEventHistogramResponseBodyEventHistograms;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventHistograms: 'EventHistograms',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventHistograms: DescribeCustomEventHistogramResponseBodyEventHistograms,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomEventHistogramResponseBody;
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
      body: DescribeCustomEventHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListRequest extends $tea.Model {
  dimension?: string;
  groupId?: string;
  md5?: string;
  metricName?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomMetricListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCustomMetricListResponseBody;
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
      body: DescribeCustomMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListRequest extends $tea.Model {
  dynamicTagRuleId?: string;
  pageNumber?: string;
  pageSize?: string;
  tagKey?: string;
  tagRegionId?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagKey: 'TagKey',
      tagRegionId: 'TagRegionId',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      tagKey: 'string',
      tagRegionId: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  success?: boolean;
  tagGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      tagGroupList: 'TagGroupList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupList,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDynamicTagRuleListResponseBody;
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
      body: DescribeDynamicTagRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeRequest extends $tea.Model {
  regionId?: string;
  ruleName?: string;
  silenceTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: DescribeEventRuleAttributeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeEventRuleAttributeResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventRuleAttributeResponseBody;
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
      body: DescribeEventRuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListRequest extends $tea.Model {
  groupId?: string;
  isEnable?: boolean;
  namePrefix?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      isEnable: 'IsEnable',
      namePrefix: 'NamePrefix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      isEnable: 'boolean',
      namePrefix: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBody extends $tea.Model {
  code?: string;
  eventRules?: DescribeEventRuleListResponseBodyEventRules;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      eventRules: 'EventRules',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      eventRules: DescribeEventRuleListResponseBodyEventRules,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventRuleListResponseBody;
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
      body: DescribeEventRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListRequest extends $tea.Model {
  regionId?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBody extends $tea.Model {
  code?: string;
  contactParameters?: DescribeEventRuleTargetListResponseBodyContactParameters;
  fcParameters?: DescribeEventRuleTargetListResponseBodyFcParameters;
  message?: string;
  mnsParameters?: DescribeEventRuleTargetListResponseBodyMnsParameters;
  openApiParameters?: DescribeEventRuleTargetListResponseBodyOpenApiParameters;
  requestId?: string;
  slsParameters?: DescribeEventRuleTargetListResponseBodySlsParameters;
  webhookParameters?: DescribeEventRuleTargetListResponseBodyWebhookParameters;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      message: 'Message',
      mnsParameters: 'MnsParameters',
      openApiParameters: 'OpenApiParameters',
      requestId: 'RequestId',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactParameters: DescribeEventRuleTargetListResponseBodyContactParameters,
      fcParameters: DescribeEventRuleTargetListResponseBodyFcParameters,
      message: 'string',
      mnsParameters: DescribeEventRuleTargetListResponseBodyMnsParameters,
      openApiParameters: DescribeEventRuleTargetListResponseBodyOpenApiParameters,
      requestId: 'string',
      slsParameters: DescribeEventRuleTargetListResponseBodySlsParameters,
      webhookParameters: DescribeEventRuleTargetListResponseBodyWebhookParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventRuleTargetListResponseBody;
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
      body: DescribeEventRuleTargetListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBody extends $tea.Model {
  code?: string;
  datapoints?: DescribeExporterOutputListResponseBodyDatapoints;
  message?: string;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: DescribeExporterOutputListResponseBodyDatapoints,
      message: 'string',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExporterOutputListResponseBody;
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
      body: DescribeExporterOutputListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBody extends $tea.Model {
  code?: string;
  datapoints?: DescribeExporterRuleListResponseBodyDatapoints;
  message?: string;
  pageNumber?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: DescribeExporterRuleListResponseBodyDatapoints,
      message: 'string',
      pageNumber: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExporterRuleListResponseBody;
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
      body: DescribeExporterRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessRequest extends $tea.Model {
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  processName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processName: 'ProcessName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      processName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  processes?: DescribeGroupMonitoringAgentProcessResponseBodyProcesses;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processes: 'Processes',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      processes: DescribeGroupMonitoringAgentProcessResponseBodyProcesses,
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGroupMonitoringAgentProcessResponseBody;
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
      body: DescribeGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListRequest extends $tea.Model {
  groupId?: number;
  id?: number;
  ids?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      id: 'Id',
      ids: 'Ids',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      id: 'number',
      ids: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskList?: DescribeHostAvailabilityListResponseBodyTaskList;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskList: DescribeHostAvailabilityListResponseBodyTaskList,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHostAvailabilityListResponseBody;
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
      body: DescribeHostAvailabilityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListRequest extends $tea.Model {
  end?: number;
  namespace?: string;
  period?: string;
  promSQL?: string;
  regionId?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      namespace: 'Namespace',
      period: 'Period',
      promSQL: 'PromSQL',
      regionId: 'RegionId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      namespace: 'string',
      period: 'string',
      promSQL: 'string',
      regionId: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  timeSeries?: DescribeHybridMonitorDataListResponseBodyTimeSeries[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      timeSeries: 'TimeSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      timeSeries: { 'type': 'array', 'itemType': DescribeHybridMonitorDataListResponseBodyTimeSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridMonitorDataListResponseBody;
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
      body: DescribeHybridMonitorDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListRequest extends $tea.Model {
  keyword?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  showTaskStatistic?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      showTaskStatistic: 'ShowTaskStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      showTaskStatistic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBody extends $tea.Model {
  code?: string;
  describeHybridMonitorNamespace?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespace[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      describeHybridMonitorNamespace: 'DescribeHybridMonitorNamespace',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      describeHybridMonitorNamespace: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespace },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridMonitorNamespaceListResponseBody;
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
      body: DescribeHybridMonitorNamespaceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: string;
  pageSize?: string;
  regionId?: string;
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      SLSGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupResponseBody extends $tea.Model {
  code?: string;
  list?: DescribeHybridMonitorSLSGroupResponseBodyList[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      list: 'List',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': DescribeHybridMonitorSLSGroupResponseBodyList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridMonitorSLSGroupResponseBody;
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
      body: DescribeHybridMonitorSLSGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListRequest extends $tea.Model {
  groupId?: string;
  includeAliyunTask?: boolean;
  keyword?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  targetUserId?: number;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      includeAliyunTask: 'IncludeAliyunTask',
      keyword: 'Keyword',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      targetUserId: 'TargetUserId',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      includeAliyunTask: 'boolean',
      keyword: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      targetUserId: 'number',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: string;
  taskList?: DescribeHybridMonitorTaskListResponseBodyTaskList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      taskList: 'TaskList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'string',
      taskList: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskList },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHybridMonitorTaskListResponseBody;
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
      body: DescribeHybridMonitorTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeRequest extends $tea.Model {
  metricName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBody extends $tea.Model {
  code?: string;
  logMonitor?: DescribeLogMonitorAttributeResponseBodyLogMonitor;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logMonitor: 'LogMonitor',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logMonitor: DescribeLogMonitorAttributeResponseBodyLogMonitor,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogMonitorAttributeResponseBody;
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
      body: DescribeLogMonitorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListRequest extends $tea.Model {
  groupId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBody extends $tea.Model {
  code?: string;
  logMonitorList?: DescribeLogMonitorListResponseBodyLogMonitorList[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logMonitorList: 'LogMonitorList',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logMonitorList: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorList },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLogMonitorListResponseBody;
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
      body: DescribeLogMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataRequest extends $tea.Model {
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricDataResponseBody;
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
      body: DescribeMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastRequest extends $tea.Model {
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  nextToken?: string;
  period?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricLastResponseBody;
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
      body: DescribeMetricLastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListRequest extends $tea.Model {
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  nextToken?: string;
  period?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricListResponseBody;
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
      body: DescribeMetricListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListRequest extends $tea.Model {
  labels?: string;
  metricName?: string;
  namespace?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      metricName: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resources?: DescribeMetricMetaListResponseBodyResources;
  success?: boolean;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resources: DescribeMetricMetaListResponseBodyResources,
      success: 'boolean',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricMetaListResponseBody;
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
      body: DescribeMetricMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListRequest extends $tea.Model {
  category?: string;
  ids?: string[];
  instanceIds?: string[];
  isEnable?: boolean;
  name?: string;
  namespace?: string;
  order?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ids: 'Ids',
      instanceIds: 'InstanceIds',
      isEnable: 'IsEnable',
      name: 'Name',
      namespace: 'Namespace',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      isEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      order: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      scopeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListResponseBody extends $tea.Model {
  code?: string;
  describeMetricRuleBlackList?: DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackList[];
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      describeMetricRuleBlackList: 'DescribeMetricRuleBlackList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      describeMetricRuleBlackList: { 'type': 'array', 'itemType': DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricRuleBlackListResponseBody;
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
      body: DescribeMetricRuleBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountRequest extends $tea.Model {
  metricName?: string;
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  metricRuleCount?: DescribeMetricRuleCountResponseBodyMetricRuleCount;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      metricRuleCount: 'MetricRuleCount',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricRuleCount: DescribeMetricRuleCountResponseBodyMetricRuleCount,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricRuleCountResponseBody;
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
      body: DescribeMetricRuleCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListRequest extends $tea.Model {
  alertState?: string;
  dimensions?: string;
  enableState?: boolean;
  groupId?: string;
  metricName?: string;
  namespace?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  ruleIds?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      dimensions: 'Dimensions',
      enableState: 'EnableState',
      groupId: 'GroupId',
      metricName: 'MetricName',
      namespace: 'Namespace',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleIds: 'RuleIds',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      dimensions: 'string',
      enableState: 'boolean',
      groupId: 'string',
      metricName: 'string',
      namespace: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      ruleIds: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBody extends $tea.Model {
  alarms?: DescribeMetricRuleListResponseBodyAlarms;
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      alarms: 'Alarms',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarms: DescribeMetricRuleListResponseBodyAlarms,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricRuleListResponseBody;
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
      body: DescribeMetricRuleListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsRequest extends $tea.Model {
  regionId?: string;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  targets?: DescribeMetricRuleTargetsResponseBodyTargets;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      targets: DescribeMetricRuleTargetsResponseBodyTargets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricRuleTargetsResponseBody;
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
      body: DescribeMetricRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: DescribeMetricRuleTemplateAttributeResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DescribeMetricRuleTemplateAttributeResponseBodyResource,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricRuleTemplateAttributeResponseBody;
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
      body: DescribeMetricRuleTemplateAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListRequest extends $tea.Model {
  history?: boolean;
  keyword?: string;
  name?: string;
  order?: boolean;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      history: 'History',
      keyword: 'Keyword',
      name: 'Name',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: 'boolean',
      keyword: 'string',
      name: 'string',
      order: 'boolean',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  templates?: DescribeMetricRuleTemplateListResponseBodyTemplates;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templates: 'Templates',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templates: DescribeMetricRuleTemplateListResponseBodyTemplates,
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricRuleTemplateListResponseBody;
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
      body: DescribeMetricRuleTemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopRequest extends $tea.Model {
  dimensions?: string;
  endTime?: string;
  express?: string;
  length?: string;
  metricName?: string;
  namespace?: string;
  orderDesc?: string;
  orderby?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      express: 'Express',
      length: 'Length',
      metricName: 'MetricName',
      namespace: 'Namespace',
      orderDesc: 'OrderDesc',
      orderby: 'Orderby',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      express: 'string',
      length: 'string',
      metricName: 'string',
      namespace: 'string',
      orderDesc: 'string',
      orderby: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopResponseBody extends $tea.Model {
  code?: string;
  datapoints?: string;
  message?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datapoints: 'string',
      message: 'string',
      period: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricTopResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricTopResponseBody;
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
      body: DescribeMetricTopResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesRequest extends $tea.Model {
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  monitorGroupCategories?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      monitorGroupCategories: 'MonitorGroupCategories',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      monitorGroupCategories: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorGroupCategoriesResponseBody;
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
      body: DescribeMonitorGroupCategoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesRequest extends $tea.Model {
  groupId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResource;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resource: DescribeMonitorGroupDynamicRulesResponseBodyResource,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorGroupDynamicRulesResponseBody;
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
      body: DescribeMonitorGroupDynamicRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeRequest extends $tea.Model {
  category?: string;
  groupId?: number;
  instanceIds?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  total?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIds: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      total: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: DescribeMonitorGroupInstanceAttributeResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupInstanceAttributeResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorGroupInstanceAttributeResponseBody;
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
      body: DescribeMonitorGroupInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesRequest extends $tea.Model {
  category?: string;
  groupId?: number;
  instanceIds?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      groupId: 'GroupId',
      instanceIds: 'InstanceIds',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      groupId: 'number',
      instanceIds: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: DescribeMonitorGroupInstancesResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupInstancesResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorGroupInstancesResponseBody;
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
      body: DescribeMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListRequest extends $tea.Model {
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  policyType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  notifyPolicyList?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList;
  requestId?: string;
  success?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      notifyPolicyList: 'NotifyPolicyList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      notifyPolicyList: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList,
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorGroupNotifyPolicyListResponseBody;
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
      body: DescribeMonitorGroupNotifyPolicyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsRequest extends $tea.Model {
  dynamicTagRuleId?: string;
  groupFounderTagKey?: string;
  groupFounderTagValue?: string;
  groupId?: string;
  groupName?: string;
  includeTemplateHistory?: boolean;
  instanceId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  selectContactGroups?: boolean;
  tag?: DescribeMonitorGroupsRequestTag[];
  type?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      groupFounderTagKey: 'GroupFounderTagKey',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      includeTemplateHistory: 'IncludeTemplateHistory',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      selectContactGroups: 'SelectContactGroups',
      tag: 'Tag',
      type: 'Type',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      groupFounderTagKey: 'string',
      groupFounderTagValue: 'string',
      groupId: 'string',
      groupName: 'string',
      includeTemplateHistory: 'boolean',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      selectContactGroups: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsRequestTag },
      type: 'string',
      types: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: DescribeMonitorGroupsResponseBodyResources;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupsResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorGroupsResponseBody;
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
      body: DescribeMonitorGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeRequest extends $tea.Model {
  regionId?: string;
  showUsed?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      showUsed: 'ShowUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      showUsed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resourceQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resourceQuota: 'ResourceQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resourceQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorResourceQuotaAttributeResponseBody;
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
      body: DescribeMonitorResourceQuotaAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentAccessKeyRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentAccessKeyResponseBody extends $tea.Model {
  accessKey?: string;
  code?: number;
  message?: string;
  requestId?: string;
  secretKey?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      secretKey: 'SecretKey',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      secretKey: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentAccessKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitoringAgentAccessKeyResponseBody;
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
      body: DescribeMonitoringAgentAccessKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentConfigRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentConfigResponseBody extends $tea.Model {
  autoInstall?: boolean;
  code?: string;
  enableActiveAlert?: string;
  enableInstallAgentNewECS?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      code: 'Code',
      enableActiveAlert: 'EnableActiveAlert',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      code: 'string',
      enableActiveAlert: 'string',
      enableInstallAgentNewECS: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitoringAgentConfigResponseBody;
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
      body: DescribeMonitoringAgentConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsRequest extends $tea.Model {
  aliyunHost?: boolean;
  hostName?: string;
  instanceIds?: string;
  instanceRegionId?: string;
  keyWord?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  serialNumbers?: string;
  status?: string;
  sysomStatus?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunHost: 'AliyunHost',
      hostName: 'HostName',
      instanceIds: 'InstanceIds',
      instanceRegionId: 'InstanceRegionId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      serialNumbers: 'SerialNumbers',
      status: 'Status',
      sysomStatus: 'SysomStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunHost: 'boolean',
      hostName: 'string',
      instanceIds: 'string',
      instanceRegionId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      serialNumbers: 'string',
      status: 'string',
      sysomStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBody extends $tea.Model {
  code?: string;
  hosts?: DescribeMonitoringAgentHostsResponseBodyHosts;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  pageTotal?: number;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hosts: 'Hosts',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageTotal: 'PageTotal',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hosts: DescribeMonitoringAgentHostsResponseBodyHosts,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageTotal: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitoringAgentHostsResponseBody;
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
      body: DescribeMonitoringAgentHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nodeProcesses?: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeProcesses: 'NodeProcesses',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeProcesses: DescribeMonitoringAgentProcessesResponseBodyNodeProcesses,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitoringAgentProcessesResponseBody;
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
      body: DescribeMonitoringAgentProcessesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesRequest extends $tea.Model {
  hostAvailabilityTaskId?: string;
  instanceIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAvailabilityTaskId: 'HostAvailabilityTaskId',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAvailabilityTaskId: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nodeStatusList?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeStatusList: 'NodeStatusList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeStatusList: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitoringAgentStatusesResponseBody;
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
      body: DescribeMonitoringAgentStatusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringConfigRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringConfigResponseBody extends $tea.Model {
  autoInstall?: boolean;
  code?: string;
  enableInstallAgentNewECS?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      code: 'Code',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      code: 'string',
      enableInstallAgentNewECS: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitoringConfigResponseBody;
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
      body: DescribeMonitoringConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  tagKeys?: DescribeProductResourceTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagKeys: DescribeProductResourceTagKeyListResponseBodyTagKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductResourceTagKeyListResponseBody;
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
      body: DescribeProductResourceTagKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBody extends $tea.Model {
  allProductInitMetricRuleList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList;
  code?: number;
  datapoints?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allProductInitMetricRuleList: 'AllProductInitMetricRuleList',
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProductInitMetricRuleList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList,
      code: 'number',
      datapoints: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductsOfActiveMetricRuleResponseBody;
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
      body: DescribeProductsOfActiveMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaRequest extends $tea.Model {
  labels?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  resources?: DescribeProjectMetaResponseBodyResources;
  success?: boolean;
  total?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      resources: DescribeProjectMetaResponseBodyResources,
      success: 'boolean',
      total: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectMetaResponseBody;
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
      body: DescribeProjectMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeRequest extends $tea.Model {
  includeAlert?: boolean;
  regionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      includeAlert: 'IncludeAlert',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeAlert: 'boolean',
      regionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  metricRules?: DescribeSiteMonitorAttributeResponseBodyMetricRules;
  requestId?: string;
  siteMonitors?: DescribeSiteMonitorAttributeResponseBodySiteMonitors;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      metricRules: 'MetricRules',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricRules: DescribeSiteMonitorAttributeResponseBodyMetricRules,
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorAttributeResponseBodySiteMonitors,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorAttributeResponseBody;
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
      body: DescribeSiteMonitorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataRequest extends $tea.Model {
  endTime?: string;
  length?: number;
  metricName?: string;
  nextToken?: string;
  period?: string;
  regionId?: string;
  startTime?: string;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorDataResponseBody;
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
      body: DescribeSiteMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListRequest extends $tea.Model {
  city?: string;
  IPV4?: boolean;
  IPV6?: boolean;
  isp?: string;
  regionId?: string;
  viewAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      IPV4: 'IPV4',
      IPV6: 'IPV6',
      isp: 'Isp',
      regionId: 'RegionId',
      viewAll: 'ViewAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      IPV4: 'boolean',
      IPV6: 'boolean',
      isp: 'string',
      regionId: 'string',
      viewAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBody extends $tea.Model {
  code?: string;
  ispCityList?: DescribeSiteMonitorISPCityListResponseBodyIspCityList;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ispCityList: 'IspCityList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ispCityList: DescribeSiteMonitorISPCityListResponseBodyIspCityList,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorISPCityListResponseBody;
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
      body: DescribeSiteMonitorISPCityListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListRequest extends $tea.Model {
  keyword?: string;
  page?: number;
  pageSize?: number;
  regionId?: string;
  taskId?: string;
  taskState?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskState: 'TaskState',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskId: 'string',
      taskState: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  siteMonitors?: DescribeSiteMonitorListResponseBodySiteMonitors;
  success?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorListResponseBodySiteMonitors,
      success: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorListResponseBody;
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
      body: DescribeSiteMonitorListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorLogRequest extends $tea.Model {
  browser?: string;
  browserInfo?: string;
  city?: string;
  device?: string;
  endTime?: string;
  filter?: string;
  isp?: string;
  length?: number;
  metricName?: string;
  nextToken?: string;
  regionId?: string;
  startTime?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      browser: 'Browser',
      browserInfo: 'BrowserInfo',
      city: 'City',
      device: 'Device',
      endTime: 'EndTime',
      filter: 'Filter',
      isp: 'Isp',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browser: 'string',
      browserInfo: 'string',
      city: 'string',
      device: 'string',
      endTime: 'string',
      filter: 'string',
      isp: 'string',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorLogResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorLogResponseBody;
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
      body: DescribeSiteMonitorLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeSiteMonitorQuotaResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      code: 'string',
      data: DescribeSiteMonitorQuotaResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorQuotaResponseBody;
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
      body: DescribeSiteMonitorQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsRequest extends $tea.Model {
  metricName?: string;
  regionId?: string;
  startTime?: string;
  taskId?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      regionId: 'RegionId',
      startTime: 'StartTime',
      taskId: 'TaskId',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      regionId: 'string',
      startTime: 'string',
      taskId: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: string;
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
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSiteMonitorStatisticsResponseBody;
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
      body: DescribeSiteMonitorStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeRequest extends $tea.Model {
  endTime?: string;
  eventType?: string;
  groupId?: string;
  level?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  product?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  systemEvents?: DescribeSystemEventAttributeResponseBodySystemEvents;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEvents: 'SystemEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEvents: DescribeSystemEventAttributeResponseBodySystemEvents,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemEventAttributeResponseBody;
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
      body: DescribeSystemEventAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountRequest extends $tea.Model {
  endTime?: string;
  eventType?: string;
  groupId?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  systemEventCounts?: DescribeSystemEventCountResponseBodySystemEventCounts;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEventCounts: 'SystemEventCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEventCounts: DescribeSystemEventCountResponseBodySystemEventCounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemEventCountResponseBody;
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
      body: DescribeSystemEventCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramRequest extends $tea.Model {
  endTime?: string;
  eventType?: string;
  groupId?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  searchKeywords?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      groupId: 'GroupId',
      level: 'Level',
      name: 'Name',
      product: 'Product',
      regionId: 'RegionId',
      searchKeywords: 'SearchKeywords',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      groupId: 'string',
      level: 'string',
      name: 'string',
      product: 'string',
      regionId: 'string',
      searchKeywords: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  systemEventHistograms?: DescribeSystemEventHistogramResponseBodySystemEventHistograms;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEventHistograms: 'SystemEventHistograms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEventHistograms: DescribeSystemEventHistogramResponseBodySystemEventHistograms,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemEventHistogramResponseBody;
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
      body: DescribeSystemEventHistogramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListResponseBody extends $tea.Model {
  code?: number;
  data?: DescribeSystemEventMetaListResponseBodyData;
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
      data: DescribeSystemEventMetaListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSystemEventMetaListResponseBody;
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
      body: DescribeSystemEventMetaListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagKeys?: DescribeTagKeyListResponseBodyTagKeys;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagKeys: DescribeTagKeyListResponseBodyTagKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagKeyListResponseBody;
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
      body: DescribeTagKeyListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagValues?: DescribeTagValueListResponseBodyTagValues;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagValues: DescribeTagValueListResponseBodyTagValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagValueListResponseBody;
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
      body: DescribeTagValueListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  unhealthyList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      unhealthyList: 'UnhealthyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      unhealthyList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUnhealthyHostAvailabilityResponseBody;
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
      body: DescribeUnhealthyHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleRequest extends $tea.Model {
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableActiveMetricRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableActiveMetricRuleResponseBody;
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
      body: DisableActiveMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesRequest extends $tea.Model {
  regionId?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableEventRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableEventRulesResponseBody;
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
      body: DisableEventRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHostAvailabilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableHostAvailabilityResponseBody;
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
      body: DisableHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesRequest extends $tea.Model {
  regionId?: string;
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableMetricRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableMetricRulesResponseBody;
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
      body: DisableMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsRequest extends $tea.Model {
  regionId?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponseBody extends $tea.Model {
  code?: string;
  data?: DisableSiteMonitorsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      code: 'string',
      data: DisableSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableSiteMonitorsResponseBody;
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
      body: DisableSiteMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleRequest extends $tea.Model {
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableActiveMetricRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableActiveMetricRuleResponseBody;
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
      body: EnableActiveMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesRequest extends $tea.Model {
  regionId?: string;
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableEventRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableEventRulesResponseBody;
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
      body: EnableEventRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityRequest extends $tea.Model {
  id?: number[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHostAvailabilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHostAvailabilityResponseBody;
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
      body: EnableHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRuleBlackListRequest extends $tea.Model {
  id?: string;
  isEnable?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isEnable: 'IsEnable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isEnable: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRuleBlackListResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRuleBlackListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableMetricRuleBlackListResponseBody;
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
      body: EnableMetricRuleBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesRequest extends $tea.Model {
  regionId?: string;
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableMetricRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableMetricRulesResponseBody;
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
      body: EnableMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsRequest extends $tea.Model {
  regionId?: string;
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponseBody extends $tea.Model {
  code?: string;
  data?: EnableSiteMonitorsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      code: 'string',
      data: EnableSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableSiteMonitorsResponseBody;
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
      body: EnableSiteMonitorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentRequest extends $tea.Model {
  force?: boolean;
  installCommand?: string;
  instanceIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      installCommand: 'InstallCommand',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      installCommand: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMonitoringAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallMonitoringAgentResponseBody;
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
      body: InstallMonitoringAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequest extends $tea.Model {
  alertConfig?: ModifyGroupMonitoringAgentProcessRequestAlertConfig[];
  groupId?: string;
  id?: string;
  matchExpressFilterRelation?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': ModifyGroupMonitoringAgentProcessRequestAlertConfig },
      groupId: 'string',
      id: 'string',
      matchExpressFilterRelation: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGroupMonitoringAgentProcessResponseBody;
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
      body: ModifyGroupMonitoringAgentProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequest extends $tea.Model {
  alertConfig?: ModifyHostAvailabilityRequestAlertConfig;
  taskOption?: ModifyHostAvailabilityRequestTaskOption;
  alertConfigEscalationList?: ModifyHostAvailabilityRequestAlertConfigEscalationList[];
  alertConfigTargetList?: ModifyHostAvailabilityRequestAlertConfigTargetList[];
  groupId?: number;
  id?: number;
  instanceList?: string[];
  regionId?: string;
  taskName?: string;
  taskScope?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      taskOption: 'TaskOption',
      alertConfigEscalationList: 'AlertConfigEscalationList',
      alertConfigTargetList: 'AlertConfigTargetList',
      groupId: 'GroupId',
      id: 'Id',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskScope: 'TaskScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: ModifyHostAvailabilityRequestAlertConfig,
      taskOption: ModifyHostAvailabilityRequestTaskOption,
      alertConfigEscalationList: { 'type': 'array', 'itemType': ModifyHostAvailabilityRequestAlertConfigEscalationList },
      alertConfigTargetList: { 'type': 'array', 'itemType': ModifyHostAvailabilityRequestAlertConfigTargetList },
      groupId: 'number',
      id: 'number',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      taskName: 'string',
      taskScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostAvailabilityResponseBody;
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
      body: ModifyHostAvailabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoRequest extends $tea.Model {
  hostName?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHostInfoResponseBody;
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
      body: ModifyHostInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorNamespaceRequest extends $tea.Model {
  description?: string;
  namespace?: string;
  regionId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      namespace: 'Namespace',
      regionId: 'RegionId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      namespace: 'string',
      regionId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorNamespaceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridMonitorNamespaceResponseBody;
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
      body: ModifyHybridMonitorNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorSLSGroupRequest extends $tea.Model {
  regionId?: string;
  SLSGroupConfig?: ModifyHybridMonitorSLSGroupRequestSLSGroupConfig[];
  SLSGroupDescription?: string;
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      SLSGroupConfig: 'SLSGroupConfig',
      SLSGroupDescription: 'SLSGroupDescription',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      SLSGroupConfig: { 'type': 'array', 'itemType': ModifyHybridMonitorSLSGroupRequestSLSGroupConfig },
      SLSGroupDescription: 'string',
      SLSGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorSLSGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorSLSGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridMonitorSLSGroupResponseBody;
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
      body: ModifyHybridMonitorSLSGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequest extends $tea.Model {
  attachLabels?: ModifyHybridMonitorTaskRequestAttachLabels[];
  collectInterval?: string;
  description?: string;
  regionId?: string;
  SLSProcessConfig?: ModifyHybridMonitorTaskRequestSLSProcessConfig;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      attachLabels: 'AttachLabels',
      collectInterval: 'CollectInterval',
      description: 'Description',
      regionId: 'RegionId',
      SLSProcessConfig: 'SLSProcessConfig',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLabels: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestAttachLabels },
      collectInterval: 'string',
      description: 'string',
      regionId: 'string',
      SLSProcessConfig: ModifyHybridMonitorTaskRequestSLSProcessConfig,
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyHybridMonitorTaskResponseBody;
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
      body: ModifyHybridMonitorTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleBlackListRequest extends $tea.Model {
  category?: string;
  effectiveTime?: string;
  enableEndTime?: string;
  enableStartTime?: string;
  id?: string;
  instances?: string[];
  metrics?: ModifyMetricRuleBlackListRequestMetrics[];
  name?: string;
  namespace?: string;
  regionId?: string;
  scopeType?: string;
  scopeValue?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      effectiveTime: 'EffectiveTime',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      id: 'Id',
      instances: 'Instances',
      metrics: 'Metrics',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
      scopeValue: 'ScopeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      effectiveTime: 'string',
      enableEndTime: 'string',
      enableStartTime: 'string',
      id: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      metrics: { 'type': 'array', 'itemType': ModifyMetricRuleBlackListRequestMetrics },
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      scopeType: 'string',
      scopeValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleBlackListResponseBody extends $tea.Model {
  code?: string;
  count?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleBlackListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMetricRuleBlackListResponseBody;
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
      body: ModifyMetricRuleBlackListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequest extends $tea.Model {
  alertTemplates?: ModifyMetricRuleTemplateRequestAlertTemplates[];
  description?: string;
  name?: string;
  regionId?: string;
  restVersion?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: { 'type': 'array', 'itemType': ModifyMetricRuleTemplateRequestAlertTemplates },
      description: 'string',
      name: 'string',
      regionId: 'string',
      restVersion: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMetricRuleTemplateResponseBody;
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
      body: ModifyMetricRuleTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupRequest extends $tea.Model {
  contactGroups?: string;
  groupId?: string;
  groupName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      groupId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMonitorGroupResponseBody;
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
      body: ModifyMonitorGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesRequest extends $tea.Model {
  groupId?: number;
  instances?: ModifyMonitorGroupInstancesRequestInstances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instances: { 'type': 'array', 'itemType': ModifyMonitorGroupInstancesRequestInstances },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyMonitorGroupInstancesResponseBody;
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
      body: ModifyMonitorGroupInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorRequest extends $tea.Model {
  address?: string;
  alertIds?: string;
  customSchedule?: string;
  interval?: string;
  intervalUnit?: string;
  ispCities?: string;
  optionsJson?: string;
  regionId?: string;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      customSchedule: 'CustomSchedule',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      customSchedule: 'string',
      interval: 'string',
      intervalUnit: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      regionId: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponseBody extends $tea.Model {
  code?: string;
  data?: ModifySiteMonitorResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
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
      code: 'string',
      data: ModifySiteMonitorResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySiteMonitorResponseBody;
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
      body: ModifySiteMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCmsServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCmsServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenCmsServiceResponseBody;
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
      body: OpenCmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactRequest extends $tea.Model {
  channels?: PutContactRequestChannels;
  contactName?: string;
  describe?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      contactName: 'ContactName',
      describe: 'Describe',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: PutContactRequestChannels,
      contactName: 'string',
      describe: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutContactResponseBody;
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
      body: PutContactResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  contactNames?: string[];
  describe?: string;
  enableSubscribed?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactNames: 'ContactNames',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactNames: { 'type': 'array', 'itemType': 'string' },
      describe: 'string',
      enableSubscribed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutContactGroupResponseBody;
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
      body: PutContactGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRequest extends $tea.Model {
  eventInfo?: PutCustomEventRequestEventInfo[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventInfo: 'EventInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventInfo: { 'type': 'array', 'itemType': PutCustomEventRequestEventInfo },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutCustomEventResponseBody;
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
      body: PutCustomEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleRequest extends $tea.Model {
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  eventName?: string;
  groupId?: string;
  level?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      eventName: 'EventName',
      groupId: 'GroupId',
      level: 'Level',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      eventName: 'string',
      groupId: 'string',
      level: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutCustomEventRuleResponseBody;
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
      body: PutCustomEventRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRequest extends $tea.Model {
  metricList?: PutCustomMetricRequestMetricList[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutCustomMetricRequestMetricList },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutCustomMetricResponseBody;
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
      body: PutCustomMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleRequest extends $tea.Model {
  comparisonOperator?: string;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  evaluationCount?: number;
  groupId?: string;
  level?: string;
  metricName?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  statistics?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      evaluationCount: 'EvaluationCount',
      groupId: 'GroupId',
      level: 'Level',
      metricName: 'MetricName',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      evaluationCount: 'number',
      groupId: 'string',
      level: 'string',
      metricName: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutCustomMetricRuleResponseBody;
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
      body: PutCustomMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleRequest extends $tea.Model {
  description?: string;
  eventPattern?: PutEventRuleRequestEventPattern[];
  eventType?: string;
  groupId?: string;
  regionId?: string;
  ruleName?: string;
  silenceTime?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: { 'type': 'array', 'itemType': PutEventRuleRequestEventPattern },
      eventType: 'string',
      groupId: 'string',
      regionId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleResponseBody extends $tea.Model {
  code?: string;
  data?: string;
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
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutEventRuleResponseBody;
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
      body: PutEventRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequest extends $tea.Model {
  contactParameters?: PutEventRuleTargetsRequestContactParameters[];
  fcParameters?: PutEventRuleTargetsRequestFcParameters[];
  mnsParameters?: PutEventRuleTargetsRequestMnsParameters[];
  openApiParameters?: PutEventRuleTargetsRequestOpenApiParameters[];
  regionId?: string;
  ruleName?: string;
  slsParameters?: PutEventRuleTargetsRequestSlsParameters[];
  webhookParameters?: PutEventRuleTargetsRequestWebhookParameters[];
  static names(): { [key: string]: string } {
    return {
      contactParameters: 'ContactParameters',
      fcParameters: 'FcParameters',
      mnsParameters: 'MnsParameters',
      openApiParameters: 'OpenApiParameters',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      slsParameters: 'SlsParameters',
      webhookParameters: 'WebhookParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestContactParameters },
      fcParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestFcParameters },
      mnsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestMnsParameters },
      openApiParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestOpenApiParameters },
      regionId: 'string',
      ruleName: 'string',
      slsParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestSlsParameters },
      webhookParameters: { 'type': 'array', 'itemType': PutEventRuleTargetsRequestWebhookParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  failedContactParameters?: PutEventRuleTargetsResponseBodyFailedContactParameters;
  failedFcParameters?: PutEventRuleTargetsResponseBodyFailedFcParameters;
  failedMnsParameters?: PutEventRuleTargetsResponseBodyFailedMnsParameters;
  failedParameterCount?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedContactParameters: 'FailedContactParameters',
      failedFcParameters: 'FailedFcParameters',
      failedMnsParameters: 'FailedMnsParameters',
      failedParameterCount: 'FailedParameterCount',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedContactParameters: PutEventRuleTargetsResponseBodyFailedContactParameters,
      failedFcParameters: PutEventRuleTargetsResponseBodyFailedFcParameters,
      failedMnsParameters: PutEventRuleTargetsResponseBodyFailedMnsParameters,
      failedParameterCount: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutEventRuleTargetsResponseBody;
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
      body: PutEventRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputRequest extends $tea.Model {
  configJson?: string;
  desc?: string;
  destName?: string;
  destType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      desc: 'Desc',
      destName: 'DestName',
      destType: 'DestType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: 'string',
      desc: 'string',
      destName: 'string',
      destType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterOutputResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutExporterOutputResponseBody;
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
      body: PutExporterOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleRequest extends $tea.Model {
  describe?: string;
  dstNames?: string[];
  metricName?: string;
  namespace?: string;
  regionId?: string;
  ruleName?: string;
  targetWindows?: string;
  static names(): { [key: string]: string } {
    return {
      describe: 'Describe',
      dstNames: 'DstNames',
      metricName: 'MetricName',
      namespace: 'Namespace',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      targetWindows: 'TargetWindows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describe: 'string',
      dstNames: { 'type': 'array', 'itemType': 'string' },
      metricName: 'string',
      namespace: 'string',
      regionId: 'string',
      ruleName: 'string',
      targetWindows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutExporterRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutExporterRuleResponseBody;
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
      body: PutExporterRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequest extends $tea.Model {
  escalations?: PutGroupMetricRuleRequestEscalations;
  category?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  extraDimensionJson?: string;
  groupId?: string;
  interval?: string;
  labels?: PutGroupMetricRuleRequestLabels[];
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  options?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      extraDimensionJson: 'ExtraDimensionJson',
      groupId: 'GroupId',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      options: 'Options',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutGroupMetricRuleRequestEscalations,
      category: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      extraDimensionJson: 'string',
      groupId: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutGroupMetricRuleRequestLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      options: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: PutGroupMetricRuleResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: PutGroupMetricRuleResponseBodyResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutGroupMetricRuleResponseBody;
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
      body: PutGroupMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataRequest extends $tea.Model {
  metricList?: PutHybridMonitorMetricDataRequestMetricList[];
  namespace?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataRequestMetricList },
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponseBody extends $tea.Model {
  code?: string;
  errorDetail?: PutHybridMonitorMetricDataResponseBodyErrorDetail[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorDetail: 'ErrorDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorDetail: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataResponseBodyErrorDetail },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutHybridMonitorMetricDataResponseBody;
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
      body: PutHybridMonitorMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequest extends $tea.Model {
  aggregates?: PutLogMonitorRequestAggregates[];
  groupId?: string;
  groupbys?: PutLogMonitorRequestGroupbys[];
  logId?: string;
  metricExpress?: string;
  metricName?: string;
  regionId?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsRegionId?: string;
  tumblingwindows?: string;
  unit?: string;
  valueFilter?: PutLogMonitorRequestValueFilter[];
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      metricName: 'MetricName',
      regionId: 'RegionId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      tumblingwindows: 'Tumblingwindows',
      unit: 'Unit',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: { 'type': 'array', 'itemType': PutLogMonitorRequestAggregates },
      groupId: 'string',
      groupbys: { 'type': 'array', 'itemType': PutLogMonitorRequestGroupbys },
      logId: 'string',
      metricExpress: 'string',
      metricName: 'string',
      regionId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      tumblingwindows: 'string',
      unit: 'string',
      valueFilter: { 'type': 'array', 'itemType': PutLogMonitorRequestValueFilter },
      valueFilterRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorResponseBody extends $tea.Model {
  code?: string;
  logId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logId: 'LogId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutLogMonitorResponseBody;
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
      body: PutLogMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsRequest extends $tea.Model {
  regionId?: string;
  ruleId?: string;
  targets?: PutMetricRuleTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
      targets: { 'type': 'array', 'itemType': PutMetricRuleTargetsRequestTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBody extends $tea.Model {
  code?: string;
  failData?: PutMetricRuleTargetsResponseBodyFailData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failData: 'FailData',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failData: PutMetricRuleTargetsResponseBodyFailData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutMetricRuleTargetsResponseBody;
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
      body: PutMetricRuleTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequest extends $tea.Model {
  groupId?: number;
  groupRules?: PutMonitorGroupDynamicRuleRequestGroupRules[];
  isAsync?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupRules: 'GroupRules',
      isAsync: 'IsAsync',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupRules: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRules },
      isAsync: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutMonitorGroupDynamicRuleResponseBody;
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
      body: PutMonitorGroupDynamicRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitoringConfigRequest extends $tea.Model {
  autoInstall?: boolean;
  enableInstallAgentNewECS?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      enableInstallAgentNewECS: 'EnableInstallAgentNewECS',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      enableInstallAgentNewECS: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitoringConfigResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitoringConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutMonitoringConfigResponseBody;
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
      body: PutMonitoringConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequest extends $tea.Model {
  escalations?: PutResourceMetricRuleRequestEscalations;
  compositeExpression?: PutResourceMetricRuleRequestCompositeExpression;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  labels?: PutResourceMetricRuleRequestLabels[];
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  prometheus?: PutResourceMetricRuleRequestPrometheus;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      compositeExpression: 'CompositeExpression',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      prometheus: 'Prometheus',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRuleRequestEscalations,
      compositeExpression: PutResourceMetricRuleRequestCompositeExpression,
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      prometheus: PutResourceMetricRuleRequestPrometheus,
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequest extends $tea.Model {
  escalations?: PutResourceMetricRuleShrinkRequestEscalations;
  compositeExpressionShrink?: string;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  labels?: PutResourceMetricRuleShrinkRequestLabels[];
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  prometheusShrink?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      compositeExpressionShrink: 'CompositeExpression',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      prometheusShrink: 'Prometheus',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRuleShrinkRequestEscalations,
      compositeExpressionShrink: 'string',
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRuleShrinkRequestLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      prometheusShrink: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutResourceMetricRuleResponseBody;
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
      body: PutResourceMetricRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequest extends $tea.Model {
  rules?: PutResourceMetricRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': PutResourceMetricRulesRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBody extends $tea.Model {
  code?: string;
  failedListResult?: PutResourceMetricRulesResponseBodyFailedListResult;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failedListResult: 'FailedListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failedListResult: PutResourceMetricRulesResponseBodyFailedListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutResourceMetricRulesResponseBody;
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
      body: PutResourceMetricRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequest extends $tea.Model {
  groupIds?: string[];
  regionId?: string;
  tag?: RemoveTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': RemoveTagsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tag?: RemoveTagsResponseBodyTag;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tag: RemoveTagsResponseBodyTag,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTagsResponseBody;
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
      body: RemoveTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventRequest extends $tea.Model {
  eventContent?: string;
  eventName?: string;
  groupId?: string;
  product?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventContent: 'EventContent',
      eventName: 'EventName',
      groupId: 'GroupId',
      product: 'Product',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventContent: 'string',
      eventName: 'string',
      groupId: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDryRunSystemEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendDryRunSystemEventResponseBody;
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
      body: SendDryRunSystemEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallMonitoringAgentRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallMonitoringAgentResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallMonitoringAgentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallMonitoringAgentResponseBody;
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
      body: UninstallMonitoringAgentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertEventMetrics extends $tea.Model {
  curValue?: string;
  metricName?: string;
  metricNameEn?: string;
  metricNameZh?: string;
  operator?: string;
  statistics?: string;
  threshold?: string;
  unit?: string;
  unitFactor?: number;
  static names(): { [key: string]: string } {
    return {
      curValue: 'CurValue',
      metricName: 'MetricName',
      metricNameEn: 'MetricNameEn',
      metricNameZh: 'MetricNameZh',
      operator: 'Operator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      unit: 'Unit',
      unitFactor: 'UnitFactor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curValue: 'string',
      metricName: 'string',
      metricNameEn: 'string',
      metricNameZh: 'string',
      operator: 'string',
      statistics: 'string',
      threshold: 'string',
      unit: 'string',
      unitFactor: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EscalationRuleEscalationsContactGroupsByLevel extends $tea.Model {
  critical?: string[];
  error?: string[];
  info?: string[];
  resolve?: string[];
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      error: 'Error',
      info: 'Info',
      resolve: 'Resolve',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: { 'type': 'array', 'itemType': 'string' },
      error: { 'type': 'array', 'itemType': 'string' },
      info: { 'type': 'array', 'itemType': 'string' },
      resolve: { 'type': 'array', 'itemType': 'string' },
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EscalationRuleEscalations extends $tea.Model {
  backupContactGroups?: string[];
  contactGroups?: string[];
  contactGroupsByLevel?: EscalationRuleEscalationsContactGroupsByLevel;
  escalateMin?: number;
  static names(): { [key: string]: string } {
    return {
      backupContactGroups: 'BackupContactGroups',
      contactGroups: 'ContactGroups',
      contactGroupsByLevel: 'ContactGroupsByLevel',
      escalateMin: 'EscalateMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupContactGroups: { 'type': 'array', 'itemType': 'string' },
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      contactGroupsByLevel: EscalationRuleEscalationsContactGroupsByLevel,
      escalateMin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanContactsChannels extends $tea.Model {
  level?: number;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'number',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanContacts extends $tea.Model {
  channels?: MigrationJobPlanContactsChannels[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': MigrationJobPlanContactsChannels },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanEscalationsEscalationsLevelGroups extends $tea.Model {
  critical?: string[];
  info?: string[];
  resolved?: string[];
  warning?: string[];
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      resolved: 'Resolved',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: { 'type': 'array', 'itemType': 'string' },
      info: { 'type': 'array', 'itemType': 'string' },
      resolved: { 'type': 'array', 'itemType': 'string' },
      warning: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanEscalationsEscalations extends $tea.Model {
  groups?: string[];
  levelGroups?: MigrationJobPlanEscalationsEscalationsLevelGroups;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      levelGroups: 'LevelGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': 'string' },
      levelGroups: MigrationJobPlanEscalationsEscalationsLevelGroups,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanEscalations extends $tea.Model {
  escalations?: MigrationJobPlanEscalationsEscalations[];
  name?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      name: 'Name',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: { 'type': 'array', 'itemType': MigrationJobPlanEscalationsEscalations },
      name: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanGroups extends $tea.Model {
  contacts?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanStrategiesEscalationSetting extends $tea.Model {
  escalationUuid?: string;
  static names(): { [key: string]: string } {
    return {
      escalationUuid: 'escalationUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanStrategiesPushingSetting extends $tea.Model {
  targetUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      targetUuids: 'TargetUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanStrategies extends $tea.Model {
  escalationSetting?: MigrationJobPlanStrategiesEscalationSetting;
  name?: string;
  pushingSetting?: MigrationJobPlanStrategiesPushingSetting;
  static names(): { [key: string]: string } {
    return {
      escalationSetting: 'EscalationSetting',
      name: 'Name',
      pushingSetting: 'PushingSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationSetting: MigrationJobPlanStrategiesEscalationSetting,
      name: 'string',
      pushingSetting: MigrationJobPlanStrategiesPushingSetting,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanSubscriptionsConditions extends $tea.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
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

export class MigrationJobPlanSubscriptions extends $tea.Model {
  conditions?: MigrationJobPlanSubscriptionsConditions[];
  name?: string;
  strategyUuid?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      name: 'Name',
      strategyUuid: 'StrategyUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': MigrationJobPlanSubscriptionsConditions },
      name: 'string',
      strategyUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanTargetsHttpRequestTarget extends $tea.Model {
  contentType?: string;
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      method: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlanTargets extends $tea.Model {
  arn?: string;
  httpRequestTarget?: MigrationJobPlanTargetsHttpRequestTarget;
  name?: string;
  type?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      httpRequestTarget: 'HttpRequestTarget',
      name: 'Name',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      httpRequestTarget: MigrationJobPlanTargetsHttpRequestTarget,
      name: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobPlan extends $tea.Model {
  contacts?: MigrationJobPlanContacts[];
  escalations?: MigrationJobPlanEscalations[];
  groups?: MigrationJobPlanGroups[];
  ruleNames?: string[];
  strategies?: MigrationJobPlanStrategies[];
  subscriptions?: MigrationJobPlanSubscriptions[];
  targets?: MigrationJobPlanTargets[];
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      escalations: 'Escalations',
      groups: 'Groups',
      ruleNames: 'RuleNames',
      strategies: 'Strategies',
      subscriptions: 'Subscriptions',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': MigrationJobPlanContacts },
      escalations: { 'type': 'array', 'itemType': MigrationJobPlanEscalations },
      groups: { 'type': 'array', 'itemType': MigrationJobPlanGroups },
      ruleNames: { 'type': 'array', 'itemType': 'string' },
      strategies: { 'type': 'array', 'itemType': MigrationJobPlanStrategies },
      subscriptions: { 'type': 'array', 'itemType': MigrationJobPlanSubscriptions },
      targets: { 'type': 'array', 'itemType': MigrationJobPlanTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceRuleKeywordFilter extends $tea.Model {
  keywords?: string[];
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceRulePrimaryFilters extends $tea.Model {
  field?: string;
  opType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      opType: 'OpType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      opType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceRule extends $tea.Model {
  keywordFilter?: MigrationJobSourceRuleKeywordFilter;
  name?: string;
  primaryFilters?: MigrationJobSourceRulePrimaryFilters[];
  static names(): { [key: string]: string } {
    return {
      keywordFilter: 'KeywordFilter',
      name: 'Name',
      primaryFilters: 'PrimaryFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordFilter: MigrationJobSourceRuleKeywordFilter,
      name: 'string',
      primaryFilters: { 'type': 'array', 'itemType': MigrationJobSourceRulePrimaryFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceTargetsContent extends $tea.Model {
  group?: string;
  level?: string;
  method?: string;
  region?: string;
  resourcePath?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      level: 'Level',
      method: 'Method',
      region: 'Region',
      resourcePath: 'ResourcePath',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      level: 'string',
      method: 'string',
      region: 'string',
      resourcePath: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSourceTargets extends $tea.Model {
  content?: MigrationJobSourceTargetsContent;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: MigrationJobSourceTargetsContent,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobSource extends $tea.Model {
  rule?: MigrationJobSourceRule;
  targets?: MigrationJobSourceTargets[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: MigrationJobSourceRule,
      targets: { 'type': 'array', 'itemType': MigrationJobSourceTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyEscalationSettingCustomChannels extends $tea.Model {
  channelType?: string;
  severities?: string[];
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      severities: 'Severities',
      templateUuid: 'TemplateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      severities: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyEscalationSetting extends $tea.Model {
  autoResolveMin?: number;
  customChannels?: NotificationStrategyEscalationSettingCustomChannels[];
  escalationLevel?: string;
  escalationUuid?: string;
  range?: string;
  retriggerMin?: number;
  static names(): { [key: string]: string } {
    return {
      autoResolveMin: 'AutoResolveMin',
      customChannels: 'CustomChannels',
      escalationLevel: 'EscalationLevel',
      escalationUuid: 'EscalationUuid',
      range: 'Range',
      retriggerMin: 'RetriggerMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoResolveMin: 'number',
      customChannels: { 'type': 'array', 'itemType': NotificationStrategyEscalationSettingCustomChannels },
      escalationLevel: 'string',
      escalationUuid: 'string',
      range: 'string',
      retriggerMin: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyFilterSettingBlackList extends $tea.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
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

export class NotificationStrategyFilterSettingWhiteList extends $tea.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      op: 'Op',
      value: 'Value',
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

export class NotificationStrategyFilterSetting extends $tea.Model {
  blackList?: NotificationStrategyFilterSettingBlackList[][];
  whiteList?: NotificationStrategyFilterSettingWhiteList[][];
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': NotificationStrategyFilterSettingBlackList } },
      whiteList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': NotificationStrategyFilterSettingWhiteList } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyGroupingSettingGroupingItems extends $tea.Model {
  keys?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyGroupingSetting extends $tea.Model {
  enableRawAlertDispatching?: boolean;
  groupingItems?: NotificationStrategyGroupingSettingGroupingItems[];
  periodMin?: number;
  silenceSec?: number;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      enableRawAlertDispatching: 'EnableRawAlertDispatching',
      groupingItems: 'GroupingItems',
      periodMin: 'PeriodMin',
      silenceSec: 'SilenceSec',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableRawAlertDispatching: 'boolean',
      groupingItems: { 'type': 'array', 'itemType': NotificationStrategyGroupingSettingGroupingItems },
      periodMin: 'number',
      silenceSec: 'number',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotificationStrategyPushingSetting extends $tea.Model {
  pushingDataFormat?: string;
  range?: string;
  targetUuids?: string[];
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      pushingDataFormat: 'PushingDataFormat',
      range: 'Range',
      targetUuids: 'TargetUuids',
      templateUuid: 'TemplateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushingDataFormat: 'string',
      range: 'string',
      targetUuids: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushingTargetHttpRequestTargetHeaders extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushingTargetHttpRequestTarget extends $tea.Model {
  contentType?: string;
  encryptString?: string;
  headers?: PushingTargetHttpRequestTargetHeaders[];
  method?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      encryptString: 'EncryptString',
      headers: 'Headers',
      method: 'Method',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      encryptString: 'string',
      headers: { 'type': 'array', 'itemType': PushingTargetHttpRequestTargetHeaders },
      method: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscriptionConditions extends $tea.Model {
  field?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBodyResourceAlertResults extends $tea.Model {
  code?: string;
  message?: string;
  ruleId?: string;
  ruleName?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      ruleId: 'string',
      ruleName: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyMetricRuleTemplateResponseBodyResource extends $tea.Model {
  alertResults?: ApplyMetricRuleTemplateResponseBodyResourceAlertResults[];
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      alertResults: 'AlertResults',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertResults: { 'type': 'array', 'itemType': ApplyMetricRuleTemplateResponseBodyResourceAlertResults },
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorRequestTaskList extends $tea.Model {
  address?: string;
  ispCities?: string;
  optionsJson?: string;
  taskName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateInstantSiteMonitorResponseBodyData extends $tea.Model {
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateIntantSiteMonitorRequestTaskList extends $tea.Model {
  address?: string;
  ispCities?: string;
  optionsJson?: string;
  taskName?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicTagGroupRequestMatchExpress extends $tea.Model {
  tagName?: string;
  tagValue?: string;
  tagValueMatchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
      tagValue: 'TagValue',
      tagValueMatchFunction: 'TagValueMatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
      tagValue: 'string',
      tagValueMatchFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  n?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesEscalations extends $tea.Model {
  critical?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical;
  info?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo;
  warn?: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsCritical,
      info: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsInfo,
      warn: CreateGroupMetricRulesRequestGroupMetricRulesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRulesLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesRequestGroupMetricRules extends $tea.Model {
  escalations?: CreateGroupMetricRulesRequestGroupMetricRulesEscalations;
  category?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  labels?: CreateGroupMetricRulesRequestGroupMetricRulesLabels[];
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  options?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      options: 'Options',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateGroupMetricRulesRequestGroupMetricRulesEscalations,
      category: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': CreateGroupMetricRulesRequestGroupMetricRulesLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      options: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBodyResourcesAlertResult extends $tea.Model {
  code?: number;
  message?: string;
  ruleId?: string;
  ruleName?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      ruleId: 'string',
      ruleName: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMetricRulesResponseBodyResources extends $tea.Model {
  alertResult?: CreateGroupMetricRulesResponseBodyResourcesAlertResult[];
  static names(): { [key: string]: string } {
    return {
      alertResult: 'AlertResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertResult: { 'type': 'array', 'itemType': CreateGroupMetricRulesResponseBodyResourcesAlertResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequestAlertConfig extends $tea.Model {
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  targetList?: CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList[];
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      targetList: 'TargetList',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      targetList: { 'type': 'array', 'itemType': CreateGroupMonitoringAgentProcessRequestAlertConfigTargetList },
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessRequestMatchExpress extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponseBodyResource extends $tea.Model {
  groupProcessId?: string;
  static names(): { [key: string]: string } {
    return {
      groupProcessId: 'GroupProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupProcessId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfig extends $tea.Model {
  endTime?: number;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestTaskOption extends $tea.Model {
  httpHeader?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpResponseMatchContent?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpHeader: 'HttpHeader',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeader: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpResponseMatchContent: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfigEscalationList extends $tea.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHostAvailabilityRequestAlertConfigTargetList extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorSLSGroupRequestSLSGroupConfig extends $tea.Model {
  SLSLogstore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  SLSUserId?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogstore: 'SLSLogstore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      SLSUserId: 'SLSUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogstore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      SLSUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestAttachLabels extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
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

export class CreateHybridMonitorTaskRequestSLSProcessConfigExpress extends $tea.Model {
  alias?: string;
  express?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      express: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters extends $tea.Model {
  operator?: string;
  SLSKeyName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      SLSKeyName: 'SLSKeyName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      SLSKeyName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigFilter extends $tea.Model {
  filters?: CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters[];
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigFilterFilters },
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy extends $tea.Model {
  alias?: string;
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      SLSKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfigStatistics extends $tea.Model {
  alias?: string;
  function?: string;
  parameter1?: string;
  parameter2?: string;
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      function: 'Function',
      parameter1: 'Parameter1',
      parameter2: 'Parameter2',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      function: 'string',
      parameter1: 'string',
      parameter2: 'string',
      SLSKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridMonitorTaskRequestSLSProcessConfig extends $tea.Model {
  express?: CreateHybridMonitorTaskRequestSLSProcessConfigExpress[];
  filter?: CreateHybridMonitorTaskRequestSLSProcessConfigFilter;
  groupBy?: CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy[];
  statistics?: CreateHybridMonitorTaskRequestSLSProcessConfigStatistics[];
  static names(): { [key: string]: string } {
    return {
      express: 'Express',
      filter: 'Filter',
      groupBy: 'GroupBy',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      express: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigExpress },
      filter: CreateHybridMonitorTaskRequestSLSProcessConfigFilter,
      groupBy: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigGroupBy },
      statistics: { 'type': 'array', 'itemType': CreateHybridMonitorTaskRequestSLSProcessConfigStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstantSiteMonitorResponseBodyCreateResultList extends $tea.Model {
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleBlackListRequestMetrics extends $tea.Model {
  metricName?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplatesEscalations extends $tea.Model {
  critical?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn?: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: CreateMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMetricRuleTemplateRequestAlertTemplates extends $tea.Model {
  escalations?: CreateMetricRuleTemplateRequestAlertTemplatesEscalations;
  category?: string;
  metricName?: string;
  namespace?: string;
  period?: number;
  ruleName?: string;
  selector?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: CreateMetricRuleTemplateRequestAlertTemplatesEscalations,
      category: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'number',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesRequestInstances extends $tea.Model {
  category?: string;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyCreateResultListCreateResultList extends $tea.Model {
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyCreateResultList extends $tea.Model {
  createResultList?: CreateSiteMonitorResponseBodyCreateResultListCreateResultList[];
  static names(): { [key: string]: string } {
    return {
      createResultList: 'CreateResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResultList: { 'type': 'array', 'itemType': CreateSiteMonitorResponseBodyCreateResultListCreateResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyDataAttachAlertResultContact extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  ruleId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      ruleId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyDataAttachAlertResult extends $tea.Model {
  contact?: CreateSiteMonitorResponseBodyDataAttachAlertResultContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': CreateSiteMonitorResponseBodyDataAttachAlertResultContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSiteMonitorResponseBodyData extends $tea.Model {
  attachAlertResult?: CreateSiteMonitorResponseBodyDataAttachAlertResult;
  static names(): { [key: string]: string } {
    return {
      attachAlertResult: 'AttachAlertResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachAlertResult: CreateSiteMonitorResponseBodyDataAttachAlertResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds extends $tea.Model {
  targetId?: string[];
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTargetsResponseBodyFailIds extends $tea.Model {
  targetIds?: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds;
  static names(): { [key: string]: string } {
    return {
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIds: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMetricRuleTemplateResponseBodyResource extends $tea.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBodyGroupContactGroups extends $tea.Model {
  contactGroup?: DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DeleteMonitorGroupResponseBodyGroupContactGroupsContactGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMonitorGroupResponseBodyGroup extends $tea.Model {
  contactGroups?: DeleteMonitorGroupResponseBodyGroupContactGroups;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: DeleteMonitorGroupResponseBodyGroupContactGroups,
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations extends $tea.Model {
  critical?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical;
  info?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo;
  warn?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsCritical,
      info: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsInfo,
      warn: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertListAlert extends $tea.Model {
  alertState?: string;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeActiveMetricRuleListResponseBodyAlertListAlertEscalations,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyAlertList extends $tea.Model {
  alert?: DescribeActiveMetricRuleListResponseBodyAlertListAlert[];
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyAlertListAlert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapointsAlarm extends $tea.Model {
  comparisonOperator?: string;
  contactGroups?: string;
  enable?: string;
  endTime?: string;
  evaluationCount?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: string;
  startTime?: string;
  state?: string;
  statistics?: string;
  threshold?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      contactGroups: 'ContactGroups',
      enable: 'Enable',
      endTime: 'EndTime',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      state: 'State',
      statistics: 'Statistics',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      contactGroups: 'string',
      enable: 'string',
      endTime: 'string',
      evaluationCount: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
      startTime: 'string',
      state: 'string',
      statistics: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveMetricRuleListResponseBodyDatapoints extends $tea.Model {
  alarm?: DescribeActiveMetricRuleListResponseBodyDatapointsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeActiveMetricRuleListResponseBodyDatapointsAlarm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs extends $tea.Model {
  contactALIIM?: string[];
  static names(): { [key: string]: string } {
    return {
      contactALIIM: 'ContactALIIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactALIIM: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups extends $tea.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails extends $tea.Model {
  contactMail?: string[];
  static names(): { [key: string]: string } {
    return {
      contactMail: 'ContactMail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactMail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses extends $tea.Model {
  contactSms?: string[];
  static names(): { [key: string]: string } {
    return {
      contactSms: 'ContactSms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactSms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts extends $tea.Model {
  contact?: string[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory extends $tea.Model {
  alertTime?: number;
  contactALIIMs?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs;
  contactGroups?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups;
  contactMails?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails;
  contactSmses?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses;
  contacts?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts;
  dimensions?: string;
  evaluationCount?: number;
  expression?: string;
  groupId?: string;
  instanceName?: string;
  lastTime?: number;
  level?: string;
  metricName?: string;
  namespace?: string;
  ruleId?: string;
  ruleName?: string;
  state?: string;
  status?: number;
  value?: string;
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      contactALIIMs: 'ContactALIIMs',
      contactGroups: 'ContactGroups',
      contactMails: 'ContactMails',
      contactSmses: 'ContactSmses',
      contacts: 'Contacts',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      expression: 'Expression',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      lastTime: 'LastTime',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      state: 'State',
      status: 'Status',
      value: 'Value',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'number',
      contactALIIMs: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs,
      contactGroups: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactGroups,
      contactMails: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails,
      contactSmses: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactSmses,
      contacts: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContacts,
      dimensions: 'string',
      evaluationCount: 'number',
      expression: 'string',
      groupId: 'string',
      instanceName: 'string',
      lastTime: 'number',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      ruleId: 'string',
      ruleName: 'string',
      state: 'string',
      status: 'number',
      value: 'string',
      webhooks: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertHistoryListResponseBodyAlarmHistoryList extends $tea.Model {
  alarmHistory?: DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory[];
  static names(): { [key: string]: string } {
    return {
      alarmHistory: 'AlarmHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmHistory: { 'type': 'array', 'itemType': DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogCountResponseBodyAlertLogCountLogs extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
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

export class DescribeAlertLogCountResponseBodyAlertLogCount extends $tea.Model {
  count?: number;
  logs?: DescribeAlertLogCountResponseBodyAlertLogCountLogs[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      logs: { 'type': 'array', 'itemType': DescribeAlertLogCountResponseBodyAlertLogCountLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogHistogramResponseBodyAlertLogHistogramList extends $tea.Model {
  count?: number;
  from?: number;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      from: 'number',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListDimensions extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListEscalation extends $tea.Model {
  expression?: string;
  level?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      level: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListExtendedInfo extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
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

export class DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList extends $tea.Model {
  code?: string;
  detail?: string;
  requestId?: string;
  success?: boolean;
  notifyTargetList?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      detail: 'Detail',
      requestId: 'RequestId',
      success: 'Success',
      notifyTargetList: 'notifyTargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      detail: 'string',
      requestId: 'string',
      success: 'boolean',
      notifyTargetList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList extends $tea.Model {
  channel?: string;
  resultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      resultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultListResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendDetail extends $tea.Model {
  channelResultList?: DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList[];
  resultCode?: string;
  static names(): { [key: string]: string } {
    return {
      channelResultList: 'ChannelResultList',
      resultCode: 'ResultCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelResultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendDetailChannelResultList },
      resultCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListSendResultList extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogListWebhookList extends $tea.Model {
  code?: string;
  message?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertLogListResponseBodyAlertLogList extends $tea.Model {
  alertTime?: string;
  blackListDetail?: string;
  blackListName?: string;
  blackListUUID?: string;
  contactALIIWWList?: string[];
  contactDingList?: string[];
  contactGroups?: string[];
  contactMailList?: string[];
  contactOnCallList?: string[];
  contactSMSList?: string[];
  dimensions?: DescribeAlertLogListResponseBodyAlertLogListDimensions[];
  dingdingWebhookList?: string[];
  escalation?: DescribeAlertLogListResponseBodyAlertLogListEscalation;
  eventName?: string;
  extendedInfo?: DescribeAlertLogListResponseBodyAlertLogListExtendedInfo[];
  groupId?: string;
  groupName?: string;
  instanceId?: string;
  instanceName?: string;
  level?: string;
  levelChange?: string;
  logId?: string;
  message?: string;
  metricName?: string;
  namespace?: string;
  product?: string;
  ruleId?: string;
  ruleName?: string;
  sendDetail?: DescribeAlertLogListResponseBodyAlertLogListSendDetail;
  sendResultList?: DescribeAlertLogListResponseBodyAlertLogListSendResultList[];
  sendStatus?: string;
  webhookList?: DescribeAlertLogListResponseBodyAlertLogListWebhookList[];
  static names(): { [key: string]: string } {
    return {
      alertTime: 'AlertTime',
      blackListDetail: 'BlackListDetail',
      blackListName: 'BlackListName',
      blackListUUID: 'BlackListUUID',
      contactALIIWWList: 'ContactALIIWWList',
      contactDingList: 'ContactDingList',
      contactGroups: 'ContactGroups',
      contactMailList: 'ContactMailList',
      contactOnCallList: 'ContactOnCallList',
      contactSMSList: 'ContactSMSList',
      dimensions: 'Dimensions',
      dingdingWebhookList: 'DingdingWebhookList',
      escalation: 'Escalation',
      eventName: 'EventName',
      extendedInfo: 'ExtendedInfo',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      level: 'Level',
      levelChange: 'LevelChange',
      logId: 'LogId',
      message: 'Message',
      metricName: 'MetricName',
      namespace: 'Namespace',
      product: 'Product',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sendDetail: 'SendDetail',
      sendResultList: 'SendResultList',
      sendStatus: 'SendStatus',
      webhookList: 'WebhookList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTime: 'string',
      blackListDetail: 'string',
      blackListName: 'string',
      blackListUUID: 'string',
      contactALIIWWList: { 'type': 'array', 'itemType': 'string' },
      contactDingList: { 'type': 'array', 'itemType': 'string' },
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      contactMailList: { 'type': 'array', 'itemType': 'string' },
      contactOnCallList: { 'type': 'array', 'itemType': 'string' },
      contactSMSList: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListDimensions },
      dingdingWebhookList: { 'type': 'array', 'itemType': 'string' },
      escalation: DescribeAlertLogListResponseBodyAlertLogListEscalation,
      eventName: 'string',
      extendedInfo: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListExtendedInfo },
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      level: 'string',
      levelChange: 'string',
      logId: 'string',
      message: 'string',
      metricName: 'string',
      namespace: 'string',
      product: 'string',
      ruleId: 'string',
      ruleName: 'string',
      sendDetail: DescribeAlertLogListResponseBodyAlertLogListSendDetail,
      sendResultList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListSendResultList },
      sendStatus: 'string',
      webhookList: { 'type': 'array', 'itemType': DescribeAlertLogListResponseBodyAlertLogListWebhookList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList extends $tea.Model {
  expressionList?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList[];
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionListExpressionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource extends $tea.Model {
  comparisonOperator?: string;
  expression?: string;
  expressionList?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList;
  expressionListJoin?: string;
  expressionRaw?: string;
  level?: number;
  preCondition?: string;
  tag?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      expression: 'Expression',
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      preCondition: 'PreCondition',
      tag: 'Tag',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      expression: 'string',
      expressionList: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResourceExpressionList,
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'number',
      preCondition: 'string',
      tag: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation extends $tea.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalationResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource extends $tea.Model {
  dimensions?: string;
  enable?: string;
  escalation?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation;
  groupId?: string;
  lastAlertTime?: string;
  lastModifyTime?: string;
  level?: number;
  metricName?: string;
  metricValues?: string;
  namespace?: string;
  productCategory?: string;
  resource?: string;
  retryTimes?: string;
  ruleId?: string;
  ruleName?: string;
  startTime?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      enable: 'Enable',
      escalation: 'Escalation',
      groupId: 'GroupId',
      lastAlertTime: 'LastAlertTime',
      lastModifyTime: 'LastModifyTime',
      level: 'Level',
      metricName: 'MetricName',
      metricValues: 'MetricValues',
      namespace: 'Namespace',
      productCategory: 'ProductCategory',
      resource: 'Resource',
      retryTimes: 'RetryTimes',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      startTime: 'StartTime',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      enable: 'string',
      escalation: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResourceEscalation,
      groupId: 'string',
      lastAlertTime: 'string',
      lastModifyTime: 'string',
      level: 'number',
      metricName: 'string',
      metricValues: 'string',
      namespace: 'string',
      productCategory: 'string',
      resource: 'string',
      retryTimes: 'string',
      ruleId: 'string',
      ruleName: 'string',
      startTime: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlertingMetricRuleResourcesResponseBodyResources extends $tea.Model {
  resource?: DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAlertingMetricRuleResourcesResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts extends $tea.Model {
  contact?: string[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupListContactGroup extends $tea.Model {
  contacts?: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts;
  createTime?: number;
  describe?: string;
  enableSubscribed?: boolean;
  enabledWeeklyReport?: boolean;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      createTime: 'CreateTime',
      describe: 'Describe',
      enableSubscribed: 'EnableSubscribed',
      enabledWeeklyReport: 'EnabledWeeklyReport',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: DescribeContactGroupListResponseBodyContactGroupListContactGroupContacts,
      createTime: 'number',
      describe: 'string',
      enableSubscribed: 'boolean',
      enabledWeeklyReport: 'boolean',
      name: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroupList extends $tea.Model {
  contactGroup?: DescribeContactGroupListResponseBodyContactGroupListContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DescribeContactGroupListResponseBodyContactGroupListContactGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactGroupListResponseBodyContactGroups extends $tea.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannels extends $tea.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannelsState extends $tea.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactContactGroups extends $tea.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContact extends $tea.Model {
  channels?: DescribeContactListResponseBodyContactsContactChannels;
  channelsState?: DescribeContactListResponseBodyContactsContactChannelsState;
  contactGroups?: DescribeContactListResponseBodyContactsContactContactGroups;
  createTime?: number;
  desc?: string;
  lang?: string;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      channelsState: 'ChannelsState',
      contactGroups: 'ContactGroups',
      createTime: 'CreateTime',
      desc: 'Desc',
      lang: 'Lang',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListResponseBodyContactsContactChannels,
      channelsState: DescribeContactListResponseBodyContactsContactChannelsState,
      contactGroups: DescribeContactListResponseBodyContactsContactContactGroups,
      createTime: 'number',
      desc: 'string',
      lang: 'string',
      name: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContacts extends $tea.Model {
  contact?: DescribeContactListResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListResponseBodyContactsContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContactsContactChannels extends $tea.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContactsContact extends $tea.Model {
  channels?: DescribeContactListByContactGroupResponseBodyContactsContactChannels;
  createTime?: number;
  desc?: string;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      createTime: 'CreateTime',
      desc: 'Desc',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListByContactGroupResponseBodyContactsContactChannels,
      createTime: 'number',
      desc: 'string',
      name: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContacts extends $tea.Model {
  contact?: DescribeContactListByContactGroupResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListByContactGroupResponseBodyContactsContact },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent extends $tea.Model {
  content?: string;
  groupId?: string;
  id?: string;
  name?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBodyCustomEvents extends $tea.Model {
  customEvent?: DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent[];
  static names(): { [key: string]: string } {
    return {
      customEvent: 'CustomEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEvent: { 'type': 'array', 'itemType': DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount extends $tea.Model {
  name?: string;
  num?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventCountResponseBodyCustomEventCounts extends $tea.Model {
  customEventCount?: DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount[];
  static names(): { [key: string]: string } {
    return {
      customEventCount: 'CustomEventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEventCount: { 'type': 'array', 'itemType': DescribeCustomEventCountResponseBodyCustomEventCountsCustomEventCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram extends $tea.Model {
  count?: number;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventHistogramResponseBodyEventHistograms extends $tea.Model {
  eventHistogram?: DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram[];
  static names(): { [key: string]: string } {
    return {
      eventHistogram: 'EventHistogram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventHistogram: { 'type': 'array', 'itemType': DescribeCustomEventHistogramResponseBodyEventHistogramsEventHistogram },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList extends $tea.Model {
  contactGroupList?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  tagValueMatchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      tagValueMatchFunction: 'TagValueMatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      tagValueMatchFunction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress extends $tea.Model {
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpressMatchExpress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList extends $tea.Model {
  templateIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup extends $tea.Model {
  contactGroupList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList;
  dynamicTagRuleId?: string;
  matchExpress?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress;
  matchExpressFilterRelation?: string;
  regionId?: string;
  status?: string;
  tagKey?: string;
  templateIdList?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList;
  static names(): { [key: string]: string } {
    return {
      contactGroupList: 'ContactGroupList',
      dynamicTagRuleId: 'DynamicTagRuleId',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      regionId: 'RegionId',
      status: 'Status',
      tagKey: 'TagKey',
      templateIdList: 'TemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupContactGroupList,
      dynamicTagRuleId: 'string',
      matchExpress: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupMatchExpress,
      matchExpressFilterRelation: 'string',
      regionId: 'string',
      status: 'string',
      tagKey: 'string',
      templateIdList: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroupTemplateIdList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDynamicTagRuleListResponseBodyTagGroupList extends $tea.Model {
  tagGroup?: DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup[];
  static names(): { [key: string]: string } {
    return {
      tagGroup: 'TagGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagGroup: { 'type': 'array', 'itemType': DescribeDynamicTagRuleListResponseBodyTagGroupListTagGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternEventTypeList extends $tea.Model {
  eventTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObjKeywords extends $tea.Model {
  keyword?: string[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObj extends $tea.Model {
  keywords?: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObjKeywords;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObjKeywords,
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList extends $tea.Model {
  levelList?: string[];
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternNameList extends $tea.Model {
  nameList?: string[];
  static names(): { [key: string]: string } {
    return {
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList extends $tea.Model {
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResultEventPattern extends $tea.Model {
  eventTypeList?: DescribeEventRuleAttributeResponseBodyResultEventPatternEventTypeList;
  keywordFilterObj?: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObj;
  levelList?: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList;
  nameList?: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList;
  product?: string;
  SQLFilter?: string;
  statusList?: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList;
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      keywordFilterObj: 'KeywordFilterObj',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      SQLFilter: 'SQLFilter',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: DescribeEventRuleAttributeResponseBodyResultEventPatternEventTypeList,
      keywordFilterObj: DescribeEventRuleAttributeResponseBodyResultEventPatternKeywordFilterObj,
      levelList: DescribeEventRuleAttributeResponseBodyResultEventPatternLevelList,
      nameList: DescribeEventRuleAttributeResponseBodyResultEventPatternNameList,
      product: 'string',
      SQLFilter: 'string',
      statusList: DescribeEventRuleAttributeResponseBodyResultEventPatternStatusList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleAttributeResponseBodyResult extends $tea.Model {
  description?: string;
  eventPattern?: DescribeEventRuleAttributeResponseBodyResultEventPattern;
  eventType?: string;
  groupId?: string;
  name?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: DescribeEventRuleAttributeResponseBodyResultEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList extends $tea.Model {
  eventTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords extends $tea.Model {
  keywords?: string[];
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter extends $tea.Model {
  keywords?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilterKeywords,
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList extends $tea.Model {
  levelList?: string[];
  static names(): { [key: string]: string } {
    return {
      levelList: 'LevelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levelList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList extends $tea.Model {
  nameList?: string[];
  static names(): { [key: string]: string } {
    return {
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern extends $tea.Model {
  customFilters?: string;
  eventTypeList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList;
  keywordFilter?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter;
  levelList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList;
  nameList?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList;
  product?: string;
  SQLFilter?: string;
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      eventTypeList: 'EventTypeList',
      keywordFilter: 'KeywordFilter',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      SQLFilter: 'SQLFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      eventTypeList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternEventTypeList,
      keywordFilter: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternKeywordFilter,
      levelList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternLevelList,
      nameList: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPatternNameList,
      product: 'string',
      SQLFilter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern extends $tea.Model {
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern[];
  static names(): { [key: string]: string } {
    return {
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventPattern: { 'type': 'array', 'itemType': DescribeEventRuleListResponseBodyEventRulesEventRuleEventPatternEventPattern },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRulesEventRule extends $tea.Model {
  description?: string;
  eventPattern?: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern;
  eventType?: string;
  groupId?: string;
  name?: string;
  silenceTime?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventPattern: 'EventPattern',
      eventType: 'EventType',
      groupId: 'GroupId',
      name: 'Name',
      silenceTime: 'SilenceTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventPattern: DescribeEventRuleListResponseBodyEventRulesEventRuleEventPattern,
      eventType: 'string',
      groupId: 'string',
      name: 'string',
      silenceTime: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleListResponseBodyEventRules extends $tea.Model {
  eventRule?: DescribeEventRuleListResponseBodyEventRulesEventRule[];
  static names(): { [key: string]: string } {
    return {
      eventRule: 'EventRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRule: { 'type': 'array', 'itemType': DescribeEventRuleListResponseBodyEventRulesEventRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyContactParametersContactParameter extends $tea.Model {
  contactGroupName?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      id: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyContactParameters extends $tea.Model {
  contactParameter?: DescribeEventRuleTargetListResponseBodyContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyContactParametersContactParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyFcParametersFCParameter extends $tea.Model {
  arn?: string;
  functionName?: string;
  id?: string;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      functionName: 'string',
      id: 'string',
      region: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyFcParameters extends $tea.Model {
  FCParameter?: DescribeEventRuleTargetListResponseBodyFcParametersFCParameter[];
  static names(): { [key: string]: string } {
    return {
      FCParameter: 'FCParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      FCParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyFcParametersFCParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter extends $tea.Model {
  arn?: string;
  id?: string;
  queue?: string;
  region?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      queue: 'string',
      region: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyMnsParameters extends $tea.Model {
  mnsParameter?: DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyMnsParametersMnsParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters extends $tea.Model {
  action?: string;
  arn?: string;
  id?: string;
  product?: string;
  region?: string;
  role?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      arn: 'Arn',
      id: 'Id',
      product: 'Product',
      region: 'Region',
      role: 'Role',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      arn: 'string',
      id: 'string',
      product: 'string',
      region: 'string',
      role: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyOpenApiParameters extends $tea.Model {
  openApiParameters?: DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters[];
  static names(): { [key: string]: string } {
    return {
      openApiParameters: 'OpenApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openApiParameters: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyOpenApiParametersOpenApiParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter extends $tea.Model {
  arn?: string;
  id?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodySlsParameters extends $tea.Model {
  slsParameter?: DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter[];
  static names(): { [key: string]: string } {
    return {
      slsParameter: 'SlsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodySlsParametersSlsParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter extends $tea.Model {
  id?: string;
  method?: string;
  protocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      method: 'string',
      protocol: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventRuleTargetListResponseBodyWebhookParameters extends $tea.Model {
  webhookParameter?: DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter[];
  static names(): { [key: string]: string } {
    return {
      webhookParameter: 'WebhookParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhookParameter: { 'type': 'array', 'itemType': DescribeEventRuleTargetListResponseBodyWebhookParametersWebhookParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson extends $tea.Model {
  ak?: string;
  endpoint?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      ak: 'ak',
      endpoint: 'endpoint',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ak: 'string',
      endpoint: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapointsDatapoint extends $tea.Model {
  configJson?: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson;
  createTime?: number;
  destName?: string;
  destType?: string;
  static names(): { [key: string]: string } {
    return {
      configJson: 'ConfigJson',
      createTime: 'CreateTime',
      destName: 'DestName',
      destType: 'DestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configJson: DescribeExporterOutputListResponseBodyDatapointsDatapointConfigJson,
      createTime: 'number',
      destName: 'string',
      destType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterOutputListResponseBodyDatapoints extends $tea.Model {
  datapoint?: DescribeExporterOutputListResponseBodyDatapointsDatapoint[];
  static names(): { [key: string]: string } {
    return {
      datapoint: 'Datapoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoint: { 'type': 'array', 'itemType': DescribeExporterOutputListResponseBodyDatapointsDatapoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapointsDatapointDstName extends $tea.Model {
  dstName?: string[];
  static names(): { [key: string]: string } {
    return {
      dstName: 'DstName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapointsDatapoint extends $tea.Model {
  createTime?: number;
  describe?: string;
  dimension?: string;
  dstName?: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName;
  enabled?: boolean;
  metricName?: string;
  namespace?: string;
  ruleName?: string;
  targetWindows?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      describe: 'Describe',
      dimension: 'Dimension',
      dstName: 'DstName',
      enabled: 'Enabled',
      metricName: 'MetricName',
      namespace: 'Namespace',
      ruleName: 'RuleName',
      targetWindows: 'TargetWindows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      describe: 'string',
      dimension: 'string',
      dstName: DescribeExporterRuleListResponseBodyDatapointsDatapointDstName,
      enabled: 'boolean',
      metricName: 'string',
      namespace: 'string',
      ruleName: 'string',
      targetWindows: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExporterRuleListResponseBodyDatapoints extends $tea.Model {
  datapoint?: DescribeExporterRuleListResponseBodyDatapointsDatapoint[];
  static names(): { [key: string]: string } {
    return {
      datapoint: 'Datapoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoint: { 'type': 'array', 'itemType': DescribeExporterRuleListResponseBodyDatapointsDatapoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParmas?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParmas: 'JsonParmas',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParmas: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList extends $tea.Model {
  target?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetListTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig extends $tea.Model {
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  targetList?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList;
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      targetList: 'TargetList',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      targetList: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfigTargetList,
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig extends $tea.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfigAlertConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress extends $tea.Model {
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress[];
  static names(): { [key: string]: string } {
    return {
      matchExpress: 'MatchExpress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchExpress: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpressMatchExpress },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess extends $tea.Model {
  alertConfig?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig;
  groupId?: string;
  id?: string;
  matchExpress?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress;
  matchExpressFilterRelation?: string;
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      groupId: 'GroupId',
      id: 'Id',
      matchExpress: 'MatchExpress',
      matchExpressFilterRelation: 'MatchExpressFilterRelation',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessAlertConfig,
      groupId: 'string',
      id: 'string',
      matchExpress: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcessMatchExpress,
      matchExpressFilterRelation: 'string',
      processName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupMonitoringAgentProcessResponseBodyProcesses extends $tea.Model {
  process?: DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess[];
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: { 'type': 'array', 'itemType': DescribeGroupMonitoringAgentProcessResponseBodyProcessesProcess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList extends $tea.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList extends $tea.Model {
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList[];
  static names(): { [key: string]: string } {
    return {
      escalationList: 'escalationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalationList: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationListEscalationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList extends $tea.Model {
  target?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetListTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig extends $tea.Model {
  endTime?: number;
  escalationList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  targetList?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      escalationList: 'EscalationList',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      targetList: 'TargetList',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      escalationList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigEscalationList,
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      targetList: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfigTargetList,
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances extends $tea.Model {
  instance?: string[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption extends $tea.Model {
  httpKeyword?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpKeyword: 'HttpKeyword',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpKeyword: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig extends $tea.Model {
  alertConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig;
  disabled?: boolean;
  groupId?: number;
  groupName?: string;
  id?: number;
  instances?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances;
  taskName?: string;
  taskOption?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption;
  taskScope?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      disabled: 'Disabled',
      groupId: 'GroupId',
      groupName: 'GroupName',
      id: 'Id',
      instances: 'Instances',
      taskName: 'TaskName',
      taskOption: 'TaskOption',
      taskScope: 'TaskScope',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigAlertConfig,
      disabled: 'boolean',
      groupId: 'number',
      groupName: 'string',
      id: 'number',
      instances: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigInstances,
      taskName: 'string',
      taskOption: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfigTaskOption,
      taskScope: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAvailabilityListResponseBodyTaskList extends $tea.Model {
  nodeTaskConfig?: DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskConfig: 'NodeTaskConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskConfig: { 'type': 'array', 'itemType': DescribeHostAvailabilityListResponseBodyTaskListNodeTaskConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBodyTimeSeriesLabels extends $tea.Model {
  k?: string;
  v?: string;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'string',
      v: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBodyTimeSeriesValues extends $tea.Model {
  ts?: string;
  v?: string;
  static names(): { [key: string]: string } {
    return {
      ts: 'Ts',
      v: 'V',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ts: 'string',
      v: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorDataListResponseBodyTimeSeries extends $tea.Model {
  labels?: DescribeHybridMonitorDataListResponseBodyTimeSeriesLabels[];
  metricName?: string;
  values?: DescribeHybridMonitorDataListResponseBodyTimeSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      metricName: 'MetricName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeHybridMonitorDataListResponseBodyTimeSeriesLabels },
      metricName: 'string',
      values: { 'type': 'array', 'itemType': DescribeHybridMonitorDataListResponseBodyTimeSeriesValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceListMetricList extends $tea.Model {
  list?: string[];
  period?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceList extends $tea.Model {
  metricList?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceListMetricList[];
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      metricList: 'MetricList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricList: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceListMetricList },
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricList extends $tea.Model {
  namespaceList?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceList[];
  userId?: number;
  YAMLConfig?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceList: 'NamespaceList',
      userId: 'UserId',
      YAMLConfig: 'YAMLConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceList: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricListNamespaceList },
      userId: 'number',
      YAMLConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceDetail extends $tea.Model {
  namespaceRegion?: string;
  SLSProject?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceRegion: 'NamespaceRegion',
      SLSProject: 'SLSProject',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceRegion: 'string',
      SLSProject: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespace extends $tea.Model {
  aliyunProductMetricList?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricList[];
  createTime?: string;
  description?: string;
  detail?: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceDetail;
  id?: string;
  isDelete?: number;
  modifyTime?: string;
  namespace?: string;
  namespaceType?: string;
  notAliyunTaskNumber?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunProductMetricList: 'AliyunProductMetricList',
      createTime: 'CreateTime',
      description: 'Description',
      detail: 'Detail',
      id: 'Id',
      isDelete: 'IsDelete',
      modifyTime: 'ModifyTime',
      namespace: 'Namespace',
      namespaceType: 'NamespaceType',
      notAliyunTaskNumber: 'NotAliyunTaskNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunProductMetricList: { 'type': 'array', 'itemType': DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceAliyunProductMetricList },
      createTime: 'string',
      description: 'string',
      detail: DescribeHybridMonitorNamespaceListResponseBodyDescribeHybridMonitorNamespaceDetail,
      id: 'string',
      isDelete: 'number',
      modifyTime: 'string',
      namespace: 'string',
      namespaceType: 'string',
      notAliyunTaskNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupResponseBodyListSLSGroupConfig extends $tea.Model {
  SLSLogstore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  SLSUserId?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogstore: 'SLSLogstore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      SLSUserId: 'SLSUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogstore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      SLSUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorSLSGroupResponseBodyList extends $tea.Model {
  createTime?: string;
  SLSGroupConfig?: DescribeHybridMonitorSLSGroupResponseBodyListSLSGroupConfig[];
  SLSGroupDescription?: string;
  SLSGroupName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      SLSGroupConfig: 'SLSGroupConfig',
      SLSGroupDescription: 'SLSGroupDescription',
      SLSGroupName: 'SLSGroupName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      SLSGroupConfig: { 'type': 'array', 'itemType': DescribeHybridMonitorSLSGroupResponseBodyListSLSGroupConfig },
      SLSGroupDescription: 'string',
      SLSGroupName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListAttachLabels extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
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

export class DescribeHybridMonitorTaskListResponseBodyTaskListMatchExpress extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigExpress extends $tea.Model {
  alias?: string;
  express?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      express: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilterFilters extends $tea.Model {
  operator?: string;
  SLSKeyName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      SLSKeyName: 'SLSKeyName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      SLSKeyName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilter extends $tea.Model {
  filters?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilterFilters[];
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilterFilters },
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigGroupBy extends $tea.Model {
  alias?: string;
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      SLSKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigStatistics extends $tea.Model {
  alias?: string;
  function?: string;
  parameter1?: string;
  parameter2?: string;
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      function: 'Function',
      parameter1: 'Parameter1',
      parameter2: 'Parameter2',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      function: 'string',
      parameter1: 'string',
      parameter2: 'string',
      SLSKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfig extends $tea.Model {
  express?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigExpress[];
  filter?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilter;
  groupBy?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigGroupBy[];
  statistics?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigStatistics[];
  static names(): { [key: string]: string } {
    return {
      express: 'Express',
      filter: 'Filter',
      groupBy: 'GroupBy',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      express: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigExpress },
      filter: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigFilter,
      groupBy: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigGroupBy },
      statistics: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfigStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridMonitorTaskListResponseBodyTaskList extends $tea.Model {
  attachLabels?: DescribeHybridMonitorTaskListResponseBodyTaskListAttachLabels[];
  collectInterval?: number;
  collectTargetEndpoint?: string;
  collectTargetPath?: string;
  collectTargetType?: string;
  collectTimout?: number;
  createTime?: string;
  description?: string;
  extraInfo?: string;
  groupId?: string;
  instances?: string[];
  logFilePath?: string;
  logProcess?: string;
  logSample?: string;
  logSplit?: string;
  matchExpress?: DescribeHybridMonitorTaskListResponseBodyTaskListMatchExpress[];
  matchExpressRelation?: string;
  namespace?: string;
  networkType?: string;
  SLSProcess?: string;
  SLSProcessConfig?: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfig;
  targetUserId?: string;
  taskId?: string;
  taskName?: string;
  taskType?: string;
  uploadRegion?: string;
  YARMConfig?: string;
  static names(): { [key: string]: string } {
    return {
      attachLabels: 'AttachLabels',
      collectInterval: 'CollectInterval',
      collectTargetEndpoint: 'CollectTargetEndpoint',
      collectTargetPath: 'CollectTargetPath',
      collectTargetType: 'CollectTargetType',
      collectTimout: 'CollectTimout',
      createTime: 'CreateTime',
      description: 'Description',
      extraInfo: 'ExtraInfo',
      groupId: 'GroupId',
      instances: 'Instances',
      logFilePath: 'LogFilePath',
      logProcess: 'LogProcess',
      logSample: 'LogSample',
      logSplit: 'LogSplit',
      matchExpress: 'MatchExpress',
      matchExpressRelation: 'MatchExpressRelation',
      namespace: 'Namespace',
      networkType: 'NetworkType',
      SLSProcess: 'SLSProcess',
      SLSProcessConfig: 'SLSProcessConfig',
      targetUserId: 'TargetUserId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      uploadRegion: 'UploadRegion',
      YARMConfig: 'YARMConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachLabels: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListAttachLabels },
      collectInterval: 'number',
      collectTargetEndpoint: 'string',
      collectTargetPath: 'string',
      collectTargetType: 'string',
      collectTimout: 'number',
      createTime: 'string',
      description: 'string',
      extraInfo: 'string',
      groupId: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      logFilePath: 'string',
      logProcess: 'string',
      logSample: 'string',
      logSplit: 'string',
      matchExpress: { 'type': 'array', 'itemType': DescribeHybridMonitorTaskListResponseBodyTaskListMatchExpress },
      matchExpressRelation: 'string',
      namespace: 'string',
      networkType: 'string',
      SLSProcess: 'string',
      SLSProcessConfig: DescribeHybridMonitorTaskListResponseBodyTaskListSLSProcessConfig,
      targetUserId: 'string',
      taskId: 'string',
      taskName: 'string',
      taskType: 'string',
      uploadRegion: 'string',
      YARMConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates extends $tea.Model {
  alias?: string;
  fieldName?: string;
  function?: string;
  max?: string;
  min?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
      function: 'Function',
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
      function: 'string',
      max: 'string',
      min: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorAttributeResponseBodyLogMonitor extends $tea.Model {
  aggregates?: DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates[];
  gmtCreate?: number;
  groupId?: number;
  groupbys?: string[];
  logId?: number;
  metricExpress?: string;
  metricName?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsRegionId?: string;
  tumblingwindows?: string[];
  valueFilter?: DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter[];
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      aggregates: 'Aggregates',
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      groupbys: 'Groupbys',
      logId: 'LogId',
      metricExpress: 'MetricExpress',
      metricName: 'MetricName',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      tumblingwindows: 'Tumblingwindows',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregates: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorAggregates },
      gmtCreate: 'number',
      groupId: 'number',
      groupbys: { 'type': 'array', 'itemType': 'string' },
      logId: 'number',
      metricExpress: 'string',
      metricName: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      tumblingwindows: { 'type': 'array', 'itemType': 'string' },
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorAttributeResponseBodyLogMonitorValueFilter },
      valueFilterRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBodyLogMonitorListValueFilter extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogMonitorListResponseBodyLogMonitorList extends $tea.Model {
  gmtCreate?: number;
  groupId?: number;
  logId?: number;
  metricName?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsRegionId?: string;
  valueFilter?: DescribeLogMonitorListResponseBodyLogMonitorListValueFilter[];
  valueFilterRelation?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      groupId: 'GroupId',
      logId: 'LogId',
      metricName: 'MetricName',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsRegionId: 'SlsRegionId',
      valueFilter: 'ValueFilter',
      valueFilterRelation: 'ValueFilterRelation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      groupId: 'number',
      logId: 'number',
      metricName: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsRegionId: 'string',
      valueFilter: { 'type': 'array', 'itemType': DescribeLogMonitorListResponseBodyLogMonitorListValueFilter },
      valueFilterRelation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBodyResourcesResource extends $tea.Model {
  description?: string;
  dimensions?: string;
  labels?: string;
  metricName?: string;
  namespace?: string;
  periods?: string;
  statistics?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dimensions: 'Dimensions',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      periods: 'Periods',
      statistics: 'Statistics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dimensions: 'string',
      labels: 'string',
      metricName: 'string',
      namespace: 'string',
      periods: 'string',
      statistics: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricMetaListResponseBodyResources extends $tea.Model {
  resource?: DescribeMetricMetaListResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMetricMetaListResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics extends $tea.Model {
  metricName?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackList extends $tea.Model {
  category?: string;
  createTime?: string;
  effectiveTime?: string;
  enableEndTime?: number;
  enableStartTime?: number;
  id?: string;
  instances?: string[];
  isEnable?: boolean;
  metrics?: DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics[];
  name?: string;
  namespace?: string;
  scopeType?: string;
  scopeValue?: string[];
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      effectiveTime: 'EffectiveTime',
      enableEndTime: 'EnableEndTime',
      enableStartTime: 'EnableStartTime',
      id: 'Id',
      instances: 'Instances',
      isEnable: 'IsEnable',
      metrics: 'Metrics',
      name: 'Name',
      namespace: 'Namespace',
      scopeType: 'ScopeType',
      scopeValue: 'ScopeValue',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      effectiveTime: 'string',
      enableEndTime: 'number',
      enableStartTime: 'number',
      id: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      isEnable: 'boolean',
      metrics: { 'type': 'array', 'itemType': DescribeMetricRuleBlackListResponseBodyDescribeMetricRuleBlackListMetrics },
      name: 'string',
      namespace: 'string',
      scopeType: 'string',
      scopeValue: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponseBodyMetricRuleCount extends $tea.Model {
  alarm?: number;
  disable?: number;
  nodata?: number;
  ok?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
      disable: 'Disable',
      nodata: 'Nodata',
      ok: 'Ok',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: 'number',
      disable: 'number',
      nodata: 'number',
      ok: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList extends $tea.Model {
  expressionList?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList[];
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionListExpressionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression extends $tea.Model {
  expressionList?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList;
  expressionListJoin?: string;
  expressionRaw?: string;
  level?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpressionExpressionList,
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations extends $tea.Model {
  critical?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical;
  info?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo;
  warn?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsCritical,
      info: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsInfo,
      warn: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmLabels extends $tea.Model {
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmLabelsLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations extends $tea.Model {
  annotations?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations[];
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotationsAnnotations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus extends $tea.Model {
  annotations?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations;
  level?: string;
  promQL?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      level: 'Level',
      promQL: 'PromQL',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheusAnnotations,
      level: 'string',
      promQL: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarmsAlarm extends $tea.Model {
  alertState?: string;
  compositeExpression?: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression;
  contactGroups?: string;
  dimensions?: string;
  effectiveInterval?: string;
  enableState?: boolean;
  escalations?: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations;
  groupId?: string;
  groupName?: string;
  labels?: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels;
  mailSubject?: string;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  prometheus?: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  sourceType?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      alertState: 'AlertState',
      compositeExpression: 'CompositeExpression',
      contactGroups: 'ContactGroups',
      dimensions: 'Dimensions',
      effectiveInterval: 'EffectiveInterval',
      enableState: 'EnableState',
      escalations: 'Escalations',
      groupId: 'GroupId',
      groupName: 'GroupName',
      labels: 'Labels',
      mailSubject: 'MailSubject',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      prometheus: 'Prometheus',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      sourceType: 'SourceType',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertState: 'string',
      compositeExpression: DescribeMetricRuleListResponseBodyAlarmsAlarmCompositeExpression,
      contactGroups: 'string',
      dimensions: 'string',
      effectiveInterval: 'string',
      enableState: 'boolean',
      escalations: DescribeMetricRuleListResponseBodyAlarmsAlarmEscalations,
      groupId: 'string',
      groupName: 'string',
      labels: DescribeMetricRuleListResponseBodyAlarmsAlarmLabels,
      mailSubject: 'string',
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      prometheus: DescribeMetricRuleListResponseBodyAlarmsAlarmPrometheus,
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      sourceType: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleListResponseBodyAlarms extends $tea.Model {
  alarm?: DescribeMetricRuleListResponseBodyAlarmsAlarm[];
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: { 'type': 'array', 'itemType': DescribeMetricRuleListResponseBodyAlarmsAlarm },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBodyTargetsTarget extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTargetsResponseBodyTargets extends $tea.Model {
  target?: DescribeMetricRuleTargetsResponseBodyTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': DescribeMetricRuleTargetsResponseBodyTargetsTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations extends $tea.Model {
  critical?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical;
  info?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo;
  warn?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsCritical,
      info: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsInfo,
      warn: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabelsLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabels extends $tea.Model {
  labels?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabelsLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabelsLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate extends $tea.Model {
  category?: string;
  escalations?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations;
  labels?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabels;
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  ruleName?: string;
  selector?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      escalations: 'Escalations',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      escalations: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateEscalations,
      labels: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplateLabels,
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates extends $tea.Model {
  alertTemplate?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate[];
  static names(): { [key: string]: string } {
    return {
      alertTemplate: 'AlertTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplate: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplatesAlertTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateAttributeResponseBodyResource extends $tea.Model {
  alertTemplates?: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates;
  description?: string;
  name?: string;
  restVersion?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplates: 'AlertTemplates',
      description: 'Description',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplates: DescribeMetricRuleTemplateAttributeResponseBodyResourceAlertTemplates,
      description: 'string',
      name: 'string',
      restVersion: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory extends $tea.Model {
  applyTime?: number;
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      applyTime: 'ApplyTime',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTime: 'number',
      groupId: 'number',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories extends $tea.Model {
  applyHistory?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory[];
  static names(): { [key: string]: string } {
    return {
      applyHistory: 'ApplyHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistory: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistoriesApplyHistory },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate extends $tea.Model {
  applyHistories?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories;
  description?: string;
  gmtCreate?: number;
  gmtModified?: number;
  name?: string;
  restVersion?: number;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      applyHistories: 'ApplyHistories',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      name: 'Name',
      restVersion: 'RestVersion',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyHistories: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplateApplyHistories,
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      name: 'string',
      restVersion: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleTemplateListResponseBodyTemplates extends $tea.Model {
  template?: DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': DescribeMetricRuleTemplateListResponseBodyTemplatesTemplate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem extends $tea.Model {
  category?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory extends $tea.Model {
  categoryItem?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem[];
  static names(): { [key: string]: string } {
    return {
      categoryItem: 'CategoryItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryItem: { 'type': 'array', 'itemType': DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategoryCategoryItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategories extends $tea.Model {
  groupId?: number;
  monitorGroupCategory?: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      monitorGroupCategory: 'MonitorGroupCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      monitorGroupCategory: DescribeMonitorGroupCategoriesResponseBodyMonitorGroupCategoriesMonitorGroupCategory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters extends $tea.Model {
  filter?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFiltersFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResourceResource extends $tea.Model {
  category?: string;
  filterRelation?: string;
  filters?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      filterRelation: 'FilterRelation',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      filterRelation: 'string',
      filters: DescribeMonitorGroupDynamicRulesResponseBodyResourceResourceFilters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupDynamicRulesResponseBodyResource extends $tea.Model {
  resource?: DescribeMonitorGroupDynamicRulesResponseBodyResourceResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupDynamicRulesResponseBodyResourceResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion extends $tea.Model {
  availabilityZone?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags extends $tea.Model {
  tag?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc extends $tea.Model {
  vpcInstanceId?: string;
  vswitchInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcInstanceId: 'VpcInstanceId',
      vswitchInstanceId: 'VswitchInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcInstanceId: 'string',
      vswitchInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource extends $tea.Model {
  category?: string;
  desc?: string;
  dimension?: string;
  instanceId?: string;
  instanceName?: string;
  networkType?: string;
  region?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion;
  tags?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags;
  vpc?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      desc: 'Desc',
      dimension: 'Dimension',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkType: 'NetworkType',
      region: 'Region',
      tags: 'Tags',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      desc: 'string',
      dimension: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkType: 'string',
      region: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceRegion,
      tags: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceTags,
      vpc: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResourceVpc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstanceAttributeResponseBodyResources extends $tea.Model {
  resource?: DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupInstanceAttributeResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBodyResourcesResource extends $tea.Model {
  category?: string;
  id?: number;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupInstancesResponseBodyResources extends $tea.Model {
  resource?: DescribeMonitorGroupInstancesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupInstancesResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy extends $tea.Model {
  endTime?: number;
  groupId?: string;
  id?: string;
  startTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      id: 'Id',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      id: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList extends $tea.Model {
  notifyPolicy?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy[];
  static names(): { [key: string]: string } {
    return {
      notifyPolicy: 'NotifyPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPolicy: { 'type': 'array', 'itemType': DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups extends $tea.Model {
  contactGroup?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTags extends $tea.Model {
  tag?: DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds extends $tea.Model {
  templateId?: string[];
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResource extends $tea.Model {
  bindUrl?: string;
  contactGroups?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups;
  dynamicTagRuleId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupFounderTagKey?: string;
  groupFounderTagValue?: string;
  groupId?: number;
  groupName?: string;
  resourceGroupId?: string;
  serviceId?: string;
  tags?: DescribeMonitorGroupsResponseBodyResourcesResourceTags;
  templateIds?: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      contactGroups: 'ContactGroups',
      dynamicTagRuleId: 'DynamicTagRuleId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupFounderTagKey: 'GroupFounderTagKey',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
      templateIds: 'TemplateIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      contactGroups: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups,
      dynamicTagRuleId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupFounderTagKey: 'string',
      groupFounderTagValue: 'string',
      groupId: 'number',
      groupName: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: DescribeMonitorGroupsResponseBodyResourcesResourceTags,
      templateIds: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResources extends $tea.Model {
  resource?: DescribeMonitorGroupsResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota extends $tea.Model {
  instanceId?: string;
  suitInfo?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      suitInfo: 'SuitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      suitInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorBrowser extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorMobile extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask extends $tea.Model {
  quotaLimit?: number;
  quotaPackage?: number;
  quotaUsed?: number;
  static names(): { [key: string]: string } {
    return {
      quotaLimit: 'QuotaLimit',
      quotaPackage: 'QuotaPackage',
      quotaUsed: 'QuotaUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaLimit: 'number',
      quotaPackage: 'number',
      quotaUsed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuota extends $tea.Model {
  api?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi;
  customMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor;
  enterpriseQuota?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota;
  eventMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor;
  expireTime?: string;
  instanceId?: string;
  logMonitor?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor;
  phone?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone;
  SMS?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS;
  siteMonitorBrowser?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorBrowser;
  siteMonitorEcsProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe;
  siteMonitorMobile?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorMobile;
  siteMonitorOperatorProbe?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe;
  siteMonitorTask?: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask;
  suitInfo?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      customMonitor: 'CustomMonitor',
      enterpriseQuota: 'EnterpriseQuota',
      eventMonitor: 'EventMonitor',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      logMonitor: 'LogMonitor',
      phone: 'Phone',
      SMS: 'SMS',
      siteMonitorBrowser: 'SiteMonitorBrowser',
      siteMonitorEcsProbe: 'SiteMonitorEcsProbe',
      siteMonitorMobile: 'SiteMonitorMobile',
      siteMonitorOperatorProbe: 'SiteMonitorOperatorProbe',
      siteMonitorTask: 'SiteMonitorTask',
      suitInfo: 'SuitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaApi,
      customMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaCustomMonitor,
      enterpriseQuota: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEnterpriseQuota,
      eventMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaEventMonitor,
      expireTime: 'string',
      instanceId: 'string',
      logMonitor: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaLogMonitor,
      phone: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaPhone,
      SMS: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSMS,
      siteMonitorBrowser: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorBrowser,
      siteMonitorEcsProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorEcsProbe,
      siteMonitorMobile: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorMobile,
      siteMonitorOperatorProbe: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorOperatorProbe,
      siteMonitorTask: DescribeMonitorResourceQuotaAttributeResponseBodyResourceQuotaSiteMonitorTask,
      suitInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBodyHostsHost extends $tea.Model {
  agentVersion?: string;
  aliUid?: number;
  eipAddress?: string;
  eipId?: string;
  hostName?: string;
  instanceId?: string;
  instanceTypeFamily?: string;
  ipGroup?: string;
  natIp?: string;
  networkType?: string;
  operatingSystem?: string;
  region?: string;
  serialNumber?: string;
  isAliyunHost?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      aliUid: 'AliUid',
      eipAddress: 'EipAddress',
      eipId: 'EipId',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      instanceTypeFamily: 'InstanceTypeFamily',
      ipGroup: 'IpGroup',
      natIp: 'NatIp',
      networkType: 'NetworkType',
      operatingSystem: 'OperatingSystem',
      region: 'Region',
      serialNumber: 'SerialNumber',
      isAliyunHost: 'isAliyunHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      aliUid: 'number',
      eipAddress: 'string',
      eipId: 'string',
      hostName: 'string',
      instanceId: 'string',
      instanceTypeFamily: 'string',
      ipGroup: 'string',
      natIp: 'string',
      networkType: 'string',
      operatingSystem: 'string',
      region: 'string',
      serialNumber: 'string',
      isAliyunHost: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentHostsResponseBodyHosts extends $tea.Model {
  host?: DescribeMonitoringAgentHostsResponseBodyHostsHost[];
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: { 'type': 'array', 'itemType': DescribeMonitoringAgentHostsResponseBodyHostsHost },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess extends $tea.Model {
  command?: string;
  groupId?: string;
  instanceId?: string;
  processId?: number;
  processName?: string;
  processUser?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processUser: 'ProcessUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      groupId: 'string',
      instanceId: 'string',
      processId: 'number',
      processName: 'string',
      processUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentProcessesResponseBodyNodeProcesses extends $tea.Model {
  nodeProcess?: DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess[];
  static names(): { [key: string]: string } {
    return {
      nodeProcess: 'NodeProcess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeProcess: { 'type': 'array', 'itemType': DescribeMonitoringAgentProcessesResponseBodyNodeProcessesNodeProcess },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus extends $tea.Model {
  agentInstallErrorCode?: string;
  autoInstall?: boolean;
  instanceId?: string;
  osMonitorConfig?: string;
  osMonitorErrorCode?: string;
  osMonitorErrorDetail?: string;
  osMonitorStatus?: string;
  osMonitorVersion?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstallErrorCode: 'AgentInstallErrorCode',
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      osMonitorConfig: 'OsMonitorConfig',
      osMonitorErrorCode: 'OsMonitorErrorCode',
      osMonitorErrorDetail: 'OsMonitorErrorDetail',
      osMonitorStatus: 'OsMonitorStatus',
      osMonitorVersion: 'OsMonitorVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstallErrorCode: 'string',
      autoInstall: 'boolean',
      instanceId: 'string',
      osMonitorConfig: 'string',
      osMonitorErrorCode: 'string',
      osMonitorErrorDetail: 'string',
      osMonitorStatus: 'string',
      osMonitorVersion: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusList extends $tea.Model {
  nodeStatus?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus[];
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: { 'type': 'array', 'itemType': DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResourceTagKeyListResponseBodyTagKeys extends $tea.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig extends $tea.Model {
  comparisonOperator?: string;
  evaluationCount?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  period?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList extends $tea.Model {
  alertInitConfig?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig[];
  static names(): { [key: string]: string } {
    return {
      alertInitConfig: 'AlertInitConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInitConfig: { 'type': 'array', 'itemType': DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigListAlertInitConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule extends $tea.Model {
  alertInitConfigList?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      alertInitConfigList: 'AlertInitConfigList',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInitConfigList: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRuleAlertInitConfigList,
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleList extends $tea.Model {
  allProductInitMetricRule?: DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule[];
  static names(): { [key: string]: string } {
    return {
      allProductInitMetricRule: 'AllProductInitMetricRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allProductInitMetricRule: { 'type': 'array', 'itemType': DescribeProductsOfActiveMetricRuleResponseBodyAllProductInitMetricRuleListAllProductInitMetricRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBodyResourcesResource extends $tea.Model {
  description?: string;
  labels?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMetaResponseBodyResources extends $tea.Model {
  resource?: DescribeProjectMetaResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeProjectMetaResponseBodyResourcesResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule extends $tea.Model {
  actionEnable?: string;
  alarmActions?: string;
  comparisonOperator?: string;
  dimensions?: string;
  evaluationCount?: string;
  expression?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  okActions?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  stateValue?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      actionEnable: 'ActionEnable',
      alarmActions: 'AlarmActions',
      comparisonOperator: 'ComparisonOperator',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      expression: 'Expression',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      okActions: 'OkActions',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      stateValue: 'StateValue',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionEnable: 'string',
      alarmActions: 'string',
      comparisonOperator: 'string',
      dimensions: 'string',
      evaluationCount: 'string',
      expression: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      okActions: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      stateValue: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodyMetricRules extends $tea.Model {
  metricRule?: DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule[];
  static names(): { [key: string]: string } {
    return {
      metricRule: 'MetricRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRule: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays extends $tea.Model {
  days?: number[];
  static names(): { [key: string]: string } {
    return {
      days: 'days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule extends $tea.Model {
  days?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays;
  endHour?: number;
  startHour?: number;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'days',
      endHour: 'end_hour',
      startHour: 'start_hour',
      timeZone: 'time_zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays,
      endHour: 'number',
      startHour: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity extends $tea.Model {
  city?: string;
  cityName?: string;
  isp?: string;
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      cityName: 'CityName',
      isp: 'Isp',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      cityName: 'string',
      isp: 'string',
      ispName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities extends $tea.Model {
  ispCity?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity[];
  static names(): { [key: string]: string } {
    return {
      ispCity: 'IspCity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCity: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertionsAssertions extends $tea.Model {
  operator?: string;
  property?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      property: 'property',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      property: 'string',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions extends $tea.Model {
  assertions?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertionsAssertions[];
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertionsAssertions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList extends $tea.Model {
  blockedUrlList?: string[];
  static names(): { [key: string]: string } {
    return {
      blockedUrlList: 'blocked_url_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockedUrlList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders extends $tea.Model {
  browserHeaders?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      browserHeaders: 'browser_headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserHeaders: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts extends $tea.Model {
  browserHosts?: string[];
  static names(): { [key: string]: string } {
    return {
      browserHosts: 'browser_hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserHosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfoBrowserInfo extends $tea.Model {
  browser?: string;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      browser: 'browser',
      device: 'device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browser: 'string',
      device: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo extends $tea.Model {
  browserInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfoBrowserInfo[];
  static names(): { [key: string]: string } {
    return {
      browserInfo: 'browser_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInfo: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfoBrowserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString extends $tea.Model {
  expectExistString?: string[];
  static names(): { [key: string]: string } {
    return {
      expectExistString: 'expect_exist_string',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectExistString: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString extends $tea.Model {
  expectNonExistString?: string[];
  static names(): { [key: string]: string } {
    return {
      expectNonExistString: 'expect_non_exist_string',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectNonExistString: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist extends $tea.Model {
  trafficHijackElementBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      trafficHijackElementBlacklist: 'traffic_hijack_element_blacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficHijackElementBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist extends $tea.Model {
  trafficHijackElementWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      trafficHijackElementWhitelist: 'traffic_hijack_element_whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficHijackElementWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson extends $tea.Model {
  assertions?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions;
  attempts?: number;
  authentication?: number;
  blockedUrlList?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList;
  browserHeaders?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders;
  browserHosts?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts;
  browserInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo;
  browserInsecure?: boolean;
  browserTaskVersion?: string;
  cookie?: string;
  diagnosisMtr?: boolean;
  diagnosisPing?: boolean;
  dnsHijackWhitelist?: string;
  dnsMatchRule?: string;
  dnsServer?: string;
  dnsType?: string;
  expectExistString?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString;
  expectNonExistString?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString;
  expectValue?: string;
  failureRate?: number;
  header?: string;
  httpMethod?: string;
  isBase64Encode?: string;
  matchRule?: number;
  minTlsVersion?: string;
  password?: string;
  pingNum?: number;
  pingPort?: number;
  pingType?: string;
  port?: number;
  protocol?: string;
  requestContent?: string;
  requestFormat?: string;
  responseContent?: string;
  responseFormat?: string;
  retryDelay?: number;
  strictMode?: boolean;
  timeOut?: number;
  trafficHijackElementBlacklist?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist;
  trafficHijackElementCount?: number;
  trafficHijackElementWhitelist?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist;
  username?: string;
  waitTimeAfterCompletion?: number;
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
      attempts: 'attempts',
      authentication: 'authentication',
      blockedUrlList: 'blocked_url_list',
      browserHeaders: 'browser_headers',
      browserHosts: 'browser_hosts',
      browserInfo: 'browser_info',
      browserInsecure: 'browser_insecure',
      browserTaskVersion: 'browser_task_version',
      cookie: 'cookie',
      diagnosisMtr: 'diagnosis_mtr',
      diagnosisPing: 'diagnosis_ping',
      dnsHijackWhitelist: 'dns_hijack_whitelist',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      expectExistString: 'expect_exist_string',
      expectNonExistString: 'expect_non_exist_string',
      expectValue: 'expect_value',
      failureRate: 'failure_rate',
      header: 'header',
      httpMethod: 'http_method',
      isBase64Encode: 'isBase64Encode',
      matchRule: 'match_rule',
      minTlsVersion: 'min_tls_version',
      password: 'password',
      pingNum: 'ping_num',
      pingPort: 'ping_port',
      pingType: 'ping_type',
      port: 'port',
      protocol: 'protocol',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      retryDelay: 'retry_delay',
      strictMode: 'strict_mode',
      timeOut: 'time_out',
      trafficHijackElementBlacklist: 'traffic_hijack_element_blacklist',
      trafficHijackElementCount: 'traffic_hijack_element_count',
      trafficHijackElementWhitelist: 'traffic_hijack_element_whitelist',
      username: 'username',
      waitTimeAfterCompletion: 'waitTime_after_completion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions,
      attempts: 'number',
      authentication: 'number',
      blockedUrlList: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList,
      browserHeaders: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders,
      browserHosts: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts,
      browserInfo: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo,
      browserInsecure: 'boolean',
      browserTaskVersion: 'string',
      cookie: 'string',
      diagnosisMtr: 'boolean',
      diagnosisPing: 'boolean',
      dnsHijackWhitelist: 'string',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      expectExistString: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString,
      expectNonExistString: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString,
      expectValue: 'string',
      failureRate: 'number',
      header: 'string',
      httpMethod: 'string',
      isBase64Encode: 'string',
      matchRule: 'number',
      minTlsVersion: 'string',
      password: 'string',
      pingNum: 'number',
      pingPort: 'number',
      pingType: 'string',
      port: 'number',
      protocol: 'string',
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      retryDelay: 'number',
      strictMode: 'boolean',
      timeOut: 'number',
      trafficHijackElementBlacklist: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist,
      trafficHijackElementCount: 'number',
      trafficHijackElementWhitelist: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist,
      username: 'string',
      waitTimeAfterCompletion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitors extends $tea.Model {
  address?: string;
  agentGroup?: string;
  customSchedule?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule;
  interval?: string;
  ispCities?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities;
  optionJson?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson;
  taskId?: string;
  taskName?: string;
  taskState?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
      customSchedule: 'CustomSchedule',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionJson: 'OptionJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agentGroup: 'string',
      customSchedule: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule,
      interval: 'string',
      ispCities: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities,
      optionJson: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCityIPPool extends $tea.Model {
  IPPool?: string[];
  static names(): { [key: string]: string } {
    return {
      IPPool: 'IPPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPPool: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCity extends $tea.Model {
  area_en?: string;
  area_zh_cN?: string;
  city?: string;
  cityName_en?: string;
  cityName_zh_cN?: string;
  country?: string;
  country_en?: string;
  country_zh_cN?: string;
  IPPool?: DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCityIPPool;
  IPV4ProbeCount?: string;
  IPV6ProbeCount?: string;
  isp?: string;
  ispName_en?: string;
  ispName_zh_cN?: string;
  region?: string;
  region_en?: string;
  region_zh_cN?: string;
  static names(): { [key: string]: string } {
    return {
      area_en: 'Area.en',
      area_zh_cN: 'Area.zh_CN',
      city: 'City',
      cityName_en: 'CityName.en',
      cityName_zh_cN: 'CityName.zh_CN',
      country: 'Country',
      country_en: 'Country.en',
      country_zh_cN: 'Country.zh_CN',
      IPPool: 'IPPool',
      IPV4ProbeCount: 'IPV4ProbeCount',
      IPV6ProbeCount: 'IPV6ProbeCount',
      isp: 'Isp',
      ispName_en: 'IspName.en',
      ispName_zh_cN: 'IspName.zh_CN',
      region: 'Region',
      region_en: 'Region.en',
      region_zh_cN: 'Region.zh_CN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area_en: 'string',
      area_zh_cN: 'string',
      city: 'string',
      cityName_en: 'string',
      cityName_zh_cN: 'string',
      country: 'string',
      country_en: 'string',
      country_zh_cN: 'string',
      IPPool: DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCityIPPool,
      IPV4ProbeCount: 'string',
      IPV6ProbeCount: 'string',
      isp: 'string',
      ispName_en: 'string',
      ispName_zh_cN: 'string',
      region: 'string',
      region_en: 'string',
      region_zh_cN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorISPCityListResponseBodyIspCityList extends $tea.Model {
  ispCity?: DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCity[];
  static names(): { [key: string]: string } {
    return {
      ispCity: 'IspCity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCity: { 'type': 'array', 'itemType': DescribeSiteMonitorISPCityListResponseBodyIspCityListIspCity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions extends $tea.Model {
  operator?: string;
  property?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      property: 'property',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      property: 'string',
      target: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions extends $tea.Model {
  assertions?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions[];
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertionsAssertions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson extends $tea.Model {
  acceptableResponseCode?: string;
  assertions?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions;
  attempts?: number;
  authentication?: number;
  certVerify?: boolean;
  cookie?: string;
  diagnosisMtr?: boolean;
  diagnosisPing?: boolean;
  dnsMatchRule?: string;
  dnsServer?: string;
  dnsType?: string;
  enableOperatorDns?: boolean;
  failureRate?: number;
  header?: string;
  httpMethod?: string;
  isBase64Encode?: string;
  matchRule?: number;
  password?: string;
  pingNum?: number;
  port?: number;
  protocol?: string;
  proxyProtocol?: boolean;
  requestContent?: string;
  requestFormat?: string;
  responseContent?: string;
  responseFormat?: string;
  retryDelay?: number;
  timeOut?: number;
  unfollowRedirect?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      acceptableResponseCode: 'acceptable_response_code',
      assertions: 'assertions',
      attempts: 'attempts',
      authentication: 'authentication',
      certVerify: 'cert_verify',
      cookie: 'cookie',
      diagnosisMtr: 'diagnosis_mtr',
      diagnosisPing: 'diagnosis_ping',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      enableOperatorDns: 'enable_operator_dns',
      failureRate: 'failure_rate',
      header: 'header',
      httpMethod: 'http_method',
      isBase64Encode: 'isBase64Encode',
      matchRule: 'match_rule',
      password: 'password',
      pingNum: 'ping_num',
      port: 'port',
      protocol: 'protocol',
      proxyProtocol: 'proxy_protocol',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      retryDelay: 'retry_delay',
      timeOut: 'time_out',
      unfollowRedirect: 'unfollow_redirect',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptableResponseCode: 'string',
      assertions: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJsonAssertions,
      attempts: 'number',
      authentication: 'number',
      certVerify: 'boolean',
      cookie: 'string',
      diagnosisMtr: 'boolean',
      diagnosisPing: 'boolean',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      enableOperatorDns: 'boolean',
      failureRate: 'number',
      header: 'string',
      httpMethod: 'string',
      isBase64Encode: 'string',
      matchRule: 'number',
      password: 'string',
      pingNum: 'number',
      port: 'number',
      protocol: 'string',
      proxyProtocol: 'boolean',
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      retryDelay: 'number',
      timeOut: 'number',
      unfollowRedirect: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor extends $tea.Model {
  address?: string;
  agentGroup?: string;
  createTime?: string;
  interval?: string;
  optionsJson?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson;
  taskId?: string;
  taskName?: string;
  taskState?: string;
  taskType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
      createTime: 'CreateTime',
      interval: 'Interval',
      optionsJson: 'OptionsJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agentGroup: 'string',
      createTime: 'string',
      interval: 'string',
      optionsJson: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitorOptionsJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorListResponseBodySiteMonitors extends $tea.Model {
  siteMonitor?: DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor[];
  static names(): { [key: string]: string } {
    return {
      siteMonitor: 'SiteMonitor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteMonitor: { 'type': 'array', 'itemType': DescribeSiteMonitorListResponseBodySiteMonitorsSiteMonitor },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorQuotaResponseBodyData extends $tea.Model {
  secondMonitor?: boolean;
  siteMonitorIdcQuota?: number;
  siteMonitorOperatorQuotaQuota?: number;
  siteMonitorQuotaTaskUsed?: number;
  siteMonitorTaskQuota?: number;
  siteMonitorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      secondMonitor: 'SecondMonitor',
      siteMonitorIdcQuota: 'SiteMonitorIdcQuota',
      siteMonitorOperatorQuotaQuota: 'SiteMonitorOperatorQuotaQuota',
      siteMonitorQuotaTaskUsed: 'SiteMonitorQuotaTaskUsed',
      siteMonitorTaskQuota: 'SiteMonitorTaskQuota',
      siteMonitorVersion: 'SiteMonitorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondMonitor: 'boolean',
      siteMonitorIdcQuota: 'number',
      siteMonitorOperatorQuotaQuota: 'number',
      siteMonitorQuotaTaskUsed: 'number',
      siteMonitorTaskQuota: 'number',
      siteMonitorVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent extends $tea.Model {
  content?: string;
  groupId?: string;
  id?: string;
  instanceName?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  resourceId?: string;
  status?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      id: 'Id',
      instanceName: 'InstanceName',
      level: 'Level',
      name: 'Name',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      status: 'Status',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      id: 'string',
      instanceName: 'string',
      level: 'string',
      name: 'string',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      status: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBodySystemEvents extends $tea.Model {
  systemEvent?: DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent[];
  static names(): { [key: string]: string } {
    return {
      systemEvent: 'SystemEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEvent: { 'type': 'array', 'itemType': DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount extends $tea.Model {
  content?: string;
  groupId?: string;
  instanceName?: string;
  level?: string;
  name?: string;
  num?: number;
  product?: string;
  regionId?: string;
  resourceId?: string;
  status?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      level: 'Level',
      name: 'Name',
      num: 'Num',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      status: 'Status',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      instanceName: 'string',
      level: 'string',
      name: 'string',
      num: 'number',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      status: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBodySystemEventCounts extends $tea.Model {
  systemEventCount?: DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount[];
  static names(): { [key: string]: string } {
    return {
      systemEventCount: 'SystemEventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEventCount: { 'type': 'array', 'itemType': DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram extends $tea.Model {
  count?: number;
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventHistogramResponseBodySystemEventHistograms extends $tea.Model {
  systemEventHistogram?: DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram[];
  static names(): { [key: string]: string } {
    return {
      systemEventHistogram: 'SystemEventHistogram',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEventHistogram: { 'type': 'array', 'itemType': DescribeSystemEventHistogramResponseBodySystemEventHistogramsSystemEventHistogram },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListResponseBodyDataResource extends $tea.Model {
  eventType?: string;
  level?: string;
  name?: string;
  nameDesc?: string;
  nameDesc_en?: string;
  product?: string;
  status?: string;
  statusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      level: 'Level',
      name: 'Name',
      nameDesc: 'NameDesc',
      nameDesc_en: 'NameDesc.En',
      product: 'Product',
      status: 'Status',
      statusDesc: 'StatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      level: 'string',
      name: 'string',
      nameDesc: 'string',
      nameDesc_en: 'string',
      product: 'string',
      status: 'string',
      statusDesc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventMetaListResponseBodyData extends $tea.Model {
  resource?: DescribeSystemEventMetaListResponseBodyDataResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeSystemEventMetaListResponseBodyDataResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagKeyListResponseBodyTagKeys extends $tea.Model {
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValueListResponseBodyTagValues extends $tea.Model {
  tagValue?: string[];
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList extends $tea.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance extends $tea.Model {
  id?: number;
  instanceList?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceList: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstanceInstanceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyList extends $tea.Model {
  nodeTaskInstance?: DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance[];
  static names(): { [key: string]: string } {
    return {
      nodeTaskInstance: 'NodeTaskInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTaskInstance: { 'type': 'array', 'itemType': DescribeUnhealthyHostAvailabilityResponseBodyUnhealthyListNodeTaskInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableSiteMonitorsResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableSiteMonitorsResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGroupMonitoringAgentProcessRequestAlertConfig extends $tea.Model {
  comparisonOperator?: string;
  effectiveInterval?: string;
  escalationsLevel?: string;
  noEffectiveInterval?: string;
  silenceTime?: string;
  statistics?: string;
  targetList?: ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList[];
  threshold?: string;
  times?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      effectiveInterval: 'EffectiveInterval',
      escalationsLevel: 'EscalationsLevel',
      noEffectiveInterval: 'NoEffectiveInterval',
      silenceTime: 'SilenceTime',
      statistics: 'Statistics',
      targetList: 'TargetList',
      threshold: 'Threshold',
      times: 'Times',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      effectiveInterval: 'string',
      escalationsLevel: 'string',
      noEffectiveInterval: 'string',
      silenceTime: 'string',
      statistics: 'string',
      targetList: { 'type': 'array', 'itemType': ModifyGroupMonitoringAgentProcessRequestAlertConfigTargetList },
      threshold: 'string',
      times: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfig extends $tea.Model {
  endTime?: number;
  notifyType?: number;
  silenceTime?: number;
  startTime?: number;
  webHook?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      notifyType: 'NotifyType',
      silenceTime: 'SilenceTime',
      startTime: 'StartTime',
      webHook: 'WebHook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      notifyType: 'number',
      silenceTime: 'number',
      startTime: 'number',
      webHook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestTaskOption extends $tea.Model {
  httpHeader?: string;
  httpMethod?: string;
  httpNegative?: boolean;
  httpPostContent?: string;
  httpResponseCharset?: string;
  httpResponseMatchContent?: string;
  httpURI?: string;
  interval?: number;
  telnetOrPingHost?: string;
  static names(): { [key: string]: string } {
    return {
      httpHeader: 'HttpHeader',
      httpMethod: 'HttpMethod',
      httpNegative: 'HttpNegative',
      httpPostContent: 'HttpPostContent',
      httpResponseCharset: 'HttpResponseCharset',
      httpResponseMatchContent: 'HttpResponseMatchContent',
      httpURI: 'HttpURI',
      interval: 'Interval',
      telnetOrPingHost: 'TelnetOrPingHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpHeader: 'string',
      httpMethod: 'string',
      httpNegative: 'boolean',
      httpPostContent: 'string',
      httpResponseCharset: 'string',
      httpResponseMatchContent: 'string',
      httpURI: 'string',
      interval: 'number',
      telnetOrPingHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfigEscalationList extends $tea.Model {
  aggregate?: string;
  metricName?: string;
  operator?: string;
  times?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'Aggregate',
      metricName: 'MetricName',
      operator: 'Operator',
      times: 'Times',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      metricName: 'string',
      operator: 'string',
      times: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAvailabilityRequestAlertConfigTargetList extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorSLSGroupRequestSLSGroupConfig extends $tea.Model {
  SLSLogstore?: string;
  SLSProject?: string;
  SLSRegion?: string;
  SLSUserId?: string;
  static names(): { [key: string]: string } {
    return {
      SLSLogstore: 'SLSLogstore',
      SLSProject: 'SLSProject',
      SLSRegion: 'SLSRegion',
      SLSUserId: 'SLSUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SLSLogstore: 'string',
      SLSProject: 'string',
      SLSRegion: 'string',
      SLSUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequestAttachLabels extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
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

export class ModifyHybridMonitorTaskRequestSLSProcessConfigExpress extends $tea.Model {
  alias?: string;
  express?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      express: 'Express',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      express: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters extends $tea.Model {
  operator?: string;
  SLSKeyName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      SLSKeyName: 'SLSKeyName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      SLSKeyName: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequestSLSProcessConfigFilter extends $tea.Model {
  filters?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters[];
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      relation: 'Relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigFilterFilters },
      relation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequestSLSProcessConfigGroupBy extends $tea.Model {
  alias?: string;
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      SLSKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics extends $tea.Model {
  alias?: string;
  function?: string;
  parameter1?: string;
  parameter2?: string;
  SLSKeyName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      function: 'Function',
      parameter1: 'Parameter1',
      parameter2: 'Parameter2',
      SLSKeyName: 'SLSKeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      function: 'string',
      parameter1: 'string',
      parameter2: 'string',
      SLSKeyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHybridMonitorTaskRequestSLSProcessConfig extends $tea.Model {
  express?: ModifyHybridMonitorTaskRequestSLSProcessConfigExpress[];
  filter?: ModifyHybridMonitorTaskRequestSLSProcessConfigFilter;
  groupBy?: ModifyHybridMonitorTaskRequestSLSProcessConfigGroupBy[];
  statistics?: ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics[];
  static names(): { [key: string]: string } {
    return {
      express: 'Express',
      filter: 'Filter',
      groupBy: 'GroupBy',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      express: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigExpress },
      filter: ModifyHybridMonitorTaskRequestSLSProcessConfigFilter,
      groupBy: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigGroupBy },
      statistics: { 'type': 'array', 'itemType': ModifyHybridMonitorTaskRequestSLSProcessConfigStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleBlackListRequestMetrics extends $tea.Model {
  metricName?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplatesEscalations extends $tea.Model {
  critical?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical;
  info?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo;
  warn?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsCritical,
      info: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsInfo,
      warn: ModifyMetricRuleTemplateRequestAlertTemplatesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMetricRuleTemplateRequestAlertTemplates extends $tea.Model {
  escalations?: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations;
  category?: string;
  metricName?: string;
  namespace?: string;
  period?: number;
  ruleName?: string;
  selector?: string;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      category: 'Category',
      metricName: 'MetricName',
      namespace: 'Namespace',
      period: 'Period',
      ruleName: 'RuleName',
      selector: 'Selector',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: ModifyMetricRuleTemplateRequestAlertTemplatesEscalations,
      category: 'string',
      metricName: 'string',
      namespace: 'string',
      period: 'number',
      ruleName: 'string',
      selector: 'string',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyMonitorGroupInstancesRequestInstances extends $tea.Model {
  category?: string;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySiteMonitorResponseBodyData extends $tea.Model {
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutContactRequestChannels extends $tea.Model {
  aliIM?: string;
  dingWebHook?: string;
  mail?: string;
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomEventRequestEventInfo extends $tea.Model {
  content?: string;
  eventName?: string;
  groupId?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      eventName: 'EventName',
      groupId: 'GroupId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      eventName: 'string',
      groupId: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutCustomMetricRequestMetricList extends $tea.Model {
  dimensions?: string;
  groupId?: string;
  metricName?: string;
  period?: string;
  time?: string;
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupId: 'GroupId',
      metricName: 'MetricName',
      period: 'Period',
      time: 'Time',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      groupId: 'string',
      metricName: 'string',
      period: 'string',
      time: 'string',
      type: 'string',
      values: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleRequestEventPattern extends $tea.Model {
  customFilters?: string;
  eventTypeList?: string[];
  levelList?: string[];
  nameList?: string[];
  product?: string;
  SQLFilter?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      customFilters: 'CustomFilters',
      eventTypeList: 'EventTypeList',
      levelList: 'LevelList',
      nameList: 'NameList',
      product: 'Product',
      SQLFilter: 'SQLFilter',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFilters: 'string',
      eventTypeList: { 'type': 'array', 'itemType': 'string' },
      levelList: { 'type': 'array', 'itemType': 'string' },
      nameList: { 'type': 'array', 'itemType': 'string' },
      product: 'string',
      SQLFilter: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestContactParameters extends $tea.Model {
  contactGroupName?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      id: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestFcParameters extends $tea.Model {
  functionName?: string;
  id?: string;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'string',
      region: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestMnsParameters extends $tea.Model {
  id?: string;
  queue?: string;
  region?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      queue: 'string',
      region: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestOpenApiParameters extends $tea.Model {
  action?: string;
  arn?: string;
  id?: string;
  jsonParams?: string;
  product?: string;
  region?: string;
  role?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      product: 'Product',
      region: 'Region',
      role: 'Role',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      product: 'string',
      region: 'string',
      role: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestSlsParameters extends $tea.Model {
  id?: string;
  logStore?: string;
  project?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      logStore: 'LogStore',
      project: 'Project',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      logStore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsRequestWebhookParameters extends $tea.Model {
  id?: string;
  method?: string;
  protocol?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      method: 'Method',
      protocol: 'Protocol',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      method: 'string',
      protocol: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter extends $tea.Model {
  contactGroupName?: string;
  id?: number;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      id: 'number',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedContactParameters extends $tea.Model {
  contactParameter?: PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter[];
  static names(): { [key: string]: string } {
    return {
      contactParameter: 'ContactParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedContactParametersContactParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter extends $tea.Model {
  functionName?: string;
  id?: number;
  region?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      id: 'Id',
      region: 'Region',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      id: 'number',
      region: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedFcParameters extends $tea.Model {
  fcParameter?: PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter[];
  static names(): { [key: string]: string } {
    return {
      fcParameter: 'FcParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedFcParametersFcParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter extends $tea.Model {
  id?: number;
  queue?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      queue: 'Queue',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      queue: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventRuleTargetsResponseBodyFailedMnsParameters extends $tea.Model {
  mnsParameter?: PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter[];
  static names(): { [key: string]: string } {
    return {
      mnsParameter: 'MnsParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsParameter: { 'type': 'array', 'itemType': PutEventRuleTargetsResponseBodyFailedMnsParametersMnsParameter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestEscalations extends $tea.Model {
  critical?: PutGroupMetricRuleRequestEscalationsCritical;
  info?: PutGroupMetricRuleRequestEscalationsInfo;
  warn?: PutGroupMetricRuleRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutGroupMetricRuleRequestEscalationsCritical,
      info: PutGroupMetricRuleRequestEscalationsInfo,
      warn: PutGroupMetricRuleRequestEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleRequestLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutGroupMetricRuleResponseBodyResult extends $tea.Model {
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataRequestMetricListLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataRequestMetricList extends $tea.Model {
  labels?: PutHybridMonitorMetricDataRequestMetricListLabels[];
  name?: string;
  TS?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      TS: 'TS',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': PutHybridMonitorMetricDataRequestMetricListLabels },
      name: 'string',
      TS: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutHybridMonitorMetricDataResponseBodyErrorDetail extends $tea.Model {
  errorMessage?: string;
  index?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      index: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestAggregates extends $tea.Model {
  alias?: string;
  fieldName?: string;
  function?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
      function: 'Function',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
      function: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestGroupbys extends $tea.Model {
  alias?: string;
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      fieldName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLogMonitorRequestValueFilter extends $tea.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsRequestTargets extends $tea.Model {
  arn?: string;
  id?: string;
  jsonParams?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      jsonParams: 'JsonParams',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      jsonParams: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailDataTargetsTarget extends $tea.Model {
  arn?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailDataTargets extends $tea.Model {
  target?: PutMetricRuleTargetsResponseBodyFailDataTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutMetricRuleTargetsResponseBodyFailDataTargetsTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMetricRuleTargetsResponseBodyFailData extends $tea.Model {
  targets?: PutMetricRuleTargetsResponseBodyFailDataTargets;
  static names(): { [key: string]: string } {
    return {
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targets: PutMetricRuleTargetsResponseBodyFailDataTargets,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequestGroupRulesFilters extends $tea.Model {
  function?: string;
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequestGroupRules extends $tea.Model {
  category?: string;
  filterRelation?: string;
  filters?: PutMonitorGroupDynamicRuleRequestGroupRulesFilters[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      filterRelation: 'FilterRelation',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      filterRelation: 'string',
      filters: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRulesFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestEscalations extends $tea.Model {
  critical?: PutResourceMetricRuleRequestEscalationsCritical;
  info?: PutResourceMetricRuleRequestEscalationsInfo;
  warn?: PutResourceMetricRuleRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRuleRequestEscalationsCritical,
      info: PutResourceMetricRuleRequestEscalationsInfo,
      warn: PutResourceMetricRuleRequestEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestCompositeExpressionExpressionList extends $tea.Model {
  comparisonOperator?: string;
  metricName?: string;
  period?: number;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      period: 'Period',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      statistics: 'string',
      threshold: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestCompositeExpression extends $tea.Model {
  expressionList?: PutResourceMetricRuleRequestCompositeExpressionExpressionList[];
  expressionListJoin?: string;
  expressionRaw?: string;
  level?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      expressionList: 'ExpressionList',
      expressionListJoin: 'ExpressionListJoin',
      expressionRaw: 'ExpressionRaw',
      level: 'Level',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionList: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestCompositeExpressionExpressionList },
      expressionListJoin: 'string',
      expressionRaw: 'string',
      level: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestPrometheusAnnotations extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleRequestPrometheus extends $tea.Model {
  annotations?: PutResourceMetricRuleRequestPrometheusAnnotations[];
  level?: string;
  promQL?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      level: 'Level',
      promQL: 'PromQL',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'array', 'itemType': PutResourceMetricRuleRequestPrometheusAnnotations },
      level: 'string',
      promQL: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestEscalations extends $tea.Model {
  critical?: PutResourceMetricRuleShrinkRequestEscalationsCritical;
  info?: PutResourceMetricRuleShrinkRequestEscalationsInfo;
  warn?: PutResourceMetricRuleShrinkRequestEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRuleShrinkRequestEscalationsCritical,
      info: PutResourceMetricRuleShrinkRequestEscalationsInfo,
      warn: PutResourceMetricRuleShrinkRequestEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRuleShrinkRequestLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsCritical extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsInfo extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalationsWarn extends $tea.Model {
  comparisonOperator?: string;
  n?: number;
  preCondition?: string;
  statistics?: string;
  threshold?: string;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      n: 'N',
      preCondition: 'PreCondition',
      statistics: 'Statistics',
      threshold: 'Threshold',
      times: 'Times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      n: 'number',
      preCondition: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesEscalations extends $tea.Model {
  critical?: PutResourceMetricRulesRequestRulesEscalationsCritical;
  info?: PutResourceMetricRulesRequestRulesEscalationsInfo;
  warn?: PutResourceMetricRulesRequestRulesEscalationsWarn;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      warn: 'Warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: PutResourceMetricRulesRequestRulesEscalationsCritical,
      info: PutResourceMetricRulesRequestRulesEscalationsInfo,
      warn: PutResourceMetricRulesRequestRulesEscalationsWarn,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRulesLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesRequestRules extends $tea.Model {
  escalations?: PutResourceMetricRulesRequestRulesEscalations;
  contactGroups?: string;
  effectiveInterval?: string;
  emailSubject?: string;
  interval?: string;
  labels?: PutResourceMetricRulesRequestRulesLabels[];
  metricName?: string;
  namespace?: string;
  noDataPolicy?: string;
  noEffectiveInterval?: string;
  period?: string;
  resources?: string;
  ruleId?: string;
  ruleName?: string;
  silenceTime?: number;
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      escalations: 'Escalations',
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      interval: 'Interval',
      labels: 'Labels',
      metricName: 'MetricName',
      namespace: 'Namespace',
      noDataPolicy: 'NoDataPolicy',
      noEffectiveInterval: 'NoEffectiveInterval',
      period: 'Period',
      resources: 'Resources',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      escalations: PutResourceMetricRulesRequestRulesEscalations,
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      interval: 'string',
      labels: { 'type': 'array', 'itemType': PutResourceMetricRulesRequestRulesLabels },
      metricName: 'string',
      namespace: 'string',
      noDataPolicy: 'string',
      noEffectiveInterval: 'string',
      period: 'string',
      resources: 'string',
      ruleId: 'string',
      ruleName: 'string',
      silenceTime: 'number',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResultTargetResult extends $tea.Model {
  code?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResultTarget extends $tea.Model {
  result?: PutResourceMetricRulesResponseBodyFailedListResultTargetResult;
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: PutResourceMetricRulesResponseBodyFailedListResultTargetResult,
      ruleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutResourceMetricRulesResponseBodyFailedListResult extends $tea.Model {
  target?: PutResourceMetricRulesResponseBodyFailedListResultTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutResourceMetricRulesResponseBodyFailedListResultTarget },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagsResponseBodyTag extends $tea.Model {
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': 'string' },
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
    * This topic provides an example on how to add a tag to an application group whose ID is `7301****`. In this example, the key of the tag is `key1` and the value of the tag is `value1`.
    *
    * @param request AddTagsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddTagsResponse
   */
  async addTagsWithOptions(request: AddTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsResponse>(await this.callApi(params, req, runtime), new AddTagsResponse({}));
  }

  /**
    * This topic provides an example on how to add a tag to an application group whose ID is `7301****`. In this example, the key of the tag is `key1` and the value of the tag is `value1`.
    *
    * @param request AddTagsRequest
    * @return AddTagsResponse
   */
  async addTags(request: AddTagsRequest): Promise<AddTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  /**
    * In this example, the `700****` alert template is applied to the `123456` application group. For the generated alert rule, the ID is `applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****`, and the name is `test123`.
    *
    * @param request ApplyMetricRuleTemplateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ApplyMetricRuleTemplateResponse
   */
  async applyMetricRuleTemplateWithOptions(request: ApplyMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ApplyMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applyMode)) {
      query["ApplyMode"] = request.applyMode;
    }

    if (!Util.isUnset(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!Util.isUnset(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.notifyLevel)) {
      query["NotifyLevel"] = request.notifyLevel;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new ApplyMetricRuleTemplateResponse({}));
  }

  /**
    * In this example, the `700****` alert template is applied to the `123456` application group. For the generated alert rule, the ID is `applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****`, and the name is `test123`.
    *
    * @param request ApplyMetricRuleTemplateRequest
    * @return ApplyMetricRuleTemplateResponse
   */
  async applyMetricRuleTemplate(request: ApplyMetricRuleTemplateRequest): Promise<ApplyMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyMetricRuleTemplateWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create a site monitoring task named `HangZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTP`. The returned result shows that the site monitoring task is created. The name of the site monitoring task is `HangZhou_ECS1` and the task ID is `679fbe4f-b80b-4706-91b2-5427b43e****`.
    *
    * @param request BatchCreateInstantSiteMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchCreateInstantSiteMonitorResponse
   */
  async batchCreateInstantSiteMonitorWithOptions(request: BatchCreateInstantSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateInstantSiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskList)) {
      query["TaskList"] = request.taskList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateInstantSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateInstantSiteMonitorResponse>(await this.callApi(params, req, runtime), new BatchCreateInstantSiteMonitorResponse({}));
  }

  /**
    * This topic provides an example on how to create a site monitoring task named `HangZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTP`. The returned result shows that the site monitoring task is created. The name of the site monitoring task is `HangZhou_ECS1` and the task ID is `679fbe4f-b80b-4706-91b2-5427b43e****`.
    *
    * @param request BatchCreateInstantSiteMonitorRequest
    * @return BatchCreateInstantSiteMonitorResponse
   */
  async batchCreateInstantSiteMonitor(request: BatchCreateInstantSiteMonitorRequest): Promise<BatchCreateInstantSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateInstantSiteMonitorWithOptions(request, runtime);
  }

  /**
    * @deprecated : BatchCreateIntantSiteMonitor is deprecated, please use Cms::2019-01-01::BatchCreateInstantSiteMonitor instead.
    *
    * @param request BatchCreateIntantSiteMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchCreateIntantSiteMonitorResponse
   */
  // Deprecated
  async batchCreateIntantSiteMonitorWithOptions(request: BatchCreateIntantSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<BatchCreateIntantSiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskList)) {
      query["TaskList"] = request.taskList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateIntantSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateIntantSiteMonitorResponse>(await this.callApi(params, req, runtime), new BatchCreateIntantSiteMonitorResponse({}));
  }

  /**
    * @deprecated : BatchCreateIntantSiteMonitor is deprecated, please use Cms::2019-01-01::BatchCreateInstantSiteMonitor instead.
    *
    * @param request BatchCreateIntantSiteMonitorRequest
    * @return BatchCreateIntantSiteMonitorResponse
   */
  // Deprecated
  async batchCreateIntantSiteMonitor(request: BatchCreateIntantSiteMonitorRequest): Promise<BatchCreateIntantSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchCreateIntantSiteMonitorWithOptions(request, runtime);
  }

  /**
    * ### [](#)Prerequisites
    * The `Cursor` information is returned by calling the [Cursor](~~2330730~~) operation.
    * ### [](#)Description
    * This topic provides an example on how to export the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The `Cursor` information is specified. A maximum of 1,000 data entries can be returned in each response.
    *
    * @param tmpReq BatchExportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return BatchExportResponse
   */
  async batchExportWithOptions(tmpReq: BatchExportRequest, runtime: $Util.RuntimeOptions): Promise<BatchExportResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchExportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.measurements)) {
      request.measurementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.measurements, "Measurements", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cursor)) {
      body["Cursor"] = request.cursor;
    }

    if (!Util.isUnset(request.length)) {
      body["Length"] = request.length;
    }

    if (!Util.isUnset(request.measurementsShrink)) {
      body["Measurements"] = request.measurementsShrink;
    }

    if (!Util.isUnset(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchExport",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchExportResponse>(await this.callApi(params, req, runtime), new BatchExportResponse({}));
  }

  /**
    * ### [](#)Prerequisites
    * The `Cursor` information is returned by calling the [Cursor](~~2330730~~) operation.
    * ### [](#)Description
    * This topic provides an example on how to export the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The `Cursor` information is specified. A maximum of 1,000 data entries can be returned in each response.
    *
    * @param request BatchExportRequest
    * @return BatchExportResponse
   */
  async batchExport(request: BatchExportRequest): Promise<BatchExportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchExportWithOptions(request, runtime);
  }

  async createCmsCallNumOrderWithOptions(request: CreateCmsCallNumOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsCallNumOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCmsCallNumOrder",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCmsCallNumOrderResponse>(await this.callApi(params, req, runtime), new CreateCmsCallNumOrderResponse({}));
  }

  async createCmsCallNumOrder(request: CreateCmsCallNumOrderRequest): Promise<CreateCmsCallNumOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsCallNumOrderWithOptions(request, runtime);
  }

  async createCmsOrderWithOptions(request: CreateCmsOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiCount)) {
      query["ApiCount"] = request.apiCount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.customTimeSeries)) {
      query["CustomTimeSeries"] = request.customTimeSeries;
    }

    if (!Util.isUnset(request.eventStoreNum)) {
      query["EventStoreNum"] = request.eventStoreNum;
    }

    if (!Util.isUnset(request.eventStoreTime)) {
      query["EventStoreTime"] = request.eventStoreTime;
    }

    if (!Util.isUnset(request.logMonitorStream)) {
      query["LogMonitorStream"] = request.logMonitorStream;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.phoneCount)) {
      query["PhoneCount"] = request.phoneCount;
    }

    if (!Util.isUnset(request.siteEcsNum)) {
      query["SiteEcsNum"] = request.siteEcsNum;
    }

    if (!Util.isUnset(request.siteOperatorNum)) {
      query["SiteOperatorNum"] = request.siteOperatorNum;
    }

    if (!Util.isUnset(request.siteTaskNum)) {
      query["SiteTaskNum"] = request.siteTaskNum;
    }

    if (!Util.isUnset(request.smsCount)) {
      query["SmsCount"] = request.smsCount;
    }

    if (!Util.isUnset(request.suggestType)) {
      query["SuggestType"] = request.suggestType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCmsOrder",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCmsOrderResponse>(await this.callApi(params, req, runtime), new CreateCmsOrderResponse({}));
  }

  async createCmsOrder(request: CreateCmsOrderRequest): Promise<CreateCmsOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsOrderWithOptions(request, runtime);
  }

  async createCmsSmspackageOrderWithOptions(request: CreateCmsSmspackageOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateCmsSmspackageOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.smsCount)) {
      query["SmsCount"] = request.smsCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCmsSmspackageOrder",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCmsSmspackageOrderResponse>(await this.callApi(params, req, runtime), new CreateCmsSmspackageOrderResponse({}));
  }

  async createCmsSmspackageOrder(request: CreateCmsSmspackageOrderRequest): Promise<CreateCmsSmspackageOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCmsSmspackageOrderWithOptions(request, runtime);
  }

  /**
    * This operation is available for Elastic Compute Service (ECS), ApsaraDB RDS, and Server Load Balancer (SLB).
    * This topic provides an example to show how to create an application group for resources whose tag key is `ecs_instance`. In this example, the alert contact group of the application group is `ECS_Group`.
    *
    * @param request CreateDynamicTagGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDynamicTagGroupResponse
   */
  async createDynamicTagGroupWithOptions(request: CreateDynamicTagGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDynamicTagGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupList)) {
      query["ContactGroupList"] = request.contactGroupList;
    }

    if (!Util.isUnset(request.enableInstallAgent)) {
      query["EnableInstallAgent"] = request.enableInstallAgent;
    }

    if (!Util.isUnset(request.enableSubscribeEvent)) {
      query["EnableSubscribeEvent"] = request.enableSubscribeEvent;
    }

    if (!Util.isUnset(request.matchExpress)) {
      query["MatchExpress"] = request.matchExpress;
    }

    if (!Util.isUnset(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.tagRegionId)) {
      query["TagRegionId"] = request.tagRegionId;
    }

    if (!Util.isUnset(request.templateIdList)) {
      query["TemplateIdList"] = request.templateIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDynamicTagGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDynamicTagGroupResponse>(await this.callApi(params, req, runtime), new CreateDynamicTagGroupResponse({}));
  }

  /**
    * This operation is available for Elastic Compute Service (ECS), ApsaraDB RDS, and Server Load Balancer (SLB).
    * This topic provides an example to show how to create an application group for resources whose tag key is `ecs_instance`. In this example, the alert contact group of the application group is `ECS_Group`.
    *
    * @param request CreateDynamicTagGroupRequest
    * @return CreateDynamicTagGroupResponse
   */
  async createDynamicTagGroup(request: CreateDynamicTagGroupRequest): Promise<CreateDynamicTagGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDynamicTagGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `123456` application group. The ID of the alert rule is `456789`. The name of the alert rule is `ECS_Rule1`. The alert level is `Critical`. The statistical method is `Average`. The comparison operator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The response shows that the alert rule named `ECS_Rule1` is created.
    *
    * @param request CreateGroupMetricRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateGroupMetricRulesResponse
   */
  async createGroupMetricRulesWithOptions(request: CreateGroupMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupMetricRules)) {
      query["GroupMetricRules"] = request.groupMetricRules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupMetricRulesResponse>(await this.callApi(params, req, runtime), new CreateGroupMetricRulesResponse({}));
  }

  /**
    * This topic provides an example to show how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `123456` application group. The ID of the alert rule is `456789`. The name of the alert rule is `ECS_Rule1`. The alert level is `Critical`. The statistical method is `Average`. The comparison operator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The response shows that the alert rule named `ECS_Rule1` is created.
    *
    * @param request CreateGroupMetricRulesRequest
    * @return CreateGroupMetricRulesResponse
   */
  async createGroupMetricRules(request: CreateGroupMetricRulesRequest): Promise<CreateGroupMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupMetricRulesWithOptions(request, runtime);
  }

  async createGroupMonitoringAgentProcessWithOptions(request: CreateGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.matchExpress)) {
      query["MatchExpress"] = request.matchExpress;
    }

    if (!Util.isUnset(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new CreateGroupMonitoringAgentProcessResponse({}));
  }

  async createGroupMonitoringAgentProcess(request: CreateGroupMonitoringAgentProcessRequest): Promise<CreateGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create an availability monitoring task named `task1` in an application group named `123456`. The TaskType parameter of the task is set to `HTTP`. After you start the task, the system sends alerts by using the specified email address and DingTalk chatbot.
    *
    * @param request CreateHostAvailabilityRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHostAvailabilityResponse
   */
  async createHostAvailabilityWithOptions(request: CreateHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<CreateHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfigEscalationList)) {
      query["AlertConfigEscalationList"] = request.alertConfigEscalationList;
    }

    if (!Util.isUnset(request.alertConfigTargetList)) {
      query["AlertConfigTargetList"] = request.alertConfigTargetList;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskScope)) {
      query["TaskScope"] = request.taskScope;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.taskOption)) {
      query["TaskOption"] = request.taskOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHostAvailabilityResponse>(await this.callApi(params, req, runtime), new CreateHostAvailabilityResponse({}));
  }

  /**
    * This topic provides an example on how to create an availability monitoring task named `task1` in an application group named `123456`. The TaskType parameter of the task is set to `HTTP`. After you start the task, the system sends alerts by using the specified email address and DingTalk chatbot.
    *
    * @param request CreateHostAvailabilityRequest
    * @return CreateHostAvailabilityResponse
   */
  async createHostAvailability(request: CreateHostAvailabilityRequest): Promise<CreateHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHostAvailabilityWithOptions(request, runtime);
  }

  /**
    * # [](#)Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * # [](#)Description
    * This topic provides an example on how to create a namespace named `aliyun`. In this example, the data retention period of the namespace is set to `cms.s1.3xlarge`. The returned result indicates that the namespace is created.
    *
    * @param request CreateHybridMonitorNamespaceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHybridMonitorNamespaceResponse
   */
  async createHybridMonitorNamespaceWithOptions(request: CreateHybridMonitorNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateHybridMonitorNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceRegion)) {
      query["NamespaceRegion"] = request.namespaceRegion;
    }

    if (!Util.isUnset(request.namespaceType)) {
      query["NamespaceType"] = request.namespaceType;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHybridMonitorNamespace",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHybridMonitorNamespaceResponse>(await this.callApi(params, req, runtime), new CreateHybridMonitorNamespaceResponse({}));
  }

  /**
    * # [](#)Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * # [](#)Description
    * This topic provides an example on how to create a namespace named `aliyun`. In this example, the data retention period of the namespace is set to `cms.s1.3xlarge`. The returned result indicates that the namespace is created.
    *
    * @param request CreateHybridMonitorNamespaceRequest
    * @return CreateHybridMonitorNamespaceResponse
   */
  async createHybridMonitorNamespace(request: CreateHybridMonitorNamespaceRequest): Promise<CreateHybridMonitorNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHybridMonitorNamespaceWithOptions(request, runtime);
  }

  /**
    * # Prerequisites
    * Simple Log Service is activated. A project and a Logstore are created in Simple Log Service. For more information, see [Getting Started](~~54604~~).
    * # Description
    * In this example, a Logstore group named `Logstore_test` is created. The region ID is `cn-hangzhou`. The project is `aliyun-project`. The Logstore is `Logstore-ECS`. The response shows that the Logstore group is created.
    *
    * @param request CreateHybridMonitorSLSGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHybridMonitorSLSGroupResponse
   */
  async createHybridMonitorSLSGroupWithOptions(request: CreateHybridMonitorSLSGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateHybridMonitorSLSGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SLSGroupConfig)) {
      query["SLSGroupConfig"] = request.SLSGroupConfig;
    }

    if (!Util.isUnset(request.SLSGroupDescription)) {
      query["SLSGroupDescription"] = request.SLSGroupDescription;
    }

    if (!Util.isUnset(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new CreateHybridMonitorSLSGroupResponse({}));
  }

  /**
    * # Prerequisites
    * Simple Log Service is activated. A project and a Logstore are created in Simple Log Service. For more information, see [Getting Started](~~54604~~).
    * # Description
    * In this example, a Logstore group named `Logstore_test` is created. The region ID is `cn-hangzhou`. The project is `aliyun-project`. The Logstore is `Logstore-ECS`. The response shows that the Logstore group is created.
    *
    * @param request CreateHybridMonitorSLSGroupRequest
    * @return CreateHybridMonitorSLSGroupResponse
   */
  async createHybridMonitorSLSGroup(request: CreateHybridMonitorSLSGroupRequest): Promise<CreateHybridMonitorSLSGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
    * # [](#)Prerequisites
    * *   Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * *   If you want to create a metric for logs imported from Simple Log Service, make sure that you have activated Simple Log Service and created a project and a Logstore. For more information, see [Getting Started](~~54604~~).
    * # [](#)Description
    * This topic provides an example on how to create a metric import task named `aliyun_task` for Elastic Compute Service (ECS). The task imports the `cpu_total` metric to the `aliyun` namespace. The response shows that the metric import task is created.
    *
    * @param request CreateHybridMonitorTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateHybridMonitorTaskResponse
   */
  async createHybridMonitorTaskWithOptions(request: CreateHybridMonitorTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateHybridMonitorTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attachLabels)) {
      query["AttachLabels"] = request.attachLabels;
    }

    if (!Util.isUnset(request.cloudAccessId)) {
      query["CloudAccessId"] = request.cloudAccessId;
    }

    if (!Util.isUnset(request.collectInterval)) {
      query["CollectInterval"] = request.collectInterval;
    }

    if (!Util.isUnset(request.collectTargetType)) {
      query["CollectTargetType"] = request.collectTargetType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.SLSProcessConfig)) {
      query["SLSProcessConfig"] = request.SLSProcessConfig;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.targetUserIdList)) {
      query["TargetUserIdList"] = request.targetUserIdList;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.YARMConfig)) {
      query["YARMConfig"] = request.YARMConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHybridMonitorTask",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHybridMonitorTaskResponse>(await this.callApi(params, req, runtime), new CreateHybridMonitorTaskResponse({}));
  }

  /**
    * # [](#)Prerequisites
    * *   Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * *   If you want to create a metric for logs imported from Simple Log Service, make sure that you have activated Simple Log Service and created a project and a Logstore. For more information, see [Getting Started](~~54604~~).
    * # [](#)Description
    * This topic provides an example on how to create a metric import task named `aliyun_task` for Elastic Compute Service (ECS). The task imports the `cpu_total` metric to the `aliyun` namespace. The response shows that the metric import task is created.
    *
    * @param request CreateHybridMonitorTaskRequest
    * @return CreateHybridMonitorTaskResponse
   */
  async createHybridMonitorTask(request: CreateHybridMonitorTaskRequest): Promise<CreateHybridMonitorTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHybridMonitorTaskWithOptions(request, runtime);
  }

  /**
    * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring. 
    * This topic provides an example to show how to create an instant test task. The name of the task is `task1`. The tested address is `http://www.aliyun.com`. The test type is `HTTP`. The number of detection points is `1`.
    *
    * @param request CreateInstantSiteMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateInstantSiteMonitorResponse
   */
  async createInstantSiteMonitorWithOptions(request: CreateInstantSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstantSiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.randomIspCity)) {
      query["RandomIspCity"] = request.randomIspCity;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstantSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstantSiteMonitorResponse>(await this.callApi(params, req, runtime), new CreateInstantSiteMonitorResponse({}));
  }

  /**
    * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring. 
    * This topic provides an example to show how to create an instant test task. The name of the task is `task1`. The tested address is `http://www.aliyun.com`. The test type is `HTTP`. The number of detection points is `1`.
    *
    * @param request CreateInstantSiteMonitorRequest
    * @return CreateInstantSiteMonitorResponse
   */
  async createInstantSiteMonitor(request: CreateInstantSiteMonitorRequest): Promise<CreateInstantSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstantSiteMonitorWithOptions(request, runtime);
  }

  /**
    * ### Background information
    * *   CloudMonitor blocks alert notifications based on the blacklist policies that take effect. To block alert notifications when the value of a metric that belongs to a cloud service reaches the threshold that you specified, add the metric to a blacklist policy.
    * *   CloudMonitor allows you to create blacklist policies only based on threshold metrics. You cannot create blacklist policies based on system events. For more information about the cloud services and the thresholds of the metrics that are supported by CloudMonitor, see [Appendix 1: Metrics](~~163515~~).
    *
    * @param request CreateMetricRuleBlackListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMetricRuleBlackListResponse
   */
  async createMetricRuleBlackListWithOptions(request: CreateMetricRuleBlackListRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!Util.isUnset(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!Util.isUnset(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new CreateMetricRuleBlackListResponse({}));
  }

  /**
    * ### Background information
    * *   CloudMonitor blocks alert notifications based on the blacklist policies that take effect. To block alert notifications when the value of a metric that belongs to a cloud service reaches the threshold that you specified, add the metric to a blacklist policy.
    * *   CloudMonitor allows you to create blacklist policies only based on threshold metrics. You cannot create blacklist policies based on system events. For more information about the cloud services and the thresholds of the metrics that are supported by CloudMonitor, see [Appendix 1: Metrics](~~163515~~).
    *
    * @param request CreateMetricRuleBlackListRequest
    * @return CreateMetricRuleBlackListResponse
   */
  async createMetricRuleBlackList(request: CreateMetricRuleBlackListRequest): Promise<CreateMetricRuleBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleBlackListWithOptions(request, runtime);
  }

  async createMetricRuleResourcesWithOptions(request: CreateMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new CreateMetricRuleResourcesResponse({}));
  }

  async createMetricRuleResources(request: CreateMetricRuleResourcesRequest): Promise<CreateMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleResourcesWithOptions(request, runtime);
  }

  async createMetricRuleTemplateWithOptions(request: CreateMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertTemplates)) {
      query["AlertTemplates"] = request.alertTemplates;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new CreateMetricRuleTemplateResponse({}));
  }

  async createMetricRuleTemplate(request: CreateMetricRuleTemplateRequest): Promise<CreateMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMetricRuleTemplateWithOptions(request, runtime);
  }

  async createMonitorAgentProcessWithOptions(request: CreateMonitorAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    if (!Util.isUnset(request.processUser)) {
      query["ProcessUser"] = request.processUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorAgentProcessResponse>(await this.callApi(params, req, runtime), new CreateMonitorAgentProcessResponse({}));
  }

  async createMonitorAgentProcess(request: CreateMonitorAgentProcessRequest): Promise<CreateMonitorAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorAgentProcessWithOptions(request, runtime);
  }

  /**
    * In this example, the application group named `ECS_Group` is created.
    *
    * @param request CreateMonitorGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMonitorGroupResponse
   */
  async createMonitorGroupWithOptions(request: CreateMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupResponse({}));
  }

  /**
    * In this example, the application group named `ECS_Group` is created.
    *
    * @param request CreateMonitorGroupRequest
    * @return CreateMonitorGroupResponse
   */
  async createMonitorGroup(request: CreateMonitorGroupRequest): Promise<CreateMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create an application group by using the resource group `CloudMonitor` and the alert contact group `ECS_Group`. The region ID of the resource group is `cn-hangzhou`.
    *
    * @param request CreateMonitorGroupByResourceGroupIdRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMonitorGroupByResourceGroupIdResponse
   */
  async createMonitorGroupByResourceGroupIdWithOptions(request: CreateMonitorGroupByResourceGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupByResourceGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupList)) {
      query["ContactGroupList"] = request.contactGroupList;
    }

    if (!Util.isUnset(request.enableInstallAgent)) {
      query["EnableInstallAgent"] = request.enableInstallAgent;
    }

    if (!Util.isUnset(request.enableSubscribeEvent)) {
      query["EnableSubscribeEvent"] = request.enableSubscribeEvent;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroupByResourceGroupId",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupByResourceGroupIdResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupByResourceGroupIdResponse({}));
  }

  /**
    * This topic provides an example on how to create an application group by using the resource group `CloudMonitor` and the alert contact group `ECS_Group`. The region ID of the resource group is `cn-hangzhou`.
    *
    * @param request CreateMonitorGroupByResourceGroupIdRequest
    * @return CreateMonitorGroupByResourceGroupIdResponse
   */
  async createMonitorGroupByResourceGroupId(request: CreateMonitorGroupByResourceGroupIdRequest): Promise<CreateMonitorGroupByResourceGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupByResourceGroupIdWithOptions(request, runtime);
  }

  /**
    * You can add a maximum of 1,000 instances to an application group at a time. You can add a maximum of 3,000 instances of an Alibaba Cloud service to an application group. The total number of instances that you can add to an application group is unlimited.
    * In this example, an Elastic Compute Service (ECS) instance in the `China (Hangzhou)` region is added to the `3607****` application group. The instance ID is `i-2ze26xj5wwy12****` and the instance name is `test-instance-ecs`.
    *
    * @param request CreateMonitorGroupInstancesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMonitorGroupInstancesResponse
   */
  async createMonitorGroupInstancesWithOptions(request: CreateMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupInstancesResponse({}));
  }

  /**
    * You can add a maximum of 1,000 instances to an application group at a time. You can add a maximum of 3,000 instances of an Alibaba Cloud service to an application group. The total number of instances that you can add to an application group is unlimited.
    * In this example, an Elastic Compute Service (ECS) instance in the `China (Hangzhou)` region is added to the `3607****` application group. The instance ID is `i-2ze26xj5wwy12****` and the instance name is `test-instance-ecs`.
    *
    * @param request CreateMonitorGroupInstancesRequest
    * @return CreateMonitorGroupInstancesResponse
   */
  async createMonitorGroupInstances(request: CreateMonitorGroupInstancesRequest): Promise<CreateMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupInstancesWithOptions(request, runtime);
  }

  /**
    * If the policy is valid, no alert notifications are sent for the application group.
    * This topic describes how to create the `PauseNotify` policy to pause alert notifications for the `7301****` application group. The StartTime parameter is set to `1622949300000` and the EndTime parameter is set to `1623208500000`. This indicates that the policy is valid from `2021-06-06 11:15:00 UTC+8` to `2021-06-09 11:15:00 UTC+8`.
    *
    * @param request CreateMonitorGroupNotifyPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateMonitorGroupNotifyPolicyResponse
   */
  async createMonitorGroupNotifyPolicyWithOptions(request: CreateMonitorGroupNotifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitorGroupNotifyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitorGroupNotifyPolicy",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitorGroupNotifyPolicyResponse>(await this.callApi(params, req, runtime), new CreateMonitorGroupNotifyPolicyResponse({}));
  }

  /**
    * If the policy is valid, no alert notifications are sent for the application group.
    * This topic describes how to create the `PauseNotify` policy to pause alert notifications for the `7301****` application group. The StartTime parameter is set to `1622949300000` and the EndTime parameter is set to `1623208500000`. This indicates that the policy is valid from `2021-06-06 11:15:00 UTC+8` to `2021-06-09 11:15:00 UTC+8`.
    *
    * @param request CreateMonitorGroupNotifyPolicyRequest
    * @return CreateMonitorGroupNotifyPolicyResponse
   */
  async createMonitorGroupNotifyPolicy(request: CreateMonitorGroupNotifyPolicyRequest): Promise<CreateMonitorGroupNotifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  async createMonitoringAgentProcessWithOptions(request: CreateMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<CreateMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    if (!Util.isUnset(request.processUser)) {
      query["ProcessUser"] = request.processUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new CreateMonitoringAgentProcessResponse({}));
  }

  async createMonitoringAgentProcess(request: CreateMonitoringAgentProcessRequest): Promise<CreateMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create a site monitoring task named `HanZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTPS`.
    *
    * @param request CreateSiteMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSiteMonitorResponse
   */
  async createSiteMonitorWithOptions(request: CreateSiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<CreateSiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!Util.isUnset(request.customSchedule)) {
      query["CustomSchedule"] = request.customSchedule;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSiteMonitorResponse>(await this.callApi(params, req, runtime), new CreateSiteMonitorResponse({}));
  }

  /**
    * This topic provides an example on how to create a site monitoring task named `HanZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTPS`.
    *
    * @param request CreateSiteMonitorRequest
    * @return CreateSiteMonitorResponse
   */
  async createSiteMonitor(request: CreateSiteMonitorRequest): Promise<CreateSiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSiteMonitorWithOptions(request, runtime);
  }

  /**
    * ### [](#)Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * ### [](#)Background information
    * You can call this operation to obtain the Cursor information and then call the [BatchExport](~~2329847~~) operation to export the monitoring data.
    * ### [](#)Description
    * This topic provides an example on how to define the monitoring data of a specified metric for a specified cloud service. In this example, the namespace of the cloud service is set to `acs_ecs_dashboard`, the metric is set to `cpu_idle`, the start time is set to `1641627000000`, and the end time is set to `1641645000000`. The number of idle CPU cores on your Elastic Compute Service (ECS) instances is measured every 60 seconds from 15:30:00, January 8, 2022 to 20:30:00, January 8, 2022. The `Cursor` information is returned.
    *
    * @param tmpReq CursorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CursorResponse
   */
  async cursorWithOptions(tmpReq: CursorRequest, runtime: $Util.RuntimeOptions): Promise<CursorResponse> {
    Util.validateModel(tmpReq);
    let request = new CursorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.matchers)) {
      request.matchersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchers, "Matchers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.matchersShrink)) {
      body["Matchers"] = request.matchersShrink;
    }

    if (!Util.isUnset(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.period)) {
      body["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Cursor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CursorResponse>(await this.callApi(params, req, runtime), new CursorResponse({}));
  }

  /**
    * ### [](#)Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * ### [](#)Background information
    * You can call this operation to obtain the Cursor information and then call the [BatchExport](~~2329847~~) operation to export the monitoring data.
    * ### [](#)Description
    * This topic provides an example on how to define the monitoring data of a specified metric for a specified cloud service. In this example, the namespace of the cloud service is set to `acs_ecs_dashboard`, the metric is set to `cpu_idle`, the start time is set to `1641627000000`, and the end time is set to `1641645000000`. The number of idle CPU cores on your Elastic Compute Service (ECS) instances is measured every 60 seconds from 15:30:00, January 8, 2022 to 20:30:00, January 8, 2022. The `Cursor` information is returned.
    *
    * @param request CursorRequest
    * @return CursorResponse
   */
  async cursor(request: CursorRequest): Promise<CursorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cursorWithOptions(request, runtime);
  }

  async deleteContactWithOptions(request: DeleteContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContact",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactResponse>(await this.callApi(params, req, runtime), new DeleteContactResponse({}));
  }

  async deleteContact(request: DeleteContactRequest): Promise<DeleteContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  async deleteContactGroupWithOptions(request: DeleteContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactGroupResponse>(await this.callApi(params, req, runtime), new DeleteContactGroupResponse({}));
  }

  async deleteContactGroup(request: DeleteContactGroupRequest): Promise<DeleteContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactGroupWithOptions(request, runtime);
  }

  async deleteCustomMetricWithOptions(request: DeleteCustomMetricRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.UUID)) {
      query["UUID"] = request.UUID;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomMetric",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomMetricResponse>(await this.callApi(params, req, runtime), new DeleteCustomMetricResponse({}));
  }

  async deleteCustomMetric(request: DeleteCustomMetricRequest): Promise<DeleteCustomMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomMetricWithOptions(request, runtime);
  }

  async deleteDynamicTagGroupWithOptions(request: DeleteDynamicTagGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDynamicTagGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDynamicTagGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDynamicTagGroupResponse>(await this.callApi(params, req, runtime), new DeleteDynamicTagGroupResponse({}));
  }

  async deleteDynamicTagGroup(request: DeleteDynamicTagGroupRequest): Promise<DeleteDynamicTagGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicTagGroupWithOptions(request, runtime);
  }

  async deleteEventRuleTargetsWithOptions(request: DeleteEventRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventRuleTargetsResponse>(await this.callApi(params, req, runtime), new DeleteEventRuleTargetsResponse({}));
  }

  async deleteEventRuleTargets(request: DeleteEventRuleTargetsRequest): Promise<DeleteEventRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRuleTargetsWithOptions(request, runtime);
  }

  async deleteEventRulesWithOptions(request: DeleteEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventRulesResponse>(await this.callApi(params, req, runtime), new DeleteEventRulesResponse({}));
  }

  async deleteEventRules(request: DeleteEventRulesRequest): Promise<DeleteEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventRulesWithOptions(request, runtime);
  }

  async deleteExporterOutputWithOptions(request: DeleteExporterOutputRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExporterOutputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destName)) {
      query["DestName"] = request.destName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExporterOutput",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExporterOutputResponse>(await this.callApi(params, req, runtime), new DeleteExporterOutputResponse({}));
  }

  async deleteExporterOutput(request: DeleteExporterOutputRequest): Promise<DeleteExporterOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExporterOutputWithOptions(request, runtime);
  }

  async deleteExporterRuleWithOptions(request: DeleteExporterRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExporterRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExporterRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExporterRuleResponse>(await this.callApi(params, req, runtime), new DeleteExporterRuleResponse({}));
  }

  async deleteExporterRule(request: DeleteExporterRuleRequest): Promise<DeleteExporterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExporterRuleWithOptions(request, runtime);
  }

  async deleteGroupMonitoringAgentProcessWithOptions(request: DeleteGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new DeleteGroupMonitoringAgentProcessResponse({}));
  }

  async deleteGroupMonitoringAgentProcess(request: DeleteGroupMonitoringAgentProcessRequest): Promise<DeleteGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  async deleteHostAvailabilityWithOptions(request: DeleteHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHostAvailabilityResponse>(await this.callApi(params, req, runtime), new DeleteHostAvailabilityResponse({}));
  }

  async deleteHostAvailability(request: DeleteHostAvailabilityRequest): Promise<DeleteHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHostAvailabilityWithOptions(request, runtime);
  }

  /**
    * > If a metric import task is created for metrics in a namespace, you cannot delete the namespace unless you delete the task first.
    * This topic provides an example on how to delete a namespace named `aliyun`. The response shows that the namespace is deleted.
    *
    * @param request DeleteHybridMonitorNamespaceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteHybridMonitorNamespaceResponse
   */
  async deleteHybridMonitorNamespaceWithOptions(request: DeleteHybridMonitorNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHybridMonitorNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHybridMonitorNamespace",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHybridMonitorNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteHybridMonitorNamespaceResponse({}));
  }

  /**
    * > If a metric import task is created for metrics in a namespace, you cannot delete the namespace unless you delete the task first.
    * This topic provides an example on how to delete a namespace named `aliyun`. The response shows that the namespace is deleted.
    *
    * @param request DeleteHybridMonitorNamespaceRequest
    * @return DeleteHybridMonitorNamespaceResponse
   */
  async deleteHybridMonitorNamespace(request: DeleteHybridMonitorNamespaceRequest): Promise<DeleteHybridMonitorNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHybridMonitorNamespaceWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to delete a Logstore group named `Logstore_test`. The response shows that the Logstore group is deleted.
    *
    * @param request DeleteHybridMonitorSLSGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteHybridMonitorSLSGroupResponse
   */
  async deleteHybridMonitorSLSGroupWithOptions(request: DeleteHybridMonitorSLSGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHybridMonitorSLSGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new DeleteHybridMonitorSLSGroupResponse({}));
  }

  /**
    * This topic provides an example on how to delete a Logstore group named `Logstore_test`. The response shows that the Logstore group is deleted.
    *
    * @param request DeleteHybridMonitorSLSGroupRequest
    * @return DeleteHybridMonitorSLSGroupResponse
   */
  async deleteHybridMonitorSLSGroup(request: DeleteHybridMonitorSLSGroupRequest): Promise<DeleteHybridMonitorSLSGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to delete a metric import task whose ID is `36****`. The returned result indicates that the metric import task is deleted.
    *
    * @param request DeleteHybridMonitorTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteHybridMonitorTaskResponse
   */
  async deleteHybridMonitorTaskWithOptions(request: DeleteHybridMonitorTaskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteHybridMonitorTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteHybridMonitorTask",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteHybridMonitorTaskResponse>(await this.callApi(params, req, runtime), new DeleteHybridMonitorTaskResponse({}));
  }

  /**
    * This topic provides an example on how to delete a metric import task whose ID is `36****`. The returned result indicates that the metric import task is deleted.
    *
    * @param request DeleteHybridMonitorTaskRequest
    * @return DeleteHybridMonitorTaskResponse
   */
  async deleteHybridMonitorTask(request: DeleteHybridMonitorTaskRequest): Promise<DeleteHybridMonitorTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteHybridMonitorTaskWithOptions(request, runtime);
  }

  async deleteLogMonitorWithOptions(request: DeleteLogMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLogMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logId)) {
      query["LogId"] = request.logId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLogMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLogMonitorResponse>(await this.callApi(params, req, runtime), new DeleteLogMonitorResponse({}));
  }

  async deleteLogMonitor(request: DeleteLogMonitorRequest): Promise<DeleteLogMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLogMonitorWithOptions(request, runtime);
  }

  async deleteMetricRuleBlackListWithOptions(request: DeleteMetricRuleBlackListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleBlackListResponse({}));
  }

  async deleteMetricRuleBlackList(request: DeleteMetricRuleBlackListRequest): Promise<DeleteMetricRuleBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleBlackListWithOptions(request, runtime);
  }

  async deleteMetricRuleResourcesWithOptions(request: DeleteMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleResourcesResponse({}));
  }

  async deleteMetricRuleResources(request: DeleteMetricRuleResourcesRequest): Promise<DeleteMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleResourcesWithOptions(request, runtime);
  }

  async deleteMetricRuleTargetsWithOptions(request: DeleteMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleTargetsResponse({}));
  }

  async deleteMetricRuleTargets(request: DeleteMetricRuleTargetsRequest): Promise<DeleteMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleTargetsWithOptions(request, runtime);
  }

  async deleteMetricRuleTemplateWithOptions(request: DeleteMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new DeleteMetricRuleTemplateResponse({}));
  }

  async deleteMetricRuleTemplate(request: DeleteMetricRuleTemplateRequest): Promise<DeleteMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRuleTemplateWithOptions(request, runtime);
  }

  async deleteMetricRulesWithOptions(request: DeleteMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMetricRulesResponse>(await this.callApi(params, req, runtime), new DeleteMetricRulesResponse({}));
  }

  async deleteMetricRules(request: DeleteMetricRulesRequest): Promise<DeleteMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMetricRulesWithOptions(request, runtime);
  }

  async deleteMonitorGroupWithOptions(request: DeleteMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupResponse({}));
  }

  async deleteMonitorGroup(request: DeleteMonitorGroupRequest): Promise<DeleteMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupWithOptions(request, runtime);
  }

  async deleteMonitorGroupDynamicRuleWithOptions(request: DeleteMonitorGroupDynamicRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupDynamicRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroupDynamicRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupDynamicRuleResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupDynamicRuleResponse({}));
  }

  async deleteMonitorGroupDynamicRule(request: DeleteMonitorGroupDynamicRuleRequest): Promise<DeleteMonitorGroupDynamicRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  async deleteMonitorGroupInstancesWithOptions(request: DeleteMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupInstancesResponse({}));
  }

  async deleteMonitorGroupInstances(request: DeleteMonitorGroupInstancesRequest): Promise<DeleteMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupInstancesWithOptions(request, runtime);
  }

  async deleteMonitorGroupNotifyPolicyWithOptions(request: DeleteMonitorGroupNotifyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitorGroupNotifyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitorGroupNotifyPolicy",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitorGroupNotifyPolicyResponse>(await this.callApi(params, req, runtime), new DeleteMonitorGroupNotifyPolicyResponse({}));
  }

  async deleteMonitorGroupNotifyPolicy(request: DeleteMonitorGroupNotifyPolicyRequest): Promise<DeleteMonitorGroupNotifyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  async deleteMonitoringAgentProcessWithOptions(request: DeleteMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new DeleteMonitoringAgentProcessResponse({}));
  }

  async deleteMonitoringAgentProcess(request: DeleteMonitoringAgentProcessRequest): Promise<DeleteMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMonitoringAgentProcessWithOptions(request, runtime);
  }

  async deleteSiteMonitorsWithOptions(request: DeleteSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSiteMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.isDeleteAlarms)) {
      query["IsDeleteAlarms"] = request.isDeleteAlarms;
    }

    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSiteMonitorsResponse>(await this.callApi(params, req, runtime), new DeleteSiteMonitorsResponse({}));
  }

  async deleteSiteMonitors(request: DeleteSiteMonitorsRequest): Promise<DeleteSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSiteMonitorsWithOptions(request, runtime);
  }

  async describeActiveMetricRuleListWithOptions(request: DescribeActiveMetricRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeActiveMetricRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeActiveMetricRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeActiveMetricRuleListResponse>(await this.callApi(params, req, runtime), new DescribeActiveMetricRuleListResponse({}));
  }

  async describeActiveMetricRuleList(request: DescribeActiveMetricRuleListRequest): Promise<DescribeActiveMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeActiveMetricRuleListWithOptions(request, runtime);
  }

  /**
    * @deprecated : DescribeAlertHistoryList is deprecated, please use Cms::2019-01-01::DescribeAlertLogList instead.
    * This API operation is no longer maintained. We recommend that you call the [DescribeAlertLogList](~~201087~~) operation.
    *
    * @param request DescribeAlertHistoryListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAlertHistoryListResponse
   */
  // Deprecated
  async describeAlertHistoryListWithOptions(request: DescribeAlertHistoryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertHistoryListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ascending)) {
      query["Ascending"] = request.ascending;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertHistoryList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertHistoryListResponse>(await this.callApi(params, req, runtime), new DescribeAlertHistoryListResponse({}));
  }

  /**
    * @deprecated : DescribeAlertHistoryList is deprecated, please use Cms::2019-01-01::DescribeAlertLogList instead.
    * This API operation is no longer maintained. We recommend that you call the [DescribeAlertLogList](~~201087~~) operation.
    *
    * @param request DescribeAlertHistoryListRequest
    * @return DescribeAlertHistoryListResponse
   */
  // Deprecated
  async describeAlertHistoryList(request: DescribeAlertHistoryListRequest): Promise<DescribeAlertHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertHistoryListWithOptions(request, runtime);
  }

  /**
    * Queries the statistics of alert logs.
    * This topic provides an example on how to query the statistics of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
    *
    * @param request DescribeAlertLogCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAlertLogCountResponse
   */
  async describeAlertLogCountWithOptions(request: DescribeAlertLogCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertLogCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertLogCountResponse>(await this.callApi(params, req, runtime), new DescribeAlertLogCountResponse({}));
  }

  /**
    * Queries the statistics of alert logs.
    * This topic provides an example on how to query the statistics of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
    *
    * @param request DescribeAlertLogCountRequest
    * @return DescribeAlertLogCountResponse
   */
  async describeAlertLogCount(request: DescribeAlertLogCountRequest): Promise<DescribeAlertLogCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogCountWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the number of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
    *
    * @param request DescribeAlertLogHistogramRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAlertLogHistogramResponse
   */
  async describeAlertLogHistogramWithOptions(request: DescribeAlertLogHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogHistogramResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertLogHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertLogHistogramResponse>(await this.callApi(params, req, runtime), new DescribeAlertLogHistogramResponse({}));
  }

  /**
    * This topic provides an example on how to query the number of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
    *
    * @param request DescribeAlertLogHistogramRequest
    * @return DescribeAlertLogHistogramResponse
   */
  async describeAlertLogHistogram(request: DescribeAlertLogHistogramRequest): Promise<DescribeAlertLogHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogHistogramWithOptions(request, runtime);
  }

  /**
    * You can call the operation to query only the alert logs within the last year.
    * This topic provides an example to show how to query the alert logs of Elastic Compute Service (ECS) based on the `product` dimension.
    *
    * @param request DescribeAlertLogListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeAlertLogListResponse
   */
  async describeAlertLogListWithOptions(request: DescribeAlertLogListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertLogListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertLogList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertLogListResponse>(await this.callApi(params, req, runtime), new DescribeAlertLogListResponse({}));
  }

  /**
    * You can call the operation to query only the alert logs within the last year.
    * This topic provides an example to show how to query the alert logs of Elastic Compute Service (ECS) based on the `product` dimension.
    *
    * @param request DescribeAlertLogListRequest
    * @return DescribeAlertLogListResponse
   */
  async describeAlertLogList(request: DescribeAlertLogListRequest): Promise<DescribeAlertLogListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertLogListWithOptions(request, runtime);
  }

  async describeAlertingMetricRuleResourcesWithOptions(request: DescribeAlertingMetricRuleResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlertingMetricRuleResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlertingMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlertingMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new DescribeAlertingMetricRuleResourcesResponse({}));
  }

  async describeAlertingMetricRuleResources(request: DescribeAlertingMetricRuleResourcesRequest): Promise<DescribeAlertingMetricRuleResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlertingMetricRuleResourcesWithOptions(request, runtime);
  }

  async describeContactGroupListWithOptions(request: DescribeContactGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactGroupList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactGroupListResponse>(await this.callApi(params, req, runtime), new DescribeContactGroupListResponse({}));
  }

  async describeContactGroupList(request: DescribeContactGroupListRequest): Promise<DescribeContactGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactGroupListWithOptions(request, runtime);
  }

  async describeContactListWithOptions(request: DescribeContactListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chanelType)) {
      query["ChanelType"] = request.chanelType;
    }

    if (!Util.isUnset(request.chanelValue)) {
      query["ChanelValue"] = request.chanelValue;
    }

    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactListResponse>(await this.callApi(params, req, runtime), new DescribeContactListResponse({}));
  }

  async describeContactList(request: DescribeContactListRequest): Promise<DescribeContactListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactListWithOptions(request, runtime);
  }

  async describeContactListByContactGroupWithOptions(request: DescribeContactListByContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContactListByContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContactListByContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContactListByContactGroupResponse>(await this.callApi(params, req, runtime), new DescribeContactListByContactGroupResponse({}));
  }

  async describeContactListByContactGroup(request: DescribeContactListByContactGroupRequest): Promise<DescribeContactListByContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContactListByContactGroupWithOptions(request, runtime);
  }

  async describeCustomEventAttributeWithOptions(request: DescribeCustomEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomEventAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomEventAttributeResponse>(await this.callApi(params, req, runtime), new DescribeCustomEventAttributeResponse({}));
  }

  async describeCustomEventAttribute(request: DescribeCustomEventAttributeRequest): Promise<DescribeCustomEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventAttributeWithOptions(request, runtime);
  }

  /**
    * >  This operation counts the number of times that a custom event occurred for each service.
    *
    * @param request DescribeCustomEventCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCustomEventCountResponse
   */
  async describeCustomEventCountWithOptions(request: DescribeCustomEventCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomEventCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomEventCountResponse>(await this.callApi(params, req, runtime), new DescribeCustomEventCountResponse({}));
  }

  /**
    * >  This operation counts the number of times that a custom event occurred for each service.
    *
    * @param request DescribeCustomEventCountRequest
    * @return DescribeCustomEventCountResponse
   */
  async describeCustomEventCount(request: DescribeCustomEventCountRequest): Promise<DescribeCustomEventCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventCountWithOptions(request, runtime);
  }

  async describeCustomEventHistogramWithOptions(request: DescribeCustomEventHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomEventHistogramResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomEventHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomEventHistogramResponse>(await this.callApi(params, req, runtime), new DescribeCustomEventHistogramResponse({}));
  }

  async describeCustomEventHistogram(request: DescribeCustomEventHistogramRequest): Promise<DescribeCustomEventHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomEventHistogramWithOptions(request, runtime);
  }

  /**
    * >  You can call the DescribeMetricList operation to query the metrics of a cloud service. For more information, see [DescribeMetricList](~~51936~~).
    *
    * @param request DescribeCustomMetricListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCustomMetricListResponse
   */
  async describeCustomMetricListWithOptions(request: DescribeCustomMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCustomMetricListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCustomMetricList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCustomMetricListResponse>(await this.callApi(params, req, runtime), new DescribeCustomMetricListResponse({}));
  }

  /**
    * >  You can call the DescribeMetricList operation to query the metrics of a cloud service. For more information, see [DescribeMetricList](~~51936~~).
    *
    * @param request DescribeCustomMetricListRequest
    * @return DescribeCustomMetricListResponse
   */
  async describeCustomMetricList(request: DescribeCustomMetricListRequest): Promise<DescribeCustomMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCustomMetricListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to query tag rules that are related to `tagkey1`. The sample responses indicate that two tag rules are found. The rule IDs are `1536df65-a719-429d-8813-73cc40d7****` and `56e8cebb-b3d7-4a91-9880-78a8c84f****`.
    *
    * @param request DescribeDynamicTagRuleListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDynamicTagRuleListResponse
   */
  async describeDynamicTagRuleListWithOptions(request: DescribeDynamicTagRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDynamicTagRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!Util.isUnset(request.tagRegionId)) {
      query["TagRegionId"] = request.tagRegionId;
    }

    if (!Util.isUnset(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDynamicTagRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDynamicTagRuleListResponse>(await this.callApi(params, req, runtime), new DescribeDynamicTagRuleListResponse({}));
  }

  /**
    * This topic provides an example to show how to query tag rules that are related to `tagkey1`. The sample responses indicate that two tag rules are found. The rule IDs are `1536df65-a719-429d-8813-73cc40d7****` and `56e8cebb-b3d7-4a91-9880-78a8c84f****`.
    *
    * @param request DescribeDynamicTagRuleListRequest
    * @return DescribeDynamicTagRuleListResponse
   */
  async describeDynamicTagRuleList(request: DescribeDynamicTagRuleListRequest): Promise<DescribeDynamicTagRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDynamicTagRuleListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
    *
    * @param request DescribeEventRuleAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeEventRuleAttributeResponse
   */
  async describeEventRuleAttributeWithOptions(request: DescribeEventRuleAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventRuleAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventRuleAttributeResponse>(await this.callApi(params, req, runtime), new DescribeEventRuleAttributeResponse({}));
  }

  /**
    * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
    *
    * @param request DescribeEventRuleAttributeRequest
    * @return DescribeEventRuleAttributeResponse
   */
  async describeEventRuleAttribute(request: DescribeEventRuleAttributeRequest): Promise<DescribeEventRuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleAttributeWithOptions(request, runtime);
  }

  async describeEventRuleListWithOptions(request: DescribeEventRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!Util.isUnset(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventRuleListResponse>(await this.callApi(params, req, runtime), new DescribeEventRuleListResponse({}));
  }

  async describeEventRuleList(request: DescribeEventRuleListRequest): Promise<DescribeEventRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
    *
    * @param request DescribeEventRuleTargetListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeEventRuleTargetListResponse
   */
  async describeEventRuleTargetListWithOptions(request: DescribeEventRuleTargetListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventRuleTargetListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEventRuleTargetList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventRuleTargetListResponse>(await this.callApi(params, req, runtime), new DescribeEventRuleTargetListResponse({}));
  }

  /**
    * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
    *
    * @param request DescribeEventRuleTargetListRequest
    * @return DescribeEventRuleTargetListResponse
   */
  async describeEventRuleTargetList(request: DescribeEventRuleTargetListRequest): Promise<DescribeEventRuleTargetListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventRuleTargetListWithOptions(request, runtime);
  }

  async describeExporterOutputListWithOptions(request: DescribeExporterOutputListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExporterOutputListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExporterOutputList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExporterOutputListResponse>(await this.callApi(params, req, runtime), new DescribeExporterOutputListResponse({}));
  }

  async describeExporterOutputList(request: DescribeExporterOutputListRequest): Promise<DescribeExporterOutputListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExporterOutputListWithOptions(request, runtime);
  }

  async describeExporterRuleListWithOptions(request: DescribeExporterRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExporterRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExporterRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExporterRuleListResponse>(await this.callApi(params, req, runtime), new DescribeExporterRuleListResponse({}));
  }

  async describeExporterRuleList(request: DescribeExporterRuleListRequest): Promise<DescribeExporterRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExporterRuleListWithOptions(request, runtime);
  }

  /**
    * You can create a process monitoring task to monitor all or the specified Elastic Compute Service (ECS) instances in an application group and configure alert rules for the process monitoring task.
    *
    * @param request DescribeGroupMonitoringAgentProcessRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeGroupMonitoringAgentProcessResponse
   */
  async describeGroupMonitoringAgentProcessWithOptions(request: DescribeGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new DescribeGroupMonitoringAgentProcessResponse({}));
  }

  /**
    * You can create a process monitoring task to monitor all or the specified Elastic Compute Service (ECS) instances in an application group and configure alert rules for the process monitoring task.
    *
    * @param request DescribeGroupMonitoringAgentProcessRequest
    * @return DescribeGroupMonitoringAgentProcessResponse
   */
  async describeGroupMonitoringAgentProcess(request: DescribeGroupMonitoringAgentProcessRequest): Promise<DescribeGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to query all the availability monitoring tasks of your Alibaba Cloud account. The sample responses indicate that the account has one availability monitoring task named `ecs_instance`.
    *
    * @param request DescribeHostAvailabilityListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHostAvailabilityListResponse
   */
  async describeHostAvailabilityListWithOptions(request: DescribeHostAvailabilityListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostAvailabilityListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHostAvailabilityList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHostAvailabilityListResponse>(await this.callApi(params, req, runtime), new DescribeHostAvailabilityListResponse({}));
  }

  /**
    * This topic provides an example to show how to query all the availability monitoring tasks of your Alibaba Cloud account. The sample responses indicate that the account has one availability monitoring task named `ecs_instance`.
    *
    * @param request DescribeHostAvailabilityListRequest
    * @return DescribeHostAvailabilityListResponse
   */
  async describeHostAvailabilityList(request: DescribeHostAvailabilityListRequest): Promise<DescribeHostAvailabilityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostAvailabilityListWithOptions(request, runtime);
  }

  /**
    * ## Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    *
    * @param request DescribeHybridMonitorDataListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHybridMonitorDataListResponse
   */
  async describeHybridMonitorDataListWithOptions(request: DescribeHybridMonitorDataListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridMonitorDataListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.end)) {
      query["End"] = request.end;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.promSQL)) {
      query["PromSQL"] = request.promSQL;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridMonitorDataList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridMonitorDataListResponse>(await this.callApi(params, req, runtime), new DescribeHybridMonitorDataListResponse({}));
  }

  /**
    * ## Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    *
    * @param request DescribeHybridMonitorDataListRequest
    * @return DescribeHybridMonitorDataListResponse
   */
  async describeHybridMonitorDataList(request: DescribeHybridMonitorDataListRequest): Promise<DescribeHybridMonitorDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridMonitorDataListWithOptions(request, runtime);
  }

  /**
    * In this example, all namespaces within the current account are queried. The response shows that the current account has only one namespace named `aliyun-test`.
    *
    * @param request DescribeHybridMonitorNamespaceListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHybridMonitorNamespaceListResponse
   */
  async describeHybridMonitorNamespaceListWithOptions(request: DescribeHybridMonitorNamespaceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridMonitorNamespaceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.showTaskStatistic)) {
      query["ShowTaskStatistic"] = request.showTaskStatistic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridMonitorNamespaceList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridMonitorNamespaceListResponse>(await this.callApi(params, req, runtime), new DescribeHybridMonitorNamespaceListResponse({}));
  }

  /**
    * In this example, all namespaces within the current account are queried. The response shows that the current account has only one namespace named `aliyun-test`.
    *
    * @param request DescribeHybridMonitorNamespaceListRequest
    * @return DescribeHybridMonitorNamespaceListResponse
   */
  async describeHybridMonitorNamespaceList(request: DescribeHybridMonitorNamespaceListRequest): Promise<DescribeHybridMonitorNamespaceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridMonitorNamespaceListWithOptions(request, runtime);
  }

  /**
    * In this example, all Logstore groups within the current account are queried. The response shows that the current account has two Logstore groups: `Logstore_test` and `Logstore_aliyun`.
    *
    * @param request DescribeHybridMonitorSLSGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHybridMonitorSLSGroupResponse
   */
  async describeHybridMonitorSLSGroupWithOptions(request: DescribeHybridMonitorSLSGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridMonitorSLSGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new DescribeHybridMonitorSLSGroupResponse({}));
  }

  /**
    * In this example, all Logstore groups within the current account are queried. The response shows that the current account has two Logstore groups: `Logstore_test` and `Logstore_aliyun`.
    *
    * @param request DescribeHybridMonitorSLSGroupRequest
    * @return DescribeHybridMonitorSLSGroupResponse
   */
  async describeHybridMonitorSLSGroup(request: DescribeHybridMonitorSLSGroupRequest): Promise<DescribeHybridMonitorSLSGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query all metric import tasks that belong to the current Alibaba Cloud account. The returned result indicates that the current account has only one metric import task. The metric import task is named `aliyun_task`.
    *
    * @param request DescribeHybridMonitorTaskListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeHybridMonitorTaskListResponse
   */
  async describeHybridMonitorTaskListWithOptions(request: DescribeHybridMonitorTaskListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHybridMonitorTaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.includeAliyunTask)) {
      query["IncludeAliyunTask"] = request.includeAliyunTask;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHybridMonitorTaskList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHybridMonitorTaskListResponse>(await this.callApi(params, req, runtime), new DescribeHybridMonitorTaskListResponse({}));
  }

  /**
    * This topic provides an example on how to query all metric import tasks that belong to the current Alibaba Cloud account. The returned result indicates that the current account has only one metric import task. The metric import task is named `aliyun_task`.
    *
    * @param request DescribeHybridMonitorTaskListRequest
    * @return DescribeHybridMonitorTaskListResponse
   */
  async describeHybridMonitorTaskList(request: DescribeHybridMonitorTaskListRequest): Promise<DescribeHybridMonitorTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHybridMonitorTaskListWithOptions(request, runtime);
  }

  async describeLogMonitorAttributeWithOptions(request: DescribeLogMonitorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogMonitorAttributeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogMonitorAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogMonitorAttributeResponse>(await this.callApi(params, req, runtime), new DescribeLogMonitorAttributeResponse({}));
  }

  async describeLogMonitorAttribute(request: DescribeLogMonitorAttributeRequest): Promise<DescribeLogMonitorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogMonitorAttributeWithOptions(request, runtime);
  }

  async describeLogMonitorListWithOptions(request: DescribeLogMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogMonitorListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogMonitorList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogMonitorListResponse>(await this.callApi(params, req, runtime), new DescribeLogMonitorListResponse({}));
  }

  async describeLogMonitorList(request: DescribeLogMonitorListRequest): Promise<DescribeLogMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogMonitorListWithOptions(request, runtime);
  }

  /**
    * ## Limits
    * Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the RAM users within the account share the quota. 
    * >  Different from [DescribeMetricList](~~51936~~), the DescribeMetricData operation provides statistical features. You can set the `Dimension` parameter to {"instanceId": "i-abcdefgh12****"} to aggregate all data of your Alibaba Cloud account. This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`.
    *
    * @param request DescribeMetricDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricDataResponse
   */
  async describeMetricDataWithOptions(request: DescribeMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeMetricDataResponse({}));
  }

  /**
    * ## Limits
    * Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the RAM users within the account share the quota. 
    * >  Different from [DescribeMetricList](~~51936~~), the DescribeMetricData operation provides statistical features. You can set the `Dimension` parameter to {"instanceId": "i-abcdefgh12****"} to aggregate all data of your Alibaba Cloud account. This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`.
    *
    * @param request DescribeMetricDataRequest
    * @return DescribeMetricDataResponse
   */
  async describeMetricData(request: DescribeMetricDataRequest): Promise<DescribeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  /**
    * ### [](#)Limits
    * Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the RAM users within the account share the quota.
    * ### [](#)Precautions
    * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
    * *   If the value of the `Period` parameter is less than 60 seconds, the storage duration is seven days.
    * *   If the value of the `Period` parameter is 60 seconds, the storage duration is 31 days.
    * *   If the value of the `Period` parameter is 300 seconds, the storage duration is 91 days.
    * ### [](#)Description
    * This topic provides an example on how to query the latest monitoring data of the `CPUUtilization` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `123456789876****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
    *
    * @param request DescribeMetricLastRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricLastResponse
   */
  async describeMetricLastWithOptions(request: DescribeMetricLastRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricLastResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricLast",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricLastResponse>(await this.callApi(params, req, runtime), new DescribeMetricLastResponse({}));
  }

  /**
    * ### [](#)Limits
    * Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the RAM users within the account share the quota.
    * ### [](#)Precautions
    * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
    * *   If the value of the `Period` parameter is less than 60 seconds, the storage duration is seven days.
    * *   If the value of the `Period` parameter is 60 seconds, the storage duration is 31 days.
    * *   If the value of the `Period` parameter is 300 seconds, the storage duration is 91 days.
    * ### [](#)Description
    * This topic provides an example on how to query the latest monitoring data of the `CPUUtilization` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `123456789876****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
    *
    * @param request DescribeMetricLastRequest
    * @return DescribeMetricLastResponse
   */
  async describeMetricLast(request: DescribeMetricLastRequest): Promise<DescribeMetricLastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricLastWithOptions(request, runtime);
  }

  /**
    * ## Limits
    * Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the RAM users within the account share the quota. 
    * >This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `120886317861****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
    *
    * @param request DescribeMetricListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricListResponse
   */
  async describeMetricListWithOptions(request: DescribeMetricListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricListResponse>(await this.callApi(params, req, runtime), new DescribeMetricListResponse({}));
  }

  /**
    * ## Limits
    * Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the RAM users within the account share the quota. 
    * >This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `120886317861****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
    *
    * @param request DescribeMetricListRequest
    * @return DescribeMetricListResponse
   */
  async describeMetricList(request: DescribeMetricListRequest): Promise<DescribeMetricListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  /**
    * This operation is usually used with DescribeMetricList and DescribeMetricLast. For more information, see [DescribeMetricList](~~51936~~) and [DescribeMetricLast](~~51939~~).
    *
    * @param request DescribeMetricMetaListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricMetaListResponse
   */
  async describeMetricMetaListWithOptions(request: DescribeMetricMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricMetaListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricMetaList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricMetaListResponse>(await this.callApi(params, req, runtime), new DescribeMetricMetaListResponse({}));
  }

  /**
    * This operation is usually used with DescribeMetricList and DescribeMetricLast. For more information, see [DescribeMetricList](~~51936~~) and [DescribeMetricLast](~~51939~~).
    *
    * @param request DescribeMetricMetaListRequest
    * @return DescribeMetricMetaListResponse
   */
  async describeMetricMetaList(request: DescribeMetricMetaListRequest): Promise<DescribeMetricMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricMetaListWithOptions(request, runtime);
  }

  async describeMetricRuleBlackListWithOptions(request: DescribeMetricRuleBlackListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleBlackListResponse({}));
  }

  async describeMetricRuleBlackList(request: DescribeMetricRuleBlackListRequest): Promise<DescribeMetricRuleBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleBlackListWithOptions(request, runtime);
  }

  async describeMetricRuleCountWithOptions(request: DescribeMetricRuleCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleCountResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleCountResponse({}));
  }

  async describeMetricRuleCount(request: DescribeMetricRuleCountRequest): Promise<DescribeMetricRuleCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleCountWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query all alert rules within your Alibaba Cloud account. The returned result shows that only one alert rule is found. The name of the alert rule is `Rule_01` and the ID is `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`.
    *
    * @param request DescribeMetricRuleListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricRuleListResponse
   */
  async describeMetricRuleListWithOptions(request: DescribeMetricRuleListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertState)) {
      query["AlertState"] = request.alertState;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.enableState)) {
      query["EnableState"] = request.enableState;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleListResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleListResponse({}));
  }

  /**
    * This topic provides an example on how to query all alert rules within your Alibaba Cloud account. The returned result shows that only one alert rule is found. The name of the alert rule is `Rule_01` and the ID is `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`.
    *
    * @param request DescribeMetricRuleListRequest
    * @return DescribeMetricRuleListResponse
   */
  async describeMetricRuleList(request: DescribeMetricRuleListRequest): Promise<DescribeMetricRuleListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleListWithOptions(request, runtime);
  }

  /**
    * ## Limit
    * This operation supports only Message Service (MNS) resources. 
    * >This topic provides an example on how to query the resources that are associated with an alert rule whose ID is `ae06917_75a8c43178ab66****`.
    *
    * @param request DescribeMetricRuleTargetsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricRuleTargetsResponse
   */
  async describeMetricRuleTargetsWithOptions(request: DescribeMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleTargetsResponse({}));
  }

  /**
    * ## Limit
    * This operation supports only Message Service (MNS) resources. 
    * >This topic provides an example on how to query the resources that are associated with an alert rule whose ID is `ae06917_75a8c43178ab66****`.
    *
    * @param request DescribeMetricRuleTargetsRequest
    * @return DescribeMetricRuleTargetsResponse
   */
  async describeMetricRuleTargets(request: DescribeMetricRuleTargetsRequest): Promise<DescribeMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTargetsWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the details of an alert template whose ID is `70****`.
    *
    * @param request DescribeMetricRuleTemplateAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricRuleTemplateAttributeResponse
   */
  async describeMetricRuleTemplateAttributeWithOptions(request: DescribeMetricRuleTemplateAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTemplateAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleTemplateAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleTemplateAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleTemplateAttributeResponse({}));
  }

  /**
    * This topic provides an example on how to query the details of an alert template whose ID is `70****`.
    *
    * @param request DescribeMetricRuleTemplateAttributeRequest
    * @return DescribeMetricRuleTemplateAttributeResponse
   */
  async describeMetricRuleTemplateAttribute(request: DescribeMetricRuleTemplateAttributeRequest): Promise<DescribeMetricRuleTemplateAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateAttributeWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query alert templates. In this example, the following alert templates are returned in the response: `ECS_Template1` and `ECS_Template2`.
    *
    * @param request DescribeMetricRuleTemplateListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricRuleTemplateListResponse
   */
  async describeMetricRuleTemplateListWithOptions(request: DescribeMetricRuleTemplateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricRuleTemplateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.history)) {
      query["History"] = request.history;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricRuleTemplateList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricRuleTemplateListResponse>(await this.callApi(params, req, runtime), new DescribeMetricRuleTemplateListResponse({}));
  }

  /**
    * This topic provides an example on how to query alert templates. In this example, the following alert templates are returned in the response: `ECS_Template1` and `ECS_Template2`.
    *
    * @param request DescribeMetricRuleTemplateListRequest
    * @return DescribeMetricRuleTemplateListResponse
   */
  async describeMetricRuleTemplateList(request: DescribeMetricRuleTemplateListRequest): Promise<DescribeMetricRuleTemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateListWithOptions(request, runtime);
  }

  /**
    * ### [](#)Limits
    * Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the RAM users within the account share the quota.
    * ### [](#)Precautions
    * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
    * *   If the value of the `Period` parameter is less than 60 seconds, the storage duration is seven days.
    * *   If the value of the `Period` parameter is 60 seconds, the storage duration is 31 days.
    * *   If the value of the `Period` parameter is 300 seconds, the storage duration is 91 days.
    * ### [](#)Description
    * This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric in the last 60 seconds for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The monitoring data is sorted in the descending order based on the `Average` field.
    *
    * @param request DescribeMetricTopRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMetricTopResponse
   */
  async describeMetricTopWithOptions(request: DescribeMetricTopRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricTopResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.express)) {
      query["Express"] = request.express;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.orderDesc)) {
      query["OrderDesc"] = request.orderDesc;
    }

    if (!Util.isUnset(request.orderby)) {
      query["Orderby"] = request.orderby;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricTop",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricTopResponse>(await this.callApi(params, req, runtime), new DescribeMetricTopResponse({}));
  }

  /**
    * ### [](#)Limits
    * Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the RAM users within the account share the quota.
    * ### [](#)Precautions
    * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
    * *   If the value of the `Period` parameter is less than 60 seconds, the storage duration is seven days.
    * *   If the value of the `Period` parameter is 60 seconds, the storage duration is 31 days.
    * *   If the value of the `Period` parameter is 300 seconds, the storage duration is 91 days.
    * ### [](#)Description
    * This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric in the last 60 seconds for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The monitoring data is sorted in the descending order based on the `Average` field.
    *
    * @param request DescribeMetricTopRequest
    * @return DescribeMetricTopResponse
   */
  async describeMetricTop(request: DescribeMetricTopRequest): Promise<DescribeMetricTopResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricTopWithOptions(request, runtime);
  }

  async describeMonitorGroupCategoriesWithOptions(request: DescribeMonitorGroupCategoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupCategoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupCategories",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupCategoriesResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupCategoriesResponse({}));
  }

  async describeMonitorGroupCategories(request: DescribeMonitorGroupCategoriesRequest): Promise<DescribeMonitorGroupCategoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupCategoriesWithOptions(request, runtime);
  }

  async describeMonitorGroupDynamicRulesWithOptions(request: DescribeMonitorGroupDynamicRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupDynamicRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupDynamicRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupDynamicRulesResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupDynamicRulesResponse({}));
  }

  async describeMonitorGroupDynamicRules(request: DescribeMonitorGroupDynamicRulesRequest): Promise<DescribeMonitorGroupDynamicRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupDynamicRulesWithOptions(request, runtime);
  }

  async describeMonitorGroupInstanceAttributeWithOptions(request: DescribeMonitorGroupInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupInstanceAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupInstanceAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupInstanceAttributeResponse({}));
  }

  async describeMonitorGroupInstanceAttribute(request: DescribeMonitorGroupInstanceAttributeRequest): Promise<DescribeMonitorGroupInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupInstanceAttributeWithOptions(request, runtime);
  }

  async describeMonitorGroupInstancesWithOptions(request: DescribeMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupInstancesResponse({}));
  }

  async describeMonitorGroupInstances(request: DescribeMonitorGroupInstancesRequest): Promise<DescribeMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupInstancesWithOptions(request, runtime);
  }

  async describeMonitorGroupNotifyPolicyListWithOptions(request: DescribeMonitorGroupNotifyPolicyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupNotifyPolicyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroupNotifyPolicyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupNotifyPolicyListResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupNotifyPolicyListResponse({}));
  }

  async describeMonitorGroupNotifyPolicyList(request: DescribeMonitorGroupNotifyPolicyListRequest): Promise<DescribeMonitorGroupNotifyPolicyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupNotifyPolicyListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example of how to query the application groups of the current account. The response shows that the current account has two application groups: `testGroup124` and `test123`.
    *
    * @param request DescribeMonitorGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMonitorGroupsResponse
   */
  async describeMonitorGroupsWithOptions(request: DescribeMonitorGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    if (!Util.isUnset(request.groupFounderTagKey)) {
      query["GroupFounderTagKey"] = request.groupFounderTagKey;
    }

    if (!Util.isUnset(request.groupFounderTagValue)) {
      query["GroupFounderTagValue"] = request.groupFounderTagValue;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.includeTemplateHistory)) {
      query["IncludeTemplateHistory"] = request.includeTemplateHistory;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.selectContactGroups)) {
      query["SelectContactGroups"] = request.selectContactGroups;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorGroupsResponse>(await this.callApi(params, req, runtime), new DescribeMonitorGroupsResponse({}));
  }

  /**
    * This topic provides an example of how to query the application groups of the current account. The response shows that the current account has two application groups: `testGroup124` and `test123`.
    *
    * @param request DescribeMonitorGroupsRequest
    * @return DescribeMonitorGroupsResponse
   */
  async describeMonitorGroups(request: DescribeMonitorGroupsRequest): Promise<DescribeMonitorGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorGroupsWithOptions(request, runtime);
  }

  async describeMonitorResourceQuotaAttributeWithOptions(request: DescribeMonitorResourceQuotaAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitorResourceQuotaAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.showUsed)) {
      query["ShowUsed"] = request.showUsed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitorResourceQuotaAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitorResourceQuotaAttributeResponse>(await this.callApi(params, req, runtime), new DescribeMonitorResourceQuotaAttributeResponse({}));
  }

  async describeMonitorResourceQuotaAttribute(request: DescribeMonitorResourceQuotaAttributeRequest): Promise<DescribeMonitorResourceQuotaAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitorResourceQuotaAttributeWithOptions(request, runtime);
  }

  async describeMonitoringAgentAccessKeyWithOptions(request: DescribeMonitoringAgentAccessKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentAccessKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentAccessKey",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentAccessKeyResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentAccessKeyResponse({}));
  }

  async describeMonitoringAgentAccessKey(request: DescribeMonitoringAgentAccessKeyRequest): Promise<DescribeMonitoringAgentAccessKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentAccessKeyWithOptions(request, runtime);
  }

  async describeMonitoringAgentConfigWithOptions(request: DescribeMonitoringAgentConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentConfigResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentConfigResponse({}));
  }

  async describeMonitoringAgentConfig(request: DescribeMonitoringAgentConfigRequest): Promise<DescribeMonitoringAgentConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentConfigWithOptions(request, runtime);
  }

  async describeMonitoringAgentHostsWithOptions(request: DescribeMonitoringAgentHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentHostsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliyunHost)) {
      query["AliyunHost"] = request.aliyunHost;
    }

    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!Util.isUnset(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.sysomStatus)) {
      query["SysomStatus"] = request.sysomStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentHosts",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentHostsResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentHostsResponse({}));
  }

  async describeMonitoringAgentHosts(request: DescribeMonitoringAgentHostsRequest): Promise<DescribeMonitoringAgentHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentHostsWithOptions(request, runtime);
  }

  /**
    * >  Before you call this operation, call the CreateMonitoringAgentProcess operation to create processes. For more information, see [CreateMonitoringAgentProcess](~~114951~~~).
    * This topic provides an example of how to query the processes of the `i-hp3hl3cx1pbahzy8****` instance. The response indicates the details of the `NGINX` and `HTTP` processes.
    *
    * @param request DescribeMonitoringAgentProcessesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMonitoringAgentProcessesResponse
   */
  async describeMonitoringAgentProcessesWithOptions(request: DescribeMonitoringAgentProcessesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentProcessesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentProcesses",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentProcessesResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentProcessesResponse({}));
  }

  /**
    * >  Before you call this operation, call the CreateMonitoringAgentProcess operation to create processes. For more information, see [CreateMonitoringAgentProcess](~~114951~~~).
    * This topic provides an example of how to query the processes of the `i-hp3hl3cx1pbahzy8****` instance. The response indicates the details of the `NGINX` and `HTTP` processes.
    *
    * @param request DescribeMonitoringAgentProcessesRequest
    * @return DescribeMonitoringAgentProcessesResponse
   */
  async describeMonitoringAgentProcesses(request: DescribeMonitoringAgentProcessesRequest): Promise<DescribeMonitoringAgentProcessesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentProcessesWithOptions(request, runtime);
  }

  /**
    * This topic describes how to query the status of the CloudMonitor agent that is installed on the `i-hp3dunahluwajv6f****` instance. The result indicates that the CloudMonitor agent is in the `running` state.
    *
    * @param request DescribeMonitoringAgentStatusesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeMonitoringAgentStatusesResponse
   */
  async describeMonitoringAgentStatusesWithOptions(request: DescribeMonitoringAgentStatusesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringAgentStatusesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostAvailabilityTaskId)) {
      query["HostAvailabilityTaskId"] = request.hostAvailabilityTaskId;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringAgentStatuses",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringAgentStatusesResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringAgentStatusesResponse({}));
  }

  /**
    * This topic describes how to query the status of the CloudMonitor agent that is installed on the `i-hp3dunahluwajv6f****` instance. The result indicates that the CloudMonitor agent is in the `running` state.
    *
    * @param request DescribeMonitoringAgentStatusesRequest
    * @return DescribeMonitoringAgentStatusesResponse
   */
  async describeMonitoringAgentStatuses(request: DescribeMonitoringAgentStatusesRequest): Promise<DescribeMonitoringAgentStatusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringAgentStatusesWithOptions(request, runtime);
  }

  async describeMonitoringConfigWithOptions(request: DescribeMonitoringConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMonitoringConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeMonitoringConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMonitoringConfigResponse>(await this.callApi(params, req, runtime), new DescribeMonitoringConfigResponse({}));
  }

  async describeMonitoringConfig(request: DescribeMonitoringConfigRequest): Promise<DescribeMonitoringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMonitoringConfigWithOptions(request, runtime);
  }

  /**
    * >  If a tag is attached to multiple cloud resources in the region, the key of the tag is returned only once.
    *
    * @param request DescribeProductResourceTagKeyListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeProductResourceTagKeyListResponse
   */
  async describeProductResourceTagKeyListWithOptions(request: DescribeProductResourceTagKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductResourceTagKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProductResourceTagKeyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductResourceTagKeyListResponse>(await this.callApi(params, req, runtime), new DescribeProductResourceTagKeyListResponse({}));
  }

  /**
    * >  If a tag is attached to multiple cloud resources in the region, the key of the tag is returned only once.
    *
    * @param request DescribeProductResourceTagKeyListRequest
    * @return DescribeProductResourceTagKeyListResponse
   */
  async describeProductResourceTagKeyList(request: DescribeProductResourceTagKeyListRequest): Promise<DescribeProductResourceTagKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductResourceTagKeyListWithOptions(request, runtime);
  }

  async describeProductsOfActiveMetricRuleWithOptions(request: DescribeProductsOfActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProductsOfActiveMetricRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeProductsOfActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProductsOfActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new DescribeProductsOfActiveMetricRuleResponse({}));
  }

  async describeProductsOfActiveMetricRule(request: DescribeProductsOfActiveMetricRuleRequest): Promise<DescribeProductsOfActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProductsOfActiveMetricRuleWithOptions(request, runtime);
  }

  /**
    * The information obtained by this operation includes the service description, namespace, and tags.
    *
    * @param request DescribeProjectMetaRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeProjectMetaResponse
   */
  async describeProjectMetaWithOptions(request: DescribeProjectMetaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectMeta",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectMetaResponse>(await this.callApi(params, req, runtime), new DescribeProjectMetaResponse({}));
  }

  /**
    * The information obtained by this operation includes the service description, namespace, and tags.
    *
    * @param request DescribeProjectMetaRequest
    * @return DescribeProjectMetaResponse
   */
  async describeProjectMeta(request: DescribeProjectMetaRequest): Promise<DescribeProjectMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectMetaWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the details of a site monitoring task whose ID is `cc641dff-c19d-45f3-ad0a-818a0c4f****`. The returned result indicates that the task name is `test123`, the URL that is monitored by the task is `https://aliyun.com`, and the name of the carrier is `Alibaba`.
    *
    * @param request DescribeSiteMonitorAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSiteMonitorAttributeResponse
   */
  async describeSiteMonitorAttributeWithOptions(request: DescribeSiteMonitorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeAlert)) {
      query["IncludeAlert"] = request.includeAlert;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorAttributeResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorAttributeResponse({}));
  }

  /**
    * This topic provides an example on how to query the details of a site monitoring task whose ID is `cc641dff-c19d-45f3-ad0a-818a0c4f****`. The returned result indicates that the task name is `test123`, the URL that is monitored by the task is `https://aliyun.com`, and the name of the carrier is `Alibaba`.
    *
    * @param request DescribeSiteMonitorAttributeRequest
    * @return DescribeSiteMonitorAttributeResponse
   */
  async describeSiteMonitorAttribute(request: DescribeSiteMonitorAttributeRequest): Promise<DescribeSiteMonitorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorAttributeWithOptions(request, runtime);
  }

  async describeSiteMonitorDataWithOptions(request: DescribeSiteMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorDataResponse({}));
  }

  async describeSiteMonitorData(request: DescribeSiteMonitorDataRequest): Promise<DescribeSiteMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorDataWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the detection points that are provided by China Unicom in Guiyang.
    *
    * @param request DescribeSiteMonitorISPCityListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSiteMonitorISPCityListResponse
   */
  async describeSiteMonitorISPCityListWithOptions(request: DescribeSiteMonitorISPCityListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorISPCityListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.IPV4)) {
      query["IPV4"] = request.IPV4;
    }

    if (!Util.isUnset(request.IPV6)) {
      query["IPV6"] = request.IPV6;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.viewAll)) {
      query["ViewAll"] = request.viewAll;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorISPCityList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorISPCityListResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorISPCityListResponse({}));
  }

  /**
    * This topic provides an example on how to query the detection points that are provided by China Unicom in Guiyang.
    *
    * @param request DescribeSiteMonitorISPCityListRequest
    * @return DescribeSiteMonitorISPCityListResponse
   */
  async describeSiteMonitorISPCityList(request: DescribeSiteMonitorISPCityListRequest): Promise<DescribeSiteMonitorISPCityListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorISPCityListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query all the site monitoring tasks of your Alibaba Cloud account. In this example, the returned result indicates that the Alibaba Cloud account has one site monitoring task named `HanZhou_ECS2`.
    *
    * @param request DescribeSiteMonitorListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSiteMonitorListResponse
   */
  async describeSiteMonitorListWithOptions(request: DescribeSiteMonitorListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskState)) {
      query["TaskState"] = request.taskState;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorListResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorListResponse({}));
  }

  /**
    * This topic provides an example on how to query all the site monitoring tasks of your Alibaba Cloud account. In this example, the returned result indicates that the Alibaba Cloud account has one site monitoring task named `HanZhou_ECS2`.
    *
    * @param request DescribeSiteMonitorListRequest
    * @return DescribeSiteMonitorListResponse
   */
  async describeSiteMonitorList(request: DescribeSiteMonitorListRequest): Promise<DescribeSiteMonitorListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorListWithOptions(request, runtime);
  }

  /**
    * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring.
    * This topic provides an example to show how to query the logs of an instant test task whose ID is `afa5c3ce-f944-4363-9edb-ce919a29****`.
    *
    * @param request DescribeSiteMonitorLogRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSiteMonitorLogResponse
   */
  async describeSiteMonitorLogWithOptions(request: DescribeSiteMonitorLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.browser)) {
      query["Browser"] = request.browser;
    }

    if (!Util.isUnset(request.browserInfo)) {
      query["BrowserInfo"] = request.browserInfo;
    }

    if (!Util.isUnset(request.city)) {
      query["City"] = request.city;
    }

    if (!Util.isUnset(request.device)) {
      query["Device"] = request.device;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!Util.isUnset(request.length)) {
      query["Length"] = request.length;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorLog",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorLogResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorLogResponse({}));
  }

  /**
    * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring.
    * This topic provides an example to show how to query the logs of an instant test task whose ID is `afa5c3ce-f944-4363-9edb-ce919a29****`.
    *
    * @param request DescribeSiteMonitorLogRequest
    * @return DescribeSiteMonitorLogResponse
   */
  async describeSiteMonitorLog(request: DescribeSiteMonitorLogRequest): Promise<DescribeSiteMonitorLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorLogWithOptions(request, runtime);
  }

  async describeSiteMonitorQuotaWithOptions(request: DescribeSiteMonitorQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorQuota",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorQuotaResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorQuotaResponse({}));
  }

  async describeSiteMonitorQuota(request: DescribeSiteMonitorQuotaRequest): Promise<DescribeSiteMonitorQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorQuotaWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to query the statistics of the `Availability` metric for a site monitoring task whose ID is `ef4cdc8b-9dc7-43e7-810e-f950e56c****`. The result indicates that the availability rate of the site is `100%`.
    *
    * @param request DescribeSiteMonitorStatisticsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSiteMonitorStatisticsResponse
   */
  async describeSiteMonitorStatisticsWithOptions(request: DescribeSiteMonitorStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSiteMonitorStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSiteMonitorStatistics",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSiteMonitorStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeSiteMonitorStatisticsResponse({}));
  }

  /**
    * This topic provides an example to show how to query the statistics of the `Availability` metric for a site monitoring task whose ID is `ef4cdc8b-9dc7-43e7-810e-f950e56c****`. The result indicates that the availability rate of the site is `100%`.
    *
    * @param request DescribeSiteMonitorStatisticsRequest
    * @return DescribeSiteMonitorStatisticsResponse
   */
  async describeSiteMonitorStatistics(request: DescribeSiteMonitorStatisticsRequest): Promise<DescribeSiteMonitorStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSiteMonitorStatisticsWithOptions(request, runtime);
  }

  async describeSystemEventAttributeWithOptions(request: DescribeSystemEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventAttributeResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventAttributeResponse({}));
  }

  async describeSystemEventAttribute(request: DescribeSystemEventAttributeRequest): Promise<DescribeSystemEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventAttributeWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the number of times that a system event occurred for Elastic Compute Service (`ECS`). The returned result indicates that the number of times that the specified system event occurred is 3.
    *
    * @param request DescribeSystemEventCountRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSystemEventCountResponse
   */
  async describeSystemEventCountWithOptions(request: DescribeSystemEventCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventCountResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventCountResponse({}));
  }

  /**
    * This topic provides an example on how to query the number of times that a system event occurred for Elastic Compute Service (`ECS`). The returned result indicates that the number of times that the specified system event occurred is 3.
    *
    * @param request DescribeSystemEventCountRequest
    * @return DescribeSystemEventCountResponse
   */
  async describeSystemEventCount(request: DescribeSystemEventCountRequest): Promise<DescribeSystemEventCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventCountWithOptions(request, runtime);
  }

  async describeSystemEventHistogramWithOptions(request: DescribeSystemEventHistogramRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventHistogramResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventHistogramResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventHistogramResponse({}));
  }

  async describeSystemEventHistogram(request: DescribeSystemEventHistogramRequest): Promise<DescribeSystemEventHistogramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventHistogramWithOptions(request, runtime);
  }

  async describeSystemEventMetaListWithOptions(request: DescribeSystemEventMetaListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSystemEventMetaListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeSystemEventMetaList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSystemEventMetaListResponse>(await this.callApi(params, req, runtime), new DescribeSystemEventMetaListResponse({}));
  }

  async describeSystemEventMetaList(request: DescribeSystemEventMetaListRequest): Promise<DescribeSystemEventMetaListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSystemEventMetaListWithOptions(request, runtime);
  }

  async describeTagKeyListWithOptions(request: DescribeTagKeyListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagKeyListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagKeyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagKeyListResponse>(await this.callApi(params, req, runtime), new DescribeTagKeyListResponse({}));
  }

  async describeTagKeyList(request: DescribeTagKeyListRequest): Promise<DescribeTagKeyListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagKeyListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example of how to query the tag values corresponding to `tagKey1`. The return results are `tagValue1` and `tagValue2`.
    *
    * @param request DescribeTagValueListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeTagValueListResponse
   */
  async describeTagValueListWithOptions(request: DescribeTagValueListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagValueListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagValueList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagValueListResponse>(await this.callApi(params, req, runtime), new DescribeTagValueListResponse({}));
  }

  /**
    * This topic provides an example of how to query the tag values corresponding to `tagKey1`. The return results are `tagValue1` and `tagValue2`.
    *
    * @param request DescribeTagValueListRequest
    * @return DescribeTagValueListResponse
   */
  async describeTagValueList(request: DescribeTagValueListRequest): Promise<DescribeTagValueListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagValueListWithOptions(request, runtime);
  }

  async describeUnhealthyHostAvailabilityWithOptions(request: DescribeUnhealthyHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUnhealthyHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUnhealthyHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUnhealthyHostAvailabilityResponse>(await this.callApi(params, req, runtime), new DescribeUnhealthyHostAvailabilityResponse({}));
  }

  async describeUnhealthyHostAvailability(request: DescribeUnhealthyHostAvailabilityRequest): Promise<DescribeUnhealthyHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUnhealthyHostAvailabilityWithOptions(request, runtime);
  }

  async disableActiveMetricRuleWithOptions(request: DisableActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableActiveMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new DisableActiveMetricRuleResponse({}));
  }

  async disableActiveMetricRule(request: DisableActiveMetricRuleRequest): Promise<DisableActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableActiveMetricRuleWithOptions(request, runtime);
  }

  async disableEventRulesWithOptions(request: DisableEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableEventRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableEventRulesResponse>(await this.callApi(params, req, runtime), new DisableEventRulesResponse({}));
  }

  async disableEventRules(request: DisableEventRulesRequest): Promise<DisableEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableEventRulesWithOptions(request, runtime);
  }

  async disableHostAvailabilityWithOptions(request: DisableHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<DisableHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableHostAvailabilityResponse>(await this.callApi(params, req, runtime), new DisableHostAvailabilityResponse({}));
  }

  async disableHostAvailability(request: DisableHostAvailabilityRequest): Promise<DisableHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableHostAvailabilityWithOptions(request, runtime);
  }

  async disableMetricRulesWithOptions(request: DisableMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<DisableMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableMetricRulesResponse>(await this.callApi(params, req, runtime), new DisableMetricRulesResponse({}));
  }

  async disableMetricRules(request: DisableMetricRulesRequest): Promise<DisableMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableMetricRulesWithOptions(request, runtime);
  }

  async disableSiteMonitorsWithOptions(request: DisableSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<DisableSiteMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableSiteMonitorsResponse>(await this.callApi(params, req, runtime), new DisableSiteMonitorsResponse({}));
  }

  async disableSiteMonitors(request: DisableSiteMonitorsRequest): Promise<DisableSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableSiteMonitorsWithOptions(request, runtime);
  }

  async enableActiveMetricRuleWithOptions(request: EnableActiveMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableActiveMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new EnableActiveMetricRuleResponse({}));
  }

  async enableActiveMetricRule(request: EnableActiveMetricRuleRequest): Promise<EnableActiveMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableActiveMetricRuleWithOptions(request, runtime);
  }

  async enableEventRulesWithOptions(request: EnableEventRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableEventRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableEventRulesResponse>(await this.callApi(params, req, runtime), new EnableEventRulesResponse({}));
  }

  async enableEventRules(request: EnableEventRulesRequest): Promise<EnableEventRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableEventRulesWithOptions(request, runtime);
  }

  async enableHostAvailabilityWithOptions(request: EnableHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<EnableHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableHostAvailabilityResponse>(await this.callApi(params, req, runtime), new EnableHostAvailabilityResponse({}));
  }

  async enableHostAvailability(request: EnableHostAvailabilityRequest): Promise<EnableHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableHostAvailabilityWithOptions(request, runtime);
  }

  async enableMetricRuleBlackListWithOptions(request: EnableMetricRuleBlackListRequest, runtime: $Util.RuntimeOptions): Promise<EnableMetricRuleBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new EnableMetricRuleBlackListResponse({}));
  }

  async enableMetricRuleBlackList(request: EnableMetricRuleBlackListRequest): Promise<EnableMetricRuleBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMetricRuleBlackListWithOptions(request, runtime);
  }

  async enableMetricRulesWithOptions(request: EnableMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<EnableMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableMetricRulesResponse>(await this.callApi(params, req, runtime), new EnableMetricRulesResponse({}));
  }

  async enableMetricRules(request: EnableMetricRulesRequest): Promise<EnableMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableMetricRulesWithOptions(request, runtime);
  }

  async enableSiteMonitorsWithOptions(request: EnableSiteMonitorsRequest, runtime: $Util.RuntimeOptions): Promise<EnableSiteMonitorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableSiteMonitorsResponse>(await this.callApi(params, req, runtime), new EnableSiteMonitorsResponse({}));
  }

  async enableSiteMonitors(request: EnableSiteMonitorsRequest): Promise<EnableSiteMonitorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableSiteMonitorsWithOptions(request, runtime);
  }

  /**
    * ## Prerequisites
    * The Cloud Assistant client is installed on an ECS instance. For more information about how to install the Cloud Assistant client, see [Overview](~~64601~~).
    *
    * @param request InstallMonitoringAgentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return InstallMonitoringAgentResponse
   */
  async installMonitoringAgentWithOptions(request: InstallMonitoringAgentRequest, runtime: $Util.RuntimeOptions): Promise<InstallMonitoringAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.installCommand)) {
      query["InstallCommand"] = request.installCommand;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallMonitoringAgent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallMonitoringAgentResponse>(await this.callApi(params, req, runtime), new InstallMonitoringAgentResponse({}));
  }

  /**
    * ## Prerequisites
    * The Cloud Assistant client is installed on an ECS instance. For more information about how to install the Cloud Assistant client, see [Overview](~~64601~~).
    *
    * @param request InstallMonitoringAgentRequest
    * @return InstallMonitoringAgentResponse
   */
  async installMonitoringAgent(request: InstallMonitoringAgentRequest): Promise<InstallMonitoringAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installMonitoringAgentWithOptions(request, runtime);
  }

  async modifyGroupMonitoringAgentProcessWithOptions(request: ModifyGroupMonitoringAgentProcessRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGroupMonitoringAgentProcessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new ModifyGroupMonitoringAgentProcessResponse({}));
  }

  async modifyGroupMonitoringAgentProcess(request: ModifyGroupMonitoringAgentProcessRequest): Promise<ModifyGroupMonitoringAgentProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to change the name of an availability monitoring task named `12345` in an application group named `123456` to `task2`.
    *
    * @param request ModifyHostAvailabilityRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHostAvailabilityResponse
   */
  async modifyHostAvailabilityWithOptions(request: ModifyHostAvailabilityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostAvailabilityResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertConfigEscalationList)) {
      query["AlertConfigEscalationList"] = request.alertConfigEscalationList;
    }

    if (!Util.isUnset(request.alertConfigTargetList)) {
      query["AlertConfigTargetList"] = request.alertConfigTargetList;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskScope)) {
      query["TaskScope"] = request.taskScope;
    }

    if (!Util.isUnset(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!Util.isUnset(request.taskOption)) {
      query["TaskOption"] = request.taskOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHostAvailabilityResponse>(await this.callApi(params, req, runtime), new ModifyHostAvailabilityResponse({}));
  }

  /**
    * This topic provides an example on how to change the name of an availability monitoring task named `12345` in an application group named `123456` to `task2`.
    *
    * @param request ModifyHostAvailabilityRequest
    * @return ModifyHostAvailabilityResponse
   */
  async modifyHostAvailability(request: ModifyHostAvailabilityRequest): Promise<ModifyHostAvailabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostAvailabilityWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request ModifyHostInfoRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHostInfoResponse
   */
  async modifyHostInfoWithOptions(request: ModifyHostInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHostInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHostInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHostInfoResponse>(await this.callApi(params, req, runtime), new ModifyHostInfoResponse({}));
  }

  /**
    * ****
    *
    * @param request ModifyHostInfoRequest
    * @return ModifyHostInfoResponse
   */
  async modifyHostInfo(request: ModifyHostInfoRequest): Promise<ModifyHostInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHostInfoWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to change the data retention period of the `aliyun` namespace to `cms.s1.2xlarge`. The response shows that the namespace is modified.
    *
    * @param request ModifyHybridMonitorNamespaceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHybridMonitorNamespaceResponse
   */
  async modifyHybridMonitorNamespaceWithOptions(request: ModifyHybridMonitorNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridMonitorNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridMonitorNamespace",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridMonitorNamespaceResponse>(await this.callApi(params, req, runtime), new ModifyHybridMonitorNamespaceResponse({}));
  }

  /**
    * This topic provides an example on how to change the data retention period of the `aliyun` namespace to `cms.s1.2xlarge`. The response shows that the namespace is modified.
    *
    * @param request ModifyHybridMonitorNamespaceRequest
    * @return ModifyHybridMonitorNamespaceResponse
   */
  async modifyHybridMonitorNamespace(request: ModifyHybridMonitorNamespaceRequest): Promise<ModifyHybridMonitorNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridMonitorNamespaceWithOptions(request, runtime);
  }

  /**
    * In this example, a Logstore group named `Logstore_test` is modified. The Logstore of the `aliyun-project` project in the `cn-hangzhou` region is changed to `Logstore-aliyun-all`. The response shows that the Logstore group is modified.
    *
    * @param request ModifyHybridMonitorSLSGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHybridMonitorSLSGroupResponse
   */
  async modifyHybridMonitorSLSGroupWithOptions(request: ModifyHybridMonitorSLSGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridMonitorSLSGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.SLSGroupConfig)) {
      query["SLSGroupConfig"] = request.SLSGroupConfig;
    }

    if (!Util.isUnset(request.SLSGroupDescription)) {
      query["SLSGroupDescription"] = request.SLSGroupDescription;
    }

    if (!Util.isUnset(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new ModifyHybridMonitorSLSGroupResponse({}));
  }

  /**
    * In this example, a Logstore group named `Logstore_test` is modified. The Logstore of the `aliyun-project` project in the `cn-hangzhou` region is changed to `Logstore-aliyun-all`. The response shows that the Logstore group is modified.
    *
    * @param request ModifyHybridMonitorSLSGroupRequest
    * @return ModifyHybridMonitorSLSGroupResponse
   */
  async modifyHybridMonitorSLSGroup(request: ModifyHybridMonitorSLSGroupRequest): Promise<ModifyHybridMonitorSLSGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to change the collection period of a metric import task whose ID is `36****` to `15` seconds. The task is used to monitor the logs that are imported from Log Service. The returned result indicates that the metric is modified.
    *
    * @param request ModifyHybridMonitorTaskRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyHybridMonitorTaskResponse
   */
  async modifyHybridMonitorTaskWithOptions(request: ModifyHybridMonitorTaskRequest, runtime: $Util.RuntimeOptions): Promise<ModifyHybridMonitorTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attachLabels)) {
      query["AttachLabels"] = request.attachLabels;
    }

    if (!Util.isUnset(request.collectInterval)) {
      query["CollectInterval"] = request.collectInterval;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.SLSProcessConfig)) {
      query["SLSProcessConfig"] = request.SLSProcessConfig;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyHybridMonitorTask",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyHybridMonitorTaskResponse>(await this.callApi(params, req, runtime), new ModifyHybridMonitorTaskResponse({}));
  }

  /**
    * This topic provides an example on how to change the collection period of a metric import task whose ID is `36****` to `15` seconds. The task is used to monitor the logs that are imported from Log Service. The returned result indicates that the metric is modified.
    *
    * @param request ModifyHybridMonitorTaskRequest
    * @return ModifyHybridMonitorTaskResponse
   */
  async modifyHybridMonitorTask(request: ModifyHybridMonitorTaskRequest): Promise<ModifyHybridMonitorTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyHybridMonitorTaskWithOptions(request, runtime);
  }

  async modifyMetricRuleBlackListWithOptions(request: ModifyMetricRuleBlackListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMetricRuleBlackListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!Util.isUnset(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!Util.isUnset(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!Util.isUnset(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new ModifyMetricRuleBlackListResponse({}));
  }

  async modifyMetricRuleBlackList(request: ModifyMetricRuleBlackListRequest): Promise<ModifyMetricRuleBlackListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMetricRuleBlackListWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to modify an alert template whose version is `1` and ID is `123456`. The alert level is changed to `Critical`. The statistical method is changed to `Average`. The alert threshold comparator is changed to `GreaterThanOrEqualToThreshold`. The alert threshold is changed to `90`. The number of alert retries is changed to `3`. The response shows that the alert template is modified.
    *
    * @param request ModifyMetricRuleTemplateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyMetricRuleTemplateResponse
   */
  async modifyMetricRuleTemplateWithOptions(request: ModifyMetricRuleTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMetricRuleTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alertTemplates)) {
      query["AlertTemplates"] = request.alertTemplates;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.restVersion)) {
      query["RestVersion"] = request.restVersion;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new ModifyMetricRuleTemplateResponse({}));
  }

  /**
    * This topic provides an example on how to modify an alert template whose version is `1` and ID is `123456`. The alert level is changed to `Critical`. The statistical method is changed to `Average`. The alert threshold comparator is changed to `GreaterThanOrEqualToThreshold`. The alert threshold is changed to `90`. The number of alert retries is changed to `3`. The response shows that the alert template is modified.
    *
    * @param request ModifyMetricRuleTemplateRequest
    * @return ModifyMetricRuleTemplateResponse
   */
  async modifyMetricRuleTemplate(request: ModifyMetricRuleTemplateRequest): Promise<ModifyMetricRuleTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMetricRuleTemplateWithOptions(request, runtime);
  }

  async modifyMonitorGroupWithOptions(request: ModifyMonitorGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMonitorGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMonitorGroupResponse>(await this.callApi(params, req, runtime), new ModifyMonitorGroupResponse({}));
  }

  async modifyMonitorGroup(request: ModifyMonitorGroupRequest): Promise<ModifyMonitorGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMonitorGroupWithOptions(request, runtime);
  }

  async modifyMonitorGroupInstancesWithOptions(request: ModifyMonitorGroupInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyMonitorGroupInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new ModifyMonitorGroupInstancesResponse({}));
  }

  async modifyMonitorGroupInstances(request: ModifyMonitorGroupInstancesRequest): Promise<ModifyMonitorGroupInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyMonitorGroupInstancesWithOptions(request, runtime);
  }

  /**
    * The number of site monitoring tasks.
    *
    * @param request ModifySiteMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifySiteMonitorResponse
   */
  async modifySiteMonitorWithOptions(request: ModifySiteMonitorRequest, runtime: $Util.RuntimeOptions): Promise<ModifySiteMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.address)) {
      query["Address"] = request.address;
    }

    if (!Util.isUnset(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!Util.isUnset(request.customSchedule)) {
      query["CustomSchedule"] = request.customSchedule;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.intervalUnit)) {
      query["IntervalUnit"] = request.intervalUnit;
    }

    if (!Util.isUnset(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!Util.isUnset(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySiteMonitorResponse>(await this.callApi(params, req, runtime), new ModifySiteMonitorResponse({}));
  }

  /**
    * The number of site monitoring tasks.
    *
    * @param request ModifySiteMonitorRequest
    * @return ModifySiteMonitorResponse
   */
  async modifySiteMonitor(request: ModifySiteMonitorRequest): Promise<ModifySiteMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySiteMonitorWithOptions(request, runtime);
  }

  /**
    * @deprecated
    *
    * @param request OpenCmsServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OpenCmsServiceResponse
   */
  // Deprecated
  async openCmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenCmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenCmsService",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenCmsServiceResponse>(await this.callApi(params, req, runtime), new OpenCmsServiceResponse({}));
  }

  /**
    * @deprecated
    *
    * @return OpenCmsServiceResponse
   */
  // Deprecated
  async openCmsService(): Promise<OpenCmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCmsServiceWithOptions(runtime);
  }

  async putContactWithOptions(request: PutContactRequest, runtime: $Util.RuntimeOptions): Promise<PutContactResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.channels)) {
      query["Channels"] = request.channels;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutContact",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutContactResponse>(await this.callApi(params, req, runtime), new PutContactResponse({}));
  }

  async putContact(request: PutContactRequest): Promise<PutContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putContactWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create an alert contact group named `ECS_Group`.
    *
    * @param request PutContactGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutContactGroupResponse
   */
  async putContactGroupWithOptions(request: PutContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<PutContactGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!Util.isUnset(request.contactNames)) {
      query["ContactNames"] = request.contactNames;
    }

    if (!Util.isUnset(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!Util.isUnset(request.enableSubscribed)) {
      query["EnableSubscribed"] = request.enableSubscribed;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutContactGroupResponse>(await this.callApi(params, req, runtime), new PutContactGroupResponse({}));
  }

  /**
    * This topic provides an example on how to create an alert contact group named `ECS_Group`.
    *
    * @param request PutContactGroupRequest
    * @return PutContactGroupResponse
   */
  async putContactGroup(request: PutContactGroupRequest): Promise<PutContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putContactGroupWithOptions(request, runtime);
  }

  async putCustomEventWithOptions(request: PutCustomEventRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventInfo)) {
      query["EventInfo"] = request.eventInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomEvent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomEventResponse>(await this.callApi(params, req, runtime), new PutCustomEventResponse({}));
  }

  async putCustomEvent(request: PutCustomEventRequest): Promise<PutCustomEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomEventWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, call the PutCustomEvent operation to report the monitoring data of the custom event. For more information, see [PutCustomEvent](~~115012~~).
    *
    * @param request PutCustomEventRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutCustomEventRuleResponse
   */
  async putCustomEventRuleWithOptions(request: PutCustomEventRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomEventRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomEventRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomEventRuleResponse>(await this.callApi(params, req, runtime), new PutCustomEventRuleResponse({}));
  }

  /**
    * Before you call this operation, call the PutCustomEvent operation to report the monitoring data of the custom event. For more information, see [PutCustomEvent](~~115012~~).
    *
    * @param request PutCustomEventRuleRequest
    * @return PutCustomEventRuleResponse
   */
  async putCustomEventRule(request: PutCustomEventRuleRequest): Promise<PutCustomEventRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomEventRuleWithOptions(request, runtime);
  }

  /**
    * >  We recommend that you call the [PutHybridMonitorMetricData](~~383455~~) operation of Hybrid Cloud Monitoring to report monitoring data.
    *
    * @param request PutCustomMetricRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutCustomMetricResponse
   */
  async putCustomMetricWithOptions(request: PutCustomMetricRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metricList)) {
      query["MetricList"] = request.metricList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomMetric",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomMetricResponse>(await this.callApi(params, req, runtime), new PutCustomMetricResponse({}));
  }

  /**
    * >  We recommend that you call the [PutHybridMonitorMetricData](~~383455~~) operation of Hybrid Cloud Monitoring to report monitoring data.
    *
    * @param request PutCustomMetricRequest
    * @return PutCustomMetricResponse
   */
  async putCustomMetric(request: PutCustomMetricRequest): Promise<PutCustomMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomMetricWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, call the PutCustomMetric operation to report custom monitoring data. For more information, see [PutCustomMetric](~~115004~~).
    *
    * @param request PutCustomMetricRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutCustomMetricRuleResponse
   */
  async putCustomMetricRuleWithOptions(request: PutCustomMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutCustomMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.level)) {
      query["Level"] = request.level;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutCustomMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutCustomMetricRuleResponse>(await this.callApi(params, req, runtime), new PutCustomMetricRuleResponse({}));
  }

  /**
    * Before you call this operation, call the PutCustomMetric operation to report custom monitoring data. For more information, see [PutCustomMetric](~~115004~~).
    *
    * @param request PutCustomMetricRuleRequest
    * @return PutCustomMetricRuleResponse
   */
  async putCustomMetricRule(request: PutCustomMetricRuleRequest): Promise<PutCustomMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putCustomMetricRuleWithOptions(request, runtime);
  }

  /**
    * If the specified rule name does not exist, an event-triggered alert rule is created. If the specified rule name exists, the specified event-triggered alert rule is modified.
    * In this example, the `myRuleName` alert rule is created for the `ecs` cloud service.
    *
    * @param request PutEventRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutEventRuleResponse
   */
  async putEventRuleWithOptions(request: PutEventRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutEventRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventPattern)) {
      query["EventPattern"] = request.eventPattern;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEventRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEventRuleResponse>(await this.callApi(params, req, runtime), new PutEventRuleResponse({}));
  }

  /**
    * If the specified rule name does not exist, an event-triggered alert rule is created. If the specified rule name exists, the specified event-triggered alert rule is modified.
    * In this example, the `myRuleName` alert rule is created for the `ecs` cloud service.
    *
    * @param request PutEventRuleRequest
    * @return PutEventRuleResponse
   */
  async putEventRule(request: PutEventRuleRequest): Promise<PutEventRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEventRuleWithOptions(request, runtime);
  }

  async putEventRuleTargetsWithOptions(request: PutEventRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutEventRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactParameters)) {
      query["ContactParameters"] = request.contactParameters;
    }

    if (!Util.isUnset(request.fcParameters)) {
      query["FcParameters"] = request.fcParameters;
    }

    if (!Util.isUnset(request.mnsParameters)) {
      query["MnsParameters"] = request.mnsParameters;
    }

    if (!Util.isUnset(request.openApiParameters)) {
      query["OpenApiParameters"] = request.openApiParameters;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.slsParameters)) {
      query["SlsParameters"] = request.slsParameters;
    }

    if (!Util.isUnset(request.webhookParameters)) {
      query["WebhookParameters"] = request.webhookParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutEventRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEventRuleTargetsResponse>(await this.callApi(params, req, runtime), new PutEventRuleTargetsResponse({}));
  }

  async putEventRuleTargets(request: PutEventRuleTargetsRequest): Promise<PutEventRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEventRuleTargetsWithOptions(request, runtime);
  }

  /**
    * > The monitoring data can be exported only to Log Service. More services will be supported in the future.
    *
    * @param request PutExporterOutputRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutExporterOutputResponse
   */
  async putExporterOutputWithOptions(request: PutExporterOutputRequest, runtime: $Util.RuntimeOptions): Promise<PutExporterOutputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configJson)) {
      query["ConfigJson"] = request.configJson;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.destName)) {
      query["DestName"] = request.destName;
    }

    if (!Util.isUnset(request.destType)) {
      query["DestType"] = request.destType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutExporterOutput",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutExporterOutputResponse>(await this.callApi(params, req, runtime), new PutExporterOutputResponse({}));
  }

  /**
    * > The monitoring data can be exported only to Log Service. More services will be supported in the future.
    *
    * @param request PutExporterOutputRequest
    * @return PutExporterOutputResponse
   */
  async putExporterOutput(request: PutExporterOutputRequest): Promise<PutExporterOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putExporterOutputWithOptions(request, runtime);
  }

  async putExporterRuleWithOptions(request: PutExporterRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutExporterRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!Util.isUnset(request.dstNames)) {
      query["DstNames"] = request.dstNames;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.targetWindows)) {
      query["TargetWindows"] = request.targetWindows;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutExporterRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutExporterRuleResponse>(await this.callApi(params, req, runtime), new PutExporterRuleResponse({}));
  }

  async putExporterRule(request: PutExporterRuleRequest): Promise<PutExporterRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putExporterRuleWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `17285****` application group. The ID of the alert rule is `123456`. The name of the alert rule is `Rule_test`. The alert level is `Critical`. The statistical method is `Average`. The alert threshold comparator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The returned result shows that the alert rule is created and the alert rule ID is `123456`.
    *
    * @param request PutGroupMetricRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutGroupMetricRuleResponse
   */
  async putGroupMetricRuleWithOptions(request: PutGroupMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutGroupMetricRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.extraDimensionJson)) {
      query["ExtraDimensionJson"] = request.extraDimensionJson;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.noDataPolicy)) {
      query["NoDataPolicy"] = request.noDataPolicy;
    }

    if (!Util.isUnset(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!Util.isUnset(request.options)) {
      query["Options"] = request.options;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    if (!Util.isUnset(request.escalations)) {
      query["Escalations"] = request.escalations;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutGroupMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutGroupMetricRuleResponse>(await this.callApi(params, req, runtime), new PutGroupMetricRuleResponse({}));
  }

  /**
    * This topic provides an example on how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `17285****` application group. The ID of the alert rule is `123456`. The name of the alert rule is `Rule_test`. The alert level is `Critical`. The statistical method is `Average`. The alert threshold comparator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The returned result shows that the alert rule is created and the alert rule ID is `123456`.
    *
    * @param request PutGroupMetricRuleRequest
    * @return PutGroupMetricRuleResponse
   */
  async putGroupMetricRule(request: PutGroupMetricRuleRequest): Promise<PutGroupMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putGroupMetricRuleWithOptions(request, runtime);
  }

  /**
    * # [](#)Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * # [](#)Limits
    * The size of the monitoring data that you import at a time must be less than or equal to 1 MB.
    * # [](#)Description
    * This topic provides an example on how to import the monitoring data of the `CPU_Usage` metric to the `default-aliyun` namespace of Hybrid Cloud Monitoring.
    *
    * @param request PutHybridMonitorMetricDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutHybridMonitorMetricDataResponse
   */
  async putHybridMonitorMetricDataWithOptions(request: PutHybridMonitorMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<PutHybridMonitorMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.metricList)) {
      query["MetricList"] = request.metricList;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutHybridMonitorMetricData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutHybridMonitorMetricDataResponse>(await this.callApi(params, req, runtime), new PutHybridMonitorMetricDataResponse({}));
  }

  /**
    * # [](#)Prerequisites
    * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](~~250773~~).
    * # [](#)Limits
    * The size of the monitoring data that you import at a time must be less than or equal to 1 MB.
    * # [](#)Description
    * This topic provides an example on how to import the monitoring data of the `CPU_Usage` metric to the `default-aliyun` namespace of Hybrid Cloud Monitoring.
    *
    * @param request PutHybridMonitorMetricDataRequest
    * @return PutHybridMonitorMetricDataResponse
   */
  async putHybridMonitorMetricData(request: PutHybridMonitorMetricDataRequest): Promise<PutHybridMonitorMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putHybridMonitorMetricDataWithOptions(request, runtime);
  }

  /**
    * In the example of this topic, the `cpu_total` log monitoring metric is created. The response shows that the log monitoring metric is created and the metric ID is `16****`.
    *
    * @param request PutLogMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutLogMonitorResponse
   */
  async putLogMonitorWithOptions(request: PutLogMonitorRequest, runtime: $Util.RuntimeOptions): Promise<PutLogMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregates)) {
      query["Aggregates"] = request.aggregates;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupbys)) {
      query["Groupbys"] = request.groupbys;
    }

    if (!Util.isUnset(request.logId)) {
      query["LogId"] = request.logId;
    }

    if (!Util.isUnset(request.metricExpress)) {
      query["MetricExpress"] = request.metricExpress;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.slsLogstore)) {
      query["SlsLogstore"] = request.slsLogstore;
    }

    if (!Util.isUnset(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    if (!Util.isUnset(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    if (!Util.isUnset(request.tumblingwindows)) {
      query["Tumblingwindows"] = request.tumblingwindows;
    }

    if (!Util.isUnset(request.unit)) {
      query["Unit"] = request.unit;
    }

    if (!Util.isUnset(request.valueFilter)) {
      query["ValueFilter"] = request.valueFilter;
    }

    if (!Util.isUnset(request.valueFilterRelation)) {
      query["ValueFilterRelation"] = request.valueFilterRelation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutLogMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutLogMonitorResponse>(await this.callApi(params, req, runtime), new PutLogMonitorResponse({}));
  }

  /**
    * In the example of this topic, the `cpu_total` log monitoring metric is created. The response shows that the log monitoring metric is created and the metric ID is `16****`.
    *
    * @param request PutLogMonitorRequest
    * @return PutLogMonitorResponse
   */
  async putLogMonitor(request: PutLogMonitorRequest): Promise<PutLogMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putLogMonitorWithOptions(request, runtime);
  }

  /**
    * ## Limit
    * This operation supports only Message Service (MNS) resources.
    *
    * @param request PutMetricRuleTargetsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutMetricRuleTargetsResponse
   */
  async putMetricRuleTargetsWithOptions(request: PutMetricRuleTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutMetricRuleTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new PutMetricRuleTargetsResponse({}));
  }

  /**
    * ## Limit
    * This operation supports only Message Service (MNS) resources.
    *
    * @param request PutMetricRuleTargetsRequest
    * @return PutMetricRuleTargetsResponse
   */
  async putMetricRuleTargets(request: PutMetricRuleTargetsRequest): Promise<PutMetricRuleTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMetricRuleTargetsWithOptions(request, runtime);
  }

  async putMonitorGroupDynamicRuleWithOptions(request: PutMonitorGroupDynamicRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutMonitorGroupDynamicRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupRules)) {
      query["GroupRules"] = request.groupRules;
    }

    if (!Util.isUnset(request.isAsync)) {
      query["IsAsync"] = request.isAsync;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMonitorGroupDynamicRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMonitorGroupDynamicRuleResponse>(await this.callApi(params, req, runtime), new PutMonitorGroupDynamicRuleResponse({}));
  }

  async putMonitorGroupDynamicRule(request: PutMonitorGroupDynamicRuleRequest): Promise<PutMonitorGroupDynamicRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  async putMonitoringConfigWithOptions(request: PutMonitoringConfigRequest, runtime: $Util.RuntimeOptions): Promise<PutMonitoringConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoInstall)) {
      query["AutoInstall"] = request.autoInstall;
    }

    if (!Util.isUnset(request.enableInstallAgentNewECS)) {
      query["EnableInstallAgentNewECS"] = request.enableInstallAgentNewECS;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutMonitoringConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutMonitoringConfigResponse>(await this.callApi(params, req, runtime), new PutMonitoringConfigResponse({}));
  }

  async putMonitoringConfig(request: PutMonitoringConfigRequest): Promise<PutMonitoringConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putMonitoringConfigWithOptions(request, runtime);
  }

  /**
    * This topic provides an example to show how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
    *
    * @param tmpReq PutResourceMetricRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutResourceMetricRuleResponse
   */
  async putResourceMetricRuleWithOptions(tmpReq: PutResourceMetricRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceMetricRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new PutResourceMetricRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.compositeExpression)) {
      request.compositeExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.compositeExpression, "CompositeExpression", "json");
    }

    if (!Util.isUnset(tmpReq.prometheus)) {
      request.prometheusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.prometheus, "Prometheus", "json");
    }

    let query = { };
    if (!Util.isUnset(request.compositeExpressionShrink)) {
      query["CompositeExpression"] = request.compositeExpressionShrink;
    }

    if (!Util.isUnset(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!Util.isUnset(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!Util.isUnset(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.noDataPolicy)) {
      query["NoDataPolicy"] = request.noDataPolicy;
    }

    if (!Util.isUnset(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.prometheusShrink)) {
      query["Prometheus"] = request.prometheusShrink;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!Util.isUnset(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    if (!Util.isUnset(request.escalations)) {
      query["Escalations"] = request.escalations;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutResourceMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutResourceMetricRuleResponse>(await this.callApi(params, req, runtime), new PutResourceMetricRuleResponse({}));
  }

  /**
    * This topic provides an example to show how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
    *
    * @param request PutResourceMetricRuleRequest
    * @return PutResourceMetricRuleResponse
   */
  async putResourceMetricRule(request: PutResourceMetricRuleRequest): Promise<PutResourceMetricRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceMetricRuleWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
    *
    * @param request PutResourceMetricRulesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutResourceMetricRulesResponse
   */
  async putResourceMetricRulesWithOptions(request: PutResourceMetricRulesRequest, runtime: $Util.RuntimeOptions): Promise<PutResourceMetricRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutResourceMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutResourceMetricRulesResponse>(await this.callApi(params, req, runtime), new PutResourceMetricRulesResponse({}));
  }

  /**
    * This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
    *
    * @param request PutResourceMetricRulesRequest
    * @return PutResourceMetricRulesResponse
   */
  async putResourceMetricRules(request: PutResourceMetricRulesRequest): Promise<PutResourceMetricRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putResourceMetricRulesWithOptions(request, runtime);
  }

  async removeTagsWithOptions(request: RemoveTagsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTagsResponse>(await this.callApi(params, req, runtime), new RemoveTagsResponse({}));
  }

  async removeTags(request: RemoveTagsRequest): Promise<RemoveTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  /**
    * This operation is used to test whether a system event can be triggered as expected. You can call this operation to simulate a system event and check whether an expected response is returned after an alert is triggered by the system event.
    *
    * @param request SendDryRunSystemEventRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SendDryRunSystemEventResponse
   */
  async sendDryRunSystemEventWithOptions(request: SendDryRunSystemEventRequest, runtime: $Util.RuntimeOptions): Promise<SendDryRunSystemEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventContent)) {
      query["EventContent"] = request.eventContent;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendDryRunSystemEvent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendDryRunSystemEventResponse>(await this.callApi(params, req, runtime), new SendDryRunSystemEventResponse({}));
  }

  /**
    * This operation is used to test whether a system event can be triggered as expected. You can call this operation to simulate a system event and check whether an expected response is returned after an alert is triggered by the system event.
    *
    * @param request SendDryRunSystemEventRequest
    * @return SendDryRunSystemEventResponse
   */
  async sendDryRunSystemEvent(request: SendDryRunSystemEventRequest): Promise<SendDryRunSystemEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendDryRunSystemEventWithOptions(request, runtime);
  }

  /**
    * >  This API operation is not applicable to ECS instances. To uninstall the agent from an ECS instance, see [Install and uninstall the Cloud Monitor agent](~~183482~~).
    *
    * @param request UninstallMonitoringAgentRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UninstallMonitoringAgentResponse
   */
  async uninstallMonitoringAgentWithOptions(request: UninstallMonitoringAgentRequest, runtime: $Util.RuntimeOptions): Promise<UninstallMonitoringAgentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallMonitoringAgent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallMonitoringAgentResponse>(await this.callApi(params, req, runtime), new UninstallMonitoringAgentResponse({}));
  }

  /**
    * >  This API operation is not applicable to ECS instances. To uninstall the agent from an ECS instance, see [Install and uninstall the Cloud Monitor agent](~~183482~~).
    *
    * @param request UninstallMonitoringAgentRequest
    * @return UninstallMonitoringAgentResponse
   */
  async uninstallMonitoringAgent(request: UninstallMonitoringAgentRequest): Promise<UninstallMonitoringAgentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallMonitoringAgentWithOptions(request, runtime);
  }

}
