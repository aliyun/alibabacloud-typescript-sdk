// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ResourceDirectoryFolderNode extends $tea.Model {
  accountId?: string;
  children?: ResourceDirectoryFolderNode[];
  displayName?: string;
  folderId?: string;
  folderName?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      children: 'Children',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      children: { 'type': 'array', 'itemType': ResourceDirectoryFolderNode },
      displayName: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesResponseBody extends $tea.Model {
  operateRuleResult?: ActiveAggregateConfigRulesResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: ActiveAggregateConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActiveAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActiveAggregateConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackResponseBody extends $tea.Model {
  operateRuleResult?: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachAggregateConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachAggregateConfigRuleToCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachConfigRuleToCompliancePackRequest extends $tea.Model {
  compliancePackId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachConfigRuleToCompliancePackResponseBody extends $tea.Model {
  operateRuleResult?: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachConfigRuleToCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachConfigRuleToCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  configRules?: CreateAggregateCompliancePackRequestConfigRules[];
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestConfigRules },
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  configRulesShrink?: string;
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackResponseBody extends $tea.Model {
  compliancePackId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAggregateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAggregateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleResponseBody extends $tea.Model {
  configRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAggregateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAggregateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateRemediationRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configRuleId?: string;
  invokeType?: string;
  params?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      params: 'Params',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleId: 'string',
      invokeType: 'string',
      params: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateRemediationResponseBody extends $tea.Model {
  remediationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateRemediationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAggregateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAggregateRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorRequest extends $tea.Model {
  aggregatorAccounts?: CreateAggregatorRequestAggregatorAccounts[];
  aggregatorName?: string;
  aggregatorType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorName: 'AggregatorName',
      aggregatorType: 'AggregatorType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccounts: { 'type': 'array', 'itemType': CreateAggregatorRequestAggregatorAccounts },
      aggregatorName: 'string',
      aggregatorType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorShrinkRequest extends $tea.Model {
  aggregatorAccountsShrink?: string;
  aggregatorName?: string;
  aggregatorType?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccountsShrink: 'AggregatorAccounts',
      aggregatorName: 'AggregatorName',
      aggregatorType: 'AggregatorType',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccountsShrink: 'string',
      aggregatorName: 'string',
      aggregatorType: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorResponseBody extends $tea.Model {
  aggregatorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAggregatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackRequest extends $tea.Model {
  clientToken?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  configRules?: CreateCompliancePackRequestConfigRules[];
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': CreateCompliancePackRequestConfigRules },
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackShrinkRequest extends $tea.Model {
  clientToken?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  configRulesShrink?: string;
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackResponseBody extends $tea.Model {
  compliancePackId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigRuleRequest extends $tea.Model {
  clientToken?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigRuleShrinkRequest extends $tea.Model {
  clientToken?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigRuleResponseBody extends $tea.Model {
  configRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemediationRequest extends $tea.Model {
  clientToken?: string;
  configRuleId?: string;
  invokeType?: string;
  params?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      params: 'Params',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleId: 'string',
      invokeType: 'string',
      params: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemediationResponseBody extends $tea.Model {
  remediationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemediationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveAggregateConfigRulesRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveAggregateConfigRulesResponseBody extends $tea.Model {
  operateRuleResult?: DeactiveAggregateConfigRulesResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DeactiveAggregateConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveAggregateConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeactiveAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactiveAggregateConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesRequest extends $tea.Model {
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponseBody extends $tea.Model {
  operateRuleResult?: DeactiveConfigRulesResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DeactiveConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeactiveConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactiveConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBody extends $tea.Model {
  operateCompliancePacksResult?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacksResult: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAggregateCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAggregateCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigRulesRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigRulesResponseBody extends $tea.Model {
  operateRuleResult?: DeleteAggregateConfigRulesResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DeleteAggregateConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAggregateConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateRemediationsRequest extends $tea.Model {
  aggregatorId?: string;
  remediationIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      remediationIds: 'RemediationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      remediationIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateRemediationsResponseBody extends $tea.Model {
  remediationDeleteResults?: DeleteAggregateRemediationsResponseBodyRemediationDeleteResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationDeleteResults: 'RemediationDeleteResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationDeleteResults: { 'type': 'array', 'itemType': DeleteAggregateRemediationsResponseBodyRemediationDeleteResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateRemediationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAggregateRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAggregateRemediationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsRequest extends $tea.Model {
  aggregatorIds?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorIds: 'AggregatorIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorIds: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponseBody extends $tea.Model {
  operateAggregatorsResult?: DeleteAggregatorsResponseBodyOperateAggregatorsResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateAggregatorsResult: 'OperateAggregatorsResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateAggregatorsResult: DeleteAggregatorsResponseBodyOperateAggregatorsResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAggregatorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAggregatorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompliancePacksRequest extends $tea.Model {
  clientToken?: string;
  compliancePackIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompliancePacksResponseBody extends $tea.Model {
  operateCompliancePacksResult?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacksResult: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompliancePacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemediationsRequest extends $tea.Model {
  remediationIds?: string;
  static names(): { [key: string]: string } {
    return {
      remediationIds: 'RemediationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemediationsResponseBody extends $tea.Model {
  remediationDeleteResults?: DeleteRemediationsResponseBodyRemediationDeleteResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationDeleteResults: 'RemediationDeleteResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationDeleteResults: { 'type': 'array', 'itemType': DeleteRemediationsResponseBodyRemediationDeleteResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemediationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRemediationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAggregateConfigRuleToCompliancePackRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAggregateConfigRuleToCompliancePackResponseBody extends $tea.Model {
  operateRuleResult?: DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAggregateConfigRuleToCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachAggregateConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachAggregateConfigRuleToCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachConfigRuleToCompliancePackRequest extends $tea.Model {
  compliancePackId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachConfigRuleToCompliancePackResponseBody extends $tea.Model {
  operateRuleResult?: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachConfigRuleToCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachConfigRuleToCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateCompliancePackReportRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateCompliancePackReportResponseBody extends $tea.Model {
  compliancePackId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateCompliancePackReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAggregateCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAggregateCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateConfigRulesReportRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateConfigRulesReportResponseBody extends $tea.Model {
  aggregatorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateConfigRulesReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAggregateConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAggregateConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateResourceInventoryRequest extends $tea.Model {
  accountIds?: string;
  aggregatorId?: string;
  regions?: string;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      aggregatorId: 'AggregatorId',
      regions: 'Regions',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
      aggregatorId: 'string',
      regions: 'string',
      resourceTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateResourceInventoryResponseBody extends $tea.Model {
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

export class GenerateAggregateResourceInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAggregateResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAggregateResourceInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCompliancePackReportRequest extends $tea.Model {
  clientToken?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCompliancePackReportResponseBody extends $tea.Model {
  compliancePackId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCompliancePackReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRulesReportRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRulesReportResponseBody extends $tea.Model {
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

export class GenerateConfigRulesReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourceInventoryRequest extends $tea.Model {
  regions?: string;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: 'string',
      resourceTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourceInventoryResponseBody extends $tea.Model {
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

export class GenerateResourceInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateResourceInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBody extends $tea.Model {
  accountComplianceResult?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountComplianceResult: 'AccountComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountComplianceResult: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateAccountComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateAccountComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBody extends $tea.Model {
  compliancePack?: GetAggregateCompliancePackResponseBodyCompliancePack;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePack: 'CompliancePack',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePack: GetAggregateCompliancePackResponseBodyCompliancePack,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportResponseBody extends $tea.Model {
  compliancePackReport?: GetAggregateCompliancePackReportResponseBodyCompliancePackReport;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackReport: 'CompliancePackReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackReport: GetAggregateCompliancePackReportResponseBodyCompliancePackReport,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBody extends $tea.Model {
  configRule?: GetAggregateConfigRuleResponseBodyConfigRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRule: 'ConfigRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRule: GetAggregateConfigRuleResponseBodyConfigRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBody extends $tea.Model {
  configRuleComplianceResult?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleComplianceResult: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateConfigRuleComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateConfigRuleComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleSummaryByRiskLevelRequest extends $tea.Model {
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleSummaryByRiskLevelResponseBody extends $tea.Model {
  configRuleSummaries?: GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleSummaries: 'ConfigRuleSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleSummaries: { 'type': 'array', 'itemType': GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleSummaryByRiskLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateConfigRuleSummaryByRiskLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateConfigRuleSummaryByRiskLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRulesReportRequest extends $tea.Model {
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRulesReportResponseBody extends $tea.Model {
  configRulesReport?: GetAggregateConfigRulesReportResponseBodyConfigRulesReport;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRulesReport: 'ConfigRulesReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRulesReport: GetAggregateConfigRulesReportResponseBodyConfigRulesReport,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRulesReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByConfigRuleRequest extends $tea.Model {
  aggregatorId?: string;
  complianceType?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByConfigRuleResponseBody extends $tea.Model {
  complianceResult?: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceComplianceByConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceComplianceByConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByPackRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByPackResponseBody extends $tea.Model {
  requestId?: string;
  resourceComplianceResult?: GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceResult: 'ResourceComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceResult: GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByPackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineRequest extends $tea.Model {
  aggregatorId?: string;
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  resourceId?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponseBody extends $tea.Model {
  requestId?: string;
  resourceComplianceTimeline?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceTimeline: 'ResourceComplianceTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceTimeline: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceComplianceTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceComplianceTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceConfigurationTimelineRequest extends $tea.Model {
  aggregatorId?: string;
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  resourceId?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceConfigurationTimelineResponseBody extends $tea.Model {
  requestId?: string;
  resourceConfigurationTimeline?: GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceConfigurationTimeline: 'ResourceConfigurationTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceConfigurationTimeline: GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceConfigurationTimelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceConfigurationTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceConfigurationTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByRegionRequest extends $tea.Model {
  aggregatorId?: string;
  folderId?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      folderId: 'FolderId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      folderId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByRegionResponseBody extends $tea.Model {
  discoveredResourceCountsSummary?: GetAggregateResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetAggregateResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceCountsGroupByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceCountsGroupByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByResourceTypeRequest extends $tea.Model {
  aggregatorId?: string;
  folderId?: string;
  region?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      folderId: 'FolderId',
      region: 'Region',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      folderId: 'string',
      region: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByResourceTypeResponseBody extends $tea.Model {
  discoveredResourceCountsSummary?: GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByResourceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceCountsGroupByResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceCountsGroupByResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceInventoryRequest extends $tea.Model {
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceInventoryResponseBody extends $tea.Model {
  requestId?: string;
  resourceInventory?: GetAggregateResourceInventoryResponseBodyResourceInventory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceInventory: 'ResourceInventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInventory: GetAggregateResourceInventoryResponseBodyResourceInventory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateResourceInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorRequest extends $tea.Model {
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBody extends $tea.Model {
  aggregator?: GetAggregatorResponseBodyAggregator;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: GetAggregatorResponseBodyAggregator,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackRequest extends $tea.Model {
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBody extends $tea.Model {
  compliancePack?: GetCompliancePackResponseBodyCompliancePack;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePack: 'CompliancePack',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePack: GetCompliancePackResponseBodyCompliancePack,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackReportRequest extends $tea.Model {
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackReportResponseBody extends $tea.Model {
  compliancePackReport?: GetCompliancePackReportResponseBodyCompliancePackReport;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackReport: 'CompliancePackReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackReport: GetCompliancePackReportResponseBodyCompliancePackReport,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBody extends $tea.Model {
  configRule?: GetConfigRuleResponseBodyConfigRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRule: 'ConfigRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRule: GetConfigRuleResponseBodyConfigRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackRequest extends $tea.Model {
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackResponseBody extends $tea.Model {
  configRuleComplianceResult?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleComplianceResult: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigRuleComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigRuleComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleSummaryByRiskLevelResponseBody extends $tea.Model {
  configRuleSummaries?: GetConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleSummaries: 'ConfigRuleSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleSummaries: { 'type': 'array', 'itemType': GetConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleSummaryByRiskLevelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigRuleSummaryByRiskLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigRuleSummaryByRiskLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRulesReportResponseBody extends $tea.Model {
  configRulesReport?: GetConfigRulesReportResponseBodyConfigRulesReport;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRulesReport: 'ConfigRulesReport',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRulesReport: GetConfigRulesReportResponseBodyConfigRulesReport,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRulesReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByRegionRequest extends $tea.Model {
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

export class GetDiscoveredResourceCountsGroupByRegionResponseBody extends $tea.Model {
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDiscoveredResourceCountsGroupByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDiscoveredResourceCountsGroupByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByResourceTypeRequest extends $tea.Model {
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByResourceTypeResponseBody extends $tea.Model {
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByResourceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDiscoveredResourceCountsGroupByResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDiscoveredResourceCountsGroupByResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByConfigRuleRequest extends $tea.Model {
  complianceType?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByConfigRuleResponseBody extends $tea.Model {
  complianceResult?: GetResourceComplianceByConfigRuleResponseBodyComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetResourceComplianceByConfigRuleResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceComplianceByConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceComplianceByConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByPackRequest extends $tea.Model {
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByPackResponseBody extends $tea.Model {
  requestId?: string;
  resourceComplianceResult?: GetResourceComplianceByPackResponseBodyResourceComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceResult: 'ResourceComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceResult: GetResourceComplianceByPackResponseBodyResourceComplianceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByPackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineRequest extends $tea.Model {
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  resourceId?: string;
  resourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponseBody extends $tea.Model {
  requestId?: string;
  resourceComplianceTimeline?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceTimeline: 'ResourceComplianceTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceTimeline: GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceComplianceTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceComplianceTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineRequest extends $tea.Model {
  endTime?: number;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  resourceId?: string;
  resourceType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBody extends $tea.Model {
  requestId?: string;
  resourceConfigurationTimeline?: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceConfigurationTimeline: 'ResourceConfigurationTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceConfigurationTimeline: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceConfigurationTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceConfigurationTimelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceInventoryResponseBody extends $tea.Model {
  requestId?: string;
  resourceInventory?: GetResourceInventoryResponseBodyResourceInventory;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceInventory: 'ResourceInventory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceInventory: GetResourceInventoryResponseBodyResourceInventory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceInventoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksRequest extends $tea.Model {
  aggregatorId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBody extends $tea.Model {
  compliancePacksResult?: ListAggregateCompliancePacksResponseBodyCompliancePacksResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePacksResult: 'CompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacksResult: ListAggregateCompliancePacksResponseBodyCompliancePacksResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAggregateCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregateCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  complianceType?: string;
  configRuleId?: string;
  maxResults?: number;
  nextToken?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBody extends $tea.Model {
  evaluationResults?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAggregateConfigRuleEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregateConfigRuleEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesRequest extends $tea.Model {
  aggregatorId?: string;
  complianceType?: string;
  configRuleName?: string;
  configRuleState?: string;
  pageNumber?: number;
  pageSize?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBody extends $tea.Model {
  configRules?: ListAggregateConfigRulesResponseBodyConfigRules;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRules: 'ConfigRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRules: ListAggregateConfigRulesResponseBodyConfigRules,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregateConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationsRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationsResponseBody extends $tea.Model {
  remediations?: ListAggregateRemediationsResponseBodyRemediations[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediations: 'Remediations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediations: { 'type': 'array', 'itemType': ListAggregateRemediationsResponseBodyRemediations },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAggregateRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregateRemediationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsRequest extends $tea.Model {
  aggregatorId?: string;
  complianceType?: string;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBody extends $tea.Model {
  evaluationResults?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAggregateResourceEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregateResourceEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponseBody extends $tea.Model {
  aggregatorsResult?: ListAggregatorsResponseBodyAggregatorsResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorsResult: 'AggregatorsResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorsResult: ListAggregatorsResponseBodyAggregatorsResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAggregatorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregatorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesRequest extends $tea.Model {
  compliancePackTemplateId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBody extends $tea.Model {
  compliancePackTemplatesResult?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplatesResult: 'CompliancePackTemplatesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplatesResult: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCompliancePackTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCompliancePackTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponseBody extends $tea.Model {
  compliancePacksResult?: ListCompliancePacksResponseBodyCompliancePacksResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePacksResult: 'CompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacksResult: ListCompliancePacksResponseBodyCompliancePacksResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsRequest extends $tea.Model {
  compliancePackId?: string;
  complianceType?: string;
  configRuleId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBody extends $tea.Model {
  evaluationResults?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigRuleEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigRuleEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsRequest extends $tea.Model {
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponseBody extends $tea.Model {
  remediations?: ListRemediationsResponseBodyRemediations[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediations: 'Remediations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediations: { 'type': 'array', 'itemType': ListRemediationsResponseBodyRemediations },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRemediationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsRequest extends $tea.Model {
  complianceType?: string;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBody extends $tea.Model {
  evaluationResults?: ListResourceEvaluationResultsResponseBodyEvaluationResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: ListResourceEvaluationResultsResponseBodyEvaluationResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceOwnerInAllAggregatorResponseBody extends $tea.Model {
  accountInAggregator?: ListResourceOwnerInAllAggregatorResponseBodyAccountInAggregator[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInAggregator: 'AccountInAggregator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInAggregator: { 'type': 'array', 'itemType': ListResourceOwnerInAllAggregatorResponseBodyAccountInAggregator },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceOwnerInAllAggregatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListResourceOwnerInAllAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceOwnerInAllAggregatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAggregateConfigRuleEvaluationRequest extends $tea.Model {
  aggregatorId?: string;
  compliancePackId?: string;
  configRuleId?: string;
  revertEvaluation?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      configRuleId: 'ConfigRuleId',
      revertEvaluation: 'RevertEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      compliancePackId: 'string',
      configRuleId: 'string',
      revertEvaluation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAggregateConfigRuleEvaluationResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
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

export class StartAggregateConfigRuleEvaluationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartAggregateConfigRuleEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartAggregateConfigRuleEvaluationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAggregateRemediationRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAggregateRemediationResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAggregateRemediationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartAggregateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartAggregateRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRemediationRequest extends $tea.Model {
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRemediationResponseBody extends $tea.Model {
  data?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRemediationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  configRules?: UpdateAggregateCompliancePackRequestConfigRules[];
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRules: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRules: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestConfigRules },
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  configRulesShrink?: string;
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRulesShrink: 'string',
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackResponseBody extends $tea.Model {
  compliancePackId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAggregateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAggregateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleResponseBody extends $tea.Model {
  configRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAggregateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAggregateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateRemediationRequest extends $tea.Model {
  aggregatorId?: string;
  invokeType?: string;
  params?: string;
  remediationId?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      invokeType: 'InvokeType',
      params: 'Params',
      remediationId: 'RemediationId',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      invokeType: 'string',
      params: 'string',
      remediationId: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateRemediationResponseBody extends $tea.Model {
  remediationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateRemediationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAggregateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAggregateRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorRequest extends $tea.Model {
  aggregatorAccounts?: UpdateAggregatorRequestAggregatorAccounts[];
  aggregatorId?: string;
  aggregatorName?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccounts: { 'type': 'array', 'itemType': UpdateAggregatorRequestAggregatorAccounts },
      aggregatorId: 'string',
      aggregatorName: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorShrinkRequest extends $tea.Model {
  aggregatorAccountsShrink?: string;
  aggregatorId?: string;
  aggregatorName?: string;
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccountsShrink: 'AggregatorAccounts',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      clientToken: 'ClientToken',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccountsShrink: 'string',
      aggregatorId: 'string',
      aggregatorName: 'string',
      clientToken: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorResponseBody extends $tea.Model {
  aggregatorId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAggregatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackRequest extends $tea.Model {
  clientToken?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  configRules?: UpdateCompliancePackRequestConfigRules[];
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRules: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRules: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRules },
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackShrinkRequest extends $tea.Model {
  clientToken?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  configRulesShrink?: string;
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRulesShrink: 'string',
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackResponseBody extends $tea.Model {
  compliancePackId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRuleRequest extends $tea.Model {
  clientToken?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRuleShrinkRequest extends $tea.Model {
  clientToken?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRuleResponseBody extends $tea.Model {
  configRuleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemediationRequest extends $tea.Model {
  invokeType?: string;
  params?: string;
  remediationId?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      invokeType: 'InvokeType',
      params: 'Params',
      remediationId: 'RemediationId',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeType: 'string',
      params: 'string',
      remediationId: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemediationResponseBody extends $tea.Model {
  remediationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemediationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': AttachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackRequestConfigRules extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  configRuleParameters?: CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorRequestAggregatorAccounts extends $tea.Model {
  accountId?: number;
  accountName?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackRequestConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackRequestConfigRules extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  configRuleParameters?: CreateCompliancePackRequestConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': CreateCompliancePackRequestConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveAggregateConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: DeactiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeactiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks extends $tea.Model {
  compliancePackId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult extends $tea.Model {
  operateCompliancePacks?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateRemediationsResponseBodyRemediationDeleteResults extends $tea.Model {
  errorMessage?: string;
  remediationId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      remediationId: 'RemediationId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      remediationId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators extends $tea.Model {
  aggregatorId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponseBodyOperateAggregatorsResult extends $tea.Model {
  operateAggregators?: DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators[];
  static names(): { [key: string]: string } {
    return {
      operateAggregators: 'OperateAggregators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateAggregators: { 'type': 'array', 'itemType': DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks extends $tea.Model {
  compliancePackId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompliancePacksResponseBodyOperateCompliancePacksResult extends $tea.Model {
  operateCompliancePacks?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks[];
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacks: 'OperateCompliancePacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacks: { 'type': 'array', 'itemType': DeleteCompliancePacksResponseBodyOperateCompliancePacksResultOperateCompliancePacks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRemediationsResponseBodyRemediationDeleteResults extends $tea.Model {
  errorMessage?: string;
  remediationId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      remediationId: 'RemediationId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      remediationId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DetachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DetachConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances extends $tea.Model {
  accountId?: number;
  accountName?: string;
  complianceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      complianceType: 'ComplianceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      complianceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult extends $tea.Model {
  accountCompliances?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances[];
  compliancePackId?: string;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountCompliances: 'AccountCompliances',
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCompliances: { 'type': 'array', 'itemType': GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances },
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePackConfigRules extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  configRuleParameters?: GetAggregateCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePack extends $tea.Model {
  accountId?: number;
  aggregatorId?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  configRules?: GetAggregateCompliancePackResponseBodyCompliancePackConfigRules[];
  createTimestamp?: number;
  description?: string;
  riskLevel?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackConfigRules },
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportResponseBodyCompliancePackReport extends $tea.Model {
  accountId?: number;
  compliancePackId?: string;
  reportCreateTimestamp?: number;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      reportCreateTimestamp: 'number',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $tea.Model {
  firstActivatedTimestamp?: number;
  firstEvaluationStarted?: boolean;
  lastErrorCode?: string;
  lastErrorMessage?: string;
  lastFailedEvaluationTimestamp?: number;
  lastFailedInvocationTimestamp?: number;
  lastSuccessfulEvaluationTimestamp?: number;
  lastSuccessfulInvocationTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      firstActivatedTimestamp: 'FirstActivatedTimestamp',
      firstEvaluationStarted: 'FirstEvaluationStarted',
      lastErrorCode: 'LastErrorCode',
      lastErrorMessage: 'LastErrorMessage',
      lastFailedEvaluationTimestamp: 'LastFailedEvaluationTimestamp',
      lastFailedInvocationTimestamp: 'LastFailedInvocationTimestamp',
      lastSuccessfulEvaluationTimestamp: 'LastSuccessfulEvaluationTimestamp',
      lastSuccessfulInvocationTimestamp: 'LastSuccessfulInvocationTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstActivatedTimestamp: 'number',
      firstEvaluationStarted: 'boolean',
      lastErrorCode: 'string',
      lastErrorMessage: 'string',
      lastFailedEvaluationTimestamp: 'number',
      lastFailedInvocationTimestamp: 'number',
      lastSuccessfulEvaluationTimestamp: 'number',
      lastSuccessfulInvocationTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleCreateBy extends $tea.Model {
  aggregatorId?: string;
  aggregatorName?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  creatorId?: string;
  creatorName?: string;
  creatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $tea.Model {
  eventSource?: string;
  maximumExecutionFrequency?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRule extends $tea.Model {
  compulsoryInputParameterDetails?: { [key: string]: any };
  description?: string;
  identifier?: string;
  labels?: string[];
  managedRuleName?: string;
  optionalInputParameterDetails?: { [key: string]: any };
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      description: 'Description',
      identifier: 'Identifier',
      labels: 'Labels',
      managedRuleName: 'ManagedRuleName',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      managedRuleName: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $tea.Model {
  eventSource?: string;
  maximumExecutionFrequency?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleSource extends $tea.Model {
  identifier?: string;
  owner?: string;
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      owner: 'Owner',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      owner: 'string',
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRule extends $tea.Model {
  configRuleArn?: string;
  configRuleEvaluationStatus?: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  configRuleName?: string;
  configRuleState?: string;
  configRuleTriggerTypes?: string;
  createBy?: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy;
  createTimestamp?: number;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParameters?: { [key: string]: any };
  managedRule?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule;
  maximumExecutionFrequency?: string;
  modifiedTimestamp?: number;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScope?: string;
  riskLevel?: number;
  source?: GetAggregateConfigRuleResponseBodyConfigRuleSource;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      createBy: 'CreateBy',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParameters: 'InputParameters',
      managedRule: 'ManagedRule',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      modifiedTimestamp: 'ModifiedTimestamp',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      source: 'Source',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleEvaluationStatus: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      configRuleTriggerTypes: 'string',
      createBy: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy,
      createTimestamp: 'number',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRule: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule,
      maximumExecutionFrequency: 'string',
      modifiedTimestamp: 'number',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      source: GetAggregateConfigRuleResponseBodyConfigRuleSource,
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $tea.Model {
  complianceType?: string;
  configRuleId?: string;
  configRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $tea.Model {
  compliancePackId?: string;
  configRuleCompliances?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleCompliances: 'ConfigRuleCompliances',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleCompliances: { 'type': 'array', 'itemType': GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries extends $tea.Model {
  compliantCount?: number;
  nonCompliantCount?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliantCount: 'number',
      nonCompliantCount: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRulesReportResponseBodyConfigRulesReport extends $tea.Model {
  accountId?: number;
  aggregatorId?: string;
  reportCreateTimestamp?: number;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      reportCreateTimestamp: 'number',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances extends $tea.Model {
  complianceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult extends $tea.Model {
  compliances?: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult extends $tea.Model {
  compliancePackId?: string;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $tea.Model {
  accountId?: string;
  availabilityZone?: string;
  captureTime?: number;
  configuration?: string;
  configurationDiff?: string;
  region?: string;
  resourceCreateTime?: number;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      captureTime: 'CaptureTime',
      configuration: 'Configuration',
      configurationDiff: 'ConfigurationDiff',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      availabilityZone: 'string',
      captureTime: 'number',
      configuration: 'string',
      configurationDiff: 'string',
      region: 'string',
      resourceCreateTime: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $tea.Model {
  complianceList?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      complianceList: 'ComplianceList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList extends $tea.Model {
  accountId?: number;
  availabilityZone?: string;
  captureTime?: string;
  configurationDiff?: string;
  region?: string;
  resourceCreateTime?: string;
  resourceEventType?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceEventType: 'ResourceEventType',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      captureTime: 'string',
      configurationDiff: 'string',
      region: 'string',
      resourceCreateTime: 'string',
      resourceEventType: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $tea.Model {
  configurationList?: GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configurationList: 'ConfigurationList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationList: { 'type': 'array', 'itemType': GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  region?: string;
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceInventoryResponseBodyResourceInventory extends $tea.Model {
  accountId?: number;
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBodyAggregatorAggregatorAccounts extends $tea.Model {
  accountId?: number;
  accountName?: string;
  accountType?: string;
  recorderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
      recorderStatus: 'RecorderStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
      recorderStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBodyAggregator extends $tea.Model {
  accountId?: number;
  aggregatorAccountCount?: number;
  aggregatorAccounts?: GetAggregatorResponseBodyAggregatorAggregatorAccounts[];
  aggregatorCreateTimestamp?: string;
  aggregatorId?: string;
  aggregatorName?: string;
  aggregatorStatus?: number;
  aggregatorType?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorAccountCount: 'AggregatorAccountCount',
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorCreateTimestamp: 'AggregatorCreateTimestamp',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      aggregatorStatus: 'AggregatorStatus',
      aggregatorType: 'AggregatorType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorAccountCount: 'number',
      aggregatorAccounts: { 'type': 'array', 'itemType': GetAggregatorResponseBodyAggregatorAggregatorAccounts },
      aggregatorCreateTimestamp: 'string',
      aggregatorId: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePackConfigRules extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  configRuleParameters?: GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePack extends $tea.Model {
  accountId?: number;
  compliancePackId?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  configRules?: GetCompliancePackResponseBodyCompliancePackConfigRules[];
  createTimestamp?: number;
  description?: string;
  riskLevel?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRules },
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackReportResponseBodyCompliancePackReport extends $tea.Model {
  accountId?: number;
  compliancePackId?: string;
  reportCreateTimestamp?: number;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      reportCreateTimestamp: 'number',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $tea.Model {
  firstActivatedTimestamp?: number;
  firstEvaluationStarted?: boolean;
  lastErrorCode?: string;
  lastErrorMessage?: string;
  lastFailedEvaluationTimestamp?: number;
  lastFailedInvocationTimestamp?: number;
  lastSuccessfulEvaluationTimestamp?: number;
  lastSuccessfulInvocationTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      firstActivatedTimestamp: 'FirstActivatedTimestamp',
      firstEvaluationStarted: 'FirstEvaluationStarted',
      lastErrorCode: 'LastErrorCode',
      lastErrorMessage: 'LastErrorMessage',
      lastFailedEvaluationTimestamp: 'LastFailedEvaluationTimestamp',
      lastFailedInvocationTimestamp: 'LastFailedInvocationTimestamp',
      lastSuccessfulEvaluationTimestamp: 'LastSuccessfulEvaluationTimestamp',
      lastSuccessfulInvocationTimestamp: 'LastSuccessfulInvocationTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstActivatedTimestamp: 'number',
      firstEvaluationStarted: 'boolean',
      lastErrorCode: 'string',
      lastErrorMessage: 'string',
      lastFailedEvaluationTimestamp: 'number',
      lastFailedInvocationTimestamp: 'number',
      lastSuccessfulEvaluationTimestamp: 'number',
      lastSuccessfulInvocationTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleCreateBy extends $tea.Model {
  compliancePackId?: string;
  compliancePackName?: string;
  creatorId?: string;
  creatorName?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $tea.Model {
  eventSource?: string;
  maximumExecutionFrequency?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleManagedRule extends $tea.Model {
  compulsoryInputParameterDetails?: { [key: string]: any };
  description?: string;
  identifier?: string;
  labels?: string[];
  managedRuleName?: string;
  optionalInputParameterDetails?: { [key: string]: any };
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      description: 'Description',
      identifier: 'Identifier',
      labels: 'Labels',
      managedRuleName: 'ManagedRuleName',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      managedRuleName: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $tea.Model {
  eventSource?: string;
  maximumExecutionFrequency?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleSource extends $tea.Model {
  identifier?: string;
  owner?: string;
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      owner: 'Owner',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      owner: 'string',
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleSourceSourceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRule extends $tea.Model {
  configRuleArn?: string;
  configRuleEvaluationStatus?: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  configRuleName?: string;
  configRuleState?: string;
  configRuleTriggerTypes?: string;
  createBy?: GetConfigRuleResponseBodyConfigRuleCreateBy;
  createTimestamp?: number;
  description?: string;
  excludeResourceIdsScope?: string;
  inputParameters?: { [key: string]: any };
  managedRule?: GetConfigRuleResponseBodyConfigRuleManagedRule;
  maximumExecutionFrequency?: string;
  modifiedTimestamp?: number;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceTypesScope?: string;
  riskLevel?: number;
  source?: GetConfigRuleResponseBodyConfigRuleSource;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      createBy: 'CreateBy',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      inputParameters: 'InputParameters',
      managedRule: 'ManagedRule',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      modifiedTimestamp: 'ModifiedTimestamp',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      source: 'Source',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleEvaluationStatus: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      configRuleTriggerTypes: 'string',
      createBy: GetConfigRuleResponseBodyConfigRuleCreateBy,
      createTimestamp: 'number',
      description: 'string',
      excludeResourceIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRule: GetConfigRuleResponseBodyConfigRuleManagedRule,
      maximumExecutionFrequency: 'string',
      modifiedTimestamp: 'number',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      source: GetConfigRuleResponseBodyConfigRuleSource,
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $tea.Model {
  complianceType?: string;
  configRuleId?: string;
  configRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $tea.Model {
  compliancePackId?: string;
  configRuleCompliances?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleCompliances: 'ConfigRuleCompliances',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleCompliances: { 'type': 'array', 'itemType': GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries extends $tea.Model {
  compliantCount?: number;
  nonCompliantCount?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliantCount: 'number',
      nonCompliantCount: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRulesReportResponseBodyConfigRulesReport extends $tea.Model {
  accountId?: number;
  reportCreateTimestamp?: number;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      reportCreateTimestamp: 'number',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  region?: string;
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances extends $tea.Model {
  complianceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByConfigRuleResponseBodyComplianceResult extends $tea.Model {
  compliances?: GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceByPackResponseBodyResourceComplianceResult extends $tea.Model {
  compliancePackId?: string;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $tea.Model {
  accountId?: string;
  availabilityZone?: string;
  captureTime?: number;
  configuration?: string;
  configurationDiff?: string;
  region?: string;
  resourceCreateTime?: number;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      captureTime: 'CaptureTime',
      configuration: 'Configuration',
      configurationDiff: 'ConfigurationDiff',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      availabilityZone: 'string',
      captureTime: 'number',
      configuration: 'string',
      configurationDiff: 'string',
      region: 'string',
      resourceCreateTime: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $tea.Model {
  complianceList?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      complianceList: 'ComplianceList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceList: { 'type': 'array', 'itemType': GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList extends $tea.Model {
  accountId?: number;
  availabilityZone?: string;
  captureTime?: string;
  configurationDiff?: string;
  region?: string;
  relationship?: string;
  relationshipDiff?: string;
  resourceCreateTime?: string;
  resourceEventType?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      region: 'Region',
      relationship: 'Relationship',
      relationshipDiff: 'RelationshipDiff',
      resourceCreateTime: 'ResourceCreateTime',
      resourceEventType: 'ResourceEventType',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      captureTime: 'string',
      configurationDiff: 'string',
      region: 'string',
      relationship: 'string',
      relationshipDiff: 'string',
      resourceCreateTime: 'string',
      resourceEventType: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $tea.Model {
  configurationList?: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configurationList: 'ConfigurationList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationList: { 'type': 'array', 'itemType': GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceInventoryResponseBodyResourceInventory extends $tea.Model {
  accountId?: number;
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $tea.Model {
  accountId?: number;
  aggregatorId?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  createTimestamp?: number;
  description?: string;
  riskLevel?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBodyCompliancePacksResult extends $tea.Model {
  compliancePacks?: ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  compliancePackId?: string;
  configRuleArn?: string;
  configRuleId?: string;
  configRuleName?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  evaluationResultQualifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  orderingTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationResultQualifier: 'EvaluationResultQualifier',
      orderingTimestamp: 'OrderingTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultQualifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
      orderingTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  annotation?: string;
  complianceType?: string;
  configRuleInvokedTimestamp?: number;
  evaluationResultIdentifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  invokingEventMessageType?: string;
  remediationEnabled?: boolean;
  resultRecordedTimestamp?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      invokingEventMessageType: 'InvokingEventMessageType',
      remediationEnabled: 'RemediationEnabled',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      configRuleInvokedTimestamp: 'number',
      evaluationResultIdentifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      invokingEventMessageType: 'string',
      remediationEnabled: 'boolean',
      resultRecordedTimestamp: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  evaluationResultList?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResultList: 'EvaluationResultList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance extends $tea.Model {
  complianceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy extends $tea.Model {
  aggregatorId?: string;
  aggregatorName?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  creatorId?: string;
  creatorName?: string;
  creatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList extends $tea.Model {
  accountId?: number;
  automationType?: string;
  compliance?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance;
  configRuleArn?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleState?: string;
  createBy?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
  description?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      automationType: 'AutomationType',
      compliance: 'Compliance',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      createBy: 'CreateBy',
      description: 'Description',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      automationType: 'string',
      compliance: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance,
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      createBy: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy,
      description: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRules extends $tea.Model {
  configRuleList?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleList: 'ConfigRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleList: { 'type': 'array', 'itemType': ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationsResponseBodyRemediations extends $tea.Model {
  accountId?: number;
  aggregatorId?: string;
  configRuleId?: string;
  invokeType?: string;
  lastSuccessfulInvocationId?: string;
  lastSuccessfulInvocationTime?: number;
  lastSuccessfulInvocationType?: string;
  remediationDynamicParams?: string;
  remediationId?: string;
  remediationSourceType?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediationDynamicParams: 'RemediationDynamicParams',
      remediationId: 'RemediationId',
      remediationSourceType: 'RemediationSourceType',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      configRuleId: 'string',
      invokeType: 'string',
      lastSuccessfulInvocationId: 'string',
      lastSuccessfulInvocationTime: 'number',
      lastSuccessfulInvocationType: 'string',
      remediationDynamicParams: 'string',
      remediationId: 'string',
      remediationSourceType: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  configRuleArn?: string;
  configRuleId?: string;
  configRuleName?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  evaluationResultQualifier?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  orderingTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationResultQualifier: 'EvaluationResultQualifier',
      orderingTimestamp: 'OrderingTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultQualifier: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
      orderingTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  annotation?: string;
  complianceType?: string;
  configRuleInvokedTimestamp?: number;
  evaluationResultIdentifier?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  invokingEventMessageType?: string;
  remediationEnabled?: boolean;
  resultRecordedTimestamp?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      invokingEventMessageType: 'InvokingEventMessageType',
      remediationEnabled: 'RemediationEnabled',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      configRuleInvokedTimestamp: 'number',
      evaluationResultIdentifier: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      invokingEventMessageType: 'string',
      remediationEnabled: 'boolean',
      resultRecordedTimestamp: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  evaluationResultList?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResultList: 'EvaluationResultList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponseBodyAggregatorsResultAggregators extends $tea.Model {
  accountId?: number;
  aggregatorAccountCount?: number;
  aggregatorCreateTimestamp?: number;
  aggregatorId?: string;
  aggregatorName?: string;
  aggregatorStatus?: number;
  aggregatorType?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorAccountCount: 'AggregatorAccountCount',
      aggregatorCreateTimestamp: 'AggregatorCreateTimestamp',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      aggregatorStatus: 'AggregatorStatus',
      aggregatorType: 'AggregatorType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorAccountCount: 'number',
      aggregatorCreateTimestamp: 'number',
      aggregatorId: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponseBodyAggregatorsResult extends $tea.Model {
  aggregators?: ListAggregatorsResponseBodyAggregatorsResultAggregators[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregators: 'Aggregators',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': ListAggregatorsResponseBodyAggregatorsResultAggregators },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
      required: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules extends $tea.Model {
  configRuleParameters?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  managedRuleName?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      managedRuleName: 'ManagedRuleName',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleParameters: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      managedRuleName: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates extends $tea.Model {
  compliancePackTemplateId?: string;
  compliancePackTemplateName?: string;
  configRules?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules[];
  description?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackTemplateName: 'CompliancePackTemplateName',
      configRules: 'ConfigRules',
      description: 'Description',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackTemplateName: 'string',
      configRules: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules },
      description: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult extends $tea.Model {
  compliancePackTemplates?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplates: 'CompliancePackTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplates: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $tea.Model {
  accountId?: number;
  compliancePackId?: string;
  compliancePackName?: string;
  compliancePackTemplateId?: string;
  createTimestamp?: number;
  description?: string;
  riskLevel?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      riskLevel: 'RiskLevel',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliancePackId: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
      description: 'string',
      riskLevel: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponseBodyCompliancePacksResult extends $tea.Model {
  compliancePacks?: ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  compliancePackId?: string;
  configRuleArn?: string;
  configRuleId?: string;
  configRuleName?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  evaluationResultQualifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  orderingTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationResultQualifier: 'EvaluationResultQualifier',
      orderingTimestamp: 'OrderingTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultQualifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
      orderingTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  annotation?: string;
  complianceType?: string;
  configRuleInvokedTimestamp?: number;
  evaluationResultIdentifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  invokingEventMessageType?: string;
  remediationEnabled?: boolean;
  resultRecordedTimestamp?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      invokingEventMessageType: 'InvokingEventMessageType',
      remediationEnabled: 'RemediationEnabled',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      configRuleInvokedTimestamp: 'number',
      evaluationResultIdentifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      invokingEventMessageType: 'string',
      remediationEnabled: 'boolean',
      resultRecordedTimestamp: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  evaluationResultList?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResultList: 'EvaluationResultList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultList: { 'type': 'array', 'itemType': ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponseBodyRemediations extends $tea.Model {
  accountId?: number;
  configRuleId?: string;
  invokeType?: string;
  lastSuccessfulInvocationId?: string;
  lastSuccessfulInvocationTime?: number;
  lastSuccessfulInvocationType?: string;
  remediationDynamicParams?: string;
  remediationId?: string;
  remediationSourceType?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configRuleId: 'ConfigRuleId',
      invokeType: 'InvokeType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediationDynamicParams: 'RemediationDynamicParams',
      remediationId: 'RemediationId',
      remediationSourceType: 'RemediationSourceType',
      remediationTemplateId: 'RemediationTemplateId',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configRuleId: 'string',
      invokeType: 'string',
      lastSuccessfulInvocationId: 'string',
      lastSuccessfulInvocationTime: 'number',
      lastSuccessfulInvocationType: 'string',
      remediationDynamicParams: 'string',
      remediationId: 'string',
      remediationSourceType: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  configRuleArn?: string;
  configRuleId?: string;
  configRuleName?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  evaluationResultQualifier?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  orderingTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationResultQualifier: 'EvaluationResultQualifier',
      orderingTimestamp: 'OrderingTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultQualifier: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
      orderingTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  annotation?: string;
  complianceType?: string;
  configRuleInvokedTimestamp?: number;
  evaluationResultIdentifier?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  invokingEventMessageType?: string;
  remediationEnabled?: boolean;
  resultRecordedTimestamp?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      invokingEventMessageType: 'InvokingEventMessageType',
      remediationEnabled: 'RemediationEnabled',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      configRuleInvokedTimestamp: 'number',
      evaluationResultIdentifier: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      invokingEventMessageType: 'string',
      remediationEnabled: 'boolean',
      resultRecordedTimestamp: 'number',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  evaluationResultList?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResultList: 'EvaluationResultList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResultList: { 'type': 'array', 'itemType': ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceOwnerInAllAggregatorResponseBodyAccountInAggregator extends $tea.Model {
  accountId?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackRequestConfigRules extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  configRuleParameters?: UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorRequestAggregatorAccounts extends $tea.Model {
  accountId?: number;
  accountName?: string;
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackRequestConfigRulesConfigRuleParameters extends $tea.Model {
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackRequestConfigRules extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  configRuleParameters?: UpdateCompliancePackRequestConfigRulesConfigRuleParameters[];
  description?: string;
  managedRuleIdentifier?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
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
    this._endpointMap = {
      'cn-shanghai': "config.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "config.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("config", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activeAggregateConfigRulesWithOptions(request: ActiveAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ActiveAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActiveAggregateConfigRulesResponse>(await this.doRPCRequest("ActiveAggregateConfigRules", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new ActiveAggregateConfigRulesResponse({}));
  }

  async activeAggregateConfigRules(request: ActiveAggregateConfigRulesRequest): Promise<ActiveAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeAggregateConfigRulesWithOptions(request, runtime);
  }

  async attachAggregateConfigRuleToCompliancePackWithOptions(request: AttachAggregateConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<AttachAggregateConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachAggregateConfigRuleToCompliancePackResponse>(await this.doRPCRequest("AttachAggregateConfigRuleToCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new AttachAggregateConfigRuleToCompliancePackResponse({}));
  }

  async attachAggregateConfigRuleToCompliancePack(request: AttachAggregateConfigRuleToCompliancePackRequest): Promise<AttachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  async attachConfigRuleToCompliancePackWithOptions(request: AttachConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<AttachConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachConfigRuleToCompliancePackResponse>(await this.doRPCRequest("AttachConfigRuleToCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new AttachConfigRuleToCompliancePackResponse({}));
  }

  async attachConfigRuleToCompliancePack(request: AttachConfigRuleToCompliancePackRequest): Promise<AttachConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  async createAggregateCompliancePackWithOptions(tmpReq: CreateAggregateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAggregateCompliancePackResponse>(await this.doRPCRequest("CreateAggregateCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAggregateCompliancePackResponse({}));
  }

  async createAggregateCompliancePack(request: CreateAggregateCompliancePackRequest): Promise<CreateAggregateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateCompliancePackWithOptions(request, runtime);
  }

  async createAggregateConfigRuleWithOptions(tmpReq: CreateAggregateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateConfigRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAggregateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!Util.isUnset(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAggregateConfigRuleResponse>(await this.doRPCRequest("CreateAggregateConfigRule", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAggregateConfigRuleResponse({}));
  }

  async createAggregateConfigRule(request: CreateAggregateConfigRuleRequest): Promise<CreateAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateConfigRuleWithOptions(request, runtime);
  }

  async createAggregateRemediationWithOptions(request: CreateAggregateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateRemediationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAggregateRemediationResponse>(await this.doRPCRequest("CreateAggregateRemediation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAggregateRemediationResponse({}));
  }

  async createAggregateRemediation(request: CreateAggregateRemediationRequest): Promise<CreateAggregateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateRemediationWithOptions(request, runtime);
  }

  async createAggregatorWithOptions(tmpReq: CreateAggregatorRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregatorResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aggregatorAccounts)) {
      request.aggregatorAccountsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregatorAccounts, "AggregatorAccounts", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAggregatorResponse>(await this.doRPCRequest("CreateAggregator", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAggregatorResponse({}));
  }

  async createAggregator(request: CreateAggregatorRequest): Promise<CreateAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregatorWithOptions(request, runtime);
  }

  async createCompliancePackWithOptions(tmpReq: CreateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<CreateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCompliancePackResponse>(await this.doRPCRequest("CreateCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCompliancePackResponse({}));
  }

  async createCompliancePack(request: CreateCompliancePackRequest): Promise<CreateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCompliancePackWithOptions(request, runtime);
  }

  async createConfigRuleWithOptions(tmpReq: CreateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!Util.isUnset(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConfigRuleResponse>(await this.doRPCRequest("CreateConfigRule", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConfigRuleResponse({}));
  }

  async createConfigRule(request: CreateConfigRuleRequest): Promise<CreateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigRuleWithOptions(request, runtime);
  }

  async createRemediationWithOptions(request: CreateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<CreateRemediationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRemediationResponse>(await this.doRPCRequest("CreateRemediation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRemediationResponse({}));
  }

  async createRemediation(request: CreateRemediationRequest): Promise<CreateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRemediationWithOptions(request, runtime);
  }

  async deactiveAggregateConfigRulesWithOptions(request: DeactiveAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactiveAggregateConfigRulesResponse>(await this.doRPCRequest("DeactiveAggregateConfigRules", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeactiveAggregateConfigRulesResponse({}));
  }

  async deactiveAggregateConfigRules(request: DeactiveAggregateConfigRulesRequest): Promise<DeactiveAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveAggregateConfigRulesWithOptions(request, runtime);
  }

  async deactiveConfigRulesWithOptions(request: DeactiveConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeactiveConfigRulesResponse>(await this.doRPCRequest("DeactiveConfigRules", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeactiveConfigRulesResponse({}));
  }

  async deactiveConfigRules(request: DeactiveConfigRulesRequest): Promise<DeactiveConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveConfigRulesWithOptions(request, runtime);
  }

  async deleteAggregateCompliancePacksWithOptions(request: DeleteAggregateCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateCompliancePacksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAggregateCompliancePacksResponse>(await this.doRPCRequest("DeleteAggregateCompliancePacks", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAggregateCompliancePacksResponse({}));
  }

  async deleteAggregateCompliancePacks(request: DeleteAggregateCompliancePacksRequest): Promise<DeleteAggregateCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateCompliancePacksWithOptions(request, runtime);
  }

  async deleteAggregateConfigRulesWithOptions(request: DeleteAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAggregateConfigRulesResponse>(await this.doRPCRequest("DeleteAggregateConfigRules", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAggregateConfigRulesResponse({}));
  }

  async deleteAggregateConfigRules(request: DeleteAggregateConfigRulesRequest): Promise<DeleteAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateConfigRulesWithOptions(request, runtime);
  }

  async deleteAggregateRemediationsWithOptions(request: DeleteAggregateRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateRemediationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAggregateRemediationsResponse>(await this.doRPCRequest("DeleteAggregateRemediations", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAggregateRemediationsResponse({}));
  }

  async deleteAggregateRemediations(request: DeleteAggregateRemediationsRequest): Promise<DeleteAggregateRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateRemediationsWithOptions(request, runtime);
  }

  async deleteAggregatorsWithOptions(request: DeleteAggregatorsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregatorsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAggregatorsResponse>(await this.doRPCRequest("DeleteAggregators", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAggregatorsResponse({}));
  }

  async deleteAggregators(request: DeleteAggregatorsRequest): Promise<DeleteAggregatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregatorsWithOptions(request, runtime);
  }

  async deleteCompliancePacksWithOptions(request: DeleteCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCompliancePacksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCompliancePacksResponse>(await this.doRPCRequest("DeleteCompliancePacks", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCompliancePacksResponse({}));
  }

  async deleteCompliancePacks(request: DeleteCompliancePacksRequest): Promise<DeleteCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCompliancePacksWithOptions(request, runtime);
  }

  async deleteRemediationsWithOptions(request: DeleteRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRemediationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteRemediationsResponse>(await this.doRPCRequest("DeleteRemediations", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteRemediationsResponse({}));
  }

  async deleteRemediations(request: DeleteRemediationsRequest): Promise<DeleteRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRemediationsWithOptions(request, runtime);
  }

  async detachAggregateConfigRuleToCompliancePackWithOptions(request: DetachAggregateConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<DetachAggregateConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachAggregateConfigRuleToCompliancePackResponse>(await this.doRPCRequest("DetachAggregateConfigRuleToCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DetachAggregateConfigRuleToCompliancePackResponse({}));
  }

  async detachAggregateConfigRuleToCompliancePack(request: DetachAggregateConfigRuleToCompliancePackRequest): Promise<DetachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  async detachConfigRuleToCompliancePackWithOptions(request: DetachConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<DetachConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachConfigRuleToCompliancePackResponse>(await this.doRPCRequest("DetachConfigRuleToCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new DetachConfigRuleToCompliancePackResponse({}));
  }

  async detachConfigRuleToCompliancePack(request: DetachConfigRuleToCompliancePackRequest): Promise<DetachConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  async generateAggregateCompliancePackReportWithOptions(request: GenerateAggregateCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAggregateCompliancePackReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAggregateCompliancePackReportResponse>(await this.doRPCRequest("GenerateAggregateCompliancePackReport", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAggregateCompliancePackReportResponse({}));
  }

  async generateAggregateCompliancePackReport(request: GenerateAggregateCompliancePackReportRequest): Promise<GenerateAggregateCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAggregateCompliancePackReportWithOptions(request, runtime);
  }

  async generateAggregateConfigRulesReportWithOptions(request: GenerateAggregateConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAggregateConfigRulesReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAggregateConfigRulesReportResponse>(await this.doRPCRequest("GenerateAggregateConfigRulesReport", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAggregateConfigRulesReportResponse({}));
  }

  async generateAggregateConfigRulesReport(request: GenerateAggregateConfigRulesReportRequest): Promise<GenerateAggregateConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAggregateConfigRulesReportWithOptions(request, runtime);
  }

  async generateAggregateResourceInventoryWithOptions(request: GenerateAggregateResourceInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAggregateResourceInventoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAggregateResourceInventoryResponse>(await this.doRPCRequest("GenerateAggregateResourceInventory", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAggregateResourceInventoryResponse({}));
  }

  async generateAggregateResourceInventory(request: GenerateAggregateResourceInventoryRequest): Promise<GenerateAggregateResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAggregateResourceInventoryWithOptions(request, runtime);
  }

  async generateCompliancePackReportWithOptions(request: GenerateCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateCompliancePackReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateCompliancePackReportResponse>(await this.doRPCRequest("GenerateCompliancePackReport", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateCompliancePackReportResponse({}));
  }

  async generateCompliancePackReport(request: GenerateCompliancePackReportRequest): Promise<GenerateCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateCompliancePackReportWithOptions(request, runtime);
  }

  async generateConfigRulesReportWithOptions(request: GenerateConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateConfigRulesReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateConfigRulesReportResponse>(await this.doRPCRequest("GenerateConfigRulesReport", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateConfigRulesReportResponse({}));
  }

  async generateConfigRulesReport(request: GenerateConfigRulesReportRequest): Promise<GenerateConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateConfigRulesReportWithOptions(request, runtime);
  }

  async generateResourceInventoryWithOptions(request: GenerateResourceInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GenerateResourceInventoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateResourceInventoryResponse>(await this.doRPCRequest("GenerateResourceInventory", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateResourceInventoryResponse({}));
  }

  async generateResourceInventory(request: GenerateResourceInventoryRequest): Promise<GenerateResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateResourceInventoryWithOptions(request, runtime);
  }

  async getAggregateAccountComplianceByPackWithOptions(request: GetAggregateAccountComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateAccountComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateAccountComplianceByPackResponse>(await this.doRPCRequest("GetAggregateAccountComplianceByPack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateAccountComplianceByPackResponse({}));
  }

  async getAggregateAccountComplianceByPack(request: GetAggregateAccountComplianceByPackRequest): Promise<GetAggregateAccountComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateAccountComplianceByPackWithOptions(request, runtime);
  }

  async getAggregateCompliancePackWithOptions(request: GetAggregateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateCompliancePackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateCompliancePackResponse>(await this.doRPCRequest("GetAggregateCompliancePack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateCompliancePackResponse({}));
  }

  async getAggregateCompliancePack(request: GetAggregateCompliancePackRequest): Promise<GetAggregateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateCompliancePackWithOptions(request, runtime);
  }

  async getAggregateCompliancePackReportWithOptions(request: GetAggregateCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateCompliancePackReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateCompliancePackReportResponse>(await this.doRPCRequest("GetAggregateCompliancePackReport", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateCompliancePackReportResponse({}));
  }

  async getAggregateCompliancePackReport(request: GetAggregateCompliancePackReportRequest): Promise<GetAggregateCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateCompliancePackReportWithOptions(request, runtime);
  }

  async getAggregateConfigRuleWithOptions(request: GetAggregateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAggregateConfigRuleResponse>(await this.doRPCRequest("GetAggregateConfigRule", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GetAggregateConfigRuleResponse({}));
  }

  async getAggregateConfigRule(request: GetAggregateConfigRuleRequest): Promise<GetAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleWithOptions(request, runtime);
  }

  async getAggregateConfigRuleComplianceByPackWithOptions(request: GetAggregateConfigRuleComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateConfigRuleComplianceByPackResponse>(await this.doRPCRequest("GetAggregateConfigRuleComplianceByPack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateConfigRuleComplianceByPackResponse({}));
  }

  async getAggregateConfigRuleComplianceByPack(request: GetAggregateConfigRuleComplianceByPackRequest): Promise<GetAggregateConfigRuleComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  async getAggregateConfigRuleSummaryByRiskLevelWithOptions(request: GetAggregateConfigRuleSummaryByRiskLevelRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateConfigRuleSummaryByRiskLevelResponse>(await this.doRPCRequest("GetAggregateConfigRuleSummaryByRiskLevel", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateConfigRuleSummaryByRiskLevelResponse({}));
  }

  async getAggregateConfigRuleSummaryByRiskLevel(request: GetAggregateConfigRuleSummaryByRiskLevelRequest): Promise<GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleSummaryByRiskLevelWithOptions(request, runtime);
  }

  async getAggregateConfigRulesReportWithOptions(request: GetAggregateConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRulesReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateConfigRulesReportResponse>(await this.doRPCRequest("GetAggregateConfigRulesReport", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateConfigRulesReportResponse({}));
  }

  async getAggregateConfigRulesReport(request: GetAggregateConfigRulesReportRequest): Promise<GetAggregateConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRulesReportWithOptions(request, runtime);
  }

  async getAggregateResourceComplianceByConfigRuleWithOptions(request: GetAggregateResourceComplianceByConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceByConfigRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateResourceComplianceByConfigRuleResponse>(await this.doRPCRequest("GetAggregateResourceComplianceByConfigRule", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateResourceComplianceByConfigRuleResponse({}));
  }

  async getAggregateResourceComplianceByConfigRule(request: GetAggregateResourceComplianceByConfigRuleRequest): Promise<GetAggregateResourceComplianceByConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  async getAggregateResourceComplianceByPackWithOptions(request: GetAggregateResourceComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateResourceComplianceByPackResponse>(await this.doRPCRequest("GetAggregateResourceComplianceByPack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateResourceComplianceByPackResponse({}));
  }

  async getAggregateResourceComplianceByPack(request: GetAggregateResourceComplianceByPackRequest): Promise<GetAggregateResourceComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByPackWithOptions(request, runtime);
  }

  async getAggregateResourceComplianceTimelineWithOptions(request: GetAggregateResourceComplianceTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateResourceComplianceTimelineResponse>(await this.doRPCRequest("GetAggregateResourceComplianceTimeline", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateResourceComplianceTimelineResponse({}));
  }

  async getAggregateResourceComplianceTimeline(request: GetAggregateResourceComplianceTimelineRequest): Promise<GetAggregateResourceComplianceTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceTimelineWithOptions(request, runtime);
  }

  async getAggregateResourceConfigurationTimelineWithOptions(request: GetAggregateResourceConfigurationTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceConfigurationTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateResourceConfigurationTimelineResponse>(await this.doRPCRequest("GetAggregateResourceConfigurationTimeline", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateResourceConfigurationTimelineResponse({}));
  }

  async getAggregateResourceConfigurationTimeline(request: GetAggregateResourceConfigurationTimelineRequest): Promise<GetAggregateResourceConfigurationTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceConfigurationTimelineWithOptions(request, runtime);
  }

  async getAggregateResourceCountsGroupByRegionWithOptions(request: GetAggregateResourceCountsGroupByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceCountsGroupByRegionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateResourceCountsGroupByRegionResponse>(await this.doRPCRequest("GetAggregateResourceCountsGroupByRegion", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateResourceCountsGroupByRegionResponse({}));
  }

  async getAggregateResourceCountsGroupByRegion(request: GetAggregateResourceCountsGroupByRegionRequest): Promise<GetAggregateResourceCountsGroupByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  async getAggregateResourceCountsGroupByResourceTypeWithOptions(request: GetAggregateResourceCountsGroupByResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceCountsGroupByResourceTypeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateResourceCountsGroupByResourceTypeResponse>(await this.doRPCRequest("GetAggregateResourceCountsGroupByResourceType", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateResourceCountsGroupByResourceTypeResponse({}));
  }

  async getAggregateResourceCountsGroupByResourceType(request: GetAggregateResourceCountsGroupByResourceTypeRequest): Promise<GetAggregateResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  async getAggregateResourceInventoryWithOptions(request: GetAggregateResourceInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceInventoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAggregateResourceInventoryResponse>(await this.doRPCRequest("GetAggregateResourceInventory", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GetAggregateResourceInventoryResponse({}));
  }

  async getAggregateResourceInventory(request: GetAggregateResourceInventoryRequest): Promise<GetAggregateResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceInventoryWithOptions(request, runtime);
  }

  async getAggregatorWithOptions(request: GetAggregatorRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregatorResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregatorResponse>(await this.doRPCRequest("GetAggregator", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregatorResponse({}));
  }

  async getAggregator(request: GetAggregatorRequest): Promise<GetAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregatorWithOptions(request, runtime);
  }

  async getCompliancePackWithOptions(request: GetCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<GetCompliancePackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCompliancePackResponse>(await this.doRPCRequest("GetCompliancePack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetCompliancePackResponse({}));
  }

  async getCompliancePack(request: GetCompliancePackRequest): Promise<GetCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCompliancePackWithOptions(request, runtime);
  }

  async getCompliancePackReportWithOptions(request: GetCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GetCompliancePackReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCompliancePackReportResponse>(await this.doRPCRequest("GetCompliancePackReport", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetCompliancePackReportResponse({}));
  }

  async getCompliancePackReport(request: GetCompliancePackReportRequest): Promise<GetCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCompliancePackReportWithOptions(request, runtime);
  }

  async getConfigRuleWithOptions(request: GetConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConfigRuleResponse>(await this.doRPCRequest("GetConfigRule", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GetConfigRuleResponse({}));
  }

  async getConfigRule(request: GetConfigRuleRequest): Promise<GetConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleWithOptions(request, runtime);
  }

  async getConfigRuleComplianceByPackWithOptions(request: GetConfigRuleComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRuleComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetConfigRuleComplianceByPackResponse>(await this.doRPCRequest("GetConfigRuleComplianceByPack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigRuleComplianceByPackResponse({}));
  }

  async getConfigRuleComplianceByPack(request: GetConfigRuleComplianceByPackRequest): Promise<GetConfigRuleComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  async getConfigRuleSummaryByRiskLevelWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConfigRuleSummaryByRiskLevelResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetConfigRuleSummaryByRiskLevelResponse>(await this.doRPCRequest("GetConfigRuleSummaryByRiskLevel", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigRuleSummaryByRiskLevelResponse({}));
  }

  async getConfigRuleSummaryByRiskLevel(): Promise<GetConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleSummaryByRiskLevelWithOptions(runtime);
  }

  async getConfigRulesReportWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConfigRulesReportResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetConfigRulesReportResponse>(await this.doRPCRequest("GetConfigRulesReport", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigRulesReportResponse({}));
  }

  async getConfigRulesReport(): Promise<GetConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRulesReportWithOptions(runtime);
  }

  async getDiscoveredResourceCountsGroupByRegionWithOptions(request: GetDiscoveredResourceCountsGroupByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceCountsGroupByRegionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDiscoveredResourceCountsGroupByRegionResponse>(await this.doRPCRequest("GetDiscoveredResourceCountsGroupByRegion", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetDiscoveredResourceCountsGroupByRegionResponse({}));
  }

  async getDiscoveredResourceCountsGroupByRegion(request: GetDiscoveredResourceCountsGroupByRegionRequest): Promise<GetDiscoveredResourceCountsGroupByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  async getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request: GetDiscoveredResourceCountsGroupByResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDiscoveredResourceCountsGroupByResourceTypeResponse>(await this.doRPCRequest("GetDiscoveredResourceCountsGroupByResourceType", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetDiscoveredResourceCountsGroupByResourceTypeResponse({}));
  }

  async getDiscoveredResourceCountsGroupByResourceType(request: GetDiscoveredResourceCountsGroupByResourceTypeRequest): Promise<GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  async getResourceComplianceByConfigRuleWithOptions(request: GetResourceComplianceByConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceByConfigRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetResourceComplianceByConfigRuleResponse>(await this.doRPCRequest("GetResourceComplianceByConfigRule", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetResourceComplianceByConfigRuleResponse({}));
  }

  async getResourceComplianceByConfigRule(request: GetResourceComplianceByConfigRuleRequest): Promise<GetResourceComplianceByConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  async getResourceComplianceByPackWithOptions(request: GetResourceComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetResourceComplianceByPackResponse>(await this.doRPCRequest("GetResourceComplianceByPack", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetResourceComplianceByPackResponse({}));
  }

  async getResourceComplianceByPack(request: GetResourceComplianceByPackRequest): Promise<GetResourceComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceByPackWithOptions(request, runtime);
  }

  async getResourceComplianceTimelineWithOptions(request: GetResourceComplianceTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetResourceComplianceTimelineResponse>(await this.doRPCRequest("GetResourceComplianceTimeline", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetResourceComplianceTimelineResponse({}));
  }

  async getResourceComplianceTimeline(request: GetResourceComplianceTimelineRequest): Promise<GetResourceComplianceTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceTimelineWithOptions(request, runtime);
  }

  async getResourceConfigurationTimelineWithOptions(request: GetResourceConfigurationTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceConfigurationTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetResourceConfigurationTimelineResponse>(await this.doRPCRequest("GetResourceConfigurationTimeline", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetResourceConfigurationTimelineResponse({}));
  }

  async getResourceConfigurationTimeline(request: GetResourceConfigurationTimelineRequest): Promise<GetResourceConfigurationTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceConfigurationTimelineWithOptions(request, runtime);
  }

  async getResourceInventoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceInventoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetResourceInventoryResponse>(await this.doRPCRequest("GetResourceInventory", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourceInventoryResponse({}));
  }

  async getResourceInventory(): Promise<GetResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceInventoryWithOptions(runtime);
  }

  async listAggregateCompliancePacksWithOptions(request: ListAggregateCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateCompliancePacksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAggregateCompliancePacksResponse>(await this.doRPCRequest("ListAggregateCompliancePacks", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListAggregateCompliancePacksResponse({}));
  }

  async listAggregateCompliancePacks(request: ListAggregateCompliancePacksRequest): Promise<ListAggregateCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateCompliancePacksWithOptions(request, runtime);
  }

  async listAggregateConfigRuleEvaluationResultsWithOptions(request: ListAggregateConfigRuleEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateConfigRuleEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAggregateConfigRuleEvaluationResultsResponse>(await this.doRPCRequest("ListAggregateConfigRuleEvaluationResults", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListAggregateConfigRuleEvaluationResultsResponse({}));
  }

  async listAggregateConfigRuleEvaluationResults(request: ListAggregateConfigRuleEvaluationResultsRequest): Promise<ListAggregateConfigRuleEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  async listAggregateConfigRulesWithOptions(request: ListAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAggregateConfigRulesResponse>(await this.doRPCRequest("ListAggregateConfigRules", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListAggregateConfigRulesResponse({}));
  }

  async listAggregateConfigRules(request: ListAggregateConfigRulesRequest): Promise<ListAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateConfigRulesWithOptions(request, runtime);
  }

  async listAggregateRemediationsWithOptions(request: ListAggregateRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateRemediationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAggregateRemediationsResponse>(await this.doRPCRequest("ListAggregateRemediations", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new ListAggregateRemediationsResponse({}));
  }

  async listAggregateRemediations(request: ListAggregateRemediationsRequest): Promise<ListAggregateRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateRemediationsWithOptions(request, runtime);
  }

  async listAggregateResourceEvaluationResultsWithOptions(request: ListAggregateResourceEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateResourceEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAggregateResourceEvaluationResultsResponse>(await this.doRPCRequest("ListAggregateResourceEvaluationResults", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListAggregateResourceEvaluationResultsResponse({}));
  }

  async listAggregateResourceEvaluationResults(request: ListAggregateResourceEvaluationResultsRequest): Promise<ListAggregateResourceEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateResourceEvaluationResultsWithOptions(request, runtime);
  }

  async listAggregatorsWithOptions(request: ListAggregatorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregatorsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAggregatorsResponse>(await this.doRPCRequest("ListAggregators", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListAggregatorsResponse({}));
  }

  async listAggregators(request: ListAggregatorsRequest): Promise<ListAggregatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregatorsWithOptions(request, runtime);
  }

  async listCompliancePackTemplatesWithOptions(request: ListCompliancePackTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListCompliancePackTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListCompliancePackTemplatesResponse>(await this.doRPCRequest("ListCompliancePackTemplates", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListCompliancePackTemplatesResponse({}));
  }

  async listCompliancePackTemplates(request: ListCompliancePackTemplatesRequest): Promise<ListCompliancePackTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCompliancePackTemplatesWithOptions(request, runtime);
  }

  async listCompliancePacksWithOptions(request: ListCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<ListCompliancePacksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListCompliancePacksResponse>(await this.doRPCRequest("ListCompliancePacks", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListCompliancePacksResponse({}));
  }

  async listCompliancePacks(request: ListCompliancePacksRequest): Promise<ListCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCompliancePacksWithOptions(request, runtime);
  }

  async listConfigRuleEvaluationResultsWithOptions(request: ListConfigRuleEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigRuleEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConfigRuleEvaluationResultsResponse>(await this.doRPCRequest("ListConfigRuleEvaluationResults", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListConfigRuleEvaluationResultsResponse({}));
  }

  async listConfigRuleEvaluationResults(request: ListConfigRuleEvaluationResultsRequest): Promise<ListConfigRuleEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  async listRemediationsWithOptions(request: ListRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<ListRemediationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRemediationsResponse>(await this.doRPCRequest("ListRemediations", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new ListRemediationsResponse({}));
  }

  async listRemediations(request: ListRemediationsRequest): Promise<ListRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemediationsWithOptions(request, runtime);
  }

  async listResourceEvaluationResultsWithOptions(request: ListResourceEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListResourceEvaluationResultsResponse>(await this.doRPCRequest("ListResourceEvaluationResults", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListResourceEvaluationResultsResponse({}));
  }

  async listResourceEvaluationResults(request: ListResourceEvaluationResultsRequest): Promise<ListResourceEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceEvaluationResultsWithOptions(request, runtime);
  }

  async listResourceOwnerInAllAggregatorWithOptions(runtime: $Util.RuntimeOptions): Promise<ListResourceOwnerInAllAggregatorResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListResourceOwnerInAllAggregatorResponse>(await this.doRPCRequest("ListResourceOwnerInAllAggregator", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListResourceOwnerInAllAggregatorResponse({}));
  }

  async listResourceOwnerInAllAggregator(): Promise<ListResourceOwnerInAllAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceOwnerInAllAggregatorWithOptions(runtime);
  }

  async startAggregateConfigRuleEvaluationWithOptions(request: StartAggregateConfigRuleEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<StartAggregateConfigRuleEvaluationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartAggregateConfigRuleEvaluationResponse>(await this.doRPCRequest("StartAggregateConfigRuleEvaluation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new StartAggregateConfigRuleEvaluationResponse({}));
  }

  async startAggregateConfigRuleEvaluation(request: StartAggregateConfigRuleEvaluationRequest): Promise<StartAggregateConfigRuleEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAggregateConfigRuleEvaluationWithOptions(request, runtime);
  }

  async startAggregateRemediationWithOptions(request: StartAggregateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<StartAggregateRemediationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartAggregateRemediationResponse>(await this.doRPCRequest("StartAggregateRemediation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new StartAggregateRemediationResponse({}));
  }

  async startAggregateRemediation(request: StartAggregateRemediationRequest): Promise<StartAggregateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAggregateRemediationWithOptions(request, runtime);
  }

  async startRemediationWithOptions(request: StartRemediationRequest, runtime: $Util.RuntimeOptions): Promise<StartRemediationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartRemediationResponse>(await this.doRPCRequest("StartRemediation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new StartRemediationResponse({}));
  }

  async startRemediation(request: StartRemediationRequest): Promise<StartRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRemediationWithOptions(request, runtime);
  }

  async updateAggregateCompliancePackWithOptions(tmpReq: UpdateAggregateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAggregateCompliancePackResponse>(await this.doRPCRequest("UpdateAggregateCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAggregateCompliancePackResponse({}));
  }

  async updateAggregateCompliancePack(request: UpdateAggregateCompliancePackRequest): Promise<UpdateAggregateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateCompliancePackWithOptions(request, runtime);
  }

  async updateAggregateConfigRuleWithOptions(tmpReq: UpdateAggregateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregateConfigRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAggregateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!Util.isUnset(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAggregateConfigRuleResponse>(await this.doRPCRequest("UpdateAggregateConfigRule", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAggregateConfigRuleResponse({}));
  }

  async updateAggregateConfigRule(request: UpdateAggregateConfigRuleRequest): Promise<UpdateAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateConfigRuleWithOptions(request, runtime);
  }

  async updateAggregateRemediationWithOptions(request: UpdateAggregateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregateRemediationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAggregateRemediationResponse>(await this.doRPCRequest("UpdateAggregateRemediation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAggregateRemediationResponse({}));
  }

  async updateAggregateRemediation(request: UpdateAggregateRemediationRequest): Promise<UpdateAggregateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateRemediationWithOptions(request, runtime);
  }

  async updateAggregatorWithOptions(tmpReq: UpdateAggregatorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregatorResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aggregatorAccounts)) {
      request.aggregatorAccountsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregatorAccounts, "AggregatorAccounts", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAggregatorResponse>(await this.doRPCRequest("UpdateAggregator", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAggregatorResponse({}));
  }

  async updateAggregator(request: UpdateAggregatorRequest): Promise<UpdateAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregatorWithOptions(request, runtime);
  }

  async updateCompliancePackWithOptions(tmpReq: UpdateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCompliancePackResponse>(await this.doRPCRequest("UpdateCompliancePack", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCompliancePackResponse({}));
  }

  async updateCompliancePack(request: UpdateCompliancePackRequest): Promise<UpdateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCompliancePackWithOptions(request, runtime);
  }

  async updateConfigRuleWithOptions(tmpReq: UpdateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateConfigRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.inputParameters)) {
      request.inputParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputParameters, "InputParameters", "json");
    }

    if (!Util.isUnset(tmpReq.resourceTypesScope)) {
      request.resourceTypesScopeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypesScope, "ResourceTypesScope", "simple");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConfigRuleResponse>(await this.doRPCRequest("UpdateConfigRule", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConfigRuleResponse({}));
  }

  async updateConfigRule(request: UpdateConfigRuleRequest): Promise<UpdateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigRuleWithOptions(request, runtime);
  }

  async updateRemediationWithOptions(request: UpdateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRemediationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRemediationResponse>(await this.doRPCRequest("UpdateRemediation", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRemediationResponse({}));
  }

  async updateRemediation(request: UpdateRemediationRequest): Promise<UpdateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRemediationWithOptions(request, runtime);
  }

}
