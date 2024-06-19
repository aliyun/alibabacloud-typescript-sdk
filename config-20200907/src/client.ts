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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActiveAggregateConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveConfigRulesRequest extends $tea.Model {
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

export class ActiveConfigRulesResponseBody extends $tea.Model {
  operateRuleResult?: ActiveConfigRulesResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: ActiveConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveConfigRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActiveConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActiveConfigRulesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachAggregateConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachConfigRuleToCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCompliancePacksRequest extends $tea.Model {
  desAggregatorIds?: string;
  srcAggregatorId?: string;
  srcCompliancePackIds?: string;
  static names(): { [key: string]: string } {
    return {
      desAggregatorIds: 'DesAggregatorIds',
      srcAggregatorId: 'SrcAggregatorId',
      srcCompliancePackIds: 'SrcCompliancePackIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desAggregatorIds: 'string',
      srcAggregatorId: 'string',
      srcCompliancePackIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCompliancePacksResponseBody extends $tea.Model {
  copyRulesResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      copyRulesResult: 'CopyRulesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyRulesResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyCompliancePacksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyConfigRulesRequest extends $tea.Model {
  desAggregatorIds?: string;
  srcAggregatorId?: string;
  srcConfigRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      desAggregatorIds: 'DesAggregatorIds',
      srcAggregatorId: 'SrcAggregatorId',
      srcConfigRuleIds: 'SrcConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desAggregatorIds: 'string',
      srcAggregatorId: 'string',
      srcConfigRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyConfigRulesResponseBody extends $tea.Model {
  copyRulesResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      copyRulesResult: 'CopyRulesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyRulesResult: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyConfigRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdvancedSearchFileRequest extends $tea.Model {
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAdvancedSearchFileResponseBody extends $tea.Model {
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

export class CreateAdvancedSearchFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAdvancedSearchFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAdvancedSearchFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateAdvancedSearchFileRequest extends $tea.Model {
  aggregatorId?: string;
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateAdvancedSearchFileResponseBody extends $tea.Model {
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

export class CreateAggregateAdvancedSearchFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAggregateAdvancedSearchFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAggregateAdvancedSearchFileResponseBody,
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
  defaultEnable?: boolean;
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateAggregateCompliancePackRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateAggregateCompliancePackRequestTagsScope[];
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestConfigRules },
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestTagsScope },
      templateContent: 'string',
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
  defaultEnable?: boolean;
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateAggregateCompliancePackShrinkRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateAggregateCompliancePackShrinkRequestTagsScope[];
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRulesShrink: 'ConfigRules',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateAggregateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateAggregateCompliancePackShrinkRequestTagsScope },
      templateContent: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAggregateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAggregateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigDeliveryChannelRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelCondition?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAggregateConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAggregateConfigDeliveryChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleRequest extends $tea.Model {
  accountIdsScope?: string;
  aggregatorId?: string;
  clientToken?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeAccountIdsScope?: string;
  excludeFolderIdsScope?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateAggregateConfigRuleRequestExcludeTagsScope[];
  folderIdsScope?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateAggregateConfigRuleRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      folderIdsScope: 'FolderIdsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsScope: 'string',
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateAggregateConfigRuleRequestExcludeTagsScope },
      folderIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateAggregateConfigRuleRequestTagsScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleShrinkRequest extends $tea.Model {
  accountIdsScope?: string;
  aggregatorId?: string;
  clientToken?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeAccountIdsScope?: string;
  excludeFolderIdsScope?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateAggregateConfigRuleShrinkRequestExcludeTagsScope[];
  folderIdsScope?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateAggregateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      folderIdsScope: 'FolderIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsScope: 'string',
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateAggregateConfigRuleShrinkRequestExcludeTagsScope },
      folderIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateAggregateConfigRuleShrinkRequestTagsScope },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAggregateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAggregateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorName: 'AggregatorName',
      aggregatorType: 'AggregatorType',
      clientToken: 'ClientToken',
      description: 'Description',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccounts: { 'type': 'array', 'itemType': CreateAggregatorRequestAggregatorAccounts },
      aggregatorName: 'string',
      aggregatorType: 'string',
      clientToken: 'string',
      description: 'string',
      folderId: 'string',
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
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccountsShrink: 'AggregatorAccounts',
      aggregatorName: 'AggregatorName',
      aggregatorType: 'AggregatorType',
      clientToken: 'ClientToken',
      description: 'Description',
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccountsShrink: 'string',
      aggregatorName: 'string',
      aggregatorType: 'string',
      clientToken: 'string',
      description: 'string',
      folderId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  defaultEnable?: boolean;
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateCompliancePackRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateCompliancePackRequestTagsScope[];
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRules: 'ConfigRules',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRules: { 'type': 'array', 'itemType': CreateCompliancePackRequestConfigRules },
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateCompliancePackRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateCompliancePackRequestTagsScope },
      templateContent: 'string',
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
  defaultEnable?: boolean;
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateCompliancePackShrinkRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateCompliancePackShrinkRequestTagsScope[];
  templateContent?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackName: 'CompliancePackName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      configRulesShrink: 'ConfigRules',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
      templateContent: 'TemplateContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackName: 'string',
      compliancePackTemplateId: 'string',
      configRulesShrink: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateCompliancePackShrinkRequestTagsScope },
      templateContent: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDeliveryChannelRequest extends $tea.Model {
  clientToken?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelCondition?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConfigDeliveryChannelResponseBody,
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateConfigRuleRequestExcludeTagsScope[];
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateConfigRuleRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateConfigRuleRequestExcludeTagsScope },
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateConfigRuleRequestTagsScope },
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: CreateConfigRuleShrinkRequestExcludeTagsScope[];
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: CreateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': CreateConfigRuleShrinkRequestExcludeTagsScope },
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': CreateConfigRuleShrinkRequestTagsScope },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryChannelRequest extends $tea.Model {
  clientToken?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeliveryChannelResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeactiveAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeactiveConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  deleteRule?: boolean;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
      deleteRule: 'DeleteRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliancePackIds: 'string',
      deleteRule: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAggregateCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAggregateCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigDeliveryChannelRequest extends $tea.Model {
  aggregatorId?: string;
  deliveryChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      deliveryChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAggregateConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAggregateConfigDeliveryChannelResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAggregateRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAggregatorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  deleteRule?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackIds: 'CompliancePackIds',
      deleteRule: 'DeleteRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackIds: 'string',
      deleteRule: 'boolean',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDeliveryChannelRequest extends $tea.Model {
  deliveryChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConfigDeliveryChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigRulesRequest extends $tea.Model {
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

export class DeleteConfigRulesResponseBody extends $tea.Model {
  operateRuleResult?: DeleteConfigRulesResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: DeleteConfigRulesResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConfigRulesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRemediationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRemediationRequest extends $tea.Model {
  configRuleId?: string;
  remediationId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      remediationId: 'RemediationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      remediationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRemediationResponseBody extends $tea.Model {
  remediation?: DescribeRemediationResponseBodyRemediation;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediation: 'Remediation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: DescribeRemediationResponseBodyRemediation,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRemediationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRemediationResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachAggregateConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachConfigRuleToCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachConfigRuleToCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesRequest extends $tea.Model {
  enableManagedRules?: boolean;
  resourceEvaluateItems?: EvaluatePreConfigRulesRequestResourceEvaluateItems[];
  static names(): { [key: string]: string } {
    return {
      enableManagedRules: 'EnableManagedRules',
      resourceEvaluateItems: 'ResourceEvaluateItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableManagedRules: 'boolean',
      resourceEvaluateItems: { 'type': 'array', 'itemType': EvaluatePreConfigRulesRequestResourceEvaluateItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesShrinkRequest extends $tea.Model {
  enableManagedRules?: boolean;
  resourceEvaluateItemsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enableManagedRules: 'EnableManagedRules',
      resourceEvaluateItemsShrink: 'ResourceEvaluateItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableManagedRules: 'boolean',
      resourceEvaluateItemsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  resourceEvaluations?: EvaluatePreConfigRulesResponseBodyResourceEvaluations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceEvaluations: 'ResourceEvaluations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceEvaluations: { 'type': 'array', 'itemType': EvaluatePreConfigRulesResponseBodyResourceEvaluations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvaluatePreConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EvaluatePreConfigRulesResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAggregateCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateConfigRulesReportResponseBody extends $tea.Model {
  aggregatorId?: string;
  reportId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      reportId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateConfigRulesReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAggregateConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  resourceDeleted?: number;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      aggregatorId: 'AggregatorId',
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
      aggregatorId: 'string',
      regions: 'string',
      resourceDeleted: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAggregateResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRulesReportRequest extends $tea.Model {
  clientToken?: string;
  configRuleIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleIds: 'ConfigRuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRulesReportResponseBody extends $tea.Model {
  reportId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateConfigRulesReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateResourceInventoryRequest extends $tea.Model {
  regions?: string;
  resourceDeleted?: number;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: 'string',
      resourceDeleted: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateResourceInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedSearchFileResponseBody extends $tea.Model {
  requestId?: string;
  resourceSearch?: GetAdvancedSearchFileResponseBodyResourceSearch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSearch: 'ResourceSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSearch: GetAdvancedSearchFileResponseBodyResourceSearch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedSearchFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAdvancedSearchFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAdvancedSearchFileResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateAccountComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateAccountComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAdvancedSearchFileRequest extends $tea.Model {
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

export class GetAggregateAdvancedSearchFileResponseBody extends $tea.Model {
  requestId?: string;
  resourceSearch?: GetAggregateAdvancedSearchFileResponseBodyResourceSearch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSearch: 'ResourceSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSearch: GetAggregateAdvancedSearchFileResponseBodyResourceSearch,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAdvancedSearchFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateAdvancedSearchFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateAdvancedSearchFileResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateComplianceSummaryRequest extends $tea.Model {
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

export class GetAggregateComplianceSummaryResponseBody extends $tea.Model {
  complianceSummary?: GetAggregateComplianceSummaryResponseBodyComplianceSummary;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceSummary: 'ComplianceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummary: GetAggregateComplianceSummaryResponseBodyComplianceSummary,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateComplianceSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateComplianceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateComplianceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigDeliveryChannelRequest extends $tea.Model {
  aggregatorId?: string;
  deliveryChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      deliveryChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannel?: GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannel: 'DeliveryChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannel: GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateConfigDeliveryChannelResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateConfigRuleComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateConfigRuleSummaryByRiskLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateConfigRuleSummaryByRiskLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRulesReportRequest extends $tea.Model {
  aggregatorId?: string;
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      reportId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceRequest extends $tea.Model {
  aggregatorId?: string;
  complianceOption?: number;
  region?: string;
  resourceAccountId?: number;
  resourceId?: string;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceOption: 'ComplianceOption',
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceOption: 'number',
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponseBody extends $tea.Model {
  discoveredResourceDetail?: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceDetail: 'DiscoveredResourceDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceDetail: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateDiscoveredResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateDiscoveredResourceResponseBody,
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
  resourceAccountId?: number;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      resourceAccountId: 'ResourceAccountId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      resourceAccountId: 'number',
      resourceOwnerId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceComplianceByConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateResourceComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByRegionRequest extends $tea.Model {
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

export class GetAggregateResourceComplianceGroupByRegionResponseBody extends $tea.Model {
  complianceResult?: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceComplianceGroupByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateResourceComplianceGroupByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByResourceTypeRequest extends $tea.Model {
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

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBody extends $tea.Model {
  complianceResult?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceComplianceGroupByResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAggregateResourceComplianceGroupByResourceTypeResponseBody,
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
  resourceAccountId?: number;
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
      resourceAccountId: 'ResourceAccountId',
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
      resourceAccountId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceComplianceTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  resourceAccountId?: number;
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
      resourceAccountId: 'ResourceAccountId',
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
      resourceAccountId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceConfigurationTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  resourceAccountId?: number;
  resourceOwnerId?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      folderId: 'FolderId',
      resourceAccountId: 'ResourceAccountId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      folderId: 'string',
      resourceAccountId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceCountsGroupByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  resourceAccountId?: number;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      folderId: 'FolderId',
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      folderId: 'string',
      region: 'string',
      resourceAccountId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceCountsGroupByResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregateResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCompliancePackReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCompliancePackReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponseBody extends $tea.Model {
  complianceSummary?: GetComplianceSummaryResponseBodyComplianceSummary;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceSummary: 'ComplianceSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummary: GetComplianceSummaryResponseBodyComplianceSummary,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetComplianceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetComplianceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigDeliveryChannelRequest extends $tea.Model {
  deliveryChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannel?: GetConfigDeliveryChannelResponseBodyDeliveryChannel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannel: 'DeliveryChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannel: GetConfigDeliveryChannelResponseBodyDeliveryChannel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConfigDeliveryChannelResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigRuleComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigRuleSummaryByRiskLevelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConfigRuleSummaryByRiskLevelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRulesReportRequest extends $tea.Model {
  reportId?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'ReportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigRulesReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConfigRulesReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationRecorderResponseBody extends $tea.Model {
  configurationRecorder?: GetConfigurationRecorderResponseBodyConfigurationRecorder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationRecorder: 'ConfigurationRecorder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorder: GetConfigurationRecorderResponseBodyConfigurationRecorder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationRecorderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConfigurationRecorderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceRequest extends $tea.Model {
  complianceOption?: number;
  region?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      complianceOption: 'ComplianceOption',
      region: 'Region',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceOption: 'number',
      region: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceResponseBody extends $tea.Model {
  discoveredResourceDetail?: GetDiscoveredResourceResponseBodyDiscoveredResourceDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceDetail: 'DiscoveredResourceDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceDetail: GetDiscoveredResourceResponseBodyDiscoveredResourceDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiscoveredResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDiscoveredResourceResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiscoveredResourceCountsGroupByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiscoveredResourceCountsGroupByResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDiscoveredResourceCountsGroupByResourceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegratedServiceStatusRequest extends $tea.Model {
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegratedServiceStatusResponseBody extends $tea.Model {
  data?: boolean;
  integratedTypes?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      integratedTypes: 'IntegratedTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      integratedTypes: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIntegratedServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIntegratedServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIntegratedServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleRequest extends $tea.Model {
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBody extends $tea.Model {
  managedRule?: GetManagedRuleResponseBodyManagedRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRule: 'ManagedRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRule: GetManagedRuleResponseBodyManagedRule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetManagedRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetManagedRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemediationTemplateRequest extends $tea.Model {
  templateIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      templateIdentifier: 'TemplateIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemediationTemplateResponseBody extends $tea.Model {
  remediationTemplates?: GetRemediationTemplateResponseBodyRemediationTemplates[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationTemplates: 'RemediationTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationTemplates: { 'type': 'array', 'itemType': GetRemediationTemplateResponseBodyRemediationTemplates },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemediationTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRemediationTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRemediationTemplateResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceComplianceByConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceComplianceByPackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceComplianceByPackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByRegionRequest extends $tea.Model {
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

export class GetResourceComplianceGroupByRegionResponseBody extends $tea.Model {
  complianceResult?: GetResourceComplianceGroupByRegionResponseBodyComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetResourceComplianceGroupByRegionResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByRegionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceComplianceGroupByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceComplianceGroupByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByResourceTypeRequest extends $tea.Model {
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

export class GetResourceComplianceGroupByResourceTypeResponseBody extends $tea.Model {
  complianceResult?: GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByResourceTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceComplianceGroupByResourceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceComplianceGroupByResourceTypeResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceComplianceTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceConfigurationTimelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceInventoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceInventoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedResourceRelationConfigRequest extends $tea.Model {
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

export class GetSupportedResourceRelationConfigResponseBody extends $tea.Model {
  requestId?: string;
  resourceRelationConfigList?: GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelationConfigList: 'ResourceRelationConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelationConfigList: { 'type': 'array', 'itemType': GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedResourceRelationConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSupportedResourceRelationConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSupportedResourceRelationConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAggregateEvaluationResultsRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  ignoreDate?: string;
  reason?: string;
  resources?: IgnoreAggregateEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resources: { 'type': 'array', 'itemType': IgnoreAggregateEvaluationResultsRequestResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAggregateEvaluationResultsShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  ignoreDate?: string;
  reason?: string;
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAggregateEvaluationResultsResponseBody extends $tea.Model {
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

export class IgnoreAggregateEvaluationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IgnoreAggregateEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IgnoreAggregateEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEvaluationResultsRequest extends $tea.Model {
  configRuleId?: string;
  ignoreDate?: string;
  reason?: string;
  resources?: IgnoreEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resources: { 'type': 'array', 'itemType': IgnoreEvaluationResultsRequestResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEvaluationResultsShrinkRequest extends $tea.Model {
  configRuleId?: string;
  ignoreDate?: string;
  reason?: string;
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      ignoreDate: 'IgnoreDate',
      reason: 'Reason',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      ignoreDate: 'string',
      reason: 'string',
      resourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEvaluationResultsResponseBody extends $tea.Model {
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

export class IgnoreEvaluationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: IgnoreEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IgnoreEvaluationResultsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigDeliveryChannelsRequest extends $tea.Model {
  aggregatorId?: string;
  deliveryChannelIds?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      deliveryChannelIds: 'DeliveryChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      deliveryChannelIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigDeliveryChannelsResponseBody extends $tea.Model {
  deliveryChannels?: ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannels: 'DeliveryChannels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigDeliveryChannelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateConfigDeliveryChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateConfigDeliveryChannelsResponseBody,
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
  regions?: string;
  resourceAccountId?: number;
  resourceGroupIds?: string;
  resourceOwnerId?: number;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceAccountId: 'ResourceAccountId',
      resourceGroupIds: 'ResourceGroupIds',
      resourceOwnerId: 'ResourceOwnerId',
      resourceTypes: 'ResourceTypes',
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
      regions: 'string',
      resourceAccountId: 'number',
      resourceGroupIds: 'string',
      resourceOwnerId: 'number',
      resourceTypes: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateConfigRuleEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateConfigRuleEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationStatisticsRequest extends $tea.Model {
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

export class ListAggregateConfigRuleEvaluationStatisticsResponseBody extends $tea.Model {
  evaluationResults?: ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: { 'type': 'array', 'itemType': ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateConfigRuleEvaluationStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateConfigRuleEvaluationStatisticsResponseBody,
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
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceTypes?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      complianceType: 'ComplianceType',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      complianceType: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesRequest extends $tea.Model {
  aggregatorId?: string;
  maxResults?: number;
  nextToken?: string;
  regions?: string;
  resourceAccountId?: number;
  resourceDeleted?: number;
  resourceId?: string;
  resourceOwnerId?: number;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceAccountId: 'ResourceAccountId',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceAccountId: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponseBody extends $tea.Model {
  discoveredResourceProfiles?: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfiles: 'DiscoveredResourceProfiles',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfiles: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateDiscoveredResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateDiscoveredResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationExecutionsRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  executionStatus?: string;
  maxResults?: number;
  nextToken?: string;
  resourceAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      executionStatus: 'ExecutionStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceAccountId: 'ResourceAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      executionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceAccountId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationExecutionsResponseBody extends $tea.Model {
  remediationExecutionData?: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationExecutionData: 'RemediationExecutionData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationExecutionData: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateRemediationExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateRemediationExecutionsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateResourceEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateResourceEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceRelationsRequest extends $tea.Model {
  aggregatorId?: string;
  maxResults?: number;
  nextToken?: string;
  region?: string;
  relationType?: string;
  resourceAccountId?: number;
  resourceId?: string;
  resourceType?: string;
  targetResourceId?: string;
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      relationType: 'RelationType',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      relationType: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
      targetResourceId: 'string',
      targetResourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceRelationsResponseBody extends $tea.Model {
  requestId?: string;
  resourceRelations?: ListAggregateResourceRelationsResponseBodyResourceRelations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelations: 'ResourceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelations: ListAggregateResourceRelationsResponseBodyResourceRelations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceRelationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateResourceRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateResourceRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourcesByAdvancedSearchRequest extends $tea.Model {
  aggregatorId?: string;
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourcesByAdvancedSearchResponseBody extends $tea.Model {
  queryResults?: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResults: 'QueryResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResults: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourcesByAdvancedSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregateResourcesByAdvancedSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAggregateResourcesByAdvancedSearchResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAggregatorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCompliancePackTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCompliancePacksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCompliancePacksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigDeliveryChannelsRequest extends $tea.Model {
  deliveryChannelIds?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelIds: 'DeliveryChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigDeliveryChannelsResponseBody extends $tea.Model {
  deliveryChannels?: ListConfigDeliveryChannelsResponseBodyDeliveryChannels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannels: 'DeliveryChannels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': ListConfigDeliveryChannelsResponseBodyDeliveryChannels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigDeliveryChannelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigDeliveryChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigDeliveryChannelsResponseBody,
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
  regions?: string;
  resourceGroupIds?: string;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceGroupIds: 'ResourceGroupIds',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceGroupIds: 'string',
      resourceTypes: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigRuleEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigRuleEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationStatisticsResponseBody extends $tea.Model {
  evaluationResults?: ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationResults: 'EvaluationResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationResults: { 'type': 'array', 'itemType': ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigRuleEvaluationStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigRuleEvaluationStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesRequest extends $tea.Model {
  complianceType?: string;
  configRuleName?: string;
  configRuleState?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceTypes?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBody extends $tea.Model {
  configRules?: ListConfigRulesResponseBodyConfigRules;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRules: 'ConfigRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRules: ListConfigRulesResponseBodyConfigRules,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regions?: string;
  resourceDeleted?: number;
  resourceId?: string;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regions: 'string',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponseBody extends $tea.Model {
  discoveredResourceProfiles?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfiles: 'DiscoveredResourceProfiles',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfiles: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDiscoveredResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDiscoveredResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegratedServiceResponseBody extends $tea.Model {
  data?: ListIntegratedServiceResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListIntegratedServiceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegratedServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntegratedServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntegratedServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceTypes?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponseBody extends $tea.Model {
  managedRules?: ListManagedRulesResponseBodyManagedRules;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRules: 'ManagedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRules: ListManagedRulesResponseBodyManagedRules,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListManagedRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListManagedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreManagedRulesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreManagedRulesShrinkRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypesShrink: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreManagedRulesResponseBody extends $tea.Model {
  managedRules?: ListPreManagedRulesResponseBodyManagedRules[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRules: 'ManagedRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRules: { 'type': 'array', 'itemType': ListPreManagedRulesResponseBodyManagedRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreManagedRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPreManagedRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPreManagedRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationExecutionsRequest extends $tea.Model {
  configRuleId?: string;
  executionStatus?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      executionStatus: 'ExecutionStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      executionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationExecutionsResponseBody extends $tea.Model {
  remediationExecutionData?: ListRemediationExecutionsResponseBodyRemediationExecutionData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationExecutionData: 'RemediationExecutionData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationExecutionData: ListRemediationExecutionsResponseBodyRemediationExecutionData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRemediationExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRemediationExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesRequest extends $tea.Model {
  managedRuleIdentifier?: string;
  pageNumber?: number;
  pageSize?: number;
  remediationType?: string;
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediationType: 'RemediationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remediationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  remediationTemplates?: ListRemediationTemplatesResponseBodyRemediationTemplates[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediationTemplates: 'RemediationTemplates',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediationTemplates: { 'type': 'array', 'itemType': ListRemediationTemplatesResponseBodyRemediationTemplates },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRemediationTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRemediationTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsRequest extends $tea.Model {
  configRuleIds?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  remediations?: ListRemediationsResponseBodyRemediations[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediations: 'Remediations',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediations: { 'type': 'array', 'itemType': ListRemediationsResponseBodyRemediations },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRemediationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  region?: string;
  relationType?: string;
  resourceId?: string;
  resourceType?: string;
  targetResourceId?: string;
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      region: 'Region',
      relationType: 'RelationType',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      relationType: 'string',
      resourceId: 'string',
      resourceType: 'string',
      targetResourceId: 'string',
      targetResourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationsResponseBody extends $tea.Model {
  requestId?: string;
  resourceRelations?: ListResourceRelationsResponseBodyResourceRelations;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelations: 'ResourceRelations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelations: ListResourceRelationsResponseBodyResourceRelations,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceRelationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceRelationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByAdvancedSearchRequest extends $tea.Model {
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByAdvancedSearchResponseBody extends $tea.Model {
  queryResults?: ListResourcesByAdvancedSearchResponseBodyQueryResults;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResults: 'QueryResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResults: ListResourcesByAdvancedSearchResponseBodyQueryResults,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByAdvancedSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesByAdvancedSearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesByAdvancedSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedProductsRequest extends $tea.Model {
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

export class ListSupportedProductsResponseBody extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  products?: ListSupportedProductsResponseBodyProducts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      products: 'Products',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      products: { 'type': 'array', 'itemType': ListSupportedProductsResponseBodyProducts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSupportedProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSupportedProductsResponseBody,
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

export class ListTagResourcesShrinkRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagShrink: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class PutEvaluationsRequest extends $tea.Model {
  deleteMode?: boolean;
  evaluations?: string;
  resultToken?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMode: 'DeleteMode',
      evaluations: 'Evaluations',
      resultToken: 'ResultToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMode: 'boolean',
      evaluations: 'string',
      resultToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEvaluationsResponseBody extends $tea.Model {
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

export class PutEvaluationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutEvaluationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutEvaluationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAggregateEvaluationResultsRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  resources?: RevertAggregateEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      resources: { 'type': 'array', 'itemType': RevertAggregateEvaluationResultsRequestResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAggregateEvaluationResultsShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  configRuleId?: string;
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      resourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertAggregateEvaluationResultsResponseBody extends $tea.Model {
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

export class RevertAggregateEvaluationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertAggregateEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevertAggregateEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertEvaluationResultsRequest extends $tea.Model {
  configRuleId?: string;
  resources?: RevertEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      resources: { 'type': 'array', 'itemType': RevertEvaluationResultsRequestResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertEvaluationResultsShrinkRequest extends $tea.Model {
  configRuleId?: string;
  resourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      resourcesShrink: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      resourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertEvaluationResultsResponseBody extends $tea.Model {
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

export class RevertEvaluationResultsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevertEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevertEvaluationResultsResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAggregateConfigRuleEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  resourceAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      configRuleId: 'ConfigRuleId',
      resourceAccountId: 'ResourceAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      configRuleId: 'string',
      resourceAccountId: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAggregateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartAggregateRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigRuleEvaluationRequest extends $tea.Model {
  compliancePackId?: string;
  configRuleId?: string;
  revertEvaluation?: boolean;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleId: 'ConfigRuleId',
      revertEvaluation: 'RevertEvaluation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleId: 'string',
      revertEvaluation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigRuleEvaluationResponseBody extends $tea.Model {
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

export class StartConfigRuleEvaluationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartConfigRuleEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartConfigRuleEvaluationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponseBody extends $tea.Model {
  configurationRecorder?: StartConfigurationRecorderResponseBodyConfigurationRecorder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationRecorder: 'ConfigurationRecorder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorder: StartConfigurationRecorderResponseBodyConfigurationRecorder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartConfigurationRecorderResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartRemediationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigurationRecorderResponseBody extends $tea.Model {
  requestId?: string;
  stopConfigurationRecorderResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stopConfigurationRecorderResult: 'StopConfigurationRecorderResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stopConfigurationRecorderResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigurationRecorderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopConfigurationRecorderResponseBody,
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

export class TagResourcesShrinkRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagShrink: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateAggregateCompliancePackRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  compliancePackId?: string;
  compliancePackName?: string;
  configRules?: UpdateAggregateCompliancePackRequestConfigRules[];
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateAggregateCompliancePackRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateAggregateCompliancePackRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRules: 'ConfigRules',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
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
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestTagsScope },
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateAggregateCompliancePackShrinkRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateAggregateCompliancePackShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
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
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackShrinkRequestTagsScope },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAggregateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAggregateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigDeliveryChannelRequest extends $tea.Model {
  aggregatorId?: string;
  clientToken?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAggregateConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAggregateConfigDeliveryChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleRequest extends $tea.Model {
  accountIdsScope?: string;
  aggregatorId?: string;
  clientToken?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeAccountIdsScope?: string;
  excludeFolderIdsScope?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateAggregateConfigRuleRequestExcludeTagsScope[];
  folderIdsScope?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateAggregateConfigRuleRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      folderIdsScope: 'FolderIdsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsScope: 'string',
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateAggregateConfigRuleRequestExcludeTagsScope },
      folderIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateAggregateConfigRuleRequestTagsScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleShrinkRequest extends $tea.Model {
  accountIdsScope?: string;
  aggregatorId?: string;
  clientToken?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleTriggerTypes?: string;
  description?: string;
  excludeAccountIdsScope?: string;
  excludeFolderIdsScope?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope[];
  folderIdsScope?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateAggregateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountIdsScope: 'AccountIdsScope',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      folderIdsScope: 'FolderIdsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsScope: 'string',
      aggregatorId: 'string',
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope },
      folderIdsScope: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateAggregateConfigRuleShrinkRequestTagsScope },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAggregateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAggregateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAggregatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateCompliancePackRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateCompliancePackRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRules: 'ConfigRules',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRules: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRules },
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackRequestTagsScope },
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateCompliancePackShrinkRequestExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  riskLevel?: number;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateCompliancePackShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      configRulesShrink: 'ConfigRules',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      riskLevel: 'RiskLevel',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      configRulesShrink: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackShrinkRequestExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      riskLevel: 'number',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateCompliancePackShrinkRequestTagsScope },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCompliancePackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCompliancePackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigDeliveryChannelRequest extends $tea.Model {
  clientToken?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConfigDeliveryChannelResponseBody,
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateConfigRuleRequestExcludeTagsScope[];
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateConfigRuleRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateConfigRuleRequestExcludeTagsScope },
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateConfigRuleRequestTagsScope },
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
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: UpdateConfigRuleShrinkRequestExcludeTagsScope[];
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: UpdateConfigRuleShrinkRequestTagsScope[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleTriggerTypes: 'string',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': UpdateConfigRuleShrinkRequestExcludeTagsScope },
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': UpdateConfigRuleShrinkRequestTagsScope },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationRecorderRequest extends $tea.Model {
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationRecorderResponseBody extends $tea.Model {
  configurationRecorder?: UpdateConfigurationRecorderResponseBodyConfigurationRecorder;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configurationRecorder: 'ConfigurationRecorder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorder: UpdateConfigurationRecorderResponseBodyConfigurationRecorder,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigurationRecorderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConfigurationRecorderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliveryChannelRequest extends $tea.Model {
  clientToken?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliveryChannelResponseBody extends $tea.Model {
  deliveryChannelId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeliveryChannelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDeliveryChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntegratedServiceStatusRequest extends $tea.Model {
  integratedTypes?: string;
  serviceCode?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      integratedTypes: 'IntegratedTypes',
      serviceCode: 'ServiceCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedTypes: 'string',
      serviceCode: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIntegratedServiceStatusResponseBody extends $tea.Model {
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

export class UpdateIntegratedServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIntegratedServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIntegratedServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemediationRequest extends $tea.Model {
  clientToken?: string;
  invokeType?: string;
  params?: string;
  remediationId?: string;
  remediationTemplateId?: string;
  remediationType?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRemediationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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

export class ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
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

export class ActiveConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': ActiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

export class CreateAggregateCompliancePackRequestExcludeTagsScope extends $tea.Model {
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

export class CreateAggregateCompliancePackRequestTagsScope extends $tea.Model {
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

export class CreateAggregateCompliancePackShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class CreateAggregateCompliancePackShrinkRequestTagsScope extends $tea.Model {
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

export class CreateAggregateConfigRuleRequestExcludeTagsScope extends $tea.Model {
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

export class CreateAggregateConfigRuleRequestTagsScope extends $tea.Model {
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

export class CreateAggregateConfigRuleShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class CreateAggregateConfigRuleShrinkRequestTagsScope extends $tea.Model {
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

export class CreateCompliancePackRequestExcludeTagsScope extends $tea.Model {
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

export class CreateCompliancePackRequestTagsScope extends $tea.Model {
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

export class CreateCompliancePackShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class CreateCompliancePackShrinkRequestTagsScope extends $tea.Model {
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

export class CreateConfigRuleRequestExcludeTagsScope extends $tea.Model {
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

export class CreateConfigRuleRequestTagsScope extends $tea.Model {
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

export class CreateConfigRuleShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class CreateConfigRuleShrinkRequestTagsScope extends $tea.Model {
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

export class DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
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

export class DeleteConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeleteConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

export class DescribeRemediationResponseBodyRemediation extends $tea.Model {
  accountId?: number;
  configRuleId?: string;
  invokeType?: string;
  lastSuccessfulInvocationId?: string;
  lastSuccessfulInvocationTime?: number;
  lastSuccessfulInvocationType?: string;
  remediationId?: string;
  remediationOriginParams?: string;
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
      remediationId: 'RemediationId',
      remediationOriginParams: 'RemediationOriginParams',
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
      remediationId: 'string',
      remediationOriginParams: 'string',
      remediationSourceType: 'string',
      remediationTemplateId: 'string',
      remediationType: 'string',
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

export class EvaluatePreConfigRulesRequestResourceEvaluateItemsRules extends $tea.Model {
  identifier?: string;
  inputParameters?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      inputParameters: 'InputParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      inputParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesRequestResourceEvaluateItems extends $tea.Model {
  resourceLogicalId?: string;
  resourceProperties?: string;
  resourceType?: string;
  rules?: EvaluatePreConfigRulesRequestResourceEvaluateItemsRules[];
  static names(): { [key: string]: string } {
    return {
      resourceLogicalId: 'ResourceLogicalId',
      resourceProperties: 'ResourceProperties',
      resourceType: 'ResourceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogicalId: 'string',
      resourceProperties: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': EvaluatePreConfigRulesRequestResourceEvaluateItemsRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules extends $tea.Model {
  annotation?: string;
  complianceType?: string;
  helpUrl?: string;
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      helpUrl: 'HelpUrl',
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      helpUrl: 'string',
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluatePreConfigRulesResponseBodyResourceEvaluations extends $tea.Model {
  resourceLogicalId?: string;
  resourceType?: string;
  rules?: EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules[];
  static names(): { [key: string]: string } {
    return {
      resourceLogicalId: 'ResourceLogicalId',
      resourceType: 'ResourceType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceLogicalId: 'string',
      resourceType: 'string',
      rules: { 'type': 'array', 'itemType': EvaluatePreConfigRulesResponseBodyResourceEvaluationsRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdvancedSearchFileResponseBodyResourceSearch extends $tea.Model {
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
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

export class GetAggregateAdvancedSearchFileResponseBodyResourceSearch extends $tea.Model {
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
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
  resourceTypesScope?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      resourceTypesScope: 'ResourceTypesScope',
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
      resourceTypesScope: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope extends $tea.Model {
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

export class GetAggregateCompliancePackResponseBodyCompliancePackScopeTagsScope extends $tea.Model {
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

export class GetAggregateCompliancePackResponseBodyCompliancePackScope extends $tea.Model {
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: GetAggregateCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: GetAggregateCompliancePackResponseBodyCompliancePackScopeTagsScope[];
  static names(): { [key: string]: string } {
    return {
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackScopeTagsScope },
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
  scope?: GetAggregateCompliancePackResponseBodyCompliancePackScope;
  status?: string;
  templateContent?: string;
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
      scope: 'Scope',
      status: 'Status',
      templateContent: 'TemplateContent',
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
      scope: GetAggregateCompliancePackResponseBodyCompliancePackScope,
      status: 'string',
      templateContent: 'string',
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

export class GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $tea.Model {
  complianceSummaryTimestamp?: number;
  compliantCount?: number;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $tea.Model {
  complianceSummaryTimestamp?: number;
  compliantCount?: number;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateComplianceSummaryResponseBodyComplianceSummary extends $tea.Model {
  complianceSummaryByConfigRule?: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  complianceSummaryByResource?: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel extends $tea.Model {
  accountId?: string;
  aggregatorId?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      aggregatorId: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleCompliance extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleTagsScope extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRule extends $tea.Model {
  accountId?: number;
  accountIdsScope?: string;
  compliance?: GetAggregateConfigRuleResponseBodyConfigRuleCompliance;
  configRuleArn?: string;
  configRuleEvaluationStatus?: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  configRuleName?: string;
  configRuleState?: string;
  configRuleTriggerTypes?: string;
  createBy?: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy;
  createTimestamp?: number;
  description?: string;
  excludeAccountIdsScope?: string;
  excludeFolderIdsScope?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope[];
  folderIdsScope?: string;
  inputParameters?: { [key: string]: any };
  managedRule?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule;
  maximumExecutionFrequency?: string;
  modifiedTimestamp?: number;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScope?: string;
  riskLevel?: number;
  source?: GetAggregateConfigRuleResponseBodyConfigRuleSource;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: GetAggregateConfigRuleResponseBodyConfigRuleTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountIdsScope: 'AccountIdsScope',
      compliance: 'Compliance',
      configRuleArn: 'ConfigRuleArn',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      createBy: 'CreateBy',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      excludeAccountIdsScope: 'ExcludeAccountIdsScope',
      excludeFolderIdsScope: 'ExcludeFolderIdsScope',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      folderIdsScope: 'FolderIdsScope',
      inputParameters: 'InputParameters',
      managedRule: 'ManagedRule',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      modifiedTimestamp: 'ModifiedTimestamp',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      source: 'Source',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountIdsScope: 'string',
      compliance: GetAggregateConfigRuleResponseBodyConfigRuleCompliance,
      configRuleArn: 'string',
      configRuleEvaluationStatus: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      configRuleTriggerTypes: 'string',
      createBy: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy,
      createTimestamp: 'number',
      description: 'string',
      excludeAccountIdsScope: 'string',
      excludeFolderIdsScope: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleExcludeTagsScope },
      folderIdsScope: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRule: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule,
      maximumExecutionFrequency: 'string',
      modifiedTimestamp: 'number',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      source: GetAggregateConfigRuleResponseBodyConfigRuleSource,
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleTagsScope },
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
  reportId?: string;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportId: 'ReportId',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      reportCreateTimestamp: 'number',
      reportId: 'string',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $tea.Model {
  accountId?: number;
  availabilityZone?: string;
  complianceType?: string;
  configuration?: string;
  region?: string;
  resourceCreationTime?: number;
  resourceDeleted?: number;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      complianceType: 'ComplianceType',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      complianceType: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
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

export class GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances extends $tea.Model {
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

export class GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList extends $tea.Model {
  compliances?: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult extends $tea.Model {
  complianceResultList?: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances extends $tea.Model {
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

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList extends $tea.Model {
  compliances?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult extends $tea.Model {
  complianceResultList?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList },
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
  groupName?: string;
  region?: string;
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      region: 'Region',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      region: 'string',
      resourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  groupName?: string;
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceInventoryResponseBodyResourceInventory extends $tea.Model {
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  folderId?: string;
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
      folderId: 'FolderId',
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
      folderId: 'string',
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
  resourceTypesScope?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      resourceTypesScope: 'ResourceTypesScope',
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
      resourceTypesScope: 'string',
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope extends $tea.Model {
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

export class GetCompliancePackResponseBodyCompliancePackScopeTagsScope extends $tea.Model {
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

export class GetCompliancePackResponseBodyCompliancePackScope extends $tea.Model {
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope[];
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: GetCompliancePackResponseBodyCompliancePackScopeTagsScope[];
  static names(): { [key: string]: string } {
    return {
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackScopeExcludeTagsScope },
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackScopeTagsScope },
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
  scope?: GetCompliancePackResponseBodyCompliancePackScope;
  status?: string;
  templateContent?: string;
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
      scope: 'Scope',
      status: 'Status',
      templateContent: 'TemplateContent',
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
      scope: GetCompliancePackResponseBodyCompliancePackScope,
      status: 'string',
      templateContent: 'string',
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

export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $tea.Model {
  complianceSummaryTimestamp?: number;
  compliantCount?: number;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $tea.Model {
  complianceSummaryTimestamp?: number;
  compliantCount?: number;
  nonCompliantCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetComplianceSummaryResponseBodyComplianceSummary extends $tea.Model {
  complianceSummaryByConfigRule?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  complianceSummaryByResource?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigDeliveryChannelResponseBodyDeliveryChannel extends $tea.Model {
  accountId?: number;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleCompliance extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRuleExcludeTagsScope extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRuleScope extends $tea.Model {
  complianceResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
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

export class GetConfigRuleResponseBodyConfigRuleTagsScope extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRule extends $tea.Model {
  accountId?: number;
  compliance?: GetConfigRuleResponseBodyConfigRuleCompliance;
  configRuleArn?: string;
  configRuleEvaluationStatus?: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  configRuleName?: string;
  configRuleState?: string;
  configRuleTriggerTypes?: string;
  createBy?: GetConfigRuleResponseBodyConfigRuleCreateBy;
  createTimestamp?: number;
  description?: string;
  excludeRegionIdsScope?: string;
  excludeResourceGroupIdsScope?: string;
  excludeResourceIdsScope?: string;
  excludeTagsScope?: GetConfigRuleResponseBodyConfigRuleExcludeTagsScope[];
  inputParameters?: { [key: string]: any };
  managedRule?: GetConfigRuleResponseBodyConfigRuleManagedRule;
  maximumExecutionFrequency?: string;
  modifiedTimestamp?: number;
  regionIdsScope?: string;
  resourceGroupIdsScope?: string;
  resourceIdsScope?: string;
  resourceTypesScope?: string;
  riskLevel?: number;
  scope?: GetConfigRuleResponseBodyConfigRuleScope;
  source?: GetConfigRuleResponseBodyConfigRuleSource;
  tagKeyLogicScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  tagsScope?: GetConfigRuleResponseBodyConfigRuleTagsScope[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      compliance: 'Compliance',
      configRuleArn: 'ConfigRuleArn',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      createBy: 'CreateBy',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      excludeRegionIdsScope: 'ExcludeRegionIdsScope',
      excludeResourceGroupIdsScope: 'ExcludeResourceGroupIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      excludeTagsScope: 'ExcludeTagsScope',
      inputParameters: 'InputParameters',
      managedRule: 'ManagedRule',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      modifiedTimestamp: 'ModifiedTimestamp',
      regionIdsScope: 'RegionIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      resourceIdsScope: 'ResourceIdsScope',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      source: 'Source',
      tagKeyLogicScope: 'TagKeyLogicScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      tagsScope: 'TagsScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      compliance: GetConfigRuleResponseBodyConfigRuleCompliance,
      configRuleArn: 'string',
      configRuleEvaluationStatus: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      configRuleTriggerTypes: 'string',
      createBy: GetConfigRuleResponseBodyConfigRuleCreateBy,
      createTimestamp: 'number',
      description: 'string',
      excludeRegionIdsScope: 'string',
      excludeResourceGroupIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      excludeTagsScope: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleExcludeTagsScope },
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRule: GetConfigRuleResponseBodyConfigRuleManagedRule,
      maximumExecutionFrequency: 'string',
      modifiedTimestamp: 'number',
      regionIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      resourceIdsScope: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      scope: GetConfigRuleResponseBodyConfigRuleScope,
      source: GetConfigRuleResponseBodyConfigRuleSource,
      tagKeyLogicScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      tagsScope: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleTagsScope },
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
  reportId?: string;
  reportStatus?: string;
  reportUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
      reportId: 'ReportId',
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      reportCreateTimestamp: 'number',
      reportId: 'string',
      reportStatus: 'string',
      reportUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigurationRecorderResponseBodyConfigurationRecorder extends $tea.Model {
  configurationRecorderStatus?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $tea.Model {
  accountId?: number;
  availabilityZone?: string;
  complianceType?: string;
  configuration?: string;
  region?: string;
  resourceCreationTime?: number;
  resourceDeleted?: number;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  resourceType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      complianceType: 'ComplianceType',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      complianceType: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
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

export class GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  groupName?: string;
  region?: string;
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      region: 'Region',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      region: 'string',
      resourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  groupName?: string;
  resourceCount?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      resourceCount: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBodyManagedRuleScope extends $tea.Model {
  complianceResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBodyManagedRuleSourceDetails extends $tea.Model {
  maximumExecutionFrequency?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetManagedRuleResponseBodyManagedRule extends $tea.Model {
  compulsoryInputParameterDetails?: { [key: string]: any };
  configRuleName?: string;
  description?: string;
  helpUrls?: string;
  identifier?: string;
  labels?: string[];
  optionalInputParameterDetails?: { [key: string]: any };
  riskLevel?: number;
  scope?: GetManagedRuleResponseBodyManagedRuleScope;
  sourceDetails?: GetManagedRuleResponseBodyManagedRuleSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      helpUrls: 'HelpUrls',
      identifier: 'Identifier',
      labels: 'Labels',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configRuleName: 'string',
      description: 'string',
      helpUrls: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      riskLevel: 'number',
      scope: GetManagedRuleResponseBodyManagedRuleScope,
      sourceDetails: { 'type': 'array', 'itemType': GetManagedRuleResponseBodyManagedRuleSourceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRemediationTemplateResponseBodyRemediationTemplates extends $tea.Model {
  managedRuleIdentifier?: string;
  remediationType?: string;
  templateDefinition?: string;
  templateDescription?: string;
  templateIdentifier?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      remediationType: 'RemediationType',
      templateDefinition: 'TemplateDefinition',
      templateDescription: 'TemplateDescription',
      templateIdentifier: 'TemplateIdentifier',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      remediationType: 'string',
      templateDefinition: 'string',
      templateDescription: 'string',
      templateIdentifier: 'string',
      templateName: 'string',
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

export class GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances extends $tea.Model {
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

export class GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList extends $tea.Model {
  compliances?: GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByRegionResponseBodyComplianceResult extends $tea.Model {
  complianceResultList?: GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances extends $tea.Model {
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

export class GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList extends $tea.Model {
  compliances?: GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResult extends $tea.Model {
  complianceResultList?: GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList },
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
  downloadUrl?: string;
  resourceInventoryGenerateTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      resourceInventoryGenerateTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList extends $tea.Model {
  relationType?: string;
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      targetResourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreAggregateEvaluationResultsRequestResources extends $tea.Model {
  region?: string;
  resourceAccountId?: number;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreEvaluationResultsRequestResources extends $tea.Model {
  region?: string;
  resourceAccountId?: number;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
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

export class ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels extends $tea.Model {
  accountId?: number;
  aggregatorId?: string;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
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
  ignoreDate?: string;
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
      ignoreDate: 'IgnoreDate',
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
      ignoreDate: 'string',
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

export class ListAggregateConfigRuleEvaluationStatisticsResponseBodyEvaluationResults extends $tea.Model {
  aggregatorId?: string;
  nonCompliantResourceCnt?: number;
  nonCompliantRuleCnt?: number;
  statisticDate?: string;
  totalResourceCnt?: number;
  totalRuleCnt?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      nonCompliantResourceCnt: 'NonCompliantResourceCnt',
      nonCompliantRuleCnt: 'NonCompliantRuleCnt',
      statisticDate: 'StatisticDate',
      totalResourceCnt: 'TotalResourceCnt',
      totalRuleCnt: 'TotalRuleCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      nonCompliantResourceCnt: 'number',
      nonCompliantRuleCnt: 'number',
      statisticDate: 'string',
      totalResourceCnt: 'number',
      totalRuleCnt: 'number',
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

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags extends $tea.Model {
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
  resourceTypesScope?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tags?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags[];
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
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tags: 'Tags',
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
      resourceTypesScope: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tags: { 'type': 'array', 'itemType': ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags },
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

export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList extends $tea.Model {
  accountId?: number;
  availabilityZone?: string;
  region?: string;
  resourceCreationTime?: number;
  resourceDeleted?: number;
  resourceId?: string;
  resourceName?: string;
  resourceOwnerId?: number;
  resourceStatus?: string;
  resourceType?: string;
  tags?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $tea.Model {
  discoveredResourceProfileList?: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfileList: 'DiscoveredResourceProfileList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions extends $tea.Model {
  executionCreateDate?: string;
  executionInvocationId?: string;
  executionResourceIds?: string;
  executionResourceType?: string;
  executionStatus?: string;
  executionStatusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      executionCreateDate: 'ExecutionCreateDate',
      executionInvocationId: 'ExecutionInvocationId',
      executionResourceIds: 'ExecutionResourceIds',
      executionResourceType: 'ExecutionResourceType',
      executionStatus: 'ExecutionStatus',
      executionStatusMessage: 'ExecutionStatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionCreateDate: 'string',
      executionInvocationId: 'string',
      executionResourceIds: 'string',
      executionResourceType: 'string',
      executionStatus: 'string',
      executionStatusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  remediationExecutions?: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      remediationExecutions: 'RemediationExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      remediationExecutions: { 'type': 'array', 'itemType': ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions },
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
  remediaitonOriginParams?: string;
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
      remediaitonOriginParams: 'RemediaitonOriginParams',
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
      remediaitonOriginParams: 'string',
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
  ignoreDate?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      ignoreDate: 'IgnoreDate',
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
      ignoreDate: 'string',
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

export class ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList extends $tea.Model {
  accountId?: number;
  relationType?: string;
  sourceResourceId?: string;
  sourceResourceRegionId?: string;
  sourceResourceType?: string;
  targetResourceId?: string;
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      relationType: 'RelationType',
      sourceResourceId: 'SourceResourceId',
      sourceResourceRegionId: 'SourceResourceRegionId',
      sourceResourceType: 'SourceResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      relationType: 'string',
      sourceResourceId: 'string',
      sourceResourceRegionId: 'string',
      sourceResourceType: 'string',
      targetResourceId: 'string',
      targetResourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceRelationsResponseBodyResourceRelations extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceRelationList?: ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceRelationList: 'ResourceRelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceRelationList: { 'type': 'array', 'itemType': ListAggregateResourceRelationsResponseBodyResourceRelationsResourceRelationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList extends $tea.Model {
  columns?: string[];
  values?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourcesByAdvancedSearchResponseBodyQueryResults extends $tea.Model {
  queryResultList?: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList;
  static names(): { [key: string]: string } {
    return {
      queryResultList: 'QueryResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResultList: ListAggregateResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList,
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
  folderId?: string;
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
      folderId: 'FolderId',
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
      folderId: 'string',
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
  controlDescription?: string;
  controlId?: string;
  defaultEnable?: boolean;
  description?: string;
  managedRuleIdentifier?: string;
  managedRuleName?: string;
  resourceTypesScope?: string;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleParameters: 'ConfigRuleParameters',
      controlDescription: 'ControlDescription',
      controlId: 'ControlId',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      managedRuleName: 'ManagedRuleName',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleParameters: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters },
      controlDescription: 'string',
      controlId: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      managedRuleIdentifier: 'string',
      managedRuleName: 'string',
      resourceTypesScope: 'string',
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
  labels?: string;
  lastUpdate?: number;
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackTemplateName: 'CompliancePackTemplateName',
      configRules: 'ConfigRules',
      description: 'Description',
      labels: 'Labels',
      lastUpdate: 'LastUpdate',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackTemplateName: 'string',
      configRules: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules },
      description: 'string',
      labels: 'string',
      lastUpdate: 'number',
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

export class ListConfigDeliveryChannelsResponseBodyDeliveryChannels extends $tea.Model {
  accountId?: number;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
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
  ignoreDate?: string;
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
      ignoreDate: 'IgnoreDate',
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
      ignoreDate: 'string',
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

export class ListConfigRuleEvaluationStatisticsResponseBodyEvaluationResults extends $tea.Model {
  nonCompliantResourceCnt?: number;
  nonCompliantRuleCnt?: number;
  statisticDate?: string;
  totalResourceCnt?: number;
  totalRuleCnt?: number;
  static names(): { [key: string]: string } {
    return {
      nonCompliantResourceCnt: 'NonCompliantResourceCnt',
      nonCompliantRuleCnt: 'NonCompliantRuleCnt',
      statisticDate: 'StatisticDate',
      totalResourceCnt: 'TotalResourceCnt',
      totalRuleCnt: 'TotalRuleCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonCompliantResourceCnt: 'number',
      nonCompliantRuleCnt: 'number',
      statisticDate: 'string',
      totalResourceCnt: 'number',
      totalRuleCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance extends $tea.Model {
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

export class ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy extends $tea.Model {
  compliancePackId?: string;
  compliancePackName?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRulesConfigRuleListTags extends $tea.Model {
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

export class ListConfigRulesResponseBodyConfigRulesConfigRuleList extends $tea.Model {
  accountId?: number;
  automationType?: string;
  compliance?: ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance;
  configRuleArn?: string;
  configRuleId?: string;
  configRuleName?: string;
  configRuleState?: string;
  createBy?: ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
  description?: string;
  resourceTypesScope?: string;
  riskLevel?: number;
  sourceIdentifier?: string;
  sourceOwner?: string;
  tags?: ListConfigRulesResponseBodyConfigRulesConfigRuleListTags[];
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
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      automationType: 'string',
      compliance: ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance,
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      createBy: ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy,
      description: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tags: { 'type': 'array', 'itemType': ListConfigRulesResponseBodyConfigRulesConfigRuleListTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRules extends $tea.Model {
  configRuleList?: ListConfigRulesResponseBodyConfigRulesConfigRuleList[];
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
      configRuleList: { 'type': 'array', 'itemType': ListConfigRulesResponseBodyConfigRulesConfigRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList extends $tea.Model {
  accountId?: number;
  availabilityZone?: string;
  region?: string;
  resourceCreationTime?: number;
  resourceDeleted?: number;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  resourceType?: string;
  tags?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $tea.Model {
  discoveredResourceProfileList?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  maxResults?: number;
  nextToken?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfileList: 'DiscoveredResourceProfileList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntegratedServiceResponseBodyData extends $tea.Model {
  integratedTypes?: string;
  serviceCode?: string;
  serviceName?: string;
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      integratedTypes: 'IntegratedTypes',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integratedTypes: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      status: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponseBodyManagedRulesManagedRuleListScope extends $tea.Model {
  complianceResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponseBodyManagedRulesManagedRuleList extends $tea.Model {
  configRuleName?: string;
  description?: string;
  helpUrls?: string;
  identifier?: string;
  labels?: string[];
  remediationTemplateIdentifier?: string;
  remediationTemplateName?: string;
  riskLevel?: number;
  scope?: ListManagedRulesResponseBodyManagedRulesManagedRuleListScope;
  supportPreviewManagedRule?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      helpUrls: 'HelpUrls',
      identifier: 'Identifier',
      labels: 'Labels',
      remediationTemplateIdentifier: 'RemediationTemplateIdentifier',
      remediationTemplateName: 'RemediationTemplateName',
      riskLevel: 'RiskLevel',
      scope: 'Scope',
      supportPreviewManagedRule: 'SupportPreviewManagedRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      helpUrls: 'string',
      identifier: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      remediationTemplateIdentifier: 'string',
      remediationTemplateName: 'string',
      riskLevel: 'number',
      scope: ListManagedRulesResponseBodyManagedRulesManagedRuleListScope,
      supportPreviewManagedRule: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManagedRulesResponseBodyManagedRules extends $tea.Model {
  managedRuleList?: ListManagedRulesResponseBodyManagedRulesManagedRuleList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      managedRuleList: 'ManagedRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleList: { 'type': 'array', 'itemType': ListManagedRulesResponseBodyManagedRulesManagedRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreManagedRulesResponseBodyManagedRules extends $tea.Model {
  compulsoryInputParameterDetails?: { [key: string]: any };
  configRuleName?: string;
  description?: string;
  helpUrls?: string;
  identifier?: string;
  optionalInputParameterDetails?: { [key: string]: any };
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      helpUrls: 'HelpUrls',
      identifier: 'Identifier',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configRuleName: 'string',
      description: 'string',
      helpUrls: 'string',
      identifier: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions extends $tea.Model {
  executionCreateDate?: string;
  executionInvocationId?: string;
  executionResourceIds?: string;
  executionResourceType?: string;
  executionStatus?: string;
  executionStatusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      executionCreateDate: 'ExecutionCreateDate',
      executionInvocationId: 'ExecutionInvocationId',
      executionResourceIds: 'ExecutionResourceIds',
      executionResourceType: 'ExecutionResourceType',
      executionStatus: 'ExecutionStatus',
      executionStatusMessage: 'ExecutionStatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionCreateDate: 'string',
      executionInvocationId: 'string',
      executionResourceIds: 'string',
      executionResourceType: 'string',
      executionStatus: 'string',
      executionStatusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationExecutionsResponseBodyRemediationExecutionData extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  remediationExecutions?: ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      remediationExecutions: 'RemediationExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      remediationExecutions: { 'type': 'array', 'itemType': ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponseBodyRemediationTemplates extends $tea.Model {
  remediationType?: string;
  templateDefinition?: string;
  templateDescription?: string;
  templateIdentifier?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      remediationType: 'RemediationType',
      templateDefinition: 'TemplateDefinition',
      templateDescription: 'TemplateDescription',
      templateIdentifier: 'TemplateIdentifier',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationType: 'string',
      templateDefinition: 'string',
      templateDescription: 'string',
      templateIdentifier: 'string',
      templateName: 'string',
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
  remediationId?: string;
  remediationOriginParams?: string;
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
      remediationId: 'RemediationId',
      remediationOriginParams: 'RemediationOriginParams',
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
      remediationId: 'string',
      remediationOriginParams: 'string',
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
  ignoreDate?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      ignoreDate: 'IgnoreDate',
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
      ignoreDate: 'string',
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

export class ListResourceRelationsResponseBodyResourceRelationsResourceRelationList extends $tea.Model {
  accountId?: number;
  relationType?: string;
  sourceResourceId?: string;
  sourceResourceRegionId?: string;
  sourceResourceType?: string;
  targetResourceId?: string;
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      relationType: 'RelationType',
      sourceResourceId: 'SourceResourceId',
      sourceResourceRegionId: 'SourceResourceRegionId',
      sourceResourceType: 'SourceResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      relationType: 'string',
      sourceResourceId: 'string',
      sourceResourceRegionId: 'string',
      sourceResourceType: 'string',
      targetResourceId: 'string',
      targetResourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceRelationsResponseBodyResourceRelations extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  resourceRelationList?: ListResourceRelationsResponseBodyResourceRelationsResourceRelationList[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceRelationList: 'ResourceRelationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceRelationList: { 'type': 'array', 'itemType': ListResourceRelationsResponseBodyResourceRelationsResourceRelationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList extends $tea.Model {
  columns?: string[];
  values?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByAdvancedSearchResponseBodyQueryResults extends $tea.Model {
  queryResultList?: ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList;
  static names(): { [key: string]: string } {
    return {
      queryResultList: 'QueryResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResultList: ListResourcesByAdvancedSearchResponseBodyQueryResultsQueryResultList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedProductsResponseBodyProductsResourceTypeList extends $tea.Model {
  resourceType?: string;
  typeNameEn?: string;
  typeNameZh?: string;
  typePageLink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      typeNameEn: 'TypeNameEn',
      typeNameZh: 'TypeNameZh',
      typePageLink: 'TypePageLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      typeNameEn: 'string',
      typeNameZh: 'string',
      typePageLink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupportedProductsResponseBodyProducts extends $tea.Model {
  productNameEn?: string;
  productNameZh?: string;
  resourceTypeList?: ListSupportedProductsResponseBodyProductsResourceTypeList[];
  static names(): { [key: string]: string } {
    return {
      productNameEn: 'ProductNameEn',
      productNameZh: 'ProductNameZh',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productNameEn: 'string',
      productNameZh: 'string',
      resourceTypeList: { 'type': 'array', 'itemType': ListSupportedProductsResponseBodyProductsResourceTypeList },
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

export class RevertAggregateEvaluationResultsRequestResources extends $tea.Model {
  region?: string;
  resourceAccountId?: number;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevertEvaluationResultsRequestResources extends $tea.Model {
  region?: string;
  resourceAccountId?: number;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceAccountId: 'ResourceAccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      resourceAccountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponseBodyConfigurationRecorder extends $tea.Model {
  configurationRecorderStatus?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
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

export class UpdateAggregateCompliancePackRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateAggregateCompliancePackRequestTagsScope extends $tea.Model {
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

export class UpdateAggregateCompliancePackShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateAggregateCompliancePackShrinkRequestTagsScope extends $tea.Model {
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

export class UpdateAggregateConfigRuleRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateAggregateConfigRuleRequestTagsScope extends $tea.Model {
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

export class UpdateAggregateConfigRuleShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateAggregateConfigRuleShrinkRequestTagsScope extends $tea.Model {
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

export class UpdateCompliancePackRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateCompliancePackRequestTagsScope extends $tea.Model {
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

export class UpdateCompliancePackShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateCompliancePackShrinkRequestTagsScope extends $tea.Model {
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

export class UpdateConfigRuleRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateConfigRuleRequestTagsScope extends $tea.Model {
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

export class UpdateConfigRuleShrinkRequestExcludeTagsScope extends $tea.Model {
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

export class UpdateConfigRuleShrinkRequestTagsScope extends $tea.Model {
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

export class UpdateConfigurationRecorderResponseBodyConfigurationRecorder extends $tea.Model {
  configurationRecorderStatus?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
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

  /**
   * @summary Enables one or more rules in an account group.
   *
   * @description This topic provides an example on how to enable the `cr-5772ba41209e007b****` rule in the `ca-a4e5626622af0079****` account group.
   *
   * @param request ActiveAggregateConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ActiveAggregateConfigRulesResponse
   */
  async activeAggregateConfigRulesWithOptions(request: ActiveAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ActiveAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new ActiveAggregateConfigRulesResponse({}));
  }

  /**
   * @summary Enables one or more rules in an account group.
   *
   * @description This topic provides an example on how to enable the `cr-5772ba41209e007b****` rule in the `ca-a4e5626622af0079****` account group.
   *
   * @param request ActiveAggregateConfigRulesRequest
   * @return ActiveAggregateConfigRulesResponse
   */
  async activeAggregateConfigRules(request: ActiveAggregateConfigRulesRequest): Promise<ActiveAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Enables multiple rules at a time so that these rules enter the Active state.
   *
   * @param request ActiveConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ActiveConfigRulesResponse
   */
  async activeConfigRulesWithOptions(request: ActiveConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ActiveConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActiveConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActiveConfigRulesResponse>(await this.callApi(params, req, runtime), new ActiveConfigRulesResponse({}));
  }

  /**
   * @summary Enables multiple rules at a time so that these rules enter the Active state.
   *
   * @param request ActiveConfigRulesRequest
   * @return ActiveConfigRulesResponse
   */
  async activeConfigRules(request: ActiveConfigRulesRequest): Promise<ActiveConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Adds one or more rules in an account group to a compliance package.
   *
   * @description The sample request in this topic shows you how to add the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group to the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request AttachAggregateConfigRuleToCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachAggregateConfigRuleToCompliancePackResponse
   */
  async attachAggregateConfigRuleToCompliancePackWithOptions(request: AttachAggregateConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<AttachAggregateConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachAggregateConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachAggregateConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new AttachAggregateConfigRuleToCompliancePackResponse({}));
  }

  /**
   * @summary Adds one or more rules in an account group to a compliance package.
   *
   * @description The sample request in this topic shows you how to add the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group to the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request AttachAggregateConfigRuleToCompliancePackRequest
   * @return AttachAggregateConfigRuleToCompliancePackResponse
   */
  async attachAggregateConfigRuleToCompliancePack(request: AttachAggregateConfigRuleToCompliancePackRequest): Promise<AttachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Adds one or more rules to a compliance package.
   *
   * @description This topic provides an example on how to add the `cr-6cc4626622af00e7****` rule to the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request AttachConfigRuleToCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AttachConfigRuleToCompliancePackResponse
   */
  async attachConfigRuleToCompliancePackWithOptions(request: AttachConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<AttachConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new AttachConfigRuleToCompliancePackResponse({}));
  }

  /**
   * @summary Adds one or more rules to a compliance package.
   *
   * @description This topic provides an example on how to add the `cr-6cc4626622af00e7****` rule to the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request AttachConfigRuleToCompliancePackRequest
   * @return AttachConfigRuleToCompliancePackResponse
   */
  async attachConfigRuleToCompliancePack(request: AttachConfigRuleToCompliancePackRequest): Promise<AttachConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Replicates compliance packages.
   *
   * @param request CopyCompliancePacksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CopyCompliancePacksResponse
   */
  async copyCompliancePacksWithOptions(request: CopyCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<CopyCompliancePacksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desAggregatorIds)) {
      query["DesAggregatorIds"] = request.desAggregatorIds;
    }

    if (!Util.isUnset(request.srcAggregatorId)) {
      query["SrcAggregatorId"] = request.srcAggregatorId;
    }

    if (!Util.isUnset(request.srcCompliancePackIds)) {
      query["SrcCompliancePackIds"] = request.srcCompliancePackIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyCompliancePacksResponse>(await this.callApi(params, req, runtime), new CopyCompliancePacksResponse({}));
  }

  /**
   * @summary Replicates compliance packages.
   *
   * @param request CopyCompliancePacksRequest
   * @return CopyCompliancePacksResponse
   */
  async copyCompliancePacks(request: CopyCompliancePacksRequest): Promise<CopyCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyCompliancePacksWithOptions(request, runtime);
  }

  /**
   * @summary Replicates rules.
   *
   * @param request CopyConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CopyConfigRulesResponse
   */
  async copyConfigRulesWithOptions(request: CopyConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<CopyConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desAggregatorIds)) {
      query["DesAggregatorIds"] = request.desAggregatorIds;
    }

    if (!Util.isUnset(request.srcAggregatorId)) {
      query["SrcAggregatorId"] = request.srcAggregatorId;
    }

    if (!Util.isUnset(request.srcConfigRuleIds)) {
      query["SrcConfigRuleIds"] = request.srcConfigRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyConfigRulesResponse>(await this.callApi(params, req, runtime), new CopyConfigRulesResponse({}));
  }

  /**
   * @summary Replicates rules.
   *
   * @param request CopyConfigRulesRequest
   * @return CopyConfigRulesResponse
   */
  async copyConfigRules(request: CopyConfigRulesRequest): Promise<CopyConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Creates a downloadable resource file for the current Alibaba Cloud account.
   *
   * @param request CreateAdvancedSearchFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAdvancedSearchFileResponse
   */
  async createAdvancedSearchFileWithOptions(request: CreateAdvancedSearchFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateAdvancedSearchFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new CreateAdvancedSearchFileResponse({}));
  }

  /**
   * @summary Creates a downloadable resource file for the current Alibaba Cloud account.
   *
   * @param request CreateAdvancedSearchFileRequest
   * @return CreateAdvancedSearchFileResponse
   */
  async createAdvancedSearchFile(request: CreateAdvancedSearchFileRequest): Promise<CreateAdvancedSearchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * @summary Creates a downloadable resource file for an account group.
   *
   * @description This topic provides an example on how to create a downloadable resource file for an account group whose ID is `ca-edd3626622af00b3****`. The resource file includes all the ECS instances in the account group.
   *
   * @param request CreateAggregateAdvancedSearchFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAggregateAdvancedSearchFileResponse
   */
  async createAggregateAdvancedSearchFileWithOptions(request: CreateAggregateAdvancedSearchFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateAdvancedSearchFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAggregateAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAggregateAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new CreateAggregateAdvancedSearchFileResponse({}));
  }

  /**
   * @summary Creates a downloadable resource file for an account group.
   *
   * @description This topic provides an example on how to create a downloadable resource file for an account group whose ID is `ca-edd3626622af00b3****`. The resource file includes all the ECS instances in the account group.
   *
   * @param request CreateAggregateAdvancedSearchFileRequest
   * @return CreateAggregateAdvancedSearchFileResponse
   */
  async createAggregateAdvancedSearchFile(request: CreateAggregateAdvancedSearchFileRequest): Promise<CreateAggregateAdvancedSearchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * @summary Creates a compliance package for an account group.
   *
   * @description You can use your management account to create up to five compliance packages for each account group.
   * This topic provides an example on how to create a compliance package named ClassifiedProtectionPreCheck for the `ca-f632626622af0079****` account group. The compliance package contains the `eip-bandwidth-limit` managed rule.
   *
   * @param tmpReq CreateAggregateCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAggregateCompliancePackResponse
   */
  async createAggregateCompliancePackWithOptions(tmpReq: CreateAggregateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!Util.isUnset(request.compliancePackTemplateId)) {
      body["CompliancePackTemplateId"] = request.compliancePackTemplateId;
    }

    if (!Util.isUnset(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!Util.isUnset(request.defaultEnable)) {
      body["DefaultEnable"] = request.defaultEnable;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    if (!Util.isUnset(request.templateContent)) {
      body["TemplateContent"] = request.templateContent;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAggregateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAggregateCompliancePackResponse>(await this.callApi(params, req, runtime), new CreateAggregateCompliancePackResponse({}));
  }

  /**
   * @summary Creates a compliance package for an account group.
   *
   * @description You can use your management account to create up to five compliance packages for each account group.
   * This topic provides an example on how to create a compliance package named ClassifiedProtectionPreCheck for the `ca-f632626622af0079****` account group. The compliance package contains the `eip-bandwidth-limit` managed rule.
   *
   * @param request CreateAggregateCompliancePackRequest
   * @return CreateAggregateCompliancePackResponse
   */
  async createAggregateCompliancePack(request: CreateAggregateCompliancePackRequest): Promise<CreateAggregateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Creates a delivery channel for an account group.
   *
   * @description In this example, a delivery channel is created for an account group. The ID of the account group is `ca-a4e5626622af0079****`. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   *
   * @param request CreateAggregateConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAggregateConfigDeliveryChannelResponse
   */
  async createAggregateConfigDeliveryChannelWithOptions(request: CreateAggregateConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!Util.isUnset(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!Util.isUnset(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!Util.isUnset(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!Util.isUnset(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!Util.isUnset(request.deliveryChannelType)) {
      query["DeliveryChannelType"] = request.deliveryChannelType;
    }

    if (!Util.isUnset(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!Util.isUnset(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new CreateAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Creates a delivery channel for an account group.
   *
   * @description In this example, a delivery channel is created for an account group. The ID of the account group is `ca-a4e5626622af0079****`. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   *
   * @param request CreateAggregateConfigDeliveryChannelRequest
   * @return CreateAggregateConfigDeliveryChannelResponse
   */
  async createAggregateConfigDeliveryChannel(request: CreateAggregateConfigDeliveryChannelRequest): Promise<CreateAggregateConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Creates a rule for an account group.
   *
   * @description ### Limits
   * You can create up to 200 rules for each management account.
   * ### Usage notes
   * This topic provides an example on how to create a rule based on the required-tags managed rule in the `ca-a4e5626622af0079****` account group. The returned result shows that the rule is created and its ID is `cr-4e3d626622af0080****`.
   *
   * @param tmpReq CreateAggregateConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAggregateConfigRuleResponse
   */
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountIdsScope)) {
      body["AccountIdsScope"] = request.accountIdsScope;
    }

    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!Util.isUnset(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeAccountIdsScope)) {
      body["ExcludeAccountIdsScope"] = request.excludeAccountIdsScope;
    }

    if (!Util.isUnset(request.excludeFolderIdsScope)) {
      body["ExcludeFolderIdsScope"] = request.excludeFolderIdsScope;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.folderIdsScope)) {
      body["FolderIdsScope"] = request.folderIdsScope;
    }

    if (!Util.isUnset(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!Util.isUnset(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.sourceIdentifier)) {
      body["SourceIdentifier"] = request.sourceIdentifier;
    }

    if (!Util.isUnset(request.sourceOwner)) {
      body["SourceOwner"] = request.sourceOwner;
    }

    if (!Util.isUnset(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAggregateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAggregateConfigRuleResponse>(await this.callApi(params, req, runtime), new CreateAggregateConfigRuleResponse({}));
  }

  /**
   * @summary Creates a rule for an account group.
   *
   * @description ### Limits
   * You can create up to 200 rules for each management account.
   * ### Usage notes
   * This topic provides an example on how to create a rule based on the required-tags managed rule in the `ca-a4e5626622af0079****` account group. The returned result shows that the rule is created and its ID is `cr-4e3d626622af0080****`.
   *
   * @param request CreateAggregateConfigRuleRequest
   * @return CreateAggregateConfigRuleResponse
   */
  async createAggregateConfigRule(request: CreateAggregateConfigRuleRequest): Promise<CreateAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Creates a remediation template for a rule in an account group.
   *
   * @description This topic provides an example on how to create a remediation template for the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
   *
   * @param request CreateAggregateRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAggregateRemediationResponse
   */
  async createAggregateRemediationWithOptions(request: CreateAggregateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregateRemediationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!Util.isUnset(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAggregateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAggregateRemediationResponse>(await this.callApi(params, req, runtime), new CreateAggregateRemediationResponse({}));
  }

  /**
   * @summary Creates a remediation template for a rule in an account group.
   *
   * @description This topic provides an example on how to create a remediation template for the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
   *
   * @param request CreateAggregateRemediationRequest
   * @return CreateAggregateRemediationResponse
   */
  async createAggregateRemediation(request: CreateAggregateRemediationRequest): Promise<CreateAggregateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * @summary Creates an account group.
   *
   * @description Each management account can create a maximum of five account groups. Each account group can contain a maximum of 200 member accounts.
   * Cloud Config supports the following types of account groups:
   * *   Global account group: The global account group contains all the member accounts that are added to the resource directory. A management account can create only one global account group.
   * *   Custom account group: If you create a custom account group, you must manually add all or specific member accounts from the resource directory to the custom account group.
   * This topic provides an example on how to create an account group of the `CUSTOM` type. The custom account group is named `Test_Group`, and its description is `Test account group`. The custom account group contains the following two member accounts:
   * *   Member account ID: `171322098523****`. Member account name: `Alice`.
   * *   Member account ID: `100532098349****`. Member account name: `Tom`.
   *
   * @param tmpReq CreateAggregatorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateAggregatorResponse
   */
  async createAggregatorWithOptions(tmpReq: CreateAggregatorRequest, runtime: $Util.RuntimeOptions): Promise<CreateAggregatorResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aggregatorAccounts)) {
      request.aggregatorAccountsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregatorAccounts, "AggregatorAccounts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorAccountsShrink)) {
      body["AggregatorAccounts"] = request.aggregatorAccountsShrink;
    }

    if (!Util.isUnset(request.aggregatorName)) {
      body["AggregatorName"] = request.aggregatorName;
    }

    if (!Util.isUnset(request.aggregatorType)) {
      body["AggregatorType"] = request.aggregatorType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAggregator",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAggregatorResponse>(await this.callApi(params, req, runtime), new CreateAggregatorResponse({}));
  }

  /**
   * @summary Creates an account group.
   *
   * @description Each management account can create a maximum of five account groups. Each account group can contain a maximum of 200 member accounts.
   * Cloud Config supports the following types of account groups:
   * *   Global account group: The global account group contains all the member accounts that are added to the resource directory. A management account can create only one global account group.
   * *   Custom account group: If you create a custom account group, you must manually add all or specific member accounts from the resource directory to the custom account group.
   * This topic provides an example on how to create an account group of the `CUSTOM` type. The custom account group is named `Test_Group`, and its description is `Test account group`. The custom account group contains the following two member accounts:
   * *   Member account ID: `171322098523****`. Member account name: `Alice`.
   * *   Member account ID: `100532098349****`. Member account name: `Tom`.
   *
   * @param request CreateAggregatorRequest
   * @return CreateAggregatorResponse
   */
  async createAggregator(request: CreateAggregatorRequest): Promise<CreateAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAggregatorWithOptions(request, runtime);
  }

  /**
   * @summary Creates a compliance package for the current account.
   *
   * @description Each ordinary account can create up to five compliance packages.
   * This topic provides an example on how to create a compliance package named ClassifiedProtectionPreCheck. The compliance package contains a managed rule named `eip-bandwidth-limit`.
   *
   * @param tmpReq CreateCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCompliancePackResponse
   */
  async createCompliancePackWithOptions(tmpReq: CreateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<CreateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!Util.isUnset(request.compliancePackTemplateId)) {
      body["CompliancePackTemplateId"] = request.compliancePackTemplateId;
    }

    if (!Util.isUnset(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!Util.isUnset(request.defaultEnable)) {
      body["DefaultEnable"] = request.defaultEnable;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    if (!Util.isUnset(request.templateContent)) {
      body["TemplateContent"] = request.templateContent;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCompliancePackResponse>(await this.callApi(params, req, runtime), new CreateCompliancePackResponse({}));
  }

  /**
   * @summary Creates a compliance package for the current account.
   *
   * @description Each ordinary account can create up to five compliance packages.
   * This topic provides an example on how to create a compliance package named ClassifiedProtectionPreCheck. The compliance package contains a managed rule named `eip-bandwidth-limit`.
   *
   * @param request CreateCompliancePackRequest
   * @return CreateCompliancePackResponse
   */
  async createCompliancePack(request: CreateCompliancePackRequest): Promise<CreateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Creates a delivery channel.
   *
   * @description In this example, a delivery channel is created. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   *
   * @param request CreateConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigDeliveryChannelResponse
   */
  async createConfigDeliveryChannelWithOptions(request: CreateConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!Util.isUnset(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!Util.isUnset(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!Util.isUnset(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!Util.isUnset(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!Util.isUnset(request.deliveryChannelType)) {
      query["DeliveryChannelType"] = request.deliveryChannelType;
    }

    if (!Util.isUnset(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!Util.isUnset(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new CreateConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Creates a delivery channel.
   *
   * @description In this example, a delivery channel is created. The type of the delivery channel is `OSS` and the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`. The result indicates that the delivery channel is created, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   *
   * @param request CreateConfigDeliveryChannelRequest
   * @return CreateConfigDeliveryChannelResponse
   */
  async createConfigDeliveryChannel(request: CreateConfigDeliveryChannelRequest): Promise<CreateConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Creates a rule for the current account.
   *
   * @description ## Limits
   * You can use a common account to create up to 200 rules.
   *
   * @param tmpReq CreateConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConfigRuleResponse
   */
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!Util.isUnset(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!Util.isUnset(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.sourceIdentifier)) {
      body["SourceIdentifier"] = request.sourceIdentifier;
    }

    if (!Util.isUnset(request.sourceOwner)) {
      body["SourceOwner"] = request.sourceOwner;
    }

    if (!Util.isUnset(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConfigRuleResponse>(await this.callApi(params, req, runtime), new CreateConfigRuleResponse({}));
  }

  /**
   * @summary Creates a rule for the current account.
   *
   * @description ## Limits
   * You can use a common account to create up to 200 rules.
   *
   * @param request CreateConfigRuleRequest
   * @return CreateConfigRuleResponse
   */
  async createConfigRule(request: CreateConfigRuleRequest): Promise<CreateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConfigRuleWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateDeliveryChannel is deprecated, please use Config::2020-09-07::CreateConfigDeliveryChannel,Config::2020-09-07::CreateAggregateConfigDeliveryChannel instead.
   *
   * @summary Creates a delivery channel.
   *
   * @description In this example, a delivery channel is created. The type of the delivery channel is `OSS`, the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`, and the ARN of the role that is assigned to the delivery channel is `acs:ram::100931896542****:role/aliyunserviceroleforconfig`. The returned result shows that the delivery channel is created, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   *
   * @param request CreateDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDeliveryChannelResponse
   */
  // Deprecated
  async createDeliveryChannelWithOptions(request: CreateDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeliveryChannelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationItemChangeNotification)) {
      body["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!Util.isUnset(request.configurationSnapshot)) {
      body["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!Util.isUnset(request.deliveryChannelAssumeRoleArn)) {
      body["DeliveryChannelAssumeRoleArn"] = request.deliveryChannelAssumeRoleArn;
    }

    if (!Util.isUnset(request.deliveryChannelCondition)) {
      body["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!Util.isUnset(request.deliveryChannelName)) {
      body["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!Util.isUnset(request.deliveryChannelTargetArn)) {
      body["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!Util.isUnset(request.deliveryChannelType)) {
      body["DeliveryChannelType"] = request.deliveryChannelType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.nonCompliantNotification)) {
      body["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!Util.isUnset(request.oversizedDataOSSTargetArn)) {
      body["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeliveryChannelResponse>(await this.callApi(params, req, runtime), new CreateDeliveryChannelResponse({}));
  }

  /**
   * @deprecated OpenAPI CreateDeliveryChannel is deprecated, please use Config::2020-09-07::CreateConfigDeliveryChannel,Config::2020-09-07::CreateAggregateConfigDeliveryChannel instead.
   *
   * @summary Creates a delivery channel.
   *
   * @description In this example, a delivery channel is created. The type of the delivery channel is `OSS`, the Alibaba Cloud Resource Name (ARN) of the delivery destination is `acs:oss:cn-shanghai:100931896542****:new-bucket`, and the ARN of the role that is assigned to the delivery channel is `acs:ram::100931896542****:role/aliyunserviceroleforconfig`. The returned result shows that the delivery channel is created, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`.
   *
   * @param request CreateDeliveryChannelRequest
   * @return CreateDeliveryChannelResponse
   */
  // Deprecated
  async createDeliveryChannel(request: CreateDeliveryChannelRequest): Promise<CreateDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Creates a remediation template for a rule.
   *
   * @description This topic provides an example on how to create a remediation template for the rule `cr-8a973ac2e2be00a2****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
   *
   * @param request CreateRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRemediationResponse
   */
  async createRemediationWithOptions(request: CreateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<CreateRemediationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!Util.isUnset(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRemediationResponse>(await this.callApi(params, req, runtime), new CreateRemediationResponse({}));
  }

  /**
   * @summary Creates a remediation template for a rule.
   *
   * @description This topic provides an example on how to create a remediation template for the rule `cr-8a973ac2e2be00a2****`. The returned result shows that a remediation template is created and the ID of the remediation template is `crr-909ba2d4716700eb****`.
   *
   * @param request CreateRemediationRequest
   * @return CreateRemediationResponse
   */
  async createRemediation(request: CreateRemediationRequest): Promise<CreateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRemediationWithOptions(request, runtime);
  }

  /**
   * @summary Disables one or more rules in an account group.
   *
   * @description This topic provides an example on how to disable the `cr-5772ba41209e007b****` rule in the `ca-04b3fd170e340007****` account group.
   *
   * @param request DeactiveAggregateConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeactiveAggregateConfigRulesResponse
   */
  async deactiveAggregateConfigRulesWithOptions(request: DeactiveAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeactiveAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeactiveAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new DeactiveAggregateConfigRulesResponse({}));
  }

  /**
   * @summary Disables one or more rules in an account group.
   *
   * @description This topic provides an example on how to disable the `cr-5772ba41209e007b****` rule in the `ca-04b3fd170e340007****` account group.
   *
   * @param request DeactiveAggregateConfigRulesRequest
   * @return DeactiveAggregateConfigRulesResponse
   */
  async deactiveAggregateConfigRules(request: DeactiveAggregateConfigRulesRequest): Promise<DeactiveAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Disables one or more rules.
   *
   * @description In this example, the `cr-19a56457e0d90058****` rule is used.
   *
   * @param request DeactiveConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeactiveConfigRulesResponse
   */
  async deactiveConfigRulesWithOptions(request: DeactiveConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeactiveConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeactiveConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeactiveConfigRulesResponse>(await this.callApi(params, req, runtime), new DeactiveConfigRulesResponse({}));
  }

  /**
   * @summary Disables one or more rules.
   *
   * @description In this example, the `cr-19a56457e0d90058****` rule is used.
   *
   * @param request DeactiveConfigRulesRequest
   * @return DeactiveConfigRulesResponse
   */
  async deactiveConfigRules(request: DeactiveConfigRulesRequest): Promise<DeactiveConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deactiveConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes the compliance packages of an account group.
   *
   * @description This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package from the `ca-04b3fd170e340007****` account group.
   *
   * @param request DeleteAggregateCompliancePacksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAggregateCompliancePacksResponse
   */
  async deleteAggregateCompliancePacksWithOptions(request: DeleteAggregateCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateCompliancePacksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackIds)) {
      body["CompliancePackIds"] = request.compliancePackIds;
    }

    if (!Util.isUnset(request.deleteRule)) {
      body["DeleteRule"] = request.deleteRule;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAggregateCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAggregateCompliancePacksResponse>(await this.callApi(params, req, runtime), new DeleteAggregateCompliancePacksResponse({}));
  }

  /**
   * @summary Deletes the compliance packages of an account group.
   *
   * @description This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package from the `ca-04b3fd170e340007****` account group.
   *
   * @param request DeleteAggregateCompliancePacksRequest
   * @return DeleteAggregateCompliancePacksResponse
   */
  async deleteAggregateCompliancePacks(request: DeleteAggregateCompliancePacksRequest): Promise<DeleteAggregateCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateCompliancePacksWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a delivery channel from an account group.
   *
   * @description This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel from the `ca-23c6626622af0041****` account group. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
   *
   * @param request DeleteAggregateConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAggregateConfigDeliveryChannelResponse
   */
  async deleteAggregateConfigDeliveryChannelWithOptions(request: DeleteAggregateConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new DeleteAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Deletes a delivery channel from an account group.
   *
   * @description This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel from the `ca-23c6626622af0041****` account group. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
   *
   * @param request DeleteAggregateConfigDeliveryChannelRequest
   * @return DeleteAggregateConfigDeliveryChannelResponse
   */
  async deleteAggregateConfigDeliveryChannel(request: DeleteAggregateConfigDeliveryChannelRequest): Promise<DeleteAggregateConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Deletes one or more rules from an account group.
   *
   * @description ### Background information
   * You can delete a rule in the Cloud Config console. After you delete the rule, the configurations of the rule are deleted.
   * ### Usage notes
   * This topic provides an example on how to delete the `cr-4e3d626622af0080****` rule from the `ca-a4e5626622af0079****` account group.
   *
   * @param request DeleteAggregateConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAggregateConfigRulesResponse
   */
  async deleteAggregateConfigRulesWithOptions(request: DeleteAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new DeleteAggregateConfigRulesResponse({}));
  }

  /**
   * @summary Deletes one or more rules from an account group.
   *
   * @description ### Background information
   * You can delete a rule in the Cloud Config console. After you delete the rule, the configurations of the rule are deleted.
   * ### Usage notes
   * This topic provides an example on how to delete the `cr-4e3d626622af0080****` rule from the `ca-a4e5626622af0079****` account group.
   *
   * @param request DeleteAggregateConfigRulesRequest
   * @return DeleteAggregateConfigRulesResponse
   */
  async deleteAggregateConfigRules(request: DeleteAggregateConfigRulesRequest): Promise<DeleteAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes one or more remediation templates from a rule in an account group.
   *
   * @description This topic provides an example on how to delete the remediation template whose ID is `crr-909ba2d4716700eb****` from the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
   *
   * @param request DeleteAggregateRemediationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAggregateRemediationsResponse
   */
  async deleteAggregateRemediationsWithOptions(request: DeleteAggregateRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregateRemediationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.remediationIds)) {
      body["RemediationIds"] = request.remediationIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAggregateRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAggregateRemediationsResponse>(await this.callApi(params, req, runtime), new DeleteAggregateRemediationsResponse({}));
  }

  /**
   * @summary Deletes one or more remediation templates from a rule in an account group.
   *
   * @description This topic provides an example on how to delete the remediation template whose ID is `crr-909ba2d4716700eb****` from the account group whose ID is `ca-6b4a626622af0012****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
   *
   * @param request DeleteAggregateRemediationsRequest
   * @return DeleteAggregateRemediationsResponse
   */
  async deleteAggregateRemediations(request: DeleteAggregateRemediationsRequest): Promise<DeleteAggregateRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregateRemediationsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an account group.
   *
   * @description This topic provides an example on how to delete the account group whose ID is `ca-9190626622af00a9****`.
   *
   * @param request DeleteAggregatorsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteAggregatorsResponse
   */
  async deleteAggregatorsWithOptions(request: DeleteAggregatorsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAggregatorsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorIds)) {
      body["AggregatorIds"] = request.aggregatorIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAggregators",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAggregatorsResponse>(await this.callApi(params, req, runtime), new DeleteAggregatorsResponse({}));
  }

  /**
   * @summary Deletes an account group.
   *
   * @description This topic provides an example on how to delete the account group whose ID is `ca-9190626622af00a9****`.
   *
   * @param request DeleteAggregatorsRequest
   * @return DeleteAggregatorsResponse
   */
  async deleteAggregators(request: DeleteAggregatorsRequest): Promise<DeleteAggregatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAggregatorsWithOptions(request, runtime);
  }

  /**
   * @summary Deletes one or more compliance packages.
   *
   * @description This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package.
   *
   * @param request DeleteCompliancePacksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCompliancePacksResponse
   */
  async deleteCompliancePacksWithOptions(request: DeleteCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCompliancePacksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackIds)) {
      body["CompliancePackIds"] = request.compliancePackIds;
    }

    if (!Util.isUnset(request.deleteRule)) {
      body["DeleteRule"] = request.deleteRule;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCompliancePacksResponse>(await this.callApi(params, req, runtime), new DeleteCompliancePacksResponse({}));
  }

  /**
   * @summary Deletes one or more compliance packages.
   *
   * @description This topic provides an example on how to delete the `cp-541e626622af0087****` compliance package.
   *
   * @param request DeleteCompliancePacksRequest
   * @return DeleteCompliancePacksResponse
   */
  async deleteCompliancePacks(request: DeleteCompliancePacksRequest): Promise<DeleteCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCompliancePacksWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a delivery channel.
   *
   * @description This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
   *
   * @param request DeleteConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConfigDeliveryChannelResponse
   */
  async deleteConfigDeliveryChannelWithOptions(request: DeleteConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new DeleteConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Deletes a delivery channel.
   *
   * @description This topic provides an example on how to delete the `cdc-38c3013b46c9002c****` delivery channel. The returned result shows that the `cdc-38c3013b46c9002c****` delivery channel is deleted.
   *
   * @param request DeleteConfigDeliveryChannelRequest
   * @return DeleteConfigDeliveryChannelResponse
   */
  async deleteConfigDeliveryChannel(request: DeleteConfigDeliveryChannelRequest): Promise<DeleteConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Deletes rules.
   *
   * @description In this example, the rule whose ID is cr-9908626622af0035\\*\\*\\*\\* is deleted.
   *
   * @param request DeleteConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConfigRulesResponse
   */
  async deleteConfigRulesWithOptions(request: DeleteConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConfigRulesResponse>(await this.callApi(params, req, runtime), new DeleteConfigRulesResponse({}));
  }

  /**
   * @summary Deletes rules.
   *
   * @description In this example, the rule whose ID is cr-9908626622af0035\\*\\*\\*\\* is deleted.
   *
   * @param request DeleteConfigRulesRequest
   * @return DeleteConfigRulesResponse
   */
  async deleteConfigRules(request: DeleteConfigRulesRequest): Promise<DeleteConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Deletes one or more configured remediation templates that are associated with a rule.
   *
   * @description This topic provides an example on how to delete the remediation template `crr-909ba2d4716700eb****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
   *
   * @param request DeleteRemediationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRemediationsResponse
   */
  async deleteRemediationsWithOptions(request: DeleteRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRemediationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.remediationIds)) {
      body["RemediationIds"] = request.remediationIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRemediationsResponse>(await this.callApi(params, req, runtime), new DeleteRemediationsResponse({}));
  }

  /**
   * @summary Deletes one or more configured remediation templates that are associated with a rule.
   *
   * @description This topic provides an example on how to delete the remediation template `crr-909ba2d4716700eb****`. The returned result shows that the remediation template whose ID is `crr-909ba2d4716700eb****` is deleted.
   *
   * @param request DeleteRemediationsRequest
   * @return DeleteRemediationsResponse
   */
  async deleteRemediations(request: DeleteRemediationsRequest): Promise<DeleteRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRemediationsWithOptions(request, runtime);
  }

  /**
   * @summary This topic provides an example on how to query the details of a remediation configuration whose ID is crr-f381cf0c1c2f004e\\*\\*\\*\\*.
   *
   * @param request DescribeRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRemediationResponse
   */
  async describeRemediationWithOptions(request: DescribeRemediationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRemediationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRemediationResponse>(await this.callApi(params, req, runtime), new DescribeRemediationResponse({}));
  }

  /**
   * @summary This topic provides an example on how to query the details of a remediation configuration whose ID is crr-f381cf0c1c2f004e\\*\\*\\*\\*.
   *
   * @param request DescribeRemediationRequest
   * @return DescribeRemediationResponse
   */
  async describeRemediation(request: DescribeRemediationRequest): Promise<DescribeRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRemediationWithOptions(request, runtime);
  }

  /**
   * @summary Removes one or more rules in an account group from a compliance package.
   *
   * @description ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * The sample request in this topic shows you how to remove the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group from the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request DetachAggregateConfigRuleToCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachAggregateConfigRuleToCompliancePackResponse
   */
  async detachAggregateConfigRuleToCompliancePackWithOptions(request: DetachAggregateConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<DetachAggregateConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachAggregateConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachAggregateConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new DetachAggregateConfigRuleToCompliancePackResponse({}));
  }

  /**
   * @summary Removes one or more rules in an account group from a compliance package.
   *
   * @description ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * The sample request in this topic shows you how to remove the `cr-6cc4626622af00e7****` rule in the `ca-75b4626622af00c3****` account group from the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request DetachAggregateConfigRuleToCompliancePackRequest
   * @return DetachAggregateConfigRuleToCompliancePackResponse
   */
  async detachAggregateConfigRuleToCompliancePack(request: DetachAggregateConfigRuleToCompliancePackRequest): Promise<DetachAggregateConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachAggregateConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Removes one or more rules from a compliance package.
   *
   * @description ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * This topic provides an example on how to remove the `cr-6cc4626622af00e7****` rule from the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request DetachConfigRuleToCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DetachConfigRuleToCompliancePackResponse
   */
  async detachConfigRuleToCompliancePackWithOptions(request: DetachConfigRuleToCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<DetachConfigRuleToCompliancePackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachConfigRuleToCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachConfigRuleToCompliancePackResponse>(await this.callApi(params, req, runtime), new DetachConfigRuleToCompliancePackResponse({}));
  }

  /**
   * @summary Removes one or more rules from a compliance package.
   *
   * @description ### Prerequisites
   * One or more rules are added to a compliance package.
   * ### Usage notes
   * This topic provides an example on how to remove the `cr-6cc4626622af00e7****` rule from the `cp-5bb1626622af00bd****` compliance package.
   *
   * @param request DetachConfigRuleToCompliancePackRequest
   * @return DetachConfigRuleToCompliancePackResponse
   */
  async detachConfigRuleToCompliancePack(request: DetachConfigRuleToCompliancePackRequest): Promise<DetachConfigRuleToCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachConfigRuleToCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Executes evaluation rules to evaluate resources.
   *
   * @param tmpReq EvaluatePreConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EvaluatePreConfigRulesResponse
   */
  async evaluatePreConfigRulesWithOptions(tmpReq: EvaluatePreConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<EvaluatePreConfigRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new EvaluatePreConfigRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceEvaluateItems)) {
      request.resourceEvaluateItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceEvaluateItems, "ResourceEvaluateItems", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableManagedRules)) {
      body["EnableManagedRules"] = request.enableManagedRules;
    }

    if (!Util.isUnset(request.resourceEvaluateItemsShrink)) {
      body["ResourceEvaluateItems"] = request.resourceEvaluateItemsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EvaluatePreConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EvaluatePreConfigRulesResponse>(await this.callApi(params, req, runtime), new EvaluatePreConfigRulesResponse({}));
  }

  /**
   * @summary Executes evaluation rules to evaluate resources.
   *
   * @param request EvaluatePreConfigRulesRequest
   * @return EvaluatePreConfigRulesResponse
   */
  async evaluatePreConfigRules(request: EvaluatePreConfigRulesRequest): Promise<EvaluatePreConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.evaluatePreConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Generates a compliance evaluation report based on a compliance package in an account group.
   *
   * @description > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262699.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   *
   * @param request GenerateAggregateCompliancePackReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateAggregateCompliancePackReportResponse
   */
  async generateAggregateCompliancePackReportWithOptions(request: GenerateAggregateCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAggregateCompliancePackReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAggregateCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateAggregateCompliancePackReportResponse>(await this.callApi(params, req, runtime), new GenerateAggregateCompliancePackReportResponse({}));
  }

  /**
   * @summary Generates a compliance evaluation report based on a compliance package in an account group.
   *
   * @description > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262699.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   *
   * @param request GenerateAggregateCompliancePackReportRequest
   * @return GenerateAggregateCompliancePackReportResponse
   */
  async generateAggregateCompliancePackReport(request: GenerateAggregateCompliancePackReportRequest): Promise<GenerateAggregateCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAggregateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * @summary Generates a compliance evaluation report based on all rules in an account group.
   *
   * @description > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262706.html).
   * The topic provides an example on how to generate a compliance evaluation report based on all rules in the `ca-f632626622af0079****` account group.
   *
   * @param request GenerateAggregateConfigRulesReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateAggregateConfigRulesReportResponse
   */
  async generateAggregateConfigRulesReportWithOptions(request: GenerateAggregateConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAggregateConfigRulesReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      body["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAggregateConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateAggregateConfigRulesReportResponse>(await this.callApi(params, req, runtime), new GenerateAggregateConfigRulesReportResponse({}));
  }

  /**
   * @summary Generates a compliance evaluation report based on all rules in an account group.
   *
   * @description > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetAggregateConfigRulesReport operation. For more information, see [GetAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262706.html).
   * The topic provides an example on how to generate a compliance evaluation report based on all rules in the `ca-f632626622af0079****` account group.
   *
   * @param request GenerateAggregateConfigRulesReportRequest
   * @return GenerateAggregateConfigRulesReportResponse
   */
  async generateAggregateConfigRulesReport(request: GenerateAggregateConfigRulesReportRequest): Promise<GenerateAggregateConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAggregateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * @summary Generates a downloadable inventory for global resources in an account group.
   *
   * @description This topic provides an example to show how to generate a downloadable inventory for global resources in the account group ca-a91d626622af0035\\*\\*\\*\\*.
   *
   * @param request GenerateAggregateResourceInventoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateAggregateResourceInventoryResponse
   */
  async generateAggregateResourceInventoryWithOptions(request: GenerateAggregateResourceInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAggregateResourceInventoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAggregateResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateAggregateResourceInventoryResponse>(await this.callApi(params, req, runtime), new GenerateAggregateResourceInventoryResponse({}));
  }

  /**
   * @summary Generates a downloadable inventory for global resources in an account group.
   *
   * @description This topic provides an example to show how to generate a downloadable inventory for global resources in the account group ca-a91d626622af0035\\*\\*\\*\\*.
   *
   * @param request GenerateAggregateResourceInventoryRequest
   * @return GenerateAggregateResourceInventoryResponse
   */
  async generateAggregateResourceInventory(request: GenerateAggregateResourceInventoryRequest): Promise<GenerateAggregateResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAggregateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * @summary Generates a compliance evaluation report based on a compliance package.
   *
   * @description > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetCompliancePackReport operation. For more information, see [GetCompliancePackReport](https://help.aliyun.com/document_detail/263347.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-a8a8626622af0082****` compliance package.
   *
   * @param request GenerateCompliancePackReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateCompliancePackReportResponse
   */
  async generateCompliancePackReportWithOptions(request: GenerateCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateCompliancePackReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateCompliancePackReportResponse>(await this.callApi(params, req, runtime), new GenerateCompliancePackReportResponse({}));
  }

  /**
   * @summary Generates a compliance evaluation report based on a compliance package.
   *
   * @description > You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetCompliancePackReport operation. For more information, see [GetCompliancePackReport](https://help.aliyun.com/document_detail/263347.html).
   * This topic provides an example on how to generate a compliance evaluation report based on the `cp-a8a8626622af0082****` compliance package.
   *
   * @param request GenerateCompliancePackReportRequest
   * @return GenerateCompliancePackReportResponse
   */
  async generateCompliancePackReport(request: GenerateCompliancePackReportRequest): Promise<GenerateCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * @summary Generates a compliance evaluation report based on all existing rules.
   *
   * @description >  You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetConfigRulesReport operation. For more information, see [GetConfigRulesReport](https://help.aliyun.com/document_detail/263608.html).
   * This topic provides an example of how to generate a compliance evaluation report based on all existing rules.
   *
   * @param request GenerateConfigRulesReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateConfigRulesReportResponse
   */
  async generateConfigRulesReportWithOptions(request: GenerateConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateConfigRulesReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      body["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateConfigRulesReportResponse>(await this.callApi(params, req, runtime), new GenerateConfigRulesReportResponse({}));
  }

  /**
   * @summary Generates a compliance evaluation report based on all existing rules.
   *
   * @description >  You can call this operation to generate the latest compliance evaluation report. To download the report, call the GetConfigRulesReport operation. For more information, see [GetConfigRulesReport](https://help.aliyun.com/document_detail/263608.html).
   * This topic provides an example of how to generate a compliance evaluation report based on all existing rules.
   *
   * @param request GenerateConfigRulesReportRequest
   * @return GenerateConfigRulesReportResponse
   */
  async generateConfigRulesReport(request: GenerateConfigRulesReportRequest): Promise<GenerateConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * @summary Generates a resource inventory for global resources.
   *
   * @description This topic provides an example on how to generate a resource inventory for global resources of the current account.
   *
   * @param request GenerateResourceInventoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateResourceInventoryResponse
   */
  async generateResourceInventoryWithOptions(request: GenerateResourceInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GenerateResourceInventoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateResourceInventoryResponse>(await this.callApi(params, req, runtime), new GenerateResourceInventoryResponse({}));
  }

  /**
   * @summary Generates a resource inventory for global resources.
   *
   * @description This topic provides an example on how to generate a resource inventory for global resources of the current account.
   *
   * @param request GenerateResourceInventoryRequest
   * @return GenerateResourceInventoryResponse
   */
  async generateResourceInventory(request: GenerateResourceInventoryRequest): Promise<GenerateResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the last resource advanced search file that is generated within the current account. You can call this operation to obtain the URL of the resource advanced search file.
   *
   * @description ### [](#)Prerequisites
   * You must call the [CreateAdvancedSearchFile](https://help.aliyun.com/document_detail/2511967.html) operation to create a resource advanced search file. Then, you can call this operation to obtain the URL of the resource advanced search file.
   *
   * @param request GetAdvancedSearchFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAdvancedSearchFileResponse
   */
  async getAdvancedSearchFileWithOptions(runtime: $Util.RuntimeOptions): Promise<GetAdvancedSearchFileResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new GetAdvancedSearchFileResponse({}));
  }

  /**
   * @summary Obtains the last resource advanced search file that is generated within the current account. You can call this operation to obtain the URL of the resource advanced search file.
   *
   * @description ### [](#)Prerequisites
   * You must call the [CreateAdvancedSearchFile](https://help.aliyun.com/document_detail/2511967.html) operation to create a resource advanced search file. Then, you can call this operation to obtain the URL of the resource advanced search file.
   *
   * @return GetAdvancedSearchFileResponse
   */
  async getAdvancedSearchFile(): Promise<GetAdvancedSearchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAdvancedSearchFileWithOptions(runtime);
  }

  /**
   * @summary Queries the compliance evaluation results of member accounts for which a compliance package takes effect in an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of member accounts for which the `cp-541e626622af0087****` compliance package takes effect in the `ca-04b3fd170e340007****` account group. The returned result shows that two member accounts are monitored by the compliance package and they are both evaluated as compliant.
   *
   * @param request GetAggregateAccountComplianceByPackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateAccountComplianceByPackResponse
   */
  async getAggregateAccountComplianceByPackWithOptions(request: GetAggregateAccountComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateAccountComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateAccountComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateAccountComplianceByPackResponse>(await this.callApi(params, req, runtime), new GetAggregateAccountComplianceByPackResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation results of member accounts for which a compliance package takes effect in an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of member accounts for which the `cp-541e626622af0087****` compliance package takes effect in the `ca-04b3fd170e340007****` account group. The returned result shows that two member accounts are monitored by the compliance package and they are both evaluated as compliant.
   *
   * @param request GetAggregateAccountComplianceByPackRequest
   * @return GetAggregateAccountComplianceByPackResponse
   */
  async getAggregateAccountComplianceByPack(request: GetAggregateAccountComplianceByPackRequest): Promise<GetAggregateAccountComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateAccountComplianceByPackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the most recently generated resource file of an account group.
   *
   * @param request GetAggregateAdvancedSearchFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateAdvancedSearchFileResponse
   */
  async getAggregateAdvancedSearchFileWithOptions(request: GetAggregateAdvancedSearchFileRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateAdvancedSearchFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateAdvancedSearchFile",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateAdvancedSearchFileResponse>(await this.callApi(params, req, runtime), new GetAggregateAdvancedSearchFileResponse({}));
  }

  /**
   * @summary Queries the most recently generated resource file of an account group.
   *
   * @param request GetAggregateAdvancedSearchFileRequest
   * @return GetAggregateAdvancedSearchFileResponse
   */
  async getAggregateAdvancedSearchFile(request: GetAggregateAdvancedSearchFileRequest): Promise<GetAggregateAdvancedSearchFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateAdvancedSearchFileWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a compliance package in an account group.
   *
   * @description The topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****` in an account group whose ID is `ca-f632626622af0079****`.
   *
   * @param request GetAggregateCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateCompliancePackResponse
   */
  async getAggregateCompliancePackWithOptions(request: GetAggregateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateCompliancePackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateCompliancePackResponse>(await this.callApi(params, req, runtime), new GetAggregateCompliancePackResponse({}));
  }

  /**
   * @summary Queries the details of a compliance package in an account group.
   *
   * @description The topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****` in an account group whose ID is `ca-f632626622af0079****`.
   *
   * @param request GetAggregateCompliancePackRequest
   * @return GetAggregateCompliancePackResponse
   */
  async getAggregateCompliancePack(request: GetAggregateCompliancePackRequest): Promise<GetAggregateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on a compliance package of an account group.
   *
   * @description > Before you call this operation, you must call the GenerateAggregateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262687.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   *
   * @param request GetAggregateCompliancePackReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateCompliancePackReportResponse
   */
  async getAggregateCompliancePackReportWithOptions(request: GetAggregateCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateCompliancePackReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateCompliancePackReportResponse>(await this.callApi(params, req, runtime), new GetAggregateCompliancePackReportResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on a compliance package of an account group.
   *
   * @description > Before you call this operation, you must call the GenerateAggregateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateAggregateCompliancePackReport](https://help.aliyun.com/document_detail/262687.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   *
   * @param request GetAggregateCompliancePackReportRequest
   * @return GetAggregateCompliancePackReportResponse
   */
  async getAggregateCompliancePackReport(request: GetAggregateCompliancePackReportRequest): Promise<GetAggregateCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance statistics of an account group.
   *
   * @description This topic provides an example on how to query the compliance statistics of resources and rules in the account group ca-a91d626622af0035\\*\\*\\*\\*.
   *
   * @param request GetAggregateComplianceSummaryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateComplianceSummaryResponse
   */
  async getAggregateComplianceSummaryWithOptions(request: GetAggregateComplianceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateComplianceSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateComplianceSummary",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateComplianceSummaryResponse>(await this.callApi(params, req, runtime), new GetAggregateComplianceSummaryResponse({}));
  }

  /**
   * @summary Queries the compliance statistics of an account group.
   *
   * @description This topic provides an example on how to query the compliance statistics of resources and rules in the account group ca-a91d626622af0035\\*\\*\\*\\*.
   *
   * @param request GetAggregateComplianceSummaryRequest
   * @return GetAggregateComplianceSummaryResponse
   */
  async getAggregateComplianceSummary(request: GetAggregateComplianceSummaryRequest): Promise<GetAggregateComplianceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateComplianceSummaryWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about a delivery channel in an account group.
   *
   * @param request GetAggregateConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateConfigDeliveryChannelResponse
   */
  async getAggregateConfigDeliveryChannelWithOptions(request: GetAggregateConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new GetAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Queries the information about a delivery channel in an account group.
   *
   * @param request GetAggregateConfigDeliveryChannelRequest
   * @return GetAggregateConfigDeliveryChannelResponse
   */
  async getAggregateConfigDeliveryChannel(request: GetAggregateConfigDeliveryChannelRequest): Promise<GetAggregateConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary 获取账号组规则详情
   *
   * @description This example shows how to query the details of the `cr-7f7d626622af0041****` rule in the `ca-7f00626622af0041****` account group.
   *
   * @param request GetAggregateConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateConfigRuleResponse
   */
  async getAggregateConfigRuleWithOptions(request: GetAggregateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateConfigRuleResponse>(await this.callApi(params, req, runtime), new GetAggregateConfigRuleResponse({}));
  }

  /**
   * @summary 获取账号组规则详情
   *
   * @description This example shows how to query the details of the `cr-7f7d626622af0041****` rule in the `ca-7f00626622af0041****` account group.
   *
   * @param request GetAggregateConfigRuleRequest
   * @return GetAggregateConfigRuleResponse
   */
  async getAggregateConfigRule(request: GetAggregateConfigRuleRequest): Promise<GetAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries compliance evaluation results based on the rules in a compliance package in an account group.
   *
   * @description The sample request in this topic shows you how to query the compliance evaluation results based on rules in the `cp-541e626622af0087****` compliance package that is created for the `ca-04b3fd170e340007****` account group. The return result shows a total of `one` rule. `No resources` are evaluated as non-compliant based on the rule.
   *
   * @param request GetAggregateConfigRuleComplianceByPackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateConfigRuleComplianceByPackResponse
   */
  async getAggregateConfigRuleComplianceByPackWithOptions(request: GetAggregateConfigRuleComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateConfigRuleComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateConfigRuleComplianceByPackResponse>(await this.callApi(params, req, runtime), new GetAggregateConfigRuleComplianceByPackResponse({}));
  }

  /**
   * @summary Queries compliance evaluation results based on the rules in a compliance package in an account group.
   *
   * @description The sample request in this topic shows you how to query the compliance evaluation results based on rules in the `cp-541e626622af0087****` compliance package that is created for the `ca-04b3fd170e340007****` account group. The return result shows a total of `one` rule. `No resources` are evaluated as non-compliant based on the rule.
   *
   * @param request GetAggregateConfigRuleComplianceByPackRequest
   * @return GetAggregateConfigRuleComplianceByPackResponse
   */
  async getAggregateConfigRuleComplianceByPack(request: GetAggregateConfigRuleComplianceByPackRequest): Promise<GetAggregateConfigRuleComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the summary of compliance evaluation results by rule risk level in an account group.
   *
   * @description This topic provides an example on how to query the summary of compliance evaluation results by rule risk level in the `ca-3a58626622af0005****` account group. The returned result shows four rules that are specified with the high risk level. One of the rules detects non-compliant resources, and the resources evaluated by the remaining three are compliant.
   *
   * @param request GetAggregateConfigRuleSummaryByRiskLevelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateConfigRuleSummaryByRiskLevelResponse
   */
  async getAggregateConfigRuleSummaryByRiskLevelWithOptions(request: GetAggregateConfigRuleSummaryByRiskLevelRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateConfigRuleSummaryByRiskLevel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateConfigRuleSummaryByRiskLevelResponse>(await this.callApi(params, req, runtime), new GetAggregateConfigRuleSummaryByRiskLevelResponse({}));
  }

  /**
   * @summary Queries the summary of compliance evaluation results by rule risk level in an account group.
   *
   * @description This topic provides an example on how to query the summary of compliance evaluation results by rule risk level in the `ca-3a58626622af0005****` account group. The returned result shows four rules that are specified with the high risk level. One of the rules detects non-compliant resources, and the resources evaluated by the remaining three are compliant.
   *
   * @param request GetAggregateConfigRuleSummaryByRiskLevelRequest
   * @return GetAggregateConfigRuleSummaryByRiskLevelResponse
   */
  async getAggregateConfigRuleSummaryByRiskLevel(request: GetAggregateConfigRuleSummaryByRiskLevelRequest): Promise<GetAggregateConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleSummaryByRiskLevelWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on all rules in an account group.
   *
   * @description > Before you call this operation, you must call the GenerateAggregateConfigRulesReport operation to generate the latest compliance evaluation report based on all rules in an account group. For more information, see [GenerateAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262701.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on all rules in the `ca-f632626622af0079****` account group.
   *
   * @param request GetAggregateConfigRulesReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateConfigRulesReportResponse
   */
  async getAggregateConfigRulesReportWithOptions(request: GetAggregateConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRulesReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateConfigRulesReportResponse>(await this.callApi(params, req, runtime), new GetAggregateConfigRulesReportResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on all rules in an account group.
   *
   * @description > Before you call this operation, you must call the GenerateAggregateConfigRulesReport operation to generate the latest compliance evaluation report based on all rules in an account group. For more information, see [GenerateAggregateConfigRulesReport](https://help.aliyun.com/document_detail/262701.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on all rules in the `ca-f632626622af0079****` account group.
   *
   * @param request GetAggregateConfigRulesReportRequest
   * @return GetAggregateConfigRulesReportResponse
   */
  async getAggregateConfigRulesReport(request: GetAggregateConfigRulesReportRequest): Promise<GetAggregateConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a resource in an account group.
   *
   * @description This topic provides an example on how to query the `new-bucket` resource in the `ca-5885626622af0008****` account group.
   *
   * @param request GetAggregateDiscoveredResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateDiscoveredResourceResponse
   */
  async getAggregateDiscoveredResourceWithOptions(request: GetAggregateDiscoveredResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateDiscoveredResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.complianceOption)) {
      query["ComplianceOption"] = request.complianceOption;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateDiscoveredResource",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateDiscoveredResourceResponse>(await this.callApi(params, req, runtime), new GetAggregateDiscoveredResourceResponse({}));
  }

  /**
   * @summary Queries the details of a resource in an account group.
   *
   * @description This topic provides an example on how to query the `new-bucket` resource in the `ca-5885626622af0008****` account group.
   *
   * @param request GetAggregateDiscoveredResourceRequest
   * @return GetAggregateDiscoveredResourceResponse
   */
  async getAggregateDiscoveredResource(request: GetAggregateDiscoveredResourceRequest): Promise<GetAggregateDiscoveredResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries compliance evaluation results based on the rules in a compliance package in an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results based on the `cr-d369626622af008e****` rule in the `ca-a4e5626622af0079****` account group. The returned result shows that a total of 10 resources are evaluated by the rule and five of them are evaluated as compliant.
   *
   * @param request GetAggregateResourceComplianceByConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceComplianceByConfigRuleResponse
   */
  async getAggregateResourceComplianceByConfigRuleWithOptions(request: GetAggregateResourceComplianceByConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceByConfigRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceComplianceByConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceComplianceByConfigRuleResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceComplianceByConfigRuleResponse({}));
  }

  /**
   * @summary Queries compliance evaluation results based on the rules in a compliance package in an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results based on the `cr-d369626622af008e****` rule in the `ca-a4e5626622af0079****` account group. The returned result shows that a total of 10 resources are evaluated by the rule and five of them are evaluated as compliant.
   *
   * @param request GetAggregateResourceComplianceByConfigRuleRequest
   * @return GetAggregateResourceComplianceByConfigRuleResponse
   */
  async getAggregateResourceComplianceByConfigRule(request: GetAggregateResourceComplianceByConfigRuleRequest): Promise<GetAggregateResourceComplianceByConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation results of resources evaluated based on a compliance package of an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of resources monitored based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****`account group. The returned result shows that the total number of monitored resources is `10` and the number of non-compliant resources is `7`.
   *
   * @param request GetAggregateResourceComplianceByPackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceComplianceByPackResponse
   */
  async getAggregateResourceComplianceByPackWithOptions(request: GetAggregateResourceComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceComplianceByPackResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceComplianceByPackResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation results of resources evaluated based on a compliance package of an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of resources monitored based on the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****`account group. The returned result shows that the total number of monitored resources is `10` and the number of non-compliant resources is `7`.
   *
   * @param request GetAggregateResourceComplianceByPackRequest
   * @return GetAggregateResourceComplianceByPackResponse
   */
  async getAggregateResourceComplianceByPack(request: GetAggregateResourceComplianceByPackRequest): Promise<GetAggregateResourceComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceByPackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the evaluation results grouped by resource type for an account group rule.
   *
   * @param request GetAggregateResourceComplianceGroupByRegionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceComplianceGroupByRegionResponse
   */
  async getAggregateResourceComplianceGroupByRegionWithOptions(request: GetAggregateResourceComplianceGroupByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceGroupByRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceComplianceGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceComplianceGroupByRegionResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceComplianceGroupByRegionResponse({}));
  }

  /**
   * @summary Queries the evaluation results grouped by resource type for an account group rule.
   *
   * @param request GetAggregateResourceComplianceGroupByRegionRequest
   * @return GetAggregateResourceComplianceGroupByRegionResponse
   */
  async getAggregateResourceComplianceGroupByRegion(request: GetAggregateResourceComplianceGroupByRegionRequest): Promise<GetAggregateResourceComplianceGroupByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceGroupByRegionWithOptions(request, runtime);
  }

  /**
   * @summary Queries the evaluation results grouped by resource type for an account group rule.
   *
   * @param request GetAggregateResourceComplianceGroupByResourceTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceComplianceGroupByResourceTypeResponse
   */
  async getAggregateResourceComplianceGroupByResourceTypeWithOptions(request: GetAggregateResourceComplianceGroupByResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceGroupByResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceComplianceGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceComplianceGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceComplianceGroupByResourceTypeResponse({}));
  }

  /**
   * @summary Queries the evaluation results grouped by resource type for an account group rule.
   *
   * @param request GetAggregateResourceComplianceGroupByResourceTypeRequest
   * @return GetAggregateResourceComplianceGroupByResourceTypeResponse
   */
  async getAggregateResourceComplianceGroupByResourceType(request: GetAggregateResourceComplianceGroupByResourceTypeRequest): Promise<GetAggregateResourceComplianceGroupByResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance timeline of a resource in an account group.
   *
   * @description The sample request in this topic shows you how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8), and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
   *
   * @param request GetAggregateResourceComplianceTimelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceComplianceTimelineResponse
   */
  async getAggregateResourceComplianceTimelineWithOptions(request: GetAggregateResourceComplianceTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceComplianceTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceComplianceTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceComplianceTimelineResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceComplianceTimelineResponse({}));
  }

  /**
   * @summary Queries the compliance timeline of a resource in an account group.
   *
   * @description The sample request in this topic shows you how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8), and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
   *
   * @param request GetAggregateResourceComplianceTimelineRequest
   * @return GetAggregateResourceComplianceTimelineResponse
   */
  async getAggregateResourceComplianceTimeline(request: GetAggregateResourceComplianceTimelineRequest): Promise<GetAggregateResourceComplianceTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceComplianceTimelineWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configuration timeline of a resource in an account group.
   *
   * @description The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
   *
   * @param request GetAggregateResourceConfigurationTimelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceConfigurationTimelineResponse
   */
  async getAggregateResourceConfigurationTimelineWithOptions(request: GetAggregateResourceConfigurationTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceConfigurationTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceConfigurationTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceConfigurationTimelineResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceConfigurationTimelineResponse({}));
  }

  /**
   * @summary Queries the configuration timeline of a resource in an account group.
   *
   * @description The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region within the `100931896542****` member account of the `ca-5885626622af0008****` account group. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
   *
   * @param request GetAggregateResourceConfigurationTimelineRequest
   * @return GetAggregateResourceConfigurationTimelineResponse
   */
  async getAggregateResourceConfigurationTimeline(request: GetAggregateResourceConfigurationTimelineRequest): Promise<GetAggregateResourceConfigurationTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceConfigurationTimelineWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics on the resources in an account group by region.
   *
   * @description This topic provides an example on how to query the statistics on the resources in an account group named `ca-a260626622af0005****` by region. The returned result shows that a total of `10` resources exist in the `cn-hangzhou` region.
   *
   * @param request GetAggregateResourceCountsGroupByRegionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceCountsGroupByRegionResponse
   */
  async getAggregateResourceCountsGroupByRegionWithOptions(request: GetAggregateResourceCountsGroupByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceCountsGroupByRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceCountsGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceCountsGroupByRegionResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceCountsGroupByRegionResponse({}));
  }

  /**
   * @summary Queries the statistics on the resources in an account group by region.
   *
   * @description This topic provides an example on how to query the statistics on the resources in an account group named `ca-a260626622af0005****` by region. The returned result shows that a total of `10` resources exist in the `cn-hangzhou` region.
   *
   * @param request GetAggregateResourceCountsGroupByRegionRequest
   * @return GetAggregateResourceCountsGroupByRegionResponse
   */
  async getAggregateResourceCountsGroupByRegion(request: GetAggregateResourceCountsGroupByRegionRequest): Promise<GetAggregateResourceCountsGroupByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics on the resources in an account group by resource type.
   *
   * @description This topic provides an example on how to query the statistics on the resources in an account group whose ID is `ca-a260626622af0005****` by resource type. The returned result shows that the account group has a total of `seven` resources of the `ACS::RAM::Role` resource type.
   *
   * @param request GetAggregateResourceCountsGroupByResourceTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceCountsGroupByResourceTypeResponse
   */
  async getAggregateResourceCountsGroupByResourceTypeWithOptions(request: GetAggregateResourceCountsGroupByResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceCountsGroupByResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceCountsGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceCountsGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceCountsGroupByResourceTypeResponse({}));
  }

  /**
   * @summary Queries the statistics on the resources in an account group by resource type.
   *
   * @description This topic provides an example on how to query the statistics on the resources in an account group whose ID is `ca-a260626622af0005****` by resource type. The returned result shows that the account group has a total of `seven` resources of the `ACS::RAM::Role` resource type.
   *
   * @param request GetAggregateResourceCountsGroupByResourceTypeRequest
   * @return GetAggregateResourceCountsGroupByResourceTypeResponse
   */
  async getAggregateResourceCountsGroupByResourceType(request: GetAggregateResourceCountsGroupByResourceTypeRequest): Promise<GetAggregateResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the last resource inventory that is generated on the Global Resources page within the current account group.
   *
   * @description ### [](#)Prerequisites
   * The [GenerateAggregateResourceInventory](https://help.aliyun.com/document_detail/2398353.html) operation is called to generate a resource inventory. Then, this operation is called to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the account group ca-a91d626622af0035\\*\\*\\*\\*.
   *
   * @param request GetAggregateResourceInventoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregateResourceInventoryResponse
   */
  async getAggregateResourceInventoryWithOptions(request: GetAggregateResourceInventoryRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateResourceInventoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregateResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregateResourceInventoryResponse>(await this.callApi(params, req, runtime), new GetAggregateResourceInventoryResponse({}));
  }

  /**
   * @summary Obtains the last resource inventory that is generated on the Global Resources page within the current account group.
   *
   * @description ### [](#)Prerequisites
   * The [GenerateAggregateResourceInventory](https://help.aliyun.com/document_detail/2398353.html) operation is called to generate a resource inventory. Then, this operation is called to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the account group ca-a91d626622af0035\\*\\*\\*\\*.
   *
   * @param request GetAggregateResourceInventoryRequest
   * @return GetAggregateResourceInventoryResponse
   */
  async getAggregateResourceInventory(request: GetAggregateResourceInventoryRequest): Promise<GetAggregateResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateResourceInventoryWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an account group.
   *
   * @description The sample request in this topic shows you how to query the details of the `ca-88ea626622af0055****` account group. The return result shows that the account group is named `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type. The account group is in the `1` state, which indicates that it is created.
   *
   * @param request GetAggregatorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAggregatorResponse
   */
  async getAggregatorWithOptions(request: GetAggregatorRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregatorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAggregator",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAggregatorResponse>(await this.callApi(params, req, runtime), new GetAggregatorResponse({}));
  }

  /**
   * @summary Queries the details of an account group.
   *
   * @description The sample request in this topic shows you how to query the details of the `ca-88ea626622af0055****` account group. The return result shows that the account group is named `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type. The account group is in the `1` state, which indicates that it is created.
   *
   * @param request GetAggregatorRequest
   * @return GetAggregatorResponse
   */
  async getAggregator(request: GetAggregatorRequest): Promise<GetAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregatorWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a compliance package.
   *
   * @description This topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****`. The returned result shows that the name of the compliance package is `ClassifiedProtectionPreCheck`, the compliance package is in the `ACTIVE` state, and the risk level of the rules in the compliance package is `1`, which indicates high risk level.
   *
   * @param request GetCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCompliancePackResponse
   */
  async getCompliancePackWithOptions(request: GetCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<GetCompliancePackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCompliancePackResponse>(await this.callApi(params, req, runtime), new GetCompliancePackResponse({}));
  }

  /**
   * @summary Queries the details of a compliance package.
   *
   * @description This topic provides an example on how to query the details of a compliance package whose ID is `cp-fdc8626622af00f9****`. The returned result shows that the name of the compliance package is `ClassifiedProtectionPreCheck`, the compliance package is in the `ACTIVE` state, and the risk level of the rules in the compliance package is `1`, which indicates high risk level.
   *
   * @param request GetCompliancePackRequest
   * @return GetCompliancePackResponse
   */
  async getCompliancePack(request: GetCompliancePackRequest): Promise<GetCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on a compliance package.
   *
   * @description > Before you call this operation, you must call the GenerateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateCompliancePackReport](https://help.aliyun.com/document_detail/263525.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package.
   *
   * @param request GetCompliancePackReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCompliancePackReportResponse
   */
  async getCompliancePackReportWithOptions(request: GetCompliancePackReportRequest, runtime: $Util.RuntimeOptions): Promise<GetCompliancePackReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCompliancePackReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCompliancePackReportResponse>(await this.callApi(params, req, runtime), new GetCompliancePackReportResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on a compliance package.
   *
   * @description > Before you call this operation, you must call the GenerateCompliancePackReport operation to generate the latest compliance evaluation report based on a compliance package. For more information, see [GenerateCompliancePackReport](https://help.aliyun.com/document_detail/263525.html).
   * This topic provides an example on how to query the compliance evaluation report that is generated based on the `cp-fdc8626622af00f9****` compliance package.
   *
   * @param request GetCompliancePackReportRequest
   * @return GetCompliancePackReportResponse
   */
  async getCompliancePackReport(request: GetCompliancePackReportRequest): Promise<GetCompliancePackReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCompliancePackReportWithOptions(request, runtime);
  }

  /**
   * @summary Queries the summary of compliance statistics within the current account.
   *
   * @description This topic provides an example on how to query the compliance statistics of resources and rules in the current account group.
   *
   * @param request GetComplianceSummaryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetComplianceSummaryResponse
   */
  async getComplianceSummaryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetComplianceSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetComplianceSummary",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetComplianceSummaryResponse>(await this.callApi(params, req, runtime), new GetComplianceSummaryResponse({}));
  }

  /**
   * @summary Queries the summary of compliance statistics within the current account.
   *
   * @description This topic provides an example on how to query the compliance statistics of resources and rules in the current account group.
   *
   * @return GetComplianceSummaryResponse
   */
  async getComplianceSummary(): Promise<GetComplianceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getComplianceSummaryWithOptions(runtime);
  }

  /**
   * @summary Queries the information about a delivery channel.
   *
   * @param request GetConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConfigDeliveryChannelResponse
   */
  async getConfigDeliveryChannelWithOptions(request: GetConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new GetConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Queries the information about a delivery channel.
   *
   * @param request GetConfigDeliveryChannelRequest
   * @return GetConfigDeliveryChannelResponse
   */
  async getConfigDeliveryChannel(request: GetConfigDeliveryChannelRequest): Promise<GetConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a rule.
   *
   * @description This topic provides an example on how to query the details of the `cr-7f7d626622af0041****` rule.
   *
   * @param request GetConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConfigRuleResponse
   */
  async getConfigRuleWithOptions(request: GetConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigRuleResponse>(await this.callApi(params, req, runtime), new GetConfigRuleResponse({}));
  }

  /**
   * @summary Queries the details of a rule.
   *
   * @description This topic provides an example on how to query the details of the `cr-7f7d626622af0041****` rule.
   *
   * @param request GetConfigRuleRequest
   * @return GetConfigRuleResponse
   */
  async getConfigRule(request: GetConfigRuleRequest): Promise<GetConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries compliance evaluation results based on the rules in a compliance package.
   *
   * @description In this topic, the `cp-541e626622af0087****` compliance package is used as an example. The return result shows a total of one rule against which specific resources are evaluated as compliant.
   *
   * @param request GetConfigRuleComplianceByPackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConfigRuleComplianceByPackResponse
   */
  async getConfigRuleComplianceByPackWithOptions(request: GetConfigRuleComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRuleComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigRuleComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigRuleComplianceByPackResponse>(await this.callApi(params, req, runtime), new GetConfigRuleComplianceByPackResponse({}));
  }

  /**
   * @summary Queries compliance evaluation results based on the rules in a compliance package.
   *
   * @description In this topic, the `cp-541e626622af0087****` compliance package is used as an example. The return result shows a total of one rule against which specific resources are evaluated as compliant.
   *
   * @param request GetConfigRuleComplianceByPackRequest
   * @return GetConfigRuleComplianceByPackResponse
   */
  async getConfigRuleComplianceByPack(request: GetConfigRuleComplianceByPackRequest): Promise<GetConfigRuleComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleComplianceByPackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the summary of compliance evaluation results by rule risk level.
   *
   * @description This topic provides an example of how to query the summary of compliance evaluation results by rule risk level. The return result shows four rules that are specified with the high risk level. One of them detects non-compliant resources, and the resources evaluated by the remaining three are all compliant.
   *
   * @param request GetConfigRuleSummaryByRiskLevelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConfigRuleSummaryByRiskLevelResponse
   */
  async getConfigRuleSummaryByRiskLevelWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConfigRuleSummaryByRiskLevelResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetConfigRuleSummaryByRiskLevel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigRuleSummaryByRiskLevelResponse>(await this.callApi(params, req, runtime), new GetConfigRuleSummaryByRiskLevelResponse({}));
  }

  /**
   * @summary Queries the summary of compliance evaluation results by rule risk level.
   *
   * @description This topic provides an example of how to query the summary of compliance evaluation results by rule risk level. The return result shows four rules that are specified with the high risk level. One of them detects non-compliant resources, and the resources evaluated by the remaining three are all compliant.
   *
   * @return GetConfigRuleSummaryByRiskLevelResponse
   */
  async getConfigRuleSummaryByRiskLevel(): Promise<GetConfigRuleSummaryByRiskLevelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleSummaryByRiskLevelWithOptions(runtime);
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on all existing rules.
   *
   * @description >  Before you call this operation, you must call the GenerateConfigRulesReport operation to generate the latest compliance evaluation report based on all existing rules. For more information, see [GenerateConfigRulesReport](https://help.aliyun.com/document_detail/263601.html).
   * This topic provides an example of how to query the compliance evaluation report that is generated based on all existing rules.
   *
   * @param request GetConfigRulesReportRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConfigRulesReportResponse
   */
  async getConfigRulesReportWithOptions(request: GetConfigRulesReportRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRulesReportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConfigRulesReport",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigRulesReportResponse>(await this.callApi(params, req, runtime), new GetConfigRulesReportResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation report that is generated based on all existing rules.
   *
   * @description >  Before you call this operation, you must call the GenerateConfigRulesReport operation to generate the latest compliance evaluation report based on all existing rules. For more information, see [GenerateConfigRulesReport](https://help.aliyun.com/document_detail/263601.html).
   * This topic provides an example of how to query the compliance evaluation report that is generated based on all existing rules.
   *
   * @param request GetConfigRulesReportRequest
   * @return GetConfigRulesReportResponse
   */
  async getConfigRulesReport(request: GetConfigRulesReportRequest): Promise<GetConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRulesReportWithOptions(request, runtime);
  }

  /**
   * @summary Queries the activation status and resource monitoring scope of Cloud Config for the current account.
   *
   * @description This topic provides an example on how to query the activation status and resource monitoring scope of Cloud Config for the current account.
   *
   * @param request GetConfigurationRecorderRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConfigurationRecorderResponse
   */
  async getConfigurationRecorderWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConfigurationRecorderResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new GetConfigurationRecorderResponse({}));
  }

  /**
   * @summary Queries the activation status and resource monitoring scope of Cloud Config for the current account.
   *
   * @description This topic provides an example on how to query the activation status and resource monitoring scope of Cloud Config for the current account.
   *
   * @return GetConfigurationRecorderResponse
   */
  async getConfigurationRecorder(): Promise<GetConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigurationRecorderWithOptions(runtime);
  }

  /**
   * @summary Queries the details of a resource.
   *
   * @description The sample request in this topic shows you how to query the details of the `new-bucket` resource.
   *
   * @param request GetDiscoveredResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDiscoveredResourceResponse
   */
  async getDiscoveredResourceWithOptions(request: GetDiscoveredResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.complianceOption)) {
      query["ComplianceOption"] = request.complianceOption;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
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
      action: "GetDiscoveredResource",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiscoveredResourceResponse>(await this.callApi(params, req, runtime), new GetDiscoveredResourceResponse({}));
  }

  /**
   * @summary Queries the details of a resource.
   *
   * @description The sample request in this topic shows you how to query the details of the `new-bucket` resource.
   *
   * @param request GetDiscoveredResourceRequest
   * @return GetDiscoveredResourceResponse
   */
  async getDiscoveredResource(request: GetDiscoveredResourceRequest): Promise<GetDiscoveredResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics on resources by region.
   *
   * @description This topic provides an example to demonstrate how to query the statistics on resources by region. The returned result shows that a total of 10 resources exist in the `cn-hangzhou` region.
   *
   * @param request GetDiscoveredResourceCountsGroupByRegionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDiscoveredResourceCountsGroupByRegionResponse
   */
  async getDiscoveredResourceCountsGroupByRegionWithOptions(request: GetDiscoveredResourceCountsGroupByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceCountsGroupByRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiscoveredResourceCountsGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiscoveredResourceCountsGroupByRegionResponse>(await this.callApi(params, req, runtime), new GetDiscoveredResourceCountsGroupByRegionResponse({}));
  }

  /**
   * @summary Queries the statistics on resources by region.
   *
   * @description This topic provides an example to demonstrate how to query the statistics on resources by region. The returned result shows that a total of 10 resources exist in the `cn-hangzhou` region.
   *
   * @param request GetDiscoveredResourceCountsGroupByRegionRequest
   * @return GetDiscoveredResourceCountsGroupByRegionResponse
   */
  async getDiscoveredResourceCountsGroupByRegion(request: GetDiscoveredResourceCountsGroupByRegionRequest): Promise<GetDiscoveredResourceCountsGroupByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByRegionWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics on resources by resource type.
   *
   * @description This topic describes how to query the statistics on resources by resource type. The returned result shows that a total of 10 resources of the `ACS::ECS::Instance` resource type exist.
   *
   * @param request GetDiscoveredResourceCountsGroupByResourceTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDiscoveredResourceCountsGroupByResourceTypeResponse
   */
  async getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request: GetDiscoveredResourceCountsGroupByResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiscoveredResourceCountsGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiscoveredResourceCountsGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new GetDiscoveredResourceCountsGroupByResourceTypeResponse({}));
  }

  /**
   * @summary Queries the statistics on resources by resource type.
   *
   * @description This topic describes how to query the statistics on resources by resource type. The returned result shows that a total of 10 resources of the `ACS::ECS::Instance` resource type exist.
   *
   * @param request GetDiscoveredResourceCountsGroupByResourceTypeRequest
   * @return GetDiscoveredResourceCountsGroupByResourceTypeResponse
   */
  async getDiscoveredResourceCountsGroupByResourceType(request: GetDiscoveredResourceCountsGroupByResourceTypeRequest): Promise<GetDiscoveredResourceCountsGroupByResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the status of a cloud service that is integrated with Cloud Config.
   *
   * @param request GetIntegratedServiceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetIntegratedServiceStatusResponse
   */
  async getIntegratedServiceStatusWithOptions(request: GetIntegratedServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetIntegratedServiceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetIntegratedServiceStatus",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIntegratedServiceStatusResponse>(await this.callApi(params, req, runtime), new GetIntegratedServiceStatusResponse({}));
  }

  /**
   * @summary Queries the status of a cloud service that is integrated with Cloud Config.
   *
   * @param request GetIntegratedServiceStatusRequest
   * @return GetIntegratedServiceStatusResponse
   */
  async getIntegratedServiceStatus(request: GetIntegratedServiceStatusRequest): Promise<GetIntegratedServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of a managed rule.
   *
   * @description In this topic, the `cdn-domain-https-enabled` managed rule is used as an example.
   *
   * @param request GetManagedRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetManagedRuleResponse
   */
  async getManagedRuleWithOptions(request: GetManagedRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetManagedRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetManagedRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetManagedRuleResponse>(await this.callApi(params, req, runtime), new GetManagedRuleResponse({}));
  }

  /**
   * @summary Queries the details of a managed rule.
   *
   * @description In this topic, the `cdn-domain-https-enabled` managed rule is used as an example.
   *
   * @param request GetManagedRuleRequest
   * @return GetManagedRuleResponse
   */
  async getManagedRule(request: GetManagedRuleRequest): Promise<GetManagedRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getManagedRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an automatic remediation template.
   *
   * @description This topic provides an example on how to query the details of the automatic remediation template ACS-ALB-BulkyEnableDeletionProtection.
   *
   * @param request GetRemediationTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRemediationTemplateResponse
   */
  async getRemediationTemplateWithOptions(request: GetRemediationTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetRemediationTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.templateIdentifier)) {
      query["TemplateIdentifier"] = request.templateIdentifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRemediationTemplate",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRemediationTemplateResponse>(await this.callApi(params, req, runtime), new GetRemediationTemplateResponse({}));
  }

  /**
   * @summary Queries the details of an automatic remediation template.
   *
   * @description This topic provides an example on how to query the details of the automatic remediation template ACS-ALB-BulkyEnableDeletionProtection.
   *
   * @param request GetRemediationTemplateRequest
   * @return GetRemediationTemplateResponse
   */
  async getRemediationTemplate(request: GetRemediationTemplateRequest): Promise<GetRemediationTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRemediationTemplateWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation result of a resource by using a rule.
   *
   * @description In this topic, the `cr-d369626622af008e****` rule is used as an example. The return result shows that a total of 10 resources are evaluated by the rule and `five` of them are evaluated as compliant.
   *
   * @param request GetResourceComplianceByConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceComplianceByConfigRuleResponse
   */
  async getResourceComplianceByConfigRuleWithOptions(request: GetResourceComplianceByConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceByConfigRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceComplianceByConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceComplianceByConfigRuleResponse>(await this.callApi(params, req, runtime), new GetResourceComplianceByConfigRuleResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation result of a resource by using a rule.
   *
   * @description In this topic, the `cr-d369626622af008e****` rule is used as an example. The return result shows that a total of 10 resources are evaluated by the rule and `five` of them are evaluated as compliant.
   *
   * @param request GetResourceComplianceByConfigRuleRequest
   * @return GetResourceComplianceByConfigRuleResponse
   */
  async getResourceComplianceByConfigRule(request: GetResourceComplianceByConfigRuleRequest): Promise<GetResourceComplianceByConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceByConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation results of resources evaluated based on a compliance package.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of resources monitored by using the `cp-541e626622af0087****` compliance package. The returned result shows a total of 10 resources and seven of them are evaluated as non-compliant.
   *
   * @param request GetResourceComplianceByPackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceComplianceByPackResponse
   */
  async getResourceComplianceByPackWithOptions(request: GetResourceComplianceByPackRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceByPackResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceComplianceByPack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceComplianceByPackResponse>(await this.callApi(params, req, runtime), new GetResourceComplianceByPackResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation results of resources evaluated based on a compliance package.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of resources monitored by using the `cp-541e626622af0087****` compliance package. The returned result shows a total of 10 resources and seven of them are evaluated as non-compliant.
   *
   * @param request GetResourceComplianceByPackRequest
   * @return GetResourceComplianceByPackResponse
   */
  async getResourceComplianceByPack(request: GetResourceComplianceByPackRequest): Promise<GetResourceComplianceByPackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceByPackWithOptions(request, runtime);
  }

  /**
   * @summary Queries the evaluation results grouped by region for a rule.
   *
   * @param request GetResourceComplianceGroupByRegionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceComplianceGroupByRegionResponse
   */
  async getResourceComplianceGroupByRegionWithOptions(request: GetResourceComplianceGroupByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceGroupByRegionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceComplianceGroupByRegion",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceComplianceGroupByRegionResponse>(await this.callApi(params, req, runtime), new GetResourceComplianceGroupByRegionResponse({}));
  }

  /**
   * @summary Queries the evaluation results grouped by region for a rule.
   *
   * @param request GetResourceComplianceGroupByRegionRequest
   * @return GetResourceComplianceGroupByRegionResponse
   */
  async getResourceComplianceGroupByRegion(request: GetResourceComplianceGroupByRegionRequest): Promise<GetResourceComplianceGroupByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceGroupByRegionWithOptions(request, runtime);
  }

  /**
   * @summary Queries the evaluation results grouped by resource type for a rule.
   *
   * @param request GetResourceComplianceGroupByResourceTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceComplianceGroupByResourceTypeResponse
   */
  async getResourceComplianceGroupByResourceTypeWithOptions(request: GetResourceComplianceGroupByResourceTypeRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceGroupByResourceTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceComplianceGroupByResourceType",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceComplianceGroupByResourceTypeResponse>(await this.callApi(params, req, runtime), new GetResourceComplianceGroupByResourceTypeResponse({}));
  }

  /**
   * @summary Queries the evaluation results grouped by resource type for a rule.
   *
   * @param request GetResourceComplianceGroupByResourceTypeRequest
   * @return GetResourceComplianceGroupByResourceTypeResponse
   */
  async getResourceComplianceGroupByResourceType(request: GetResourceComplianceGroupByResourceTypeRequest): Promise<GetResourceComplianceGroupByResourceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceGroupByResourceTypeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance timeline of a resource. The compliance timeline of a resource indicates the compliance evaluation record of the resource. A compliance timeline includes points and the content on the compliance timeline.
   *
   * @description In Cloud Config, each resource has a compliance timeline. Cloud Config generates a compliance evaluation record for a resource each time the resource is evaluated based on a rule. The compliance evaluation records of a resource are displayed in a compliance timeline. You can configure Cloud Config to execute a rule to evaluate a resource on a regular basis or each time you change the resource configuration. You can also manually execute a rule to evaluate a resource.
   * This topic provides an example on how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The resource is an Object Storage Service (OSS) bucket. The returned result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8) and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
   *
   * @param request GetResourceComplianceTimelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceComplianceTimelineResponse
   */
  async getResourceComplianceTimelineWithOptions(request: GetResourceComplianceTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceComplianceTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceComplianceTimelineResponse>(await this.callApi(params, req, runtime), new GetResourceComplianceTimelineResponse({}));
  }

  /**
   * @summary Queries the compliance timeline of a resource. The compliance timeline of a resource indicates the compliance evaluation record of the resource. A compliance timeline includes points and the content on the compliance timeline.
   *
   * @description In Cloud Config, each resource has a compliance timeline. Cloud Config generates a compliance evaluation record for a resource each time the resource is evaluated based on a rule. The compliance evaluation records of a resource are displayed in a compliance timeline. You can configure Cloud Config to execute a rule to evaluate a resource on a regular basis or each time you change the resource configuration. You can also manually execute a rule to evaluate a resource.
   * This topic provides an example on how to query the compliance timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The resource is an Object Storage Service (OSS) bucket. The returned result shows the following two timestamps on the compliance timeline: `1625200295276` and `1625200228510`. The first timestamp indicates 12:31:35 on July 2, 2021 (UTC+8) and the second timestamp indicates 12:30:28 on July 2, 2021 (UTC+8).
   *
   * @param request GetResourceComplianceTimelineRequest
   * @return GetResourceComplianceTimelineResponse
   */
  async getResourceComplianceTimeline(request: GetResourceComplianceTimelineRequest): Promise<GetResourceComplianceTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceTimelineWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configuration timeline of a resource.
   *
   * @description The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
   *
   * @param request GetResourceConfigurationTimelineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceConfigurationTimelineResponse
   */
  async getResourceConfigurationTimelineWithOptions(request: GetResourceConfigurationTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceConfigurationTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceConfigurationTimeline",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceConfigurationTimelineResponse>(await this.callApi(params, req, runtime), new GetResourceConfigurationTimelineResponse({}));
  }

  /**
   * @summary Queries the configuration timeline of a resource.
   *
   * @description The sample request in this topic shows you how to query the configuration timeline of the `new-bucket` resource that resides in the `cn-hangzhou` region. The new-bucket resource is an Object Storage Service (OSS) bucket. The return result shows that the timestamp when the resource configuration changes is `1624961112000`. The timestamp indicates 18:05:12 on June 29, 2021 (UTC+8).
   *
   * @param request GetResourceConfigurationTimelineRequest
   * @return GetResourceConfigurationTimelineResponse
   */
  async getResourceConfigurationTimeline(request: GetResourceConfigurationTimelineRequest): Promise<GetResourceConfigurationTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceConfigurationTimelineWithOptions(request, runtime);
  }

  /**
   * @summary Obtains the last resource inventory that is generated within the current Alibaba Cloud account.
   *
   * @description ### [](#)Prerequisites
   * You can call the [GenerateResourceInventory](https://help.aliyun.com/document_detail/2398354.html) operation to generate a resource inventory. Then, you can call the GetResourceInventory operation to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the current Alibaba Cloud account.
   *
   * @param request GetResourceInventoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetResourceInventoryResponse
   */
  async getResourceInventoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceInventoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetResourceInventory",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceInventoryResponse>(await this.callApi(params, req, runtime), new GetResourceInventoryResponse({}));
  }

  /**
   * @summary Obtains the last resource inventory that is generated within the current Alibaba Cloud account.
   *
   * @description ### [](#)Prerequisites
   * You can call the [GenerateResourceInventory](https://help.aliyun.com/document_detail/2398354.html) operation to generate a resource inventory. Then, you can call the GetResourceInventory operation to obtain the URL of the resource inventory.
   * ### [](#)Description
   * This topic provides an example on how to obtain the last resource inventory that is generated within the current Alibaba Cloud account.
   *
   * @return GetResourceInventoryResponse
   */
  async getResourceInventory(): Promise<GetResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceInventoryWithOptions(runtime);
  }

  /**
   * @summary Queries the resource relationships supported by a resource type.
   *
   * @description This topic provides an example to show how to query the resource relationships that are supported by the ACS::ECS::Instance resource type.
   *
   * @param request GetSupportedResourceRelationConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSupportedResourceRelationConfigResponse
   */
  async getSupportedResourceRelationConfigWithOptions(request: GetSupportedResourceRelationConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetSupportedResourceRelationConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSupportedResourceRelationConfig",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSupportedResourceRelationConfigResponse>(await this.callApi(params, req, runtime), new GetSupportedResourceRelationConfigResponse({}));
  }

  /**
   * @summary Queries the resource relationships supported by a resource type.
   *
   * @description This topic provides an example to show how to query the resource relationships that are supported by the ACS::ECS::Instance resource type.
   *
   * @param request GetSupportedResourceRelationConfigRequest
   * @return GetSupportedResourceRelationConfigResponse
   */
  async getSupportedResourceRelationConfig(request: GetSupportedResourceRelationConfigRequest): Promise<GetSupportedResourceRelationConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupportedResourceRelationConfigWithOptions(request, runtime);
  }

  /**
   * @summary Ignores the compliance evaluation results of one or more non-compliant resources that are evaluated based on a rule in an account group.
   *
   * @description After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` incompliant resource that is evaluated by using the `cr-7e72626622af0051***` rule in the `120886317861****` member account of the `ca-5b6c626622af008f****` account group. The ID of the region where the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   *
   * @param tmpReq IgnoreAggregateEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return IgnoreAggregateEvaluationResultsResponse
   */
  async ignoreAggregateEvaluationResultsWithOptions(tmpReq: IgnoreAggregateEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreAggregateEvaluationResultsResponse> {
    Util.validateModel(tmpReq);
    let request = new IgnoreAggregateEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.ignoreDate)) {
      body["IgnoreDate"] = request.ignoreDate;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IgnoreAggregateEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IgnoreAggregateEvaluationResultsResponse>(await this.callApi(params, req, runtime), new IgnoreAggregateEvaluationResultsResponse({}));
  }

  /**
   * @summary Ignores the compliance evaluation results of one or more non-compliant resources that are evaluated based on a rule in an account group.
   *
   * @description After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` incompliant resource that is evaluated by using the `cr-7e72626622af0051***` rule in the `120886317861****` member account of the `ca-5b6c626622af008f****` account group. The ID of the region where the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   *
   * @param request IgnoreAggregateEvaluationResultsRequest
   * @return IgnoreAggregateEvaluationResultsResponse
   */
  async ignoreAggregateEvaluationResults(request: IgnoreAggregateEvaluationResultsRequest): Promise<IgnoreAggregateEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreAggregateEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Ignores one or more resources that are evaluated as non-compliant by using a rule.
   *
   * @description After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` resource that is evaluated as incompliant by using the `cr-7e72626622af0051****` rule in the `100931896542****` account. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   *
   * @param tmpReq IgnoreEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return IgnoreEvaluationResultsResponse
   */
  async ignoreEvaluationResultsWithOptions(tmpReq: IgnoreEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<IgnoreEvaluationResultsResponse> {
    Util.validateModel(tmpReq);
    let request = new IgnoreEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.ignoreDate)) {
      body["IgnoreDate"] = request.ignoreDate;
    }

    if (!Util.isUnset(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "IgnoreEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IgnoreEvaluationResultsResponse>(await this.callApi(params, req, runtime), new IgnoreEvaluationResultsResponse({}));
  }

  /**
   * @summary Ignores one or more resources that are evaluated as non-compliant by using a rule.
   *
   * @description After you ignore a resource that is evaluated as incompliant by using a rule, the resource is still evaluated by using the rule, but the compliance result is Ignored.
   * This example shows how to ignore the `lb-hp3a3b4ztyfm2plgm****` resource that is evaluated as incompliant by using the `cr-7e72626622af0051****` rule in the `100931896542****` account. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   *
   * @param request IgnoreEvaluationResultsRequest
   * @return IgnoreEvaluationResultsResponse
   */
  async ignoreEvaluationResults(request: IgnoreEvaluationResultsRequest): Promise<IgnoreEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.ignoreEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of compliance packages in an account group.
   *
   * @description In this topic, the `ca-f632626622af0079****` account group is used as an example. The return result shows one compliance package whose ID is `cp-fdc8626622af00f9****`.
   *
   * @param request ListAggregateCompliancePacksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateCompliancePacksResponse
   */
  async listAggregateCompliancePacksWithOptions(request: ListAggregateCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateCompliancePacksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateCompliancePacksResponse>(await this.callApi(params, req, runtime), new ListAggregateCompliancePacksResponse({}));
  }

  /**
   * @summary Queries a list of compliance packages in an account group.
   *
   * @description In this topic, the `ca-f632626622af0079****` account group is used as an example. The return result shows one compliance package whose ID is `cp-fdc8626622af00f9****`.
   *
   * @param request ListAggregateCompliancePacksRequest
   * @return ListAggregateCompliancePacksResponse
   */
  async listAggregateCompliancePacks(request: ListAggregateCompliancePacksRequest): Promise<ListAggregateCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateCompliancePacksWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about all delivery channels in an account group.
   *
   * @param request ListAggregateConfigDeliveryChannelsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateConfigDeliveryChannelsResponse
   */
  async listAggregateConfigDeliveryChannelsWithOptions(request: ListAggregateConfigDeliveryChannelsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateConfigDeliveryChannelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.deliveryChannelIds)) {
      query["DeliveryChannelIds"] = request.deliveryChannelIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateConfigDeliveryChannels",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateConfigDeliveryChannelsResponse>(await this.callApi(params, req, runtime), new ListAggregateConfigDeliveryChannelsResponse({}));
  }

  /**
   * @summary Queries the information about all delivery channels in an account group.
   *
   * @param request ListAggregateConfigDeliveryChannelsRequest
   * @return ListAggregateConfigDeliveryChannelsResponse
   */
  async listAggregateConfigDeliveryChannels(request: ListAggregateConfigDeliveryChannelsRequest): Promise<ListAggregateConfigDeliveryChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateConfigDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation results of resources based on a rule in an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of resources based on the `cr-888f626622af00ae****` rule in the `ca-d1e3326622af00cb****` account group. The returned result indicates that the `Bucket-test` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Object Storage Service (OSS) bucket.
   *
   * @param request ListAggregateConfigRuleEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateConfigRuleEvaluationResultsResponse
   */
  async listAggregateConfigRuleEvaluationResultsWithOptions(request: ListAggregateConfigRuleEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateConfigRuleEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateConfigRuleEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateConfigRuleEvaluationResultsResponse>(await this.callApi(params, req, runtime), new ListAggregateConfigRuleEvaluationResultsResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation results of resources based on a rule in an account group.
   *
   * @description This topic provides an example on how to query the compliance evaluation results of resources based on the `cr-888f626622af00ae****` rule in the `ca-d1e3326622af00cb****` account group. The returned result indicates that the `Bucket-test` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Object Storage Service (OSS) bucket.
   *
   * @param request ListAggregateConfigRuleEvaluationResultsRequest
   * @return ListAggregateConfigRuleEvaluationResultsResponse
   */
  async listAggregateConfigRuleEvaluationResults(request: ListAggregateConfigRuleEvaluationResultsRequest): Promise<ListAggregateConfigRuleEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics of compliance evaluation results of an account group.
   *
   * @description This topic provides an example on how to query the statistics of compliance evaluation results of an account group whose ID is ca-edd3626622af00b3\\*\\*\\*\\*.
   *
   * @param request ListAggregateConfigRuleEvaluationStatisticsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateConfigRuleEvaluationStatisticsResponse
   */
  async listAggregateConfigRuleEvaluationStatisticsWithOptions(request: ListAggregateConfigRuleEvaluationStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateConfigRuleEvaluationStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateConfigRuleEvaluationStatistics",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateConfigRuleEvaluationStatisticsResponse>(await this.callApi(params, req, runtime), new ListAggregateConfigRuleEvaluationStatisticsResponse({}));
  }

  /**
   * @summary Queries the statistics of compliance evaluation results of an account group.
   *
   * @description This topic provides an example on how to query the statistics of compliance evaluation results of an account group whose ID is ca-edd3626622af00b3\\*\\*\\*\\*.
   *
   * @param request ListAggregateConfigRuleEvaluationStatisticsRequest
   * @return ListAggregateConfigRuleEvaluationStatisticsResponse
   */
  async listAggregateConfigRuleEvaluationStatistics(request: ListAggregateConfigRuleEvaluationStatisticsRequest): Promise<ListAggregateConfigRuleEvaluationStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateConfigRuleEvaluationStatisticsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of rules in an account group.
   *
   * @description This topic provides an example on how to query the rules in an account group whose ID is `ca-f632626622af0079****`. The returned result shows a total of one rule and two evaluated resources. The resources are both evaluated as `COMPLIANT`.
   *
   * @param request ListAggregateConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateConfigRulesResponse
   */
  async listAggregateConfigRulesWithOptions(request: ListAggregateConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!Util.isUnset(request.configRuleName)) {
      query["ConfigRuleName"] = request.configRuleName;
    }

    if (!Util.isUnset(request.configRuleState)) {
      query["ConfigRuleState"] = request.configRuleState;
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

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateConfigRulesResponse>(await this.callApi(params, req, runtime), new ListAggregateConfigRulesResponse({}));
  }

  /**
   * @summary Queries a list of rules in an account group.
   *
   * @description This topic provides an example on how to query the rules in an account group whose ID is `ca-f632626622af0079****`. The returned result shows a total of one rule and two evaluated resources. The resources are both evaluated as `COMPLIANT`.
   *
   * @param request ListAggregateConfigRulesRequest
   * @return ListAggregateConfigRulesResponse
   */
  async listAggregateConfigRules(request: ListAggregateConfigRulesRequest): Promise<ListAggregateConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Obtains a list of resources aggregated across regions within all member accounts of a specific account group.
   *
   * @description This topic provides an example on how to query the resources within the member account `100931896542****` of the account group `ca-c560626622af0005****`. The result indicates that eight resources are queried.
   *
   * @param request ListAggregateDiscoveredResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateDiscoveredResourcesResponse
   */
  async listAggregateDiscoveredResourcesWithOptions(request: ListAggregateDiscoveredResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateDiscoveredResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateDiscoveredResources",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateDiscoveredResourcesResponse>(await this.callApi(params, req, runtime), new ListAggregateDiscoveredResourcesResponse({}));
  }

  /**
   * @summary Obtains a list of resources aggregated across regions within all member accounts of a specific account group.
   *
   * @description This topic provides an example on how to query the resources within the member account `100931896542****` of the account group `ca-c560626622af0005****`. The result indicates that eight resources are queried.
   *
   * @param request ListAggregateDiscoveredResourcesRequest
   * @return ListAggregateDiscoveredResourcesResponse
   */
  async listAggregateDiscoveredResources(request: ListAggregateDiscoveredResourcesRequest): Promise<ListAggregateDiscoveredResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateDiscoveredResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the remediation records of a rule in an account group.
   *
   * @description This topic provides an example on how to query the remediation records of the `cr-d04a626622af00af****` rule in the `ca-edd3626622af00b3****` account group.
   *
   * @param request ListAggregateRemediationExecutionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateRemediationExecutionsResponse
   */
  async listAggregateRemediationExecutionsWithOptions(request: ListAggregateRemediationExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateRemediationExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateRemediationExecutions",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateRemediationExecutionsResponse>(await this.callApi(params, req, runtime), new ListAggregateRemediationExecutionsResponse({}));
  }

  /**
   * @summary Queries the remediation records of a rule in an account group.
   *
   * @description This topic provides an example on how to query the remediation records of the `cr-d04a626622af00af****` rule in the `ca-edd3626622af00b3****` account group.
   *
   * @param request ListAggregateRemediationExecutionsRequest
   * @return ListAggregateRemediationExecutionsResponse
   */
  async listAggregateRemediationExecutions(request: ListAggregateRemediationExecutionsRequest): Promise<ListAggregateRemediationExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateRemediationExecutionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of remediation templates for a rule in an account group.
   *
   * @description This topic provides an example on how to query the remediation templates of the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`.
   *
   * @param request ListAggregateRemediationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateRemediationsResponse
   */
  async listAggregateRemediationsWithOptions(request: ListAggregateRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateRemediationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateRemediationsResponse>(await this.callApi(params, req, runtime), new ListAggregateRemediationsResponse({}));
  }

  /**
   * @summary Queries a list of remediation templates for a rule in an account group.
   *
   * @description This topic provides an example on how to query the remediation templates of the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`.
   *
   * @param request ListAggregateRemediationsRequest
   * @return ListAggregateRemediationsResponse
   */
  async listAggregateRemediations(request: ListAggregateRemediationsRequest): Promise<ListAggregateRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateRemediationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation results of resources in an account group.
   *
   * @description This example shows how to query the compliance evaluation result of the `23642660635396****` resource in the `ca-7f00626622af0041****` account group. The resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
   *
   * @param request ListAggregateResourceEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateResourceEvaluationResultsResponse
   */
  async listAggregateResourceEvaluationResultsWithOptions(request: ListAggregateResourceEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateResourceEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
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
      action: "ListAggregateResourceEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateResourceEvaluationResultsResponse>(await this.callApi(params, req, runtime), new ListAggregateResourceEvaluationResultsResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation results of resources in an account group.
   *
   * @description This example shows how to query the compliance evaluation result of the `23642660635396****` resource in the `ca-7f00626622af0041****` account group. The resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
   *
   * @param request ListAggregateResourceEvaluationResultsRequest
   * @return ListAggregateResourceEvaluationResultsResponse
   */
  async listAggregateResourceEvaluationResults(request: ListAggregateResourceEvaluationResultsRequest): Promise<ListAggregateResourceEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateResourceEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of the resources of a specific resource in an account group.
   *
   * @description This topic provides an example on how to query the disks that are associated with an Elastic Compute Service (ECS) instance in an account group.
   *
   * @param request ListAggregateResourceRelationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateResourceRelationsResponse
   */
  async listAggregateResourceRelationsWithOptions(request: ListAggregateResourceRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateResourceRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.targetResourceId)) {
      query["TargetResourceId"] = request.targetResourceId;
    }

    if (!Util.isUnset(request.targetResourceType)) {
      query["TargetResourceType"] = request.targetResourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateResourceRelations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateResourceRelationsResponse>(await this.callApi(params, req, runtime), new ListAggregateResourceRelationsResponse({}));
  }

  /**
   * @summary Queries a list of the resources of a specific resource in an account group.
   *
   * @description This topic provides an example on how to query the disks that are associated with an Elastic Compute Service (ECS) instance in an account group.
   *
   * @param request ListAggregateResourceRelationsRequest
   * @return ListAggregateResourceRelationsResponse
   */
  async listAggregateResourceRelations(request: ListAggregateResourceRelationsRequest): Promise<ListAggregateResourceRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateResourceRelationsWithOptions(request, runtime);
  }

  /**
   * @summary Obtains resources in a specific account group based on the fields in the resource properties by using a SELECT statement.
   *
   * @description When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see [Alibaba Cloud Config Resource Schema](javascript:void\\(0\\))
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` in the account group `ca-4b05626622af000c****` by using the advanced search feature.
   *
   * @param request ListAggregateResourcesByAdvancedSearchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregateResourcesByAdvancedSearchResponse
   */
  async listAggregateResourcesByAdvancedSearchWithOptions(request: ListAggregateResourcesByAdvancedSearchRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateResourcesByAdvancedSearchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregateResourcesByAdvancedSearch",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregateResourcesByAdvancedSearchResponse>(await this.callApi(params, req, runtime), new ListAggregateResourcesByAdvancedSearchResponse({}));
  }

  /**
   * @summary Obtains resources in a specific account group based on the fields in the resource properties by using a SELECT statement.
   *
   * @description When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see [Alibaba Cloud Config Resource Schema](javascript:void\\(0\\))
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` in the account group `ca-4b05626622af000c****` by using the advanced search feature.
   *
   * @param request ListAggregateResourcesByAdvancedSearchRequest
   * @return ListAggregateResourcesByAdvancedSearchResponse
   */
  async listAggregateResourcesByAdvancedSearch(request: ListAggregateResourcesByAdvancedSearchRequest): Promise<ListAggregateResourcesByAdvancedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateResourcesByAdvancedSearchWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of account groups that the current account manages or to which the current account belongs.
   *
   * @description The sample request in this topic shows you how to query account groups. A maximum of 10 entries can be returned for the request. As shown in the responses, the account group returned is named as `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type, which indicates a custom account group. The account group contains two member accounts.
   *
   * @param request ListAggregatorsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAggregatorsResponse
   */
  async listAggregatorsWithOptions(request: ListAggregatorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregatorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAggregators",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAggregatorsResponse>(await this.callApi(params, req, runtime), new ListAggregatorsResponse({}));
  }

  /**
   * @summary Queries a list of account groups that the current account manages or to which the current account belongs.
   *
   * @description The sample request in this topic shows you how to query account groups. A maximum of 10 entries can be returned for the request. As shown in the responses, the account group returned is named as `Test_Group`, its description is `Test account group`, and it is of the `CUSTOM` type, which indicates a custom account group. The account group contains two member accounts.
   *
   * @param request ListAggregatorsRequest
   * @return ListAggregatorsResponse
   */
  async listAggregators(request: ListAggregatorsRequest): Promise<ListAggregatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregatorsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of compliance package templates.
   *
   * @description This topic provides an example on how to query the details of a compliance package template whose ID is `ct-d254ff4e06a300cf****`. The returned result indicates that the template name is `BestPracticesForNetwork`, the template ID is `ct-d254ff4e06a300cf****`, and the ID of the managed rule of the template is `slb-servercertificate-expired-check`.
   *
   * @param request ListCompliancePackTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCompliancePackTemplatesResponse
   */
  async listCompliancePackTemplatesWithOptions(request: ListCompliancePackTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListCompliancePackTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compliancePackTemplateId)) {
      query["CompliancePackTemplateId"] = request.compliancePackTemplateId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCompliancePackTemplates",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCompliancePackTemplatesResponse>(await this.callApi(params, req, runtime), new ListCompliancePackTemplatesResponse({}));
  }

  /**
   * @summary Queries a list of compliance package templates.
   *
   * @description This topic provides an example on how to query the details of a compliance package template whose ID is `ct-d254ff4e06a300cf****`. The returned result indicates that the template name is `BestPracticesForNetwork`, the template ID is `ct-d254ff4e06a300cf****`, and the ID of the managed rule of the template is `slb-servercertificate-expired-check`.
   *
   * @param request ListCompliancePackTemplatesRequest
   * @return ListCompliancePackTemplatesResponse
   */
  async listCompliancePackTemplates(request: ListCompliancePackTemplatesRequest): Promise<ListCompliancePackTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCompliancePackTemplatesWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of compliance packages.
   *
   * @description This topic provides an example of how to query compliance packages. The return result shows the details of the `cp-fdc8626622af00f9****` compliance package.
   *
   * @param request ListCompliancePacksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCompliancePacksResponse
   */
  async listCompliancePacksWithOptions(request: ListCompliancePacksRequest, runtime: $Util.RuntimeOptions): Promise<ListCompliancePacksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCompliancePacks",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCompliancePacksResponse>(await this.callApi(params, req, runtime), new ListCompliancePacksResponse({}));
  }

  /**
   * @summary Queries a list of compliance packages.
   *
   * @description This topic provides an example of how to query compliance packages. The return result shows the details of the `cp-fdc8626622af00f9****` compliance package.
   *
   * @param request ListCompliancePacksRequest
   * @return ListCompliancePacksResponse
   */
  async listCompliancePacks(request: ListCompliancePacksRequest): Promise<ListCompliancePacksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCompliancePacksWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of delivery channels.
   *
   * @param request ListConfigDeliveryChannelsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConfigDeliveryChannelsResponse
   */
  async listConfigDeliveryChannelsWithOptions(request: ListConfigDeliveryChannelsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigDeliveryChannelsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deliveryChannelIds)) {
      query["DeliveryChannelIds"] = request.deliveryChannelIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigDeliveryChannels",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigDeliveryChannelsResponse>(await this.callApi(params, req, runtime), new ListConfigDeliveryChannelsResponse({}));
  }

  /**
   * @summary Queries a list of delivery channels.
   *
   * @param request ListConfigDeliveryChannelsRequest
   * @return ListConfigDeliveryChannelsResponse
   */
  async listConfigDeliveryChannels(request: ListConfigDeliveryChannelsRequest): Promise<ListConfigDeliveryChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of compliance evaluation results of resources based on a rule.
   *
   * @description This topic provides an example on how to query the compliance evaluation result of resources based on a rule whose ID is `cr-cac56457e0d900d3****`. The returned result indicates that the `i-hp3e4kvhzqn2s11t****` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Elastic Compute Service (ECS) instance.
   *
   * @param request ListConfigRuleEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConfigRuleEvaluationResultsResponse
   */
  async listConfigRuleEvaluationResultsWithOptions(request: ListConfigRuleEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigRuleEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigRuleEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigRuleEvaluationResultsResponse>(await this.callApi(params, req, runtime), new ListConfigRuleEvaluationResultsResponse({}));
  }

  /**
   * @summary Queries a list of compliance evaluation results of resources based on a rule.
   *
   * @description This topic provides an example on how to query the compliance evaluation result of resources based on a rule whose ID is `cr-cac56457e0d900d3****`. The returned result indicates that the `i-hp3e4kvhzqn2s11t****` resource is evaluated as `NON_COMPLIANT` by using the rule. The resource is an Elastic Compute Service (ECS) instance.
   *
   * @param request ListConfigRuleEvaluationResultsRequest
   * @return ListConfigRuleEvaluationResultsResponse
   */
  async listConfigRuleEvaluationResults(request: ListConfigRuleEvaluationResultsRequest): Promise<ListConfigRuleEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the statistics of compliance evaluation results of the current Alibaba Cloud account.
   *
   * @param request ListConfigRuleEvaluationStatisticsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConfigRuleEvaluationStatisticsResponse
   */
  async listConfigRuleEvaluationStatisticsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListConfigRuleEvaluationStatisticsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListConfigRuleEvaluationStatistics",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigRuleEvaluationStatisticsResponse>(await this.callApi(params, req, runtime), new ListConfigRuleEvaluationStatisticsResponse({}));
  }

  /**
   * @summary Queries the statistics of compliance evaluation results of the current Alibaba Cloud account.
   *
   * @return ListConfigRuleEvaluationStatisticsResponse
   */
  async listConfigRuleEvaluationStatistics(): Promise<ListConfigRuleEvaluationStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRuleEvaluationStatisticsWithOptions(runtime);
  }

  /**
   * @summary Queries the rules of the current account.
   *
   * @description This topic provides an example on how to query the rules of the current account. The response shows that the current account has a total of one rule and three evaluated resources. The resources are evaluated as compliant.
   *
   * @param request ListConfigRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConfigRulesResponse
   */
  async listConfigRulesWithOptions(request: ListConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!Util.isUnset(request.configRuleName)) {
      query["ConfigRuleName"] = request.configRuleName;
    }

    if (!Util.isUnset(request.configRuleState)) {
      query["ConfigRuleState"] = request.configRuleState;
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

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConfigRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConfigRulesResponse>(await this.callApi(params, req, runtime), new ListConfigRulesResponse({}));
  }

  /**
   * @summary Queries the rules of the current account.
   *
   * @description This topic provides an example on how to query the rules of the current account. The response shows that the current account has a total of one rule and three evaluated resources. The resources are evaluated as compliant.
   *
   * @param request ListConfigRulesRequest
   * @return ListConfigRulesResponse
   */
  async listConfigRules(request: ListConfigRulesRequest): Promise<ListConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRulesWithOptions(request, runtime);
  }

  /**
   * @summary Obtains a list of resources aggregated across regions within an Alibaba Cloud account.
   *
   * @description This topic provides an example on how to call the ListDiscoveredResources operation to query the resources in the current Alibaba Cloud account. The returned result indicates that a total of eight resources exist in the account.
   *
   * @param request ListDiscoveredResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDiscoveredResourcesResponse
   */
  async listDiscoveredResourcesWithOptions(request: ListDiscoveredResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDiscoveredResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regions)) {
      query["Regions"] = request.regions;
    }

    if (!Util.isUnset(request.resourceDeleted)) {
      query["ResourceDeleted"] = request.resourceDeleted;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDiscoveredResources",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDiscoveredResourcesResponse>(await this.callApi(params, req, runtime), new ListDiscoveredResourcesResponse({}));
  }

  /**
   * @summary Obtains a list of resources aggregated across regions within an Alibaba Cloud account.
   *
   * @description This topic provides an example on how to call the ListDiscoveredResources operation to query the resources in the current Alibaba Cloud account. The returned result indicates that a total of eight resources exist in the account.
   *
   * @param request ListDiscoveredResourcesRequest
   * @return ListDiscoveredResourcesResponse
   */
  async listDiscoveredResources(request: ListDiscoveredResourcesRequest): Promise<ListDiscoveredResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDiscoveredResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the cloud services that can be integrated by the current Alibaba Cloud account.
   *
   * @description This topic provides an example on how to query the cloud services that can be integrated by the current Alibaba Cloud account.
   *
   * @param request ListIntegratedServiceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIntegratedServiceResponse
   */
  async listIntegratedServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<ListIntegratedServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListIntegratedService",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntegratedServiceResponse>(await this.callApi(params, req, runtime), new ListIntegratedServiceResponse({}));
  }

  /**
   * @summary Queries the cloud services that can be integrated by the current Alibaba Cloud account.
   *
   * @description This topic provides an example on how to query the cloud services that can be integrated by the current Alibaba Cloud account.
   *
   * @return ListIntegratedServiceResponse
   */
  async listIntegratedService(): Promise<ListIntegratedServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntegratedServiceWithOptions(runtime);
  }

  /**
   * @summary Queries managed rules.
   *
   * @description This topic describes how to query the managed rules of Alibaba Cloud CDN by using the `CDN` keyword. The returned result shows that only one managed rule exists. You can view the rule details in the result.
   *
   * @param request ListManagedRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListManagedRulesResponse
   */
  async listManagedRulesWithOptions(request: ListManagedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListManagedRulesResponse> {
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

    if (!Util.isUnset(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!Util.isUnset(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListManagedRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListManagedRulesResponse>(await this.callApi(params, req, runtime), new ListManagedRulesResponse({}));
  }

  /**
   * @summary Queries managed rules.
   *
   * @description This topic describes how to query the managed rules of Alibaba Cloud CDN by using the `CDN` keyword. The returned result shows that only one managed rule exists. You can view the rule details in the result.
   *
   * @param request ListManagedRulesRequest
   * @return ListManagedRulesResponse
   */
  async listManagedRules(request: ListManagedRulesRequest): Promise<ListManagedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listManagedRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of evaluation rules.
   *
   * @param tmpReq ListPreManagedRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPreManagedRulesResponse
   */
  async listPreManagedRulesWithOptions(tmpReq: ListPreManagedRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListPreManagedRulesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPreManagedRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceTypes)) {
      request.resourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTypes, "ResourceTypes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceTypesShrink)) {
      body["ResourceTypes"] = request.resourceTypesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPreManagedRules",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPreManagedRulesResponse>(await this.callApi(params, req, runtime), new ListPreManagedRulesResponse({}));
  }

  /**
   * @summary Queries a list of evaluation rules.
   *
   * @param request ListPreManagedRulesRequest
   * @return ListPreManagedRulesResponse
   */
  async listPreManagedRules(request: ListPreManagedRulesRequest): Promise<ListPreManagedRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPreManagedRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the remediation records of a rule.
   *
   * @description This topic provides an example on how to query the remediation records of the rule cr-5392626622af0000\\*\\*\\*\\*.
   *
   * @param request ListRemediationExecutionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRemediationExecutionsResponse
   */
  async listRemediationExecutionsWithOptions(request: ListRemediationExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRemediationExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRemediationExecutions",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRemediationExecutionsResponse>(await this.callApi(params, req, runtime), new ListRemediationExecutionsResponse({}));
  }

  /**
   * @summary Queries the remediation records of a rule.
   *
   * @description This topic provides an example on how to query the remediation records of the rule cr-5392626622af0000\\*\\*\\*\\*.
   *
   * @param request ListRemediationExecutionsRequest
   * @return ListRemediationExecutionsResponse
   */
  async listRemediationExecutions(request: ListRemediationExecutionsRequest): Promise<ListRemediationExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemediationExecutionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of remediation templates for a managed rule.
   *
   * @description In this topic, the `oss-bucket-public-write-prohibited` managed rule is used as an example. The return result shows the details of the remediation template of the `OOS` type for the managed rule. OOS represents Operation Orchestration Service.
   *
   * @param request ListRemediationTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRemediationTemplatesResponse
   */
  async listRemediationTemplatesWithOptions(request: ListRemediationTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListRemediationTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.managedRuleIdentifier)) {
      query["ManagedRuleIdentifier"] = request.managedRuleIdentifier;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remediationType)) {
      query["RemediationType"] = request.remediationType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRemediationTemplates",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRemediationTemplatesResponse>(await this.callApi(params, req, runtime), new ListRemediationTemplatesResponse({}));
  }

  /**
   * @summary Queries a list of remediation templates for a managed rule.
   *
   * @description In this topic, the `oss-bucket-public-write-prohibited` managed rule is used as an example. The return result shows the details of the remediation template of the `OOS` type for the managed rule. OOS represents Operation Orchestration Service.
   *
   * @param request ListRemediationTemplatesRequest
   * @return ListRemediationTemplatesResponse
   */
  async listRemediationTemplates(request: ListRemediationTemplatesRequest): Promise<ListRemediationTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemediationTemplatesWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the execution of remediation templates.
   *
   * @description This topic provides an example on how to query the remediation templates for the rule whose ID is `cr-6b7c626622af00b4****`.
   *
   * @param request ListRemediationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRemediationsResponse
   */
  async listRemediationsWithOptions(request: ListRemediationsRequest, runtime: $Util.RuntimeOptions): Promise<ListRemediationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleIds)) {
      query["ConfigRuleIds"] = request.configRuleIds;
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
      action: "ListRemediations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRemediationsResponse>(await this.callApi(params, req, runtime), new ListRemediationsResponse({}));
  }

  /**
   * @summary Queries the information about the execution of remediation templates.
   *
   * @description This topic provides an example on how to query the remediation templates for the rule whose ID is `cr-6b7c626622af00b4****`.
   *
   * @param request ListRemediationsRequest
   * @return ListRemediationsResponse
   */
  async listRemediations(request: ListRemediationsRequest): Promise<ListRemediationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemediationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the compliance evaluation result of a resource.
   *
   * @description In this example, the compliance evaluation result of the `23642660635396****` resource is queried and the resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
   *
   * @param request ListResourceEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListResourceEvaluationResultsResponse
   */
  async listResourceEvaluationResultsWithOptions(request: ListResourceEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.complianceType)) {
      query["ComplianceType"] = request.complianceType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
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
      action: "ListResourceEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceEvaluationResultsResponse>(await this.callApi(params, req, runtime), new ListResourceEvaluationResultsResponse({}));
  }

  /**
   * @summary Queries the compliance evaluation result of a resource.
   *
   * @description In this example, the compliance evaluation result of the `23642660635396****` resource is queried and the resource is a RAM user. The returned result indicates that the resource is evaluated as `NON_COMPLIANT` by using the `cr-7f7d626622af0041****` rule.
   *
   * @param request ListResourceEvaluationResultsRequest
   * @return ListResourceEvaluationResultsResponse
   */
  async listResourceEvaluationResults(request: ListResourceEvaluationResultsRequest): Promise<ListResourceEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of resources that associate with a specific resource.
   *
   * @description This topic provides an example on how to query the disks that are associated with an Elastic Compute Service (ECS) instance within the current Alibaba Cloud account.
   *
   * @param request ListResourceRelationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListResourceRelationsResponse
   */
  async listResourceRelationsWithOptions(request: ListResourceRelationsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceRelationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.relationType)) {
      query["RelationType"] = request.relationType;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.targetResourceId)) {
      query["TargetResourceId"] = request.targetResourceId;
    }

    if (!Util.isUnset(request.targetResourceType)) {
      query["TargetResourceType"] = request.targetResourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceRelations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceRelationsResponse>(await this.callApi(params, req, runtime), new ListResourceRelationsResponse({}));
  }

  /**
   * @summary Queries a list of resources that associate with a specific resource.
   *
   * @description This topic provides an example on how to query the disks that are associated with an Elastic Compute Service (ECS) instance within the current Alibaba Cloud account.
   *
   * @param request ListResourceRelationsRequest
   * @return ListResourceRelationsResponse
   */
  async listResourceRelations(request: ListResourceRelationsRequest): Promise<ListResourceRelationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceRelationsWithOptions(request, runtime);
  }

  /**
   * @summary Obtains resources based on the fields in the resource properties by using a SELECT statement.
   *
   * @description When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see [Alibaba Cloud Config Resource Schema](javascript:void\\(0\\)).
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` within the current account by using the advanced search feature.
   *
   * @param request ListResourcesByAdvancedSearchRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListResourcesByAdvancedSearchResponse
   */
  async listResourcesByAdvancedSearchWithOptions(request: ListResourcesByAdvancedSearchRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesByAdvancedSearchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.sql)) {
      query["Sql"] = request.sql;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourcesByAdvancedSearch",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesByAdvancedSearchResponse>(await this.callApi(params, req, runtime), new ListResourcesByAdvancedSearchResponse({}));
  }

  /**
   * @summary Obtains resources based on the fields in the resource properties by using a SELECT statement.
   *
   * @description When you write a `SELECT` statement, you must obtain the fields and the data types of the fields from the property file of the resource type. For more information about property files, see [Alibaba Cloud Config Resource Schema](javascript:void\\(0\\)).
   * > 
   * *   Each resource type supported by Cloud Config has a property file. Property files are named based on the related resource types. For example, the property file of the `ACS::ECS::Instance` resource type is named `ACS_ECS_Instance.properties.json`. Property files of different resource types are placed under the `config/properties/resource-types` path.
   * *   For more information about the examples and limits on SQL query statements, see [Examples of SQL query statements](https://help.aliyun.com/document_detail/398718.html) and [Limits on SQL query statements](https://help.aliyun.com/document_detail/398750.html).
   * This topic provides an example on how to obtain all resources whose tag key is `business` and whose tag value is `online` within the current account by using the advanced search feature.
   *
   * @param request ListResourcesByAdvancedSearchRequest
   * @return ListResourcesByAdvancedSearchResponse
   */
  async listResourcesByAdvancedSearch(request: ListResourcesByAdvancedSearchRequest): Promise<ListResourcesByAdvancedSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesByAdvancedSearchWithOptions(request, runtime);
  }

  /**
   * @summary Queries the cloud services and resource types that are supported by Cloud Config.
   *
   * @description This topic provides an example on how to query the Alibaba Cloud services and resource types supported by a Cloud Config.
   *
   * @param request ListSupportedProductsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSupportedProductsResponse
   */
  async listSupportedProductsWithOptions(request: ListSupportedProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListSupportedProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSupportedProducts",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSupportedProductsResponse>(await this.callApi(params, req, runtime), new ListSupportedProductsResponse({}));
  }

  /**
   * @summary Queries the cloud services and resource types that are supported by Cloud Config.
   *
   * @description This topic provides an example on how to query the Alibaba Cloud services and resource types supported by a Cloud Config.
   *
   * @param request ListSupportedProductsRequest
   * @return ListSupportedProductsResponse
   */
  async listSupportedProducts(request: ListSupportedProductsRequest): Promise<ListSupportedProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSupportedProductsWithOptions(request, runtime);
  }

  /**
   * @summary Queries tags that are added to specified resources.
   *
   * @param tmpReq ListTagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-09-07",
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

  /**
   * @summary Queries tags that are added to specified resources.
   *
   * @param request ListTagResourcesRequest
   * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Submits the evaluation results of a custom rule to Function Compute.
   *
   * @param request PutEvaluationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutEvaluationsResponse
   */
  async putEvaluationsWithOptions(request: PutEvaluationsRequest, runtime: $Util.RuntimeOptions): Promise<PutEvaluationsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deleteMode)) {
      body["DeleteMode"] = request.deleteMode;
    }

    if (!Util.isUnset(request.evaluations)) {
      body["Evaluations"] = request.evaluations;
    }

    if (!Util.isUnset(request.resultToken)) {
      body["ResultToken"] = request.resultToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutEvaluations",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutEvaluationsResponse>(await this.callApi(params, req, runtime), new PutEvaluationsResponse({}));
  }

  /**
   * @summary Submits the evaluation results of a custom rule to Function Compute.
   *
   * @param request PutEvaluationsRequest
   * @return PutEvaluationsResponse
   */
  async putEvaluations(request: PutEvaluationsRequest): Promise<PutEvaluationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEvaluationsWithOptions(request, runtime);
  }

  /**
   * @summary Re-evaluates one or more incompliant resources that are evaluated based on a rule in an account group.
   *
   * @description ### Prerequisites
   * One or more non-compliant resources that are evaluated based on a rule are ignored.
   * ### Usage notes
   * The sample request in this topic shows you how to re-evaluate the `lb-hp3a3b4ztyfm2plgm****` non-compliant resource that is evaluated by the `cr-7e72626622af0051***` rule in the `120886317861****` member account of the `ca-5b6c626622af008f****` account group. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   *
   * @param tmpReq RevertAggregateEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevertAggregateEvaluationResultsResponse
   */
  async revertAggregateEvaluationResultsWithOptions(tmpReq: RevertAggregateEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<RevertAggregateEvaluationResultsResponse> {
    Util.validateModel(tmpReq);
    let request = new RevertAggregateEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevertAggregateEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevertAggregateEvaluationResultsResponse>(await this.callApi(params, req, runtime), new RevertAggregateEvaluationResultsResponse({}));
  }

  /**
   * @summary Re-evaluates one or more incompliant resources that are evaluated based on a rule in an account group.
   *
   * @description ### Prerequisites
   * One or more non-compliant resources that are evaluated based on a rule are ignored.
   * ### Usage notes
   * The sample request in this topic shows you how to re-evaluate the `lb-hp3a3b4ztyfm2plgm****` non-compliant resource that is evaluated by the `cr-7e72626622af0051***` rule in the `120886317861****` member account of the `ca-5b6c626622af008f****` account group. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.
   *
   * @param request RevertAggregateEvaluationResultsRequest
   * @return RevertAggregateEvaluationResultsResponse
   */
  async revertAggregateEvaluationResults(request: RevertAggregateEvaluationResultsRequest): Promise<RevertAggregateEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revertAggregateEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Re-evaluates non-compliant resources that are evaluated based on a rule.
   *
   * @description ### Prerequisites
   * One or more non-compliant resources that are evaluated by a rule are ignored.
   * ### Usage notes
   * The sample request in this topic shows you how to re-evaluate the `lb-hp3a3b4ztyfm2plgm****` non-compliant resource that is evaluated by the `cr-7e72626622af0051****` rule. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.``
   *
   * @param tmpReq RevertEvaluationResultsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevertEvaluationResultsResponse
   */
  async revertEvaluationResultsWithOptions(tmpReq: RevertEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<RevertEvaluationResultsResponse> {
    Util.validateModel(tmpReq);
    let request = new RevertEvaluationResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resources)) {
      request.resourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resources, "Resources", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.resourcesShrink)) {
      body["Resources"] = request.resourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevertEvaluationResults",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevertEvaluationResultsResponse>(await this.callApi(params, req, runtime), new RevertEvaluationResultsResponse({}));
  }

  /**
   * @summary Re-evaluates non-compliant resources that are evaluated based on a rule.
   *
   * @description ### Prerequisites
   * One or more non-compliant resources that are evaluated by a rule are ignored.
   * ### Usage notes
   * The sample request in this topic shows you how to re-evaluate the `lb-hp3a3b4ztyfm2plgm****` non-compliant resource that is evaluated by the `cr-7e72626622af0051****` rule. The ID of the region in which the resource resides is `cn-beijing`, and the type of the resource is `ACS::SLB::LoadBalancer`.``
   *
   * @param request RevertEvaluationResultsRequest
   * @return RevertEvaluationResultsResponse
   */
  async revertEvaluationResults(request: RevertEvaluationResultsRequest): Promise<RevertEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revertEvaluationResultsWithOptions(request, runtime);
  }

  /**
   * @summary Starts to evaluate the involved resources by using a rule in an account group.
   *
   * @description > After you call this operation, the compliance evaluation is performed only once. To query the compliance evaluation results returned by the rule, call the ListAggregateConfigRuleEvaluationResults operation. For more information, see [ListAggregateConfigRuleEvaluationResults](https://help.aliyun.com/document_detail/265979.html).
   * The sample request in this topic shows how to use the `cr-c169626622af009f****` rule in the `ca-3a58626622af0005****` account group to evaluate resources.
   *
   * @param request StartAggregateConfigRuleEvaluationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartAggregateConfigRuleEvaluationResponse
   */
  async startAggregateConfigRuleEvaluationWithOptions(request: StartAggregateConfigRuleEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<StartAggregateConfigRuleEvaluationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.revertEvaluation)) {
      query["RevertEvaluation"] = request.revertEvaluation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartAggregateConfigRuleEvaluation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartAggregateConfigRuleEvaluationResponse>(await this.callApi(params, req, runtime), new StartAggregateConfigRuleEvaluationResponse({}));
  }

  /**
   * @summary Starts to evaluate the involved resources by using a rule in an account group.
   *
   * @description > After you call this operation, the compliance evaluation is performed only once. To query the compliance evaluation results returned by the rule, call the ListAggregateConfigRuleEvaluationResults operation. For more information, see [ListAggregateConfigRuleEvaluationResults](https://help.aliyun.com/document_detail/265979.html).
   * The sample request in this topic shows how to use the `cr-c169626622af009f****` rule in the `ca-3a58626622af0005****` account group to evaluate resources.
   *
   * @param request StartAggregateConfigRuleEvaluationRequest
   * @return StartAggregateConfigRuleEvaluationResponse
   */
  async startAggregateConfigRuleEvaluation(request: StartAggregateConfigRuleEvaluationRequest): Promise<StartAggregateConfigRuleEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAggregateConfigRuleEvaluationWithOptions(request, runtime);
  }

  /**
   * @summary Performs a remediation operation by using a rule in an account group.
   *
   * @description This topic provides an example on how to manually perform a remediation operation by using the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The return result shows that the manual execution is successful.
   *
   * @param request StartAggregateRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartAggregateRemediationResponse
   */
  async startAggregateRemediationWithOptions(request: StartAggregateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<StartAggregateRemediationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.resourceAccountId)) {
      query["ResourceAccountId"] = request.resourceAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartAggregateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartAggregateRemediationResponse>(await this.callApi(params, req, runtime), new StartAggregateRemediationResponse({}));
  }

  /**
   * @summary Performs a remediation operation by using a rule in an account group.
   *
   * @description This topic provides an example on how to manually perform a remediation operation by using the rule whose ID is `cr-6b7c626622af00b4****` in the account group whose ID is `ca-6b4a626622af0012****`. The return result shows that the manual execution is successful.
   *
   * @param request StartAggregateRemediationRequest
   * @return StartAggregateRemediationResponse
   */
  async startAggregateRemediation(request: StartAggregateRemediationRequest): Promise<StartAggregateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * @summary Re-evaluates the compliance of resources based on a rule or compliance package.
   *
   * @description In this example, the cr-9920626622af0035\\*\\*\\*\\* rule is used to re-evaluate the compliance of resources.
   *
   * @param request StartConfigRuleEvaluationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartConfigRuleEvaluationResponse
   */
  async startConfigRuleEvaluationWithOptions(request: StartConfigRuleEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<StartConfigRuleEvaluationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.compliancePackId)) {
      query["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.revertEvaluation)) {
      query["RevertEvaluation"] = request.revertEvaluation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartConfigRuleEvaluation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartConfigRuleEvaluationResponse>(await this.callApi(params, req, runtime), new StartConfigRuleEvaluationResponse({}));
  }

  /**
   * @summary Re-evaluates the compliance of resources based on a rule or compliance package.
   *
   * @description In this example, the cr-9920626622af0035\\*\\*\\*\\* rule is used to re-evaluate the compliance of resources.
   *
   * @param request StartConfigRuleEvaluationRequest
   * @return StartConfigRuleEvaluationResponse
   */
  async startConfigRuleEvaluation(request: StartConfigRuleEvaluationRequest): Promise<StartConfigRuleEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationWithOptions(request, runtime);
  }

  /**
   * @summary Enables Cloud Config to monitor the resources of your Alibaba Cloud account.
   *
   * @description This topic provides an example on how to enable Cloud Config to monitor the resources of your Alibaba Cloud account.
   *
   * @param request StartConfigurationRecorderRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartConfigurationRecorderResponse
   */
  async startConfigurationRecorderWithOptions(runtime: $Util.RuntimeOptions): Promise<StartConfigurationRecorderResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "StartConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new StartConfigurationRecorderResponse({}));
  }

  /**
   * @summary Enables Cloud Config to monitor the resources of your Alibaba Cloud account.
   *
   * @description This topic provides an example on how to enable Cloud Config to monitor the resources of your Alibaba Cloud account.
   *
   * @return StartConfigurationRecorderResponse
   */
  async startConfigurationRecorder(): Promise<StartConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConfigurationRecorderWithOptions(runtime);
  }

  /**
   * @summary Performs a remediation operation by using a rule.
   *
   * @description This topic provides an example on how to perform a remediation operation by using the rule whose ID is `cr-8a973ac2e2be00a2****`. The returned result shows that the manual execution is successful.
   *
   * @param request StartRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartRemediationResponse
   */
  async startRemediationWithOptions(request: StartRemediationRequest, runtime: $Util.RuntimeOptions): Promise<StartRemediationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.configRuleId)) {
      query["ConfigRuleId"] = request.configRuleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartRemediationResponse>(await this.callApi(params, req, runtime), new StartRemediationResponse({}));
  }

  /**
   * @summary Performs a remediation operation by using a rule.
   *
   * @description This topic provides an example on how to perform a remediation operation by using the rule whose ID is `cr-8a973ac2e2be00a2****`. The returned result shows that the manual execution is successful.
   *
   * @param request StartRemediationRequest
   * @return StartRemediationResponse
   */
  async startRemediation(request: StartRemediationRequest): Promise<StartRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startRemediationWithOptions(request, runtime);
  }

  /**
   * @summary Deactivates Cloud Config.
   *
   * @param request StopConfigurationRecorderRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopConfigurationRecorderResponse
   */
  async stopConfigurationRecorderWithOptions(runtime: $Util.RuntimeOptions): Promise<StopConfigurationRecorderResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "StopConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new StopConfigurationRecorderResponse({}));
  }

  /**
   * @summary Deactivates Cloud Config.
   *
   * @return StopConfigurationRecorderResponse
   */
  async stopConfigurationRecorder(): Promise<StopConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopConfigurationRecorderWithOptions(runtime);
  }

  /**
   * @summary Adds tags to resources.
   *
   * @param tmpReq TagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(tmpReq: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new TagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-09-07",
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

  /**
   * @summary Adds tags to resources.
   *
   * @param request TagResourcesRequest
   * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Removes tags from specified resources.
   *
   * @param request UntagResourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      body["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      body["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-09-07",
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

  /**
   * @summary Removes tags from specified resources.
   *
   * @param request UntagResourcesRequest
   * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a compliance package in an account group.
   *
   * @description This topic provides an example on how to change the value of a parameter for a managed rule whose ID is `eip-bandwidth-limit` to `20`. The managed rule is included in the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   *
   * @param tmpReq UpdateAggregateCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAggregateCompliancePackResponse
   */
  async updateAggregateCompliancePackWithOptions(tmpReq: UpdateAggregateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAggregateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!Util.isUnset(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAggregateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAggregateCompliancePackResponse>(await this.callApi(params, req, runtime), new UpdateAggregateCompliancePackResponse({}));
  }

  /**
   * @summary Modifies the configurations of a compliance package in an account group.
   *
   * @description This topic provides an example on how to change the value of a parameter for a managed rule whose ID is `eip-bandwidth-limit` to `20`. The managed rule is included in the `cp-fdc8626622af00f9****` compliance package in the `ca-f632626622af0079****` account group.
   *
   * @param request UpdateAggregateCompliancePackRequest
   * @return UpdateAggregateCompliancePackResponse
   */
  async updateAggregateCompliancePack(request: UpdateAggregateCompliancePackRequest): Promise<UpdateAggregateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a delivery channel in an account group.
   *
   * @description This topic provides an example on how to disable a delivery channel in an account group. The ID of the account group is `ca-a4e5626622af0079****`, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`. The Status parameter is set to `0`. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops resource data delivery.
   *
   * @param request UpdateAggregateConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAggregateConfigDeliveryChannelResponse
   */
  async updateAggregateConfigDeliveryChannelWithOptions(request: UpdateAggregateConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregateConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aggregatorId)) {
      query["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!Util.isUnset(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!Util.isUnset(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!Util.isUnset(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!Util.isUnset(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!Util.isUnset(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!Util.isUnset(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!Util.isUnset(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAggregateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAggregateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new UpdateAggregateConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Modifies a delivery channel in an account group.
   *
   * @description This topic provides an example on how to disable a delivery channel in an account group. The ID of the account group is `ca-a4e5626622af0079****`, and the ID of the delivery channel is `cdc-8e45ff4e06a3a8****`. The Status parameter is set to `0`. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops resource data delivery.
   *
   * @param request UpdateAggregateConfigDeliveryChannelRequest
   * @return UpdateAggregateConfigDeliveryChannelResponse
   */
  async updateAggregateConfigDeliveryChannel(request: UpdateAggregateConfigDeliveryChannelRequest): Promise<UpdateAggregateConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a rule in an account group.
   *
   * @description The sample request in this topic shows you how to change the risk level specified for the `cr-4e3d626622af0080****` managed rule to `3`, which indicates low risk level, in the `ca-a4e5626622af0079****` account group.
   *
   * @param tmpReq UpdateAggregateConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAggregateConfigRuleResponse
   */
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountIdsScope)) {
      body["AccountIdsScope"] = request.accountIdsScope;
    }

    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!Util.isUnset(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeAccountIdsScope)) {
      body["ExcludeAccountIdsScope"] = request.excludeAccountIdsScope;
    }

    if (!Util.isUnset(request.excludeFolderIdsScope)) {
      body["ExcludeFolderIdsScope"] = request.excludeFolderIdsScope;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.folderIdsScope)) {
      body["FolderIdsScope"] = request.folderIdsScope;
    }

    if (!Util.isUnset(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!Util.isUnset(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAggregateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAggregateConfigRuleResponse>(await this.callApi(params, req, runtime), new UpdateAggregateConfigRuleResponse({}));
  }

  /**
   * @summary Modifies a rule in an account group.
   *
   * @description The sample request in this topic shows you how to change the risk level specified for the `cr-4e3d626622af0080****` managed rule to `3`, which indicates low risk level, in the `ca-a4e5626622af0079****` account group.
   *
   * @param request UpdateAggregateConfigRuleRequest
   * @return UpdateAggregateConfigRuleResponse
   */
  async updateAggregateConfigRule(request: UpdateAggregateConfigRuleRequest): Promise<UpdateAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a remediation template for a rule in an account group.
   *
   * @description This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting for a rule in the `ca-6b4a626622af0012****` account group to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
   *
   * @param request UpdateAggregateRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAggregateRemediationResponse
   */
  async updateAggregateRemediationWithOptions(request: UpdateAggregateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregateRemediationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.remediationId)) {
      body["RemediationId"] = request.remediationId;
    }

    if (!Util.isUnset(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!Util.isUnset(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAggregateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAggregateRemediationResponse>(await this.callApi(params, req, runtime), new UpdateAggregateRemediationResponse({}));
  }

  /**
   * @summary Modifies a remediation template for a rule in an account group.
   *
   * @description This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting for a rule in the `ca-6b4a626622af0012****` account group to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
   *
   * @param request UpdateAggregateRemediationRequest
   * @return UpdateAggregateRemediationResponse
   */
  async updateAggregateRemediation(request: UpdateAggregateRemediationRequest): Promise<UpdateAggregateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregateRemediationWithOptions(request, runtime);
  }

  /**
   * @summary Modify an account group
   *
   * @description The sample request in this topic shows you how to add a member account to the account group whose ID is `ca-dacf86d8314e00eb****`. The member account ID is `173808452267****` and the member account name is `Tony`. The member account belongs to `ResourceDirectory`.
   *
   * @param tmpReq UpdateAggregatorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateAggregatorResponse
   */
  async updateAggregatorWithOptions(tmpReq: UpdateAggregatorRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAggregatorResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateAggregatorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aggregatorAccounts)) {
      request.aggregatorAccountsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregatorAccounts, "AggregatorAccounts", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregatorAccountsShrink)) {
      body["AggregatorAccounts"] = request.aggregatorAccountsShrink;
    }

    if (!Util.isUnset(request.aggregatorId)) {
      body["AggregatorId"] = request.aggregatorId;
    }

    if (!Util.isUnset(request.aggregatorName)) {
      body["AggregatorName"] = request.aggregatorName;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAggregator",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAggregatorResponse>(await this.callApi(params, req, runtime), new UpdateAggregatorResponse({}));
  }

  /**
   * @summary Modify an account group
   *
   * @description The sample request in this topic shows you how to add a member account to the account group whose ID is `ca-dacf86d8314e00eb****`. The member account ID is `173808452267****` and the member account name is `Tony`. The member account belongs to `ResourceDirectory`.
   *
   * @param request UpdateAggregatorRequest
   * @return UpdateAggregatorResponse
   */
  async updateAggregator(request: UpdateAggregatorRequest): Promise<UpdateAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAggregatorWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the configurations of a compliance package within your account.
   *
   * @description This topic provides an example on how to change the value of a parameter for a managed rule whose ID is `eip-bandwidth-limit` to `20`. The managed rule is included in the `cp-a8a8626622af0082****` compliance package.
   *
   * @param tmpReq UpdateCompliancePackRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCompliancePackResponse
   */
  async updateCompliancePackWithOptions(tmpReq: UpdateCompliancePackRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCompliancePackResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateCompliancePackShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.configRules)) {
      request.configRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configRules, "ConfigRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.compliancePackId)) {
      body["CompliancePackId"] = request.compliancePackId;
    }

    if (!Util.isUnset(request.compliancePackName)) {
      body["CompliancePackName"] = request.compliancePackName;
    }

    if (!Util.isUnset(request.configRulesShrink)) {
      body["ConfigRules"] = request.configRulesShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCompliancePack",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCompliancePackResponse>(await this.callApi(params, req, runtime), new UpdateCompliancePackResponse({}));
  }

  /**
   * @summary Modifies the configurations of a compliance package within your account.
   *
   * @description This topic provides an example on how to change the value of a parameter for a managed rule whose ID is `eip-bandwidth-limit` to `20`. The managed rule is included in the `cp-a8a8626622af0082****` compliance package.
   *
   * @param request UpdateCompliancePackRequest
   * @return UpdateCompliancePackResponse
   */
  async updateCompliancePack(request: UpdateCompliancePackRequest): Promise<UpdateCompliancePackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCompliancePackWithOptions(request, runtime);
  }

  /**
   * @summary Modifies a delivery channel.
   *
   * @description In this example, a delivery channel is disabled. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****```. The Status parameter is set to 0. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops the delivery of resource data.
   *
   * @param request UpdateConfigDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateConfigDeliveryChannelResponse
   */
  async updateConfigDeliveryChannelWithOptions(request: UpdateConfigDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigDeliveryChannelResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationItemChangeNotification)) {
      query["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!Util.isUnset(request.configurationSnapshot)) {
      query["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!Util.isUnset(request.deliveryChannelCondition)) {
      query["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!Util.isUnset(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!Util.isUnset(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!Util.isUnset(request.deliveryChannelTargetArn)) {
      query["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!Util.isUnset(request.deliverySnapshotTime)) {
      query["DeliverySnapshotTime"] = request.deliverySnapshotTime;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.nonCompliantNotification)) {
      query["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!Util.isUnset(request.oversizedDataOSSTargetArn)) {
      query["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigDeliveryChannelResponse>(await this.callApi(params, req, runtime), new UpdateConfigDeliveryChannelResponse({}));
  }

  /**
   * @summary Modifies a delivery channel.
   *
   * @description In this example, a delivery channel is disabled. The ID of the delivery channel is `cdc-8e45ff4e06a3a8****```. The Status parameter is set to 0. After the delivery channel is disabled, Cloud Config retains the most recent delivery configuration and stops the delivery of resource data.
   *
   * @param request UpdateConfigDeliveryChannelRequest
   * @return UpdateConfigDeliveryChannelResponse
   */
  async updateConfigDeliveryChannel(request: UpdateConfigDeliveryChannelRequest): Promise<UpdateConfigDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the rules of an account.
   *
   * @description This topic provides an example on how to change the risk level of a managed rule whose ID is `cr-a260626622af0005****` to `3` (low risk level).
   *
   * @param tmpReq UpdateConfigRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateConfigRuleResponse
   */
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configRuleId)) {
      body["ConfigRuleId"] = request.configRuleId;
    }

    if (!Util.isUnset(request.configRuleName)) {
      body["ConfigRuleName"] = request.configRuleName;
    }

    if (!Util.isUnset(request.configRuleTriggerTypes)) {
      body["ConfigRuleTriggerTypes"] = request.configRuleTriggerTypes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRegionIdsScope)) {
      body["ExcludeRegionIdsScope"] = request.excludeRegionIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceGroupIdsScope)) {
      body["ExcludeResourceGroupIdsScope"] = request.excludeResourceGroupIdsScope;
    }

    if (!Util.isUnset(request.excludeResourceIdsScope)) {
      body["ExcludeResourceIdsScope"] = request.excludeResourceIdsScope;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeTagsScope)) {
      bodyFlat["ExcludeTagsScope"] = request.excludeTagsScope;
    }

    if (!Util.isUnset(request.inputParametersShrink)) {
      body["InputParameters"] = request.inputParametersShrink;
    }

    if (!Util.isUnset(request.maximumExecutionFrequency)) {
      body["MaximumExecutionFrequency"] = request.maximumExecutionFrequency;
    }

    if (!Util.isUnset(request.regionIdsScope)) {
      body["RegionIdsScope"] = request.regionIdsScope;
    }

    if (!Util.isUnset(request.resourceGroupIdsScope)) {
      body["ResourceGroupIdsScope"] = request.resourceGroupIdsScope;
    }

    if (!Util.isUnset(request.resourceIdsScope)) {
      body["ResourceIdsScope"] = request.resourceIdsScope;
    }

    if (!Util.isUnset(request.resourceTypesScopeShrink)) {
      body["ResourceTypesScope"] = request.resourceTypesScopeShrink;
    }

    if (!Util.isUnset(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    if (!Util.isUnset(request.tagKeyLogicScope)) {
      body["TagKeyLogicScope"] = request.tagKeyLogicScope;
    }

    if (!Util.isUnset(request.tagKeyScope)) {
      body["TagKeyScope"] = request.tagKeyScope;
    }

    if (!Util.isUnset(request.tagValueScope)) {
      body["TagValueScope"] = request.tagValueScope;
    }

    if (!Util.isUnset(request.tagsScope)) {
      bodyFlat["TagsScope"] = request.tagsScope;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigRule",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigRuleResponse>(await this.callApi(params, req, runtime), new UpdateConfigRuleResponse({}));
  }

  /**
   * @summary Modifies the rules of an account.
   *
   * @description This topic provides an example on how to change the risk level of a managed rule whose ID is `cr-a260626622af0005****` to `3` (low risk level).
   *
   * @param request UpdateConfigRuleRequest
   * @return UpdateConfigRuleResponse
   */
  async updateConfigRule(request: UpdateConfigRuleRequest): Promise<UpdateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigRuleWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the resource monitoring scope of the current account.
   *
   * @description This topic provides an example on how to change the resource monitoring scope of the current account to ACS::ECS::Instance.
   *
   * @param request UpdateConfigurationRecorderRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateConfigurationRecorderResponse
   */
  async updateConfigurationRecorderWithOptions(request: UpdateConfigurationRecorderRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConfigurationRecorderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceTypes)) {
      body["ResourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConfigurationRecorder",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConfigurationRecorderResponse>(await this.callApi(params, req, runtime), new UpdateConfigurationRecorderResponse({}));
  }

  /**
   * @summary Modifies the resource monitoring scope of the current account.
   *
   * @description This topic provides an example on how to change the resource monitoring scope of the current account to ACS::ECS::Instance.
   *
   * @param request UpdateConfigurationRecorderRequest
   * @return UpdateConfigurationRecorderResponse
   */
  async updateConfigurationRecorder(request: UpdateConfigurationRecorderRequest): Promise<UpdateConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConfigurationRecorderWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI UpdateDeliveryChannel is deprecated, please use Config::2020-09-07::UpdateConfigDeliveryChannel,Config::2020-09-07::UpdateAggregateConfigDeliveryChannel instead.
   *
   * @summary Modifies a delivery channel.
   *
   * @description This topic provides an example on how to change the status of the delivery channel whose ID is `cdc-8e45ff4e06a3a8****` to 0, which indicates that the delivery channel is disabled. After the delivery channel is disabled, Cloud Config retains the last delivery configuration and stops resource data delivery.
   *
   * @param request UpdateDeliveryChannelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDeliveryChannelResponse
   */
  // Deprecated
  async updateDeliveryChannelWithOptions(request: UpdateDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeliveryChannelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.configurationItemChangeNotification)) {
      body["ConfigurationItemChangeNotification"] = request.configurationItemChangeNotification;
    }

    if (!Util.isUnset(request.configurationSnapshot)) {
      body["ConfigurationSnapshot"] = request.configurationSnapshot;
    }

    if (!Util.isUnset(request.deliveryChannelAssumeRoleArn)) {
      body["DeliveryChannelAssumeRoleArn"] = request.deliveryChannelAssumeRoleArn;
    }

    if (!Util.isUnset(request.deliveryChannelCondition)) {
      body["DeliveryChannelCondition"] = request.deliveryChannelCondition;
    }

    if (!Util.isUnset(request.deliveryChannelId)) {
      body["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!Util.isUnset(request.deliveryChannelName)) {
      body["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!Util.isUnset(request.deliveryChannelTargetArn)) {
      body["DeliveryChannelTargetArn"] = request.deliveryChannelTargetArn;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.nonCompliantNotification)) {
      body["NonCompliantNotification"] = request.nonCompliantNotification;
    }

    if (!Util.isUnset(request.oversizedDataOSSTargetArn)) {
      body["OversizedDataOSSTargetArn"] = request.oversizedDataOSSTargetArn;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDeliveryChannel",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDeliveryChannelResponse>(await this.callApi(params, req, runtime), new UpdateDeliveryChannelResponse({}));
  }

  /**
   * @deprecated OpenAPI UpdateDeliveryChannel is deprecated, please use Config::2020-09-07::UpdateConfigDeliveryChannel,Config::2020-09-07::UpdateAggregateConfigDeliveryChannel instead.
   *
   * @summary Modifies a delivery channel.
   *
   * @description This topic provides an example on how to change the status of the delivery channel whose ID is `cdc-8e45ff4e06a3a8****` to 0, which indicates that the delivery channel is disabled. After the delivery channel is disabled, Cloud Config retains the last delivery configuration and stops resource data delivery.
   *
   * @param request UpdateDeliveryChannelRequest
   * @return UpdateDeliveryChannelResponse
   */
  // Deprecated
  async updateDeliveryChannel(request: UpdateDeliveryChannelRequest): Promise<UpdateDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * @summary Enables or disables the integration of a cloud service.
   *
   * @param request UpdateIntegratedServiceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateIntegratedServiceStatusResponse
   */
  async updateIntegratedServiceStatusWithOptions(request: UpdateIntegratedServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIntegratedServiceStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.integratedTypes)) {
      body["IntegratedTypes"] = request.integratedTypes;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIntegratedServiceStatus",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIntegratedServiceStatusResponse>(await this.callApi(params, req, runtime), new UpdateIntegratedServiceStatusResponse({}));
  }

  /**
   * @summary Enables or disables the integration of a cloud service.
   *
   * @param request UpdateIntegratedServiceStatusRequest
   * @return UpdateIntegratedServiceStatusResponse
   */
  async updateIntegratedServiceStatus(request: UpdateIntegratedServiceStatusRequest): Promise<UpdateIntegratedServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIntegratedServiceStatusWithOptions(request, runtime);
  }

  /**
   * @summary Updates a remediation template for a rule.
   *
   * @description This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
   *
   * @param request UpdateRemediationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateRemediationResponse
   */
  async updateRemediationWithOptions(request: UpdateRemediationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRemediationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.invokeType)) {
      body["InvokeType"] = request.invokeType;
    }

    if (!Util.isUnset(request.params)) {
      body["Params"] = request.params;
    }

    if (!Util.isUnset(request.remediationId)) {
      body["RemediationId"] = request.remediationId;
    }

    if (!Util.isUnset(request.remediationTemplateId)) {
      body["RemediationTemplateId"] = request.remediationTemplateId;
    }

    if (!Util.isUnset(request.remediationType)) {
      body["RemediationType"] = request.remediationType;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRemediation",
      version: "2020-09-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRemediationResponse>(await this.callApi(params, req, runtime), new UpdateRemediationResponse({}));
  }

  /**
   * @summary Updates a remediation template for a rule.
   *
   * @description This topic describes how to change the execution mode of the `crr-909ba2d4716700eb****` remediation setting to `AUTO_EXECUTION`, which specifies automatic remediation. This topic also provides a sample request.
   *
   * @param request UpdateRemediationRequest
   * @return UpdateRemediationResponse
   */
  async updateRemediation(request: UpdateRemediationRequest): Promise<UpdateRemediationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRemediationWithOptions(request, runtime);
  }

}
