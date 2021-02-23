// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CloneFlowRequest extends $tea.Model {
  flowId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneFlowResponseBody extends $tea.Model {
  requestId?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowId: 'string',
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
  flowName?: string;
  flowDescription?: string;
  definition?: string;
  templateId?: string;
  flowSource?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      flowDescription: 'FlowDescription',
      definition: 'Definition',
      templateId: 'TemplateId',
      flowSource: 'FlowSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      flowDescription: 'string',
      definition: 'string',
      templateId: 'string',
      flowSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFlowResponseBody extends $tea.Model {
  requestId?: string;
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowId: 'string',
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

export class DeleteFlowResponseBody extends $tea.Model {
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
  flowStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      flowStatus: 'FlowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      flowStatus: 'string',
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
  flowStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      flowStatus: 'FlowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      flowStatus: 'string',
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

export class GetFlowRequest extends $tea.Model {
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

export class GetFlowResponseBody extends $tea.Model {
  requestId?: string;
  flowId?: string;
  regionId?: string;
  flowName?: string;
  flowDescription?: string;
  createTime?: string;
  updateTime?: string;
  currentVersionId?: number;
  flowStatus?: string;
  definition?: string;
  templateId?: string;
  flowSource?: string;
  flowEditMode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      flowId: 'FlowId',
      regionId: 'RegionId',
      flowName: 'FlowName',
      flowDescription: 'FlowDescription',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      currentVersionId: 'CurrentVersionId',
      flowStatus: 'FlowStatus',
      definition: 'Definition',
      templateId: 'TemplateId',
      flowSource: 'FlowSource',
      flowEditMode: 'FlowEditMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      flowId: 'string',
      regionId: 'string',
      flowName: 'string',
      flowDescription: 'string',
      createTime: 'string',
      updateTime: 'string',
      currentVersionId: 'number',
      flowStatus: 'string',
      definition: 'string',
      templateId: 'string',
      flowSource: 'string',
      flowEditMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
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

export class GetTemplateResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  templateId?: string;
  templateName?: string;
  templateDescription?: string;
  templateTag?: string;
  definition?: string;
  createTime?: string;
  updateTime?: string;
  templateConnector?: string;
  templateSummary?: string;
  templateSummaryEn?: string;
  templateLocale?: string;
  templateVersion?: number;
  templateOverview?: string;
  templateCreator?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateDescription: 'TemplateDescription',
      templateTag: 'TemplateTag',
      definition: 'Definition',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      templateConnector: 'TemplateConnector',
      templateSummary: 'TemplateSummary',
      templateSummaryEn: 'TemplateSummaryEn',
      templateLocale: 'TemplateLocale',
      templateVersion: 'TemplateVersion',
      templateOverview: 'TemplateOverview',
      templateCreator: 'TemplateCreator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      templateId: 'string',
      templateName: 'string',
      templateDescription: 'string',
      templateTag: 'string',
      definition: 'string',
      createTime: 'string',
      updateTime: 'string',
      templateConnector: 'string',
      templateSummary: 'string',
      templateSummaryEn: 'string',
      templateLocale: 'string',
      templateVersion: 'number',
      templateOverview: 'string',
      templateCreator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionRequest extends $tea.Model {
  flowId?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionResponseBody extends $tea.Model {
  createTime?: string;
  definition?: string;
  flowId?: string;
  regionId?: string;
  requestId?: string;
  updateTime?: string;
  versionDescription?: string;
  versionId?: string;
  versionName?: string;
  versionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      definition: 'Definition',
      flowId: 'FlowId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      updateTime: 'UpdateTime',
      versionDescription: 'VersionDescription',
      versionId: 'VersionId',
      versionName: 'VersionName',
      versionStatus: 'VersionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      definition: 'string',
      flowId: 'string',
      regionId: 'string',
      requestId: 'string',
      updateTime: 'string',
      versionDescription: 'string',
      versionId: 'string',
      versionName: 'string',
      versionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupInvokeFlowRequest extends $tea.Model {
  flowId?: string;
  groupKey?: string;
  data?: string;
  clientToken?: string;
  totalCount?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      groupKey: 'GroupKey',
      data: 'Data',
      clientToken: 'ClientToken',
      totalCount: 'TotalCount',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      groupKey: 'string',
      data: 'string',
      clientToken: 'string',
      totalCount: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupInvokeFlowResponseBody extends $tea.Model {
  currentCount?: number;
  groupInvocationId?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentCount: 'CurrentCount',
      groupInvocationId: 'GroupInvocationId',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCount: 'number',
      groupInvocationId: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupInvokeFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GroupInvokeFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GroupInvokeFlowResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      parameters: 'Parameters',
      data: 'Data',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      parameters: 'string',
      data: 'string',
      clientToken: 'string',
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

export class ListFlowsRequest extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  flowName?: string;
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      flowName: 'FlowName',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      flowName: 'string',
      filter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  flows?: ListFlowsResponseBodyFlows[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      flows: 'Flows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      flows: { 'type': 'array', 'itemType': ListFlowsResponseBodyFlows },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  totalCount?: number;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      totalCount: 'number',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
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

export class ListTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  templates?: ListTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsRequest extends $tea.Model {
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

export class ListVersionsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  versions?: ListVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListVersionsResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string[];
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowRequest extends $tea.Model {
  flowId?: string;
  flowName?: string;
  flowDescription?: string;
  definition?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowDescription: 'FlowDescription',
      definition: 'Definition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowName: 'string',
      flowDescription: 'string',
      definition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  currentVersionId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      currentVersionId: 'CurrentVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      currentVersionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowsResponseBodyFlows extends $tea.Model {
  flowId?: string;
  regionId?: string;
  flowName?: string;
  flowDescription?: string;
  versionId?: number;
  createTime?: string;
  updateTime?: string;
  flowStatus?: string;
  templateId?: string;
  flowSource?: string;
  flowEditMode?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      regionId: 'RegionId',
      flowName: 'FlowName',
      flowDescription: 'FlowDescription',
      versionId: 'VersionId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      flowStatus: 'FlowStatus',
      templateId: 'TemplateId',
      flowSource: 'FlowSource',
      flowEditMode: 'FlowEditMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      regionId: 'string',
      flowName: 'string',
      flowDescription: 'string',
      versionId: 'number',
      createTime: 'string',
      updateTime: 'string',
      flowStatus: 'string',
      templateId: 'string',
      flowSource: 'string',
      flowEditMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  templateId?: string;
  templateName?: string;
  templateDescription?: string;
  templateTag?: string;
  createTime?: string;
  updateTime?: string;
  templateConnector?: string;
  templateSummary?: string;
  templateSummaryEn?: string;
  templateLocale?: string;
  templateVersion?: number;
  templateCreator?: string;
  templateOverview?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateDescription: 'TemplateDescription',
      templateTag: 'TemplateTag',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      templateConnector: 'TemplateConnector',
      templateSummary: 'TemplateSummary',
      templateSummaryEn: 'TemplateSummaryEn',
      templateLocale: 'TemplateLocale',
      templateVersion: 'TemplateVersion',
      templateCreator: 'TemplateCreator',
      templateOverview: 'TemplateOverview',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
      templateName: 'string',
      templateDescription: 'string',
      templateTag: 'string',
      createTime: 'string',
      updateTime: 'string',
      templateConnector: 'string',
      templateSummary: 'string',
      templateSummaryEn: 'string',
      templateLocale: 'string',
      templateVersion: 'number',
      templateCreator: 'string',
      templateOverview: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBodyVersions extends $tea.Model {
  versionId?: string;
  flowId?: string;
  versionName?: number;
  versionStatus?: number;
  createTime?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      flowId: 'FlowId',
      versionName: 'VersionName',
      versionStatus: 'VersionStatus',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      flowId: 'string',
      versionName: 'number',
      versionStatus: 'number',
      createTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("composer", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getFlowWithOptions(request: GetFlowRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFlowResponse>(await this.doRPCRequest("GetFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetFlowResponse({}));
  }

  async getFlow(request: GetFlowRequest): Promise<GetFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateResponse>(await this.doRPCRequest("GetTemplate", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async getVersionWithOptions(request: GetVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetVersionResponse>(await this.doRPCRequest("GetVersion", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new GetVersionResponse({}));
  }

  async getVersion(request: GetVersionRequest): Promise<GetVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVersionWithOptions(request, runtime);
  }

  async groupInvokeFlowWithOptions(request: GroupInvokeFlowRequest, runtime: $Util.RuntimeOptions): Promise<GroupInvokeFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GroupInvokeFlowResponse>(await this.doRPCRequest("GroupInvokeFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new GroupInvokeFlowResponse({}));
  }

  async groupInvokeFlow(request: GroupInvokeFlowRequest): Promise<GroupInvokeFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.groupInvokeFlowWithOptions(request, runtime);
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

  async listFlowsWithOptions(request: ListFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListFlowsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListFlowsResponse>(await this.doRPCRequest("ListFlows", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListFlowsResponse({}));
  }

  async listFlows(request: ListFlowsRequest): Promise<ListFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFlowsWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doRPCRequest("ListTemplates", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async listVersionsWithOptions(request: ListVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListVersionsResponse>(await this.doRPCRequest("ListVersions", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new ListVersionsResponse({}));
  }

  async listVersions(request: ListVersionsRequest): Promise<ListVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionsWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateFlowWithOptions(request: UpdateFlowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFlowResponse>(await this.doRPCRequest("UpdateFlow", "2018-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFlowResponse({}));
  }

  async updateFlow(request: UpdateFlowRequest): Promise<UpdateFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFlowWithOptions(request, runtime);
  }

}
