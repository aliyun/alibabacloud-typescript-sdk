// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelExecutionRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelExecutionResponseBody extends $tea.Model {
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

export class CancelExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  type?: string;
  value?: string;
  description?: string;
  clientToken?: string;
  constraints?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      type: 'Type',
      value: 'Value',
      description: 'Description',
      clientToken: 'ClientToken',
      constraints: 'Constraints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
      description: 'string',
      clientToken: 'string',
      constraints: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponseBody extends $tea.Model {
  requestId?: string;
  parameter?: CreateParameterResponseBodyParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameter: CreateParameterResponseBodyParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  type?: string;
  value?: string;
  description?: string;
  keyId?: string;
  clientToken?: string;
  constraints?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      type: 'Type',
      value: 'Value',
      description: 'Description',
      keyId: 'KeyId',
      clientToken: 'ClientToken',
      constraints: 'Constraints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
      description: 'string',
      keyId: 'string',
      clientToken: 'string',
      constraints: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponseBody extends $tea.Model {
  requestId?: string;
  parameter?: CreateSecretParameterResponseBodyParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameter: CreateSecretParameterResponseBodyParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSecretParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  content?: string;
  tags?: { [key: string]: any };
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      content: 'Content',
      tags: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      content: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateShrinkRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  content?: string;
  tagsShrink?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      content: 'Content',
      tagsShrink: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      content: 'string',
      tagsShrink: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateType?: string;
  template?: CreateTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateType: 'TemplateType',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateType: 'string',
      template: CreateTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionsRequest extends $tea.Model {
  regionId?: string;
  executionIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionIds: 'ExecutionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionsResponseBody extends $tea.Model {
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

export class DeleteExecutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterResponseBody extends $tea.Model {
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

export class DeleteParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretParameterResponseBody extends $tea.Model {
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

export class DeleteSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecretParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  autoDeleteExecutions?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      autoDeleteExecutions: 'AutoDeleteExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      autoDeleteExecutions: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
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

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplatesRequest extends $tea.Model {
  regionId?: string;
  templateNames?: string;
  autoDeleteExecutions?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateNames: 'TemplateNames',
      autoDeleteExecutions: 'AutoDeleteExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateNames: 'string',
      autoDeleteExecutions: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplatesResponseBody extends $tea.Model {
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

export class DeleteTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId?: string;
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyResponseBody extends $tea.Model {
  policy?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateExecutionPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateExecutionPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  template?: GetExecutionTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
      template: GetExecutionTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExecutionTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExecutionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaRequest extends $tea.Model {
  regionId?: string;
  aggregator?: boolean;
  typeName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      aggregator: 'Aggregator',
      typeName: 'TypeName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      aggregator: 'boolean',
      typeName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  schemas?: GetInventorySchemaResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInventorySchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInventorySchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  parameterVersion?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      parameterVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBody extends $tea.Model {
  requestId?: string;
  parameter?: GetParameterResponseBodyParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameter: GetParameterResponseBodyParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersRequest extends $tea.Model {
  regionId?: string;
  names?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      names: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponseBody extends $tea.Model {
  parameters?: GetParametersResponseBodyParameters[];
  requestId?: string;
  invalidParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
      invalidParameters: 'InvalidParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': GetParametersResponseBodyParameters },
      requestId: 'string',
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathRequest extends $tea.Model {
  regionId?: string;
  path?: string;
  recursive?: boolean;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      path: 'Path',
      recursive: 'Recursive',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      path: 'string',
      recursive: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponseBody extends $tea.Model {
  totalCount?: number;
  parameters?: GetParametersByPathResponseBodyParameters[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      parameters: 'Parameters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      parameters: { 'type': 'array', 'itemType': GetParametersByPathResponseBodyParameters },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetParametersByPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetParametersByPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  parameterVersion?: number;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      parameterVersion: 'number',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponseBody extends $tea.Model {
  requestId?: string;
  parameter?: GetSecretParameterResponseBodyParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameter: GetSecretParameterResponseBodyParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecretParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersRequest extends $tea.Model {
  regionId?: string;
  names?: string;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      names: 'Names',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      names: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponseBody extends $tea.Model {
  parameters?: GetSecretParametersResponseBodyParameters[];
  requestId?: string;
  invalidParameters?: string[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
      invalidParameters: 'InvalidParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': GetSecretParametersResponseBodyParameters },
      requestId: 'string',
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecretParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecretParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathRequest extends $tea.Model {
  regionId?: string;
  path?: string;
  recursive?: boolean;
  nextToken?: string;
  maxResults?: number;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      path: 'Path',
      recursive: 'Recursive',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      path: 'string',
      recursive: 'boolean',
      nextToken: 'string',
      maxResults: 'number',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponseBody extends $tea.Model {
  totalCount?: number;
  parameters?: GetSecretParametersByPathResponseBodyParameters[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      parameters: 'Parameters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      parameters: { 'type': 'array', 'itemType': GetSecretParametersByPathResponseBodyParameters },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecretParametersByPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecretParametersByPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponseBody extends $tea.Model {
  requestId?: string;
  serviceSettings?: GetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': GetServiceSettingsResponseBodyServiceSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  template?: GetTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
      template: GetTemplateResponseBodyTemplate,
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

export class ListActionsRequest extends $tea.Model {
  regionId?: string;
  OOSActionName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      OOSActionName: 'OOSActionName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      OOSActionName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  actions?: ListActionsResponseBodyActions[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      actions: 'Actions',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  taskExecutionId?: string;
  logType?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
      taskExecutionId: 'TaskExecutionId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
      taskExecutionId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  executionLogs?: ListExecutionLogsResponseBodyExecutionLogs[];
  maxResults?: number;
  isTruncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      executionLogs: 'ExecutionLogs',
      maxResults: 'MaxResults',
      isTruncated: 'IsTruncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      executionLogs: { 'type': 'array', 'itemType': ListExecutionLogsResponseBodyExecutionLogs },
      maxResults: 'number',
      isTruncated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExecutionLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExecutionLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponseBody extends $tea.Model {
  requestId?: string;
  riskyTasks?: ListExecutionRiskyTasksResponseBodyRiskyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskyTasks: 'RiskyTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskyTasks: { 'type': 'array', 'itemType': ListExecutionRiskyTasksResponseBodyRiskyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExecutionRiskyTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExecutionRiskyTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  status?: string;
  executionId?: string;
  startDateBefore?: string;
  startDateAfter?: string;
  endDateBefore?: string;
  endDateAfter?: string;
  mode?: string;
  executedBy?: string;
  parentExecutionId?: string;
  ramRole?: string;
  includeChildExecution?: boolean;
  category?: string;
  tags?: { [key: string]: any };
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  resourceId?: string;
  resourceTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      status: 'Status',
      executionId: 'ExecutionId',
      startDateBefore: 'StartDateBefore',
      startDateAfter: 'StartDateAfter',
      endDateBefore: 'EndDateBefore',
      endDateAfter: 'EndDateAfter',
      mode: 'Mode',
      executedBy: 'ExecutedBy',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      includeChildExecution: 'IncludeChildExecution',
      category: 'Category',
      tags: 'Tags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      status: 'string',
      executionId: 'string',
      startDateBefore: 'string',
      startDateAfter: 'string',
      endDateBefore: 'string',
      endDateAfter: 'string',
      mode: 'string',
      executedBy: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      includeChildExecution: 'boolean',
      category: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsShrinkRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  status?: string;
  executionId?: string;
  startDateBefore?: string;
  startDateAfter?: string;
  endDateBefore?: string;
  endDateAfter?: string;
  mode?: string;
  executedBy?: string;
  parentExecutionId?: string;
  ramRole?: string;
  includeChildExecution?: boolean;
  category?: string;
  tagsShrink?: string;
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  resourceId?: string;
  resourceTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      status: 'Status',
      executionId: 'ExecutionId',
      startDateBefore: 'StartDateBefore',
      startDateAfter: 'StartDateAfter',
      endDateBefore: 'EndDateBefore',
      endDateAfter: 'EndDateAfter',
      mode: 'Mode',
      executedBy: 'ExecutedBy',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      includeChildExecution: 'IncludeChildExecution',
      category: 'Category',
      tagsShrink: 'Tags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      status: 'string',
      executionId: 'string',
      startDateBefore: 'string',
      startDateAfter: 'string',
      endDateBefore: 'string',
      endDateAfter: 'string',
      mode: 'string',
      executedBy: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      includeChildExecution: 'boolean',
      category: 'string',
      tagsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBody extends $tea.Model {
  executions?: ListExecutionsResponseBodyExecutions[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesRequest extends $tea.Model {
  instanceId?: string;
  typeName?: string;
  maxResults?: number;
  nextToken?: string;
  filter?: ListInventoryEntriesRequestFilter[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      typeName: 'TypeName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      typeName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      filter: { 'type': 'array', 'itemType': ListInventoryEntriesRequestFilter },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesResponseBody extends $tea.Model {
  typeName?: string;
  captureTime?: string;
  nextToken?: string;
  requestId?: string;
  schemaVersion?: string;
  instanceId?: string;
  maxResults?: number;
  entries?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      typeName: 'TypeName',
      captureTime: 'CaptureTime',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemaVersion: 'SchemaVersion',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      entries: 'Entries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typeName: 'string',
      captureTime: 'string',
      nextToken: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      instanceId: 'string',
      maxResults: 'number',
      entries: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInventoryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInventoryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  type?: string;
  path?: string;
  recursive?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      type: 'Type',
      path: 'Path',
      recursive: 'Recursive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
      type: 'string',
      path: 'string',
      recursive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBody extends $tea.Model {
  totalCount?: number;
  parameters?: ListParametersResponseBodyParameters[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      parameters: 'Parameters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      parameters: { 'type': 'array', 'itemType': ListParametersResponseBodyParameters },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  maxResults?: number;
  nextToken?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      maxResults: 'number',
      nextToken: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponseBody extends $tea.Model {
  type?: string;
  totalCount?: number;
  parameterVersions?: ListParameterVersionsResponseBodyParameterVersions[];
  description?: string;
  createdBy?: string;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  createdDate?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      totalCount: 'TotalCount',
      parameterVersions: 'ParameterVersions',
      description: 'Description',
      createdBy: 'CreatedBy',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      createdDate: 'CreatedDate',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      totalCount: 'number',
      parameterVersions: { 'type': 'array', 'itemType': ListParameterVersionsResponseBodyParameterVersions },
      description: 'string',
      createdBy: 'string',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      createdDate: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListParameterVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListParameterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resourceExecutionStatus?: ListResourceExecutionStatusResponseBodyResourceExecutionStatus[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceExecutionStatus: 'ResourceExecutionStatus',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceExecutionStatus: { 'type': 'array', 'itemType': ListResourceExecutionStatusResponseBodyResourceExecutionStatus },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceExecutionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceExecutionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  path?: string;
  recursive?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      path: 'Path',
      recursive: 'Recursive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
      path: 'string',
      recursive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponseBody extends $tea.Model {
  parameters?: ListSecretParametersResponseBodyParameters[];
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': ListSecretParametersResponseBodyParameters },
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecretParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecretParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  maxResults?: number;
  nextToken?: string;
  shareType?: string;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      shareType: 'ShareType',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      maxResults: 'number',
      nextToken: 'string',
      shareType: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponseBody extends $tea.Model {
  type?: string;
  totalCount?: number;
  parameterVersions?: ListSecretParameterVersionsResponseBodyParameterVersions[];
  description?: string;
  createdBy?: string;
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  createdDate?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      totalCount: 'TotalCount',
      parameterVersions: 'ParameterVersions',
      description: 'Description',
      createdBy: 'CreatedBy',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      createdDate: 'CreatedDate',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      totalCount: 'number',
      parameterVersions: { 'type': 'array', 'itemType': ListSecretParameterVersionsResponseBodyParameterVersions },
      description: 'string',
      createdBy: 'string',
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      createdDate: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecretParameterVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecretParameterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceIds?: { [key: string]: any };
  resourceType?: string;
  tags?: { [key: string]: any };
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
  tagsShrink?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
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

export class ListTagValuesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  resourceType?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceType: 'ResourceType',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceType: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  status?: string;
  startDateBefore?: string;
  startDateAfter?: string;
  endDateBefore?: string;
  endDateAfter?: string;
  taskExecutionId?: string;
  taskName?: string;
  taskAction?: string;
  parentTaskExecutionId?: string;
  includeChildTaskExecution?: boolean;
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
      status: 'Status',
      startDateBefore: 'StartDateBefore',
      startDateAfter: 'StartDateAfter',
      endDateBefore: 'EndDateBefore',
      endDateAfter: 'EndDateAfter',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      taskAction: 'TaskAction',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      includeChildTaskExecution: 'IncludeChildTaskExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
      status: 'string',
      startDateBefore: 'string',
      startDateAfter: 'string',
      endDateBefore: 'string',
      endDateAfter: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
      taskAction: 'string',
      parentTaskExecutionId: 'string',
      includeChildTaskExecution: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  taskExecutions?: ListTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      taskExecutions: { 'type': 'array', 'itemType': ListTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateFormat?: string;
  shareType?: string;
  createdBy?: string;
  createdDateBefore?: string;
  createdDateAfter?: string;
  tags?: { [key: string]: any };
  category?: string;
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  hasTrigger?: boolean;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateFormat: 'TemplateFormat',
      shareType: 'ShareType',
      createdBy: 'CreatedBy',
      createdDateBefore: 'CreatedDateBefore',
      createdDateAfter: 'CreatedDateAfter',
      tags: 'Tags',
      category: 'Category',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      hasTrigger: 'HasTrigger',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateFormat: 'string',
      shareType: 'string',
      createdBy: 'string',
      createdDateBefore: 'string',
      createdDateAfter: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
      hasTrigger: 'boolean',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesShrinkRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateFormat?: string;
  shareType?: string;
  createdBy?: string;
  createdDateBefore?: string;
  createdDateAfter?: string;
  tagsShrink?: string;
  category?: string;
  maxResults?: number;
  nextToken?: string;
  sortField?: string;
  sortOrder?: string;
  hasTrigger?: boolean;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateFormat: 'TemplateFormat',
      shareType: 'ShareType',
      createdBy: 'CreatedBy',
      createdDateBefore: 'CreatedDateBefore',
      createdDateAfter: 'CreatedDateAfter',
      tagsShrink: 'Tags',
      category: 'Category',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      hasTrigger: 'HasTrigger',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateFormat: 'string',
      shareType: 'string',
      createdBy: 'string',
      createdDateBefore: 'string',
      createdDateAfter: 'string',
      tagsShrink: 'string',
      category: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sortField: 'string',
      sortOrder: 'string',
      hasTrigger: 'boolean',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  templates?: ListTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
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

export class ListTemplateVersionsRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  maxResults?: number;
  nextToken?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  templateVersions?: ListTemplateVersionsResponseBodyTemplateVersions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      templateVersions: 'TemplateVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      templateVersions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyTemplateVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTemplateVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTemplateVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyExecutionRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  notifyType?: string;
  notifyNote?: string;
  taskName?: string;
  taskExecutionId?: string;
  executionStatus?: string;
  parameters?: string;
  loopItem?: string;
  taskExecutionIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
      notifyType: 'NotifyType',
      notifyNote: 'NotifyNote',
      taskName: 'TaskName',
      taskExecutionId: 'TaskExecutionId',
      executionStatus: 'ExecutionStatus',
      parameters: 'Parameters',
      loopItem: 'LoopItem',
      taskExecutionIds: 'TaskExecutionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
      notifyType: 'string',
      notifyNote: 'string',
      taskName: 'string',
      taskExecutionId: 'string',
      executionStatus: 'string',
      parameters: 'string',
      loopItem: 'string',
      taskExecutionIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyExecutionResponseBody extends $tea.Model {
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

export class NotifyExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: NotifyExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: NotifyExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  filter?: SearchInventoryRequestFilter[];
  aggregator?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      filter: 'Filter',
      aggregator: 'Aggregator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      filter: { 'type': 'array', 'itemType': SearchInventoryRequestFilter },
      aggregator: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  maxResults?: number;
  entities?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      maxResults: 'number',
      entities: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsRequest extends $tea.Model {
  deliveryOssEnabled?: boolean;
  deliveryOssBucketName?: string;
  deliveryOssKeyPrefix?: string;
  deliverySlsProjectName?: string;
  deliverySlsEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      deliverySlsEnabled: 'DeliverySlsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssEnabled: 'boolean',
      deliveryOssBucketName: 'string',
      deliveryOssKeyPrefix: 'string',
      deliverySlsProjectName: 'string',
      deliverySlsEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponseBody extends $tea.Model {
  requestId?: string;
  serviceSettings?: SetServiceSettingsResponseBodyServiceSettings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceSettings: 'ServiceSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceSettings: { 'type': 'array', 'itemType': SetServiceSettingsResponseBodyServiceSettings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetServiceSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetServiceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateVersion?: string;
  mode?: string;
  loopMode?: string;
  parentExecutionId?: string;
  safetyCheck?: string;
  parameters?: string;
  clientToken?: string;
  tags?: { [key: string]: any };
  description?: string;
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      mode: 'Mode',
      loopMode: 'LoopMode',
      parentExecutionId: 'ParentExecutionId',
      safetyCheck: 'SafetyCheck',
      parameters: 'Parameters',
      clientToken: 'ClientToken',
      tags: 'Tags',
      description: 'Description',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      mode: 'string',
      loopMode: 'string',
      parentExecutionId: 'string',
      safetyCheck: 'string',
      parameters: 'string',
      clientToken: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      templateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionShrinkRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateVersion?: string;
  mode?: string;
  loopMode?: string;
  parentExecutionId?: string;
  safetyCheck?: string;
  parameters?: string;
  clientToken?: string;
  tagsShrink?: string;
  description?: string;
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      mode: 'Mode',
      loopMode: 'LoopMode',
      parentExecutionId: 'ParentExecutionId',
      safetyCheck: 'SafetyCheck',
      parameters: 'Parameters',
      clientToken: 'ClientToken',
      tagsShrink: 'Tags',
      description: 'Description',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      mode: 'string',
      loopMode: 'string',
      parentExecutionId: 'string',
      safetyCheck: 'string',
      parameters: 'string',
      clientToken: 'string',
      tagsShrink: 'string',
      description: 'string',
      templateContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBody extends $tea.Model {
  execution?: StartExecutionResponseBodyExecution;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      execution: 'Execution',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execution: StartExecutionResponseBodyExecution,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceIds?: { [key: string]: any };
  resourceType?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesShrinkRequest extends $tea.Model {
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TriggerExecutionRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  type?: string;
  content?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
      type: 'Type',
      content: 'Content',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
      type: 'string',
      content: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerExecutionResponseBody extends $tea.Model {
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

export class TriggerExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TriggerExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TriggerExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceIds?: { [key: string]: any };
  resourceType?: string;
  tagKeys?: { [key: string]: any };
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tagKeys: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
  tagKeysShrink?: string;
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeysShrink: 'TagKeys',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagKeysShrink: 'string',
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UpdateExecutionRequest extends $tea.Model {
  regionId?: string;
  executionId?: string;
  parameters?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      executionId: 'ExecutionId',
      parameters: 'Parameters',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      executionId: 'string',
      parameters: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExecutionResponseBody extends $tea.Model {
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

export class UpdateExecutionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInformationRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  agentVersion?: string;
  platformType?: string;
  platformName?: string;
  platformVersion?: string;
  ipAddress?: string;
  computerName?: string;
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      agentVersion: 'AgentVersion',
      platformType: 'PlatformType',
      platformName: 'PlatformName',
      platformVersion: 'PlatformVersion',
      ipAddress: 'IpAddress',
      computerName: 'ComputerName',
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      agentVersion: 'string',
      platformType: 'string',
      platformName: 'string',
      platformVersion: 'string',
      ipAddress: 'string',
      computerName: 'string',
      agentName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInformationResponseBody extends $tea.Model {
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

export class UpdateInstanceInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  value?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      value: 'Value',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      value: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponseBody extends $tea.Model {
  requestId?: string;
  parameter?: UpdateParameterResponseBodyParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameter: UpdateParameterResponseBodyParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterRequest extends $tea.Model {
  regionId?: string;
  name?: string;
  value?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      name: 'Name',
      value: 'Value',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      name: 'string',
      value: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponseBody extends $tea.Model {
  requestId?: string;
  parameter?: UpdateSecretParameterResponseBodyParameter;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      parameter: UpdateSecretParameterResponseBodyParameter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSecretParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  content?: string;
  tags?: { [key: string]: any };
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      content: 'Content',
      tags: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      content: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateShrinkRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  content?: string;
  tagsShrink?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      content: 'Content',
      tagsShrink: 'Tags',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      content: 'string',
      tagsShrink: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: UpdateTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdateTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentRequest extends $tea.Model {
  regionId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponseBody extends $tea.Model {
  parameters?: string;
  tasks?: ValidateTemplateContentResponseBodyTasks[];
  requestId?: string;
  outputs?: string;
  ramRole?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      tasks: 'Tasks',
      requestId: 'RequestId',
      outputs: 'Outputs',
      ramRole: 'RamRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: 'string',
      tasks: { 'type': 'array', 'itemType': ValidateTemplateContentResponseBodyTasks },
      requestId: 'string',
      outputs: 'string',
      ramRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateTemplateContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateTemplateContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponseBodyParameter extends $tea.Model {
  type?: string;
  constraints?: string;
  description?: string;
  updatedDate?: string;
  updatedBy?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      constraints: 'Constraints',
      description: 'Description',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      constraints: 'string',
      description: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponseBodyParameter extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  keyId?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      keyId: 'KeyId',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      keyId: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBodyTemplate extends $tea.Model {
  hash?: string;
  updatedDate?: string;
  updatedBy?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  templateVersion?: string;
  templateFormat?: string;
  description?: string;
  createdBy?: string;
  createdDate?: string;
  hasTrigger?: boolean;
  templateId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      tags: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateFormat: 'TemplateFormat',
      description: 'Description',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      hasTrigger: 'HasTrigger',
      templateId: 'TemplateId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      templateVersion: 'string',
      templateFormat: 'string',
      description: 'string',
      createdBy: 'string',
      createdDate: 'string',
      hasTrigger: 'boolean',
      templateId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponseBodyTemplate extends $tea.Model {
  hash?: string;
  updatedDate?: string;
  updatedBy?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  templateVersion?: string;
  templateFormat?: string;
  description?: string;
  createdBy?: string;
  createdDate?: string;
  templateId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      tags: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateFormat: 'TemplateFormat',
      description: 'Description',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      templateId: 'TemplateId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      templateVersion: 'string',
      templateFormat: 'string',
      description: 'string',
      createdBy: 'string',
      createdDate: 'string',
      templateId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBodySchemasAttributes extends $tea.Model {
  dataType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBodySchemas extends $tea.Model {
  version?: string;
  attributes?: GetInventorySchemaResponseBodySchemasAttributes[];
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      attributes: 'Attributes',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      attributes: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemasAttributes },
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBodyParameter extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  value?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      value: 'Value',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      value: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponseBodyParameters extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  value?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      value: 'Value',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      value: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponseBodyParameters extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  value?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      value: 'Value',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      value: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponseBodyParameter extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  keyId?: string;
  value?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      keyId: 'KeyId',
      value: 'Value',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      keyId: 'string',
      value: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponseBodyParameters extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  keyId?: string;
  value?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      keyId: 'KeyId',
      value: 'Value',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      keyId: 'string',
      value: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponseBodyParameters extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  keyId?: string;
  value?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      keyId: 'KeyId',
      value: 'Value',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      keyId: 'string',
      value: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponseBodyServiceSettings extends $tea.Model {
  deliveryOssBucketName?: string;
  deliveryOssKeyPrefix?: string;
  deliverySlsEnabled?: boolean;
  deliveryOssEnabled?: boolean;
  deliverySlsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliveryOssEnabled: 'boolean',
      deliverySlsProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTemplate extends $tea.Model {
  hash?: string;
  updatedDate?: string;
  updatedBy?: string;
  tags?: { [key: string]: any };
  templateType?: string;
  templateName?: string;
  templateVersion?: string;
  templateFormat?: string;
  description?: string;
  createdBy?: string;
  createdDate?: string;
  versionName?: string;
  templateId?: string;
  hasTrigger?: boolean;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      tags: 'Tags',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateFormat: 'TemplateFormat',
      description: 'Description',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      versionName: 'VersionName',
      templateId: 'TemplateId',
      hasTrigger: 'HasTrigger',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateType: 'string',
      templateName: 'string',
      templateVersion: 'string',
      templateFormat: 'string',
      description: 'string',
      createdBy: 'string',
      createdDate: 'string',
      versionName: 'string',
      templateId: 'string',
      hasTrigger: 'boolean',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBodyActions extends $tea.Model {
  actionType?: string;
  description?: string;
  createdDate?: string;
  templateVersion?: string;
  OOSActionName?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      description: 'Description',
      createdDate: 'CreatedDate',
      templateVersion: 'TemplateVersion',
      OOSActionName: 'OOSActionName',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      description: 'string',
      createdDate: 'string',
      templateVersion: 'string',
      OOSActionName: 'string',
      properties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBodyExecutionLogs extends $tea.Model {
  taskExecutionId?: string;
  message?: string;
  logType?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      taskExecutionId: 'TaskExecutionId',
      message: 'Message',
      logType: 'LogType',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskExecutionId: 'string',
      message: 'string',
      logType: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponseBodyRiskyTasks extends $tea.Model {
  service?: string;
  task?: string[];
  API?: string;
  template?: string[];
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      task: 'Task',
      API: 'API',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      task: { 'type': 'array', 'itemType': 'string' },
      API: 'string',
      template: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutionsCurrentTasks extends $tea.Model {
  taskExecutionId?: string;
  taskName?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskExecutionId: 'string',
      taskName: 'string',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutions extends $tea.Model {
  status?: string;
  waitingStatus?: string;
  targets?: string;
  statusReason?: string;
  tags?: { [key: string]: any };
  lastSuccessfulTriggerTime?: string;
  mode?: string;
  safetyCheck?: string;
  templateName?: string;
  templateVersion?: string;
  createDate?: string;
  currentTasks?: ListExecutionsResponseBodyExecutionsCurrentTasks[];
  description?: string;
  updateDate?: string;
  parentExecutionId?: string;
  lastTriggerTime?: string;
  lastTriggerStatus?: string;
  statusMessage?: string;
  outputs?: string;
  endDate?: string;
  executedBy?: string;
  isParent?: boolean;
  startDate?: string;
  executionId?: string;
  parameters?: { [key: string]: any };
  counters?: { [key: string]: any };
  category?: string;
  templateId?: string;
  ramRole?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      waitingStatus: 'WaitingStatus',
      targets: 'Targets',
      statusReason: 'StatusReason',
      tags: 'Tags',
      lastSuccessfulTriggerTime: 'LastSuccessfulTriggerTime',
      mode: 'Mode',
      safetyCheck: 'SafetyCheck',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      updateDate: 'UpdateDate',
      parentExecutionId: 'ParentExecutionId',
      lastTriggerTime: 'LastTriggerTime',
      lastTriggerStatus: 'LastTriggerStatus',
      statusMessage: 'StatusMessage',
      outputs: 'Outputs',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      isParent: 'IsParent',
      startDate: 'StartDate',
      executionId: 'ExecutionId',
      parameters: 'Parameters',
      counters: 'Counters',
      category: 'Category',
      templateId: 'TemplateId',
      ramRole: 'RamRole',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      waitingStatus: 'string',
      targets: 'string',
      statusReason: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      lastSuccessfulTriggerTime: 'string',
      mode: 'string',
      safetyCheck: 'string',
      templateName: 'string',
      templateVersion: 'string',
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutionsCurrentTasks },
      description: 'string',
      updateDate: 'string',
      parentExecutionId: 'string',
      lastTriggerTime: 'string',
      lastTriggerStatus: 'string',
      statusMessage: 'string',
      outputs: 'string',
      endDate: 'string',
      executedBy: 'string',
      isParent: 'boolean',
      startDate: 'string',
      executionId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      templateId: 'string',
      ramRole: 'string',
      resourceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesRequestFilter extends $tea.Model {
  value?: string[];
  operator?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      operator: 'Operator',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBodyParameters extends $tea.Model {
  type?: string;
  description?: string;
  updatedDate?: string;
  updatedBy?: string;
  createdBy?: string;
  parameterVersion?: string;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      createdBy: 'string',
      parameterVersion: 'string',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponseBodyParameterVersions extends $tea.Model {
  value?: string;
  updatedDate?: string;
  updatedBy?: string;
  parameterVersion?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      parameterVersion: 'ParameterVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      parameterVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponseBodyResourceExecutionStatus extends $tea.Model {
  outputs?: string;
  status?: string;
  executionTime?: string;
  resourceId?: string;
  executionId?: string;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      status: 'Status',
      executionTime: 'ExecutionTime',
      resourceId: 'ResourceId',
      executionId: 'ExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      status: 'string',
      executionTime: 'string',
      resourceId: 'string',
      executionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponseBodyParameters extends $tea.Model {
  type?: string;
  description?: string;
  updatedDate?: string;
  updatedBy?: string;
  createdBy?: string;
  keyId?: string;
  parameterVersion?: string;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      description: 'Description',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      createdBy: 'CreatedBy',
      keyId: 'KeyId',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      description: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      createdBy: 'string',
      keyId: 'string',
      parameterVersion: 'string',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponseBodyParameterVersions extends $tea.Model {
  value?: string;
  updatedDate?: string;
  updatedBy?: string;
  parameterVersion?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      parameterVersion: 'ParameterVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      parameterVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponseBodyTaskExecutions extends $tea.Model {
  status?: string;
  outputs?: string;
  childExecutionId?: string;
  endDate?: string;
  parentTaskExecutionId?: string;
  taskName?: string;
  startDate?: string;
  loopItem?: string;
  createDate?: string;
  executionId?: string;
  taskAction?: string;
  taskExecutionId?: string;
  updateDate?: string;
  loop?: { [key: string]: any };
  templateId?: string;
  loopBatchNumber?: number;
  statusMessage?: string;
  extraData?: { [key: string]: any };
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      outputs: 'Outputs',
      childExecutionId: 'ChildExecutionId',
      endDate: 'EndDate',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      taskName: 'TaskName',
      startDate: 'StartDate',
      loopItem: 'LoopItem',
      createDate: 'CreateDate',
      executionId: 'ExecutionId',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      updateDate: 'UpdateDate',
      loop: 'Loop',
      templateId: 'TemplateId',
      loopBatchNumber: 'LoopBatchNumber',
      statusMessage: 'StatusMessage',
      extraData: 'ExtraData',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      outputs: 'string',
      childExecutionId: 'string',
      endDate: 'string',
      parentTaskExecutionId: 'string',
      taskName: 'string',
      startDate: 'string',
      loopItem: 'string',
      createDate: 'string',
      executionId: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      updateDate: 'string',
      loop: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateId: 'string',
      loopBatchNumber: 'number',
      statusMessage: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      properties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  hash?: string;
  updatedDate?: string;
  updatedBy?: string;
  tags?: { [key: string]: any };
  templateType?: string;
  templateName?: string;
  templateVersion?: string;
  templateFormat?: string;
  popularity?: number;
  description?: string;
  totalExecutionCount?: number;
  createdBy?: string;
  createdDate?: string;
  category?: string;
  hasTrigger?: boolean;
  templateId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      tags: 'Tags',
      templateType: 'TemplateType',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateFormat: 'TemplateFormat',
      popularity: 'Popularity',
      description: 'Description',
      totalExecutionCount: 'TotalExecutionCount',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      category: 'Category',
      hasTrigger: 'HasTrigger',
      templateId: 'TemplateId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateType: 'string',
      templateName: 'string',
      templateVersion: 'string',
      templateFormat: 'string',
      popularity: 'number',
      description: 'string',
      totalExecutionCount: 'number',
      createdBy: 'string',
      createdDate: 'string',
      category: 'string',
      hasTrigger: 'boolean',
      templateId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBodyTemplateVersions extends $tea.Model {
  description?: string;
  updatedDate?: string;
  updatedBy?: string;
  versionName?: string;
  templateVersion?: string;
  templateFormat?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      versionName: 'VersionName',
      templateVersion: 'TemplateVersion',
      templateFormat: 'TemplateFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      versionName: 'string',
      templateVersion: 'string',
      templateFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequestFilter extends $tea.Model {
  value?: string[];
  operator?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      operator: 'Operator',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'string' },
      operator: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponseBodyServiceSettings extends $tea.Model {
  deliveryOssBucketName?: string;
  deliveryOssKeyPrefix?: string;
  deliverySlsEnabled?: boolean;
  deliveryOssEnabled?: boolean;
  deliverySlsProjectName?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliveryOssEnabled: 'boolean',
      deliverySlsProjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBodyExecutionCurrentTasks extends $tea.Model {
  taskExecutionId?: string;
  taskName?: string;
  taskAction?: string;
  static names(): { [key: string]: string } {
    return {
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      taskAction: 'TaskAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskExecutionId: 'string',
      taskName: 'string',
      taskAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBodyExecution extends $tea.Model {
  status?: string;
  outputs?: string;
  executedBy?: string;
  endDate?: string;
  isParent?: boolean;
  startDate?: string;
  tags?: { [key: string]: any };
  mode?: string;
  safetyCheck?: string;
  templateName?: string;
  templateVersion?: string;
  createDate?: string;
  executionId?: string;
  currentTasks?: StartExecutionResponseBodyExecutionCurrentTasks[];
  parameters?: string;
  description?: string;
  counters?: { [key: string]: any };
  updateDate?: string;
  parentExecutionId?: string;
  ramRole?: string;
  templateId?: string;
  statusMessage?: string;
  loopMode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      outputs: 'Outputs',
      executedBy: 'ExecutedBy',
      endDate: 'EndDate',
      isParent: 'IsParent',
      startDate: 'StartDate',
      tags: 'Tags',
      mode: 'Mode',
      safetyCheck: 'SafetyCheck',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      createDate: 'CreateDate',
      executionId: 'ExecutionId',
      currentTasks: 'CurrentTasks',
      parameters: 'Parameters',
      description: 'Description',
      counters: 'Counters',
      updateDate: 'UpdateDate',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      templateId: 'TemplateId',
      statusMessage: 'StatusMessage',
      loopMode: 'LoopMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      outputs: 'string',
      executedBy: 'string',
      endDate: 'string',
      isParent: 'boolean',
      startDate: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mode: 'string',
      safetyCheck: 'string',
      templateName: 'string',
      templateVersion: 'string',
      createDate: 'string',
      executionId: 'string',
      currentTasks: { 'type': 'array', 'itemType': StartExecutionResponseBodyExecutionCurrentTasks },
      parameters: 'string',
      description: 'string',
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      templateId: 'string',
      statusMessage: 'string',
      loopMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponseBodyParameter extends $tea.Model {
  type?: string;
  constraints?: string;
  description?: string;
  updatedDate?: string;
  updatedBy?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      constraints: 'Constraints',
      description: 'Description',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      constraints: 'string',
      description: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponseBodyParameter extends $tea.Model {
  type?: string;
  updatedDate?: string;
  updatedBy?: string;
  keyId?: string;
  constraints?: string;
  description?: string;
  createdBy?: string;
  parameterVersion?: number;
  createdDate?: string;
  name?: string;
  id?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      keyId: 'KeyId',
      constraints: 'Constraints',
      description: 'Description',
      createdBy: 'CreatedBy',
      parameterVersion: 'ParameterVersion',
      createdDate: 'CreatedDate',
      name: 'Name',
      id: 'Id',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      keyId: 'string',
      constraints: 'string',
      description: 'string',
      createdBy: 'string',
      parameterVersion: 'number',
      createdDate: 'string',
      name: 'string',
      id: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBodyTemplate extends $tea.Model {
  hash?: string;
  updatedDate?: string;
  updatedBy?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  templateVersion?: string;
  templateFormat?: string;
  description?: string;
  createdBy?: string;
  createdDate?: string;
  hasTrigger?: boolean;
  templateId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      hash: 'Hash',
      updatedDate: 'UpdatedDate',
      updatedBy: 'UpdatedBy',
      tags: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateFormat: 'TemplateFormat',
      description: 'Description',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      hasTrigger: 'HasTrigger',
      templateId: 'TemplateId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hash: 'string',
      updatedDate: 'string',
      updatedBy: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      templateVersion: 'string',
      templateFormat: 'string',
      description: 'string',
      createdBy: 'string',
      createdDate: 'string',
      hasTrigger: 'boolean',
      templateId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponseBodyTasks extends $tea.Model {
  outputs?: string;
  type?: string;
  description?: string;
  name?: string;
  properties?: string;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      type: 'Type',
      description: 'Description',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      type: 'string',
      description: 'string',
      name: 'string',
      properties: 'string',
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
    this._endpoint = this.getEndpoint("oos", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelExecutionWithOptions(request: CancelExecutionRequest, runtime: $Util.RuntimeOptions): Promise<CancelExecutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelExecutionResponse>(await this.doRPCRequest("CancelExecution", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CancelExecutionResponse({}));
  }

  async cancelExecution(request: CancelExecutionRequest): Promise<CancelExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelExecutionWithOptions(request, runtime);
  }

  async createParameterWithOptions(request: CreateParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreateParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateParameterResponse>(await this.doRPCRequest("CreateParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateParameterResponse({}));
  }

  async createParameter(request: CreateParameterRequest): Promise<CreateParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParameterWithOptions(request, runtime);
  }

  async createSecretParameterWithOptions(request: CreateSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSecretParameterResponse>(await this.doRPCRequest("CreateSecretParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSecretParameterResponse({}));
  }

  async createSecretParameter(request: CreateSecretParameterRequest): Promise<CreateSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecretParameterWithOptions(request, runtime);
  }

  async createTemplateWithOptions(tmpReq: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doRPCRequest("CreateTemplate", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteExecutionsWithOptions(request: DeleteExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExecutionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExecutionsResponse>(await this.doRPCRequest("DeleteExecutions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExecutionsResponse({}));
  }

  async deleteExecutions(request: DeleteExecutionsRequest): Promise<DeleteExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExecutionsWithOptions(request, runtime);
  }

  async deleteParameterWithOptions(request: DeleteParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteParameterResponse>(await this.doRPCRequest("DeleteParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteParameterResponse({}));
  }

  async deleteParameter(request: DeleteParameterRequest): Promise<DeleteParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParameterWithOptions(request, runtime);
  }

  async deleteSecretParameterWithOptions(request: DeleteSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSecretParameterResponse>(await this.doRPCRequest("DeleteSecretParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSecretParameterResponse({}));
  }

  async deleteSecretParameter(request: DeleteSecretParameterRequest): Promise<DeleteSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretParameterWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doRPCRequest("DeleteTemplate", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async deleteTemplatesWithOptions(request: DeleteTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTemplatesResponse>(await this.doRPCRequest("DeleteTemplates", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTemplatesResponse({}));
  }

  async deleteTemplates(request: DeleteTemplatesRequest): Promise<DeleteTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplatesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async generateExecutionPolicyWithOptions(request: GenerateExecutionPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateExecutionPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateExecutionPolicyResponse>(await this.doRPCRequest("GenerateExecutionPolicy", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateExecutionPolicyResponse({}));
  }

  async generateExecutionPolicy(request: GenerateExecutionPolicyRequest): Promise<GenerateExecutionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateExecutionPolicyWithOptions(request, runtime);
  }

  async getExecutionTemplateWithOptions(request: GetExecutionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetExecutionTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetExecutionTemplateResponse>(await this.doRPCRequest("GetExecutionTemplate", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetExecutionTemplateResponse({}));
  }

  async getExecutionTemplate(request: GetExecutionTemplateRequest): Promise<GetExecutionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecutionTemplateWithOptions(request, runtime);
  }

  async getInventorySchemaWithOptions(request: GetInventorySchemaRequest, runtime: $Util.RuntimeOptions): Promise<GetInventorySchemaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetInventorySchemaResponse>(await this.doRPCRequest("GetInventorySchema", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetInventorySchemaResponse({}));
  }

  async getInventorySchema(request: GetInventorySchemaRequest): Promise<GetInventorySchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInventorySchemaWithOptions(request, runtime);
  }

  async getParameterWithOptions(request: GetParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetParameterResponse>(await this.doRPCRequest("GetParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetParameterResponse({}));
  }

  async getParameter(request: GetParameterRequest): Promise<GetParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParameterWithOptions(request, runtime);
  }

  async getParametersWithOptions(request: GetParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetParametersResponse>(await this.doRPCRequest("GetParameters", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetParametersResponse({}));
  }

  async getParameters(request: GetParametersRequest): Promise<GetParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersWithOptions(request, runtime);
  }

  async getParametersByPathWithOptions(request: GetParametersByPathRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersByPathResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetParametersByPathResponse>(await this.doRPCRequest("GetParametersByPath", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetParametersByPathResponse({}));
  }

  async getParametersByPath(request: GetParametersByPathRequest): Promise<GetParametersByPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersByPathWithOptions(request, runtime);
  }

  async getSecretParameterWithOptions(request: GetSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSecretParameterResponse>(await this.doRPCRequest("GetSecretParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecretParameterResponse({}));
  }

  async getSecretParameter(request: GetSecretParameterRequest): Promise<GetSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParameterWithOptions(request, runtime);
  }

  async getSecretParametersWithOptions(request: GetSecretParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSecretParametersResponse>(await this.doRPCRequest("GetSecretParameters", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecretParametersResponse({}));
  }

  async getSecretParameters(request: GetSecretParametersRequest): Promise<GetSecretParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParametersWithOptions(request, runtime);
  }

  async getSecretParametersByPathWithOptions(request: GetSecretParametersByPathRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParametersByPathResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSecretParametersByPathResponse>(await this.doRPCRequest("GetSecretParametersByPath", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecretParametersByPathResponse({}));
  }

  async getSecretParametersByPath(request: GetSecretParametersByPathRequest): Promise<GetSecretParametersByPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParametersByPathWithOptions(request, runtime);
  }

  async getServiceSettingsWithOptions(runtime: $Util.RuntimeOptions): Promise<GetServiceSettingsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetServiceSettingsResponse>(await this.doRPCRequest("GetServiceSettings", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceSettingsResponse({}));
  }

  async getServiceSettings(): Promise<GetServiceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceSettingsWithOptions(runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateResponse>(await this.doRPCRequest("GetTemplate", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async listActionsWithOptions(request: ListActionsRequest, runtime: $Util.RuntimeOptions): Promise<ListActionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListActionsResponse>(await this.doRPCRequest("ListActions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListActionsResponse({}));
  }

  async listActions(request: ListActionsRequest): Promise<ListActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActionsWithOptions(request, runtime);
  }

  async listExecutionLogsWithOptions(request: ListExecutionLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionLogsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExecutionLogsResponse>(await this.doRPCRequest("ListExecutionLogs", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListExecutionLogsResponse({}));
  }

  async listExecutionLogs(request: ListExecutionLogsRequest): Promise<ListExecutionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionLogsWithOptions(request, runtime);
  }

  async listExecutionRiskyTasksWithOptions(request: ListExecutionRiskyTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionRiskyTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExecutionRiskyTasksResponse>(await this.doRPCRequest("ListExecutionRiskyTasks", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListExecutionRiskyTasksResponse({}));
  }

  async listExecutionRiskyTasks(request: ListExecutionRiskyTasksRequest): Promise<ListExecutionRiskyTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionRiskyTasksWithOptions(request, runtime);
  }

  async listExecutionsWithOptions(tmpReq: ListExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListExecutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListExecutionsResponse>(await this.doRPCRequest("ListExecutions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListExecutionsResponse({}));
  }

  async listExecutions(request: ListExecutionsRequest): Promise<ListExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  async listInventoryEntriesWithOptions(request: ListInventoryEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListInventoryEntriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListInventoryEntriesResponse>(await this.doRPCRequest("ListInventoryEntries", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListInventoryEntriesResponse({}));
  }

  async listInventoryEntries(request: ListInventoryEntriesRequest): Promise<ListInventoryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInventoryEntriesWithOptions(request, runtime);
  }

  async listParametersWithOptions(request: ListParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListParametersResponse>(await this.doRPCRequest("ListParameters", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListParametersResponse({}));
  }

  async listParameters(request: ListParametersRequest): Promise<ListParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParametersWithOptions(request, runtime);
  }

  async listParameterVersionsWithOptions(request: ListParameterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListParameterVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListParameterVersionsResponse>(await this.doRPCRequest("ListParameterVersions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListParameterVersionsResponse({}));
  }

  async listParameterVersions(request: ListParameterVersionsRequest): Promise<ListParameterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParameterVersionsWithOptions(request, runtime);
  }

  async listResourceExecutionStatusWithOptions(request: ListResourceExecutionStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceExecutionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListResourceExecutionStatusResponse>(await this.doRPCRequest("ListResourceExecutionStatus", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourceExecutionStatusResponse({}));
  }

  async listResourceExecutionStatus(request: ListResourceExecutionStatusRequest): Promise<ListResourceExecutionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceExecutionStatusWithOptions(request, runtime);
  }

  async listSecretParametersWithOptions(request: ListSecretParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretParametersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecretParametersResponse>(await this.doRPCRequest("ListSecretParameters", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecretParametersResponse({}));
  }

  async listSecretParameters(request: ListSecretParametersRequest): Promise<ListSecretParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretParametersWithOptions(request, runtime);
  }

  async listSecretParameterVersionsWithOptions(request: ListSecretParameterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretParameterVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecretParameterVersionsResponse>(await this.doRPCRequest("ListSecretParameterVersions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecretParameterVersionsResponse({}));
  }

  async listSecretParameterVersions(request: ListSecretParameterVersionsRequest): Promise<ListSecretParameterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretParameterVersionsWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listTaskExecutionsWithOptions(request: ListTaskExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskExecutionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskExecutionsResponse>(await this.doRPCRequest("ListTaskExecutions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskExecutionsResponse({}));
  }

  async listTaskExecutions(request: ListTaskExecutionsRequest): Promise<ListTaskExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskExecutionsWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(tmpReq: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doRPCRequest("ListTemplates", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async listTemplateVersionsWithOptions(request: ListTemplateVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplateVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplateVersionsResponse>(await this.doRPCRequest("ListTemplateVersions", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplateVersionsResponse({}));
  }

  async listTemplateVersions(request: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  async notifyExecutionWithOptions(request: NotifyExecutionRequest, runtime: $Util.RuntimeOptions): Promise<NotifyExecutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<NotifyExecutionResponse>(await this.doRPCRequest("NotifyExecution", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new NotifyExecutionResponse({}));
  }

  async notifyExecution(request: NotifyExecutionRequest): Promise<NotifyExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyExecutionWithOptions(request, runtime);
  }

  async searchInventoryWithOptions(request: SearchInventoryRequest, runtime: $Util.RuntimeOptions): Promise<SearchInventoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SearchInventoryResponse>(await this.doRPCRequest("SearchInventory", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new SearchInventoryResponse({}));
  }

  async searchInventory(request: SearchInventoryRequest): Promise<SearchInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchInventoryWithOptions(request, runtime);
  }

  async setServiceSettingsWithOptions(request: SetServiceSettingsRequest, runtime: $Util.RuntimeOptions): Promise<SetServiceSettingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetServiceSettingsResponse>(await this.doRPCRequest("SetServiceSettings", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new SetServiceSettingsResponse({}));
  }

  async setServiceSettings(request: SetServiceSettingsRequest): Promise<SetServiceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setServiceSettingsWithOptions(request, runtime);
  }

  async startExecutionWithOptions(tmpReq: StartExecutionRequest, runtime: $Util.RuntimeOptions): Promise<StartExecutionResponse> {
    Util.validateModel(tmpReq);
    let request = new StartExecutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartExecutionResponse>(await this.doRPCRequest("StartExecution", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new StartExecutionResponse({}));
  }

  async startExecution(request: StartExecutionRequest): Promise<StartExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(tmpReq: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new TagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async triggerExecutionWithOptions(request: TriggerExecutionRequest, runtime: $Util.RuntimeOptions): Promise<TriggerExecutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TriggerExecutionResponse>(await this.doRPCRequest("TriggerExecution", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new TriggerExecutionResponse({}));
  }

  async triggerExecution(request: TriggerExecutionRequest): Promise<TriggerExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.triggerExecutionWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!Util.isUnset(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateExecutionWithOptions(request: UpdateExecutionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateExecutionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateExecutionResponse>(await this.doRPCRequest("UpdateExecution", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateExecutionResponse({}));
  }

  async updateExecution(request: UpdateExecutionRequest): Promise<UpdateExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExecutionWithOptions(request, runtime);
  }

  async updateInstanceInformationWithOptions(request: UpdateInstanceInformationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceInformationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateInstanceInformationResponse>(await this.doRPCRequest("UpdateInstanceInformation", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateInstanceInformationResponse({}));
  }

  async updateInstanceInformation(request: UpdateInstanceInformationRequest): Promise<UpdateInstanceInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceInformationWithOptions(request, runtime);
  }

  async updateParameterWithOptions(request: UpdateParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateParameterResponse>(await this.doRPCRequest("UpdateParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateParameterResponse({}));
  }

  async updateParameter(request: UpdateParameterRequest): Promise<UpdateParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateParameterWithOptions(request, runtime);
  }

  async updateSecretParameterWithOptions(request: UpdateSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretParameterResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSecretParameterResponse>(await this.doRPCRequest("UpdateSecretParameter", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSecretParameterResponse({}));
  }

  async updateSecretParameter(request: UpdateSecretParameterRequest): Promise<UpdateSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretParameterWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(tmpReq: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doRPCRequest("UpdateTemplate", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  async validateTemplateContentWithOptions(request: ValidateTemplateContentRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTemplateContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateTemplateContentResponse>(await this.doRPCRequest("ValidateTemplateContent", "2019-06-01", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateTemplateContentResponse({}));
  }

  async validateTemplateContent(request: ValidateTemplateContentRequest): Promise<ValidateTemplateContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTemplateContentWithOptions(request, runtime);
  }

}
