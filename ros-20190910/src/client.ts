// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelUpdateStackRequest extends $tea.Model {
  cancelType?: string;
  regionId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelType: 'CancelType',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelType: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelUpdateStackResponseBody extends $tea.Model {
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

export class CancelUpdateStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelUpdateStackResponseBody;
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
      body: CancelUpdateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackRequest extends $tea.Model {
  dryRun?: boolean;
  mode?: string;
  parallelism?: number;
  parameters?: ContinueCreateStackRequestParameters[];
  ramRoleName?: string;
  recreatingResources?: string[];
  regionId?: string;
  stackId?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      mode: 'Mode',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      recreatingResources: 'RecreatingResources',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      mode: 'string',
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': ContinueCreateStackRequestParameters },
      ramRoleName: 'string',
      recreatingResources: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackResponseBody extends $tea.Model {
  requestId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ContinueCreateStackResponseBody;
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
      body: ContinueCreateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetRequest extends $tea.Model {
  changeSetName?: string;
  changeSetType?: string;
  clientToken?: string;
  description?: string;
  disableRollback?: boolean;
  notificationURLs?: string[];
  parallelism?: number;
  parameters?: CreateChangeSetRequestParameters[];
  ramRoleName?: string;
  regionId?: string;
  replacementOption?: string;
  resourcesToImport?: CreateChangeSetRequestResourcesToImport[];
  stackId?: string;
  stackName?: string;
  stackPolicyBody?: string;
  stackPolicyDuringUpdateBody?: string;
  stackPolicyDuringUpdateURL?: string;
  stackPolicyURL?: string;
  templateBody?: string;
  templateId?: string;
  templateScratchId?: string;
  templateURL?: string;
  templateVersion?: string;
  timeoutInMinutes?: number;
  usePreviousParameters?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      clientToken: 'ClientToken',
      description: 'Description',
      disableRollback: 'DisableRollback',
      notificationURLs: 'NotificationURLs',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      replacementOption: 'ReplacementOption',
      resourcesToImport: 'ResourcesToImport',
      stackId: 'StackId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      stackPolicyURL: 'StackPolicyURL',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      usePreviousParameters: 'UsePreviousParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetName: 'string',
      changeSetType: 'string',
      clientToken: 'string',
      description: 'string',
      disableRollback: 'boolean',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': CreateChangeSetRequestParameters },
      ramRoleName: 'string',
      regionId: 'string',
      replacementOption: 'string',
      resourcesToImport: { 'type': 'array', 'itemType': CreateChangeSetRequestResourcesToImport },
      stackId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyDuringUpdateBody: 'string',
      stackPolicyDuringUpdateURL: 'string',
      stackPolicyURL: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      usePreviousParameters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetResponseBody extends $tea.Model {
  changeSetId?: string;
  requestId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateChangeSetResponseBody;
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
      body: CreateChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequest extends $tea.Model {
  clientToken?: string;
  createOption?: string;
  deletionProtection?: string;
  disableRollback?: boolean;
  notificationURLs?: string[];
  parallelism?: number;
  parameters?: CreateStackRequestParameters[];
  ramRoleName?: string;
  regionId?: string;
  resourceGroupId?: string;
  stackName?: string;
  stackPolicyBody?: string;
  stackPolicyURL?: string;
  tags?: CreateStackRequestTags[];
  templateBody?: string;
  templateId?: string;
  templateScratchId?: string;
  templateScratchRegionId?: string;
  templateURL?: string;
  templateVersion?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      createOption: 'CreateOption',
      deletionProtection: 'DeletionProtection',
      disableRollback: 'DisableRollback',
      notificationURLs: 'NotificationURLs',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      createOption: 'string',
      deletionProtection: 'string',
      disableRollback: 'boolean',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': CreateStackRequestParameters },
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
      tags: { 'type': 'array', 'itemType': CreateStackRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackResponseBody extends $tea.Model {
  requestId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStackResponseBody;
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
      body: CreateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequest extends $tea.Model {
  administrationRoleName?: string;
  autoDeployment?: CreateStackGroupRequestAutoDeployment;
  clientToken?: string;
  description?: string;
  executionRoleName?: string;
  parameters?: CreateStackGroupRequestParameters[];
  permissionModel?: string;
  regionId?: string;
  resourceGroupId?: string;
  stackGroupName?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      administrationRoleName: 'AdministrationRoleName',
      autoDeployment: 'AutoDeployment',
      clientToken: 'ClientToken',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackGroupName: 'StackGroupName',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrationRoleName: 'string',
      autoDeployment: CreateStackGroupRequestAutoDeployment,
      clientToken: 'string',
      description: 'string',
      executionRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': CreateStackGroupRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackGroupName: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupShrinkRequest extends $tea.Model {
  administrationRoleName?: string;
  autoDeploymentShrink?: string;
  clientToken?: string;
  description?: string;
  executionRoleName?: string;
  parameters?: CreateStackGroupShrinkRequestParameters[];
  permissionModel?: string;
  regionId?: string;
  resourceGroupId?: string;
  stackGroupName?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      administrationRoleName: 'AdministrationRoleName',
      autoDeploymentShrink: 'AutoDeployment',
      clientToken: 'ClientToken',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stackGroupName: 'StackGroupName',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrationRoleName: 'string',
      autoDeploymentShrink: 'string',
      clientToken: 'string',
      description: 'string',
      executionRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': CreateStackGroupShrinkRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stackGroupName: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupResponseBody extends $tea.Model {
  requestId?: string;
  stackGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupId: 'StackGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStackGroupResponseBody;
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
      body: CreateStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequest extends $tea.Model {
  accountIds?: string[];
  clientToken?: string;
  deploymentTargets?: CreateStackInstancesRequestDeploymentTargets;
  disableRollback?: boolean;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  parameterOverrides?: CreateStackInstancesRequestParameterOverrides[];
  regionId?: string;
  regionIds?: string[];
  stackGroupName?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      disableRollback: 'DisableRollback',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: CreateStackInstancesRequestDeploymentTargets,
      disableRollback: 'boolean',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesRequestParameterOverrides },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesShrinkRequest extends $tea.Model {
  accountIdsShrink?: string;
  clientToken?: string;
  deploymentTargetsShrink?: string;
  disableRollback?: boolean;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  parameterOverrides?: CreateStackInstancesShrinkRequestParameterOverrides[];
  regionId?: string;
  regionIdsShrink?: string;
  stackGroupName?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      disableRollback: 'DisableRollback',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      disableRollback: 'boolean',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesShrinkRequestParameterOverrides },
      regionId: 'string',
      regionIdsShrink: 'string',
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStackInstancesResponseBody;
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
      body: CreateStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  description?: string;
  resourceGroupId?: string;
  templateBody?: string;
  templateName?: string;
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      templateBody: 'TemplateBody',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      resourceGroupId: 'string',
      templateBody: 'string',
      templateName: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTemplateResponseBody;
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
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  executionMode?: string;
  logicalIdStrategy?: string;
  preferenceParameters?: CreateTemplateScratchRequestPreferenceParameters[];
  regionId?: string;
  sourceResourceGroup?: CreateTemplateScratchRequestSourceResourceGroup;
  sourceResources?: CreateTemplateScratchRequestSourceResources[];
  sourceTag?: CreateTemplateScratchRequestSourceTag;
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      regionId: 'RegionId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': CreateTemplateScratchRequestPreferenceParameters },
      regionId: 'string',
      sourceResourceGroup: CreateTemplateScratchRequestSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': CreateTemplateScratchRequestSourceResources },
      sourceTag: CreateTemplateScratchRequestSourceTag,
      templateScratchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchShrinkRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  executionMode?: string;
  logicalIdStrategy?: string;
  preferenceParametersShrink?: string;
  regionId?: string;
  sourceResourceGroupShrink?: string;
  sourceResourcesShrink?: string;
  sourceTagShrink?: string;
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParametersShrink: 'PreferenceParameters',
      regionId: 'RegionId',
      sourceResourceGroupShrink: 'SourceResourceGroup',
      sourceResourcesShrink: 'SourceResources',
      sourceTagShrink: 'SourceTag',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParametersShrink: 'string',
      regionId: 'string',
      sourceResourceGroupShrink: 'string',
      sourceResourcesShrink: 'string',
      sourceTagShrink: 'string',
      templateScratchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchResponseBody extends $tea.Model {
  requestId?: string;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTemplateScratchResponseBody;
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
      body: CreateTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeSetRequest extends $tea.Model {
  changeSetId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChangeSetResponseBody extends $tea.Model {
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

export class DeleteChangeSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteChangeSetResponseBody;
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
      body: DeleteChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackRequest extends $tea.Model {
  ramRoleName?: string;
  regionId?: string;
  retainAllResources?: boolean;
  retainResources?: string[];
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramRoleName: 'string',
      regionId: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackResponseBody extends $tea.Model {
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

export class DeleteStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStackResponseBody;
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
      body: DeleteStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackGroupRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackGroupResponseBody extends $tea.Model {
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

export class DeleteStackGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStackGroupResponseBody;
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
      body: DeleteStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesRequest extends $tea.Model {
  accountIds?: string[];
  clientToken?: string;
  deploymentTargets?: DeleteStackInstancesRequestDeploymentTargets;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  regionId?: string;
  regionIds?: string[];
  retainStacks?: boolean;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      retainStacks: 'RetainStacks',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: DeleteStackInstancesRequestDeploymentTargets,
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      retainStacks: 'boolean',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesShrinkRequest extends $tea.Model {
  accountIdsShrink?: string;
  clientToken?: string;
  deploymentTargetsShrink?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  regionId?: string;
  regionIdsShrink?: string;
  retainStacks?: boolean;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      retainStacks: 'RetainStacks',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      regionId: 'string',
      regionIdsShrink: 'string',
      retainStacks: 'boolean',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStackInstancesResponseBody;
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
      body: DeleteStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
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
  statusCode: number;
  body: DeleteTemplateResponseBody;
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
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateScratchRequest extends $tea.Model {
  regionId?: string;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateScratchResponseBody extends $tea.Model {
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

export class DeleteTemplateScratchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTemplateScratchResponseBody;
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
      body: DeleteTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftRequest extends $tea.Model {
  clientToken?: string;
  logicalResourceId?: string[];
  regionId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftResponseBody extends $tea.Model {
  driftDetectionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectStackDriftResponseBody;
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
      body: DetectStackDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftRequest extends $tea.Model {
  clientToken?: string;
  operationPreferences?: { [key: string]: any };
  regionId?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationPreferences: 'OperationPreferences',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftShrinkRequest extends $tea.Model {
  clientToken?: string;
  operationPreferencesShrink?: string;
  regionId?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationPreferencesShrink: 'OperationPreferences',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationPreferencesShrink: 'string',
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectStackGroupDriftResponseBody;
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
      body: DetectStackGroupDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftRequest extends $tea.Model {
  clientToken?: string;
  logicalResourceId?: string;
  regionId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftResponseBody extends $tea.Model {
  actualProperties?: string;
  driftDetectionTime?: string;
  expectedProperties?: string;
  logicalResourceId?: string;
  physicalResourceId?: string;
  propertyDifferences?: DetectStackResourceDriftResponseBodyPropertyDifferences[];
  requestId?: string;
  resourceDriftStatus?: string;
  resourceType?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      actualProperties: 'ActualProperties',
      driftDetectionTime: 'DriftDetectionTime',
      expectedProperties: 'ExpectedProperties',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      propertyDifferences: 'PropertyDifferences',
      requestId: 'RequestId',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualProperties: 'string',
      driftDetectionTime: 'string',
      expectedProperties: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': DetectStackResourceDriftResponseBodyPropertyDifferences },
      requestId: 'string',
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectStackResourceDriftResponseBody;
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
      body: DetectStackResourceDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteChangeSetRequest extends $tea.Model {
  changeSetId?: string;
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      clientToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteChangeSetResponseBody extends $tea.Model {
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

export class ExecuteChangeSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExecuteChangeSetResponseBody;
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
      body: ExecuteChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchRequest extends $tea.Model {
  provisionRegionId?: string;
  regionId?: string;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionRegionId: 'ProvisionRegionId',
      regionId: 'RegionId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionRegionId: 'string',
      regionId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchResponseBody extends $tea.Model {
  requestId?: string;
  resourcesToImport?: GenerateTemplateByScratchResponseBodyResourcesToImport[];
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcesToImport: 'ResourcesToImport',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcesToImport: { 'type': 'array', 'itemType': GenerateTemplateByScratchResponseBodyResourcesToImport },
      templateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateTemplateByScratchResponseBody;
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
      body: GenerateTemplateByScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyRequest extends $tea.Model {
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBody extends $tea.Model {
  policy?: GenerateTemplatePolicyResponseBodyPolicy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GenerateTemplatePolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateTemplatePolicyResponseBody;
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
      body: GenerateTemplatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetRequest extends $tea.Model {
  changeSetId?: string;
  regionId?: string;
  showTemplate?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
      showTemplate: 'ShowTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      regionId: 'string',
      showTemplate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBody extends $tea.Model {
  changeSetId?: string;
  changeSetName?: string;
  changeSetType?: string;
  changes?: { [key: string]: any }[];
  createTime?: string;
  description?: string;
  disableRollback?: boolean;
  executionStatus?: string;
  log?: GetChangeSetResponseBodyLog;
  parameters?: GetChangeSetResponseBodyParameters[];
  regionId?: string;
  requestId?: string;
  stackId?: string;
  stackName?: string;
  status?: string;
  statusReason?: string;
  templateBody?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      changes: 'Changes',
      createTime: 'CreateTime',
      description: 'Description',
      disableRollback: 'DisableRollback',
      executionStatus: 'ExecutionStatus',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      requestId: 'RequestId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      templateBody: 'TemplateBody',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      changes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      createTime: 'string',
      description: 'string',
      disableRollback: 'boolean',
      executionStatus: 'string',
      log: GetChangeSetResponseBodyLog,
      parameters: { 'type': 'array', 'itemType': GetChangeSetResponseBodyParameters },
      regionId: 'string',
      requestId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      templateBody: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetChangeSetResponseBody;
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
      body: GetChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsRequest extends $tea.Model {
  feature?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBody extends $tea.Model {
  requestId?: string;
  resourceCleaner?: GetFeatureDetailsResponseBodyResourceCleaner;
  templateScratch?: GetFeatureDetailsResponseBodyTemplateScratch;
  terraform?: GetFeatureDetailsResponseBodyTerraform;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceCleaner: 'ResourceCleaner',
      templateScratch: 'TemplateScratch',
      terraform: 'Terraform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceCleaner: GetFeatureDetailsResponseBodyResourceCleaner,
      templateScratch: GetFeatureDetailsResponseBodyTemplateScratch,
      terraform: GetFeatureDetailsResponseBodyTerraform,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFeatureDetailsResponseBody;
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
      body: GetFeatureDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeRequest extends $tea.Model {
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponseBody extends $tea.Model {
  attributes?: { [key: string]: any };
  entityType?: string;
  properties?: { [key: string]: any };
  requestId?: string;
  resourceType?: string;
  supportDriftDetection?: boolean;
  supportScratchDetection?: boolean;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      entityType: 'EntityType',
      properties: 'Properties',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      supportDriftDetection: 'SupportDriftDetection',
      supportScratchDetection: 'SupportScratchDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      entityType: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      resourceType: 'string',
      supportDriftDetection: 'boolean',
      supportScratchDetection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceTypeResponseBody;
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
      body: GetResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeTemplateRequest extends $tea.Model {
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateBody?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceTypeTemplateResponseBody;
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
      body: GetResourceTypeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequest extends $tea.Model {
  parameters?: GetServiceProvisionsRequestParameters[];
  regionId?: string;
  services?: GetServiceProvisionsRequestServices[];
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      services: 'Services',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': GetServiceProvisionsRequestParameters },
      regionId: 'string',
      services: { 'type': 'array', 'itemType': GetServiceProvisionsRequestServices },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBody extends $tea.Model {
  requestId?: string;
  serviceProvisions?: GetServiceProvisionsResponseBodyServiceProvisions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceProvisions: 'ServiceProvisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceProvisionsResponseBody;
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
      body: GetServiceProvisionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackRequest extends $tea.Model {
  clientToken?: string;
  logOption?: string;
  outputOption?: string;
  regionId?: string;
  showResourceProgress?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logOption: 'LogOption',
      outputOption: 'OutputOption',
      regionId: 'RegionId',
      showResourceProgress: 'ShowResourceProgress',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logOption: 'string',
      outputOption: 'string',
      regionId: 'string',
      showResourceProgress: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBody extends $tea.Model {
  createTime?: string;
  deletionProtection?: string;
  description?: string;
  disableRollback?: boolean;
  driftDetectionTime?: string;
  interface?: string;
  log?: GetStackResponseBodyLog;
  notificationURLs?: string[];
  outputs?: { [key: string]: any }[];
  parameters?: GetStackResponseBodyParameters[];
  parentStackId?: string;
  ramRoleName?: string;
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  resourceProgress?: GetStackResponseBodyResourceProgress;
  rootStackId?: string;
  serviceManaged?: boolean;
  serviceName?: string;
  stackDriftStatus?: string;
  stackId?: string;
  stackName?: string;
  stackType?: string;
  status?: string;
  statusReason?: string;
  tags?: GetStackResponseBodyTags[];
  templateDescription?: string;
  templateId?: string;
  templateScratchId?: string;
  templateURL?: string;
  templateVersion?: string;
  timeoutInMinutes?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      disableRollback: 'DisableRollback',
      driftDetectionTime: 'DriftDetectionTime',
      interface: 'Interface',
      log: 'Log',
      notificationURLs: 'NotificationURLs',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentStackId: 'ParentStackId',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceProgress: 'ResourceProgress',
      rootStackId: 'RootStackId',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
      stackName: 'StackName',
      stackType: 'StackType',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      templateDescription: 'TemplateDescription',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'string',
      description: 'string',
      disableRollback: 'boolean',
      driftDetectionTime: 'string',
      interface: 'string',
      log: GetStackResponseBodyLog,
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      outputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameters: { 'type': 'array', 'itemType': GetStackResponseBodyParameters },
      parentStackId: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      resourceProgress: GetStackResponseBodyResourceProgress,
      rootStackId: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
      stackName: 'string',
      stackType: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': GetStackResponseBodyTags },
      templateDescription: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackResponseBody;
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
      body: GetStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusRequest extends $tea.Model {
  driftDetectionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusResponseBody extends $tea.Model {
  driftDetectionId?: string;
  driftDetectionStatus?: string;
  driftDetectionStatusReason?: string;
  driftDetectionTime?: string;
  driftedStackResourceCount?: number;
  requestId?: string;
  stackDriftStatus?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      driftDetectionId: 'DriftDetectionId',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionStatusReason: 'DriftDetectionStatusReason',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackResourceCount: 'DriftedStackResourceCount',
      requestId: 'RequestId',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionId: 'string',
      driftDetectionStatus: 'string',
      driftDetectionStatusReason: 'string',
      driftDetectionTime: 'string',
      driftedStackResourceCount: 'number',
      requestId: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackDriftDetectionStatusResponseBody;
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
      body: GetStackDriftDetectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupRequest extends $tea.Model {
  regionId?: string;
  stackGroupId?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBody extends $tea.Model {
  requestId?: string;
  stackGroup?: GetStackGroupResponseBodyStackGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroup: 'StackGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroup: GetStackGroupResponseBodyStackGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackGroupResponseBody;
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
      body: GetStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationRequest extends $tea.Model {
  operationId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBody extends $tea.Model {
  requestId?: string;
  stackGroupOperation?: GetStackGroupOperationResponseBodyStackGroupOperation;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackGroupOperation: 'StackGroupOperation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackGroupOperation: GetStackGroupOperationResponseBodyStackGroupOperation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackGroupOperationResponseBody;
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
      body: GetStackGroupOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  stackInstanceAccountId?: string;
  stackInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponseBody extends $tea.Model {
  requestId?: string;
  stackInstance?: GetStackInstanceResponseBodyStackInstance;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInstance: 'StackInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInstance: GetStackInstanceResponseBodyStackInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackInstanceResponseBody;
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
      body: GetStackInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyRequest extends $tea.Model {
  regionId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyResponseBody extends $tea.Model {
  requestId?: string;
  stackPolicyBody?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackPolicyBody: 'StackPolicyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackPolicyResponseBody;
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
      body: GetStackPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceRequest extends $tea.Model {
  clientToken?: string;
  logicalResourceId?: string;
  regionId?: string;
  resourceAttributes?: string[];
  showResourceAttributes?: boolean;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      resourceAttributes: 'ResourceAttributes',
      showResourceAttributes: 'ShowResourceAttributes',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': 'string' },
      showResourceAttributes: 'boolean',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponseBody extends $tea.Model {
  createTime?: string;
  description?: string;
  driftDetectionTime?: string;
  logicalResourceId?: string;
  metadata?: { [key: string]: any };
  physicalResourceId?: string;
  requestId?: string;
  resourceAttributes?: { [key: string]: any }[];
  resourceDriftStatus?: string;
  resourceType?: string;
  stackId?: string;
  stackName?: string;
  status?: string;
  statusReason?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      driftDetectionTime: 'DriftDetectionTime',
      logicalResourceId: 'LogicalResourceId',
      metadata: 'Metadata',
      physicalResourceId: 'PhysicalResourceId',
      requestId: 'RequestId',
      resourceAttributes: 'ResourceAttributes',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      driftDetectionTime: 'string',
      logicalResourceId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      physicalResourceId: 'string',
      requestId: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStackResourceResponseBody;
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
      body: GetStackResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  changeSetId?: string;
  includePermission?: string;
  includeTags?: string;
  regionId?: string;
  stackGroupName?: string;
  stackId?: string;
  templateId?: string;
  templateStage?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      includePermission: 'IncludePermission',
      includeTags: 'IncludeTags',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      templateId: 'TemplateId',
      templateStage: 'TemplateStage',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      includePermission: 'string',
      includeTags: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      templateId: 'string',
      templateStage: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  changeSetId?: string;
  createTime?: string;
  description?: string;
  interface?: string;
  ownerId?: string;
  permissions?: GetTemplateResponseBodyPermissions[];
  regionId?: string;
  requestId?: string;
  resourceGroupId?: string;
  shareType?: string;
  stackGroupName?: string;
  stackId?: string;
  tags?: GetTemplateResponseBodyTags[];
  templateARN?: string;
  templateBody?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      createTime: 'CreateTime',
      description: 'Description',
      interface: 'Interface',
      ownerId: 'OwnerId',
      permissions: 'Permissions',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      tags: 'Tags',
      templateARN: 'TemplateARN',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      createTime: 'string',
      description: 'string',
      interface: 'string',
      ownerId: 'string',
      permissions: { 'type': 'array', 'itemType': GetTemplateResponseBodyPermissions },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      tags: { 'type': 'array', 'itemType': GetTemplateResponseBodyTags },
      templateARN: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateResponseBody;
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
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateEstimateCostRequest extends $tea.Model {
  clientToken?: string;
  parameters?: GetTemplateEstimateCostRequestParameters[];
  regionId?: string;
  templateBody?: string;
  templateId?: string;
  templateScratchId?: string;
  templateScratchRegionId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateEstimateCostRequestParameters },
      regionId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateEstimateCostResponseBody extends $tea.Model {
  requestId?: string;
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateEstimateCostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateEstimateCostResponseBody;
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
      body: GetTemplateEstimateCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsRequest extends $tea.Model {
  clientToken?: string;
  parameters?: GetTemplateParameterConstraintsRequestParameters[];
  parametersKeyFilter?: string[];
  regionId?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      parametersKeyFilter: 'ParametersKeyFilter',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsRequestParameters },
      parametersKeyFilter: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsShrinkRequest extends $tea.Model {
  clientToken?: string;
  parameters?: GetTemplateParameterConstraintsShrinkRequestParameters[];
  parametersKeyFilterShrink?: string;
  regionId?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      parametersKeyFilterShrink: 'ParametersKeyFilter',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsShrinkRequestParameters },
      parametersKeyFilterShrink: 'string',
      regionId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBody extends $tea.Model {
  parameterConstraints?: GetTemplateParameterConstraintsResponseBodyParameterConstraints[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterConstraints: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateParameterConstraintsResponseBody;
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
      body: GetTemplateParameterConstraintsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchRequest extends $tea.Model {
  regionId?: string;
  showDataOption?: string;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      showDataOption: 'ShowDataOption',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      showDataOption: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBody extends $tea.Model {
  requestId?: string;
  templateScratch?: GetTemplateScratchResponseBodyTemplateScratch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratch: 'TemplateScratch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratch: GetTemplateScratchResponseBodyTemplateScratch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateScratchResponseBody;
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
      body: GetTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryRequest extends $tea.Model {
  changeSetId?: string;
  regionId?: string;
  stackGroupName?: string;
  stackId?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponseBody extends $tea.Model {
  description?: string;
  metadata?: { [key: string]: any };
  parameters?: { [key: string]: any }[];
  requestId?: string;
  resourceIdentifierSummaries?: GetTemplateSummaryResponseBodyResourceIdentifierSummaries[];
  resourceTypes?: string[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      metadata: 'Metadata',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceIdentifierSummaries: 'ResourceIdentifierSummaries',
      resourceTypes: 'ResourceTypes',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceIdentifierSummaries: { 'type': 'array', 'itemType': GetTemplateSummaryResponseBodyResourceIdentifierSummaries },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTemplateSummaryResponseBody;
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
      body: GetTemplateSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsRequest extends $tea.Model {
  changeSetId?: string;
  changeSetName?: string[];
  executionStatus?: string[];
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  stackId?: string;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      executionStatus: 'ExecutionStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: { 'type': 'array', 'itemType': 'string' },
      executionStatus: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponseBody extends $tea.Model {
  changeSets?: ListChangeSetsResponseBodyChangeSets[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      changeSets: 'ChangeSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSets: { 'type': 'array', 'itemType': ListChangeSetsResponseBodyChangeSets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChangeSetsResponseBody;
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
      body: ListChangeSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesRequest extends $tea.Model {
  entityType?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $tea.Model {
  requestId?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceTypesResponseBody;
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
      body: ListResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsRequest extends $tea.Model {
  logicalResourceId?: string[];
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceType?: string[];
  stackId?: string;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceType: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponseBody extends $tea.Model {
  events?: ListStackEventsResponseBodyEvents[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListStackEventsResponseBodyEvents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackEventsResponseBody;
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
      body: ListStackEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsRequest extends $tea.Model {
  operationId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  stackGroupOperationResults?: ListStackGroupOperationResultsResponseBodyStackGroupOperationResults[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperationResults: 'StackGroupOperationResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperationResults: { 'type': 'array', 'itemType': ListStackGroupOperationResultsResponseBodyStackGroupOperationResults },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackGroupOperationResultsResponseBody;
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
      body: ListStackGroupOperationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  stackGroupOperations?: ListStackGroupOperationsResponseBodyStackGroupOperations[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroupOperations: 'StackGroupOperations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroupOperations: { 'type': 'array', 'itemType': ListStackGroupOperationsResponseBodyStackGroupOperations },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackGroupOperationsResponseBody;
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
      body: ListStackGroupOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  stackGroups?: ListStackGroupsResponseBodyStackGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroups: 'StackGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroups: { 'type': 'array', 'itemType': ListStackGroupsResponseBodyStackGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackGroupsResponseBody;
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
      body: ListStackGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  stackGroupName?: string;
  stackInstanceAccountId?: string;
  stackInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  stackInstances?: ListStackInstancesResponseBodyStackInstances[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackInstances: 'StackInstances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackInstances: { 'type': 'array', 'itemType': ListStackInstancesResponseBodyStackInstances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackInstancesResponseBody;
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
      body: ListStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksRequest extends $tea.Model {
  clientToken?: string;
  operationType?: string;
  ramRoleName?: string;
  regionId?: string;
  retainAllResources?: boolean;
  retainResources?: string[];
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      operationType: 'OperationType',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      operationType: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponseBody extends $tea.Model {
  requestId?: string;
  riskResources?: ListStackOperationRisksResponseBodyRiskResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskResources: 'RiskResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskResources: { 'type': 'array', 'itemType': ListStackOperationRisksResponseBodyRiskResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackOperationRisksResponseBody;
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
      body: ListStackOperationRisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceDriftStatus?: string[];
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceDriftStatus: 'ResourceDriftStatus',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceDriftStatus: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  resourceDrifts?: ListStackResourceDriftsResponseBodyResourceDrifts[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceDrifts: 'ResourceDrifts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceDrifts: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDrifts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackResourceDriftsResponseBody;
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
      body: ListStackResourceDriftsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesRequest extends $tea.Model {
  regionId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBody extends $tea.Model {
  requestId?: string;
  resources?: ListStackResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListStackResourcesResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStackResourcesResponseBody;
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
      body: ListStackResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parentStackId?: string;
  regionId?: string;
  resourceGroupId?: string;
  showNestedStack?: boolean;
  stackId?: string;
  stackIds?: string[];
  stackName?: string[];
  status?: string[];
  tag?: ListStacksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showNestedStack: 'ShowNestedStack',
      stackId: 'StackId',
      stackIds: 'StackIds',
      stackName: 'StackName',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentStackId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showNestedStack: 'boolean',
      stackId: 'string',
      stackIds: { 'type': 'array', 'itemType': 'string' },
      stackName: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListStacksRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  stacks?: ListStacksResponseBodyStacks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stacks: 'Stacks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stacks: { 'type': 'array', 'itemType': ListStacksResponseBodyStacks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStacksResponseBody;
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
      body: ListStacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  keys?: string[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
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
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  key?: string;
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  status?: string;
  templateScratchId?: string;
  templateScratchType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
      templateScratchId: 'string',
      templateScratchType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  templateScratches?: ListTemplateScratchesResponseBodyTemplateScratches[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templateScratches: 'TemplateScratches',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateScratches: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratches },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTemplateScratchesResponseBody;
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
      body: ListTemplateScratchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  versions?: ListTemplateVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      versions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTemplateVersionsResponseBody;
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
      body: ListTemplateVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  includeTags?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  shareType?: string;
  tag?: ListTemplatesRequestTag[];
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tag: 'Tag',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tag: { 'type': 'array', 'itemType': ListTemplatesRequestTag },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  templates?: ListTemplatesResponseBodyTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTemplatesResponseBody;
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
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveResourceGroupResponseBody;
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
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackRequest extends $tea.Model {
  clientToken?: string;
  disableRollback?: boolean;
  parallelism?: number;
  parameters?: PreviewStackRequestParameters[];
  regionId?: string;
  stackId?: string;
  stackName?: string;
  stackPolicyBody?: string;
  stackPolicyURL?: string;
  templateBody?: string;
  templateId?: string;
  templateScratchId?: string;
  templateScratchRegionId?: string;
  templateURL?: string;
  templateVersion?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableRollback: 'DisableRollback',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackId: 'StackId',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateScratchId: 'TemplateScratchId',
      templateScratchRegionId: 'TemplateScratchRegionId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableRollback: 'boolean',
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': PreviewStackRequestParameters },
      regionId: 'string',
      stackId: 'string',
      stackName: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateScratchId: 'string',
      templateScratchRegionId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBody extends $tea.Model {
  requestId?: string;
  stack?: PreviewStackResponseBodyStack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stack: PreviewStackResponseBodyStack,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreviewStackResponseBody;
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
      body: PreviewStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionRequest extends $tea.Model {
  deletionProtection?: string;
  regionId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtection: 'DeletionProtection',
      regionId: 'RegionId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtection: 'string',
      regionId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionResponseBody extends $tea.Model {
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

export class SetDeletionProtectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDeletionProtectionResponseBody;
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
      body: SetDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStackPolicyRequest extends $tea.Model {
  regionId?: string;
  stackId?: string;
  stackPolicyBody?: string;
  stackPolicyURL?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      stackPolicyBody: 'string',
      stackPolicyURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStackPolicyResponseBody extends $tea.Model {
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

export class SetStackPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetStackPolicyResponseBody;
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
      body: SetStackPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTemplatePermissionRequest extends $tea.Model {
  accountIds?: string[];
  shareOption?: string;
  templateId?: string;
  templateVersion?: string;
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      shareOption: 'ShareOption',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      shareOption: 'string',
      templateId: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTemplatePermissionResponseBody extends $tea.Model {
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

export class SetTemplatePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetTemplatePermissionResponseBody;
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
      body: SetTemplatePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalResourceRequest extends $tea.Model {
  clientToken?: string;
  logicalResourceId?: string;
  regionId?: string;
  stackId?: string;
  status?: string;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
      status: 'Status',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      logicalResourceId: 'string',
      regionId: 'string',
      stackId: 'string',
      status: 'string',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalResourceResponseBody extends $tea.Model {
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

export class SignalResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SignalResourceResponseBody;
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
      body: SignalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStackGroupOperationRequest extends $tea.Model {
  operationId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStackGroupOperationResponseBody extends $tea.Model {
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

export class StopStackGroupOperationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopStackGroupOperationResponseBody;
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
      body: StopStackGroupOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
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
  statusCode: number;
  body: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
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
  statusCode: number;
  body: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackRequest extends $tea.Model {
  clientToken?: string;
  disableRollback?: boolean;
  parallelism?: number;
  parameters?: UpdateStackRequestParameters[];
  ramRoleName?: string;
  regionId?: string;
  replacementOption?: string;
  resourceGroupId?: string;
  stackId?: string;
  stackPolicyBody?: string;
  stackPolicyDuringUpdateBody?: string;
  stackPolicyDuringUpdateURL?: string;
  stackPolicyURL?: string;
  tags?: UpdateStackRequestTags[];
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  timeoutInMinutes?: number;
  usePreviousParameters?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      disableRollback: 'DisableRollback',
      parallelism: 'Parallelism',
      parameters: 'Parameters',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      replacementOption: 'ReplacementOption',
      resourceGroupId: 'ResourceGroupId',
      stackId: 'StackId',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      stackPolicyURL: 'StackPolicyURL',
      tags: 'Tags',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
      timeoutInMinutes: 'TimeoutInMinutes',
      usePreviousParameters: 'UsePreviousParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      disableRollback: 'boolean',
      parallelism: 'number',
      parameters: { 'type': 'array', 'itemType': UpdateStackRequestParameters },
      ramRoleName: 'string',
      regionId: 'string',
      replacementOption: 'string',
      resourceGroupId: 'string',
      stackId: 'string',
      stackPolicyBody: 'string',
      stackPolicyDuringUpdateBody: 'string',
      stackPolicyDuringUpdateURL: 'string',
      stackPolicyURL: 'string',
      tags: { 'type': 'array', 'itemType': UpdateStackRequestTags },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
      timeoutInMinutes: 'number',
      usePreviousParameters: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackResponseBody extends $tea.Model {
  requestId?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStackResponseBody;
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
      body: UpdateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequest extends $tea.Model {
  accountIds?: string[];
  administrationRoleName?: string;
  autoDeployment?: UpdateStackGroupRequestAutoDeployment;
  clientToken?: string;
  deploymentTargets?: UpdateStackGroupRequestDeploymentTargets;
  description?: string;
  executionRoleName?: string;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  parameters?: UpdateStackGroupRequestParameters[];
  permissionModel?: string;
  regionId?: string;
  regionIds?: string[];
  stackGroupName?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      administrationRoleName: 'AdministrationRoleName',
      autoDeployment: 'AutoDeployment',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      administrationRoleName: 'string',
      autoDeployment: UpdateStackGroupRequestAutoDeployment,
      clientToken: 'string',
      deploymentTargets: UpdateStackGroupRequestDeploymentTargets,
      description: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameters: { 'type': 'array', 'itemType': UpdateStackGroupRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupShrinkRequest extends $tea.Model {
  accountIdsShrink?: string;
  administrationRoleName?: string;
  autoDeploymentShrink?: string;
  clientToken?: string;
  deploymentTargetsShrink?: string;
  description?: string;
  executionRoleName?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  parameters?: UpdateStackGroupShrinkRequestParameters[];
  permissionModel?: string;
  regionId?: string;
  regionIdsShrink?: string;
  stackGroupName?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      administrationRoleName: 'AdministrationRoleName',
      autoDeploymentShrink: 'AutoDeployment',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      stackGroupName: 'StackGroupName',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      administrationRoleName: 'string',
      autoDeploymentShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      description: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateStackGroupShrinkRequestParameters },
      permissionModel: 'string',
      regionId: 'string',
      regionIdsShrink: 'string',
      stackGroupName: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStackGroupResponseBody;
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
      body: UpdateStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesRequest extends $tea.Model {
  accountIds?: string[];
  clientToken?: string;
  deploymentTargets?: UpdateStackInstancesRequestDeploymentTargets;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  parameterOverrides?: UpdateStackInstancesRequestParameterOverrides[];
  regionId?: string;
  regionIds?: string[];
  stackGroupName?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargets: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIds: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      deploymentTargets: UpdateStackInstancesRequestDeploymentTargets,
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesRequestParameterOverrides },
      regionId: 'string',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesShrinkRequest extends $tea.Model {
  accountIdsShrink?: string;
  clientToken?: string;
  deploymentTargetsShrink?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  parameterOverrides?: UpdateStackInstancesShrinkRequestParameterOverrides[];
  regionId?: string;
  regionIdsShrink?: string;
  stackGroupName?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'AccountIds',
      clientToken: 'ClientToken',
      deploymentTargetsShrink: 'DeploymentTargets',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      parameterOverrides: 'ParameterOverrides',
      regionId: 'RegionId',
      regionIdsShrink: 'RegionIds',
      stackGroupName: 'StackGroupName',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      clientToken: 'string',
      deploymentTargetsShrink: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesShrinkRequestParameterOverrides },
      regionId: 'string',
      regionIdsShrink: 'string',
      stackGroupName: 'string',
      timeoutInMinutes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesResponseBody extends $tea.Model {
  operationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStackInstancesResponseBody;
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
      body: UpdateStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  logicalResourceId?: string[];
  regionId?: string;
  stackId?: string;
  templateFormat?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      logicalResourceId: 'LogicalResourceId',
      regionId: 'RegionId',
      stackId: 'StackId',
      templateFormat: 'TemplateFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stackId: 'string',
      templateFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesResponseBody extends $tea.Model {
  newTemplateBody?: string;
  oldTemplateBody?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newTemplateBody: 'NewTemplateBody',
      oldTemplateBody: 'OldTemplateBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newTemplateBody: 'string',
      oldTemplateBody: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStackTemplateByResourcesResponseBody;
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
      body: UpdateStackTemplateByResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  description?: string;
  templateBody?: string;
  templateId?: string;
  templateName?: string;
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateName: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTemplateResponseBody;
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
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  executionMode?: string;
  logicalIdStrategy?: string;
  preferenceParameters?: UpdateTemplateScratchRequestPreferenceParameters[];
  regionId?: string;
  sourceResourceGroup?: UpdateTemplateScratchRequestSourceResourceGroup;
  sourceResources?: UpdateTemplateScratchRequestSourceResources[];
  sourceTag?: UpdateTemplateScratchRequestSourceTag;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      regionId: 'RegionId',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': UpdateTemplateScratchRequestPreferenceParameters },
      regionId: 'string',
      sourceResourceGroup: UpdateTemplateScratchRequestSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': UpdateTemplateScratchRequestSourceResources },
      sourceTag: UpdateTemplateScratchRequestSourceTag,
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchShrinkRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  executionMode?: string;
  logicalIdStrategy?: string;
  preferenceParametersShrink?: string;
  regionId?: string;
  sourceResourceGroupShrink?: string;
  sourceResourcesShrink?: string;
  sourceTagShrink?: string;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionMode: 'ExecutionMode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParametersShrink: 'PreferenceParameters',
      regionId: 'RegionId',
      sourceResourceGroupShrink: 'SourceResourceGroup',
      sourceResourcesShrink: 'SourceResources',
      sourceTagShrink: 'SourceTag',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionMode: 'string',
      logicalIdStrategy: 'string',
      preferenceParametersShrink: 'string',
      regionId: 'string',
      sourceResourceGroupShrink: 'string',
      sourceResourcesShrink: 'string',
      sourceTagShrink: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchResponseBody extends $tea.Model {
  requestId?: string;
  templateScratchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateScratchId: 'TemplateScratchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateScratchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTemplateScratchResponseBody;
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
      body: UpdateTemplateScratchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  templateBody?: string;
  templateURL?: string;
  validationOption?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      validationOption: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      templateBody: 'string',
      templateURL: 'string',
      validationOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBody extends $tea.Model {
  description?: string;
  outputs?: ValidateTemplateResponseBodyOutputs[];
  parameters?: { [key: string]: any }[];
  requestId?: string;
  resourceTypes?: ValidateTemplateResponseBodyResourceTypes;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputs: 'Outputs',
      parameters: 'Parameters',
      requestId: 'RequestId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputs: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyOutputs },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      resourceTypes: ValidateTemplateResponseBodyResourceTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateTemplateResponseBody;
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
      body: ValidateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetRequestResourcesToImport extends $tea.Model {
  logicalResourceId?: string;
  resourceIdentifier?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceIdentifier: 'ResourceIdentifier',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceIdentifier: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequestTags extends $tea.Model {
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

export class CreateStackGroupRequestAutoDeployment extends $tea.Model {
  enabled?: boolean;
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupShrinkRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequestDeploymentTargets extends $tea.Model {
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequestParameterOverrides extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesShrinkRequestParameterOverrides extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestPreferenceParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestSourceResourceGroup extends $tea.Model {
  resourceGroupId?: string;
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestSourceResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateScratchRequestSourceTag extends $tea.Model {
  resourceTags?: { [key: string]: any };
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesRequestDeploymentTargets extends $tea.Model {
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
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

export class DetectStackResourceDriftResponseBodyPropertyDifferences extends $tea.Model {
  actualValue?: string;
  differenceType?: string;
  expectedValue?: string;
  propertyPath?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      expectedValue: 'ExpectedValue',
      propertyPath: 'PropertyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      expectedValue: 'string',
      propertyPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplateByScratchResponseBodyResourcesToImport extends $tea.Model {
  logicalResourceId?: string;
  resourceIdentifier?: { [key: string]: any };
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceIdentifier: 'ResourceIdentifier',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceIdentifier: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicyStatement extends $tea.Model {
  action?: string[];
  effect?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      effect: 'Effect',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': 'string' },
      effect: 'string',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicy extends $tea.Model {
  statement?: GenerateTemplatePolicyResponseBodyPolicyStatement[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      statement: 'Statement',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statement: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyStatement },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyLogTerraformLogs extends $tea.Model {
  command?: string;
  content?: string;
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyLog extends $tea.Model {
  terraformLogs?: GetChangeSetResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': GetChangeSetResponseBodyLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBodyParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes extends $tea.Model {
  resourceType?: string;
  sideEffects?: string[];
  supportedFilters?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      sideEffects: 'SideEffects',
      supportedFilters: 'SupportedFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      sideEffects: { 'type': 'array', 'itemType': 'string' },
      supportedFilters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceCleaner extends $tea.Model {
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes extends $tea.Model {
  resourceType?: string;
  sourceResourceGroupSupported?: boolean;
  sourceResourcesSupported?: boolean;
  sourceSupported?: boolean;
  sourceTagSupported?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      sourceResourceGroupSupported: 'SourceResourceGroupSupported',
      sourceResourcesSupported: 'SourceResourcesSupported',
      sourceSupported: 'SourceSupported',
      sourceTagSupported: 'SourceTagSupported',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      sourceResourceGroupSupported: 'boolean',
      sourceResourcesSupported: 'boolean',
      sourceSupported: 'boolean',
      sourceTagSupported: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateScratch extends $tea.Model {
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes extends $tea.Model {
  customTag?: string[];
  estimateCost?: string[];
  resourceGroup?: string[];
  systemTag?: string[];
  static names(): { [key: string]: string } {
    return {
      customTag: 'CustomTag',
      estimateCost: 'EstimateCost',
      resourceGroup: 'ResourceGroup',
      systemTag: 'SystemTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTag: { 'type': 'array', 'itemType': 'string' },
      estimateCost: { 'type': 'array', 'itemType': 'string' },
      resourceGroup: { 'type': 'array', 'itemType': 'string' },
      systemTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions extends $tea.Model {
  providerName?: string;
  supportedVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      providerName: 'ProviderName',
      supportedVersions: 'SupportedVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerName: 'string',
      supportedVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedVersions extends $tea.Model {
  providerVersions?: GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions[];
  terraformVersion?: string;
  transform?: string;
  updateAllowedTransforms?: string[];
  static names(): { [key: string]: string } {
    return {
      providerVersions: 'ProviderVersions',
      terraformVersion: 'TerraformVersion',
      transform: 'Transform',
      updateAllowedTransforms: 'UpdateAllowedTransforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerVersions: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions },
      terraformVersion: 'string',
      transform: 'string',
      updateAllowedTransforms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraform extends $tea.Model {
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes;
  supportedVersions?: GetFeatureDetailsResponseBodyTerraformSupportedVersions[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
      supportedVersions: 'SupportedVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes,
      supportedVersions: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTerraformSupportedVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsRequestServices extends $tea.Model {
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles extends $tea.Model {
  created?: boolean;
  function?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'Created',
      function: 'Function',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'boolean',
      function: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision extends $tea.Model {
  authorizationURL?: string;
  roles?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles[];
  static names(): { [key: string]: string } {
    return {
      authorizationURL: 'AuthorizationURL',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationURL: 'string',
      roles: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisions extends $tea.Model {
  autoEnableService?: boolean;
  dependentServiceNames?: string[];
  enableURL?: string;
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  serviceName?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      dependentServiceNames: 'DependentServiceNames',
      enableURL: 'EnableURL',
      roleProvision: 'RoleProvision',
      serviceName: 'ServiceName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoEnableService: 'boolean',
      dependentServiceNames: { 'type': 'array', 'itemType': 'string' },
      enableURL: 'string',
      roleProvision: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision,
      serviceName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogResourceLogsLogs extends $tea.Model {
  content?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogResourceLogs extends $tea.Model {
  logs?: GetStackResponseBodyLogResourceLogsLogs[];
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogsLogs },
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLogTerraformLogs extends $tea.Model {
  command?: string;
  content?: string;
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyLog extends $tea.Model {
  resourceLogs?: GetStackResponseBodyLogResourceLogs[];
  terraformLogs?: GetStackResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      resourceLogs: 'ResourceLogs',
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogResourceLogs },
      terraformLogs: { 'type': 'array', 'itemType': GetStackResponseBodyLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyResourceProgressInProgressResourceDetails extends $tea.Model {
  progressTargetValue?: number;
  progressValue?: number;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      progressTargetValue: 'ProgressTargetValue',
      progressValue: 'ProgressValue',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progressTargetValue: 'number',
      progressValue: 'number',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyResourceProgress extends $tea.Model {
  failedResourceCount?: number;
  inProgressResourceCount?: number;
  inProgressResourceDetails?: GetStackResponseBodyResourceProgressInProgressResourceDetails[];
  pendingResourceCount?: number;
  successResourceCount?: number;
  totalResourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      failedResourceCount: 'FailedResourceCount',
      inProgressResourceCount: 'InProgressResourceCount',
      inProgressResourceDetails: 'InProgressResourceDetails',
      pendingResourceCount: 'PendingResourceCount',
      successResourceCount: 'SuccessResourceCount',
      totalResourceCount: 'TotalResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceCount: 'number',
      inProgressResourceCount: 'number',
      inProgressResourceDetails: { 'type': 'array', 'itemType': GetStackResponseBodyResourceProgressInProgressResourceDetails },
      pendingResourceCount: 'number',
      successResourceCount: 'number',
      totalResourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyTags extends $tea.Model {
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

export class GetStackGroupResponseBodyStackGroupAutoDeployment extends $tea.Model {
  enabled?: boolean;
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroupParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail extends $tea.Model {
  cancelledStackInstancesCount?: number;
  driftDetectionStatus?: string;
  driftDetectionTime?: string;
  driftedStackInstancesCount?: number;
  failedStackInstancesCount?: number;
  inProgressStackInstancesCount?: number;
  inSyncStackInstancesCount?: number;
  stackGroupDriftStatus?: string;
  totalStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      totalStackInstancesCount: 'TotalStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      driftDetectionTime: 'string',
      driftedStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      stackGroupDriftStatus: 'string',
      totalStackInstancesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroup extends $tea.Model {
  administrationRoleName?: string;
  autoDeployment?: GetStackGroupResponseBodyStackGroupAutoDeployment;
  description?: string;
  executionRoleName?: string;
  parameters?: GetStackGroupResponseBodyStackGroupParameters[];
  permissionModel?: string;
  rdFolderIds?: string[];
  resourceGroupId?: string;
  stackGroupDriftDetectionDetail?: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail;
  stackGroupId?: string;
  stackGroupName?: string;
  status?: string;
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      administrationRoleName: 'AdministrationRoleName',
      autoDeployment: 'AutoDeployment',
      description: 'Description',
      executionRoleName: 'ExecutionRoleName',
      parameters: 'Parameters',
      permissionModel: 'PermissionModel',
      rdFolderIds: 'RdFolderIds',
      resourceGroupId: 'ResourceGroupId',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrationRoleName: 'string',
      autoDeployment: GetStackGroupResponseBodyStackGroupAutoDeployment,
      description: 'string',
      executionRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': GetStackGroupResponseBodyStackGroupParameters },
      permissionModel: 'string',
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      stackGroupDriftDetectionDetail: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail,
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
      templateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets extends $tea.Model {
  accountIds?: string[];
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences extends $tea.Model {
  failureToleranceCount?: number;
  failureTolerancePercentage?: number;
  maxConcurrentCount?: number;
  maxConcurrentPercentage?: number;
  regionIdsOrder?: string[];
  static names(): { [key: string]: string } {
    return {
      failureToleranceCount: 'FailureToleranceCount',
      failureTolerancePercentage: 'FailureTolerancePercentage',
      maxConcurrentCount: 'MaxConcurrentCount',
      maxConcurrentPercentage: 'MaxConcurrentPercentage',
      regionIdsOrder: 'RegionIdsOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureToleranceCount: 'number',
      failureTolerancePercentage: 'number',
      maxConcurrentCount: 'number',
      maxConcurrentPercentage: 'number',
      regionIdsOrder: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail extends $tea.Model {
  cancelledStackInstancesCount?: number;
  driftDetectionStatus?: string;
  driftDetectionTime?: string;
  driftedStackInstancesCount?: number;
  failedStackInstancesCount?: number;
  inProgressStackInstancesCount?: number;
  inSyncStackInstancesCount?: number;
  stackGroupDriftStatus?: string;
  totalStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      driftDetectionTime: 'DriftDetectionTime',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      totalStackInstancesCount: 'TotalStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      driftDetectionTime: 'string',
      driftedStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      stackGroupDriftStatus: 'string',
      totalStackInstancesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperation extends $tea.Model {
  action?: string;
  administrationRoleName?: string;
  createTime?: string;
  deploymentTargets?: GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets;
  endTime?: string;
  executionRoleName?: string;
  operationDescription?: string;
  operationId?: string;
  operationPreferences?: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences;
  retainStacks?: boolean;
  stackGroupDriftDetectionDetail?: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail;
  stackGroupId?: string;
  stackGroupName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      administrationRoleName: 'AdministrationRoleName',
      createTime: 'CreateTime',
      deploymentTargets: 'DeploymentTargets',
      endTime: 'EndTime',
      executionRoleName: 'ExecutionRoleName',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      operationPreferences: 'OperationPreferences',
      retainStacks: 'RetainStacks',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      administrationRoleName: 'string',
      createTime: 'string',
      deploymentTargets: GetStackGroupOperationResponseBodyStackGroupOperationDeploymentTargets,
      endTime: 'string',
      executionRoleName: 'string',
      operationDescription: 'string',
      operationId: 'string',
      operationPreferences: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences,
      retainStacks: 'boolean',
      stackGroupDriftDetectionDetail: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail,
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponseBodyStackInstanceParameterOverrides extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackInstanceResponseBodyStackInstance extends $tea.Model {
  accountId?: string;
  driftDetectionTime?: string;
  parameterOverrides?: GetStackInstanceResponseBodyStackInstanceParameterOverrides[];
  rdFolderId?: string;
  regionId?: string;
  stackDriftStatus?: string;
  stackGroupId?: string;
  stackGroupName?: string;
  stackId?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      driftDetectionTime: 'DriftDetectionTime',
      parameterOverrides: 'ParameterOverrides',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      stackDriftStatus: 'StackDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      driftDetectionTime: 'string',
      parameterOverrides: { 'type': 'array', 'itemType': GetStackInstanceResponseBodyStackInstanceParameterOverrides },
      rdFolderId: 'string',
      regionId: 'string',
      stackDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyPermissions extends $tea.Model {
  accountId?: string;
  shareOption?: string;
  shareSource?: string;
  templateVersion?: string;
  versionOption?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      shareOption: 'ShareOption',
      shareSource: 'ShareSource',
      templateVersion: 'TemplateVersion',
      versionOption: 'VersionOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      shareOption: 'string',
      shareSource: 'string',
      templateVersion: 'string',
      versionOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTags extends $tea.Model {
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

export class GetTemplateEstimateCostRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsShrinkRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBodyParameterConstraints extends $tea.Model {
  allowedValues?: string[];
  associationParameterNames?: string[];
  behavior?: string;
  behaviorReason?: string;
  parameterKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      parameterKey: 'ParameterKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      parameterKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup extends $tea.Model {
  resourceGroupId?: string;
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchSourceResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchSourceTag extends $tea.Model {
  resourceTags?: { [key: string]: any };
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchStackProvision extends $tea.Model {
  creatable?: boolean;
  importable?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatable: 'Creatable',
      importable: 'Importable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatable: 'boolean',
      importable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratchStacks extends $tea.Model {
  regionId?: string;
  stackId?: string;
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      usageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateScratchResponseBodyTemplateScratch extends $tea.Model {
  createTime?: string;
  description?: string;
  failedCode?: string;
  logicalIdStrategy?: string;
  preferenceParameters?: GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters[];
  sourceResourceGroup?: GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup;
  sourceResources?: GetTemplateScratchResponseBodyTemplateScratchSourceResources[];
  sourceTag?: GetTemplateScratchResponseBodyTemplateScratchSourceTag;
  stackProvision?: GetTemplateScratchResponseBodyTemplateScratchStackProvision;
  stacks?: GetTemplateScratchResponseBodyTemplateScratchStacks[];
  status?: string;
  statusReason?: string;
  templateScratchData?: { [key: string]: any };
  templateScratchId?: string;
  templateScratchType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      failedCode: 'FailedCode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      stackProvision: 'StackProvision',
      stacks: 'Stacks',
      status: 'Status',
      statusReason: 'StatusReason',
      templateScratchData: 'TemplateScratchData',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      failedCode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchPreferenceParameters },
      sourceResourceGroup: GetTemplateScratchResponseBodyTemplateScratchSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchSourceResources },
      sourceTag: GetTemplateScratchResponseBodyTemplateScratchSourceTag,
      stackProvision: GetTemplateScratchResponseBodyTemplateScratchStackProvision,
      stacks: { 'type': 'array', 'itemType': GetTemplateScratchResponseBodyTemplateScratchStacks },
      status: 'string',
      statusReason: 'string',
      templateScratchData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateScratchId: 'string',
      templateScratchType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponseBodyResourceIdentifierSummaries extends $tea.Model {
  logicalResourceIds?: string[];
  resourceIdentifiers?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceIds: 'LogicalResourceIds',
      resourceIdentifiers: 'ResourceIdentifiers',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceIdentifiers: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponseBodyChangeSets extends $tea.Model {
  changeSetId?: string;
  changeSetName?: string;
  changeSetType?: string;
  createTime?: string;
  description?: string;
  executionStatus?: string;
  regionId?: string;
  stackId?: string;
  stackName?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      changeSetName: 'ChangeSetName',
      changeSetType: 'ChangeSetType',
      createTime: 'CreateTime',
      description: 'Description',
      executionStatus: 'ExecutionStatus',
      regionId: 'RegionId',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      changeSetName: 'string',
      changeSetType: 'string',
      createTime: 'string',
      description: 'string',
      executionStatus: 'string',
      regionId: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponseBodyEvents extends $tea.Model {
  createTime?: string;
  eventId?: string;
  logicalResourceId?: string;
  physicalResourceId?: string;
  resourceType?: string;
  stackId?: string;
  stackName?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventId: 'EventId',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      eventId: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBodyStackGroupOperationResults extends $tea.Model {
  accountId?: string;
  rdFolderId?: string;
  regionId?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      rdFolderId: 'string',
      regionId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponseBodyStackGroupOperations extends $tea.Model {
  action?: string;
  createTime?: string;
  endTime?: string;
  operationDescription?: string;
  operationId?: string;
  stackGroupId?: string;
  stackGroupName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      createTime: 'string',
      endTime: 'string',
      operationDescription: 'string',
      operationId: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBodyStackGroupsAutoDeployment extends $tea.Model {
  enabled?: boolean;
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBodyStackGroups extends $tea.Model {
  autoDeployment?: ListStackGroupsResponseBodyStackGroupsAutoDeployment;
  description?: string;
  driftDetectionTime?: string;
  permissionModel?: string;
  resourceGroupId?: string;
  stackGroupDriftStatus?: string;
  stackGroupId?: string;
  stackGroupName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeployment: 'AutoDeployment',
      description: 'Description',
      driftDetectionTime: 'DriftDetectionTime',
      permissionModel: 'PermissionModel',
      resourceGroupId: 'ResourceGroupId',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeployment: ListStackGroupsResponseBodyStackGroupsAutoDeployment,
      description: 'string',
      driftDetectionTime: 'string',
      permissionModel: 'string',
      resourceGroupId: 'string',
      stackGroupDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponseBodyStackInstances extends $tea.Model {
  accountId?: string;
  driftDetectionTime?: string;
  rdFolderId?: string;
  regionId?: string;
  stackDriftStatus?: string;
  stackGroupId?: string;
  stackGroupName?: string;
  stackId?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      driftDetectionTime: 'DriftDetectionTime',
      rdFolderId: 'RdFolderId',
      regionId: 'RegionId',
      stackDriftStatus: 'StackDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      driftDetectionTime: 'string',
      rdFolderId: 'string',
      regionId: 'string',
      stackDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponseBodyRiskResources extends $tea.Model {
  code?: string;
  logicalResourceId?: string;
  message?: string;
  physicalResourceId?: string;
  reason?: string;
  requestId?: string;
  resourceType?: string;
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      logicalResourceId: 'LogicalResourceId',
      message: 'Message',
      physicalResourceId: 'PhysicalResourceId',
      reason: 'Reason',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      logicalResourceId: 'string',
      message: 'string',
      physicalResourceId: 'string',
      reason: 'string',
      requestId: 'string',
      resourceType: 'string',
      riskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences extends $tea.Model {
  actualValue?: string;
  differenceType?: string;
  expectedValue?: string;
  propertyPath?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      expectedValue: 'ExpectedValue',
      propertyPath: 'PropertyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      expectedValue: 'string',
      propertyPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDrifts extends $tea.Model {
  actualProperties?: string;
  driftDetectionTime?: string;
  expectedProperties?: string;
  logicalResourceId?: string;
  physicalResourceId?: string;
  propertyDifferences?: ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences[];
  resourceDriftStatus?: string;
  resourceType?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      actualProperties: 'ActualProperties',
      driftDetectionTime: 'DriftDetectionTime',
      expectedProperties: 'ExpectedProperties',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      propertyDifferences: 'PropertyDifferences',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualProperties: 'string',
      driftDetectionTime: 'string',
      expectedProperties: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences },
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBodyResources extends $tea.Model {
  createTime?: string;
  driftDetectionTime?: string;
  logicalResourceId?: string;
  physicalResourceId?: string;
  resourceDriftStatus?: string;
  resourceType?: string;
  stackId?: string;
  stackName?: string;
  status?: string;
  statusReason?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      driftDetectionTime: 'DriftDetectionTime',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      driftDetectionTime: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksRequestTag extends $tea.Model {
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

export class ListStacksResponseBodyStacksTags extends $tea.Model {
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

export class ListStacksResponseBodyStacks extends $tea.Model {
  createTime?: string;
  disableRollback?: boolean;
  driftDetectionTime?: string;
  parentStackId?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceManaged?: boolean;
  serviceName?: string;
  stackDriftStatus?: string;
  stackId?: string;
  stackName?: string;
  stackType?: string;
  status?: string;
  statusReason?: string;
  tags?: ListStacksResponseBodyStacksTags[];
  timeoutInMinutes?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      disableRollback: 'DisableRollback',
      driftDetectionTime: 'DriftDetectionTime',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      stackDriftStatus: 'StackDriftStatus',
      stackId: 'StackId',
      stackName: 'StackName',
      stackType: 'StackType',
      status: 'Status',
      statusReason: 'StatusReason',
      tags: 'Tags',
      timeoutInMinutes: 'TimeoutInMinutes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      disableRollback: 'boolean',
      driftDetectionTime: 'string',
      parentStackId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      stackDriftStatus: 'string',
      stackId: 'string',
      stackName: 'string',
      stackType: 'string',
      status: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': ListStacksResponseBodyStacksTags },
      timeoutInMinutes: 'number',
      updateTime: 'string',
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
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup extends $tea.Model {
  resourceGroupId?: string;
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratchesSourceTag extends $tea.Model {
  resourceTags?: { [key: string]: any };
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateScratchesResponseBodyTemplateScratches extends $tea.Model {
  createTime?: string;
  description?: string;
  failedCode?: string;
  logicalIdStrategy?: string;
  preferenceParameters?: ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters[];
  sourceResourceGroup?: ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup;
  sourceResources?: ListTemplateScratchesResponseBodyTemplateScratchesSourceResources[];
  sourceTag?: ListTemplateScratchesResponseBodyTemplateScratchesSourceTag;
  status?: string;
  statusReason?: string;
  templateScratchId?: string;
  templateScratchType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      failedCode: 'FailedCode',
      logicalIdStrategy: 'LogicalIdStrategy',
      preferenceParameters: 'PreferenceParameters',
      sourceResourceGroup: 'SourceResourceGroup',
      sourceResources: 'SourceResources',
      sourceTag: 'SourceTag',
      status: 'Status',
      statusReason: 'StatusReason',
      templateScratchId: 'TemplateScratchId',
      templateScratchType: 'TemplateScratchType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      failedCode: 'string',
      logicalIdStrategy: 'string',
      preferenceParameters: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesPreferenceParameters },
      sourceResourceGroup: ListTemplateScratchesResponseBodyTemplateScratchesSourceResourceGroup,
      sourceResources: { 'type': 'array', 'itemType': ListTemplateScratchesResponseBodyTemplateScratchesSourceResources },
      sourceTag: ListTemplateScratchesResponseBodyTemplateScratchesSourceTag,
      status: 'string',
      statusReason: 'string',
      templateScratchId: 'string',
      templateScratchType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBodyVersions extends $tea.Model {
  createTime?: string;
  description?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequestTag extends $tea.Model {
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

export class ListTemplatesResponseBodyTemplatesTags extends $tea.Model {
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

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  createTime?: string;
  description?: string;
  ownerId?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: ListTemplatesResponseBodyTemplatesTags[];
  templateARN?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateARN: 'TemplateARN',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplatesTags },
      templateARN: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStackLogTerraformLogs extends $tea.Model {
  command?: string;
  content?: string;
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStackLog extends $tea.Model {
  terraformLogs?: PreviewStackResponseBodyStackLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStackParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStackResources extends $tea.Model {
  action?: string;
  description?: string;
  logicalResourceId?: string;
  properties?: { [key: string]: any };
  replacement?: string;
  requiredBy?: string[];
  resourceType?: string;
  stack?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      description: 'Description',
      logicalResourceId: 'LogicalResourceId',
      properties: 'Properties',
      replacement: 'Replacement',
      requiredBy: 'RequiredBy',
      resourceType: 'ResourceType',
      stack: 'Stack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      description: 'string',
      logicalResourceId: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replacement: 'string',
      requiredBy: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      stack: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStack extends $tea.Model {
  description?: string;
  disableRollback?: boolean;
  log?: PreviewStackResponseBodyStackLog;
  parameters?: PreviewStackResponseBodyStackParameters[];
  regionId?: string;
  resources?: PreviewStackResponseBodyStackResources[];
  stackName?: string;
  stackPolicyBody?: { [key: string]: any };
  templateDescription?: string;
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disableRollback: 'DisableRollback',
      log: 'Log',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resources: 'Resources',
      stackName: 'StackName',
      stackPolicyBody: 'StackPolicyBody',
      templateDescription: 'TemplateDescription',
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableRollback: 'boolean',
      log: PreviewStackResponseBodyStackLog,
      parameters: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackParameters },
      regionId: 'string',
      resources: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackResources },
      stackName: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateDescription: 'string',
      timeoutInMinutes: 'number',
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

export class UpdateStackRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackRequestTags extends $tea.Model {
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

export class UpdateStackGroupRequestAutoDeployment extends $tea.Model {
  enabled?: boolean;
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequestDeploymentTargets extends $tea.Model {
  accountIds?: string[];
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupShrinkRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesRequestDeploymentTargets extends $tea.Model {
  accountIds?: string[];
  rdFolderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      rdFolderIds: 'RdFolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      rdFolderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesRequestParameterOverrides extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesShrinkRequestParameterOverrides extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequestPreferenceParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequestSourceResourceGroup extends $tea.Model {
  resourceGroupId?: string;
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequestSourceResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateScratchRequestSourceTag extends $tea.Model {
  resourceTags?: { [key: string]: any };
  resourceTypeFilter?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTags: 'ResourceTags',
      resourceTypeFilter: 'ResourceTypeFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceTypeFilter: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyOutputs extends $tea.Model {
  description?: string;
  outputKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputKey: 'OutputKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBodyResourceTypes extends $tea.Model {
  dataSources?: string[];
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': 'string' },
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ros", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async cancelUpdateStackWithOptions(request: CancelUpdateStackRequest, runtime: $Util.RuntimeOptions): Promise<CancelUpdateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cancelType)) {
      query["CancelType"] = request.cancelType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelUpdateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelUpdateStackResponse>(await this.callApi(params, req, runtime), new CancelUpdateStackResponse({}));
  }

  async cancelUpdateStack(request: CancelUpdateStackRequest): Promise<CancelUpdateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUpdateStackWithOptions(request, runtime);
  }

  async continueCreateStackWithOptions(request: ContinueCreateStackRequest, runtime: $Util.RuntimeOptions): Promise<ContinueCreateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.recreatingResources)) {
      query["RecreatingResources"] = request.recreatingResources;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinueCreateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueCreateStackResponse>(await this.callApi(params, req, runtime), new ContinueCreateStackResponse({}));
  }

  async continueCreateStack(request: ContinueCreateStackRequest): Promise<ContinueCreateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueCreateStackWithOptions(request, runtime);
  }

  async createChangeSetWithOptions(request: CreateChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetName)) {
      query["ChangeSetName"] = request.changeSetName;
    }

    if (!Util.isUnset(request.changeSetType)) {
      query["ChangeSetType"] = request.changeSetType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.notificationURLs)) {
      query["NotificationURLs"] = request.notificationURLs;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replacementOption)) {
      query["ReplacementOption"] = request.replacementOption;
    }

    if (!Util.isUnset(request.resourcesToImport)) {
      query["ResourcesToImport"] = request.resourcesToImport;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateBody)) {
      query["StackPolicyDuringUpdateBody"] = request.stackPolicyDuringUpdateBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateURL)) {
      query["StackPolicyDuringUpdateURL"] = request.stackPolicyDuringUpdateURL;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!Util.isUnset(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateChangeSetResponse>(await this.callApi(params, req, runtime), new CreateChangeSetResponse({}));
  }

  async createChangeSet(request: CreateChangeSetRequest): Promise<CreateChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChangeSetWithOptions(request, runtime);
  }

  async createStackWithOptions(request: CreateStackRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.createOption)) {
      query["CreateOption"] = request.createOption;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.notificationURLs)) {
      query["NotificationURLs"] = request.notificationURLs;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStackResponse>(await this.callApi(params, req, runtime), new CreateStackResponse({}));
  }

  async createStack(request: CreateStackRequest): Promise<CreateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackWithOptions(request, runtime);
  }

  async createStackGroupWithOptions(tmpReq: CreateStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.autoDeployment))) {
      request.autoDeploymentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.autoDeployment), "AutoDeployment", "json");
    }

    let query = { };
    if (!Util.isUnset(request.administrationRoleName)) {
      query["AdministrationRoleName"] = request.administrationRoleName;
    }

    if (!Util.isUnset(request.autoDeploymentShrink)) {
      query["AutoDeployment"] = request.autoDeploymentShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionRoleName)) {
      query["ExecutionRoleName"] = request.executionRoleName;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.permissionModel)) {
      query["PermissionModel"] = request.permissionModel;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStackGroupResponse>(await this.callApi(params, req, runtime), new CreateStackGroupResponse({}));
  }

  async createStackGroup(request: CreateStackGroupRequest): Promise<CreateStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackGroupWithOptions(request, runtime);
  }

  async createStackInstancesWithOptions(tmpReq: CreateStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.deploymentTargets))) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deploymentTargets), "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.parameterOverrides)) {
      query["ParameterOverrides"] = request.parameterOverrides;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStackInstancesResponse>(await this.callApi(params, req, runtime), new CreateStackInstancesResponse({}));
  }

  async createStackInstances(request: CreateStackInstancesRequest): Promise<CreateStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackInstancesWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async createTemplateScratchWithOptions(tmpReq: CreateTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateScratchResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateScratchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.preferenceParameters)) {
      request.preferenceParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preferenceParameters, "PreferenceParameters", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.sourceResourceGroup))) {
      request.sourceResourceGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.sourceResourceGroup), "SourceResourceGroup", "json");
    }

    if (!Util.isUnset(tmpReq.sourceResources)) {
      request.sourceResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResources, "SourceResources", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.sourceTag))) {
      request.sourceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.sourceTag), "SourceTag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!Util.isUnset(request.logicalIdStrategy)) {
      query["LogicalIdStrategy"] = request.logicalIdStrategy;
    }

    if (!Util.isUnset(request.preferenceParametersShrink)) {
      query["PreferenceParameters"] = request.preferenceParametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceResourceGroupShrink)) {
      query["SourceResourceGroup"] = request.sourceResourceGroupShrink;
    }

    if (!Util.isUnset(request.sourceResourcesShrink)) {
      query["SourceResources"] = request.sourceResourcesShrink;
    }

    if (!Util.isUnset(request.sourceTagShrink)) {
      query["SourceTag"] = request.sourceTagShrink;
    }

    if (!Util.isUnset(request.templateScratchType)) {
      query["TemplateScratchType"] = request.templateScratchType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateScratchResponse>(await this.callApi(params, req, runtime), new CreateTemplateScratchResponse({}));
  }

  async createTemplateScratch(request: CreateTemplateScratchRequest): Promise<CreateTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateScratchWithOptions(request, runtime);
  }

  async deleteChangeSetWithOptions(request: DeleteChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteChangeSetResponse>(await this.callApi(params, req, runtime), new DeleteChangeSetResponse({}));
  }

  async deleteChangeSet(request: DeleteChangeSetRequest): Promise<DeleteChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChangeSetWithOptions(request, runtime);
  }

  async deleteStackWithOptions(request: DeleteStackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainAllResources)) {
      query["RetainAllResources"] = request.retainAllResources;
    }

    if (!Util.isUnset(request.retainResources)) {
      query["RetainResources"] = request.retainResources;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStackResponse>(await this.callApi(params, req, runtime), new DeleteStackResponse({}));
  }

  async deleteStack(request: DeleteStackRequest): Promise<DeleteStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackWithOptions(request, runtime);
  }

  async deleteStackGroupWithOptions(request: DeleteStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStackGroupResponse>(await this.callApi(params, req, runtime), new DeleteStackGroupResponse({}));
  }

  async deleteStackGroup(request: DeleteStackGroupRequest): Promise<DeleteStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackGroupWithOptions(request, runtime);
  }

  async deleteStackInstancesWithOptions(tmpReq: DeleteStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.deploymentTargets))) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deploymentTargets), "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.retainStacks)) {
      query["RetainStacks"] = request.retainStacks;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStackInstancesResponse>(await this.callApi(params, req, runtime), new DeleteStackInstancesResponse({}));
  }

  async deleteStackInstances(request: DeleteStackInstancesRequest): Promise<DeleteStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackInstancesWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async deleteTemplateScratchWithOptions(request: DeleteTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateScratchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateScratchResponse>(await this.callApi(params, req, runtime), new DeleteTemplateScratchResponse({}));
  }

  async deleteTemplateScratch(request: DeleteTemplateScratchRequest): Promise<DeleteTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateScratchWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async detectStackDriftWithOptions(request: DetectStackDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackDriftResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectStackDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectStackDriftResponse>(await this.callApi(params, req, runtime), new DetectStackDriftResponse({}));
  }

  async detectStackDrift(request: DetectStackDriftRequest): Promise<DetectStackDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackDriftWithOptions(request, runtime);
  }

  async detectStackGroupDriftWithOptions(tmpReq: DetectStackGroupDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackGroupDriftResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectStackGroupDriftShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectStackGroupDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectStackGroupDriftResponse>(await this.callApi(params, req, runtime), new DetectStackGroupDriftResponse({}));
  }

  async detectStackGroupDrift(request: DetectStackGroupDriftRequest): Promise<DetectStackGroupDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackGroupDriftWithOptions(request, runtime);
  }

  async detectStackResourceDriftWithOptions(request: DetectStackResourceDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackResourceDriftResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectStackResourceDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectStackResourceDriftResponse>(await this.callApi(params, req, runtime), new DetectStackResourceDriftResponse({}));
  }

  async detectStackResourceDrift(request: DetectStackResourceDriftRequest): Promise<DetectStackResourceDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackResourceDriftWithOptions(request, runtime);
  }

  async executeChangeSetWithOptions(request: ExecuteChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteChangeSetResponse>(await this.callApi(params, req, runtime), new ExecuteChangeSetResponse({}));
  }

  async executeChangeSet(request: ExecuteChangeSetRequest): Promise<ExecuteChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeChangeSetWithOptions(request, runtime);
  }

  async generateTemplateByScratchWithOptions(request: GenerateTemplateByScratchRequest, runtime: $Util.RuntimeOptions): Promise<GenerateTemplateByScratchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.provisionRegionId)) {
      query["ProvisionRegionId"] = request.provisionRegionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateTemplateByScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateTemplateByScratchResponse>(await this.callApi(params, req, runtime), new GenerateTemplateByScratchResponse({}));
  }

  async generateTemplateByScratch(request: GenerateTemplateByScratchRequest): Promise<GenerateTemplateByScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateTemplateByScratchWithOptions(request, runtime);
  }

  async generateTemplatePolicyWithOptions(request: GenerateTemplatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateTemplatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateTemplatePolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateTemplatePolicyResponse>(await this.callApi(params, req, runtime), new GenerateTemplatePolicyResponse({}));
  }

  async generateTemplatePolicy(request: GenerateTemplatePolicyRequest): Promise<GenerateTemplatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateTemplatePolicyWithOptions(request, runtime);
  }

  async getChangeSetWithOptions(request: GetChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<GetChangeSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showTemplate)) {
      query["ShowTemplate"] = request.showTemplate;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetChangeSetResponse>(await this.callApi(params, req, runtime), new GetChangeSetResponse({}));
  }

  async getChangeSet(request: GetChangeSetRequest): Promise<GetChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChangeSetWithOptions(request, runtime);
  }

  async getFeatureDetailsWithOptions(request: GetFeatureDetailsRequest, runtime: $Util.RuntimeOptions): Promise<GetFeatureDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.feature)) {
      query["Feature"] = request.feature;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFeatureDetails",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFeatureDetailsResponse>(await this.callApi(params, req, runtime), new GetFeatureDetailsResponse({}));
  }

  async getFeatureDetails(request: GetFeatureDetailsRequest): Promise<GetFeatureDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFeatureDetailsWithOptions(request, runtime);
  }

  async getResourceTypeWithOptions(request: GetResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTypeResponse>(await this.callApi(params, req, runtime), new GetResourceTypeResponse({}));
  }

  async getResourceType(request: GetResourceTypeRequest): Promise<GetResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeWithOptions(request, runtime);
  }

  async getResourceTypeTemplateWithOptions(request: GetResourceTypeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceTypeTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTypeTemplateResponse>(await this.callApi(params, req, runtime), new GetResourceTypeTemplateResponse({}));
  }

  async getResourceTypeTemplate(request: GetResourceTypeTemplateRequest): Promise<GetResourceTypeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeTemplateWithOptions(request, runtime);
  }

  async getServiceProvisionsWithOptions(request: GetServiceProvisionsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceProvisionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.services)) {
      query["Services"] = request.services;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceProvisions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceProvisionsResponse>(await this.callApi(params, req, runtime), new GetServiceProvisionsResponse({}));
  }

  async getServiceProvisions(request: GetServiceProvisionsRequest): Promise<GetServiceProvisionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logOption)) {
      query["LogOption"] = request.logOption;
    }

    if (!Util.isUnset(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showResourceProgress)) {
      query["ShowResourceProgress"] = request.showResourceProgress;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackResponse>(await this.callApi(params, req, runtime), new GetStackResponse({}));
  }

  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  async getStackDriftDetectionStatusWithOptions(request: GetStackDriftDetectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetStackDriftDetectionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.driftDetectionId)) {
      query["DriftDetectionId"] = request.driftDetectionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackDriftDetectionStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackDriftDetectionStatusResponse>(await this.callApi(params, req, runtime), new GetStackDriftDetectionStatusResponse({}));
  }

  async getStackDriftDetectionStatus(request: GetStackDriftDetectionStatusRequest): Promise<GetStackDriftDetectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackDriftDetectionStatusWithOptions(request, runtime);
  }

  async getStackGroupWithOptions(request: GetStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetStackGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupId)) {
      query["StackGroupId"] = request.stackGroupId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackGroupResponse>(await this.callApi(params, req, runtime), new GetStackGroupResponse({}));
  }

  async getStackGroup(request: GetStackGroupRequest): Promise<GetStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackGroupWithOptions(request, runtime);
  }

  async getStackGroupOperationWithOptions(request: GetStackGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<GetStackGroupOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackGroupOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackGroupOperationResponse>(await this.callApi(params, req, runtime), new GetStackGroupOperationResponse({}));
  }

  async getStackGroupOperation(request: GetStackGroupOperationRequest): Promise<GetStackGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackGroupOperationWithOptions(request, runtime);
  }

  async getStackInstanceWithOptions(request: GetStackInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetStackInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackInstanceAccountId)) {
      query["StackInstanceAccountId"] = request.stackInstanceAccountId;
    }

    if (!Util.isUnset(request.stackInstanceRegionId)) {
      query["StackInstanceRegionId"] = request.stackInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackInstance",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackInstanceResponse>(await this.callApi(params, req, runtime), new GetStackInstanceResponse({}));
  }

  async getStackInstance(request: GetStackInstanceRequest): Promise<GetStackInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackInstanceWithOptions(request, runtime);
  }

  async getStackPolicyWithOptions(request: GetStackPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetStackPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackPolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackPolicyResponse>(await this.callApi(params, req, runtime), new GetStackPolicyResponse({}));
  }

  async getStackPolicy(request: GetStackPolicyRequest): Promise<GetStackPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackPolicyWithOptions(request, runtime);
  }

  async getStackResourceWithOptions(request: GetStackResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceAttributes)) {
      query["ResourceAttributes"] = request.resourceAttributes;
    }

    if (!Util.isUnset(request.showResourceAttributes)) {
      query["ShowResourceAttributes"] = request.showResourceAttributes;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStackResource",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStackResourceResponse>(await this.callApi(params, req, runtime), new GetStackResourceResponse({}));
  }

  async getStackResource(request: GetStackResourceRequest): Promise<GetStackResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackResourceWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.includePermission)) {
      query["IncludePermission"] = request.includePermission;
    }

    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateStage)) {
      query["TemplateStage"] = request.templateStage;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async getTemplateEstimateCostWithOptions(request: GetTemplateEstimateCostRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateEstimateCostResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateEstimateCost",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateEstimateCostResponse>(await this.callApi(params, req, runtime), new GetTemplateEstimateCostResponse({}));
  }

  async getTemplateEstimateCost(request: GetTemplateEstimateCostRequest): Promise<GetTemplateEstimateCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateEstimateCostWithOptions(request, runtime);
  }

  async getTemplateParameterConstraintsWithOptions(tmpReq: GetTemplateParameterConstraintsRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateParameterConstraintsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTemplateParameterConstraintsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parametersKeyFilter)) {
      request.parametersKeyFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parametersKeyFilter, "ParametersKeyFilter", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.parametersKeyFilterShrink)) {
      query["ParametersKeyFilter"] = request.parametersKeyFilterShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateParameterConstraints",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new GetTemplateParameterConstraintsResponse({}));
  }

  async getTemplateParameterConstraints(request: GetTemplateParameterConstraintsRequest): Promise<GetTemplateParameterConstraintsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateParameterConstraintsWithOptions(request, runtime);
  }

  async getTemplateScratchWithOptions(request: GetTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateScratchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.showDataOption)) {
      query["ShowDataOption"] = request.showDataOption;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateScratchResponse>(await this.callApi(params, req, runtime), new GetTemplateScratchResponse({}));
  }

  async getTemplateScratch(request: GetTemplateScratchRequest): Promise<GetTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateScratchWithOptions(request, runtime);
  }

  async getTemplateSummaryWithOptions(request: GetTemplateSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplateSummary",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateSummaryResponse>(await this.callApi(params, req, runtime), new GetTemplateSummaryResponse({}));
  }

  async getTemplateSummary(request: GetTemplateSummaryRequest): Promise<GetTemplateSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateSummaryWithOptions(request, runtime);
  }

  async listChangeSetsWithOptions(request: ListChangeSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListChangeSetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!Util.isUnset(request.changeSetName)) {
      query["ChangeSetName"] = request.changeSetName;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChangeSets",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChangeSetsResponse>(await this.callApi(params, req, runtime), new ListChangeSetsResponse({}));
  }

  async listChangeSets(request: ListChangeSetsRequest): Promise<ListChangeSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChangeSetsWithOptions(request, runtime);
  }

  async listResourceTypesWithOptions(request: ListResourceTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTypes",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTypesResponse>(await this.callApi(params, req, runtime), new ListResourceTypesResponse({}));
  }

  async listResourceTypes(request: ListResourceTypesRequest): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(request, runtime);
  }

  async listStackEventsWithOptions(request: ListStackEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackEvents",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackEventsResponse>(await this.callApi(params, req, runtime), new ListStackEventsResponse({}));
  }

  async listStackEvents(request: ListStackEventsRequest): Promise<ListStackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackEventsWithOptions(request, runtime);
  }

  async listStackGroupOperationResultsWithOptions(request: ListStackGroupOperationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupOperationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackGroupOperationResults",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackGroupOperationResultsResponse>(await this.callApi(params, req, runtime), new ListStackGroupOperationResultsResponse({}));
  }

  async listStackGroupOperationResults(request: ListStackGroupOperationResultsRequest): Promise<ListStackGroupOperationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupOperationResultsWithOptions(request, runtime);
  }

  async listStackGroupOperationsWithOptions(request: ListStackGroupOperationsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupOperationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackGroupOperations",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackGroupOperationsResponse>(await this.callApi(params, req, runtime), new ListStackGroupOperationsResponse({}));
  }

  async listStackGroupOperations(request: ListStackGroupOperationsRequest): Promise<ListStackGroupOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupOperationsWithOptions(request, runtime);
  }

  async listStackGroupsWithOptions(request: ListStackGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackGroups",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackGroupsResponse>(await this.callApi(params, req, runtime), new ListStackGroupsResponse({}));
  }

  async listStackGroups(request: ListStackGroupsRequest): Promise<ListStackGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupsWithOptions(request, runtime);
  }

  async listStackInstancesWithOptions(request: ListStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListStackInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.stackInstanceAccountId)) {
      query["StackInstanceAccountId"] = request.stackInstanceAccountId;
    }

    if (!Util.isUnset(request.stackInstanceRegionId)) {
      query["StackInstanceRegionId"] = request.stackInstanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackInstancesResponse>(await this.callApi(params, req, runtime), new ListStackInstancesResponse({}));
  }

  async listStackInstances(request: ListStackInstancesRequest): Promise<ListStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackInstancesWithOptions(request, runtime);
  }

  async listStackOperationRisksWithOptions(request: ListStackOperationRisksRequest, runtime: $Util.RuntimeOptions): Promise<ListStackOperationRisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainAllResources)) {
      query["RetainAllResources"] = request.retainAllResources;
    }

    if (!Util.isUnset(request.retainResources)) {
      query["RetainResources"] = request.retainResources;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackOperationRisks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackOperationRisksResponse>(await this.callApi(params, req, runtime), new ListStackOperationRisksResponse({}));
  }

  async listStackOperationRisks(request: ListStackOperationRisksRequest): Promise<ListStackOperationRisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackOperationRisksWithOptions(request, runtime);
  }

  async listStackResourceDriftsWithOptions(request: ListStackResourceDriftsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResourceDriftsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceDriftStatus)) {
      query["ResourceDriftStatus"] = request.resourceDriftStatus;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackResourceDrifts",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackResourceDriftsResponse>(await this.callApi(params, req, runtime), new ListStackResourceDriftsResponse({}));
  }

  async listStackResourceDrifts(request: ListStackResourceDriftsRequest): Promise<ListStackResourceDriftsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackResourceDriftsWithOptions(request, runtime);
  }

  async listStackResourcesWithOptions(request: ListStackResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStackResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStackResourcesResponse>(await this.callApi(params, req, runtime), new ListStackResourcesResponse({}));
  }

  async listStackResources(request: ListStackResourcesRequest): Promise<ListStackResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackResourcesWithOptions(request, runtime);
  }

  async listStacksWithOptions(request: ListStacksRequest, runtime: $Util.RuntimeOptions): Promise<ListStacksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentStackId)) {
      query["ParentStackId"] = request.parentStackId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.showNestedStack)) {
      query["ShowNestedStack"] = request.showNestedStack;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackIds)) {
      query["StackIds"] = request.stackIds;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStacks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStacksResponse>(await this.callApi(params, req, runtime), new ListStacksResponse({}));
  }

  async listStacks(request: ListStacksRequest): Promise<ListStacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStacksWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listTemplateScratchesWithOptions(request: ListTemplateScratchesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplateScratchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchType)) {
      query["TemplateScratchType"] = request.templateScratchType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateScratches",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplateScratchesResponse>(await this.callApi(params, req, runtime), new ListTemplateScratchesResponse({}));
  }

  async listTemplateScratches(request: ListTemplateScratchesRequest): Promise<ListTemplateScratchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateScratchesWithOptions(request, runtime);
  }

  async listTemplateVersionsWithOptions(request: ListTemplateVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplateVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateVersions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplateVersionsResponse>(await this.callApi(params, req, runtime), new ListTemplateVersionsResponse({}));
  }

  async listTemplateVersions(request: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async previewStackWithOptions(request: PreviewStackRequest, runtime: $Util.RuntimeOptions): Promise<PreviewStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!Util.isUnset(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreviewStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreviewStackResponse>(await this.callApi(params, req, runtime), new PreviewStackResponse({}));
  }

  async previewStack(request: PreviewStackRequest): Promise<PreviewStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.previewStackWithOptions(request, runtime);
  }

  async setDeletionProtectionWithOptions(request: SetDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDeletionProtection",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new SetDeletionProtectionResponse({}));
  }

  async setDeletionProtection(request: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  async setStackPolicyWithOptions(request: SetStackPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetStackPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetStackPolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetStackPolicyResponse>(await this.callApi(params, req, runtime), new SetStackPolicyResponse({}));
  }

  async setStackPolicy(request: SetStackPolicyRequest): Promise<SetStackPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setStackPolicyWithOptions(request, runtime);
  }

  async setTemplatePermissionWithOptions(request: SetTemplatePermissionRequest, runtime: $Util.RuntimeOptions): Promise<SetTemplatePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.shareOption)) {
      query["ShareOption"] = request.shareOption;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.versionOption)) {
      query["VersionOption"] = request.versionOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTemplatePermission",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTemplatePermissionResponse>(await this.callApi(params, req, runtime), new SetTemplatePermissionResponse({}));
  }

  async setTemplatePermission(request: SetTemplatePermissionRequest): Promise<SetTemplatePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTemplatePermissionWithOptions(request, runtime);
  }

  async signalResourceWithOptions(request: SignalResourceRequest, runtime: $Util.RuntimeOptions): Promise<SignalResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SignalResource",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignalResourceResponse>(await this.callApi(params, req, runtime), new SignalResourceResponse({}));
  }

  async signalResource(request: SignalResourceRequest): Promise<SignalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signalResourceWithOptions(request, runtime);
  }

  async stopStackGroupOperationWithOptions(request: StopStackGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<StopStackGroupOperationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopStackGroupOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopStackGroupOperationResponse>(await this.callApi(params, req, runtime), new StopStackGroupOperationResponse({}));
  }

  async stopStackGroupOperation(request: StopStackGroupOperationRequest): Promise<StopStackGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStackGroupOperationWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateStackWithOptions(request: UpdateStackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!Util.isUnset(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replacementOption)) {
      query["ReplacementOption"] = request.replacementOption;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateBody)) {
      query["StackPolicyDuringUpdateBody"] = request.stackPolicyDuringUpdateBody;
    }

    if (!Util.isUnset(request.stackPolicyDuringUpdateURL)) {
      query["StackPolicyDuringUpdateURL"] = request.stackPolicyDuringUpdateURL;
    }

    if (!Util.isUnset(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!Util.isUnset(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackResponse>(await this.callApi(params, req, runtime), new UpdateStackResponse({}));
  }

  async updateStack(request: UpdateStackRequest): Promise<UpdateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackWithOptions(request, runtime);
  }

  async updateStackGroupWithOptions(tmpReq: UpdateStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.autoDeployment))) {
      request.autoDeploymentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.autoDeployment), "AutoDeployment", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.deploymentTargets))) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deploymentTargets), "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.administrationRoleName)) {
      query["AdministrationRoleName"] = request.administrationRoleName;
    }

    if (!Util.isUnset(request.autoDeploymentShrink)) {
      query["AutoDeployment"] = request.autoDeploymentShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionRoleName)) {
      query["ExecutionRoleName"] = request.executionRoleName;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.permissionModel)) {
      query["PermissionModel"] = request.permissionModel;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackGroupResponse>(await this.callApi(params, req, runtime), new UpdateStackGroupResponse({}));
  }

  async updateStackGroup(request: UpdateStackGroupRequest): Promise<UpdateStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackGroupWithOptions(request, runtime);
  }

  async updateStackInstancesWithOptions(tmpReq: UpdateStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.deploymentTargets))) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.deploymentTargets), "DeploymentTargets", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!Util.isUnset(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!Util.isUnset(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!Util.isUnset(request.parameterOverrides)) {
      query["ParameterOverrides"] = request.parameterOverrides;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!Util.isUnset(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!Util.isUnset(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackInstancesResponse>(await this.callApi(params, req, runtime), new UpdateStackInstancesResponse({}));
  }

  async updateStackInstances(request: UpdateStackInstancesRequest): Promise<UpdateStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackInstancesWithOptions(request, runtime);
  }

  async updateStackTemplateByResourcesWithOptions(request: UpdateStackTemplateByResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackTemplateByResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!Util.isUnset(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStackTemplateByResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStackTemplateByResourcesResponse>(await this.callApi(params, req, runtime), new UpdateStackTemplateByResourcesResponse({}));
  }

  async updateStackTemplateByResources(request: UpdateStackTemplateByResourcesRequest): Promise<UpdateStackTemplateByResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackTemplateByResourcesWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateResponse>(await this.callApi(params, req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  async updateTemplateScratchWithOptions(tmpReq: UpdateTemplateScratchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateScratchResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateScratchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.preferenceParameters)) {
      request.preferenceParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preferenceParameters, "PreferenceParameters", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.sourceResourceGroup))) {
      request.sourceResourceGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.sourceResourceGroup), "SourceResourceGroup", "json");
    }

    if (!Util.isUnset(tmpReq.sourceResources)) {
      request.sourceResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResources, "SourceResources", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.sourceTag))) {
      request.sourceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.sourceTag), "SourceTag", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!Util.isUnset(request.logicalIdStrategy)) {
      query["LogicalIdStrategy"] = request.logicalIdStrategy;
    }

    if (!Util.isUnset(request.preferenceParametersShrink)) {
      query["PreferenceParameters"] = request.preferenceParametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sourceResourceGroupShrink)) {
      query["SourceResourceGroup"] = request.sourceResourceGroupShrink;
    }

    if (!Util.isUnset(request.sourceResourcesShrink)) {
      query["SourceResources"] = request.sourceResourcesShrink;
    }

    if (!Util.isUnset(request.sourceTagShrink)) {
      query["SourceTag"] = request.sourceTagShrink;
    }

    if (!Util.isUnset(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTemplateScratchResponse>(await this.callApi(params, req, runtime), new UpdateTemplateScratchResponse({}));
  }

  async updateTemplateScratch(request: UpdateTemplateScratchRequest): Promise<UpdateTemplateScratchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateScratchWithOptions(request, runtime);
  }

  async validateTemplateWithOptions(request: ValidateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!Util.isUnset(request.validationOption)) {
      query["ValidationOption"] = request.validationOption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateTemplateResponse>(await this.callApi(params, req, runtime), new ValidateTemplateResponse({}));
  }

  async validateTemplate(request: ValidateTemplateRequest): Promise<ValidateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTemplateWithOptions(request, runtime);
  }

}
