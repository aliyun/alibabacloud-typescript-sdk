// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbolishFlowRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AbolishFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AbolishFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowRequest extends $tea.Model {
  flowId?: string;
  flowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloneFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloneFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowRequest extends $tea.Model {
  name?: string;
  description?: string;
  definition?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      definition: 'Definition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      definition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  flowId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowRequest extends $tea.Model {
  flowId?: string;
  flowIds?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowIds: 'FlowIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFlowRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeployFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeployFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountSummaryResponseBody extends $tea.Model {
  instanceCount?: number;
  onlineInstanceCount?: number;
  requestId?: string;
  invocationCount?: number;
  dailyInvocationErrorCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      onlineInstanceCount: 'OnlineInstanceCount',
      requestId: 'RequestId',
      invocationCount: 'InvocationCount',
      dailyInvocationErrorCount: 'DailyInvocationErrorCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'number',
      onlineInstanceCount: 'number',
      requestId: 'string',
      invocationCount: 'number',
      dailyInvocationErrorCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAccountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAccountSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeRequest extends $tea.Model {
  connectorName?: string;
  lang?: string;
  stepInfo?: string;
  static names(): { [key: string]: string } {
    return {
      connectorName: 'ConnectorName',
      lang: 'Lang',
      stepInfo: 'StepInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorName: 'string',
      lang: 'string',
      stepInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponseBody extends $tea.Model {
  description?: string;
  category?: string;
  requestId?: string;
  capabilities?: DescribeConnectorAttributeResponseBodyCapabilities;
  fullName?: string;
  displayName?: string;
  regionId?: string;
  icon?: DescribeConnectorAttributeResponseBodyIcon;
  brandColor?: string;
  stepResult?: DescribeConnectorAttributeResponseBodyStepResult;
  name?: string;
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      category: 'Category',
      requestId: 'RequestId',
      capabilities: 'Capabilities',
      fullName: 'FullName',
      displayName: 'DisplayName',
      regionId: 'RegionId',
      icon: 'Icon',
      brandColor: 'BrandColor',
      stepResult: 'StepResult',
      name: 'Name',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      category: 'string',
      requestId: 'string',
      capabilities: DescribeConnectorAttributeResponseBodyCapabilities,
      fullName: 'string',
      displayName: 'string',
      regionId: 'string',
      icon: DescribeConnectorAttributeResponseBodyIcon,
      brandColor: 'string',
      stepResult: DescribeConnectorAttributeResponseBodyStepResult,
      name: 'string',
      connectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConnectorAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConnectorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityRequest extends $tea.Model {
  type?: string;
  lang?: string;
  preset?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      lang: 'Lang',
      preset: 'Preset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      lang: 'string',
      preset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBody extends $tea.Model {
  connections?: DescribeConnectorCapabilityResponseBodyConnections[];
  connector?: DescribeConnectorCapabilityResponseBodyConnector;
  type?: string;
  parameters?: DescribeConnectorCapabilityResponseBodyParameters[];
  requestId?: string;
  displayName?: string;
  documentUrl?: string;
  visibility?: string;
  defaultInputs?: string;
  system?: boolean;
  name?: string;
  responses?: DescribeConnectorCapabilityResponseBodyResponses[];
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      connector: 'Connector',
      type: 'Type',
      parameters: 'Parameters',
      requestId: 'RequestId',
      displayName: 'DisplayName',
      documentUrl: 'DocumentUrl',
      visibility: 'Visibility',
      defaultInputs: 'DefaultInputs',
      system: 'System',
      name: 'Name',
      responses: 'Responses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': DescribeConnectorCapabilityResponseBodyConnections },
      connector: DescribeConnectorCapabilityResponseBodyConnector,
      type: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeConnectorCapabilityResponseBodyParameters },
      requestId: 'string',
      displayName: 'string',
      documentUrl: 'string',
      visibility: 'string',
      defaultInputs: 'string',
      system: 'boolean',
      name: 'string',
      responses: { 'type': 'array', 'itemType': DescribeConnectorCapabilityResponseBodyResponses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConnectorCapabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConnectorCapabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowRequest extends $tea.Model {
  flowId?: string;
  flowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponseBody extends $tea.Model {
  status?: string;
  flowId?: string;
  description?: string;
  requestId?: string;
  version?: number;
  createdAt?: string;
  definition?: string;
  editMode?: string;
  regionId?: string;
  updatedAt?: string;
  source?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      flowId: 'FlowId',
      description: 'Description',
      requestId: 'RequestId',
      version: 'Version',
      createdAt: 'CreatedAt',
      definition: 'Definition',
      editMode: 'EditMode',
      regionId: 'RegionId',
      updatedAt: 'UpdatedAt',
      source: 'Source',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      flowId: 'string',
      description: 'string',
      requestId: 'string',
      version: 'number',
      createdAt: 'string',
      definition: 'string',
      editMode: 'string',
      regionId: 'string',
      updatedAt: 'string',
      source: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricResponseBody extends $tea.Model {
  requestId?: string;
  invocationCount?: number;
  invocationErrorCount?: number;
  errorRate?: number;
  costAverage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invocationCount: 'InvocationCount',
      invocationErrorCount: 'InvocationErrorCount',
      errorRate: 'ErrorRate',
      costAverage: 'CostAverage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invocationCount: 'number',
      invocationErrorCount: 'number',
      errorRate: 'number',
      costAverage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTemplateRequest extends $tea.Model {
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

export class DescribeFlowTemplateResponseBody extends $tea.Model {
  locale?: string;
  connector?: string;
  summaryEn?: string;
  description?: string;
  requestId?: string;
  createdAt?: string;
  definition?: string;
  overview?: string;
  updatedAt?: string;
  name?: string;
  summary?: string;
  tag?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'Locale',
      connector: 'Connector',
      summaryEn: 'SummaryEn',
      description: 'Description',
      requestId: 'RequestId',
      createdAt: 'CreatedAt',
      definition: 'Definition',
      overview: 'Overview',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      summary: 'Summary',
      tag: 'Tag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      connector: 'string',
      summaryEn: 'string',
      description: 'string',
      requestId: 'string',
      createdAt: 'string',
      definition: 'string',
      overview: 'string',
      updatedAt: 'string',
      name: 'string',
      summary: 'string',
      tag: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFlowTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFlowTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogRequest extends $tea.Model {
  invocationId?: string;
  pages?: string;
  static names(): { [key: string]: string } {
    return {
      invocationId: 'InvocationId',
      pages: 'Pages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationId: 'string',
      pages: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBody extends $tea.Model {
  status?: string;
  parameters?: { [key: string]: any };
  returnCode?: string;
  endTime?: number;
  requestId?: string;
  actions?: DescribeInvocationLogResponseBodyActions[];
  timeoutTime?: number;
  startTime?: number;
  workflow?: DescribeInvocationLogResponseBodyWorkflow;
  invocationError?: DescribeInvocationLogResponseBodyInvocationError;
  trigger?: DescribeInvocationLogResponseBodyTrigger;
  responseResult?: DescribeInvocationLogResponseBodyResponseResult;
  invocationId?: string;
  outputsResult?: DescribeInvocationLogResponseBodyOutputsResult;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      parameters: 'Parameters',
      returnCode: 'ReturnCode',
      endTime: 'EndTime',
      requestId: 'RequestId',
      actions: 'Actions',
      timeoutTime: 'TimeoutTime',
      startTime: 'StartTime',
      workflow: 'Workflow',
      invocationError: 'InvocationError',
      trigger: 'Trigger',
      responseResult: 'ResponseResult',
      invocationId: 'InvocationId',
      outputsResult: 'OutputsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      returnCode: 'string',
      endTime: 'number',
      requestId: 'string',
      actions: { 'type': 'array', 'itemType': DescribeInvocationLogResponseBodyActions },
      timeoutTime: 'number',
      startTime: 'number',
      workflow: DescribeInvocationLogResponseBodyWorkflow,
      invocationError: DescribeInvocationLogResponseBodyInvocationError,
      trigger: DescribeInvocationLogResponseBodyTrigger,
      responseResult: DescribeInvocationLogResponseBodyResponseResult,
      invocationId: 'string',
      outputsResult: DescribeInvocationLogResponseBodyOutputsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInvocationLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInvocationLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDetailRequest extends $tea.Model {
  metricName?: string;
  period?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      period: 'Period',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      period: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDetailResponseBody extends $tea.Model {
  requestId?: string;
  datapoints?: DescribeMetricDetailResponseBodyDatapoints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      datapoints: 'Datapoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      datapoints: { 'type': 'array', 'itemType': DescribeMetricDetailResponseBodyDatapoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMetricDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMetricDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFlowResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
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

export class DisableFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFlowResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
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

export class EnableFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFlowRequest extends $tea.Model {
  flowId?: string;
  parameters?: string;
  data?: string;
  clientToken?: string;
  definition?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      parameters: 'Parameters',
      data: 'Data',
      clientToken: 'ClientToken',
      definition: 'Definition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      parameters: 'string',
      data: 'string',
      clientToken: 'string',
      definition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFlowResponseBody extends $tea.Model {
  requestId?: string;
  invocationId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invocationId: 'InvocationId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invocationId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsRequest extends $tea.Model {
  category?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBody extends $tea.Model {
  connectors?: ListConnectorsResponseBodyConnectors[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectors: 'Connectors',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectors: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectors },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorTriggersRequest extends $tea.Model {
  category?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorTriggersResponseBody extends $tea.Model {
  requestId?: string;
  triggers?: ListConnectorTriggersResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListConnectorTriggersResponseBodyTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorTriggersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectorTriggersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectorTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBody extends $tea.Model {
  totalCount?: number;
  totalPage?: number;
  requestId?: string;
  flows?: ListFlowResponseBodyFlows[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      flows: 'Flows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      totalPage: 'number',
      requestId: 'string',
      flows: { 'type': 'array', 'itemType': ListFlowResponseBodyFlows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponseBody extends $tea.Model {
  connections?: ListFlowConnectionsResponseBodyConnections[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListFlowConnectionsResponseBodyConnections },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTemplateRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  name?: string;
  tag?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      name: 'Name',
      tag: 'Tag',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      name: 'string',
      tag: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTemplateResponseBody extends $tea.Model {
  totalPage?: number;
  requestId?: string;
  flowTemplates?: ListFlowTemplateResponseBodyFlowTemplates[];
  static names(): { [key: string]: string } {
    return {
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      flowTemplates: 'FlowTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalPage: 'number',
      requestId: 'string',
      flowTemplates: { 'type': 'array', 'itemType': ListFlowTemplateResponseBodyFlowTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTriggersRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTriggersResponseBody extends $tea.Model {
  requestId?: string;
  triggers?: ListFlowTriggersResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListFlowTriggersResponseBodyTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTriggersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowTriggersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowVersionRequest extends $tea.Model {
  flowId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowVersionResponseBody extends $tea.Model {
  versions?: ListFlowVersionResponseBodyVersions[];
  totalPage?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      versions: 'Versions',
      totalPage: 'TotalPage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versions: { 'type': 'array', 'itemType': ListFlowVersionResponseBodyVersions },
      totalPage: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationLogsRequest extends $tea.Model {
  flowId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  flowVersion?: string;
  startTime?: string;
  endTime?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      flowVersion: 'FlowVersion',
      startTime: 'StartTime',
      endTime: 'EndTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      flowVersion: 'string',
      startTime: 'string',
      endTime: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationLogsResponseBody extends $tea.Model {
  totalPage?: number;
  requestId?: string;
  logs?: ListInvocationLogsResponseBodyLogs[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      totalPage: 'TotalPage',
      requestId: 'RequestId',
      logs: 'Logs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalPage: 'number',
      requestId: 'string',
      logs: { 'type': 'array', 'itemType': ListInvocationLogsResponseBodyLogs },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInvocationLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInvocationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResponseBody extends $tea.Model {
  requestId?: string;
  tags?: ListTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowRequest extends $tea.Model {
  flowId?: string;
  name?: string;
  description?: string;
  definition?: string;
  flowRole?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      name: 'Name',
      description: 'Description',
      definition: 'Definition',
      flowRole: 'FlowRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      name: 'string',
      description: 'string',
      definition: 'string',
      flowRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollBackFlowRequest extends $tea.Model {
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollBackFlowResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollBackFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollBackFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollBackFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequest extends $tea.Model {
  connector?: string;
  connectionName?: string;
  connectionContent?: string;
  actionType?: string;
  connectionType?: string;
  static names(): { [key: string]: string } {
    return {
      connector: 'Connector',
      connectionName: 'ConnectionName',
      connectionContent: 'ConnectionContent',
      actionType: 'ActionType',
      connectionType: 'ConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connector: 'string',
      connectionName: 'string',
      connectionContent: 'string',
      actionType: 'string',
      connectionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponseBody extends $tea.Model {
  connectionName?: string;
  connectionId?: string;
  requestId?: string;
  content?: string;
  definition?: string;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
      connectionId: 'ConnectionId',
      requestId: 'RequestId',
      content: 'Content',
      definition: 'Definition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
      connectionId: 'string',
      requestId: 'string',
      content: 'string',
      definition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponseBodyCapabilitiesActions extends $tea.Model {
  displayName?: string;
  type?: string;
  visibility?: string;
  description?: string;
  documentUrl?: string;
  name?: string;
  system?: boolean;
  defaultActionName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      type: 'Type',
      visibility: 'Visibility',
      description: 'Description',
      documentUrl: 'DocumentUrl',
      name: 'Name',
      system: 'System',
      defaultActionName: 'DefaultActionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      type: 'string',
      visibility: 'string',
      description: 'string',
      documentUrl: 'string',
      name: 'string',
      system: 'boolean',
      defaultActionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponseBodyCapabilitiesTriggers extends $tea.Model {
  displayName?: string;
  type?: string;
  visibility?: string;
  description?: string;
  documentUrl?: string;
  name?: string;
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      type: 'Type',
      visibility: 'Visibility',
      description: 'Description',
      documentUrl: 'DocumentUrl',
      name: 'Name',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      type: 'string',
      visibility: 'string',
      description: 'string',
      documentUrl: 'string',
      name: 'string',
      system: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponseBodyCapabilities extends $tea.Model {
  actions?: DescribeConnectorAttributeResponseBodyCapabilitiesActions[];
  triggers?: DescribeConnectorAttributeResponseBodyCapabilitiesTriggers[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': DescribeConnectorAttributeResponseBodyCapabilitiesActions },
      triggers: { 'type': 'array', 'itemType': DescribeConnectorAttributeResponseBodyCapabilitiesTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponseBodyIcon extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorAttributeResponseBodyStepResult extends $tea.Model {
  hasNext?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasNext: 'HasNext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasNext: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyConnections extends $tea.Model {
  definition?: string;
  connectionName?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      connectionName: 'ConnectionName',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      connectionName: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyConnectorIcon extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyConnectorConnectionParameters extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyConnector extends $tea.Model {
  displayName?: string;
  defaultPolicy?: string[];
  fullName?: string;
  icon?: DescribeConnectorCapabilityResponseBodyConnectorIcon;
  connectorId?: string;
  regionId?: string;
  ramMap?: string;
  description?: string;
  brandColor?: string;
  category?: string;
  connectionParameters?: DescribeConnectorCapabilityResponseBodyConnectorConnectionParameters;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      defaultPolicy: 'DefaultPolicy',
      fullName: 'FullName',
      icon: 'Icon',
      connectorId: 'ConnectorId',
      regionId: 'RegionId',
      ramMap: 'RamMap',
      description: 'Description',
      brandColor: 'BrandColor',
      category: 'Category',
      connectionParameters: 'ConnectionParameters',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      defaultPolicy: { 'type': 'array', 'itemType': 'string' },
      fullName: 'string',
      icon: DescribeConnectorCapabilityResponseBodyConnectorIcon,
      connectorId: 'string',
      regionId: 'string',
      ramMap: 'string',
      description: 'string',
      brandColor: 'string',
      category: 'string',
      connectionParameters: DescribeConnectorCapabilityResponseBodyConnectorConnectionParameters,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyParametersSubParameters extends $tea.Model {
  displayName?: string;
  type?: string;
  required?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      type: 'Type',
      required: 'Required',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      type: 'string',
      required: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyParameters extends $tea.Model {
  displayName?: string;
  type?: string;
  placeHolder?: string;
  readOnly?: boolean;
  example?: string;
  defaultValue?: string;
  subType?: string;
  enumDisplayName?: string[];
  required?: boolean;
  description?: string;
  position?: string;
  enum?: string[];
  subParameters?: DescribeConnectorCapabilityResponseBodyParametersSubParameters[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      type: 'Type',
      placeHolder: 'PlaceHolder',
      readOnly: 'ReadOnly',
      example: 'Example',
      defaultValue: 'DefaultValue',
      subType: 'SubType',
      enumDisplayName: 'EnumDisplayName',
      required: 'Required',
      description: 'Description',
      position: 'Position',
      enum: 'Enum',
      subParameters: 'SubParameters',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      type: 'string',
      placeHolder: 'string',
      readOnly: 'boolean',
      example: 'string',
      defaultValue: 'string',
      subType: 'string',
      enumDisplayName: { 'type': 'array', 'itemType': 'string' },
      required: 'boolean',
      description: 'string',
      position: 'string',
      enum: { 'type': 'array', 'itemType': 'string' },
      subParameters: { 'type': 'array', 'itemType': DescribeConnectorCapabilityResponseBodyParametersSubParameters },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectorCapabilityResponseBodyResponses extends $tea.Model {
  type?: string;
  displayName?: string;
  description?: string;
  expression?: string;
  example?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      displayName: 'DisplayName',
      description: 'Description',
      expression: 'Expression',
      example: 'Example',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      displayName: 'string',
      description: 'string',
      expression: 'string',
      example: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyActionsError extends $tea.Model {
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyActionsOutputsResult extends $tea.Model {
  contentType?: string;
  contentSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      contentSize: 'ContentSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      contentSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyActionsInputsResult extends $tea.Model {
  contentType?: string;
  contentSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      contentSize: 'ContentSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      contentSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyActions extends $tea.Model {
  loopCount?: number;
  endTime?: number;
  status?: string;
  startTime?: number;
  invocationId?: string;
  returnCode?: string;
  error?: DescribeInvocationLogResponseBodyActionsError;
  outputsResult?: DescribeInvocationLogResponseBodyActionsOutputsResult;
  name?: string;
  inputsResult?: DescribeInvocationLogResponseBodyActionsInputsResult;
  static names(): { [key: string]: string } {
    return {
      loopCount: 'LoopCount',
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      invocationId: 'InvocationId',
      returnCode: 'ReturnCode',
      error: 'Error',
      outputsResult: 'OutputsResult',
      name: 'Name',
      inputsResult: 'InputsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loopCount: 'number',
      endTime: 'number',
      status: 'string',
      startTime: 'number',
      invocationId: 'string',
      returnCode: 'string',
      error: DescribeInvocationLogResponseBodyActionsError,
      outputsResult: DescribeInvocationLogResponseBodyActionsOutputsResult,
      name: 'string',
      inputsResult: DescribeInvocationLogResponseBodyActionsInputsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyWorkflow extends $tea.Model {
  definition?: string;
  version?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      version: 'Version',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      version: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyInvocationError extends $tea.Model {
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyTriggerError extends $tea.Model {
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyTriggerOutputsResult extends $tea.Model {
  contentType?: string;
  contentSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      contentSize: 'ContentSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      contentSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyTriggerInputsResult extends $tea.Model {
  contentType?: string;
  contentSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      contentSize: 'ContentSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      contentSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyTrigger extends $tea.Model {
  endTime?: number;
  status?: string;
  startTime?: number;
  invocationId?: string;
  returnCode?: string;
  error?: DescribeInvocationLogResponseBodyTriggerError;
  outputsResult?: DescribeInvocationLogResponseBodyTriggerOutputsResult;
  name?: string;
  inputsResult?: DescribeInvocationLogResponseBodyTriggerInputsResult;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      startTime: 'StartTime',
      invocationId: 'InvocationId',
      returnCode: 'ReturnCode',
      error: 'Error',
      outputsResult: 'OutputsResult',
      name: 'Name',
      inputsResult: 'InputsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      status: 'string',
      startTime: 'number',
      invocationId: 'string',
      returnCode: 'string',
      error: DescribeInvocationLogResponseBodyTriggerError,
      outputsResult: DescribeInvocationLogResponseBodyTriggerOutputsResult,
      name: 'string',
      inputsResult: DescribeInvocationLogResponseBodyTriggerInputsResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyResponseResult extends $tea.Model {
  contentType?: string;
  contentSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      contentSize: 'ContentSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      contentSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationLogResponseBodyOutputsResult extends $tea.Model {
  contentType?: string;
  contentSize?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      contentSize: 'ContentSize',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      contentSize: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDetailResponseBodyDatapoints extends $tea.Model {
  value?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsIcon extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsConnectionParameters extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectors extends $tea.Model {
  displayName?: string;
  capabilities?: string[];
  parentConnector?: string;
  fullName?: string;
  icon?: ListConnectorsResponseBodyConnectorsIcon;
  connectorId?: string;
  regionId?: string;
  description?: string;
  brandColor?: string;
  category?: string;
  connectionParameters?: ListConnectorsResponseBodyConnectorsConnectionParameters;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      capabilities: 'Capabilities',
      parentConnector: 'ParentConnector',
      fullName: 'FullName',
      icon: 'Icon',
      connectorId: 'ConnectorId',
      regionId: 'RegionId',
      description: 'Description',
      brandColor: 'BrandColor',
      category: 'Category',
      connectionParameters: 'ConnectionParameters',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      capabilities: { 'type': 'array', 'itemType': 'string' },
      parentConnector: 'string',
      fullName: 'string',
      icon: ListConnectorsResponseBodyConnectorsIcon,
      connectorId: 'string',
      regionId: 'string',
      description: 'string',
      brandColor: 'string',
      category: 'string',
      connectionParameters: ListConnectorsResponseBodyConnectorsConnectionParameters,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorTriggersResponseBodyTriggersConnectorIcon extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorTriggersResponseBodyTriggersConnector extends $tea.Model {
  displayName?: string;
  description?: string;
  fullName?: string;
  brandColor?: string;
  icon?: ListConnectorTriggersResponseBodyTriggersConnectorIcon;
  category?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      fullName: 'FullName',
      brandColor: 'BrandColor',
      icon: 'Icon',
      category: 'Category',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      fullName: 'string',
      brandColor: 'string',
      icon: ListConnectorTriggersResponseBodyTriggersConnectorIcon,
      category: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorTriggersResponseBodyTriggers extends $tea.Model {
  displayName?: string;
  type?: string;
  visibility?: string;
  description?: string;
  documentUrl?: string;
  connector?: ListConnectorTriggersResponseBodyTriggersConnector;
  name?: string;
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      type: 'Type',
      visibility: 'Visibility',
      description: 'Description',
      documentUrl: 'DocumentUrl',
      connector: 'Connector',
      name: 'Name',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      type: 'string',
      visibility: 'string',
      description: 'string',
      documentUrl: 'string',
      connector: ListConnectorTriggersResponseBodyTriggersConnector,
      name: 'string',
      system: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowResponseBodyFlows extends $tea.Model {
  status?: string;
  prodVersion?: number;
  description?: string;
  createdAt?: string;
  currentVersion?: number;
  editMode?: string;
  updatedAt?: string;
  source?: string;
  name?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      prodVersion: 'ProdVersion',
      description: 'Description',
      createdAt: 'CreatedAt',
      currentVersion: 'CurrentVersion',
      editMode: 'EditMode',
      updatedAt: 'UpdatedAt',
      source: 'Source',
      name: 'Name',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      prodVersion: 'number',
      description: 'string',
      createdAt: 'string',
      currentVersion: 'number',
      editMode: 'string',
      updatedAt: 'string',
      source: 'string',
      name: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponseBodyConnectionsActions extends $tea.Model {
  type?: string;
  actionName?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      actionName: 'ActionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      actionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponseBodyConnectionsConnectorIcon extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponseBodyConnectionsConnectorConnectionParameters extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponseBodyConnectionsConnector extends $tea.Model {
  displayName?: string;
  brandColor?: string;
  icon?: ListFlowConnectionsResponseBodyConnectionsConnectorIcon;
  name?: string;
  connectionParameters?: ListFlowConnectionsResponseBodyConnectionsConnectorConnectionParameters;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      brandColor: 'BrandColor',
      icon: 'Icon',
      name: 'Name',
      connectionParameters: 'ConnectionParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      brandColor: 'string',
      icon: ListFlowConnectionsResponseBodyConnectionsConnectorIcon,
      name: 'string',
      connectionParameters: ListFlowConnectionsResponseBodyConnectionsConnectorConnectionParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowConnectionsResponseBodyConnections extends $tea.Model {
  definition?: string;
  actions?: ListFlowConnectionsResponseBodyConnectionsActions[];
  connectionName?: string;
  connector?: ListFlowConnectionsResponseBodyConnectionsConnector;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      actions: 'Actions',
      connectionName: 'ConnectionName',
      connector: 'Connector',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      actions: { 'type': 'array', 'itemType': ListFlowConnectionsResponseBodyConnectionsActions },
      connectionName: 'string',
      connector: ListFlowConnectionsResponseBodyConnectionsConnector,
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTemplateResponseBodyFlowTemplates extends $tea.Model {
  summary?: string;
  locale?: string;
  summaryEn?: string;
  createdAt?: string;
  overview?: string;
  connector?: string;
  tag?: string;
  creator?: string;
  description?: string;
  version?: number;
  updatedAt?: string;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      locale: 'Locale',
      summaryEn: 'SummaryEn',
      createdAt: 'CreatedAt',
      overview: 'Overview',
      connector: 'Connector',
      tag: 'Tag',
      creator: 'Creator',
      description: 'Description',
      version: 'Version',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      locale: 'string',
      summaryEn: 'string',
      createdAt: 'string',
      overview: 'string',
      connector: 'string',
      tag: 'string',
      creator: 'string',
      description: 'string',
      version: 'number',
      updatedAt: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowTriggersResponseBodyTriggers extends $tea.Model {
  triggerName?: string;
  endpoint?: string;
  actionsCount?: number;
  triggerActionName?: string;
  triggerDescription?: string;
  triggerActionDescription?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      triggerName: 'TriggerName',
      endpoint: 'Endpoint',
      actionsCount: 'ActionsCount',
      triggerActionName: 'TriggerActionName',
      triggerDescription: 'TriggerDescription',
      triggerActionDescription: 'TriggerActionDescription',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerName: 'string',
      endpoint: 'string',
      actionsCount: 'number',
      triggerActionName: 'string',
      triggerDescription: 'string',
      triggerActionDescription: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowVersionResponseBodyVersions extends $tea.Model {
  version?: number;
  state?: number;
  versionId?: string;
  createdAt?: string;
  updatedAt?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      state: 'State',
      versionId: 'VersionId',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
      state: 'number',
      versionId: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationLogsResponseBodyLogsInvocationError extends $tea.Model {
  errorCode?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationLogsResponseBodyLogsWorkflow extends $tea.Model {
  definition?: string;
  version?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'Definition',
      version: 'Version',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: 'string',
      version: 'string',
      flowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationLogsResponseBodyLogsTags extends $tea.Model {
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

export class ListInvocationLogsResponseBodyLogs extends $tea.Model {
  status?: string;
  endTime?: string;
  startTime?: string;
  invocationId?: string;
  returnCode?: string;
  invocationError?: ListInvocationLogsResponseBodyLogsInvocationError;
  workflow?: ListInvocationLogsResponseBodyLogsWorkflow;
  tags?: ListInvocationLogsResponseBodyLogsTags[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endTime: 'EndTime',
      startTime: 'StartTime',
      invocationId: 'InvocationId',
      returnCode: 'ReturnCode',
      invocationError: 'InvocationError',
      workflow: 'Workflow',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      endTime: 'string',
      startTime: 'string',
      invocationId: 'string',
      returnCode: 'string',
      invocationError: ListInvocationLogsResponseBodyLogsInvocationError,
      workflow: ListInvocationLogsResponseBodyLogsWorkflow,
      tags: { 'type': 'array', 'itemType': ListInvocationLogsResponseBodyLogsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResponseBodyTags extends $tea.Model {
  createdAt?: string;
  name?: string;
  id?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      id: 'Id',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      id: 'number',
      count: 'number',
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
    this._endpoint = this.getEndpoint("logiccomposer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async abolishFlowWithOptions(request: AbolishFlowRequest, runtime: $Util.RuntimeOptions): Promise<AbolishFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AbolishFlowResponse>(await this.doRPCRequest("AbolishFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new AbolishFlowResponse({}));
  }

  async abolishFlow(request: AbolishFlowRequest): Promise<AbolishFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishFlowWithOptions(request, runtime);
  }

  async cloneFlowWithOptions(request: CloneFlowRequest, runtime: $Util.RuntimeOptions): Promise<CloneFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CloneFlowResponse>(await this.doRPCRequest("CloneFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CloneFlowResponse({}));
  }

  async cloneFlow(request: CloneFlowRequest): Promise<CloneFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cloneFlowWithOptions(request, runtime);
  }

  async createFlowWithOptions(request: CreateFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFlowResponse>(await this.doRPCRequest("CreateFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFlowResponse({}));
  }

  async createFlow(request: CreateFlowRequest): Promise<CreateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFlowWithOptions(request, runtime);
  }

  async deleteFlowWithOptions(request: DeleteFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFlowResponse>(await this.doRPCRequest("DeleteFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFlowResponse({}));
  }

  async deleteFlow(request: DeleteFlowRequest): Promise<DeleteFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFlowWithOptions(request, runtime);
  }

  async deployFlowWithOptions(request: DeployFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeployFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeployFlowResponse>(await this.doRPCRequest("DeployFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeployFlowResponse({}));
  }

  async deployFlow(request: DeployFlowRequest): Promise<DeployFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployFlowWithOptions(request, runtime);
  }

  async describeAccountSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAccountSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeAccountSummaryResponse>(await this.doRPCRequest("DescribeAccountSummary", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountSummaryResponse({}));
  }

  async describeAccountSummary(): Promise<DescribeAccountSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountSummaryWithOptions(runtime);
  }

  async describeConnectorAttributeWithOptions(request: DescribeConnectorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConnectorAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConnectorAttributeResponse>(await this.doRPCRequest("DescribeConnectorAttribute", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConnectorAttributeResponse({}));
  }

  async describeConnectorAttribute(request: DescribeConnectorAttributeRequest): Promise<DescribeConnectorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConnectorAttributeWithOptions(request, runtime);
  }

  async describeConnectorCapabilityWithOptions(request: DescribeConnectorCapabilityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConnectorCapabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeConnectorCapabilityResponse>(await this.doRPCRequest("DescribeConnectorCapability", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeConnectorCapabilityResponse({}));
  }

  async describeConnectorCapability(request: DescribeConnectorCapabilityRequest): Promise<DescribeConnectorCapabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConnectorCapabilityWithOptions(request, runtime);
  }

  async describeFlowWithOptions(request: DescribeFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowResponse>(await this.doRPCRequest("DescribeFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowResponse({}));
  }

  async describeFlow(request: DescribeFlowRequest): Promise<DescribeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowWithOptions(request, runtime);
  }

  async describeFlowMetricWithOptions(request: DescribeFlowMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowMetricResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowMetricResponse>(await this.doRPCRequest("DescribeFlowMetric", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowMetricResponse({}));
  }

  async describeFlowMetric(request: DescribeFlowMetricRequest): Promise<DescribeFlowMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowMetricWithOptions(request, runtime);
  }

  async describeFlowTemplateWithOptions(request: DescribeFlowTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFlowTemplateResponse>(await this.doRPCRequest("DescribeFlowTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFlowTemplateResponse({}));
  }

  async describeFlowTemplate(request: DescribeFlowTemplateRequest): Promise<DescribeFlowTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowTemplateWithOptions(request, runtime);
  }

  async describeInvocationLogWithOptions(request: DescribeInvocationLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInvocationLogResponse>(await this.doRPCRequest("DescribeInvocationLog", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInvocationLogResponse({}));
  }

  async describeInvocationLog(request: DescribeInvocationLogRequest): Promise<DescribeInvocationLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationLogWithOptions(request, runtime);
  }

  async describeMetricDetailWithOptions(request: DescribeMetricDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMetricDetailResponse>(await this.doRPCRequest("DescribeMetricDetail", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMetricDetailResponse({}));
  }

  async describeMetricDetail(request: DescribeMetricDetailRequest): Promise<DescribeMetricDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricDetailWithOptions(request, runtime);
  }

  async disableFlowWithOptions(request: DisableFlowRequest, runtime: $Util.RuntimeOptions): Promise<DisableFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableFlowResponse>(await this.doRPCRequest("DisableFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DisableFlowResponse({}));
  }

  async disableFlow(request: DisableFlowRequest): Promise<DisableFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableFlowWithOptions(request, runtime);
  }

  async enableFlowWithOptions(request: EnableFlowRequest, runtime: $Util.RuntimeOptions): Promise<EnableFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableFlowResponse>(await this.doRPCRequest("EnableFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new EnableFlowResponse({}));
  }

  async enableFlow(request: EnableFlowRequest): Promise<EnableFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableFlowWithOptions(request, runtime);
  }

  async invokeFlowWithOptions(request: InvokeFlowRequest, runtime: $Util.RuntimeOptions): Promise<InvokeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InvokeFlowResponse>(await this.doRPCRequest("InvokeFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new InvokeFlowResponse({}));
  }

  async invokeFlow(request: InvokeFlowRequest): Promise<InvokeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeFlowWithOptions(request, runtime);
  }

  async listConnectorsWithOptions(request: ListConnectorsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectorsResponse>(await this.doRPCRequest("ListConnectors", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectorsResponse({}));
  }

  async listConnectors(request: ListConnectorsRequest): Promise<ListConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

  async listConnectorTriggersWithOptions(request: ListConnectorTriggersRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectorTriggersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConnectorTriggersResponse>(await this.doRPCRequest("ListConnectorTriggers", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListConnectorTriggersResponse({}));
  }

  async listConnectorTriggers(request: ListConnectorTriggersRequest): Promise<ListConnectorTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectorTriggersWithOptions(request, runtime);
  }

  async listFlowWithOptions(request: ListFlowRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowResponse>(await this.doRPCRequest("ListFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowResponse({}));
  }

  async listFlow(request: ListFlowRequest): Promise<ListFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowWithOptions(request, runtime);
  }

  async listFlowConnectionsWithOptions(request: ListFlowConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowConnectionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowConnectionsResponse>(await this.doRPCRequest("ListFlowConnections", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowConnectionsResponse({}));
  }

  async listFlowConnections(request: ListFlowConnectionsRequest): Promise<ListFlowConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowConnectionsWithOptions(request, runtime);
  }

  async listFlowTemplateWithOptions(request: ListFlowTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowTemplateResponse>(await this.doRPCRequest("ListFlowTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowTemplateResponse({}));
  }

  async listFlowTemplate(request: ListFlowTemplateRequest): Promise<ListFlowTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowTemplateWithOptions(request, runtime);
  }

  async listFlowTriggersWithOptions(request: ListFlowTriggersRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowTriggersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowTriggersResponse>(await this.doRPCRequest("ListFlowTriggers", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowTriggersResponse({}));
  }

  async listFlowTriggers(request: ListFlowTriggersRequest): Promise<ListFlowTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowTriggersWithOptions(request, runtime);
  }

  async listFlowVersionWithOptions(request: ListFlowVersionRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowVersionResponse>(await this.doRPCRequest("ListFlowVersion", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowVersionResponse({}));
  }

  async listFlowVersion(request: ListFlowVersionRequest): Promise<ListFlowVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowVersionWithOptions(request, runtime);
  }

  async listInvocationLogsWithOptions(request: ListInvocationLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListInvocationLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInvocationLogsResponse>(await this.doRPCRequest("ListInvocationLogs", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListInvocationLogsResponse({}));
  }

  async listInvocationLogs(request: ListInvocationLogsRequest): Promise<ListInvocationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInvocationLogsWithOptions(request, runtime);
  }

  async listTagWithOptions(runtime: $Util.RuntimeOptions): Promise<ListTagResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListTagResponse>(await this.doRPCRequest("ListTag", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResponse({}));
  }

  async listTag(): Promise<ListTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagWithOptions(runtime);
  }

  async modifyFlowWithOptions(request: ModifyFlowRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyFlowResponse>(await this.doRPCRequest("ModifyFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyFlowResponse({}));
  }

  async modifyFlow(request: ModifyFlowRequest): Promise<ModifyFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFlowWithOptions(request, runtime);
  }

  async rollBackFlowWithOptions(request: RollBackFlowRequest, runtime: $Util.RuntimeOptions): Promise<RollBackFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollBackFlowResponse>(await this.doRPCRequest("RollBackFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new RollBackFlowResponse({}));
  }

  async rollBackFlow(request: RollBackFlowRequest): Promise<RollBackFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollBackFlowWithOptions(request, runtime);
  }

  async updateConnectionWithOptions(request: UpdateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConnectionResponse>(await this.doRPCRequest("UpdateConnection", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConnectionResponse({}));
  }

  async updateConnection(request: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

}
