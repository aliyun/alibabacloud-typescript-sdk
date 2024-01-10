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
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: CancelExecutionResponseBody;
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
      body: CancelExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
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

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployApplicationGroupRequest extends $tea.Model {
  applicationName?: string;
  deployParameters?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployParameters: 'DeployParameters',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployParameters: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinueDeployApplicationGroupResponseBody extends $tea.Model {
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

export class ContinueDeployApplicationGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ContinueDeployApplicationGroupResponseBody;
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
      body: ContinueDeployApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  alarmConfig?: CreateApplicationRequestAlarmConfig;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceId?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: CreateApplicationRequestAlarmConfig,
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationShrinkRequest extends $tea.Model {
  alarmConfigShrink?: string;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  serviceId?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigShrink: 'AlarmConfig',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigShrink: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  application?: CreateApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: CreateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApplicationResponseBody;
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
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupRequest extends $tea.Model {
  applicationName?: string;
  clientToken?: string;
  cmsGroupId?: string;
  deployRegionId?: string;
  description?: string;
  importTagKey?: string;
  importTagValue?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      clientToken: 'ClientToken',
      cmsGroupId: 'CmsGroupId',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      clientToken: 'string',
      cmsGroupId: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupResponseBody extends $tea.Model {
  applicationGroup?: CreateApplicationGroupResponseBodyApplicationGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: CreateApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateApplicationGroupResponseBody;
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
      body: CreateApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemRequest extends $tea.Model {
  category?: string;
  clientToken?: string;
  dedupString?: string;
  description?: string;
  priority?: number;
  regionId?: string;
  resourceGroupId?: string;
  resources?: string;
  severity?: string;
  solutions?: string;
  source?: string;
  tags?: { [key: string]: any };
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemShrinkRequest extends $tea.Model {
  category?: string;
  clientToken?: string;
  dedupString?: string;
  description?: string;
  priority?: number;
  regionId?: string;
  resourceGroupId?: string;
  resources?: string;
  severity?: string;
  solutions?: string;
  source?: string;
  tagsShrink?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      tagsShrink: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      tagsShrink: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemResponseBody extends $tea.Model {
  opsItem?: CreateOpsItemResponseBodyOpsItem;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: CreateOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOpsItemResponseBody;
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
      body: CreateOpsItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterRequest extends $tea.Model {
  clientToken?: string;
  constraints?: string;
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterShrinkRequest extends $tea.Model {
  clientToken?: string;
  constraints?: string;
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponseBody extends $tea.Model {
  parameter?: CreateParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreateParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateParameterResponseBody;
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
      body: CreateParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineRequest extends $tea.Model {
  approvalRules?: string;
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  clientToken?: string;
  description?: string;
  name?: string;
  operationSystem?: string;
  regionId?: string;
  rejectedPatches?: string[];
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  sources?: string[];
  tags?: CreatePatchBaselineRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreatePatchBaselineRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineShrinkRequest extends $tea.Model {
  approvalRules?: string;
  approvedPatchesShrink?: string;
  approvedPatchesEnableNonSecurity?: boolean;
  clientToken?: string;
  description?: string;
  name?: string;
  operationSystem?: string;
  regionId?: string;
  rejectedPatchesShrink?: string;
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  sourcesShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      rejectedPatchesShrink: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
      rejectedPatchesShrink: 'string',
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: CreatePatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: CreatePatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePatchBaselineResponseBody;
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
      body: CreatePatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterRequest extends $tea.Model {
  clientToken?: string;
  constraints?: string;
  description?: string;
  keyId?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      keyId: 'KeyId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      keyId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterShrinkRequest extends $tea.Model {
  clientToken?: string;
  constraints?: string;
  description?: string;
  keyId?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      keyId: 'KeyId',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      keyId: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponseBody extends $tea.Model {
  parameter?: CreateSecretParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreateSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecretParameterResponseBody;
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
      body: CreateSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationRequest extends $tea.Model {
  clientToken?: string;
  configureMode?: string;
  description?: string;
  parameters?: string;
  regionId?: string;
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  tags?: { [key: string]: any };
  targets?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      tags: 'Tags',
      targets: 'Targets',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationShrinkRequest extends $tea.Model {
  clientToken?: string;
  configureMode?: string;
  description?: string;
  parameters?: string;
  regionId?: string;
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  tagsShrink?: string;
  targets?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      tagsShrink: 'Tags',
      targets: 'Targets',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      tagsShrink: 'string',
      targets: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  stateConfiguration?: CreateStateConfigurationResponseBodyStateConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: CreateStateConfigurationResponseBodyStateConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStateConfigurationResponseBody;
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
      body: CreateStateConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  content?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateShrinkRequest extends $tea.Model {
  content?: string;
  regionId?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  templateName?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: CreateTemplateResponseBodyTemplate;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: CreateTemplateResponseBodyTemplate,
      templateType: 'string',
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

export class DeleteApplicationRequest extends $tea.Model {
  force?: boolean;
  name?: string;
  regionId?: string;
  retainResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      name: 'Name',
      regionId: 'RegionId',
      retainResource: 'RetainResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      name: 'string',
      regionId: 'string',
      retainResource: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
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

export class DeleteApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteApplicationResponseBody;
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
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationGroupRequest extends $tea.Model {
  applicationName?: string;
  name?: string;
  regionId?: string;
  retainResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      regionId: 'RegionId',
      retainResource: 'RetainResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      regionId: 'string',
      retainResource: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationGroupResponseBody extends $tea.Model {
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

export class DeleteApplicationGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteApplicationGroupResponseBody;
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
      body: DeleteApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExecutionsRequest extends $tea.Model {
  executionIds?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionIds: 'ExecutionIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionIds: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteExecutionsResponseBody;
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
      body: DeleteExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteParameterResponseBody;
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
      body: DeleteParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePatchBaselineRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePatchBaselineResponseBody extends $tea.Model {
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

export class DeletePatchBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePatchBaselineResponseBody;
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
      body: DeletePatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretParameterRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteSecretParameterResponseBody;
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
      body: DeleteSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStateConfigurationsRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  stateConfigurationIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      stateConfigurationIds: 'StateConfigurationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      stateConfigurationIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStateConfigurationsResponseBody extends $tea.Model {
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

export class DeleteStateConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStateConfigurationsResponseBody;
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
      body: DeleteStateConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateRequest extends $tea.Model {
  autoDeleteExecutions?: boolean;
  regionId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteExecutions: 'AutoDeleteExecutions',
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteExecutions: 'boolean',
      regionId: 'string',
      templateName: 'string',
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

export class DeleteTemplatesRequest extends $tea.Model {
  autoDeleteExecutions?: boolean;
  regionId?: string;
  templateNames?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteExecutions: 'AutoDeleteExecutions',
      regionId: 'RegionId',
      templateNames: 'TemplateNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteExecutions: 'boolean',
      regionId: 'string',
      templateNames: 'string',
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
  statusCode: number;
  body: DeleteTemplatesResponseBody;
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
      body: DeleteTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationGroupRequest extends $tea.Model {
  applicationName?: string;
  deployParameters?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployParameters: 'DeployParameters',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployParameters: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployApplicationGroupResponseBody extends $tea.Model {
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

export class DeployApplicationGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeployApplicationGroupResponseBody;
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
      body: DeployApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillRequest extends $tea.Model {
  applicationName?: string;
  billingCycle?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      billingCycle: 'BillingCycle',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      billingCycle: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillResponseBody extends $tea.Model {
  applicationGroupConsume?: DescribeApplicationGroupBillResponseBodyApplicationGroupConsume[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroupConsume: 'ApplicationGroupConsume',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroupConsume: { 'type': 'array', 'itemType': DescribeApplicationGroupBillResponseBodyApplicationGroupConsume },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApplicationGroupBillResponseBody;
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
      body: DescribeApplicationGroupBillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
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

export class GenerateExecutionPolicyRequest extends $tea.Model {
  ramRole?: string;
  regionId?: string;
  templateContent?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ramRole: 'RamRole',
      regionId: 'RegionId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ramRole: 'string',
      regionId: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateExecutionPolicyResponseBody extends $tea.Model {
  missingPolicy?: string;
  policy?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      missingPolicy: 'MissingPolicy',
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      missingPolicy: 'string',
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
  statusCode: number;
  body: GenerateExecutionPolicyResponseBody;
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
      body: GenerateExecutionPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  application?: GetApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApplicationResponseBody;
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
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupRequest extends $tea.Model {
  applicationName?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponseBody extends $tea.Model {
  applicationGroup?: GetApplicationGroupResponseBodyApplicationGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: GetApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetApplicationGroupResponseBody;
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
      body: GetApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateRequest extends $tea.Model {
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  template?: GetExecutionTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetExecutionTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetExecutionTemplateResponseBody;
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
      body: GetExecutionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaRequest extends $tea.Model {
  aggregator?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInventorySchemaResponseBody extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  requestId?: string;
  schemas?: GetInventorySchemaResponseBodySchemas[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemas: 'Schemas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
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
  statusCode: number;
  body: GetInventorySchemaResponseBody;
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
      body: GetInventorySchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemRequest extends $tea.Model {
  opsItemId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItemId: 'OpsItemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItemId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemResponseBody extends $tea.Model {
  opsItem?: GetOpsItemResponseBodyOpsItem;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: GetOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOpsItemResponseBody;
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
      body: GetOpsItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterRequest extends $tea.Model {
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBody extends $tea.Model {
  parameter?: GetParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetParameterResponseBody;
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
      body: GetParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersRequest extends $tea.Model {
  names?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponseBody extends $tea.Model {
  invalidParameters?: string[];
  parameters?: GetParametersResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidParameters: 'InvalidParameters',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GetParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetParametersResponseBody;
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
      body: GetParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  parameters?: GetParametersByPathResponseBodyParameters[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetParametersByPathResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetParametersByPathResponseBody;
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
      body: GetParametersByPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: GetPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: GetPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPatchBaselineResponseBody;
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
      body: GetPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterRequest extends $tea.Model {
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponseBody extends $tea.Model {
  parameter?: GetSecretParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecretParameterResponseBody;
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
      body: GetSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersRequest extends $tea.Model {
  names?: string;
  regionId?: string;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponseBody extends $tea.Model {
  invalidParameters?: string[];
  parameters?: GetSecretParametersResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidParameters: 'InvalidParameters',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GetSecretParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecretParametersResponseBody;
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
      body: GetSecretParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  parameters?: GetSecretParametersByPathResponseBodyParameters[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetSecretParametersByPathResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecretParametersByPathResponseBody;
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
      body: GetSecretParametersByPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsRequest extends $tea.Model {
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
  statusCode: number;
  body: GetServiceSettingsResponseBody;
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
  content?: string;
  requestId?: string;
  template?: GetTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetTemplateResponseBodyTemplate,
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

export class ListActionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  OOSActionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OOSActionName: 'OOSActionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OOSActionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBody extends $tea.Model {
  actions?: ListActionsResponseBodyActions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListActionsResponseBody;
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
      body: ListActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsRequest extends $tea.Model {
  applicationName?: string;
  deployRegionId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceId?: string;
  resourceProduct?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployRegionId: 'DeployRegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceProduct: 'ResourceProduct',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployRegionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceProduct: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsResponseBody extends $tea.Model {
  applicationGroups?: ListApplicationGroupsResponseBodyApplicationGroups[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroups: 'ApplicationGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroups: { 'type': 'array', 'itemType': ListApplicationGroupsResponseBodyApplicationGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationGroupsResponseBody;
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
      body: ListApplicationGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  applicationType?: string;
  maxResults?: number;
  name?: string;
  names?: string;
  nextToken?: string;
  regionId?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      maxResults: 'MaxResults',
      name: 'Name',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      maxResults: 'number',
      name: 'string',
      names: 'string',
      nextToken: 'string',
      regionId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsShrinkRequest extends $tea.Model {
  applicationType?: string;
  maxResults?: number;
  name?: string;
  names?: string;
  nextToken?: string;
  regionId?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      maxResults: 'MaxResults',
      name: 'Name',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      maxResults: 'number',
      name: 'string',
      names: 'string',
      nextToken: 'string',
      regionId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  applications?: ListApplicationsResponseBodyApplications[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListApplicationsResponseBody;
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
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsRequest extends $tea.Model {
  executionId?: string;
  logType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBody extends $tea.Model {
  executionLogs?: ListExecutionLogsResponseBodyExecutionLogs[];
  isTruncated?: boolean;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionLogs: 'ExecutionLogs',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLogs: { 'type': 'array', 'itemType': ListExecutionLogsResponseBodyExecutionLogs },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListExecutionLogsResponseBody;
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
  statusCode: number;
  body: ListExecutionRiskyTasksResponseBody;
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
      body: ListExecutionRiskyTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsRequest extends $tea.Model {
  categories?: string;
  category?: string;
  depth?: string;
  description?: string;
  endDateAfter?: string;
  endDateBefore?: string;
  executedBy?: string;
  executionId?: string;
  includeChildExecution?: boolean;
  maxResults?: number;
  mode?: string;
  nextToken?: string;
  parentExecutionId?: string;
  ramRole?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceTemplateName?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      category: 'Category',
      depth: 'Depth',
      description: 'Description',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      tags: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      category: 'string',
      depth: 'string',
      description: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsShrinkRequest extends $tea.Model {
  categories?: string;
  category?: string;
  depth?: string;
  description?: string;
  endDateAfter?: string;
  endDateBefore?: string;
  executedBy?: string;
  executionId?: string;
  includeChildExecution?: boolean;
  maxResults?: number;
  mode?: string;
  nextToken?: string;
  parentExecutionId?: string;
  ramRole?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceTemplateName?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  tagsShrink?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      category: 'Category',
      depth: 'Depth',
      description: 'Description',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceTemplateName: 'ResourceTemplateName',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: 'string',
      category: 'string',
      depth: 'string',
      description: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceTemplateName: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      tagsShrink: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBody extends $tea.Model {
  executions?: ListExecutionsResponseBodyExecutions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListExecutionsResponseBody;
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
      body: ListExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesRequest extends $tea.Model {
  instanceIds?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponseBody extends $tea.Model {
  instancePatchStates?: ListInstancePatchStatesResponseBodyInstancePatchStates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePatchStates: 'InstancePatchStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePatchStates: { 'type': 'array', 'itemType': ListInstancePatchStatesResponseBodyInstancePatchStates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancePatchStatesResponseBody;
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
      body: ListInstancePatchStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  patchStatuses?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchStatuses: 'PatchStatuses',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      patchStatuses: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  patches?: ListInstancePatchesResponseBodyPatches[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patches: 'Patches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patches: { 'type': 'array', 'itemType': ListInstancePatchesResponseBodyPatches },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancePatchesResponseBody;
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
      body: ListInstancePatchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesRequest extends $tea.Model {
  filter?: ListInventoryEntriesRequestFilter[];
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListInventoryEntriesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesResponseBody extends $tea.Model {
  captureTime?: string;
  entries?: { [key: string]: any }[];
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  schemaVersion?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      captureTime: 'CaptureTime',
      entries: 'Entries',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemaVersion: 'SchemaVersion',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureTime: 'string',
      entries: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInventoryEntriesResponseBody;
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
      body: ListInventoryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsRequest extends $tea.Model {
  filter?: ListOpsItemsRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceTags?: { [key: string]: any };
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTags: 'ResourceTags',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsItemsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsShrinkRequest extends $tea.Model {
  filter?: ListOpsItemsShrinkRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceTagsShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceTagsShrink: 'ResourceTags',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListOpsItemsShrinkRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceTagsShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  opsItems?: ListOpsItemsResponseBodyOpsItems[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      opsItems: 'OpsItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      opsItems: { 'type': 'array', 'itemType': ListOpsItemsResponseBodyOpsItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOpsItemsResponseBody;
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
      body: ListOpsItemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  regionId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponseBody extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  parameterVersions?: ListParameterVersionsResponseBodyParameterVersions[];
  requestId?: string;
  totalCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterVersions: 'ParameterVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterVersions: { 'type': 'array', 'itemType': ListParameterVersionsResponseBodyParameterVersions },
      requestId: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListParameterVersionsResponseBody;
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
      body: ListParameterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  tags?: { [key: string]: any };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersShrinkRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  tagsShrink?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  parameters?: ListParametersResponseBodyParameters[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListParametersResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListParametersResponseBody;
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
      body: ListParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesRequest extends $tea.Model {
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  operationSystem?: string;
  regionId?: string;
  resourceGroupId?: string;
  shareType?: string;
  sources?: string[];
  tags?: ListPatchBaselinesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListPatchBaselinesRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesShrinkRequest extends $tea.Model {
  approvedPatchesShrink?: string;
  approvedPatchesEnableNonSecurity?: boolean;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  operationSystem?: string;
  regionId?: string;
  resourceGroupId?: string;
  shareType?: string;
  sourcesShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  patchBaselines?: ListPatchBaselinesResponseBodyPatchBaselines[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchBaselines: 'PatchBaselines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patchBaselines: { 'type': 'array', 'itemType': ListPatchBaselinesResponseBodyPatchBaselines },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPatchBaselinesResponseBody;
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
      body: ListPatchBaselinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusRequest extends $tea.Model {
  executionId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  resourceExecutionStatus?: ListResourceExecutionStatusResponseBodyResourceExecutionStatus[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceExecutionStatus: 'ResourceExecutionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceExecutionStatus: { 'type': 'array', 'itemType': ListResourceExecutionStatusResponseBodyResourceExecutionStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceExecutionStatusResponseBody;
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
      body: ListResourceExecutionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  regionId?: string;
  shareType?: string;
  withDecryption?: boolean;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
      withDecryption: 'WithDecryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
      withDecryption: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponseBody extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  parameterVersions?: ListSecretParameterVersionsResponseBodyParameterVersions[];
  requestId?: string;
  totalCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterVersions: 'ParameterVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterVersions: { 'type': 'array', 'itemType': ListSecretParameterVersionsResponseBodyParameterVersions },
      requestId: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecretParameterVersionsResponseBody;
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
      body: ListSecretParameterVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  sortField?: string;
  sortOrder?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersShrinkRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  resourceGroupId?: string;
  sortField?: string;
  sortOrder?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  parameters?: ListSecretParametersResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListSecretParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecretParametersResponseBody;
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
      body: ListSecretParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  stateConfigurationIds?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stateConfigurationIds: 'StateConfigurationIds',
      tags: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stateConfigurationIds: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsShrinkRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  stateConfigurationIds?: string;
  tagsShrink?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      stateConfigurationIds: 'StateConfigurationIds',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      stateConfigurationIds: 'string',
      tagsShrink: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  stateConfigurations?: ListStateConfigurationsResponseBodyStateConfigurations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      stateConfigurations: 'StateConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      stateConfigurations: { 'type': 'array', 'itemType': ListStateConfigurationsResponseBodyStateConfigurations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStateConfigurationsResponseBody;
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
      body: ListStateConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
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
  resourceIds?: { [key: string]: any };
  resourceType?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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

export class ListTagResourcesShrinkRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
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
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      maxResults: 'number',
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
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
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

export class ListTaskExecutionsRequest extends $tea.Model {
  endDateAfter?: string;
  endDateBefore?: string;
  executionId?: string;
  includeChildTaskExecution?: boolean;
  maxResults?: number;
  nextToken?: string;
  parentTaskExecutionId?: string;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executionId: 'ExecutionId',
      includeChildTaskExecution: 'IncludeChildTaskExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDateAfter: 'string',
      endDateBefore: 'string',
      executionId: 'string',
      includeChildTaskExecution: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      parentTaskExecutionId: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  taskExecutions?: ListTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskExecutions: { 'type': 'array', 'itemType': ListTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTaskExecutionsResponseBody;
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
      body: ListTaskExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  shareType?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      shareType: 'ShareType',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      shareType: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templateVersions?: ListTemplateVersionsResponseBodyTemplateVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templateVersions: 'TemplateVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templateVersions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyTemplateVersions },
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
  category?: string;
  createdBy?: string;
  createdDateAfter?: string;
  createdDateBefore?: string;
  hasTrigger?: boolean;
  isFavorite?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  tags?: { [key: string]: any };
  templateFormat?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      hasTrigger: 'HasTrigger',
      isFavorite: 'IsFavorite',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      hasTrigger: 'boolean',
      isFavorite: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesShrinkRequest extends $tea.Model {
  category?: string;
  createdBy?: string;
  createdDateAfter?: string;
  createdDateBefore?: string;
  hasTrigger?: boolean;
  isFavorite?: boolean;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceGroupId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  tagsShrink?: string;
  templateFormat?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      hasTrigger: 'HasTrigger',
      isFavorite: 'IsFavorite',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      tagsShrink: 'Tags',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      hasTrigger: 'boolean',
      isFavorite: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      tagsShrink: 'string',
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplates },
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

export class NotifyExecutionRequest extends $tea.Model {
  executionId?: string;
  executionStatus?: string;
  loopItem?: string;
  notifyNote?: string;
  notifyType?: string;
  parameters?: string;
  regionId?: string;
  taskExecutionId?: string;
  taskExecutionIds?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionStatus: 'ExecutionStatus',
      loopItem: 'LoopItem',
      notifyNote: 'NotifyNote',
      notifyType: 'NotifyType',
      parameters: 'Parameters',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
      taskExecutionIds: 'TaskExecutionIds',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionStatus: 'string',
      loopItem: 'string',
      notifyNote: 'string',
      notifyType: 'string',
      parameters: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
      taskExecutionIds: 'string',
      taskName: 'string',
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
  statusCode: number;
  body: NotifyExecutionResponseBody;
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
      body: NotifyExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: RegisterDefaultPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: RegisterDefaultPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterDefaultPatchBaselineResponseBody;
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
      body: RegisterDefaultPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequest extends $tea.Model {
  aggregator?: string[];
  filter?: SearchInventoryRequestFilter[];
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': SearchInventoryRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryResponseBody extends $tea.Model {
  entities?: { [key: string]: any }[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchInventoryResponseBody;
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
      body: SearchInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsRequest extends $tea.Model {
  deliveryOssBucketName?: string;
  deliveryOssEnabled?: boolean;
  deliveryOssKeyPrefix?: string;
  deliverySlsEnabled?: boolean;
  deliverySlsProjectName?: string;
  rdcEnterpriseId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: SetServiceSettingsResponseBody;
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
      body: SetServiceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  loopMode?: string;
  mode?: string;
  parameters?: string;
  parentExecutionId?: string;
  regionId?: string;
  resourceGroupId?: string;
  safetyCheck?: string;
  tags?: { [key: string]: any };
  templateContent?: string;
  templateName?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      loopMode: 'LoopMode',
      mode: 'Mode',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      tags: 'Tags',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      loopMode: 'string',
      mode: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateContent: 'string',
      templateName: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionShrinkRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  loopMode?: string;
  mode?: string;
  parameters?: string;
  parentExecutionId?: string;
  regionId?: string;
  resourceGroupId?: string;
  safetyCheck?: string;
  tagsShrink?: string;
  templateContent?: string;
  templateName?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      loopMode: 'LoopMode',
      mode: 'Mode',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      tagsShrink: 'Tags',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      loopMode: 'string',
      mode: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      tagsShrink: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateURL: 'string',
      templateVersion: 'string',
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
  statusCode: number;
  body: StartExecutionResponseBody;
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

export class TriggerExecutionRequest extends $tea.Model {
  clientToken?: string;
  content?: string;
  executionId?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: 'string',
      executionId: 'string',
      regionId: 'string',
      type: 'string',
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
  statusCode: number;
  body: TriggerExecutionResponseBody;
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
      body: TriggerExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceIds?: { [key: string]: any };
  resourceType?: string;
  tagKeys?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tagKeys: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceIdsShrink?: string;
  resourceType?: string;
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagKeysShrink: 'string',
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

export class UpdateApplicationRequest extends $tea.Model {
  alarmConfig?: UpdateApplicationRequestAlarmConfig;
  deleteAlarmRulesBeforeUpdate?: boolean;
  description?: string;
  name?: string;
  regionId?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      deleteAlarmRulesBeforeUpdate: 'DeleteAlarmRulesBeforeUpdate',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: UpdateApplicationRequestAlarmConfig,
      deleteAlarmRulesBeforeUpdate: 'boolean',
      description: 'string',
      name: 'string',
      regionId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationShrinkRequest extends $tea.Model {
  alarmConfigShrink?: string;
  deleteAlarmRulesBeforeUpdate?: boolean;
  description?: string;
  name?: string;
  regionId?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigShrink: 'AlarmConfig',
      deleteAlarmRulesBeforeUpdate: 'DeleteAlarmRulesBeforeUpdate',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigShrink: 'string',
      deleteAlarmRulesBeforeUpdate: 'boolean',
      description: 'string',
      name: 'string',
      regionId: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBody extends $tea.Model {
  application?: UpdateApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: UpdateApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateApplicationResponseBody;
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
      body: UpdateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupRequest extends $tea.Model {
  applicationName?: string;
  name?: string;
  newName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      name: 'Name',
      newName: 'NewName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      name: 'string',
      newName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponseBody extends $tea.Model {
  applicationGroup?: UpdateApplicationGroupResponseBodyApplicationGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGroup: 'ApplicationGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGroup: UpdateApplicationGroupResponseBodyApplicationGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateApplicationGroupResponseBody;
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
      body: UpdateApplicationGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExecutionRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  executionId?: string;
  parameters?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      executionId: 'ExecutionId',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      executionId: 'string',
      parameters: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
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
  statusCode: number;
  body: UpdateExecutionResponseBody;
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
      body: UpdateExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemRequest extends $tea.Model {
  category?: string;
  clientToken?: string;
  dedupString?: string;
  description?: string;
  opsItemId?: string;
  priority?: number;
  regionId?: string;
  resourceGroupId?: string;
  resources?: string;
  severity?: string;
  solutions?: string;
  source?: string;
  status?: string;
  tags?: { [key: string]: any };
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      opsItemId: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemShrinkRequest extends $tea.Model {
  category?: string;
  clientToken?: string;
  dedupString?: string;
  description?: string;
  opsItemId?: string;
  priority?: number;
  regionId?: string;
  resourceGroupId?: string;
  resources?: string;
  severity?: string;
  solutions?: string;
  source?: string;
  status?: string;
  tagsShrink?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      dedupString: 'DedupString',
      description: 'Description',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tagsShrink: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      dedupString: 'string',
      description: 'string',
      opsItemId: 'string',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tagsShrink: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemResponseBody extends $tea.Model {
  opsItem?: UpdateOpsItemResponseBodyOpsItem;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItem: 'OpsItem',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItem: UpdateOpsItemResponseBodyOpsItem,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateOpsItemResponseBody;
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
      body: UpdateOpsItemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponseBody extends $tea.Model {
  parameter?: UpdateParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdateParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateParameterResponseBody;
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
      body: UpdateParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineRequest extends $tea.Model {
  approvalRules?: string;
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  rejectedPatches?: string[];
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  sources?: string[];
  tags?: UpdatePatchBaselineRequestTags[];
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': UpdatePatchBaselineRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineShrinkRequest extends $tea.Model {
  approvalRules?: string;
  approvedPatchesShrink?: string;
  approvedPatchesEnableNonSecurity?: boolean;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  rejectedPatchesShrink?: string;
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  sourcesShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatchesShrink: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      rejectedPatchesShrink: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatchesShrink: 'string',
      approvedPatchesEnableNonSecurity: 'boolean',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      rejectedPatchesShrink: 'string',
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: UpdatePatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: UpdatePatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePatchBaselineResponseBody;
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
      body: UpdatePatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterShrinkRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponseBody extends $tea.Model {
  parameter?: UpdateSecretParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdateSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSecretParameterResponseBody;
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
      body: UpdateSecretParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationRequest extends $tea.Model {
  clientToken?: string;
  configureMode?: string;
  description?: string;
  parameters?: { [key: string]: any };
  regionId?: string;
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  stateConfigurationId?: string;
  tags?: { [key: string]: any };
  targets?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parameters: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationShrinkRequest extends $tea.Model {
  clientToken?: string;
  configureMode?: string;
  description?: string;
  parametersShrink?: string;
  regionId?: string;
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  stateConfigurationId?: string;
  tagsShrink?: string;
  targets?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configureMode: 'ConfigureMode',
      description: 'Description',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tagsShrink: 'Tags',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configureMode: 'string',
      description: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tagsShrink: 'string',
      targets: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  stateConfiguration?: UpdateStateConfigurationResponseBodyStateConfiguration[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stateConfiguration: 'StateConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stateConfiguration: { 'type': 'array', 'itemType': UpdateStateConfigurationResponseBodyStateConfiguration },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStateConfigurationResponseBody;
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
      body: UpdateStateConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  content?: string;
  regionId?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  templateName?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateName: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateShrinkRequest extends $tea.Model {
  content?: string;
  regionId?: string;
  resourceGroupId?: string;
  tagsShrink?: string;
  templateName?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
      templateName: 'TemplateName',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      templateName: 'string',
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

export class ValidateTemplateContentRequest extends $tea.Model {
  content?: string;
  regionId?: string;
  templateURL?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      templateURL: 'TemplateURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      templateURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponseBody extends $tea.Model {
  outputs?: string;
  parameters?: string;
  ramRole?: string;
  requestId?: string;
  tasks?: ValidateTemplateContentResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      parameters: 'Parameters',
      ramRole: 'RamRole',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: 'string',
      parameters: 'string',
      ramRole: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ValidateTemplateContentResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ValidateTemplateContentResponseBody;
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
      body: ValidateTemplateContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestAlarmConfig extends $tea.Model {
  contactGroups?: string[];
  healthCheckUrl?: string;
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBodyApplication extends $tea.Model {
  createDate?: string;
  description?: string;
  name?: string;
  tags?: { [key: string]: string };
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'string',
      description: 'string',
      name: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationGroupResponseBodyApplicationGroup extends $tea.Model {
  applicationName?: string;
  cmsGroupId?: string;
  createDate?: string;
  deployRegionId?: string;
  description?: string;
  importTagKey?: string;
  importTagValue?: string;
  name?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpsItemResponseBodyOpsItem extends $tea.Model {
  attributes?: string;
  category?: string;
  createDate?: string;
  createdBy?: string;
  description?: string;
  lastModifiedBy?: string;
  opsItemId?: string;
  priority?: number;
  resourceGroupId?: string;
  resources?: string;
  severity?: string;
  solutions?: string;
  source?: string;
  status?: string;
  tags?: { [key: string]: any };
  title?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createDate: 'CreateDate',
      createdBy: 'CreatedBy',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      createDate: 'string',
      createdBy: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: 'string',
      severity: 'string',
      solutions: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineRequestTags extends $tea.Model {
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

export class CreatePatchBaselineResponseBodyPatchBaselineTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  rejectedPatches?: string[];
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  shareType?: string;
  sources?: string[];
  tags?: CreatePatchBaselineResponseBodyPatchBaselineTags[];
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': CreatePatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  keyId?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStateConfigurationResponseBodyStateConfiguration extends $tea.Model {
  configureMode?: string;
  createTime?: string;
  description?: string;
  parameters?: { [key: string]: any };
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  stateConfigurationId?: string;
  tags?: { [key: string]: any };
  targets?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hasTrigger?: boolean;
  hash?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationGroupBillResponseBodyApplicationGroupConsume extends $tea.Model {
  amount?: number;
  creationTime?: string;
  currency?: string;
  instanceId?: string;
  instanceName?: string;
  instanceType?: string;
  optimization?: string;
  peakType?: string;
  performance?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      creationTime: 'CreationTime',
      currency: 'Currency',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      optimization: 'Optimization',
      peakType: 'PeakType',
      performance: 'Performance',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      creationTime: 'string',
      currency: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceType: 'string',
      optimization: 'string',
      peakType: 'string',
      performance: 'string',
      status: 'string',
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

export class GetApplicationResponseBodyApplicationAlarmConfig extends $tea.Model {
  contactGroups?: string[];
  healthCheckUrl?: string;
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  alarmConfig?: GetApplicationResponseBodyApplicationAlarmConfig;
  applicationType?: string;
  createDate?: string;
  description?: string;
  name?: string;
  resourceGroupId?: string;
  serviceId?: string;
  tags?: { [key: string]: any };
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfig: 'AlarmConfig',
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfig: GetApplicationResponseBodyApplicationAlarmConfig,
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGroupResponseBodyApplicationGroup extends $tea.Model {
  applicationName?: string;
  cmsGroupId?: string;
  createDate?: string;
  deployOutputs?: string;
  deployParameters?: string;
  deployRegionId?: string;
  description?: string;
  importTagKey?: string;
  importTagValue?: string;
  name?: string;
  progress?: string;
  status?: string;
  statusReason?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployOutputs: 'DeployOutputs',
      deployParameters: 'DeployParameters',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      statusReason: 'StatusReason',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployOutputs: 'string',
      deployParameters: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      progress: 'string',
      status: 'string',
      statusReason: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExecutionTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
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
  attributes?: GetInventorySchemaResponseBodySchemasAttributes[];
  typeName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      typeName: 'TypeName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': GetInventorySchemaResponseBodySchemasAttributes },
      typeName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpsItemResponseBodyOpsItem extends $tea.Model {
  attributes?: { [key: string]: any };
  category?: string;
  createBy?: string;
  createDate?: string;
  description?: string;
  lastModifiedBy?: string;
  opsItemId?: string;
  priority?: number;
  resourceGroupId?: string;
  resources?: string[];
  severity?: string;
  solutions?: { [key: string]: any }[];
  source?: string;
  status?: string;
  tags?: { [key: string]: any };
  title?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createBy: 'CreateBy',
      createDate: 'CreateDate',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      createBy: 'string',
      createDate: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersResponseBodyParameters extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersByPathResponseBodyParameters extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponseBodyPatchBaselineTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  operationSystem?: string;
  rejectedPatches?: string[];
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  shareType?: string;
  sources?: string[];
  tags?: GetPatchBaselineResponseBodyPatchBaselineTags[];
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetPatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  keyId?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersResponseBodyParameters extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  keyId?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretParametersByPathResponseBodyParameters extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  keyId?: string;
  name?: string;
  parameterVersion?: number;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceSettingsResponseBodyServiceSettings extends $tea.Model {
  deliveryOssBucketName?: string;
  deliveryOssEnabled?: boolean;
  deliveryOssKeyPrefix?: string;
  deliverySlsEnabled?: boolean;
  deliverySlsProjectName?: string;
  rdcEnterpriseId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hasTrigger?: boolean;
  hash?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBodyActions extends $tea.Model {
  actionType?: string;
  createdDate?: string;
  description?: string;
  OOSActionName?: string;
  popularity?: number;
  properties?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      OOSActionName: 'OOSActionName',
      popularity: 'Popularity',
      properties: 'Properties',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      OOSActionName: 'string',
      popularity: 'number',
      properties: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationGroupsResponseBodyApplicationGroups extends $tea.Model {
  applicationName?: string;
  cmsGroupId?: string;
  createDate?: string;
  deployParameters?: string;
  deployRegionId?: string;
  description?: string;
  importTagKey?: string;
  importTagValue?: string;
  name?: string;
  status?: string;
  statusReason?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      cmsGroupId: 'CmsGroupId',
      createDate: 'CreateDate',
      deployParameters: 'DeployParameters',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      status: 'Status',
      statusReason: 'StatusReason',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      cmsGroupId: 'string',
      createDate: 'string',
      deployParameters: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      status: 'string',
      statusReason: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  applicationType?: string;
  createDate?: string;
  description?: string;
  name?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createDate: 'CreateDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionLogsResponseBodyExecutionLogs extends $tea.Model {
  logType?: string;
  message?: string;
  taskExecutionId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      message: 'Message',
      taskExecutionId: 'TaskExecutionId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      message: 'string',
      taskExecutionId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionRiskyTasksResponseBodyRiskyTasks extends $tea.Model {
  API?: string;
  service?: string;
  task?: string[];
  template?: string[];
  static names(): { [key: string]: string } {
    return {
      API: 'API',
      service: 'Service',
      task: 'Task',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      API: 'string',
      service: 'string',
      task: { 'type': 'array', 'itemType': 'string' },
      template: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutionsCurrentTasks extends $tea.Model {
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExecutionsResponseBodyExecutions extends $tea.Model {
  category?: string;
  counters?: { [key: string]: any };
  createDate?: string;
  currentTasks?: ListExecutionsResponseBodyExecutionsCurrentTasks[];
  description?: string;
  endDate?: string;
  executedBy?: string;
  executionId?: string;
  isParent?: boolean;
  lastSuccessfulTriggerTime?: string;
  lastTriggerOutputs?: string;
  lastTriggerStatus?: string;
  lastTriggerStatusMessage?: string;
  lastTriggerTime?: string;
  mode?: string;
  outputs?: string;
  parameters?: { [key: string]: any };
  parentExecutionId?: string;
  ramRole?: string;
  resourceGroupId?: string;
  resourceStatus?: string;
  safetyCheck?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  statusReason?: string;
  tags?: { [key: string]: any };
  targets?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateDate?: string;
  waitingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      lastSuccessfulTriggerTime: 'LastSuccessfulTriggerTime',
      lastTriggerOutputs: 'LastTriggerOutputs',
      lastTriggerStatus: 'LastTriggerStatus',
      lastTriggerStatusMessage: 'LastTriggerStatusMessage',
      lastTriggerTime: 'LastTriggerTime',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      resourceStatus: 'ResourceStatus',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      statusReason: 'StatusReason',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
      waitingStatus: 'WaitingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': ListExecutionsResponseBodyExecutionsCurrentTasks },
      description: 'string',
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      lastSuccessfulTriggerTime: 'string',
      lastTriggerOutputs: 'string',
      lastTriggerStatus: 'string',
      lastTriggerStatusMessage: 'string',
      lastTriggerTime: 'string',
      mode: 'string',
      outputs: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentExecutionId: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      resourceStatus: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      statusReason: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
      waitingStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchStatesResponseBodyInstancePatchStates extends $tea.Model {
  baselineId?: string;
  failedCount?: string;
  installedCount?: string;
  installedOtherCount?: string;
  installedPendingRebootCount?: string;
  installedRejectedCount?: string;
  instanceId?: string;
  missingCount?: string;
  operationEndTime?: string;
  operationStartTime?: string;
  operationType?: string;
  ownerInformation?: string;
  patchGroup?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      failedCount: 'FailedCount',
      installedCount: 'InstalledCount',
      installedOtherCount: 'InstalledOtherCount',
      installedPendingRebootCount: 'InstalledPendingRebootCount',
      installedRejectedCount: 'InstalledRejectedCount',
      instanceId: 'InstanceId',
      missingCount: 'MissingCount',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      operationType: 'OperationType',
      ownerInformation: 'OwnerInformation',
      patchGroup: 'PatchGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      failedCount: 'string',
      installedCount: 'string',
      installedOtherCount: 'string',
      installedPendingRebootCount: 'string',
      installedRejectedCount: 'string',
      instanceId: 'string',
      missingCount: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      operationType: 'string',
      ownerInformation: 'string',
      patchGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePatchesResponseBodyPatches extends $tea.Model {
  classification?: string;
  installedTime?: string;
  KBId?: string;
  severity?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      installedTime: 'InstalledTime',
      KBId: 'KBId',
      severity: 'Severity',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      installedTime: 'string',
      KBId: 'string',
      severity: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInventoryEntriesRequestFilter extends $tea.Model {
  name?: string;
  operator?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsRequestFilter extends $tea.Model {
  name?: string;
  operator?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsShrinkRequestFilter extends $tea.Model {
  name?: string;
  operator?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponseBodyOpsItems extends $tea.Model {
  category?: string;
  createDate?: string;
  opsItemId?: string;
  priority?: number;
  resources?: string[];
  severity?: string;
  source?: string;
  status?: string;
  tags?: { [key: string]: any };
  title?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createDate: 'CreateDate',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resources: 'Resources',
      severity: 'Severity',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createDate: 'string',
      opsItemId: 'string',
      priority: 'number',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterVersionsResponseBodyParameterVersions extends $tea.Model {
  parameterVersion?: number;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      parameterVersion: 'ParameterVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterVersion: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParametersResponseBodyParameters extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesRequestTags extends $tea.Model {
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

export class ListPatchBaselinesResponseBodyPatchBaselinesTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPatchBaselinesResponseBodyPatchBaselines extends $tea.Model {
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  operationSystem?: string;
  resourceGroupId?: string;
  shareType?: string;
  sources?: string[];
  tags?: ListPatchBaselinesResponseBodyPatchBaselinesTags[];
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListPatchBaselinesResponseBodyPatchBaselinesTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExecutionStatusResponseBodyResourceExecutionStatus extends $tea.Model {
  executionId?: string;
  executionTime?: string;
  outputs?: string;
  resourceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executionId: 'ExecutionId',
      executionTime: 'ExecutionTime',
      outputs: 'Outputs',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
      executionTime: 'string',
      outputs: 'string',
      resourceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParameterVersionsResponseBodyParameterVersions extends $tea.Model {
  parameterVersion?: number;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      parameterVersion: 'ParameterVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterVersion: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretParametersResponseBodyParameters extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  keyId?: string;
  name?: string;
  parameterVersion?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStateConfigurationsResponseBodyStateConfigurations extends $tea.Model {
  configureMode?: string;
  createTime?: string;
  description?: string;
  parameters?: string;
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  stateConfigurationId?: string;
  tags?: { [key: string]: any };
  targets?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
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
  childExecutionId?: string;
  createDate?: string;
  endDate?: string;
  executionId?: string;
  extraData?: { [key: string]: any };
  loop?: { [key: string]: any };
  loopBatchNumber?: number;
  loopItem?: string;
  outputs?: string;
  parentTaskExecutionId?: string;
  properties?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  templateId?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      childExecutionId: 'ChildExecutionId',
      createDate: 'CreateDate',
      endDate: 'EndDate',
      executionId: 'ExecutionId',
      extraData: 'ExtraData',
      loop: 'Loop',
      loopBatchNumber: 'LoopBatchNumber',
      loopItem: 'LoopItem',
      outputs: 'Outputs',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      properties: 'Properties',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childExecutionId: 'string',
      createDate: 'string',
      endDate: 'string',
      executionId: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      loop: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      loopBatchNumber: 'number',
      loopItem: 'string',
      outputs: 'string',
      parentTaskExecutionId: 'string',
      properties: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
      templateId: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBodyTemplateVersions extends $tea.Model {
  description?: string;
  templateFormat?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateFormat: 'TemplateFormat',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateFormat: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplates extends $tea.Model {
  category?: string;
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hasTrigger?: boolean;
  hash?: string;
  isFavorite?: boolean;
  popularity?: number;
  publisher?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateType?: string;
  templateVersion?: string;
  totalExecutionCount?: number;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      isFavorite: 'IsFavorite',
      popularity: 'Popularity',
      publisher: 'Publisher',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      isFavorite: 'boolean',
      popularity: 'number',
      publisher: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterDefaultPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  resourceGroupId?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInventoryRequestFilter extends $tea.Model {
  name?: string;
  operator?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetServiceSettingsResponseBodyServiceSettings extends $tea.Model {
  deliveryOssBucketName?: string;
  deliveryOssEnabled?: boolean;
  deliveryOssKeyPrefix?: string;
  deliverySlsEnabled?: boolean;
  deliverySlsProjectName?: string;
  rdcEnterpriseId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryOssBucketName: 'DeliveryOssBucketName',
      deliveryOssEnabled: 'DeliveryOssEnabled',
      deliveryOssKeyPrefix: 'DeliveryOssKeyPrefix',
      deliverySlsEnabled: 'DeliverySlsEnabled',
      deliverySlsProjectName: 'DeliverySlsProjectName',
      rdcEnterpriseId: 'RdcEnterpriseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOssBucketName: 'string',
      deliveryOssEnabled: 'boolean',
      deliveryOssKeyPrefix: 'string',
      deliverySlsEnabled: 'boolean',
      deliverySlsProjectName: 'string',
      rdcEnterpriseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBodyExecutionCurrentTasks extends $tea.Model {
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartExecutionResponseBodyExecution extends $tea.Model {
  counters?: { [key: string]: any };
  createDate?: string;
  currentTasks?: StartExecutionResponseBodyExecutionCurrentTasks[];
  description?: string;
  endDate?: string;
  executedBy?: string;
  executionId?: string;
  isParent?: boolean;
  loopMode?: string;
  mode?: string;
  outputs?: string;
  parameters?: string;
  parentExecutionId?: string;
  ramRole?: string;
  resourceGroupId?: string;
  safetyCheck?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  tags?: { [key: string]: any };
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      description: 'Description',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      loopMode: 'LoopMode',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      resourceGroupId: 'ResourceGroupId',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': StartExecutionResponseBodyExecutionCurrentTasks },
      description: 'string',
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      loopMode: 'string',
      mode: 'string',
      outputs: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      resourceGroupId: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationRequestAlarmConfig extends $tea.Model {
  contactGroups?: string[];
  healthCheckUrl?: string;
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationResponseBodyApplication extends $tea.Model {
  createdDate?: string;
  description?: string;
  name?: string;
  resourceGroupId?: string;
  tags?: { [key: string]: any };
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdDate: 'CreatedDate',
      description: 'Description',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdDate: 'string',
      description: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationGroupResponseBodyApplicationGroup extends $tea.Model {
  applicationName?: string;
  createdDate?: string;
  deployRegionId?: string;
  description?: string;
  importTagKey?: string;
  importTagValue?: string;
  name?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      createdDate: 'CreatedDate',
      deployRegionId: 'DeployRegionId',
      description: 'Description',
      importTagKey: 'ImportTagKey',
      importTagValue: 'ImportTagValue',
      name: 'Name',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      createdDate: 'string',
      deployRegionId: 'string',
      description: 'string',
      importTagKey: 'string',
      importTagValue: 'string',
      name: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOpsItemResponseBodyOpsItem extends $tea.Model {
  attributes?: string;
  category?: string;
  createDate?: string;
  createdBy?: string;
  description?: string;
  lastModifiedBy?: string;
  opsItemId?: string;
  priority?: number;
  resourceGroupId?: string;
  resources?: string[];
  severity?: string;
  solutions?: string[];
  source?: string;
  status?: string;
  tags?: { [key: string]: any };
  title?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      category: 'Category',
      createDate: 'CreateDate',
      createdBy: 'CreatedBy',
      description: 'Description',
      lastModifiedBy: 'LastModifiedBy',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      severity: 'Severity',
      solutions: 'Solutions',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      category: 'string',
      createDate: 'string',
      createdBy: 'string',
      description: 'string',
      lastModifiedBy: 'string',
      opsItemId: 'string',
      priority: 'number',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      solutions: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineRequestTags extends $tea.Model {
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

export class UpdatePatchBaselineResponseBodyPatchBaselineTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  approvedPatches?: string[];
  approvedPatchesEnableNonSecurity?: boolean;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  rejectedPatches?: string[];
  rejectedPatchesAction?: string;
  resourceGroupId?: string;
  shareType?: string;
  sources?: string[];
  tags?: UpdatePatchBaselineResponseBodyPatchBaselineTags[];
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      approvedPatches: 'ApprovedPatches',
      approvedPatchesEnableNonSecurity: 'ApprovedPatchesEnableNonSecurity',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      rejectedPatches: 'RejectedPatches',
      rejectedPatchesAction: 'RejectedPatchesAction',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      sources: 'Sources',
      tags: 'Tags',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      approvedPatches: { 'type': 'array', 'itemType': 'string' },
      approvedPatchesEnableNonSecurity: 'boolean',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      rejectedPatches: { 'type': 'array', 'itemType': 'string' },
      rejectedPatchesAction: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      sources: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': UpdatePatchBaselineResponseBodyPatchBaselineTags },
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  keyId?: string;
  name?: string;
  parameterVersion?: number;
  resourceGroupId?: string;
  shareType?: string;
  tags?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      keyId: 'KeyId',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      keyId: 'string',
      name: 'string',
      parameterVersion: 'number',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStateConfigurationResponseBodyStateConfiguration extends $tea.Model {
  configureMode?: string;
  createTime?: string;
  description?: string;
  parameters?: string;
  resourceGroupId?: string;
  scheduleExpression?: string;
  scheduleType?: string;
  stateConfigurationId?: string;
  tags?: { [key: string]: any };
  targets?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      configureMode: 'ConfigureMode',
      createTime: 'CreateTime',
      description: 'Description',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      scheduleExpression: 'ScheduleExpression',
      scheduleType: 'ScheduleType',
      stateConfigurationId: 'StateConfigurationId',
      tags: 'Tags',
      targets: 'Targets',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configureMode: 'string',
      createTime: 'string',
      description: 'string',
      parameters: 'string',
      resourceGroupId: 'string',
      scheduleExpression: 'string',
      scheduleType: 'string',
      stateConfigurationId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: 'string',
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

export class UpdateTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hasTrigger?: boolean;
  hash?: string;
  resourceGroupId?: string;
  shareType?: string;
  tags?: { [key: string]: any };
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hasTrigger: 'HasTrigger',
      hash: 'Hash',
      resourceGroupId: 'ResourceGroupId',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hasTrigger: 'boolean',
      hash: 'string',
      resourceGroupId: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTemplateContentResponseBodyTasks extends $tea.Model {
  description?: string;
  name?: string;
  outputs?: string;
  properties?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      outputs: 'Outputs',
      properties: 'Properties',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      outputs: 'string',
      properties: 'string',
      type: 'string',
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
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelExecutionResponse>(await this.callApi(params, req, runtime), new CancelExecutionResponse({}));
  }

  async cancelExecution(request: CancelExecutionRequest): Promise<CancelExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelExecutionWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
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
      action: "ChangeResourceGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async continueDeployApplicationGroupWithOptions(request: ContinueDeployApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<ContinueDeployApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.deployParameters)) {
      query["DeployParameters"] = request.deployParameters;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinueDeployApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinueDeployApplicationGroupResponse>(await this.callApi(params, req, runtime), new ContinueDeployApplicationGroupResponse({}));
  }

  async continueDeployApplicationGroup(request: ContinueDeployApplicationGroupRequest): Promise<ContinueDeployApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continueDeployApplicationGroupWithOptions(request, runtime);
  }

  async createApplicationWithOptions(tmpReq: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarmConfig)) {
      request.alarmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmConfig, "AlarmConfig", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alarmConfigShrink)) {
      query["AlarmConfig"] = request.alarmConfigShrink;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  async createApplicationGroupWithOptions(request: CreateApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cmsGroupId)) {
      query["CmsGroupId"] = request.cmsGroupId;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.importTagKey)) {
      query["ImportTagKey"] = request.importTagKey;
    }

    if (!Util.isUnset(request.importTagValue)) {
      query["ImportTagValue"] = request.importTagValue;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationGroupResponse>(await this.callApi(params, req, runtime), new CreateApplicationGroupResponse({}));
  }

  async createApplicationGroup(request: CreateApplicationGroupRequest): Promise<CreateApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationGroupWithOptions(request, runtime);
  }

  async createOpsItemWithOptions(tmpReq: CreateOpsItemRequest, runtime: $Util.RuntimeOptions): Promise<CreateOpsItemResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOpsItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedupString)) {
      query["DedupString"] = request.dedupString;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.solutions)) {
      query["Solutions"] = request.solutions;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOpsItemResponse>(await this.callApi(params, req, runtime), new CreateOpsItemResponse({}));
  }

  async createOpsItem(request: CreateOpsItemRequest): Promise<CreateOpsItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOpsItemWithOptions(request, runtime);
  }

  async createParameterWithOptions(tmpReq: CreateParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreateParameterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateParameterResponse>(await this.callApi(params, req, runtime), new CreateParameterResponse({}));
  }

  async createParameter(request: CreateParameterRequest): Promise<CreateParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createParameterWithOptions(request, runtime);
  }

  async createPatchBaselineWithOptions(tmpReq: CreatePatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<CreatePatchBaselineResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePatchBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.rejectedPatches)) {
      request.rejectedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rejectedPatches, "RejectedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!Util.isUnset(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!Util.isUnset(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rejectedPatchesShrink)) {
      query["RejectedPatches"] = request.rejectedPatchesShrink;
    }

    if (!Util.isUnset(request.rejectedPatchesAction)) {
      query["RejectedPatchesAction"] = request.rejectedPatchesAction;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePatchBaselineResponse>(await this.callApi(params, req, runtime), new CreatePatchBaselineResponse({}));
  }

  async createPatchBaseline(request: CreatePatchBaselineRequest): Promise<CreatePatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPatchBaselineWithOptions(request, runtime);
  }

  async createSecretParameterWithOptions(tmpReq: CreateSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretParameterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSecretParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecretParameterResponse>(await this.callApi(params, req, runtime), new CreateSecretParameterResponse({}));
  }

  async createSecretParameter(request: CreateSecretParameterRequest): Promise<CreateSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecretParameterWithOptions(request, runtime);
  }

  async createStateConfigurationWithOptions(tmpReq: CreateStateConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<CreateStateConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStateConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configureMode)) {
      query["ConfigureMode"] = request.configureMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduleExpression)) {
      query["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!Util.isUnset(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateStateConfiguration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStateConfigurationResponse>(await this.callApi(params, req, runtime), new CreateStateConfigurationResponse({}));
  }

  async createStateConfiguration(request: CreateStateConfigurationRequest): Promise<CreateStateConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStateConfigurationWithOptions(request, runtime);
  }

  async createTemplateWithOptions(tmpReq: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2019-06-01",
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

  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainResource)) {
      query["RetainResource"] = request.retainResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  async deleteApplicationGroupWithOptions(request: DeleteApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainResource)) {
      query["RetainResource"] = request.retainResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationGroupResponse>(await this.callApi(params, req, runtime), new DeleteApplicationGroupResponse({}));
  }

  async deleteApplicationGroup(request: DeleteApplicationGroupRequest): Promise<DeleteApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationGroupWithOptions(request, runtime);
  }

  async deleteExecutionsWithOptions(request: DeleteExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionIds)) {
      query["ExecutionIds"] = request.executionIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteExecutionsResponse>(await this.callApi(params, req, runtime), new DeleteExecutionsResponse({}));
  }

  async deleteExecutions(request: DeleteExecutionsRequest): Promise<DeleteExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExecutionsWithOptions(request, runtime);
  }

  async deleteParameterWithOptions(request: DeleteParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteParameterResponse>(await this.callApi(params, req, runtime), new DeleteParameterResponse({}));
  }

  async deleteParameter(request: DeleteParameterRequest): Promise<DeleteParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteParameterWithOptions(request, runtime);
  }

  async deletePatchBaselineWithOptions(request: DeletePatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<DeletePatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePatchBaselineResponse>(await this.callApi(params, req, runtime), new DeletePatchBaselineResponse({}));
  }

  async deletePatchBaseline(request: DeletePatchBaselineRequest): Promise<DeletePatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePatchBaselineWithOptions(request, runtime);
  }

  async deleteSecretParameterWithOptions(request: DeleteSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecretParameterResponse>(await this.callApi(params, req, runtime), new DeleteSecretParameterResponse({}));
  }

  async deleteSecretParameter(request: DeleteSecretParameterRequest): Promise<DeleteSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretParameterWithOptions(request, runtime);
  }

  async deleteStateConfigurationsWithOptions(request: DeleteStateConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStateConfigurationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stateConfigurationIds)) {
      query["StateConfigurationIds"] = request.stateConfigurationIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStateConfigurations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStateConfigurationsResponse>(await this.callApi(params, req, runtime), new DeleteStateConfigurationsResponse({}));
  }

  async deleteStateConfigurations(request: DeleteStateConfigurationsRequest): Promise<DeleteStateConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStateConfigurationsWithOptions(request, runtime);
  }

  async deleteTemplateWithOptions(request: DeleteTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoDeleteExecutions)) {
      query["AutoDeleteExecutions"] = request.autoDeleteExecutions;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2019-06-01",
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

  async deleteTemplatesWithOptions(request: DeleteTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoDeleteExecutions)) {
      query["AutoDeleteExecutions"] = request.autoDeleteExecutions;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateNames)) {
      query["TemplateNames"] = request.templateNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteTemplatesResponse({}));
  }

  async deleteTemplates(request: DeleteTemplatesRequest): Promise<DeleteTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTemplatesWithOptions(request, runtime);
  }

  async deployApplicationGroupWithOptions(request: DeployApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeployApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.deployParameters)) {
      query["DeployParameters"] = request.deployParameters;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeployApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeployApplicationGroupResponse>(await this.callApi(params, req, runtime), new DeployApplicationGroupResponse({}));
  }

  async deployApplicationGroup(request: DeployApplicationGroupRequest): Promise<DeployApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deployApplicationGroupWithOptions(request, runtime);
  }

  async describeApplicationGroupBillWithOptions(request: DescribeApplicationGroupBillRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationGroupBillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "DescribeApplicationGroupBill",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApplicationGroupBillResponse>(await this.callApi(params, req, runtime), new DescribeApplicationGroupBillResponse({}));
  }

  async describeApplicationGroupBill(request: DescribeApplicationGroupBillRequest): Promise<DescribeApplicationGroupBillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationGroupBillWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-06-01",
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

  async generateExecutionPolicyWithOptions(request: GenerateExecutionPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateExecutionPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateExecutionPolicy",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateExecutionPolicyResponse>(await this.callApi(params, req, runtime), new GenerateExecutionPolicyResponse({}));
  }

  async generateExecutionPolicy(request: GenerateExecutionPolicyRequest): Promise<GenerateExecutionPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateExecutionPolicyWithOptions(request, runtime);
  }

  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  async getApplicationGroupWithOptions(request: GetApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationGroupResponse>(await this.callApi(params, req, runtime), new GetApplicationGroupResponse({}));
  }

  async getApplicationGroup(request: GetApplicationGroupRequest): Promise<GetApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationGroupWithOptions(request, runtime);
  }

  async getExecutionTemplateWithOptions(request: GetExecutionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetExecutionTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExecutionTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetExecutionTemplateResponse>(await this.callApi(params, req, runtime), new GetExecutionTemplateResponse({}));
  }

  async getExecutionTemplate(request: GetExecutionTemplateRequest): Promise<GetExecutionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExecutionTemplateWithOptions(request, runtime);
  }

  async getInventorySchemaWithOptions(request: GetInventorySchemaRequest, runtime: $Util.RuntimeOptions): Promise<GetInventorySchemaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInventorySchema",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInventorySchemaResponse>(await this.callApi(params, req, runtime), new GetInventorySchemaResponse({}));
  }

  async getInventorySchema(request: GetInventorySchemaRequest): Promise<GetInventorySchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInventorySchemaWithOptions(request, runtime);
  }

  async getOpsItemWithOptions(request: GetOpsItemRequest, runtime: $Util.RuntimeOptions): Promise<GetOpsItemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.opsItemId)) {
      query["OpsItemId"] = request.opsItemId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpsItemResponse>(await this.callApi(params, req, runtime), new GetOpsItemResponse({}));
  }

  async getOpsItem(request: GetOpsItemRequest): Promise<GetOpsItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpsItemWithOptions(request, runtime);
  }

  async getParameterWithOptions(request: GetParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetParameterResponse>(await this.callApi(params, req, runtime), new GetParameterResponse({}));
  }

  async getParameter(request: GetParameterRequest): Promise<GetParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParameterWithOptions(request, runtime);
  }

  async getParametersWithOptions(request: GetParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetParametersResponse>(await this.callApi(params, req, runtime), new GetParametersResponse({}));
  }

  async getParameters(request: GetParametersRequest): Promise<GetParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersWithOptions(request, runtime);
  }

  async getParametersByPathWithOptions(request: GetParametersByPathRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersByPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParametersByPath",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetParametersByPathResponse>(await this.callApi(params, req, runtime), new GetParametersByPathResponse({}));
  }

  async getParametersByPath(request: GetParametersByPathRequest): Promise<GetParametersByPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersByPathWithOptions(request, runtime);
  }

  async getPatchBaselineWithOptions(request: GetPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPatchBaselineResponse>(await this.callApi(params, req, runtime), new GetPatchBaselineResponse({}));
  }

  async getPatchBaseline(request: GetPatchBaselineRequest): Promise<GetPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPatchBaselineWithOptions(request, runtime);
  }

  async getSecretParameterWithOptions(request: GetSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretParameterResponse>(await this.callApi(params, req, runtime), new GetSecretParameterResponse({}));
  }

  async getSecretParameter(request: GetSecretParameterRequest): Promise<GetSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParameterWithOptions(request, runtime);
  }

  async getSecretParametersWithOptions(request: GetSecretParametersRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretParametersResponse>(await this.callApi(params, req, runtime), new GetSecretParametersResponse({}));
  }

  async getSecretParameters(request: GetSecretParametersRequest): Promise<GetSecretParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParametersWithOptions(request, runtime);
  }

  async getSecretParametersByPathWithOptions(request: GetSecretParametersByPathRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretParametersByPathResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretParametersByPath",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSecretParametersByPathResponse>(await this.callApi(params, req, runtime), new GetSecretParametersByPathResponse({}));
  }

  async getSecretParametersByPath(request: GetSecretParametersByPathRequest): Promise<GetSecretParametersByPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretParametersByPathWithOptions(request, runtime);
  }

  async getServiceSettingsWithOptions(request: GetServiceSettingsRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceSettings",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceSettingsResponse>(await this.callApi(params, req, runtime), new GetServiceSettingsResponse({}));
  }

  async getServiceSettings(request: GetServiceSettingsRequest): Promise<GetServiceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceSettingsWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2019-06-01",
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

  async listActionsWithOptions(request: ListActionsRequest, runtime: $Util.RuntimeOptions): Promise<ListActionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OOSActionName)) {
      query["OOSActionName"] = request.OOSActionName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListActions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListActionsResponse>(await this.callApi(params, req, runtime), new ListActionsResponse({}));
  }

  async listActions(request: ListActionsRequest): Promise<ListActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActionsWithOptions(request, runtime);
  }

  async listApplicationGroupsWithOptions(request: ListApplicationGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationGroups",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationGroupsResponse>(await this.callApi(params, req, runtime), new ListApplicationGroupsResponse({}));
  }

  async listApplicationGroups(request: ListApplicationGroupsRequest): Promise<ListApplicationGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationGroupsWithOptions(request, runtime);
  }

  async listApplicationsWithOptions(tmpReq: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListApplicationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.names)) {
      query["Names"] = request.names;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request ListExecutionLogsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListExecutionLogsResponse
   */
  async listExecutionLogsWithOptions(request: ListExecutionLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutionLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionLogsResponse>(await this.callApi(params, req, runtime), new ListExecutionLogsResponse({}));
  }

  /**
    * ****
    *
    * @param request ListExecutionLogsRequest
    * @return ListExecutionLogsResponse
   */
  async listExecutionLogs(request: ListExecutionLogsRequest): Promise<ListExecutionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionLogsWithOptions(request, runtime);
  }

  async listExecutionRiskyTasksWithOptions(request: ListExecutionRiskyTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListExecutionRiskyTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutionRiskyTasks",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionRiskyTasksResponse>(await this.callApi(params, req, runtime), new ListExecutionRiskyTasksResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.categories)) {
      query["Categories"] = request.categories;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!Util.isUnset(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!Util.isUnset(request.executedBy)) {
      query["ExecutedBy"] = request.executedBy;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.includeChildExecution)) {
      query["IncludeChildExecution"] = request.includeChildExecution;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!Util.isUnset(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceTemplateName)) {
      query["ResourceTemplateName"] = request.resourceTemplateName;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!Util.isUnset(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExecutionsResponse>(await this.callApi(params, req, runtime), new ListExecutionsResponse({}));
  }

  async listExecutions(request: ListExecutionsRequest): Promise<ListExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  async listInstancePatchStatesWithOptions(request: ListInstancePatchStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancePatchStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancePatchStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancePatchStatesResponse>(await this.callApi(params, req, runtime), new ListInstancePatchStatesResponse({}));
  }

  async listInstancePatchStates(request: ListInstancePatchStatesRequest): Promise<ListInstancePatchStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancePatchStatesWithOptions(request, runtime);
  }

  async listInstancePatchesWithOptions(request: ListInstancePatchesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancePatchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.patchStatuses)) {
      query["PatchStatuses"] = request.patchStatuses;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancePatches",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancePatchesResponse>(await this.callApi(params, req, runtime), new ListInstancePatchesResponse({}));
  }

  async listInstancePatches(request: ListInstancePatchesRequest): Promise<ListInstancePatchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancePatchesWithOptions(request, runtime);
  }

  async listInventoryEntriesWithOptions(request: ListInventoryEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListInventoryEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInventoryEntries",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInventoryEntriesResponse>(await this.callApi(params, req, runtime), new ListInventoryEntriesResponse({}));
  }

  async listInventoryEntries(request: ListInventoryEntriesRequest): Promise<ListInventoryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInventoryEntriesWithOptions(request, runtime);
  }

  async listOpsItemsWithOptions(tmpReq: ListOpsItemsRequest, runtime: $Util.RuntimeOptions): Promise<ListOpsItemsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListOpsItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceTags)) {
      request.resourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTags, "ResourceTags", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceTagsShrink)) {
      query["ResourceTags"] = request.resourceTagsShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOpsItems",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOpsItemsResponse>(await this.callApi(params, req, runtime), new ListOpsItemsResponse({}));
  }

  async listOpsItems(request: ListOpsItemsRequest): Promise<ListOpsItemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOpsItemsWithOptions(request, runtime);
  }

  async listParameterVersionsWithOptions(request: ListParameterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListParameterVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParameterVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListParameterVersionsResponse>(await this.callApi(params, req, runtime), new ListParameterVersionsResponse({}));
  }

  async listParameterVersions(request: ListParameterVersionsRequest): Promise<ListParameterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParameterVersionsWithOptions(request, runtime);
  }

  async listParametersWithOptions(tmpReq: ListParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListParametersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListParametersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListParametersResponse>(await this.callApi(params, req, runtime), new ListParametersResponse({}));
  }

  async listParameters(request: ListParametersRequest): Promise<ListParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listParametersWithOptions(request, runtime);
  }

  async listPatchBaselinesWithOptions(tmpReq: ListPatchBaselinesRequest, runtime: $Util.RuntimeOptions): Promise<ListPatchBaselinesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPatchBaselinesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!Util.isUnset(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPatchBaselines",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPatchBaselinesResponse>(await this.callApi(params, req, runtime), new ListPatchBaselinesResponse({}));
  }

  async listPatchBaselines(request: ListPatchBaselinesRequest): Promise<ListPatchBaselinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPatchBaselinesWithOptions(request, runtime);
  }

  async listResourceExecutionStatusWithOptions(request: ListResourceExecutionStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceExecutionStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceExecutionStatus",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceExecutionStatusResponse>(await this.callApi(params, req, runtime), new ListResourceExecutionStatusResponse({}));
  }

  async listResourceExecutionStatus(request: ListResourceExecutionStatusRequest): Promise<ListResourceExecutionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceExecutionStatusWithOptions(request, runtime);
  }

  async listSecretParameterVersionsWithOptions(request: ListSecretParameterVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretParameterVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecretParameterVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecretParameterVersionsResponse>(await this.callApi(params, req, runtime), new ListSecretParameterVersionsResponse({}));
  }

  async listSecretParameterVersions(request: ListSecretParameterVersionsRequest): Promise<ListSecretParameterVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretParameterVersionsWithOptions(request, runtime);
  }

  /**
    * Before you call this operation, make sure that you have the permission to manage Key Management Service (KMS) secrets.
    *
    * @param tmpReq ListSecretParametersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSecretParametersResponse
   */
  async listSecretParametersWithOptions(tmpReq: ListSecretParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretParametersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListSecretParametersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecretParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecretParametersResponse>(await this.callApi(params, req, runtime), new ListSecretParametersResponse({}));
  }

  /**
    * Before you call this operation, make sure that you have the permission to manage Key Management Service (KMS) secrets.
    *
    * @param request ListSecretParametersRequest
    * @return ListSecretParametersResponse
   */
  async listSecretParameters(request: ListSecretParametersRequest): Promise<ListSecretParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretParametersWithOptions(request, runtime);
  }

  async listStateConfigurationsWithOptions(tmpReq: ListStateConfigurationsRequest, runtime: $Util.RuntimeOptions): Promise<ListStateConfigurationsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListStateConfigurationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.stateConfigurationIds)) {
      query["StateConfigurationIds"] = request.stateConfigurationIds;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStateConfigurations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListStateConfigurationsResponse>(await this.callApi(params, req, runtime), new ListStateConfigurationsResponse({}));
  }

  async listStateConfigurations(request: ListStateConfigurationsRequest): Promise<ListStateConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listStateConfigurationsWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
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

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2019-06-01",
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

    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-06-01",
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

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
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
      version: "2019-06-01",
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

  async listTaskExecutionsWithOptions(request: ListTaskExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!Util.isUnset(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.includeChildTaskExecution)) {
      query["IncludeChildTaskExecution"] = request.includeChildTaskExecution;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentTaskExecutionId)) {
      query["ParentTaskExecutionId"] = request.parentTaskExecutionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!Util.isUnset(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTaskExecutionsResponse>(await this.callApi(params, req, runtime), new ListTaskExecutionsResponse({}));
  }

  async listTaskExecutions(request: ListTaskExecutionsRequest): Promise<ListTaskExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskExecutionsWithOptions(request, runtime);
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplateVersions",
      version: "2019-06-01",
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

  async listTemplatesWithOptions(tmpReq: ListTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!Util.isUnset(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!Util.isUnset(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!Util.isUnset(request.hasTrigger)) {
      query["HasTrigger"] = request.hasTrigger;
    }

    if (!Util.isUnset(request.isFavorite)) {
      query["IsFavorite"] = request.isFavorite;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2019-06-01",
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

  /**
    * You can call this operation to notify an execution in the following scenarios:
    * *   If a template contains a special task, such as an approval task, the Operation Orchestration Service (OOS) execution engine sets the execution state to Waiting when the approval task is being run. You can call this operation to specify whether to continue the execution.
    * *   If you perform debugging in the debug mode, you can call this operation to notify the execution of the subsequent operations after the execution is created or a task is complete.
    * *   If a high-risk operation task waits for approval, you can call this operation to specify whether to continue the execution.
    *
    * @param request NotifyExecutionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return NotifyExecutionResponse
   */
  async notifyExecutionWithOptions(request: NotifyExecutionRequest, runtime: $Util.RuntimeOptions): Promise<NotifyExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!Util.isUnset(request.loopItem)) {
      query["LoopItem"] = request.loopItem;
    }

    if (!Util.isUnset(request.notifyNote)) {
      query["NotifyNote"] = request.notifyNote;
    }

    if (!Util.isUnset(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!Util.isUnset(request.taskExecutionIds)) {
      query["TaskExecutionIds"] = request.taskExecutionIds;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "NotifyExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<NotifyExecutionResponse>(await this.callApi(params, req, runtime), new NotifyExecutionResponse({}));
  }

  /**
    * You can call this operation to notify an execution in the following scenarios:
    * *   If a template contains a special task, such as an approval task, the Operation Orchestration Service (OOS) execution engine sets the execution state to Waiting when the approval task is being run. You can call this operation to specify whether to continue the execution.
    * *   If you perform debugging in the debug mode, you can call this operation to notify the execution of the subsequent operations after the execution is created or a task is complete.
    * *   If a high-risk operation task waits for approval, you can call this operation to specify whether to continue the execution.
    *
    * @param request NotifyExecutionRequest
    * @return NotifyExecutionResponse
   */
  async notifyExecution(request: NotifyExecutionRequest): Promise<NotifyExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.notifyExecutionWithOptions(request, runtime);
  }

  async registerDefaultPatchBaselineWithOptions(request: RegisterDefaultPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<RegisterDefaultPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterDefaultPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterDefaultPatchBaselineResponse>(await this.callApi(params, req, runtime), new RegisterDefaultPatchBaselineResponse({}));
  }

  async registerDefaultPatchBaseline(request: RegisterDefaultPatchBaselineRequest): Promise<RegisterDefaultPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerDefaultPatchBaselineWithOptions(request, runtime);
  }

  async searchInventoryWithOptions(request: SearchInventoryRequest, runtime: $Util.RuntimeOptions): Promise<SearchInventoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchInventory",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchInventoryResponse>(await this.callApi(params, req, runtime), new SearchInventoryResponse({}));
  }

  async searchInventory(request: SearchInventoryRequest): Promise<SearchInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchInventoryWithOptions(request, runtime);
  }

  async setServiceSettingsWithOptions(request: SetServiceSettingsRequest, runtime: $Util.RuntimeOptions): Promise<SetServiceSettingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliveryOssBucketName)) {
      query["DeliveryOssBucketName"] = request.deliveryOssBucketName;
    }

    if (!Util.isUnset(request.deliveryOssEnabled)) {
      query["DeliveryOssEnabled"] = request.deliveryOssEnabled;
    }

    if (!Util.isUnset(request.deliveryOssKeyPrefix)) {
      query["DeliveryOssKeyPrefix"] = request.deliveryOssKeyPrefix;
    }

    if (!Util.isUnset(request.deliverySlsEnabled)) {
      query["DeliverySlsEnabled"] = request.deliverySlsEnabled;
    }

    if (!Util.isUnset(request.deliverySlsProjectName)) {
      query["DeliverySlsProjectName"] = request.deliverySlsProjectName;
    }

    if (!Util.isUnset(request.rdcEnterpriseId)) {
      query["RdcEnterpriseId"] = request.rdcEnterpriseId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetServiceSettings",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetServiceSettingsResponse>(await this.callApi(params, req, runtime), new SetServiceSettingsResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.loopMode)) {
      query["LoopMode"] = request.loopMode;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.safetyCheck)) {
      query["SafetyCheck"] = request.safetyCheck;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
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
      action: "StartExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartExecutionResponse>(await this.callApi(params, req, runtime), new StartExecutionResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-06-01",
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

  async triggerExecutionWithOptions(request: TriggerExecutionRequest, runtime: $Util.RuntimeOptions): Promise<TriggerExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TriggerExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TriggerExecutionResponse>(await this.callApi(params, req, runtime), new TriggerExecutionResponse({}));
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

    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-06-01",
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

  async updateApplicationWithOptions(tmpReq: UpdateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.alarmConfig)) {
      request.alarmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmConfig, "AlarmConfig", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alarmConfigShrink)) {
      query["AlarmConfig"] = request.alarmConfigShrink;
    }

    if (!Util.isUnset(request.deleteAlarmRulesBeforeUpdate)) {
      query["DeleteAlarmRulesBeforeUpdate"] = request.deleteAlarmRulesBeforeUpdate;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationResponse>(await this.callApi(params, req, runtime), new UpdateApplicationResponse({}));
  }

  async updateApplication(request: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  async updateApplicationGroupWithOptions(request: UpdateApplicationGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.newName)) {
      query["NewName"] = request.newName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationGroupResponse>(await this.callApi(params, req, runtime), new UpdateApplicationGroupResponse({}));
  }

  async updateApplicationGroup(request: UpdateApplicationGroupRequest): Promise<UpdateApplicationGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationGroupWithOptions(request, runtime);
  }

  async updateExecutionWithOptions(request: UpdateExecutionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateExecutionResponse>(await this.callApi(params, req, runtime), new UpdateExecutionResponse({}));
  }

  async updateExecution(request: UpdateExecutionRequest): Promise<UpdateExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExecutionWithOptions(request, runtime);
  }

  async updateOpsItemWithOptions(tmpReq: UpdateOpsItemRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOpsItemResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateOpsItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedupString)) {
      query["DedupString"] = request.dedupString;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.opsItemId)) {
      query["OpsItemId"] = request.opsItemId;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!Util.isUnset(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!Util.isUnset(request.solutions)) {
      query["Solutions"] = request.solutions;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOpsItemResponse>(await this.callApi(params, req, runtime), new UpdateOpsItemResponse({}));
  }

  async updateOpsItem(request: UpdateOpsItemRequest): Promise<UpdateOpsItemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOpsItemWithOptions(request, runtime);
  }

  async updateParameterWithOptions(request: UpdateParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateParameterResponse>(await this.callApi(params, req, runtime), new UpdateParameterResponse({}));
  }

  async updateParameter(request: UpdateParameterRequest): Promise<UpdateParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateParameterWithOptions(request, runtime);
  }

  async updatePatchBaselineWithOptions(tmpReq: UpdatePatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePatchBaselineResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdatePatchBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.rejectedPatches)) {
      request.rejectedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rejectedPatches, "RejectedPatches", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!Util.isUnset(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!Util.isUnset(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rejectedPatchesShrink)) {
      query["RejectedPatches"] = request.rejectedPatchesShrink;
    }

    if (!Util.isUnset(request.rejectedPatchesAction)) {
      query["RejectedPatchesAction"] = request.rejectedPatchesAction;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePatchBaselineResponse>(await this.callApi(params, req, runtime), new UpdatePatchBaselineResponse({}));
  }

  async updatePatchBaseline(request: UpdatePatchBaselineRequest): Promise<UpdatePatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePatchBaselineWithOptions(request, runtime);
  }

  async updateSecretParameterWithOptions(tmpReq: UpdateSecretParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretParameterResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateSecretParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSecretParameterResponse>(await this.callApi(params, req, runtime), new UpdateSecretParameterResponse({}));
  }

  async updateSecretParameter(request: UpdateSecretParameterRequest): Promise<UpdateSecretParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretParameterWithOptions(request, runtime);
  }

  async updateStateConfigurationWithOptions(tmpReq: UpdateStateConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStateConfigurationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStateConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configureMode)) {
      query["ConfigureMode"] = request.configureMode;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduleExpression)) {
      query["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!Util.isUnset(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!Util.isUnset(request.stateConfigurationId)) {
      query["StateConfigurationId"] = request.stateConfigurationId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStateConfiguration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStateConfigurationResponse>(await this.callApi(params, req, runtime), new UpdateStateConfigurationResponse({}));
  }

  async updateStateConfiguration(request: UpdateStateConfigurationRequest): Promise<UpdateStateConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStateConfigurationWithOptions(request, runtime);
  }

  async updateTemplateWithOptions(tmpReq: UpdateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTemplate",
      version: "2019-06-01",
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

  async validateTemplateContentWithOptions(request: ValidateTemplateContentRequest, runtime: $Util.RuntimeOptions): Promise<ValidateTemplateContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidateTemplateContent",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidateTemplateContentResponse>(await this.callApi(params, req, runtime), new ValidateTemplateContentResponse({}));
  }

  async validateTemplateContent(request: ValidateTemplateContentRequest): Promise<ValidateTemplateContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateTemplateContentWithOptions(request, runtime);
  }

}
