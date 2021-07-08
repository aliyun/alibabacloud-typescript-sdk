// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPCUtil from '@alicloud/rpc-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetExploreUrlRequest extends $tea.Model {
  regionId?: string;
  clusterId: string;
  type: string;
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      type: 'Type',
      expression: 'Expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      type: 'string',
      expression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExploreUrlResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArmsConsoleUrlRequest extends $tea.Model {
  regionId: string;
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

export class GetArmsConsoleUrlResponse extends $tea.Model {
  requestId: string;
  armsConsoleUrl: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      armsConsoleUrl: 'ArmsConsoleUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      armsConsoleUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceSecondVersionRequest extends $tea.Model {
  regionId: string;
  type: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceSecondVersionResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebhookRequest extends $tea.Model {
  contactName: string;
  method?: string;
  url: string;
  httpParams?: string;
  httpHeaders?: string;
  regionId: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      method: 'Method',
      url: 'Url',
      httpParams: 'HttpParams',
      httpHeaders: 'HttpHeaders',
      regionId: 'RegionId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      method: 'string',
      url: 'string',
      httpParams: 'string',
      httpHeaders: 'string',
      regionId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWebhookResponse extends $tea.Model {
  requestId: string;
  contactId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlertTemplateRequest extends $tea.Model {
  regionId: string;
  id: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableAlertTemplateResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateRequest extends $tea.Model {
  name: string;
  regionId: string;
  matchExpressions?: string;
  type: string;
  templateProvider?: string;
  labels?: string;
  annotations?: string;
  rule: string;
  message: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      matchExpressions: 'MatchExpressions',
      type: 'Type',
      templateProvider: 'TemplateProvider',
      labels: 'Labels',
      annotations: 'Annotations',
      rule: 'Rule',
      message: 'Message',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      matchExpressions: 'string',
      type: 'string',
      templateProvider: 'string',
      labels: 'string',
      annotations: 'string',
      rule: 'string',
      message: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponse extends $tea.Model {
  requestId: string;
  alertTemplate: CreateAlertTemplateResponseAlertTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertTemplate: 'AlertTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertTemplate: CreateAlertTemplateResponseAlertTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesRequest extends $tea.Model {
  name?: string;
  regionId: string;
  alertProvider?: string;
  type?: string;
  status?: boolean;
  templateProvider?: string;
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      alertProvider: 'AlertProvider',
      type: 'Type',
      status: 'Status',
      templateProvider: 'TemplateProvider',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      alertProvider: 'string',
      type: 'string',
      status: 'boolean',
      templateProvider: 'string',
      labels: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponse extends $tea.Model {
  requestId: string;
  alertTemplates: ListAlertTemplatesResponseAlertTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      alertTemplates: 'AlertTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      alertTemplates: { 'type': 'array', 'itemType': ListAlertTemplatesResponseAlertTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertTemplateRequest extends $tea.Model {
  name: string;
  regionId: string;
  matchExpressions?: string;
  type: string;
  labels?: string;
  annotations?: string;
  rule: string;
  message: string;
  id: number;
  status: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      matchExpressions: 'MatchExpressions',
      type: 'Type',
      labels: 'Labels',
      annotations: 'Annotations',
      rule: 'Rule',
      message: 'Message',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      matchExpressions: 'string',
      type: 'string',
      labels: 'string',
      annotations: 'string',
      rule: 'string',
      message: 'string',
      id: 'number',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertTemplateResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertTemplateRequest extends $tea.Model {
  regionId: string;
  id: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertTemplateResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlertTemplateRequest extends $tea.Model {
  regionId: string;
  id: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableAlertTemplateResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGrafanaResourceRequest extends $tea.Model {
  clusterName: string;
  clusterId: string;
  userId: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      clusterId: 'ClusterId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGrafanaResourceResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesRequest extends $tea.Model {
  name?: string;
  regionId: string;
  clusterId: string;
  type?: string;
  status?: number;
  matchExpressions?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      type: 'Type',
      status: 'Status',
      matchExpressions: 'MatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      clusterId: 'string',
      type: 'string',
      status: 'number',
      matchExpressions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRules: ListPrometheusAlertRulesResponsePrometheusAlertRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRules: 'PrometheusAlertRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRules: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponsePrometheusAlertRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleRequest extends $tea.Model {
  regionId: string;
  alertName: string;
  clusterId: string;
  type?: string;
  notifyType?: string;
  dispatchRuleId?: number;
  expression: string;
  duration: string;
  message: string;
  labels?: string;
  annotations?: string;
  alertId: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      alertName: 'AlertName',
      clusterId: 'ClusterId',
      type: 'Type',
      notifyType: 'NotifyType',
      dispatchRuleId: 'DispatchRuleId',
      expression: 'Expression',
      duration: 'Duration',
      message: 'Message',
      labels: 'Labels',
      annotations: 'Annotations',
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      alertName: 'string',
      clusterId: 'string',
      type: 'string',
      notifyType: 'string',
      dispatchRuleId: 'number',
      expression: 'string',
      duration: 'string',
      message: 'string',
      labels: 'string',
      annotations: 'string',
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRule: UpdatePrometheusAlertRuleResponsePrometheusAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRule: 'PrometheusAlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRule: UpdatePrometheusAlertRuleResponsePrometheusAlertRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleRequest extends $tea.Model {
  alertId: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRule: DescribePrometheusAlertRuleResponsePrometheusAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRule: 'PrometheusAlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRule: DescribePrometheusAlertRuleResponsePrometheusAlertRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsRequest extends $tea.Model {
  filter?: string;
  regionId: string;
  currentPage: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      regionId: 'RegionId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      regionId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponse extends $tea.Model {
  requestId: string;
  page: ListActivatedAlertsResponsePage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      page: ListActivatedAlertsResponsePage,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesRequest extends $tea.Model {
  clusterId?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesResponse extends $tea.Model {
  requestId: string;
  prometheusAlertTemplates: ListPrometheusAlertTemplatesResponsePrometheusAlertTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertTemplates: 'PrometheusAlertTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertTemplates: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponsePrometheusAlertTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleRequest extends $tea.Model {
  regionId: string;
  alertName: string;
  clusterId: string;
  type?: string;
  notifyType?: string;
  dispatchRuleId?: number;
  expression: string;
  duration: string;
  message: string;
  labels?: string;
  annotations?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      alertName: 'AlertName',
      clusterId: 'ClusterId',
      type: 'Type',
      notifyType: 'NotifyType',
      dispatchRuleId: 'DispatchRuleId',
      expression: 'Expression',
      duration: 'Duration',
      message: 'Message',
      labels: 'Labels',
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      alertName: 'string',
      clusterId: 'string',
      type: 'string',
      notifyType: 'string',
      dispatchRuleId: 'number',
      expression: 'string',
      duration: 'string',
      message: 'string',
      labels: 'string',
      annotations: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  prometheusAlertRule: CreatePrometheusAlertRuleResponsePrometheusAlertRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      prometheusAlertRule: 'PrometheusAlertRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      prometheusAlertRule: CreatePrometheusAlertRuleResponsePrometheusAlertRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusAlertRuleRequest extends $tea.Model {
  alertId: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrometheusAlertRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenXtraceDefaultSLRRequest extends $tea.Model {
  regionId: string;
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

export class OpenXtraceDefaultSLRResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsDefaultSLRRequest extends $tea.Model {
  regionId: string;
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

export class OpenArmsDefaultSLRResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessTopNAppsRequest extends $tea.Model {
  regionId: string;
  limit?: number;
  orderBy?: string;
  startTime: number;
  endTime: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      limit: 'Limit',
      orderBy: 'OrderBy',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      limit: 'number',
      orderBy: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessTopNAppsResponse extends $tea.Model {
  requestId: string;
  data: ListServerlessTopNAppsResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListServerlessTopNAppsResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVClusterRequest extends $tea.Model {
  regionId: string;
  clusterType: string;
  length?: number;
  product?: string;
  recreateSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterType: 'ClusterType',
      length: 'Length',
      product: 'Product',
      recreateSwitch: 'RecreateSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterType: 'string',
      length: 'number',
      product: 'string',
      recreateSwitch: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenVClusterResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceStatusRequest extends $tea.Model {
  svcCode: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      svcCode: 'SvcCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      svcCode: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceStatusResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleRequest extends $tea.Model {
  name?: string;
  regionId: string;
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      system: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponse extends $tea.Model {
  requestId: string;
  dispatchRules: ListDispatchRuleResponseDispatchRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dispatchRules: 'DispatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dispatchRules: { 'type': 'array', 'itemType': ListDispatchRuleResponseDispatchRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentDownloadUrlRequest extends $tea.Model {
  regionId: string;
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

export class GetAgentDownloadUrlResponse extends $tea.Model {
  requestId: string;
  armsAgentDownloadUrl: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      armsAgentDownloadUrl: 'ArmsAgentDownloadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      armsAgentDownloadUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioRequest extends $tea.Model {
  regionId?: string;
  scenario?: string;
  name: string;
  appId: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenario: 'Scenario',
      name: 'Name',
      appId: 'AppId',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenario: 'string',
      name: 'string',
      appId: 'string',
      sign: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponse extends $tea.Model {
  requestId: string;
  armsScenarios: ListScenarioResponseArmsScenarios[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      armsScenarios: 'ArmsScenarios',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      armsScenarios: { 'type': 'array', 'itemType': ListScenarioResponseArmsScenarios },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioRequest extends $tea.Model {
  scenarioId: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioId: 'ScenarioId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScenarioResponse extends $tea.Model {
  requestId: string;
  result: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioRequest extends $tea.Model {
  regionId?: string;
  scenario?: string;
  name: string;
  appId: string;
  sign?: string;
  config: { [key: string]: any };
  snTransfer?: boolean;
  snStat?: boolean;
  snDump?: boolean;
  snForce?: boolean;
  updateOption: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenario: 'Scenario',
      name: 'Name',
      appId: 'AppId',
      sign: 'Sign',
      config: 'Config',
      snTransfer: 'SnTransfer',
      snStat: 'SnStat',
      snDump: 'SnDump',
      snForce: 'SnForce',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenario: 'string',
      name: 'string',
      appId: 'string',
      sign: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      snTransfer: 'boolean',
      snStat: 'boolean',
      snDump: 'boolean',
      snForce: 'boolean',
      updateOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioShrinkRequest extends $tea.Model {
  regionId?: string;
  scenario?: string;
  name: string;
  appId: string;
  sign?: string;
  configShrink: string;
  snTransfer?: boolean;
  snStat?: boolean;
  snDump?: boolean;
  snForce?: boolean;
  updateOption: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scenario: 'Scenario',
      name: 'Name',
      appId: 'AppId',
      sign: 'Sign',
      configShrink: 'Config',
      snTransfer: 'SnTransfer',
      snStat: 'SnStat',
      snDump: 'SnDump',
      snForce: 'SnForce',
      updateOption: 'UpdateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scenario: 'string',
      name: 'string',
      appId: 'string',
      sign: 'string',
      configShrink: 'string',
      snTransfer: 'boolean',
      snStat: 'boolean',
      snDump: 'boolean',
      snForce: 'boolean',
      updateOption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyScenarioResponse extends $tea.Model {
  requestId: string;
  result: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceRequest extends $tea.Model {
  ownerId?: number;
  type: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenArmsServiceResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationTokenRequest extends $tea.Model {
  productType: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegrationTokenResponse extends $tea.Model {
  requestId: string;
  token: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomIncidentsRequest extends $tea.Model {
  incidents: string;
  regionId: string;
  productType: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      regionId: 'RegionId',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
      regionId: 'string',
      productType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendCustomIncidentsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleRequest extends $tea.Model {
  id?: string;
  regionId: string;
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

export class DescribeDispatchRuleResponse extends $tea.Model {
  requestId: string;
  dispatchRule: DescribeDispatchRuleResponseDispatchRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dispatchRule: 'DispatchRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dispatchRule: DescribeDispatchRuleResponseDispatchRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDispatchRuleRequest extends $tea.Model {
  id: string;
  regionId: string;
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

export class DeleteDispatchRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDispatchRuleRequest extends $tea.Model {
  dispatchRule: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDispatchRuleResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMseIncidentRequest extends $tea.Model {
  incidents: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      incidents: 'Incidents',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidents: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMseIncidentResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDispatchRuleRequest extends $tea.Model {
  dispatchRule: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDispatchRuleResponse extends $tea.Model {
  requestId: string;
  dispatchRuleId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dispatchRuleId: 'DispatchRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dispatchRuleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesRequest extends $tea.Model {
  regionId: string;
  clusterId: string;
  nameSpace: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      nameSpace: 'NameSpace',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      nameSpace: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportPrometheusRulesResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesRequest extends $tea.Model {
  regionId: string;
  clusterId: string;
  nameSpace: string;
  name: string;
  content: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      nameSpace: 'NameSpace',
      name: 'Name',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      nameSpace: 'string',
      name: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportPrometheusRulesResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequest extends $tea.Model {
  settings?: SaveTraceAppConfigRequestSettings[];
  pid: string;
  static names(): { [key: string]: string } {
    return {
      settings: 'Settings',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: { 'type': 'array', 'itemType': SaveTraceAppConfigRequestSettings },
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookRequest extends $tea.Model {
  contactName?: string;
  method?: string;
  url?: string;
  httpParams?: string;
  httpHeaders?: string;
  regionId: string;
  contactId: number;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      method: 'Method',
      url: 'Url',
      httpParams: 'HttpParams',
      httpHeaders: 'HttpHeaders',
      regionId: 'RegionId',
      contactId: 'ContactId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      method: 'string',
      url: 'string',
      httpParams: 'string',
      httpHeaders: 'string',
      regionId: 'string',
      contactId: 'number',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebhookResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWehookRequest extends $tea.Model {
  contactName: string;
  method?: string;
  url: string;
  httpParams?: string;
  httpHeaders?: string;
  regionId: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      method: 'Method',
      url: 'Url',
      httpParams: 'HttpParams',
      httpHeaders: 'HttpHeaders',
      regionId: 'RegionId',
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      method: 'string',
      url: 'string',
      httpParams: 'string',
      httpHeaders: 'string',
      regionId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWehookResponse extends $tea.Model {
  requestId: string;
  contactId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageRequest extends $tea.Model {
  regionId: string;
  startTime?: number;
  endTime?: number;
  currentPage?: number;
  pageSize?: number;
  intervalMills?: number;
  PId: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      intervalMills: 'IntervalMills',
      PId: 'PId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      startTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      intervalMills: 'number',
      PId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppApiByPageResponse extends $tea.Model {
  requestId: string;
  code: number;
  message: string;
  success: boolean;
  data: GetAppApiByPageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      message: 'string',
      success: 'boolean',
      data: GetAppApiByPageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageRequest extends $tea.Model {
  intervalInSec?: number;
  startTime: number;
  endTime: number;
  orderBy?: string;
  filters?: QueryMetricByPageRequestFilters[];
  dimensions?: string[];
  metric: string;
  measures: string[];
  order?: string;
  currentPage?: number;
  pageSize?: number;
  customFilters?: string[];
  static names(): { [key: string]: string } {
    return {
      intervalInSec: 'IntervalInSec',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      filters: 'Filters',
      dimensions: 'Dimensions',
      metric: 'Metric',
      measures: 'Measures',
      order: 'Order',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      customFilters: 'CustomFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalInSec: 'number',
      startTime: 'number',
      endTime: 'number',
      orderBy: 'string',
      filters: { 'type': 'array', 'itemType': QueryMetricByPageRequestFilters },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      measures: { 'type': 'array', 'itemType': 'string' },
      order: 'string',
      currentPage: 'number',
      pageSize: 'number',
      customFilters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageResponse extends $tea.Model {
  requestId: string;
  code: string;
  success: boolean;
  message: string;
  data: QueryMetricByPageResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      success: 'Success',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      success: 'boolean',
      message: 'string',
      data: QueryMetricByPageResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppRequest extends $tea.Model {
  pid: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponse extends $tea.Model {
  requestId: string;
  traceApp: GetTraceAppResponseTraceApp;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApp: 'TraceApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApp: GetTraceAppResponseTraceApp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceRequest extends $tea.Model {
  regionId: string;
  traceIDs?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      traceIDs: 'TraceIDs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      traceIDs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponse extends $tea.Model {
  requestId: string;
  multiCallChainInfos: GetMultipleTraceResponseMultiCallChainInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      multiCallChainInfos: 'MultiCallChainInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      multiCallChainInfos: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequest extends $tea.Model {
  startTime: number;
  endTime: number;
  regionId: string;
  serviceName?: string;
  operationName?: string;
  minDuration?: number;
  reverse?: boolean;
  serviceIp?: string;
  exclusionFilters?: SearchTracesByPageRequestExclusionFilters[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      operationName: 'OperationName',
      minDuration: 'MinDuration',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      exclusionFilters: 'ExclusionFilters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      operationName: 'string',
      minDuration: 'number',
      reverse: 'boolean',
      serviceIp: 'string',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesByPageRequestExclusionFilters },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchTracesByPageResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchTracesByPageResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackRequest extends $tea.Model {
  traceID: string;
  regionId: string;
  rpcID: string;
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      regionId: 'RegionId',
      rpcID: 'RpcID',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      regionId: 'string',
      rpcID: 'string',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponse extends $tea.Model {
  requestId: string;
  stackInfo: GetStackResponseStackInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInfo: 'StackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInfo: { 'type': 'array', 'itemType': GetStackResponseStackInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLocationRequest extends $tea.Model {
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

export class DescribeTraceLocationResponse extends $tea.Model {
  requestId: string;
  regionConfigs: DescribeTraceLocationResponseRegionConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionConfigs: 'RegionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionConfigs: { 'type': 'array', 'itemType': DescribeTraceLocationResponseRegionConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppRequest extends $tea.Model {
  appId?: string;
  regionId: string;
  type: string;
  pid: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
      type: 'Type',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      regionId: 'string',
      type: 'string',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTraceAppResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLicenseKeyRequest extends $tea.Model {
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

export class DescribeTraceLicenseKeyResponse extends $tea.Model {
  requestId: string;
  licenseKey: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      licenseKey: 'LicenseKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      licenseKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAppRequest extends $tea.Model {
  appIds: string;
  enable?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      enable: 'Enable',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      enable: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigAppResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingRequest extends $tea.Model {
  roleArn: string;
  serviceName: string;
  SPIRegionId: string;
  deletionTaskId: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      serviceName: 'ServiceName',
      SPIRegionId: 'SPIRegionId',
      deletionTaskId: 'DeletionTaskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      serviceName: 'string',
      SPIRegionId: 'string',
      deletionTaskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponse extends $tea.Model {
  requestId: string;
  deletable: boolean;
  roleUsages: CheckServiceLinkedRoleForDeletingResponseRoleUsages[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deletable: 'Deletable',
      roleUsages: 'RoleUsages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deletable: 'boolean',
      roleUsages: { 'type': 'array', 'itemType': CheckServiceLinkedRoleForDeletingResponseRoleUsages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsRequest extends $tea.Model {
  regionId?: string;
  clusterId?: string;
  clusterType?: string;
  title?: string;
  product?: string;
  recreateSwitch?: boolean;
  dashboardName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      title: 'Title',
      product: 'Product',
      recreateSwitch: 'RecreateSwitch',
      dashboardName: 'DashboardName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      clusterType: 'string',
      title: 'string',
      product: 'string',
      recreateSwitch: 'boolean',
      dashboardName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponse extends $tea.Model {
  requestId: string;
  dashboardVos: ListDashboardsResponseDashboardVos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dashboardVos: 'DashboardVos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dashboardVos: { 'type': 'array', 'itemType': ListDashboardsResponseDashboardVos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotRequest extends $tea.Model {
  currentTimestamp?: number;
  regionId: string;
  proxyUserId?: string;
  pid: string;
  appType: string;
  static names(): { [key: string]: string } {
    return {
      currentTimestamp: 'CurrentTimestamp',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      pid: 'Pid',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentTimestamp: 'number',
      regionId: 'string',
      proxyUserId: 'string',
      pid: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsistencySnapshotResponse extends $tea.Model {
  requestId: string;
  consistencyResultJsonStr: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      consistencyResultJsonStr: 'ConsistencyResultJsonStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      consistencyResultJsonStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataConsistencyRequest extends $tea.Model {
  currentTimestamp?: number;
  regionId: string;
  proxyUserId?: string;
  pid: string;
  appType: string;
  static names(): { [key: string]: string } {
    return {
      currentTimestamp: 'CurrentTimestamp',
      regionId: 'RegionId',
      proxyUserId: 'ProxyUserId',
      pid: 'Pid',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentTimestamp: 'number',
      regionId: 'string',
      proxyUserId: 'string',
      pid: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDataConsistencyResponse extends $tea.Model {
  requestId: string;
  isDataConsistency: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isDataConsistency: 'IsDataConsistency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isDataConsistency: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaRequest extends $tea.Model {
  regionId: string;
  clusterId: string;
  integration: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      integration: 'Integration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      integration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddGrafanaResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationRequest extends $tea.Model {
  regionId: string;
  clusterId: string;
  integration: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clusterId: 'ClusterId',
      integration: 'Integration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clusterId: 'string',
      integration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIntegrationResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceRequest extends $tea.Model {
  traceID: string;
  regionId: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      regionId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponse extends $tea.Model {
  requestId: string;
  spans: GetTraceResponseSpans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spans: { 'type': 'array', 'itemType': GetTraceResponseSpans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaRequest extends $tea.Model {
  regionId: string;
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

export class ListClusterFromGrafanaResponse extends $tea.Model {
  requestId: string;
  promClusterList: ListClusterFromGrafanaResponsePromClusterList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promClusterList: 'PromClusterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promClusterList: { 'type': 'array', 'itemType': ListClusterFromGrafanaResponsePromClusterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequest extends $tea.Model {
  startTime: number;
  endTime: number;
  regionId: string;
  serviceName?: string;
  operationName?: string;
  minDuration?: number;
  tag?: SearchTracesRequestTag[];
  reverse?: boolean;
  serviceIp?: string;
  exclusionFilters?: SearchTracesRequestExclusionFilters[];
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      endTime: 'EndTime',
      regionId: 'RegionId',
      serviceName: 'ServiceName',
      operationName: 'OperationName',
      minDuration: 'MinDuration',
      tag: 'Tag',
      reverse: 'Reverse',
      serviceIp: 'ServiceIp',
      exclusionFilters: 'ExclusionFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      endTime: 'number',
      regionId: 'string',
      serviceName: 'string',
      operationName: 'string',
      minDuration: 'number',
      tag: { 'type': 'array', 'itemType': SearchTracesRequestTag },
      reverse: 'boolean',
      serviceIp: 'string',
      exclusionFilters: { 'type': 'array', 'itemType': SearchTracesRequestExclusionFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesResponse extends $tea.Model {
  requestId: string;
  traceInfos: SearchTracesResponseTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesResponseTraceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrometheusApiTokenRequest extends $tea.Model {
  regionId: string;
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

export class GetPrometheusApiTokenResponse extends $tea.Model {
  requestId: string;
  token: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRetcodeShareStatusRequest extends $tea.Model {
  pid: string;
  status: boolean;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetRetcodeShareStatusResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeShareUrlRequest extends $tea.Model {
  pid: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRetcodeShareUrlResponse extends $tea.Model {
  requestId: string;
  url: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromClustersRequest extends $tea.Model {
  regionId: string;
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

export class ListPromClustersResponse extends $tea.Model {
  requestId: string;
  promClusterList: ListPromClustersResponsePromClusterList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      promClusterList: 'PromClusterList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      promClusterList: { 'type': 'array', 'itemType': ListPromClustersResponsePromClusterList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleRequest extends $tea.Model {
  regionId: string;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  templageAlertConfig: string;
  alertId: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      templageAlertConfig: 'TemplageAlertConfig',
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      templageAlertConfig: 'string',
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertRuleResponse extends $tea.Model {
  requestId: string;
  data: string;
  alertId: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      alertId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertRequest extends $tea.Model {
  alertId: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAlertResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertRequest extends $tea.Model {
  alertId: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAlertResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsRequest extends $tea.Model {
  alertId?: number;
  pid?: string;
  currentPage?: number;
  pageSize?: number;
  regionId: string;
  appType?: string;
  alertType?: number;
  isTrigger?: number;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      pid: 'Pid',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      appType: 'AppType',
      alertType: 'AlertType',
      isTrigger: 'IsTrigger',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      pid: 'string',
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      appType: 'string',
      alertType: 'number',
      isTrigger: 'number',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponse extends $tea.Model {
  requestId: string;
  isTrigger: number;
  pageBean: SearchEventsResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isTrigger: 'IsTrigger',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isTrigger: 'number',
      pageBean: SearchEventsResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesRequest extends $tea.Model {
  alertId?: number;
  alertType?: number;
  currentPage?: number;
  pageSize?: number;
  regionId: string;
  startTime?: number;
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
      endTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchAlertHistoriesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchAlertHistoriesResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactRequest extends $tea.Model {
  contactName?: string;
  phoneNum?: string;
  email?: string;
  dingRobotWebhookUrl?: string;
  systemNoc?: boolean;
  regionId: string;
  contactId: number;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      phoneNum: 'PhoneNum',
      email: 'Email',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      systemNoc: 'SystemNoc',
      regionId: 'RegionId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      phoneNum: 'string',
      email: 'string',
      dingRobotWebhookUrl: 'string',
      systemNoc: 'boolean',
      regionId: 'string',
      contactId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupRequest extends $tea.Model {
  regionId: string;
  contactGroupId: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      contactGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactGroupResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactRequest extends $tea.Model {
  regionId: string;
  contactId: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      contactId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertContactResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactGroupRequest extends $tea.Model {
  contactGroupName: string;
  contactIds?: string;
  regionId: string;
  contactGroupId: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactIds: 'string',
      regionId: 'string',
      contactGroupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertContactGroupResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomAlertRulesRequest extends $tea.Model {
  regionId: string;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  templateAlertConfig?: string;
  templageAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      templateAlertConfig: 'TemplateAlertConfig',
      templageAlertConfig: 'TemplageAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      templateAlertConfig: 'string',
      templageAlertConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCustomAlertRulesResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesRequest extends $tea.Model {
  title?: string;
  type?: string;
  currentPage?: number;
  pageSize?: number;
  regionId: string;
  pid?: string;
  appType?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      type: 'Type',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      pid: 'Pid',
      appType: 'AppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      type: 'string',
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      pid: 'string',
      appType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchAlertRulesResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchAlertRulesResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRulesRequest extends $tea.Model {
  alertIds: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      alertIds: 'AlertIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlertRulesResponse extends $tea.Model {
  requestId: string;
  isSuccess: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      isSuccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppRequest extends $tea.Model {
  retcodeAppName: string;
  retcodeAppType: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      retcodeAppName: 'RetcodeAppName',
      retcodeAppType: 'RetcodeAppType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retcodeAppName: 'string',
      retcodeAppType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponse extends $tea.Model {
  requestId: string;
  retcodeAppDataBean: CreateRetcodeAppResponseRetcodeAppDataBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeAppDataBean: 'RetcodeAppDataBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeAppDataBean: CreateRetcodeAppResponseRetcodeAppDataBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRetcodeAppRequest extends $tea.Model {
  appId: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRetcodeAppResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequest extends $tea.Model {
  datasetId: number;
  intervalInSec: number;
  dateStr?: string;
  minTime: number;
  maxTime: number;
  isDrillDown?: boolean;
  orderByKey?: string;
  limit?: number;
  reduceTail?: boolean;
  hungryMode?: boolean;
  measures?: string[];
  dimensions?: QueryDatasetRequestDimensions[];
  requiredDims?: QueryDatasetRequestRequiredDims[];
  optionalDims?: QueryDatasetRequestOptionalDims[];
  proxyUserId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      intervalInSec: 'IntervalInSec',
      dateStr: 'DateStr',
      minTime: 'MinTime',
      maxTime: 'MaxTime',
      isDrillDown: 'IsDrillDown',
      orderByKey: 'OrderByKey',
      limit: 'Limit',
      reduceTail: 'ReduceTail',
      hungryMode: 'HungryMode',
      measures: 'Measures',
      dimensions: 'Dimensions',
      requiredDims: 'RequiredDims',
      optionalDims: 'OptionalDims',
      proxyUserId: 'ProxyUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'number',
      intervalInSec: 'number',
      dateStr: 'string',
      minTime: 'number',
      maxTime: 'number',
      isDrillDown: 'boolean',
      orderByKey: 'string',
      limit: 'number',
      reduceTail: 'boolean',
      hungryMode: 'boolean',
      measures: { 'type': 'array', 'itemType': 'string' },
      dimensions: { 'type': 'array', 'itemType': QueryDatasetRequestDimensions },
      requiredDims: { 'type': 'array', 'itemType': QueryDatasetRequestRequiredDims },
      optionalDims: { 'type': 'array', 'itemType': QueryDatasetRequestOptionalDims },
      proxyUserId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequest extends $tea.Model {
  intervalInSec?: number;
  startTime: number;
  endTime: number;
  orderBy?: string;
  limit?: number;
  filters?: QueryMetricRequestFilters[];
  dimensions?: string[];
  metric: string;
  measures: string[];
  order?: string;
  proxyUserId?: string;
  consistencyDataKey?: string;
  consistencyQueryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      intervalInSec: 'IntervalInSec',
      startTime: 'StartTime',
      endTime: 'EndTime',
      orderBy: 'OrderBy',
      limit: 'Limit',
      filters: 'Filters',
      dimensions: 'Dimensions',
      metric: 'Metric',
      measures: 'Measures',
      order: 'Order',
      proxyUserId: 'ProxyUserId',
      consistencyDataKey: 'ConsistencyDataKey',
      consistencyQueryStrategy: 'ConsistencyQueryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intervalInSec: 'number',
      startTime: 'number',
      endTime: 'number',
      orderBy: 'string',
      limit: 'number',
      filters: { 'type': 'array', 'itemType': QueryMetricRequestFilters },
      dimensions: { 'type': 'array', 'itemType': 'string' },
      metric: 'string',
      measures: { 'type': 'array', 'itemType': 'string' },
      order: 'string',
      proxyUserId: 'string',
      consistencyDataKey: 'string',
      consistencyQueryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactRequest extends $tea.Model {
  contactName?: string;
  phoneNum?: string;
  email?: string;
  dingRobotWebhookUrl?: string;
  systemNoc?: boolean;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      phoneNum: 'PhoneNum',
      email: 'Email',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      systemNoc: 'SystemNoc',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      phoneNum: 'string',
      email: 'string',
      dingRobotWebhookUrl: 'string',
      systemNoc: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactResponse extends $tea.Model {
  requestId: string;
  contactId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactId: 'ContactId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupRequest extends $tea.Model {
  contactGroupName: string;
  contactIds?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      contactIds: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertContactGroupResponse extends $tea.Model {
  requestId: string;
  contactGroupId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactRequest extends $tea.Model {
  contactName?: string;
  phone?: string;
  email?: string;
  currentPage?: string;
  pageSize?: string;
  regionId: string;
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      phone: 'Phone',
      email: 'Email',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      contactIds: 'ContactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      phone: 'string',
      email: 'string',
      currentPage: 'string',
      pageSize: 'string',
      regionId: 'string',
      contactIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchAlertContactResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchAlertContactResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupRequest extends $tea.Model {
  contactGroupName?: string;
  regionId: string;
  contactName?: string;
  contactId?: number;
  contactGroupIds?: string;
  isDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
      regionId: 'RegionId',
      contactName: 'ContactName',
      contactId: 'ContactId',
      contactGroupIds: 'ContactGroupIds',
      isDetail: 'IsDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
      regionId: 'string',
      contactName: 'string',
      contactId: 'number',
      contactGroupIds: 'string',
      isDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponse extends $tea.Model {
  requestId: string;
  contactGroups: SearchAlertContactGroupResponseContactGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      contactGroups: 'ContactGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      contactGroups: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseContactGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesRequest extends $tea.Model {
  templateAlertId?: string;
  pids: string;
  regionId: string;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  templageAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      templateAlertId: 'TemplateAlertId',
      pids: 'Pids',
      regionId: 'RegionId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      templageAlertConfig: 'TemplageAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateAlertId: 'string',
      pids: 'string',
      regionId: 'string',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      templageAlertConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportAppAlertRulesResponse extends $tea.Model {
  requestId: string;
  data: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageRequest extends $tea.Model {
  retcodeAppName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      retcodeAppName: 'RetcodeAppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retcodeAppName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchRetcodeAppByPageResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchRetcodeAppByPageResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameRequest extends $tea.Model {
  traceAppName?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      traceAppName: 'TraceAppName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceAppName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponse extends $tea.Model {
  requestId: string;
  traceApps: SearchTraceAppByNameResponseTraceApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByNameResponseTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageRequest extends $tea.Model {
  traceAppName?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      traceAppName: 'TraceAppName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceAppName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponse extends $tea.Model {
  requestId: string;
  pageBean: SearchTraceAppByPageResponsePageBean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageBean: 'PageBean',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageBean: SearchTraceAppByPageResponsePageBean,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsRequest extends $tea.Model {
  securityToken?: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponse extends $tea.Model {
  requestId: string;
  retcodeApps: ListRetcodeAppsResponseRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      retcodeApps: { 'type': 'array', 'itemType': ListRetcodeAppsResponseRetcodeApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsRequest extends $tea.Model {
  regionId: string;
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

export class ListTraceAppsResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: number;
  message: string;
  traceApps: ListTraceAppsResponseTraceApps[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'number',
      message: 'string',
      traceApps: { 'type': 'array', 'itemType': ListTraceAppsResponseTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
  key: string;
  value: string;
  operator: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions: CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups: CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlertTemplateResponseAlertTemplate extends $tea.Model {
  id: number;
  parentId: number;
  name: string;
  message: string;
  alertProvider: string;
  templateProvider: string;
  type: string;
  labels: { [key: string]: any };
  annotations: { [key: string]: any };
  rule: string;
  userId: string;
  status: boolean;
  public: boolean;
  labelMatchExpressionGrid: CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGrid;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      parentId: 'ParentId',
      name: 'Name',
      message: 'Message',
      alertProvider: 'AlertProvider',
      templateProvider: 'TemplateProvider',
      type: 'Type',
      labels: 'Labels',
      annotations: 'Annotations',
      rule: 'Rule',
      userId: 'UserId',
      status: 'Status',
      public: 'Public',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      parentId: 'number',
      name: 'string',
      message: 'string',
      alertProvider: 'string',
      templateProvider: 'string',
      type: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rule: 'string',
      userId: 'string',
      status: 'boolean',
      public: 'boolean',
      labelMatchExpressionGrid: CreateAlertTemplateResponseAlertTemplateLabelMatchExpressionGrid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
  key: string;
  value: string;
  operator: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions: ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups: ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlertTemplatesResponseAlertTemplates extends $tea.Model {
  id: number;
  parentId: number;
  name: string;
  message: string;
  alertProvider: string;
  templateProvider: string;
  type: string;
  labels: { [key: string]: any };
  annotations: { [key: string]: any };
  rule: string;
  userId: string;
  status: boolean;
  public: boolean;
  labelMatchExpressionGrid: ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGrid;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      parentId: 'ParentId',
      name: 'Name',
      message: 'Message',
      alertProvider: 'AlertProvider',
      templateProvider: 'TemplateProvider',
      type: 'Type',
      labels: 'Labels',
      annotations: 'Annotations',
      rule: 'Rule',
      userId: 'UserId',
      status: 'Status',
      public: 'Public',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      parentId: 'number',
      name: 'string',
      message: 'string',
      alertProvider: 'string',
      templateProvider: 'string',
      type: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rule: 'string',
      userId: 'string',
      status: 'boolean',
      public: 'boolean',
      labelMatchExpressionGrid: ListAlertTemplatesResponseAlertTemplatesLabelMatchExpressionGrid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertRulesResponsePrometheusAlertRulesLabels extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertRulesResponsePrometheusAlertRulesAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertRulesResponsePrometheusAlertRules extends $tea.Model {
  alertId: number;
  alertName: string;
  message: string;
  type: string;
  expression: string;
  duration: string;
  clusterId: string;
  status: number;
  dispatchRuleId: number;
  notifyType: string;
  labels: ListPrometheusAlertRulesResponsePrometheusAlertRulesLabels[];
  annotations: ListPrometheusAlertRulesResponsePrometheusAlertRulesAnnotations[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      message: 'Message',
      type: 'Type',
      expression: 'Expression',
      duration: 'Duration',
      clusterId: 'ClusterId',
      status: 'Status',
      dispatchRuleId: 'DispatchRuleId',
      notifyType: 'NotifyType',
      labels: 'Labels',
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      message: 'string',
      type: 'string',
      expression: 'string',
      duration: 'string',
      clusterId: 'string',
      status: 'number',
      dispatchRuleId: 'number',
      notifyType: 'string',
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponsePrometheusAlertRulesLabels },
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertRulesResponsePrometheusAlertRulesAnnotations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusAlertRuleResponsePrometheusAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class UpdatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class UpdatePrometheusAlertRuleResponsePrometheusAlertRule extends $tea.Model {
  alertId: number;
  alertName: string;
  message: string;
  type: string;
  expression: string;
  duration: string;
  clusterId: string;
  status: number;
  dispatchRuleId: number;
  notifyType: string;
  labels: UpdatePrometheusAlertRuleResponsePrometheusAlertRuleLabels[];
  annotations: UpdatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      message: 'Message',
      type: 'Type',
      expression: 'Expression',
      duration: 'Duration',
      clusterId: 'ClusterId',
      status: 'Status',
      dispatchRuleId: 'DispatchRuleId',
      notifyType: 'NotifyType',
      labels: 'Labels',
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      message: 'string',
      type: 'string',
      expression: 'string',
      duration: 'string',
      clusterId: 'string',
      status: 'number',
      dispatchRuleId: 'number',
      notifyType: 'string',
      labels: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponsePrometheusAlertRuleLabels },
      annotations: { 'type': 'array', 'itemType': UpdatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrometheusAlertRuleResponsePrometheusAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class DescribePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class DescribePrometheusAlertRuleResponsePrometheusAlertRule extends $tea.Model {
  alertId: number;
  alertName: string;
  message: string;
  type: string;
  expression: string;
  duration: string;
  clusterId: string;
  status: number;
  dispatchRuleId: number;
  notifyType: string;
  labels: DescribePrometheusAlertRuleResponsePrometheusAlertRuleLabels[];
  annotations: DescribePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      message: 'Message',
      type: 'Type',
      expression: 'Expression',
      duration: 'Duration',
      clusterId: 'ClusterId',
      status: 'Status',
      dispatchRuleId: 'DispatchRuleId',
      notifyType: 'NotifyType',
      labels: 'Labels',
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      message: 'string',
      type: 'string',
      expression: 'string',
      duration: 'string',
      clusterId: 'string',
      status: 'number',
      dispatchRuleId: 'number',
      notifyType: 'string',
      labels: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponsePrometheusAlertRuleLabels },
      annotations: { 'type': 'array', 'itemType': DescribePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponsePageAlertsDispatchRules extends $tea.Model {
  ruleName: string;
  ruleId: number;
  static names(): { [key: string]: string } {
    return {
      ruleName: 'RuleName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleName: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponsePageAlerts extends $tea.Model {
  alertName: string;
  alertType: string;
  count: number;
  createTime: number;
  endsAt: number;
  expandFields: { [key: string]: any };
  alertId: string;
  integrationName: string;
  integrationType: string;
  involvedObjectKind: string;
  involvedObjectName: string;
  message: string;
  severity: string;
  startsAt: number;
  status: string;
  dispatchRules: ListActivatedAlertsResponsePageAlertsDispatchRules[];
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertType: 'AlertType',
      count: 'Count',
      createTime: 'CreateTime',
      endsAt: 'EndsAt',
      expandFields: 'ExpandFields',
      alertId: 'AlertId',
      integrationName: 'IntegrationName',
      integrationType: 'IntegrationType',
      involvedObjectKind: 'InvolvedObjectKind',
      involvedObjectName: 'InvolvedObjectName',
      message: 'Message',
      severity: 'Severity',
      startsAt: 'StartsAt',
      status: 'Status',
      dispatchRules: 'DispatchRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertType: 'string',
      count: 'number',
      createTime: 'number',
      endsAt: 'number',
      expandFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      alertId: 'string',
      integrationName: 'string',
      integrationType: 'string',
      involvedObjectKind: 'string',
      involvedObjectName: 'string',
      message: 'string',
      severity: 'string',
      startsAt: 'number',
      status: 'string',
      dispatchRules: { 'type': 'array', 'itemType': ListActivatedAlertsResponsePageAlertsDispatchRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActivatedAlertsResponsePage extends $tea.Model {
  page: number;
  pageSize: number;
  total: number;
  alerts: ListActivatedAlertsResponsePageAlerts[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      pageSize: 'PageSize',
      total: 'Total',
      alerts: 'Alerts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pageSize: 'number',
      total: 'number',
      alerts: { 'type': 'array', 'itemType': ListActivatedAlertsResponsePageAlerts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesLabels extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class ListPrometheusAlertTemplatesResponsePrometheusAlertTemplates extends $tea.Model {
  alertName: string;
  description: string;
  type: string;
  expression: string;
  duration: string;
  version: string;
  labels: ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesLabels[];
  annotations: ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesAnnotations[];
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      description: 'Description',
      type: 'Type',
      expression: 'Expression',
      duration: 'Duration',
      version: 'Version',
      labels: 'Labels',
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      description: 'string',
      type: 'string',
      expression: 'string',
      duration: 'string',
      version: 'string',
      labels: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesLabels },
      annotations: { 'type': 'array', 'itemType': ListPrometheusAlertTemplatesResponsePrometheusAlertTemplatesAnnotations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusAlertRuleResponsePrometheusAlertRuleLabels extends $tea.Model {
  name: string;
  value: string;
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

export class CreatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations extends $tea.Model {
  name: string;
  value: string;
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

export class CreatePrometheusAlertRuleResponsePrometheusAlertRule extends $tea.Model {
  alertId: number;
  alertName: string;
  message: string;
  type: string;
  expression: string;
  duration: string;
  clusterId: string;
  status: number;
  dispatchRuleId: number;
  notifyType: string;
  labels: CreatePrometheusAlertRuleResponsePrometheusAlertRuleLabels[];
  annotations: CreatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations[];
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      message: 'Message',
      type: 'Type',
      expression: 'Expression',
      duration: 'Duration',
      clusterId: 'ClusterId',
      status: 'Status',
      dispatchRuleId: 'DispatchRuleId',
      notifyType: 'NotifyType',
      labels: 'Labels',
      annotations: 'Annotations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      message: 'string',
      type: 'string',
      expression: 'string',
      duration: 'string',
      clusterId: 'string',
      status: 'number',
      dispatchRuleId: 'number',
      notifyType: 'string',
      labels: { 'type': 'array', 'itemType': CreatePrometheusAlertRuleResponsePrometheusAlertRuleLabels },
      annotations: { 'type': 'array', 'itemType': CreatePrometheusAlertRuleResponsePrometheusAlertRuleAnnotations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerlessTopNAppsResponseData extends $tea.Model {
  pid: string;
  name: string;
  region: string;
  rt: number;
  count: number;
  error: number;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
      name: 'Name',
      region: 'Region',
      rt: 'Rt',
      count: 'Count',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
      name: 'string',
      region: 'string',
      rt: 'number',
      count: 'number',
      error: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDispatchRuleResponseDispatchRules extends $tea.Model {
  ruleId: number;
  name: string;
  state: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      name: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScenarioResponseArmsScenarios extends $tea.Model {
  id: number;
  createTime: string;
  updateTime: string;
  name: string;
  sign: string;
  userId: string;
  regionId: string;
  appId: string;
  extensions: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      name: 'Name',
      sign: 'Sign',
      userId: 'UserId',
      regionId: 'RegionId',
      appId: 'AppId',
      extensions: 'Extensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      createTime: 'string',
      updateTime: 'string',
      name: 'string',
      sign: 'string',
      userId: 'string',
      regionId: 'string',
      appId: 'string',
      extensions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleGroupRules extends $tea.Model {
  groupId: number;
  groupWaitTime: number;
  groupInterval: number;
  repeatInterval: number;
  groupingFields: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupWaitTime: 'GroupWaitTime',
      groupInterval: 'GroupInterval',
      repeatInterval: 'RepeatInterval',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupWaitTime: 'number',
      groupInterval: 'number',
      repeatInterval: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleNotifyRulesNotifyObjects extends $tea.Model {
  notifyType: string;
  name: string;
  notifyObjectId: string;
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      name: 'Name',
      notifyObjectId: 'NotifyObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'string',
      name: 'string',
      notifyObjectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleNotifyRules extends $tea.Model {
  notifyObjects: DescribeDispatchRuleResponseDispatchRuleNotifyRulesNotifyObjects[];
  notifyChannels: string[];
  static names(): { [key: string]: string } {
    return {
      notifyObjects: 'NotifyObjects',
      notifyChannels: 'NotifyChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyObjects: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleNotifyRulesNotifyObjects },
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $tea.Model {
  key: string;
  value: string;
  operator: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups extends $tea.Model {
  labelMatchExpressions: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGrid extends $tea.Model {
  labelMatchExpressionGroups: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseDispatchRule extends $tea.Model {
  ruleId: number;
  name: string;
  state: string;
  dispatchType: string;
  isRecover: boolean;
  groupRules: DescribeDispatchRuleResponseDispatchRuleGroupRules[];
  notifyRules: DescribeDispatchRuleResponseDispatchRuleNotifyRules[];
  labelMatchExpressionGrid: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGrid;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      name: 'Name',
      state: 'State',
      dispatchType: 'DispatchType',
      isRecover: 'IsRecover',
      groupRules: 'GroupRules',
      notifyRules: 'NotifyRules',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      name: 'string',
      state: 'string',
      dispatchType: 'string',
      isRecover: 'boolean',
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleGroupRules },
      notifyRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseDispatchRuleNotifyRules },
      labelMatchExpressionGrid: DescribeDispatchRuleResponseDispatchRuleLabelMatchExpressionGrid,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveTraceAppConfigRequestSettings extends $tea.Model {
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

export class GetAppApiByPageResponseData extends $tea.Model {
  total: string;
  page: number;
  pageSize: number;
  items: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      page: 'Page',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'string',
      page: 'number',
      pageSize: 'number',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricByPageRequestFilters extends $tea.Model {
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

export class QueryMetricByPageResponseData extends $tea.Model {
  total: number;
  page: number;
  pageSize: number;
  items: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      page: 'Page',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      page: 'number',
      pageSize: 'number',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceAppResponseTraceApp extends $tea.Model {
  appId: number;
  pid: string;
  appName: string;
  type: string;
  userId: string;
  regionId: string;
  createTime: number;
  updateTime: number;
  show: boolean;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      appName: 'AppName',
      type: 'Type',
      userId: 'UserId',
      regionId: 'RegionId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      show: 'Show',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      appName: 'string',
      type: 'string',
      userId: 'string',
      regionId: 'string',
      createTime: 'number',
      updateTime: 'number',
      show: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseMultiCallChainInfosSpansTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetMultipleTraceResponseMultiCallChainInfosSpansLogEventListTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetMultipleTraceResponseMultiCallChainInfosSpansLogEventList extends $tea.Model {
  timestamp: number;
  tagEntryList: GetMultipleTraceResponseMultiCallChainInfosSpansLogEventListTagEntryList[];
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      tagEntryList: 'TagEntryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpansLogEventListTagEntryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseMultiCallChainInfosSpans extends $tea.Model {
  traceID: string;
  operationName: string;
  duration: number;
  serviceName: string;
  serviceIp: string;
  timestamp: number;
  rpcId: string;
  resultCode: string;
  haveStack: boolean;
  rpcType: number;
  spanId: string;
  parentSpanId: string;
  tagEntryList: GetMultipleTraceResponseMultiCallChainInfosSpansTagEntryList[];
  logEventList: GetMultipleTraceResponseMultiCallChainInfosSpansLogEventList[];
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      operationName: 'OperationName',
      duration: 'Duration',
      serviceName: 'ServiceName',
      serviceIp: 'ServiceIp',
      timestamp: 'Timestamp',
      rpcId: 'RpcId',
      resultCode: 'ResultCode',
      haveStack: 'HaveStack',
      rpcType: 'RpcType',
      spanId: 'SpanId',
      parentSpanId: 'ParentSpanId',
      tagEntryList: 'TagEntryList',
      logEventList: 'LogEventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      operationName: 'string',
      duration: 'number',
      serviceName: 'string',
      serviceIp: 'string',
      timestamp: 'number',
      rpcId: 'string',
      resultCode: 'string',
      haveStack: 'boolean',
      rpcType: 'number',
      spanId: 'string',
      parentSpanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpansTagEntryList },
      logEventList: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpansLogEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipleTraceResponseMultiCallChainInfos extends $tea.Model {
  traceID: string;
  spans: GetMultipleTraceResponseMultiCallChainInfosSpans[];
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      spans: 'Spans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      spans: { 'type': 'array', 'itemType': GetMultipleTraceResponseMultiCallChainInfosSpans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageRequestExclusionFilters extends $tea.Model {
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

export class SearchTracesByPageResponsePageBeanTraceInfos extends $tea.Model {
  traceID: string;
  operationName: string;
  serviceName: string;
  serviceIp: string;
  duration: number;
  timestamp: number;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      operationName: 'OperationName',
      serviceName: 'ServiceName',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      operationName: 'string',
      serviceName: 'string',
      serviceIp: 'string',
      duration: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesByPageResponsePageBean extends $tea.Model {
  total: number;
  pageNumber: number;
  pageSize: number;
  traceInfos: SearchTracesByPageResponsePageBeanTraceInfos[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      traceInfos: 'TraceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      traceInfos: { 'type': 'array', 'itemType': SearchTracesByPageResponsePageBeanTraceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseStackInfoExtInfo extends $tea.Model {
  type: string;
  info: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      info: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseStackInfo extends $tea.Model {
  startTime: number;
  duration: number;
  rpcId: string;
  serviceName: string;
  api: string;
  exception: string;
  line: string;
  extInfo: GetStackResponseStackInfoExtInfo;
  static names(): { [key: string]: string } {
    return {
      startTime: 'StartTime',
      duration: 'Duration',
      rpcId: 'RpcId',
      serviceName: 'ServiceName',
      api: 'Api',
      exception: 'Exception',
      line: 'Line',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'number',
      duration: 'number',
      rpcId: 'string',
      serviceName: 'string',
      api: 'string',
      exception: 'string',
      line: 'string',
      extInfo: GetStackResponseStackInfoExtInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTraceLocationResponseRegionConfigs extends $tea.Model {
  regionNo: string;
  url: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForDeletingResponseRoleUsages extends $tea.Model {
  region: string;
  resources: string[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDashboardsResponseDashboardVos extends $tea.Model {
  id: string;
  uid: string;
  title: string;
  time: string;
  url: string;
  type: string;
  exporter: string;
  isArmsExporter: boolean;
  name: string;
  version: string;
  dashboardType: string;
  kind: string;
  needUpdate: boolean;
  httpUrl: string;
  httpsUrl: string;
  tags: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      uid: 'Uid',
      title: 'Title',
      time: 'Time',
      url: 'Url',
      type: 'Type',
      exporter: 'Exporter',
      isArmsExporter: 'IsArmsExporter',
      name: 'Name',
      version: 'Version',
      dashboardType: 'DashboardType',
      kind: 'Kind',
      needUpdate: 'NeedUpdate',
      httpUrl: 'HttpUrl',
      httpsUrl: 'HttpsUrl',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      uid: 'string',
      title: 'string',
      time: 'string',
      url: 'string',
      type: 'string',
      exporter: 'string',
      isArmsExporter: 'boolean',
      name: 'string',
      version: 'string',
      dashboardType: 'string',
      kind: 'string',
      needUpdate: 'boolean',
      httpUrl: 'string',
      httpsUrl: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseSpansTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetTraceResponseSpansLogEventListTagEntryList extends $tea.Model {
  key: string;
  value: string;
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

export class GetTraceResponseSpansLogEventList extends $tea.Model {
  timestamp: number;
  tagEntryList: GetTraceResponseSpansLogEventListTagEntryList[];
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      tagEntryList: 'TagEntryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseSpansLogEventListTagEntryList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseSpans extends $tea.Model {
  traceID: string;
  operationName: string;
  duration: number;
  serviceName: string;
  serviceIp: string;
  timestamp: number;
  rpcId: string;
  resultCode: string;
  haveStack: boolean;
  rpcType: number;
  spanId: string;
  parentSpanId: string;
  tagEntryList: GetTraceResponseSpansTagEntryList[];
  logEventList: GetTraceResponseSpansLogEventList[];
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      operationName: 'OperationName',
      duration: 'Duration',
      serviceName: 'ServiceName',
      serviceIp: 'ServiceIp',
      timestamp: 'Timestamp',
      rpcId: 'RpcId',
      resultCode: 'ResultCode',
      haveStack: 'HaveStack',
      rpcType: 'RpcType',
      spanId: 'SpanId',
      parentSpanId: 'ParentSpanId',
      tagEntryList: 'TagEntryList',
      logEventList: 'LogEventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      operationName: 'string',
      duration: 'number',
      serviceName: 'string',
      serviceIp: 'string',
      timestamp: 'number',
      rpcId: 'string',
      resultCode: 'string',
      haveStack: 'boolean',
      rpcType: 'number',
      spanId: 'string',
      parentSpanId: 'string',
      tagEntryList: { 'type': 'array', 'itemType': GetTraceResponseSpansTagEntryList },
      logEventList: { 'type': 'array', 'itemType': GetTraceResponseSpansLogEventList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterFromGrafanaResponsePromClusterList extends $tea.Model {
  id: number;
  clusterId: string;
  clusterName: string;
  agentStatus: string;
  clusterType: string;
  controllerId: string;
  isControllerInstalled: boolean;
  userId: string;
  regionId: string;
  pluginsJsonArray: string;
  stateJson: string;
  nodeNum: number;
  createTime: number;
  updateTime: number;
  lastHeartBeatTime: number;
  installTime: number;
  extra: string;
  options: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      agentStatus: 'AgentStatus',
      clusterType: 'ClusterType',
      controllerId: 'ControllerId',
      isControllerInstalled: 'IsControllerInstalled',
      userId: 'UserId',
      regionId: 'RegionId',
      pluginsJsonArray: 'PluginsJsonArray',
      stateJson: 'StateJson',
      nodeNum: 'NodeNum',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      lastHeartBeatTime: 'LastHeartBeatTime',
      installTime: 'InstallTime',
      extra: 'Extra',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      clusterId: 'string',
      clusterName: 'string',
      agentStatus: 'string',
      clusterType: 'string',
      controllerId: 'string',
      isControllerInstalled: 'boolean',
      userId: 'string',
      regionId: 'string',
      pluginsJsonArray: 'string',
      stateJson: 'string',
      nodeNum: 'number',
      createTime: 'number',
      updateTime: 'number',
      lastHeartBeatTime: 'number',
      installTime: 'number',
      extra: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTracesRequestTag extends $tea.Model {
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

export class SearchTracesRequestExclusionFilters extends $tea.Model {
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

export class SearchTracesResponseTraceInfos extends $tea.Model {
  traceID: string;
  operationName: string;
  serviceName: string;
  serviceIp: string;
  duration: number;
  timestamp: number;
  static names(): { [key: string]: string } {
    return {
      traceID: 'TraceID',
      operationName: 'OperationName',
      serviceName: 'ServiceName',
      serviceIp: 'ServiceIp',
      duration: 'Duration',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceID: 'string',
      operationName: 'string',
      serviceName: 'string',
      serviceIp: 'string',
      duration: 'number',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPromClustersResponsePromClusterList extends $tea.Model {
  id: number;
  clusterId: string;
  clusterName: string;
  agentStatus: string;
  clusterType: string;
  controllerId: string;
  isControllerInstalled: boolean;
  userId: string;
  regionId: string;
  pluginsJsonArray: string;
  stateJson: string;
  nodeNum: number;
  createTime: number;
  updateTime: number;
  lastHeartBeatTime: number;
  installTime: number;
  extra: string;
  options: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      agentStatus: 'AgentStatus',
      clusterType: 'ClusterType',
      controllerId: 'ControllerId',
      isControllerInstalled: 'IsControllerInstalled',
      userId: 'UserId',
      regionId: 'RegionId',
      pluginsJsonArray: 'PluginsJsonArray',
      stateJson: 'StateJson',
      nodeNum: 'NodeNum',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      lastHeartBeatTime: 'LastHeartBeatTime',
      installTime: 'InstallTime',
      extra: 'Extra',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      clusterId: 'string',
      clusterName: 'string',
      agentStatus: 'string',
      clusterType: 'string',
      controllerId: 'string',
      isControllerInstalled: 'boolean',
      userId: 'string',
      regionId: 'string',
      pluginsJsonArray: 'string',
      stateJson: 'string',
      nodeNum: 'number',
      createTime: 'number',
      updateTime: 'number',
      lastHeartBeatTime: 'number',
      installTime: 'number',
      extra: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponsePageBeanEvent extends $tea.Model {
  id: number;
  eventTime: number;
  alertType: number;
  eventLevel: string;
  message: string;
  alertId: number;
  alertName: string;
  alertRule: string;
  links: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      eventTime: 'EventTime',
      alertType: 'AlertType',
      eventLevel: 'EventLevel',
      message: 'Message',
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRule: 'AlertRule',
      links: 'Links',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      eventTime: 'number',
      alertType: 'number',
      eventLevel: 'string',
      message: 'string',
      alertId: 'number',
      alertName: 'string',
      alertRule: 'string',
      links: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponsePageBean extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  event: SearchEventsResponsePageBeanEvent[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      event: 'Event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      event: { 'type': 'array', 'itemType': SearchEventsResponsePageBeanEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponsePageBeanAlarmHistories extends $tea.Model {
  id: number;
  strategyId: string;
  userId: string;
  target: string;
  phones: string;
  emails: string;
  alarmTime: number;
  alarmType: number;
  alarmResponseCode: number;
  alarmContent: string;
  alarmSources: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      strategyId: 'StrategyId',
      userId: 'UserId',
      target: 'Target',
      phones: 'Phones',
      emails: 'Emails',
      alarmTime: 'AlarmTime',
      alarmType: 'AlarmType',
      alarmResponseCode: 'AlarmResponseCode',
      alarmContent: 'AlarmContent',
      alarmSources: 'AlarmSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      strategyId: 'string',
      userId: 'string',
      target: 'string',
      phones: 'string',
      emails: 'string',
      alarmTime: 'number',
      alarmType: 'number',
      alarmResponseCode: 'number',
      alarmContent: 'string',
      alarmSources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertHistoriesResponsePageBean extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  alarmHistories: SearchAlertHistoriesResponsePageBeanAlarmHistories[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      alarmHistories: 'AlarmHistories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      alarmHistories: { 'type': 'array', 'itemType': SearchAlertHistoriesResponsePageBeanAlarmHistories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesAlarmContext extends $tea.Model {
  alarmContentTemplate: string;
  alarmContentSubTitle: string;
  content: string;
  subTitle: string;
  static names(): { [key: string]: string } {
    return {
      alarmContentTemplate: 'AlarmContentTemplate',
      alarmContentSubTitle: 'AlarmContentSubTitle',
      content: 'Content',
      subTitle: 'SubTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContentTemplate: 'string',
      alarmContentSubTitle: 'string',
      content: 'string',
      subTitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesAlertRuleRules extends $tea.Model {
  aggregates: string;
  alias: string;
  measure: string;
  NValue: number;
  operator: string;
  value: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesAlertRule extends $tea.Model {
  operator: string;
  rules: SearchAlertRulesResponsePageBeanAlertRulesAlertRuleRules[];
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      rules: { 'type': 'array', 'itemType': SearchAlertRulesResponsePageBeanAlertRulesAlertRuleRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesMetricParamDimensions extends $tea.Model {
  key: string;
  type: string;
  value: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesMetricParam extends $tea.Model {
  appGroupId: string;
  appId: string;
  pid: string;
  type: string;
  dimensions: SearchAlertRulesResponsePageBeanAlertRulesMetricParamDimensions[];
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appId: 'AppId',
      pid: 'Pid',
      type: 'Type',
      dimensions: 'Dimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appId: 'string',
      pid: 'string',
      type: 'string',
      dimensions: { 'type': 'array', 'itemType': SearchAlertRulesResponsePageBeanAlertRulesMetricParamDimensions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRulesNotice extends $tea.Model {
  endTime: number;
  noticeEndTime: number;
  noticeStartTime: number;
  startTime: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBeanAlertRules extends $tea.Model {
  alertTitle: string;
  alertLevel: string;
  alertType: number;
  alertVersion: number;
  config: string;
  contactGroupIdList: string;
  createTime: number;
  id: number;
  regionId: string;
  status: string;
  taskId: number;
  taskStatus: string;
  updateTime: number;
  userId: string;
  title: string;
  contactGroupIds: string;
  hostByAlertManager: boolean;
  alarmContext: SearchAlertRulesResponsePageBeanAlertRulesAlarmContext;
  alertRule: SearchAlertRulesResponsePageBeanAlertRulesAlertRule;
  metricParam: SearchAlertRulesResponsePageBeanAlertRulesMetricParam;
  notice: SearchAlertRulesResponsePageBeanAlertRulesNotice;
  alertWays: string[];
  alertWay: string[];
  static names(): { [key: string]: string } {
    return {
      alertTitle: 'AlertTitle',
      alertLevel: 'AlertLevel',
      alertType: 'AlertType',
      alertVersion: 'AlertVersion',
      config: 'Config',
      contactGroupIdList: 'ContactGroupIdList',
      createTime: 'CreateTime',
      id: 'Id',
      regionId: 'RegionId',
      status: 'Status',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      title: 'Title',
      contactGroupIds: 'ContactGroupIds',
      hostByAlertManager: 'HostByAlertManager',
      alarmContext: 'AlarmContext',
      alertRule: 'AlertRule',
      metricParam: 'MetricParam',
      notice: 'Notice',
      alertWays: 'AlertWays',
      alertWay: 'AlertWay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTitle: 'string',
      alertLevel: 'string',
      alertType: 'number',
      alertVersion: 'number',
      config: 'string',
      contactGroupIdList: 'string',
      createTime: 'number',
      id: 'number',
      regionId: 'string',
      status: 'string',
      taskId: 'number',
      taskStatus: 'string',
      updateTime: 'number',
      userId: 'string',
      title: 'string',
      contactGroupIds: 'string',
      hostByAlertManager: 'boolean',
      alarmContext: SearchAlertRulesResponsePageBeanAlertRulesAlarmContext,
      alertRule: SearchAlertRulesResponsePageBeanAlertRulesAlertRule,
      metricParam: SearchAlertRulesResponsePageBeanAlertRulesMetricParam,
      notice: SearchAlertRulesResponsePageBeanAlertRulesNotice,
      alertWays: { 'type': 'array', 'itemType': 'string' },
      alertWay: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertRulesResponsePageBean extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  alertRules: SearchAlertRulesResponsePageBeanAlertRules[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      alertRules: 'AlertRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      alertRules: { 'type': 'array', 'itemType': SearchAlertRulesResponsePageBeanAlertRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRetcodeAppResponseRetcodeAppDataBean extends $tea.Model {
  appId: number;
  pid: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequestDimensions extends $tea.Model {
  key?: string;
  value?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequestRequiredDims extends $tea.Model {
  key?: string;
  value?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatasetRequestOptionalDims extends $tea.Model {
  key?: string;
  value?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMetricRequestFilters extends $tea.Model {
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

export class SearchAlertContactResponsePageBeanContacts extends $tea.Model {
  contactId: number;
  contactName: string;
  phone: string;
  email: string;
  userId: string;
  dingRobot: string;
  createTime: number;
  updateTime: number;
  systemNoc: boolean;
  webhook: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      phone: 'Phone',
      email: 'Email',
      userId: 'UserId',
      dingRobot: 'DingRobot',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      systemNoc: 'SystemNoc',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      phone: 'string',
      email: 'string',
      userId: 'string',
      dingRobot: 'string',
      createTime: 'number',
      updateTime: 'number',
      systemNoc: 'boolean',
      webhook: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponsePageBean extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  contacts: SearchAlertContactResponsePageBeanContacts[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      contacts: 'Contacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactResponsePageBeanContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseContactGroupsContacts extends $tea.Model {
  contactId: number;
  contactName: string;
  phone: string;
  email: string;
  userId: string;
  dingRobot: string;
  createTime: number;
  updateTime: number;
  systemNoc: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      phone: 'Phone',
      email: 'Email',
      userId: 'UserId',
      dingRobot: 'DingRobot',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      systemNoc: 'SystemNoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      phone: 'string',
      email: 'string',
      userId: 'string',
      dingRobot: 'string',
      createTime: 'number',
      updateTime: 'number',
      systemNoc: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseContactGroups extends $tea.Model {
  contactGroupId: number;
  contactGroupName: string;
  userId: string;
  createTime: number;
  updateTime: number;
  contacts: SearchAlertContactGroupResponseContactGroupsContacts[];
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      userId: 'UserId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      contacts: 'Contacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      userId: 'string',
      createTime: 'number',
      updateTime: 'number',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseContactGroupsContacts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponsePageBeanRetcodeApps extends $tea.Model {
  appId: number;
  pid: string;
  appName: string;
  type: string;
  userId: string;
  regionId: string;
  createTime: number;
  updateTime: number;
  retcodeAppType: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      appName: 'AppName',
      type: 'Type',
      userId: 'UserId',
      regionId: 'RegionId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      retcodeAppType: 'RetcodeAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      appName: 'string',
      type: 'string',
      userId: 'string',
      regionId: 'string',
      createTime: 'number',
      updateTime: 'number',
      retcodeAppType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponsePageBean extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  retcodeApps: SearchRetcodeAppByPageResponsePageBeanRetcodeApps[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      retcodeApps: 'RetcodeApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      retcodeApps: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponsePageBeanRetcodeApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByNameResponseTraceApps extends $tea.Model {
  appId: number;
  pid: string;
  appName: string;
  type: string;
  userId: string;
  regionId: string;
  createTime: number;
  updateTime: number;
  show: boolean;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      appName: 'AppName',
      type: 'Type',
      userId: 'UserId',
      regionId: 'RegionId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      show: 'Show',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      appName: 'string',
      type: 'string',
      userId: 'string',
      regionId: 'string',
      createTime: 'number',
      updateTime: 'number',
      show: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponsePageBeanTraceApps extends $tea.Model {
  appId: number;
  pid: string;
  appName: string;
  type: string;
  userId: string;
  regionId: string;
  createTime: number;
  updateTime: number;
  show: boolean;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      appName: 'AppName',
      type: 'Type',
      userId: 'UserId',
      regionId: 'RegionId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      show: 'Show',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      appName: 'string',
      type: 'string',
      userId: 'string',
      regionId: 'string',
      createTime: 'number',
      updateTime: 'number',
      show: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTraceAppByPageResponsePageBean extends $tea.Model {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  traceApps: SearchTraceAppByPageResponsePageBeanTraceApps[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      traceApps: 'TraceApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      traceApps: { 'type': 'array', 'itemType': SearchTraceAppByPageResponsePageBeanTraceApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRetcodeAppsResponseRetcodeApps extends $tea.Model {
  appId: number;
  pid: string;
  appName: string;
  retcodeAppType: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      appName: 'AppName',
      retcodeAppType: 'RetcodeAppType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      appName: 'string',
      retcodeAppType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTraceAppsResponseTraceApps extends $tea.Model {
  appId: number;
  pid: string;
  appName: string;
  type: string;
  userId: string;
  createTime: number;
  updateTime: number;
  regionId: string;
  show: boolean;
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pid: 'Pid',
      appName: 'AppName',
      type: 'Type',
      userId: 'UserId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      regionId: 'RegionId',
      show: 'Show',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      pid: 'string',
      appName: 'string',
      type: 'string',
      userId: 'string',
      createTime: 'number',
      updateTime: 'number',
      regionId: 'string',
      show: 'boolean',
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "arms.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "arms.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "arms.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "arms.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "arms.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "arms.aliyuncs.com",
      'cn-huhehaote': "arms.aliyuncs.com",
      'eu-central-1': "arms.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "arms.ap-southeast-1.aliyuncs.com",
      'me-east-1': "arms.ap-southeast-1.aliyuncs.com",
      'us-east-1': "arms.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "arms.aliyuncs.com",
      'cn-shenzhen-finance-1': "arms.aliyuncs.com",
      'cn-shanghai-finance-1': "arms.aliyuncs.com",
      'cn-north-2-gov-1': "arms.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("arms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getExploreUrlWithOptions(request: GetExploreUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetExploreUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetExploreUrlResponse>(await this.doRequest("GetExploreUrl", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetExploreUrlResponse({}));
  }

  async getExploreUrl(request: GetExploreUrlRequest): Promise<GetExploreUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExploreUrlWithOptions(request, runtime);
  }

  async getArmsConsoleUrlWithOptions(request: GetArmsConsoleUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetArmsConsoleUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetArmsConsoleUrlResponse>(await this.doRequest("GetArmsConsoleUrl", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new GetArmsConsoleUrlResponse({}));
  }

  async getArmsConsoleUrl(request: GetArmsConsoleUrlRequest): Promise<GetArmsConsoleUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getArmsConsoleUrlWithOptions(request, runtime);
  }

  async openArmsServiceSecondVersionWithOptions(request: OpenArmsServiceSecondVersionRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceSecondVersionResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenArmsServiceSecondVersionResponse>(await this.doRequest("OpenArmsServiceSecondVersion", "HTTPS", "POST", "2019-08-08", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new OpenArmsServiceSecondVersionResponse({}));
  }

  async openArmsServiceSecondVersion(request: OpenArmsServiceSecondVersionRequest): Promise<OpenArmsServiceSecondVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceSecondVersionWithOptions(request, runtime);
  }

  async createWebhookWithOptions(request: CreateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<CreateWebhookResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWebhookResponse>(await this.doRequest("CreateWebhook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateWebhookResponse({}));
  }

  async createWebhook(request: CreateWebhookRequest): Promise<CreateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWebhookWithOptions(request, runtime);
  }

  async enableAlertTemplateWithOptions(request: EnableAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<EnableAlertTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<EnableAlertTemplateResponse>(await this.doRequest("EnableAlertTemplate", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new EnableAlertTemplateResponse({}));
  }

  async enableAlertTemplate(request: EnableAlertTemplateRequest): Promise<EnableAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableAlertTemplateWithOptions(request, runtime);
  }

  async createAlertTemplateWithOptions(request: CreateAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAlertTemplateResponse>(await this.doRequest("CreateAlertTemplate", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateAlertTemplateResponse({}));
  }

  async createAlertTemplate(request: CreateAlertTemplateRequest): Promise<CreateAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertTemplateWithOptions(request, runtime);
  }

  async listAlertTemplatesWithOptions(request: ListAlertTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAlertTemplatesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListAlertTemplatesResponse>(await this.doRequest("ListAlertTemplates", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListAlertTemplatesResponse({}));
  }

  async listAlertTemplates(request: ListAlertTemplatesRequest): Promise<ListAlertTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAlertTemplatesWithOptions(request, runtime);
  }

  async updateAlertTemplateWithOptions(request: UpdateAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertTemplateResponse>(await this.doRequest("UpdateAlertTemplate", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertTemplateResponse({}));
  }

  async updateAlertTemplate(request: UpdateAlertTemplateRequest): Promise<UpdateAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertTemplateWithOptions(request, runtime);
  }

  async deleteAlertTemplateWithOptions(request: DeleteAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertTemplateResponse>(await this.doRequest("DeleteAlertTemplate", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertTemplateResponse({}));
  }

  async deleteAlertTemplate(request: DeleteAlertTemplateRequest): Promise<DeleteAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertTemplateWithOptions(request, runtime);
  }

  async disableAlertTemplateWithOptions(request: DisableAlertTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DisableAlertTemplateResponse> {
    Util.validateModel(request);
    return $tea.cast<DisableAlertTemplateResponse>(await this.doRequest("DisableAlertTemplate", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DisableAlertTemplateResponse({}));
  }

  async disableAlertTemplate(request: DisableAlertTemplateRequest): Promise<DisableAlertTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableAlertTemplateWithOptions(request, runtime);
  }

  async deleteGrafanaResourceWithOptions(request: DeleteGrafanaResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGrafanaResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteGrafanaResourceResponse>(await this.doRequest("DeleteGrafanaResource", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteGrafanaResourceResponse({}));
  }

  async deleteGrafanaResource(request: DeleteGrafanaResourceRequest): Promise<DeleteGrafanaResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGrafanaResourceWithOptions(request, runtime);
  }

  async listPrometheusAlertRulesWithOptions(request: ListPrometheusAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPrometheusAlertRulesResponse>(await this.doRequest("ListPrometheusAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListPrometheusAlertRulesResponse({}));
  }

  async listPrometheusAlertRules(request: ListPrometheusAlertRulesRequest): Promise<ListPrometheusAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusAlertRulesWithOptions(request, runtime);
  }

  async updatePrometheusAlertRuleWithOptions(request: UpdatePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdatePrometheusAlertRuleResponse>(await this.doRequest("UpdatePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdatePrometheusAlertRuleResponse({}));
  }

  async updatePrometheusAlertRule(request: UpdatePrometheusAlertRuleRequest): Promise<UpdatePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrometheusAlertRuleWithOptions(request, runtime);
  }

  async describePrometheusAlertRuleWithOptions(request: DescribePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePrometheusAlertRuleResponse>(await this.doRequest("DescribePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribePrometheusAlertRuleResponse({}));
  }

  async describePrometheusAlertRule(request: DescribePrometheusAlertRuleRequest): Promise<DescribePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePrometheusAlertRuleWithOptions(request, runtime);
  }

  async listActivatedAlertsWithOptions(request: ListActivatedAlertsRequest, runtime: $Util.RuntimeOptions): Promise<ListActivatedAlertsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListActivatedAlertsResponse>(await this.doRequest("ListActivatedAlerts", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListActivatedAlertsResponse({}));
  }

  async listActivatedAlerts(request: ListActivatedAlertsRequest): Promise<ListActivatedAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActivatedAlertsWithOptions(request, runtime);
  }

  async listPrometheusAlertTemplatesWithOptions(request: ListPrometheusAlertTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrometheusAlertTemplatesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPrometheusAlertTemplatesResponse>(await this.doRequest("ListPrometheusAlertTemplates", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListPrometheusAlertTemplatesResponse({}));
  }

  async listPrometheusAlertTemplates(request: ListPrometheusAlertTemplatesRequest): Promise<ListPrometheusAlertTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrometheusAlertTemplatesWithOptions(request, runtime);
  }

  async createPrometheusAlertRuleWithOptions(request: CreatePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePrometheusAlertRuleResponse>(await this.doRequest("CreatePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreatePrometheusAlertRuleResponse({}));
  }

  async createPrometheusAlertRule(request: CreatePrometheusAlertRuleRequest): Promise<CreatePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrometheusAlertRuleWithOptions(request, runtime);
  }

  async deletePrometheusAlertRuleWithOptions(request: DeletePrometheusAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrometheusAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePrometheusAlertRuleResponse>(await this.doRequest("DeletePrometheusAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeletePrometheusAlertRuleResponse({}));
  }

  async deletePrometheusAlertRule(request: DeletePrometheusAlertRuleRequest): Promise<DeletePrometheusAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrometheusAlertRuleWithOptions(request, runtime);
  }

  async openXtraceDefaultSLRWithOptions(request: OpenXtraceDefaultSLRRequest, runtime: $Util.RuntimeOptions): Promise<OpenXtraceDefaultSLRResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenXtraceDefaultSLRResponse>(await this.doRequest("OpenXtraceDefaultSLR", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new OpenXtraceDefaultSLRResponse({}));
  }

  async openXtraceDefaultSLR(request: OpenXtraceDefaultSLRRequest): Promise<OpenXtraceDefaultSLRResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openXtraceDefaultSLRWithOptions(request, runtime);
  }

  async openArmsDefaultSLRWithOptions(request: OpenArmsDefaultSLRRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsDefaultSLRResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenArmsDefaultSLRResponse>(await this.doRequest("OpenArmsDefaultSLR", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new OpenArmsDefaultSLRResponse({}));
  }

  async openArmsDefaultSLR(request: OpenArmsDefaultSLRRequest): Promise<OpenArmsDefaultSLRResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsDefaultSLRWithOptions(request, runtime);
  }

  async listServerlessTopNAppsWithOptions(request: ListServerlessTopNAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListServerlessTopNAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListServerlessTopNAppsResponse>(await this.doRequest("ListServerlessTopNApps", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListServerlessTopNAppsResponse({}));
  }

  async listServerlessTopNApps(request: ListServerlessTopNAppsRequest): Promise<ListServerlessTopNAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerlessTopNAppsWithOptions(request, runtime);
  }

  async openVClusterWithOptions(request: OpenVClusterRequest, runtime: $Util.RuntimeOptions): Promise<OpenVClusterResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenVClusterResponse>(await this.doRequest("OpenVCluster", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new OpenVClusterResponse({}));
  }

  async openVCluster(request: OpenVClusterRequest): Promise<OpenVClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openVClusterWithOptions(request, runtime);
  }

  async checkServiceStatusWithOptions(request: CheckServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckServiceStatusResponse>(await this.doRequest("CheckServiceStatus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CheckServiceStatusResponse({}));
  }

  async checkServiceStatus(request: CheckServiceStatusRequest): Promise<CheckServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceStatusWithOptions(request, runtime);
  }

  async listDispatchRuleWithOptions(request: ListDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<ListDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDispatchRuleResponse>(await this.doRequest("ListDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListDispatchRuleResponse({}));
  }

  async listDispatchRule(request: ListDispatchRuleRequest): Promise<ListDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDispatchRuleWithOptions(request, runtime);
  }

  async getAgentDownloadUrlWithOptions(request: GetAgentDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetAgentDownloadUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAgentDownloadUrlResponse>(await this.doRequest("GetAgentDownloadUrl", "HTTPS", "GET", "2019-08-08", "AK", $tea.toMap(request), null, runtime), new GetAgentDownloadUrlResponse({}));
  }

  async getAgentDownloadUrl(request: GetAgentDownloadUrlRequest): Promise<GetAgentDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAgentDownloadUrlWithOptions(request, runtime);
  }

  async listScenarioWithOptions(request: ListScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ListScenarioResponse> {
    Util.validateModel(request);
    return $tea.cast<ListScenarioResponse>(await this.doRequest("ListScenario", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListScenarioResponse({}));
  }

  async listScenario(request: ListScenarioRequest): Promise<ListScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScenarioWithOptions(request, runtime);
  }

  async deleteScenarioWithOptions(request: DeleteScenarioRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScenarioResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteScenarioResponse>(await this.doRequest("DeleteScenario", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteScenarioResponse({}));
  }

  async deleteScenario(request: DeleteScenarioRequest): Promise<DeleteScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  async applyScenarioWithOptions(tmp: ApplyScenarioRequest, runtime: $Util.RuntimeOptions): Promise<ApplyScenarioResponse> {
    Util.validateModel(tmp);
    let request = new ApplyScenarioShrinkRequest({ });
    RPCUtil.convert(tmp, request);
    if (!Util.isUnset(tmp.config)) {
      request.configShrink = Util.toJSONString(tmp.config);
    }

    return $tea.cast<ApplyScenarioResponse>(await this.doRequest("ApplyScenario", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ApplyScenarioResponse({}));
  }

  async applyScenario(request: ApplyScenarioRequest): Promise<ApplyScenarioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyScenarioWithOptions(request, runtime);
  }

  async openArmsServiceWithOptions(request: OpenArmsServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenArmsServiceResponse> {
    Util.validateModel(request);
    return $tea.cast<OpenArmsServiceResponse>(await this.doRequest("OpenArmsService", "HTTPS", "POST", "2019-08-08", "AK,APP,PrivateKey,BearerToken", null, $tea.toMap(request), runtime), new OpenArmsServiceResponse({}));
  }

  async openArmsService(request: OpenArmsServiceRequest): Promise<OpenArmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openArmsServiceWithOptions(request, runtime);
  }

  async getIntegrationTokenWithOptions(request: GetIntegrationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetIntegrationTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<GetIntegrationTokenResponse>(await this.doRequest("GetIntegrationToken", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetIntegrationTokenResponse({}));
  }

  async getIntegrationToken(request: GetIntegrationTokenRequest): Promise<GetIntegrationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntegrationTokenWithOptions(request, runtime);
  }

  async sendCustomIncidentsWithOptions(request: SendCustomIncidentsRequest, runtime: $Util.RuntimeOptions): Promise<SendCustomIncidentsResponse> {
    Util.validateModel(request);
    return $tea.cast<SendCustomIncidentsResponse>(await this.doRequest("SendCustomIncidents", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SendCustomIncidentsResponse({}));
  }

  async sendCustomIncidents(request: SendCustomIncidentsRequest): Promise<SendCustomIncidentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendCustomIncidentsWithOptions(request, runtime);
  }

  async describeDispatchRuleWithOptions(request: DescribeDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDispatchRuleResponse>(await this.doRequest("DescribeDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeDispatchRuleResponse({}));
  }

  async describeDispatchRule(request: DescribeDispatchRuleRequest): Promise<DescribeDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDispatchRuleWithOptions(request, runtime);
  }

  async deleteDispatchRuleWithOptions(request: DeleteDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDispatchRuleResponse>(await this.doRequest("DeleteDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteDispatchRuleResponse({}));
  }

  async deleteDispatchRule(request: DeleteDispatchRuleRequest): Promise<DeleteDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDispatchRuleWithOptions(request, runtime);
  }

  async updateDispatchRuleWithOptions(request: UpdateDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateDispatchRuleResponse>(await this.doRequest("UpdateDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateDispatchRuleResponse({}));
  }

  async updateDispatchRule(request: UpdateDispatchRuleRequest): Promise<UpdateDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDispatchRuleWithOptions(request, runtime);
  }

  async sendMseIncidentWithOptions(request: SendMseIncidentRequest, runtime: $Util.RuntimeOptions): Promise<SendMseIncidentResponse> {
    Util.validateModel(request);
    return $tea.cast<SendMseIncidentResponse>(await this.doRequest("SendMseIncident", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SendMseIncidentResponse({}));
  }

  async sendMseIncident(request: SendMseIncidentRequest): Promise<SendMseIncidentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendMseIncidentWithOptions(request, runtime);
  }

  async createDispatchRuleWithOptions(request: CreateDispatchRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateDispatchRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDispatchRuleResponse>(await this.doRequest("CreateDispatchRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateDispatchRuleResponse({}));
  }

  async createDispatchRule(request: CreateDispatchRuleRequest): Promise<CreateDispatchRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDispatchRuleWithOptions(request, runtime);
  }

  async exportPrometheusRulesWithOptions(request: ExportPrometheusRulesRequest, runtime: $Util.RuntimeOptions): Promise<ExportPrometheusRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ExportPrometheusRulesResponse>(await this.doRequest("ExportPrometheusRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ExportPrometheusRulesResponse({}));
  }

  async exportPrometheusRules(request: ExportPrometheusRulesRequest): Promise<ExportPrometheusRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportPrometheusRulesWithOptions(request, runtime);
  }

  async importPrometheusRulesWithOptions(request: ImportPrometheusRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportPrometheusRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportPrometheusRulesResponse>(await this.doRequest("ImportPrometheusRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ImportPrometheusRulesResponse({}));
  }

  async importPrometheusRules(request: ImportPrometheusRulesRequest): Promise<ImportPrometheusRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importPrometheusRulesWithOptions(request, runtime);
  }

  async saveTraceAppConfigWithOptions(request: SaveTraceAppConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveTraceAppConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<SaveTraceAppConfigResponse>(await this.doRequest("SaveTraceAppConfig", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SaveTraceAppConfigResponse({}));
  }

  async saveTraceAppConfig(request: SaveTraceAppConfigRequest): Promise<SaveTraceAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveTraceAppConfigWithOptions(request, runtime);
  }

  async updateWebhookWithOptions(request: UpdateWebhookRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWebhookResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateWebhookResponse>(await this.doRequest("UpdateWebhook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateWebhookResponse({}));
  }

  async updateWebhook(request: UpdateWebhookRequest): Promise<UpdateWebhookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWebhookWithOptions(request, runtime);
  }

  async createWehookWithOptions(request: CreateWehookRequest, runtime: $Util.RuntimeOptions): Promise<CreateWehookResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWehookResponse>(await this.doRequest("CreateWehook", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateWehookResponse({}));
  }

  async createWehook(request: CreateWehookRequest): Promise<CreateWehookResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWehookWithOptions(request, runtime);
  }

  async getAppApiByPageWithOptions(request: GetAppApiByPageRequest, runtime: $Util.RuntimeOptions): Promise<GetAppApiByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAppApiByPageResponse>(await this.doRequest("GetAppApiByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetAppApiByPageResponse({}));
  }

  async getAppApiByPage(request: GetAppApiByPageRequest): Promise<GetAppApiByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppApiByPageWithOptions(request, runtime);
  }

  async queryMetricByPageWithOptions(request: QueryMetricByPageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMetricByPageResponse>(await this.doRequest("QueryMetricByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryMetricByPageResponse({}));
  }

  async queryMetricByPage(request: QueryMetricByPageRequest): Promise<QueryMetricByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricByPageWithOptions(request, runtime);
  }

  async getTraceAppWithOptions(request: GetTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceAppResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTraceAppResponse>(await this.doRequest("GetTraceApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetTraceAppResponse({}));
  }

  async getTraceApp(request: GetTraceAppRequest): Promise<GetTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceAppWithOptions(request, runtime);
  }

  async getMultipleTraceWithOptions(request: GetMultipleTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetMultipleTraceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetMultipleTraceResponse>(await this.doRequest("GetMultipleTrace", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetMultipleTraceResponse({}));
  }

  async getMultipleTrace(request: GetMultipleTraceRequest): Promise<GetMultipleTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMultipleTraceWithOptions(request, runtime);
  }

  async searchTracesByPageWithOptions(request: SearchTracesByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTracesByPageResponse>(await this.doRequest("SearchTracesByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTracesByPageResponse({}));
  }

  async searchTracesByPage(request: SearchTracesByPageRequest): Promise<SearchTracesByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesByPageWithOptions(request, runtime);
  }

  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    return $tea.cast<GetStackResponse>(await this.doRequest("GetStack", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetStackResponse({}));
  }

  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  async describeTraceLocationWithOptions(request: DescribeTraceLocationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLocationResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTraceLocationResponse>(await this.doRequest("DescribeTraceLocation", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeTraceLocationResponse({}));
  }

  async describeTraceLocation(request: DescribeTraceLocationRequest): Promise<DescribeTraceLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLocationWithOptions(request, runtime);
  }

  async deleteTraceAppWithOptions(request: DeleteTraceAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTraceAppResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteTraceAppResponse>(await this.doRequest("DeleteTraceApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteTraceAppResponse({}));
  }

  async deleteTraceApp(request: DeleteTraceAppRequest): Promise<DeleteTraceAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTraceAppWithOptions(request, runtime);
  }

  async describeTraceLicenseKeyWithOptions(request: DescribeTraceLicenseKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTraceLicenseKeyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeTraceLicenseKeyResponse>(await this.doRequest("DescribeTraceLicenseKey", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DescribeTraceLicenseKeyResponse({}));
  }

  async describeTraceLicenseKey(request: DescribeTraceLicenseKeyRequest): Promise<DescribeTraceLicenseKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTraceLicenseKeyWithOptions(request, runtime);
  }

  async configAppWithOptions(request: ConfigAppRequest, runtime: $Util.RuntimeOptions): Promise<ConfigAppResponse> {
    Util.validateModel(request);
    return $tea.cast<ConfigAppResponse>(await this.doRequest("ConfigApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ConfigAppResponse({}));
  }

  async configApp(request: ConfigAppRequest): Promise<ConfigAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configAppWithOptions(request, runtime);
  }

  async checkServiceLinkedRoleForDeletingWithOptions(request: CheckServiceLinkedRoleForDeletingRequest, runtime: $Util.RuntimeOptions): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckServiceLinkedRoleForDeletingResponse>(await this.doRequest("CheckServiceLinkedRoleForDeleting", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CheckServiceLinkedRoleForDeletingResponse({}));
  }

  async checkServiceLinkedRoleForDeleting(request: CheckServiceLinkedRoleForDeletingRequest): Promise<CheckServiceLinkedRoleForDeletingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleForDeletingWithOptions(request, runtime);
  }

  async listDashboardsWithOptions(request: ListDashboardsRequest, runtime: $Util.RuntimeOptions): Promise<ListDashboardsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDashboardsResponse>(await this.doRequest("ListDashboards", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListDashboardsResponse({}));
  }

  async listDashboards(request: ListDashboardsRequest): Promise<ListDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDashboardsWithOptions(request, runtime);
  }

  async getConsistencySnapshotWithOptions(request: GetConsistencySnapshotRequest, runtime: $Util.RuntimeOptions): Promise<GetConsistencySnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<GetConsistencySnapshotResponse>(await this.doRequest("GetConsistencySnapshot", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetConsistencySnapshotResponse({}));
  }

  async getConsistencySnapshot(request: GetConsistencySnapshotRequest): Promise<GetConsistencySnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsistencySnapshotWithOptions(request, runtime);
  }

  async checkDataConsistencyWithOptions(request: CheckDataConsistencyRequest, runtime: $Util.RuntimeOptions): Promise<CheckDataConsistencyResponse> {
    Util.validateModel(request);
    return $tea.cast<CheckDataConsistencyResponse>(await this.doRequest("CheckDataConsistency", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CheckDataConsistencyResponse({}));
  }

  async checkDataConsistency(request: CheckDataConsistencyRequest): Promise<CheckDataConsistencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDataConsistencyWithOptions(request, runtime);
  }

  async addGrafanaWithOptions(request: AddGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<AddGrafanaResponse> {
    Util.validateModel(request);
    return $tea.cast<AddGrafanaResponse>(await this.doRequest("AddGrafana", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddGrafanaResponse({}));
  }

  async addGrafana(request: AddGrafanaRequest): Promise<AddGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addGrafanaWithOptions(request, runtime);
  }

  async addIntegrationWithOptions(request: AddIntegrationRequest, runtime: $Util.RuntimeOptions): Promise<AddIntegrationResponse> {
    Util.validateModel(request);
    return $tea.cast<AddIntegrationResponse>(await this.doRequest("AddIntegration", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new AddIntegrationResponse({}));
  }

  async addIntegration(request: AddIntegrationRequest): Promise<AddIntegrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addIntegrationWithOptions(request, runtime);
  }

  async getTraceWithOptions(request: GetTraceRequest, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTraceResponse>(await this.doRequest("GetTrace", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetTraceResponse({}));
  }

  async getTrace(request: GetTraceRequest): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  async listClusterFromGrafanaWithOptions(request: ListClusterFromGrafanaRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterFromGrafanaResponse> {
    Util.validateModel(request);
    return $tea.cast<ListClusterFromGrafanaResponse>(await this.doRequest("ListClusterFromGrafana", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListClusterFromGrafanaResponse({}));
  }

  async listClusterFromGrafana(request: ListClusterFromGrafanaRequest): Promise<ListClusterFromGrafanaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterFromGrafanaWithOptions(request, runtime);
  }

  async searchTracesWithOptions(request: SearchTracesRequest, runtime: $Util.RuntimeOptions): Promise<SearchTracesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTracesResponse>(await this.doRequest("SearchTraces", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTracesResponse({}));
  }

  async searchTraces(request: SearchTracesRequest): Promise<SearchTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  async getPrometheusApiTokenWithOptions(request: GetPrometheusApiTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetPrometheusApiTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<GetPrometheusApiTokenResponse>(await this.doRequest("GetPrometheusApiToken", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetPrometheusApiTokenResponse({}));
  }

  async getPrometheusApiToken(request: GetPrometheusApiTokenRequest): Promise<GetPrometheusApiTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrometheusApiTokenWithOptions(request, runtime);
  }

  async setRetcodeShareStatusWithOptions(request: SetRetcodeShareStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetRetcodeShareStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<SetRetcodeShareStatusResponse>(await this.doRequest("SetRetcodeShareStatus", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SetRetcodeShareStatusResponse({}));
  }

  async setRetcodeShareStatus(request: SetRetcodeShareStatusRequest): Promise<SetRetcodeShareStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setRetcodeShareStatusWithOptions(request, runtime);
  }

  async getRetcodeShareUrlWithOptions(request: GetRetcodeShareUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetRetcodeShareUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<GetRetcodeShareUrlResponse>(await this.doRequest("GetRetcodeShareUrl", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new GetRetcodeShareUrlResponse({}));
  }

  async getRetcodeShareUrl(request: GetRetcodeShareUrlRequest): Promise<GetRetcodeShareUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRetcodeShareUrlWithOptions(request, runtime);
  }

  async listPromClustersWithOptions(request: ListPromClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListPromClustersResponse> {
    Util.validateModel(request);
    return $tea.cast<ListPromClustersResponse>(await this.doRequest("ListPromClusters", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListPromClustersResponse({}));
  }

  async listPromClusters(request: ListPromClustersRequest): Promise<ListPromClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPromClustersWithOptions(request, runtime);
  }

  async updateAlertRuleWithOptions(request: UpdateAlertRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertRuleResponse>(await this.doRequest("UpdateAlertRule", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertRuleResponse({}));
  }

  async updateAlertRule(request: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  async startAlertWithOptions(request: StartAlertRequest, runtime: $Util.RuntimeOptions): Promise<StartAlertResponse> {
    Util.validateModel(request);
    return $tea.cast<StartAlertResponse>(await this.doRequest("StartAlert", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new StartAlertResponse({}));
  }

  async startAlert(request: StartAlertRequest): Promise<StartAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAlertWithOptions(request, runtime);
  }

  async stopAlertWithOptions(request: StopAlertRequest, runtime: $Util.RuntimeOptions): Promise<StopAlertResponse> {
    Util.validateModel(request);
    return $tea.cast<StopAlertResponse>(await this.doRequest("StopAlert", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new StopAlertResponse({}));
  }

  async stopAlert(request: StopAlertRequest): Promise<StopAlertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopAlertWithOptions(request, runtime);
  }

  async searchEventsWithOptions(request: SearchEventsRequest, runtime: $Util.RuntimeOptions): Promise<SearchEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchEventsResponse>(await this.doRequest("SearchEvents", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchEventsResponse({}));
  }

  async searchEvents(request: SearchEventsRequest): Promise<SearchEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchEventsWithOptions(request, runtime);
  }

  async searchAlertHistoriesWithOptions(request: SearchAlertHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertHistoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertHistoriesResponse>(await this.doRequest("SearchAlertHistories", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertHistoriesResponse({}));
  }

  async searchAlertHistories(request: SearchAlertHistoriesRequest): Promise<SearchAlertHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertHistoriesWithOptions(request, runtime);
  }

  async updateAlertContactWithOptions(request: UpdateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertContactResponse>(await this.doRequest("UpdateAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertContactResponse({}));
  }

  async updateAlertContact(request: UpdateAlertContactRequest): Promise<UpdateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactWithOptions(request, runtime);
  }

  async deleteAlertContactGroupWithOptions(request: DeleteAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertContactGroupResponse>(await this.doRequest("DeleteAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertContactGroupResponse({}));
  }

  async deleteAlertContactGroup(request: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  async deleteAlertContactWithOptions(request: DeleteAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertContactResponse>(await this.doRequest("DeleteAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertContactResponse({}));
  }

  async deleteAlertContact(request: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  async updateAlertContactGroupWithOptions(request: UpdateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAlertContactGroupResponse>(await this.doRequest("UpdateAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new UpdateAlertContactGroupResponse({}));
  }

  async updateAlertContactGroup(request: UpdateAlertContactGroupRequest): Promise<UpdateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAlertContactGroupWithOptions(request, runtime);
  }

  async importCustomAlertRulesWithOptions(request: ImportCustomAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportCustomAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportCustomAlertRulesResponse>(await this.doRequest("ImportCustomAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ImportCustomAlertRulesResponse({}));
  }

  async importCustomAlertRules(request: ImportCustomAlertRulesRequest): Promise<ImportCustomAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importCustomAlertRulesWithOptions(request, runtime);
  }

  async searchAlertRulesWithOptions(request: SearchAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertRulesResponse>(await this.doRequest("SearchAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertRulesResponse({}));
  }

  async searchAlertRules(request: SearchAlertRulesRequest): Promise<SearchAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertRulesWithOptions(request, runtime);
  }

  async deleteAlertRulesWithOptions(request: DeleteAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAlertRulesResponse>(await this.doRequest("DeleteAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteAlertRulesResponse({}));
  }

  async deleteAlertRules(request: DeleteAlertRulesRequest): Promise<DeleteAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAlertRulesWithOptions(request, runtime);
  }

  async createRetcodeAppWithOptions(request: CreateRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateRetcodeAppResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRetcodeAppResponse>(await this.doRequest("CreateRetcodeApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateRetcodeAppResponse({}));
  }

  async createRetcodeApp(request: CreateRetcodeAppRequest): Promise<CreateRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRetcodeAppWithOptions(request, runtime);
  }

  async deleteRetcodeAppWithOptions(request: DeleteRetcodeAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRetcodeAppResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteRetcodeAppResponse>(await this.doRequest("DeleteRetcodeApp", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new DeleteRetcodeAppResponse({}));
  }

  async deleteRetcodeApp(request: DeleteRetcodeAppRequest): Promise<DeleteRetcodeAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRetcodeAppWithOptions(request, runtime);
  }

  async queryDatasetWithOptions(request: QueryDatasetRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatasetResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryDatasetResponse>(await this.doRequest("QueryDataset", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryDatasetResponse({}));
  }

  async queryDataset(request: QueryDatasetRequest): Promise<QueryDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatasetWithOptions(request, runtime);
  }

  async queryMetricWithOptions(request: QueryMetricRequest, runtime: $Util.RuntimeOptions): Promise<QueryMetricResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryMetricResponse>(await this.doRequest("QueryMetric", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new QueryMetricResponse({}));
  }

  async queryMetric(request: QueryMetricRequest): Promise<QueryMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMetricWithOptions(request, runtime);
  }

  async createAlertContactWithOptions(request: CreateAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAlertContactResponse>(await this.doRequest("CreateAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateAlertContactResponse({}));
  }

  async createAlertContact(request: CreateAlertContactRequest): Promise<CreateAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  async createAlertContactGroupWithOptions(request: CreateAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAlertContactGroupResponse>(await this.doRequest("CreateAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new CreateAlertContactGroupResponse({}));
  }

  async createAlertContactGroup(request: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  async searchAlertContactWithOptions(request: SearchAlertContactRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertContactResponse>(await this.doRequest("SearchAlertContact", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertContactResponse({}));
  }

  async searchAlertContact(request: SearchAlertContactRequest): Promise<SearchAlertContactResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactWithOptions(request, runtime);
  }

  async searchAlertContactGroupWithOptions(request: SearchAlertContactGroupRequest, runtime: $Util.RuntimeOptions): Promise<SearchAlertContactGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchAlertContactGroupResponse>(await this.doRequest("SearchAlertContactGroup", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchAlertContactGroupResponse({}));
  }

  async searchAlertContactGroup(request: SearchAlertContactGroupRequest): Promise<SearchAlertContactGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchAlertContactGroupWithOptions(request, runtime);
  }

  async importAppAlertRulesWithOptions(request: ImportAppAlertRulesRequest, runtime: $Util.RuntimeOptions): Promise<ImportAppAlertRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ImportAppAlertRulesResponse>(await this.doRequest("ImportAppAlertRules", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ImportAppAlertRulesResponse({}));
  }

  async importAppAlertRules(request: ImportAppAlertRulesRequest): Promise<ImportAppAlertRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importAppAlertRulesWithOptions(request, runtime);
  }

  async searchRetcodeAppByPageWithOptions(request: SearchRetcodeAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchRetcodeAppByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchRetcodeAppByPageResponse>(await this.doRequest("SearchRetcodeAppByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchRetcodeAppByPageResponse({}));
  }

  async searchRetcodeAppByPage(request: SearchRetcodeAppByPageRequest): Promise<SearchRetcodeAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchRetcodeAppByPageWithOptions(request, runtime);
  }

  async searchTraceAppByNameWithOptions(request: SearchTraceAppByNameRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByNameResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTraceAppByNameResponse>(await this.doRequest("SearchTraceAppByName", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTraceAppByNameResponse({}));
  }

  async searchTraceAppByName(request: SearchTraceAppByNameRequest): Promise<SearchTraceAppByNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByNameWithOptions(request, runtime);
  }

  async searchTraceAppByPageWithOptions(request: SearchTraceAppByPageRequest, runtime: $Util.RuntimeOptions): Promise<SearchTraceAppByPageResponse> {
    Util.validateModel(request);
    return $tea.cast<SearchTraceAppByPageResponse>(await this.doRequest("SearchTraceAppByPage", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new SearchTraceAppByPageResponse({}));
  }

  async searchTraceAppByPage(request: SearchTraceAppByPageRequest): Promise<SearchTraceAppByPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTraceAppByPageWithOptions(request, runtime);
  }

  async listRetcodeAppsWithOptions(request: ListRetcodeAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListRetcodeAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListRetcodeAppsResponse>(await this.doRequest("ListRetcodeApps", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListRetcodeAppsResponse({}));
  }

  async listRetcodeApps(request: ListRetcodeAppsRequest): Promise<ListRetcodeAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRetcodeAppsWithOptions(request, runtime);
  }

  async listTraceAppsWithOptions(request: ListTraceAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListTraceAppsResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTraceAppsResponse>(await this.doRequest("ListTraceApps", "HTTPS", "POST", "2019-08-08", "AK", null, $tea.toMap(request), runtime), new ListTraceAppsResponse({}));
  }

  async listTraceApps(request: ListTraceAppsRequest): Promise<ListTraceAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTraceAppsWithOptions(request, runtime);
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

}
