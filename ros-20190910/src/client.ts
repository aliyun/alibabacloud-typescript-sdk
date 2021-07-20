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
  stackId?: string;
  regionId?: string;
  cancelType?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      cancelType: 'CancelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
      cancelType: 'string',
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
  body: CancelUpdateStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelUpdateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueCreateStackRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  ramRoleName?: string;
  mode?: string;
  templateBody?: string;
  templateURL?: string;
  dryRun?: boolean;
  templateId?: string;
  templateVersion?: string;
  recreatingResources?: string[];
  parameters?: ContinueCreateStackRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      ramRoleName: 'RamRoleName',
      mode: 'Mode',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      dryRun: 'DryRun',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      recreatingResources: 'RecreatingResources',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
      ramRoleName: 'string',
      mode: 'string',
      templateBody: 'string',
      templateURL: 'string',
      dryRun: 'boolean',
      templateId: 'string',
      templateVersion: 'string',
      recreatingResources: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': ContinueCreateStackRequestParameters },
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
  body: ContinueCreateStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ContinueCreateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChangeSetRequest extends $tea.Model {
  stackId?: string;
  stackPolicyURL?: string;
  stackPolicyBody?: string;
  stackName?: string;
  usePreviousParameters?: boolean;
  changeSetType?: string;
  description?: string;
  regionId?: string;
  clientToken?: string;
  templateURL?: string;
  stackPolicyDuringUpdateURL?: string;
  templateBody?: string;
  timeoutInMinutes?: number;
  disableRollback?: boolean;
  changeSetName?: string;
  stackPolicyDuringUpdateBody?: string;
  ramRoleName?: string;
  replacementOption?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: CreateChangeSetRequestParameters[];
  notificationURLs?: string[];
  resourcesToImport?: CreateChangeSetRequestResourcesToImport[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      stackPolicyURL: 'StackPolicyURL',
      stackPolicyBody: 'StackPolicyBody',
      stackName: 'StackName',
      usePreviousParameters: 'UsePreviousParameters',
      changeSetType: 'ChangeSetType',
      description: 'Description',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      templateURL: 'TemplateURL',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      templateBody: 'TemplateBody',
      timeoutInMinutes: 'TimeoutInMinutes',
      disableRollback: 'DisableRollback',
      changeSetName: 'ChangeSetName',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      ramRoleName: 'RamRoleName',
      replacementOption: 'ReplacementOption',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
      notificationURLs: 'NotificationURLs',
      resourcesToImport: 'ResourcesToImport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      stackPolicyURL: 'string',
      stackPolicyBody: 'string',
      stackName: 'string',
      usePreviousParameters: 'boolean',
      changeSetType: 'string',
      description: 'string',
      regionId: 'string',
      clientToken: 'string',
      templateURL: 'string',
      stackPolicyDuringUpdateURL: 'string',
      templateBody: 'string',
      timeoutInMinutes: 'number',
      disableRollback: 'boolean',
      changeSetName: 'string',
      stackPolicyDuringUpdateBody: 'string',
      ramRoleName: 'string',
      replacementOption: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': CreateChangeSetRequestParameters },
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      resourcesToImport: { 'type': 'array', 'itemType': CreateChangeSetRequestResourcesToImport },
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
  body: CreateChangeSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackRequest extends $tea.Model {
  disableRollback?: boolean;
  templateBody?: string;
  stackPolicyURL?: string;
  timeoutInMinutes?: number;
  stackPolicyBody?: string;
  stackName?: string;
  regionId?: string;
  clientToken?: string;
  templateURL?: string;
  ramRoleName?: string;
  deletionProtection?: string;
  createOption?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: CreateStackRequestParameters[];
  notificationURLs?: string[];
  tags?: CreateStackRequestTags[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      disableRollback: 'DisableRollback',
      templateBody: 'TemplateBody',
      stackPolicyURL: 'StackPolicyURL',
      timeoutInMinutes: 'TimeoutInMinutes',
      stackPolicyBody: 'StackPolicyBody',
      stackName: 'StackName',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      templateURL: 'TemplateURL',
      ramRoleName: 'RamRoleName',
      deletionProtection: 'DeletionProtection',
      createOption: 'CreateOption',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
      notificationURLs: 'NotificationURLs',
      tags: 'Tags',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableRollback: 'boolean',
      templateBody: 'string',
      stackPolicyURL: 'string',
      timeoutInMinutes: 'number',
      stackPolicyBody: 'string',
      stackName: 'string',
      regionId: 'string',
      clientToken: 'string',
      templateURL: 'string',
      ramRoleName: 'string',
      deletionProtection: 'string',
      createOption: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': CreateStackRequestParameters },
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreateStackRequestTags },
      resourceGroupId: 'string',
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
  body: CreateStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackGroupRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  description?: string;
  templateBody?: string;
  templateURL?: string;
  clientToken?: string;
  administrationRoleName?: string;
  executionRoleName?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: CreateStackGroupRequestParameters[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      description: 'Description',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      clientToken: 'ClientToken',
      administrationRoleName: 'AdministrationRoleName',
      executionRoleName: 'ExecutionRoleName',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      description: 'string',
      templateBody: 'string',
      templateURL: 'string',
      clientToken: 'string',
      administrationRoleName: 'string',
      executionRoleName: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': CreateStackGroupRequestParameters },
      resourceGroupId: 'string',
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
  body: CreateStackGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  accountIds?: { [key: string]: any };
  regionIds?: { [key: string]: any };
  clientToken?: string;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  timeoutInMinutes?: number;
  disableRollback?: boolean;
  parameterOverrides?: CreateStackInstancesRequestParameterOverrides[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      accountIds: 'AccountIds',
      regionIds: 'RegionIds',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      timeoutInMinutes: 'TimeoutInMinutes',
      disableRollback: 'DisableRollback',
      parameterOverrides: 'ParameterOverrides',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      accountIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      timeoutInMinutes: 'number',
      disableRollback: 'boolean',
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesRequestParameterOverrides },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesShrinkRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  accountIdsShrink?: string;
  regionIdsShrink?: string;
  clientToken?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  timeoutInMinutes?: number;
  disableRollback?: boolean;
  parameterOverrides?: CreateStackInstancesShrinkRequestParameterOverrides[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      accountIdsShrink: 'AccountIds',
      regionIdsShrink: 'RegionIds',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      timeoutInMinutes: 'TimeoutInMinutes',
      disableRollback: 'DisableRollback',
      parameterOverrides: 'ParameterOverrides',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      accountIdsShrink: 'string',
      regionIdsShrink: 'string',
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      timeoutInMinutes: 'number',
      disableRollback: 'boolean',
      parameterOverrides: { 'type': 'array', 'itemType': CreateStackInstancesShrinkRequestParameterOverrides },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesResponseBody extends $tea.Model {
  requestId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateStackInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  templateURL?: string;
  description?: string;
  templateBody?: string;
  templateName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      templateURL: 'TemplateURL',
      description: 'Description',
      templateBody: 'TemplateBody',
      templateName: 'TemplateName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateURL: 'string',
      description: 'string',
      templateBody: 'string',
      templateName: 'string',
      resourceGroupId: 'string',
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

export class DeleteChangeSetRequest extends $tea.Model {
  regionId?: string;
  changeSetId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      changeSetId: 'ChangeSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      changeSetId: 'string',
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
  body: DeleteChangeSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackRequest extends $tea.Model {
  stackId?: string;
  retainAllResources?: boolean;
  regionId?: string;
  ramRoleName?: string;
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      retainAllResources: 'RetainAllResources',
      regionId: 'RegionId',
      ramRoleName: 'RamRoleName',
      retainResources: 'RetainResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      retainAllResources: 'boolean',
      regionId: 'string',
      ramRoleName: 'string',
      retainResources: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteStackGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  accountIds?: { [key: string]: any };
  regionIds?: { [key: string]: any };
  retainStacks?: boolean;
  clientToken?: string;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      accountIds: 'AccountIds',
      regionIds: 'RegionIds',
      retainStacks: 'RetainStacks',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      accountIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      retainStacks: 'boolean',
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesShrinkRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  accountIdsShrink?: string;
  regionIdsShrink?: string;
  retainStacks?: boolean;
  clientToken?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      accountIdsShrink: 'AccountIds',
      regionIdsShrink: 'RegionIds',
      retainStacks: 'RetainStacks',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      accountIdsShrink: 'string',
      regionIdsShrink: 'string',
      retainStacks: 'boolean',
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesResponseBody extends $tea.Model {
  requestId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteStackInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class DetectStackDriftRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  clientToken?: string;
  logicalResourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
      clientToken: 'string',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftResponseBody extends $tea.Model {
  requestId?: string;
  driftDetectionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      driftDetectionId: 'DriftDetectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      driftDetectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackDriftResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectStackDriftResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectStackDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  stackGroupName?: string;
  operationPreferences?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      operationPreferences: 'OperationPreferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftShrinkRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  stackGroupName?: string;
  operationPreferencesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      operationPreferencesShrink: 'OperationPreferences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      stackGroupName: 'string',
      operationPreferencesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftResponseBody extends $tea.Model {
  requestId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackGroupDriftResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectStackGroupDriftResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectStackGroupDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftRequest extends $tea.Model {
  stackId?: string;
  clientToken?: string;
  regionId?: string;
  logicalResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      logicalResourceId: 'LogicalResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      clientToken: 'string',
      regionId: 'string',
      logicalResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftResponseBody extends $tea.Model {
  logicalResourceId?: string;
  resourceDriftStatus?: string;
  propertyDifferences?: DetectStackResourceDriftResponseBodyPropertyDifferences[];
  requestId?: string;
  physicalResourceId?: string;
  expectedProperties?: string;
  driftDetectionTime?: string;
  resourceType?: string;
  actualProperties?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceDriftStatus: 'ResourceDriftStatus',
      propertyDifferences: 'PropertyDifferences',
      requestId: 'RequestId',
      physicalResourceId: 'PhysicalResourceId',
      expectedProperties: 'ExpectedProperties',
      driftDetectionTime: 'DriftDetectionTime',
      resourceType: 'ResourceType',
      actualProperties: 'ActualProperties',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceDriftStatus: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': DetectStackResourceDriftResponseBodyPropertyDifferences },
      requestId: 'string',
      physicalResourceId: 'string',
      expectedProperties: 'string',
      driftDetectionTime: 'string',
      resourceType: 'string',
      actualProperties: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectStackResourceDriftResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectStackResourceDriftResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectStackResourceDriftResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteChangeSetRequest extends $tea.Model {
  regionId?: string;
  changeSetId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      changeSetId: 'ChangeSetId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      changeSetId: 'string',
      clientToken: 'string',
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
  body: ExecuteChangeSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteChangeSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyRequest extends $tea.Model {
  templateURL?: string;
  templateBody?: string;
  templateId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      templateURL: 'TemplateURL',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateURL: 'string',
      templateBody: 'string',
      templateId: 'string',
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
  body: GenerateTemplatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateTemplatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetRequest extends $tea.Model {
  showTemplate?: boolean;
  regionId?: string;
  changeSetId?: string;
  static names(): { [key: string]: string } {
    return {
      showTemplate: 'ShowTemplate',
      regionId: 'RegionId',
      changeSetId: 'ChangeSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      showTemplate: 'boolean',
      regionId: 'string',
      changeSetId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponseBody extends $tea.Model {
  status?: string;
  changes?: { [key: string]: any }[];
  description?: string;
  parameters?: GetChangeSetResponseBodyParameters[];
  requestId?: string;
  statusReason?: string;
  createTime?: string;
  templateBody?: string;
  changeSetName?: string;
  changeSetId?: string;
  executionStatus?: string;
  changeSetType?: string;
  regionId?: string;
  disableRollback?: boolean;
  stackName?: string;
  timeoutInMinutes?: number;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      changes: 'Changes',
      description: 'Description',
      parameters: 'Parameters',
      requestId: 'RequestId',
      statusReason: 'StatusReason',
      createTime: 'CreateTime',
      templateBody: 'TemplateBody',
      changeSetName: 'ChangeSetName',
      changeSetId: 'ChangeSetId',
      executionStatus: 'ExecutionStatus',
      changeSetType: 'ChangeSetType',
      regionId: 'RegionId',
      disableRollback: 'DisableRollback',
      stackName: 'StackName',
      timeoutInMinutes: 'TimeoutInMinutes',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      changes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      description: 'string',
      parameters: { 'type': 'array', 'itemType': GetChangeSetResponseBodyParameters },
      requestId: 'string',
      statusReason: 'string',
      createTime: 'string',
      templateBody: 'string',
      changeSetName: 'string',
      changeSetId: 'string',
      executionStatus: 'string',
      changeSetType: 'string',
      regionId: 'string',
      disableRollback: 'boolean',
      stackName: 'string',
      timeoutInMinutes: 'number',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChangeSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetChangeSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetChangeSetResponseBody,
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
  requestId?: string;
  attributes?: { [key: string]: any };
  resourceType?: string;
  properties?: { [key: string]: any };
  supportDriftDetection?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      attributes: 'Attributes',
      resourceType: 'ResourceType',
      properties: 'Properties',
      supportDriftDetection: 'SupportDriftDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportDriftDetection: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetResourceTypeTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceTypeTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  clientToken?: string;
  outputOption?: string;
  showResourceProgress?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      outputOption: 'OutputOption',
      showResourceProgress: 'ShowResourceProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
      clientToken: 'string',
      outputOption: 'string',
      showResourceProgress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBody extends $tea.Model {
  status?: string;
  description?: string;
  parameters?: GetStackResponseBodyParameters[];
  requestId?: string;
  statusReason?: string;
  parentStackId?: string;
  createTime?: string;
  deletionProtection?: string;
  rootStackId?: string;
  templateDescription?: string;
  stackType?: string;
  ramRoleName?: string;
  updateTime?: string;
  outputs?: { [key: string]: any }[];
  driftDetectionTime?: string;
  regionId?: string;
  stackDriftStatus?: string;
  notificationURLs?: string[];
  disableRollback?: boolean;
  stackName?: string;
  tags?: GetStackResponseBodyTags[];
  timeoutInMinutes?: number;
  stackId?: string;
  resourceGroupId?: string;
  resourceProgress?: GetStackResponseBodyResourceProgress;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      parameters: 'Parameters',
      requestId: 'RequestId',
      statusReason: 'StatusReason',
      parentStackId: 'ParentStackId',
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      rootStackId: 'RootStackId',
      templateDescription: 'TemplateDescription',
      stackType: 'StackType',
      ramRoleName: 'RamRoleName',
      updateTime: 'UpdateTime',
      outputs: 'Outputs',
      driftDetectionTime: 'DriftDetectionTime',
      regionId: 'RegionId',
      stackDriftStatus: 'StackDriftStatus',
      notificationURLs: 'NotificationURLs',
      disableRollback: 'DisableRollback',
      stackName: 'StackName',
      tags: 'Tags',
      timeoutInMinutes: 'TimeoutInMinutes',
      stackId: 'StackId',
      resourceGroupId: 'ResourceGroupId',
      resourceProgress: 'ResourceProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      parameters: { 'type': 'array', 'itemType': GetStackResponseBodyParameters },
      requestId: 'string',
      statusReason: 'string',
      parentStackId: 'string',
      createTime: 'string',
      deletionProtection: 'string',
      rootStackId: 'string',
      templateDescription: 'string',
      stackType: 'string',
      ramRoleName: 'string',
      updateTime: 'string',
      outputs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      driftDetectionTime: 'string',
      regionId: 'string',
      stackDriftStatus: 'string',
      notificationURLs: { 'type': 'array', 'itemType': 'string' },
      disableRollback: 'boolean',
      stackName: 'string',
      tags: { 'type': 'array', 'itemType': GetStackResponseBodyTags },
      timeoutInMinutes: 'number',
      stackId: 'string',
      resourceGroupId: 'string',
      resourceProgress: GetStackResponseBodyResourceProgress,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusRequest extends $tea.Model {
  regionId?: string;
  driftDetectionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      driftDetectionId: 'DriftDetectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      driftDetectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusResponseBody extends $tea.Model {
  requestId?: string;
  driftDetectionTime?: string;
  driftDetectionStatusReason?: string;
  driftedStackResourceCount?: number;
  stackDriftStatus?: string;
  driftDetectionStatus?: string;
  stackId?: string;
  driftDetectionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      driftDetectionTime: 'DriftDetectionTime',
      driftDetectionStatusReason: 'DriftDetectionStatusReason',
      driftedStackResourceCount: 'DriftedStackResourceCount',
      stackDriftStatus: 'StackDriftStatus',
      driftDetectionStatus: 'DriftDetectionStatus',
      stackId: 'StackId',
      driftDetectionId: 'DriftDetectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      driftDetectionTime: 'string',
      driftDetectionStatusReason: 'string',
      driftedStackResourceCount: 'number',
      stackDriftStatus: 'string',
      driftDetectionStatus: 'string',
      stackId: 'string',
      driftDetectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackDriftDetectionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStackDriftDetectionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackDriftDetectionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  stackGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackGroupId: 'StackGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      stackGroupId: 'string',
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
  body: GetStackGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationRequest extends $tea.Model {
  regionId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      operationId: 'string',
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
  body: GetStackGroupOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: GetStackInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackPolicyRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
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
  body: GetStackPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceRequest extends $tea.Model {
  stackId?: string;
  clientToken?: string;
  regionId?: string;
  showResourceAttributes?: boolean;
  logicalResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      showResourceAttributes: 'ShowResourceAttributes',
      logicalResourceId: 'LogicalResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      clientToken: 'string',
      regionId: 'string',
      showResourceAttributes: 'boolean',
      logicalResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponseBody extends $tea.Model {
  status?: string;
  description?: string;
  requestId?: string;
  statusReason?: string;
  physicalResourceId?: string;
  createTime?: string;
  metadata?: { [key: string]: any };
  resourceType?: string;
  resourceAttributes?: { [key: string]: any }[];
  logicalResourceId?: string;
  resourceDriftStatus?: string;
  updateTime?: string;
  driftDetectionTime?: string;
  stackName?: string;
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      description: 'Description',
      requestId: 'RequestId',
      statusReason: 'StatusReason',
      physicalResourceId: 'PhysicalResourceId',
      createTime: 'CreateTime',
      metadata: 'Metadata',
      resourceType: 'ResourceType',
      resourceAttributes: 'ResourceAttributes',
      logicalResourceId: 'LogicalResourceId',
      resourceDriftStatus: 'ResourceDriftStatus',
      updateTime: 'UpdateTime',
      driftDetectionTime: 'DriftDetectionTime',
      stackName: 'StackName',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      description: 'string',
      requestId: 'string',
      statusReason: 'string',
      physicalResourceId: 'string',
      createTime: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      logicalResourceId: 'string',
      resourceDriftStatus: 'string',
      updateTime: 'string',
      driftDetectionTime: 'string',
      stackName: 'string',
      stackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStackResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStackResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  changeSetId?: string;
  templateId?: string;
  templateVersion?: string;
  templateStage?: string;
  includePermission?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      changeSetId: 'ChangeSetId',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      templateStage: 'TemplateStage',
      includePermission: 'IncludePermission',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
      changeSetId: 'string',
      templateId: 'string',
      templateVersion: 'string',
      templateStage: 'string',
      includePermission: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  templateARN?: string;
  description?: string;
  requestId?: string;
  createTime?: string;
  stackGroupName?: string;
  templateVersion?: string;
  templateBody?: string;
  changeSetId?: string;
  ownerId?: string;
  updateTime?: string;
  permissions?: GetTemplateResponseBodyPermissions[];
  templateName?: string;
  regionId?: string;
  templateId?: string;
  stackId?: string;
  shareType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      templateARN: 'TemplateARN',
      description: 'Description',
      requestId: 'RequestId',
      createTime: 'CreateTime',
      stackGroupName: 'StackGroupName',
      templateVersion: 'TemplateVersion',
      templateBody: 'TemplateBody',
      changeSetId: 'ChangeSetId',
      ownerId: 'OwnerId',
      updateTime: 'UpdateTime',
      permissions: 'Permissions',
      templateName: 'TemplateName',
      regionId: 'RegionId',
      templateId: 'TemplateId',
      stackId: 'StackId',
      shareType: 'ShareType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateARN: 'string',
      description: 'string',
      requestId: 'string',
      createTime: 'string',
      stackGroupName: 'string',
      templateVersion: 'string',
      templateBody: 'string',
      changeSetId: 'string',
      ownerId: 'string',
      updateTime: 'string',
      permissions: { 'type': 'array', 'itemType': GetTemplateResponseBodyPermissions },
      templateName: 'string',
      regionId: 'string',
      templateId: 'string',
      stackId: 'string',
      shareType: 'string',
      resourceGroupId: 'string',
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

export class GetTemplateEstimateCostRequest extends $tea.Model {
  templateURL?: string;
  regionId?: string;
  templateBody?: string;
  clientToken?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: GetTemplateEstimateCostRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      templateURL: 'TemplateURL',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      clientToken: 'ClientToken',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateURL: 'string',
      regionId: 'string',
      templateBody: 'string',
      clientToken: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateEstimateCostRequestParameters },
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
  body: GetTemplateEstimateCostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTemplateEstimateCostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryRequest extends $tea.Model {
  stackId?: string;
  templateBody?: string;
  regionId?: string;
  templateId?: string;
  templateURL?: string;
  changeSetId?: string;
  templateVersion?: string;
  stackGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      regionId: 'RegionId',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      changeSetId: 'ChangeSetId',
      templateVersion: 'TemplateVersion',
      stackGroupName: 'StackGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      templateBody: 'string',
      regionId: 'string',
      templateId: 'string',
      templateURL: 'string',
      changeSetId: 'string',
      templateVersion: 'string',
      stackGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponseBody extends $tea.Model {
  resourceTypes?: string[];
  description?: string;
  parameters?: { [key: string]: any }[];
  requestId?: string;
  version?: string;
  metadata?: { [key: string]: any };
  resourceIdentifierSummaries?: GetTemplateSummaryResponseBodyResourceIdentifierSummaries[];
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
      description: 'Description',
      parameters: 'Parameters',
      requestId: 'RequestId',
      version: 'Version',
      metadata: 'Metadata',
      resourceIdentifierSummaries: 'ResourceIdentifierSummaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      version: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceIdentifierSummaries: { 'type': 'array', 'itemType': GetTemplateSummaryResponseBodyResourceIdentifierSummaries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTemplateSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTemplateSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsRequest extends $tea.Model {
  stackId?: string;
  pageSize?: number;
  regionId?: string;
  pageNumber?: number;
  changeSetId?: string;
  status?: string[];
  changeSetName?: string[];
  executionStatus?: string[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      changeSetId: 'ChangeSetId',
      status: 'Status',
      changeSetName: 'ChangeSetName',
      executionStatus: 'ExecutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      pageSize: 'number',
      regionId: 'string',
      pageNumber: 'number',
      changeSetId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      changeSetName: { 'type': 'array', 'itemType': 'string' },
      executionStatus: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  changeSets?: ListChangeSetsResponseBodyChangeSets[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      changeSets: 'ChangeSets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      changeSets: { 'type': 'array', 'itemType': ListChangeSetsResponseBodyChangeSets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListChangeSetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListChangeSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponseBody extends $tea.Model {
  resourceTypes?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsRequest extends $tea.Model {
  stackId?: string;
  pageSize?: number;
  regionId?: string;
  pageNumber?: number;
  status?: string[];
  resourceType?: string[];
  logicalResourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      status: 'Status',
      resourceType: 'ResourceType',
      logicalResourceId: 'LogicalResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      pageSize: 'number',
      regionId: 'string',
      pageNumber: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      resourceType: { 'type': 'array', 'itemType': 'string' },
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  events?: ListStackEventsResponseBodyEvents[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      events: { 'type': 'array', 'itemType': ListStackEventsResponseBodyEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsRequest extends $tea.Model {
  regionId?: string;
  operationId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      operationId: 'OperationId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      operationId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  stackGroupOperationResults?: ListStackGroupOperationResultsResponseBodyStackGroupOperationResults[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      stackGroupOperationResults: 'StackGroupOperationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      stackGroupOperationResults: { 'type': 'array', 'itemType': ListStackGroupOperationResultsResponseBodyStackGroupOperationResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackGroupOperationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackGroupOperationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  stackGroupOperations?: ListStackGroupOperationsResponseBodyStackGroupOperations[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      stackGroupOperations: 'StackGroupOperations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      stackGroupOperations: { 'type': 'array', 'itemType': ListStackGroupOperationsResponseBodyStackGroupOperations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackGroupOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackGroupOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsRequest extends $tea.Model {
  regionId?: string;
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBody extends $tea.Model {
  stackGroups?: ListStackGroupsResponseBodyStackGroups[];
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      stackGroups: 'StackGroups',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackGroups: { 'type': 'array', 'itemType': ListStackGroupsResponseBodyStackGroups },
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  stackInstanceAccountId?: string;
  stackInstanceRegionId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  stackInstances?: ListStackInstancesResponseBodyStackInstances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      stackInstances: 'StackInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      stackInstances: { 'type': 'array', 'itemType': ListStackInstancesResponseBodyStackInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksRequest extends $tea.Model {
  regionId?: string;
  stackId?: string;
  operationType?: string;
  clientToken?: string;
  ramRoleName?: string;
  retainAllResources?: boolean;
  retainResources?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackId: 'StackId',
      operationType: 'OperationType',
      clientToken: 'ClientToken',
      ramRoleName: 'RamRoleName',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackId: 'string',
      operationType: 'string',
      clientToken: 'string',
      ramRoleName: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
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
  body: ListStackOperationRisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackOperationRisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  resourceDriftStatus?: string[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceDriftStatus: 'ResourceDriftStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceDriftStatus: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBody extends $tea.Model {
  resourceDrifts?: ListStackResourceDriftsResponseBodyResourceDrifts[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceDrifts: 'ResourceDrifts',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceDrifts: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDrifts },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStackResourceDriftsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackResourceDriftsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
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
  body: ListStackResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStackResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksRequest extends $tea.Model {
  pageSize?: number;
  parentStackId?: string;
  regionId?: string;
  pageNumber?: number;
  showNestedStack?: boolean;
  stackId?: string;
  status?: string[];
  stackName?: string[];
  tag?: ListStacksRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      parentStackId: 'ParentStackId',
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      showNestedStack: 'ShowNestedStack',
      stackId: 'StackId',
      status: 'Status',
      stackName: 'StackName',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      parentStackId: 'string',
      regionId: 'string',
      pageNumber: 'number',
      showNestedStack: 'boolean',
      stackId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      stackName: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListStacksRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  stacks?: ListStacksResponseBodyStacks[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      stacks: 'Stacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      stacks: { 'type': 'array', 'itemType': ListStacksResponseBodyStacks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
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
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  resourceType?: string;
  nextToken?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      nextToken: 'string',
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

export class ListTemplatesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  templateName?: string;
  shareType?: string;
  tag?: ListTemplatesRequestTag[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateName: 'TemplateName',
      shareType: 'ShareType',
      tag: 'Tag',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templateName: 'string',
      shareType: 'string',
      tag: { 'type': 'array', 'itemType': ListTemplatesRequestTag },
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  templates?: ListTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
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
  nextToken?: string;
  maxResults?: number;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $tea.Model {
  versions?: ListTemplateVersionsResponseBodyVersions[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      versions: 'Versions',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyVersions },
      nextToken: 'string',
      requestId: 'string',
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

export class MoveResourceGroupRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  newResourceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
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
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackRequest extends $tea.Model {
  disableRollback?: boolean;
  timeoutInMinutes?: number;
  templateBody?: string;
  stackPolicyURL?: string;
  regionId?: string;
  stackPolicyBody?: string;
  stackName?: string;
  clientToken?: string;
  templateURL?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: PreviewStackRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      disableRollback: 'DisableRollback',
      timeoutInMinutes: 'TimeoutInMinutes',
      templateBody: 'TemplateBody',
      stackPolicyURL: 'StackPolicyURL',
      regionId: 'RegionId',
      stackPolicyBody: 'StackPolicyBody',
      stackName: 'StackName',
      clientToken: 'ClientToken',
      templateURL: 'TemplateURL',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableRollback: 'boolean',
      timeoutInMinutes: 'number',
      templateBody: 'string',
      stackPolicyURL: 'string',
      regionId: 'string',
      stackPolicyBody: 'string',
      stackName: 'string',
      clientToken: 'string',
      templateURL: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': PreviewStackRequestParameters },
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
  body: PreviewStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreviewStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionRequest extends $tea.Model {
  stackId?: string;
  deletionProtection?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      deletionProtection: 'DeletionProtection',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      deletionProtection: 'string',
      regionId: 'string',
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
  body: SetDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetStackPolicyRequest extends $tea.Model {
  stackId?: string;
  regionId?: string;
  stackPolicyBody?: string;
  stackPolicyURL?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      regionId: 'RegionId',
      stackPolicyBody: 'StackPolicyBody',
      stackPolicyURL: 'StackPolicyURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      regionId: 'string',
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
  body: SetStackPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetStackPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTemplatePermissionRequest extends $tea.Model {
  shareOption?: string;
  versionOption?: string;
  templateVersion?: string;
  templateId?: string;
  accountIds?: string[];
  static names(): { [key: string]: string } {
    return {
      shareOption: 'ShareOption',
      versionOption: 'VersionOption',
      templateVersion: 'TemplateVersion',
      templateId: 'TemplateId',
      accountIds: 'AccountIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shareOption: 'string',
      versionOption: 'string',
      templateVersion: 'string',
      templateId: 'string',
      accountIds: { 'type': 'array', 'itemType': 'string' },
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
  body: SetTemplatePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetTemplatePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalResourceRequest extends $tea.Model {
  stackId?: string;
  status?: string;
  regionId?: string;
  uniqueId?: string;
  clientToken?: string;
  logicalResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      status: 'Status',
      regionId: 'RegionId',
      uniqueId: 'UniqueId',
      clientToken: 'ClientToken',
      logicalResourceId: 'LogicalResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      status: 'string',
      regionId: 'string',
      uniqueId: 'string',
      clientToken: 'string',
      logicalResourceId: 'string',
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
  body: SignalResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SignalResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStackGroupOperationRequest extends $tea.Model {
  regionId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      operationId: 'string',
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
  body: StopStackGroupOperationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopStackGroupOperationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

export class UpdateStackRequest extends $tea.Model {
  stackId?: string;
  clientToken?: string;
  stackPolicyDuringUpdateBody?: string;
  timeoutInMinutes?: number;
  templateBody?: string;
  stackPolicyURL?: string;
  stackPolicyDuringUpdateURL?: string;
  stackPolicyBody?: string;
  usePreviousParameters?: boolean;
  regionId?: string;
  disableRollback?: boolean;
  templateURL?: string;
  ramRoleName?: string;
  replacementOption?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: UpdateStackRequestParameters[];
  tags?: UpdateStackRequestTags[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      clientToken: 'ClientToken',
      stackPolicyDuringUpdateBody: 'StackPolicyDuringUpdateBody',
      timeoutInMinutes: 'TimeoutInMinutes',
      templateBody: 'TemplateBody',
      stackPolicyURL: 'StackPolicyURL',
      stackPolicyDuringUpdateURL: 'StackPolicyDuringUpdateURL',
      stackPolicyBody: 'StackPolicyBody',
      usePreviousParameters: 'UsePreviousParameters',
      regionId: 'RegionId',
      disableRollback: 'DisableRollback',
      templateURL: 'TemplateURL',
      ramRoleName: 'RamRoleName',
      replacementOption: 'ReplacementOption',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      clientToken: 'string',
      stackPolicyDuringUpdateBody: 'string',
      timeoutInMinutes: 'number',
      templateBody: 'string',
      stackPolicyURL: 'string',
      stackPolicyDuringUpdateURL: 'string',
      stackPolicyBody: 'string',
      usePreviousParameters: 'boolean',
      regionId: 'string',
      disableRollback: 'boolean',
      templateURL: 'string',
      ramRoleName: 'string',
      replacementOption: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateStackRequestParameters },
      tags: { 'type': 'array', 'itemType': UpdateStackRequestTags },
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
  body: UpdateStackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateStackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  description?: string;
  accountIds?: { [key: string]: any };
  regionIds?: { [key: string]: any };
  templateBody?: string;
  templateURL?: string;
  clientToken?: string;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  administrationRoleName?: string;
  executionRoleName?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: UpdateStackGroupRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      description: 'Description',
      accountIds: 'AccountIds',
      regionIds: 'RegionIds',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      administrationRoleName: 'AdministrationRoleName',
      executionRoleName: 'ExecutionRoleName',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      description: 'string',
      accountIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateBody: 'string',
      templateURL: 'string',
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      administrationRoleName: 'string',
      executionRoleName: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateStackGroupRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupShrinkRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  description?: string;
  accountIdsShrink?: string;
  regionIdsShrink?: string;
  templateBody?: string;
  templateURL?: string;
  clientToken?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  administrationRoleName?: string;
  executionRoleName?: string;
  templateId?: string;
  templateVersion?: string;
  parameters?: UpdateStackGroupShrinkRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      description: 'Description',
      accountIdsShrink: 'AccountIds',
      regionIdsShrink: 'RegionIds',
      templateBody: 'TemplateBody',
      templateURL: 'TemplateURL',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      administrationRoleName: 'AdministrationRoleName',
      executionRoleName: 'ExecutionRoleName',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      description: 'string',
      accountIdsShrink: 'string',
      regionIdsShrink: 'string',
      templateBody: 'string',
      templateURL: 'string',
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      administrationRoleName: 'string',
      executionRoleName: 'string',
      templateId: 'string',
      templateVersion: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateStackGroupShrinkRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupResponseBody extends $tea.Model {
  requestId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateStackGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateStackGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  accountIds?: { [key: string]: any };
  regionIds?: { [key: string]: any };
  clientToken?: string;
  operationDescription?: string;
  operationPreferences?: { [key: string]: any };
  timeoutInMinutes?: number;
  parameterOverrides?: UpdateStackInstancesRequestParameterOverrides[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      accountIds: 'AccountIds',
      regionIds: 'RegionIds',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferences: 'OperationPreferences',
      timeoutInMinutes: 'TimeoutInMinutes',
      parameterOverrides: 'ParameterOverrides',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      accountIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferences: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      timeoutInMinutes: 'number',
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesRequestParameterOverrides },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesShrinkRequest extends $tea.Model {
  regionId?: string;
  stackGroupName?: string;
  accountIdsShrink?: string;
  regionIdsShrink?: string;
  clientToken?: string;
  operationDescription?: string;
  operationPreferencesShrink?: string;
  timeoutInMinutes?: number;
  parameterOverrides?: UpdateStackInstancesShrinkRequestParameterOverrides[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      accountIdsShrink: 'AccountIds',
      regionIdsShrink: 'RegionIds',
      clientToken: 'ClientToken',
      operationDescription: 'OperationDescription',
      operationPreferencesShrink: 'OperationPreferences',
      timeoutInMinutes: 'TimeoutInMinutes',
      parameterOverrides: 'ParameterOverrides',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stackGroupName: 'string',
      accountIdsShrink: 'string',
      regionIdsShrink: 'string',
      clientToken: 'string',
      operationDescription: 'string',
      operationPreferencesShrink: 'string',
      timeoutInMinutes: 'number',
      parameterOverrides: { 'type': 'array', 'itemType': UpdateStackInstancesShrinkRequestParameterOverrides },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesResponseBody extends $tea.Model {
  requestId?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operationId: 'OperationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateStackInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateStackInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesRequest extends $tea.Model {
  stackId?: string;
  dryRun?: boolean;
  regionId?: string;
  clientToken?: string;
  templateFormat?: string;
  logicalResourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      stackId: 'StackId',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      clientToken: 'ClientToken',
      templateFormat: 'TemplateFormat',
      logicalResourceId: 'LogicalResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackId: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      clientToken: 'string',
      templateFormat: 'string',
      logicalResourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesResponseBody extends $tea.Model {
  requestId?: string;
  newTemplateBody?: string;
  oldTemplateBody?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      newTemplateBody: 'NewTemplateBody',
      oldTemplateBody: 'OldTemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      newTemplateBody: 'string',
      oldTemplateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackTemplateByResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateStackTemplateByResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateStackTemplateByResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  templateURL?: string;
  templateName?: string;
  description?: string;
  templateBody?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateURL: 'TemplateURL',
      templateName: 'TemplateName',
      description: 'Description',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateURL: 'string',
      templateName: 'string',
      description: 'string',
      templateBody: 'string',
      templateId: 'string',
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

export class ValidateTemplateRequest extends $tea.Model {
  templateURL?: string;
  regionId?: string;
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      templateURL: 'TemplateURL',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateURL: 'string',
      regionId: 'string',
      templateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponseBody extends $tea.Model {
  description?: string;
  parameters?: { [key: string]: any }[];
  requestId?: string;
  outputs?: ValidateTemplateResponseBodyOutputs[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameters: 'Parameters',
      requestId: 'RequestId',
      outputs: 'Outputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
      outputs: { 'type': 'array', 'itemType': ValidateTemplateResponseBodyOutputs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  resourceIdentifier?: string;
  logicalResourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIdentifier: 'ResourceIdentifier',
      logicalResourceId: 'LogicalResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIdentifier: 'string',
      logicalResourceId: 'string',
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
  propertyPath?: string;
  expectedValue?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      propertyPath: 'PropertyPath',
      expectedValue: 'ExpectedValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      propertyPath: 'string',
      expectedValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicyStatement extends $tea.Model {
  effect?: string;
  resource?: string;
  action?: string[];
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      resource: 'Resource',
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      resource: 'string',
      action: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateTemplatePolicyResponseBodyPolicy extends $tea.Model {
  version?: string;
  statement?: GenerateTemplatePolicyResponseBodyPolicyStatement[];
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      statement: 'Statement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      statement: { 'type': 'array', 'itemType': GenerateTemplatePolicyResponseBodyPolicyStatement },
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

export class GetStackResponseBodyResourceProgressInProgressResourceDetails extends $tea.Model {
  resourceName?: string;
  resourceType?: string;
  progressValue?: number;
  progressTargetValue?: number;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      progressValue: 'ProgressValue',
      progressTargetValue: 'ProgressTargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      resourceType: 'string',
      progressValue: 'number',
      progressTargetValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackResponseBodyResourceProgress extends $tea.Model {
  totalResourceCount?: number;
  successResourceCount?: number;
  failedResourceCount?: number;
  inProgressResourceCount?: number;
  pendingResourceCount?: number;
  inProgressResourceDetails?: GetStackResponseBodyResourceProgressInProgressResourceDetails[];
  static names(): { [key: string]: string } {
    return {
      totalResourceCount: 'TotalResourceCount',
      successResourceCount: 'SuccessResourceCount',
      failedResourceCount: 'FailedResourceCount',
      inProgressResourceCount: 'InProgressResourceCount',
      pendingResourceCount: 'PendingResourceCount',
      inProgressResourceDetails: 'InProgressResourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalResourceCount: 'number',
      successResourceCount: 'number',
      failedResourceCount: 'number',
      inProgressResourceCount: 'number',
      pendingResourceCount: 'number',
      inProgressResourceDetails: { 'type': 'array', 'itemType': GetStackResponseBodyResourceProgressInProgressResourceDetails },
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
  driftDetectionTime?: string;
  totalStackInstancesCount?: number;
  failedStackInstancesCount?: number;
  driftDetectionStatus?: string;
  stackGroupDriftStatus?: string;
  inProgressStackInstancesCount?: number;
  inSyncStackInstancesCount?: number;
  cancelledStackInstancesCount?: number;
  driftedStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      driftDetectionTime: 'DriftDetectionTime',
      totalStackInstancesCount: 'TotalStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionTime: 'string',
      totalStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      stackGroupDriftStatus: 'string',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      cancelledStackInstancesCount: 'number',
      driftedStackInstancesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupResponseBodyStackGroup extends $tea.Model {
  stackGroupId?: string;
  status?: string;
  administrationRoleName?: string;
  parameters?: GetStackGroupResponseBodyStackGroupParameters[];
  description?: string;
  stackGroupName?: string;
  executionRoleName?: string;
  templateBody?: string;
  stackGroupDriftDetectionDetail?: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      stackGroupId: 'StackGroupId',
      status: 'Status',
      administrationRoleName: 'AdministrationRoleName',
      parameters: 'Parameters',
      description: 'Description',
      stackGroupName: 'StackGroupName',
      executionRoleName: 'ExecutionRoleName',
      templateBody: 'TemplateBody',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackGroupId: 'string',
      status: 'string',
      administrationRoleName: 'string',
      parameters: { 'type': 'array', 'itemType': GetStackGroupResponseBodyStackGroupParameters },
      description: 'string',
      stackGroupName: 'string',
      executionRoleName: 'string',
      templateBody: 'string',
      stackGroupDriftDetectionDetail: GetStackGroupResponseBodyStackGroupStackGroupDriftDetectionDetail,
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail extends $tea.Model {
  driftDetectionTime?: string;
  totalStackInstancesCount?: number;
  failedStackInstancesCount?: number;
  driftDetectionStatus?: string;
  stackGroupDriftStatus?: string;
  inProgressStackInstancesCount?: number;
  inSyncStackInstancesCount?: number;
  cancelledStackInstancesCount?: number;
  driftedStackInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      driftDetectionTime: 'DriftDetectionTime',
      totalStackInstancesCount: 'TotalStackInstancesCount',
      failedStackInstancesCount: 'FailedStackInstancesCount',
      driftDetectionStatus: 'DriftDetectionStatus',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      inProgressStackInstancesCount: 'InProgressStackInstancesCount',
      inSyncStackInstancesCount: 'InSyncStackInstancesCount',
      cancelledStackInstancesCount: 'CancelledStackInstancesCount',
      driftedStackInstancesCount: 'DriftedStackInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetectionTime: 'string',
      totalStackInstancesCount: 'number',
      failedStackInstancesCount: 'number',
      driftDetectionStatus: 'string',
      stackGroupDriftStatus: 'string',
      inProgressStackInstancesCount: 'number',
      inSyncStackInstancesCount: 'number',
      cancelledStackInstancesCount: 'number',
      driftedStackInstancesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences extends $tea.Model {
  maxConcurrentCount?: number;
  failureToleranceCount?: number;
  maxConcurrentPercentage?: number;
  regionIdsOrder?: string[];
  failureTolerancePercentage?: number;
  static names(): { [key: string]: string } {
    return {
      maxConcurrentCount: 'MaxConcurrentCount',
      failureToleranceCount: 'FailureToleranceCount',
      maxConcurrentPercentage: 'MaxConcurrentPercentage',
      regionIdsOrder: 'RegionIdsOrder',
      failureTolerancePercentage: 'FailureTolerancePercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxConcurrentCount: 'number',
      failureToleranceCount: 'number',
      maxConcurrentPercentage: 'number',
      regionIdsOrder: { 'type': 'array', 'itemType': 'string' },
      failureTolerancePercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStackGroupOperationResponseBodyStackGroupOperation extends $tea.Model {
  status?: string;
  stackGroupId?: string;
  action?: string;
  createTime?: string;
  retainStacks?: boolean;
  stackGroupName?: string;
  operationId?: string;
  operationDescription?: string;
  stackGroupDriftDetectionDetail?: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail;
  operationPreferences?: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences;
  endTime?: string;
  executionRoleName?: string;
  administratorRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stackGroupId: 'StackGroupId',
      action: 'Action',
      createTime: 'CreateTime',
      retainStacks: 'RetainStacks',
      stackGroupName: 'StackGroupName',
      operationId: 'OperationId',
      operationDescription: 'OperationDescription',
      stackGroupDriftDetectionDetail: 'StackGroupDriftDetectionDetail',
      operationPreferences: 'OperationPreferences',
      endTime: 'EndTime',
      executionRoleName: 'ExecutionRoleName',
      administratorRoleName: 'AdministratorRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stackGroupId: 'string',
      action: 'string',
      createTime: 'string',
      retainStacks: 'boolean',
      stackGroupName: 'string',
      operationId: 'string',
      operationDescription: 'string',
      stackGroupDriftDetectionDetail: GetStackGroupOperationResponseBodyStackGroupOperationStackGroupDriftDetectionDetail,
      operationPreferences: GetStackGroupOperationResponseBodyStackGroupOperationOperationPreferences,
      endTime: 'string',
      executionRoleName: 'string',
      administratorRoleName: 'string',
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
  status?: string;
  stackGroupId?: string;
  stackId?: string;
  driftDetectionTime?: string;
  stackDriftStatus?: string;
  statusReason?: string;
  parameterOverrides?: GetStackInstanceResponseBodyStackInstanceParameterOverrides[];
  stackGroupName?: string;
  accountId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stackGroupId: 'StackGroupId',
      stackId: 'StackId',
      driftDetectionTime: 'DriftDetectionTime',
      stackDriftStatus: 'StackDriftStatus',
      statusReason: 'StatusReason',
      parameterOverrides: 'ParameterOverrides',
      stackGroupName: 'StackGroupName',
      accountId: 'AccountId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stackGroupId: 'string',
      stackId: 'string',
      driftDetectionTime: 'string',
      stackDriftStatus: 'string',
      statusReason: 'string',
      parameterOverrides: { 'type': 'array', 'itemType': GetStackInstanceResponseBodyStackInstanceParameterOverrides },
      stackGroupName: 'string',
      accountId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyPermissions extends $tea.Model {
  versionOption?: string;
  accountId?: string;
  shareOption?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      versionOption: 'VersionOption',
      accountId: 'AccountId',
      shareOption: 'ShareOption',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionOption: 'string',
      accountId: 'string',
      shareOption: 'string',
      templateVersion: 'string',
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

export class GetTemplateSummaryResponseBodyResourceIdentifierSummaries extends $tea.Model {
  resourceType?: string;
  logicalResourceIds?: string[];
  resourceIdentifiers?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      logicalResourceIds: 'LogicalResourceIds',
      resourceIdentifiers: 'ResourceIdentifiers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      logicalResourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceIdentifiers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChangeSetsResponseBodyChangeSets extends $tea.Model {
  status?: string;
  stackId?: string;
  changeSetName?: string;
  description?: string;
  changeSetType?: string;
  statusReason?: string;
  createTime?: string;
  changeSetId?: string;
  stackName?: string;
  executionStatus?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stackId: 'StackId',
      changeSetName: 'ChangeSetName',
      description: 'Description',
      changeSetType: 'ChangeSetType',
      statusReason: 'StatusReason',
      createTime: 'CreateTime',
      changeSetId: 'ChangeSetId',
      stackName: 'StackName',
      executionStatus: 'ExecutionStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stackId: 'string',
      changeSetName: 'string',
      description: 'string',
      changeSetType: 'string',
      statusReason: 'string',
      createTime: 'string',
      changeSetId: 'string',
      stackName: 'string',
      executionStatus: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackEventsResponseBodyEvents extends $tea.Model {
  status?: string;
  eventId?: string;
  logicalResourceId?: string;
  stackId?: string;
  physicalResourceId?: string;
  resourceType?: string;
  statusReason?: string;
  createTime?: string;
  stackName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      eventId: 'EventId',
      logicalResourceId: 'LogicalResourceId',
      stackId: 'StackId',
      physicalResourceId: 'PhysicalResourceId',
      resourceType: 'ResourceType',
      statusReason: 'StatusReason',
      createTime: 'CreateTime',
      stackName: 'StackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      eventId: 'string',
      logicalResourceId: 'string',
      stackId: 'string',
      physicalResourceId: 'string',
      resourceType: 'string',
      statusReason: 'string',
      createTime: 'string',
      stackName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationResultsResponseBodyStackGroupOperationResults extends $tea.Model {
  status?: string;
  statusReason?: string;
  accountId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      statusReason: 'StatusReason',
      accountId: 'AccountId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      statusReason: 'string',
      accountId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupOperationsResponseBodyStackGroupOperations extends $tea.Model {
  status?: string;
  stackGroupId?: string;
  endTime?: string;
  action?: string;
  createTime?: string;
  stackGroupName?: string;
  operationId?: string;
  operationDescription?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stackGroupId: 'StackGroupId',
      endTime: 'EndTime',
      action: 'Action',
      createTime: 'CreateTime',
      stackGroupName: 'StackGroupName',
      operationId: 'OperationId',
      operationDescription: 'OperationDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stackGroupId: 'string',
      endTime: 'string',
      action: 'string',
      createTime: 'string',
      stackGroupName: 'string',
      operationId: 'string',
      operationDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBodyStackGroups extends $tea.Model {
  stackGroupId?: string;
  status?: string;
  driftDetectionTime?: string;
  description?: string;
  stackGroupDriftStatus?: string;
  stackGroupName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      stackGroupId: 'StackGroupId',
      status: 'Status',
      driftDetectionTime: 'DriftDetectionTime',
      description: 'Description',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      stackGroupName: 'StackGroupName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackGroupId: 'string',
      status: 'string',
      driftDetectionTime: 'string',
      description: 'string',
      stackGroupDriftStatus: 'string',
      stackGroupName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackInstancesResponseBodyStackInstances extends $tea.Model {
  status?: string;
  stackGroupId?: string;
  stackId?: string;
  driftDetectionTime?: string;
  stackDriftStatus?: string;
  statusReason?: string;
  stackGroupName?: string;
  accountId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      stackGroupId: 'StackGroupId',
      stackId: 'StackId',
      driftDetectionTime: 'DriftDetectionTime',
      stackDriftStatus: 'StackDriftStatus',
      statusReason: 'StatusReason',
      stackGroupName: 'StackGroupName',
      accountId: 'AccountId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      stackGroupId: 'string',
      stackId: 'string',
      driftDetectionTime: 'string',
      stackDriftStatus: 'string',
      statusReason: 'string',
      stackGroupName: 'string',
      accountId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackOperationRisksResponseBodyRiskResources extends $tea.Model {
  logicalResourceId?: string;
  physicalResourceId?: string;
  requestId?: string;
  resourceType?: string;
  code?: string;
  message?: string;
  riskType?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      code: 'Code',
      message: 'Message',
      riskType: 'RiskType',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      requestId: 'string',
      resourceType: 'string',
      code: 'string',
      message: 'string',
      riskType: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences extends $tea.Model {
  actualValue?: string;
  differenceType?: string;
  propertyPath?: string;
  expectedValue?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      propertyPath: 'PropertyPath',
      expectedValue: 'ExpectedValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      propertyPath: 'string',
      expectedValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDrifts extends $tea.Model {
  logicalResourceId?: string;
  stackId?: string;
  physicalResourceId?: string;
  driftDetectionTime?: string;
  resourceType?: string;
  expectedProperties?: string;
  resourceDriftStatus?: string;
  propertyDifferences?: ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences[];
  actualProperties?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      stackId: 'StackId',
      physicalResourceId: 'PhysicalResourceId',
      driftDetectionTime: 'DriftDetectionTime',
      resourceType: 'ResourceType',
      expectedProperties: 'ExpectedProperties',
      resourceDriftStatus: 'ResourceDriftStatus',
      propertyDifferences: 'PropertyDifferences',
      actualProperties: 'ActualProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      stackId: 'string',
      physicalResourceId: 'string',
      driftDetectionTime: 'string',
      resourceType: 'string',
      expectedProperties: 'string',
      resourceDriftStatus: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences },
      actualProperties: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBodyResources extends $tea.Model {
  status?: string;
  logicalResourceId?: string;
  updateTime?: string;
  stackId?: string;
  physicalResourceId?: string;
  driftDetectionTime?: string;
  resourceType?: string;
  resourceDriftStatus?: string;
  statusReason?: string;
  createTime?: string;
  stackName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      logicalResourceId: 'LogicalResourceId',
      updateTime: 'UpdateTime',
      stackId: 'StackId',
      physicalResourceId: 'PhysicalResourceId',
      driftDetectionTime: 'DriftDetectionTime',
      resourceType: 'ResourceType',
      resourceDriftStatus: 'ResourceDriftStatus',
      statusReason: 'StatusReason',
      createTime: 'CreateTime',
      stackName: 'StackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      logicalResourceId: 'string',
      updateTime: 'string',
      stackId: 'string',
      physicalResourceId: 'string',
      driftDetectionTime: 'string',
      resourceType: 'string',
      resourceDriftStatus: 'string',
      statusReason: 'string',
      createTime: 'string',
      stackName: 'string',
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
  status?: string;
  updateTime?: string;
  driftDetectionTime?: string;
  statusReason?: string;
  createTime?: string;
  disableRollback?: boolean;
  tags?: ListStacksResponseBodyStacksTags[];
  stackName?: string;
  timeoutInMinutes?: number;
  regionId?: string;
  parentStackId?: string;
  stackId?: string;
  stackDriftStatus?: string;
  stackType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      driftDetectionTime: 'DriftDetectionTime',
      statusReason: 'StatusReason',
      createTime: 'CreateTime',
      disableRollback: 'DisableRollback',
      tags: 'Tags',
      stackName: 'StackName',
      timeoutInMinutes: 'TimeoutInMinutes',
      regionId: 'RegionId',
      parentStackId: 'ParentStackId',
      stackId: 'StackId',
      stackDriftStatus: 'StackDriftStatus',
      stackType: 'StackType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      driftDetectionTime: 'string',
      statusReason: 'string',
      createTime: 'string',
      disableRollback: 'boolean',
      tags: { 'type': 'array', 'itemType': ListStacksResponseBodyStacksTags },
      stackName: 'string',
      timeoutInMinutes: 'number',
      regionId: 'string',
      parentStackId: 'string',
      stackId: 'string',
      stackDriftStatus: 'string',
      stackType: 'string',
      resourceGroupId: 'string',
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

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  templateARN?: string;
  updateTime?: string;
  description?: string;
  createTime?: string;
  templateName?: string;
  templateVersion?: string;
  templateId?: string;
  ownerId?: string;
  shareType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      templateARN: 'TemplateARN',
      updateTime: 'UpdateTime',
      description: 'Description',
      createTime: 'CreateTime',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      templateId: 'TemplateId',
      ownerId: 'OwnerId',
      shareType: 'ShareType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateARN: 'string',
      updateTime: 'string',
      description: 'string',
      createTime: 'string',
      templateName: 'string',
      templateVersion: 'string',
      templateId: 'string',
      ownerId: 'string',
      shareType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBodyVersions extends $tea.Model {
  updateTime?: string;
  description?: string;
  createTime?: string;
  templateName?: string;
  templateId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      description: 'Description',
      createTime: 'CreateTime',
      templateName: 'TemplateName',
      templateId: 'TemplateId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      description: 'string',
      createTime: 'string',
      templateName: 'string',
      templateId: 'string',
      templateVersion: 'string',
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
  logicalResourceId?: string;
  resourceType?: string;
  description?: string;
  stack?: { [key: string]: any };
  requiredBy?: string[];
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      logicalResourceId: 'LogicalResourceId',
      resourceType: 'ResourceType',
      description: 'Description',
      stack: 'Stack',
      requiredBy: 'RequiredBy',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceId: 'string',
      resourceType: 'string',
      description: 'string',
      stack: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requiredBy: { 'type': 'array', 'itemType': 'string' },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewStackResponseBodyStack extends $tea.Model {
  templateDescription?: string;
  parameters?: PreviewStackResponseBodyStackParameters[];
  description?: string;
  disableRollback?: boolean;
  stackName?: string;
  timeoutInMinutes?: number;
  stackPolicyBody?: { [key: string]: any };
  resources?: PreviewStackResponseBodyStackResources[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      templateDescription: 'TemplateDescription',
      parameters: 'Parameters',
      description: 'Description',
      disableRollback: 'DisableRollback',
      stackName: 'StackName',
      timeoutInMinutes: 'TimeoutInMinutes',
      stackPolicyBody: 'StackPolicyBody',
      resources: 'Resources',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateDescription: 'string',
      parameters: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackParameters },
      description: 'string',
      disableRollback: 'boolean',
      stackName: 'string',
      timeoutInMinutes: 'number',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resources: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackResources },
      regionId: 'string',
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

export class ValidateTemplateResponseBodyOutputs extends $tea.Model {
  outputKey?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      outputKey: 'OutputKey',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputKey: 'string',
      description: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelUpdateStackResponse>(await this.doRPCRequest("CancelUpdateStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CancelUpdateStackResponse({}));
  }

  async cancelUpdateStack(request: CancelUpdateStackRequest): Promise<CancelUpdateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelUpdateStackWithOptions(request, runtime);
  }

  async continueCreateStackWithOptions(request: ContinueCreateStackRequest, runtime: $Util.RuntimeOptions): Promise<ContinueCreateStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContinueCreateStackResponse>(await this.doRPCRequest("ContinueCreateStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ContinueCreateStackResponse({}));
  }

  async continueCreateStack(request: ContinueCreateStackRequest): Promise<ContinueCreateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueCreateStackWithOptions(request, runtime);
  }

  async createChangeSetWithOptions(request: CreateChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<CreateChangeSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateChangeSetResponse>(await this.doRPCRequest("CreateChangeSet", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateChangeSetResponse({}));
  }

  async createChangeSet(request: CreateChangeSetRequest): Promise<CreateChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createChangeSetWithOptions(request, runtime);
  }

  async createStackWithOptions(request: CreateStackRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStackResponse>(await this.doRPCRequest("CreateStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStackResponse({}));
  }

  async createStack(request: CreateStackRequest): Promise<CreateStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackWithOptions(request, runtime);
  }

  async createStackGroupWithOptions(request: CreateStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateStackGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStackGroupResponse>(await this.doRPCRequest("CreateStackGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStackGroupResponse({}));
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

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateStackInstancesResponse>(await this.doRPCRequest("CreateStackInstances", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateStackInstancesResponse({}));
  }

  async createStackInstances(request: CreateStackInstancesRequest): Promise<CreateStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStackInstancesWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doRPCRequest("CreateTemplate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteChangeSetWithOptions(request: DeleteChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteChangeSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteChangeSetResponse>(await this.doRPCRequest("DeleteChangeSet", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteChangeSetResponse({}));
  }

  async deleteChangeSet(request: DeleteChangeSetRequest): Promise<DeleteChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteChangeSetWithOptions(request, runtime);
  }

  async deleteStackWithOptions(request: DeleteStackRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteStackResponse>(await this.doRPCRequest("DeleteStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteStackResponse({}));
  }

  async deleteStack(request: DeleteStackRequest): Promise<DeleteStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackWithOptions(request, runtime);
  }

  async deleteStackGroupWithOptions(request: DeleteStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStackGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteStackGroupResponse>(await this.doRPCRequest("DeleteStackGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteStackGroupResponse({}));
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

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteStackInstancesResponse>(await this.doRPCRequest("DeleteStackInstances", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteStackInstancesResponse({}));
  }

  async deleteStackInstances(request: DeleteStackInstancesRequest): Promise<DeleteStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStackInstancesWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doRPCRequest("DeleteTemplate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTemplateResponse({}));
  }

  async deleteTemplate(request: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async detectStackDriftWithOptions(request: DetectStackDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackDriftResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectStackDriftResponse>(await this.doRPCRequest("DetectStackDrift", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DetectStackDriftResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectStackGroupDriftResponse>(await this.doRPCRequest("DetectStackGroupDrift", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DetectStackGroupDriftResponse({}));
  }

  async detectStackGroupDrift(request: DetectStackGroupDriftRequest): Promise<DetectStackGroupDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackGroupDriftWithOptions(request, runtime);
  }

  async detectStackResourceDriftWithOptions(request: DetectStackResourceDriftRequest, runtime: $Util.RuntimeOptions): Promise<DetectStackResourceDriftResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectStackResourceDriftResponse>(await this.doRPCRequest("DetectStackResourceDrift", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DetectStackResourceDriftResponse({}));
  }

  async detectStackResourceDrift(request: DetectStackResourceDriftRequest): Promise<DetectStackResourceDriftResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectStackResourceDriftWithOptions(request, runtime);
  }

  async executeChangeSetWithOptions(request: ExecuteChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteChangeSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteChangeSetResponse>(await this.doRPCRequest("ExecuteChangeSet", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteChangeSetResponse({}));
  }

  async executeChangeSet(request: ExecuteChangeSetRequest): Promise<ExecuteChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeChangeSetWithOptions(request, runtime);
  }

  async generateTemplatePolicyWithOptions(request: GenerateTemplatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateTemplatePolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateTemplatePolicyResponse>(await this.doRPCRequest("GenerateTemplatePolicy", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateTemplatePolicyResponse({}));
  }

  async generateTemplatePolicy(request: GenerateTemplatePolicyRequest): Promise<GenerateTemplatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateTemplatePolicyWithOptions(request, runtime);
  }

  async getChangeSetWithOptions(request: GetChangeSetRequest, runtime: $Util.RuntimeOptions): Promise<GetChangeSetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetChangeSetResponse>(await this.doRPCRequest("GetChangeSet", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetChangeSetResponse({}));
  }

  async getChangeSet(request: GetChangeSetRequest): Promise<GetChangeSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getChangeSetWithOptions(request, runtime);
  }

  async getResourceTypeWithOptions(request: GetResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResourceTypeResponse>(await this.doRPCRequest("GetResourceType", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourceTypeResponse({}));
  }

  async getResourceType(request: GetResourceTypeRequest): Promise<GetResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeWithOptions(request, runtime);
  }

  async getResourceTypeTemplateWithOptions(request: GetResourceTypeTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceTypeTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetResourceTypeTemplateResponse>(await this.doRPCRequest("GetResourceTypeTemplate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourceTypeTemplateResponse({}));
  }

  async getResourceTypeTemplate(request: GetResourceTypeTemplateRequest): Promise<GetResourceTypeTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceTypeTemplateWithOptions(request, runtime);
  }

  async getStackWithOptions(request: GetStackRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackResponse>(await this.doRPCRequest("GetStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackResponse({}));
  }

  async getStack(request: GetStackRequest): Promise<GetStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  async getStackDriftDetectionStatusWithOptions(request: GetStackDriftDetectionStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetStackDriftDetectionStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackDriftDetectionStatusResponse>(await this.doRPCRequest("GetStackDriftDetectionStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackDriftDetectionStatusResponse({}));
  }

  async getStackDriftDetectionStatus(request: GetStackDriftDetectionStatusRequest): Promise<GetStackDriftDetectionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackDriftDetectionStatusWithOptions(request, runtime);
  }

  async getStackGroupWithOptions(request: GetStackGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetStackGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackGroupResponse>(await this.doRPCRequest("GetStackGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackGroupResponse({}));
  }

  async getStackGroup(request: GetStackGroupRequest): Promise<GetStackGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackGroupWithOptions(request, runtime);
  }

  async getStackGroupOperationWithOptions(request: GetStackGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<GetStackGroupOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackGroupOperationResponse>(await this.doRPCRequest("GetStackGroupOperation", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackGroupOperationResponse({}));
  }

  async getStackGroupOperation(request: GetStackGroupOperationRequest): Promise<GetStackGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackGroupOperationWithOptions(request, runtime);
  }

  async getStackInstanceWithOptions(request: GetStackInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetStackInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackInstanceResponse>(await this.doRPCRequest("GetStackInstance", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackInstanceResponse({}));
  }

  async getStackInstance(request: GetStackInstanceRequest): Promise<GetStackInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackInstanceWithOptions(request, runtime);
  }

  async getStackPolicyWithOptions(request: GetStackPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetStackPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackPolicyResponse>(await this.doRPCRequest("GetStackPolicy", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackPolicyResponse({}));
  }

  async getStackPolicy(request: GetStackPolicyRequest): Promise<GetStackPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackPolicyWithOptions(request, runtime);
  }

  async getStackResourceWithOptions(request: GetStackResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetStackResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetStackResourceResponse>(await this.doRPCRequest("GetStackResource", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetStackResourceResponse({}));
  }

  async getStackResource(request: GetStackResourceRequest): Promise<GetStackResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStackResourceWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateResponse>(await this.doRPCRequest("GetTemplate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async getTemplateEstimateCostWithOptions(request: GetTemplateEstimateCostRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateEstimateCostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateEstimateCostResponse>(await this.doRPCRequest("GetTemplateEstimateCost", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateEstimateCostResponse({}));
  }

  async getTemplateEstimateCost(request: GetTemplateEstimateCostRequest): Promise<GetTemplateEstimateCostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateEstimateCostWithOptions(request, runtime);
  }

  async getTemplateSummaryWithOptions(request: GetTemplateSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateSummaryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetTemplateSummaryResponse>(await this.doRPCRequest("GetTemplateSummary", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new GetTemplateSummaryResponse({}));
  }

  async getTemplateSummary(request: GetTemplateSummaryRequest): Promise<GetTemplateSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateSummaryWithOptions(request, runtime);
  }

  async listChangeSetsWithOptions(request: ListChangeSetsRequest, runtime: $Util.RuntimeOptions): Promise<ListChangeSetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListChangeSetsResponse>(await this.doRPCRequest("ListChangeSets", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListChangeSetsResponse({}));
  }

  async listChangeSets(request: ListChangeSetsRequest): Promise<ListChangeSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChangeSetsWithOptions(request, runtime);
  }

  async listResourceTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListResourceTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListResourceTypesResponse>(await this.doRPCRequest("ListResourceTypes", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourceTypesResponse({}));
  }

  async listResourceTypes(): Promise<ListResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(runtime);
  }

  async listStackEventsWithOptions(request: ListStackEventsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackEventsResponse>(await this.doRPCRequest("ListStackEvents", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackEventsResponse({}));
  }

  async listStackEvents(request: ListStackEventsRequest): Promise<ListStackEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackEventsWithOptions(request, runtime);
  }

  async listStackGroupOperationResultsWithOptions(request: ListStackGroupOperationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupOperationResultsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackGroupOperationResultsResponse>(await this.doRPCRequest("ListStackGroupOperationResults", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackGroupOperationResultsResponse({}));
  }

  async listStackGroupOperationResults(request: ListStackGroupOperationResultsRequest): Promise<ListStackGroupOperationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupOperationResultsWithOptions(request, runtime);
  }

  async listStackGroupOperationsWithOptions(request: ListStackGroupOperationsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupOperationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackGroupOperationsResponse>(await this.doRPCRequest("ListStackGroupOperations", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackGroupOperationsResponse({}));
  }

  async listStackGroupOperations(request: ListStackGroupOperationsRequest): Promise<ListStackGroupOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupOperationsWithOptions(request, runtime);
  }

  async listStackGroupsWithOptions(request: ListStackGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackGroupsResponse>(await this.doRPCRequest("ListStackGroups", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackGroupsResponse({}));
  }

  async listStackGroups(request: ListStackGroupsRequest): Promise<ListStackGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackGroupsWithOptions(request, runtime);
  }

  async listStackInstancesWithOptions(request: ListStackInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListStackInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackInstancesResponse>(await this.doRPCRequest("ListStackInstances", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackInstancesResponse({}));
  }

  async listStackInstances(request: ListStackInstancesRequest): Promise<ListStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackInstancesWithOptions(request, runtime);
  }

  async listStackOperationRisksWithOptions(request: ListStackOperationRisksRequest, runtime: $Util.RuntimeOptions): Promise<ListStackOperationRisksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackOperationRisksResponse>(await this.doRPCRequest("ListStackOperationRisks", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackOperationRisksResponse({}));
  }

  async listStackOperationRisks(request: ListStackOperationRisksRequest): Promise<ListStackOperationRisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackOperationRisksWithOptions(request, runtime);
  }

  async listStackResourceDriftsWithOptions(request: ListStackResourceDriftsRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResourceDriftsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackResourceDriftsResponse>(await this.doRPCRequest("ListStackResourceDrifts", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackResourceDriftsResponse({}));
  }

  async listStackResourceDrifts(request: ListStackResourceDriftsRequest): Promise<ListStackResourceDriftsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackResourceDriftsWithOptions(request, runtime);
  }

  async listStackResourcesWithOptions(request: ListStackResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListStackResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStackResourcesResponse>(await this.doRPCRequest("ListStackResources", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStackResourcesResponse({}));
  }

  async listStackResources(request: ListStackResourcesRequest): Promise<ListStackResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStackResourcesWithOptions(request, runtime);
  }

  async listStacksWithOptions(request: ListStacksRequest, runtime: $Util.RuntimeOptions): Promise<ListStacksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListStacksResponse>(await this.doRPCRequest("ListStacks", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListStacksResponse({}));
  }

  async listStacks(request: ListStacksRequest): Promise<ListStacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStacksWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
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
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doRPCRequest("ListTemplates", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplatesResponse({}));
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
    return $tea.cast<ListTemplateVersionsResponse>(await this.doRPCRequest("ListTemplateVersions", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ListTemplateVersionsResponse({}));
  }

  async listTemplateVersions(request: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doRPCRequest("MoveResourceGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async previewStackWithOptions(request: PreviewStackRequest, runtime: $Util.RuntimeOptions): Promise<PreviewStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreviewStackResponse>(await this.doRPCRequest("PreviewStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new PreviewStackResponse({}));
  }

  async previewStack(request: PreviewStackRequest): Promise<PreviewStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.previewStackWithOptions(request, runtime);
  }

  async setDeletionProtectionWithOptions(request: SetDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetDeletionProtectionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDeletionProtectionResponse>(await this.doRPCRequest("SetDeletionProtection", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetDeletionProtectionResponse({}));
  }

  async setDeletionProtection(request: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  async setStackPolicyWithOptions(request: SetStackPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetStackPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetStackPolicyResponse>(await this.doRPCRequest("SetStackPolicy", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetStackPolicyResponse({}));
  }

  async setStackPolicy(request: SetStackPolicyRequest): Promise<SetStackPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setStackPolicyWithOptions(request, runtime);
  }

  async setTemplatePermissionWithOptions(request: SetTemplatePermissionRequest, runtime: $Util.RuntimeOptions): Promise<SetTemplatePermissionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetTemplatePermissionResponse>(await this.doRPCRequest("SetTemplatePermission", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetTemplatePermissionResponse({}));
  }

  async setTemplatePermission(request: SetTemplatePermissionRequest): Promise<SetTemplatePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTemplatePermissionWithOptions(request, runtime);
  }

  async signalResourceWithOptions(request: SignalResourceRequest, runtime: $Util.RuntimeOptions): Promise<SignalResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SignalResourceResponse>(await this.doRPCRequest("SignalResource", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new SignalResourceResponse({}));
  }

  async signalResource(request: SignalResourceRequest): Promise<SignalResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signalResourceWithOptions(request, runtime);
  }

  async stopStackGroupOperationWithOptions(request: StopStackGroupOperationRequest, runtime: $Util.RuntimeOptions): Promise<StopStackGroupOperationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopStackGroupOperationResponse>(await this.doRPCRequest("StopStackGroupOperation", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new StopStackGroupOperationResponse({}));
  }

  async stopStackGroupOperation(request: StopStackGroupOperationRequest): Promise<StopStackGroupOperationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopStackGroupOperationWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
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
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateStackWithOptions(request: UpdateStackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateStackResponse>(await this.doRPCRequest("UpdateStack", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateStackResponse({}));
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

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateStackGroupResponse>(await this.doRPCRequest("UpdateStackGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateStackGroupResponse({}));
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

    if (!Util.isUnset(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!Util.isUnset(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateStackInstancesResponse>(await this.doRPCRequest("UpdateStackInstances", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateStackInstancesResponse({}));
  }

  async updateStackInstances(request: UpdateStackInstancesRequest): Promise<UpdateStackInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackInstancesWithOptions(request, runtime);
  }

  async updateStackTemplateByResourcesWithOptions(request: UpdateStackTemplateByResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStackTemplateByResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateStackTemplateByResourcesResponse>(await this.doRPCRequest("UpdateStackTemplateByResources", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateStackTemplateByResourcesResponse({}));
  }

  async updateStackTemplateByResources(request: UpdateStackTemplateByResourcesRequest): Promise<UpdateStackTemplateByResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStackTemplateByResourcesWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(request: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doRPCRequest("UpdateTemplate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTemplateResponse({}));
  }

  async updateTemplate(request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  async validateTemplateWithOptions(request: ValidateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTemplateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateTemplateResponse>(await this.doRPCRequest("ValidateTemplate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateTemplateResponse({}));
  }

  async validateTemplate(request: ValidateTemplateRequest): Promise<ValidateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTemplateWithOptions(request, runtime);
  }

}
