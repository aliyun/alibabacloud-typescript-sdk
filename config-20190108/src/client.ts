// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetResourceComplianceTimelineRequest extends $tea.Model {
  resourceType: string;
  resourceId: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  multiAccount?: boolean;
  memberId?: string;
  region: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
      region: 'Region',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      startTime: 'number',
      endTime: 'number',
      limit: 'number',
      multiAccount: 'boolean',
      memberId: 'string',
      region: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponse extends $tea.Model {
  requestId: string;
  resourceComplianceTimeline: GetResourceComplianceTimelineResponseResourceComplianceTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceTimeline: 'ResourceComplianceTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceTimeline: GetResourceComplianceTimelineResponseResourceComplianceTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineRequest extends $tea.Model {
  resourceId: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  resourceType: string;
  region: string;
  multiAccount?: boolean;
  memberId?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
      resourceType: 'ResourceType',
      region: 'Region',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      startTime: 'number',
      endTime: 'number',
      limit: 'number',
      resourceType: 'string',
      region: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponse extends $tea.Model {
  requestId: string;
  resourceConfigurationTimeline: GetResourceConfigurationTimelineResponseResourceConfigurationTimeline;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceConfigurationTimeline: 'ResourceConfigurationTimeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceConfigurationTimeline: GetResourceConfigurationTimelineResponseResourceConfigurationTimeline,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryChannelsRequest extends $tea.Model {
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

export class DescribeDeliveryChannelsResponse extends $tea.Model {
  requestId: string;
  deliveryChannels: DescribeDeliveryChannelsResponseDeliveryChannels[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deliveryChannels: 'DeliveryChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deliveryChannels: { 'type': 'array', 'itemType': DescribeDeliveryChannelsResponseDeliveryChannels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigurationRecorderRequest extends $tea.Model {
  resourceTypes: string;
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

export class PutConfigurationRecorderResponse extends $tea.Model {
  requestId: string;
  configurationRecorder: PutConfigurationRecorderResponseConfigurationRecorder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationRecorder: 'ConfigurationRecorder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationRecorder: PutConfigurationRecorderResponseConfigurationRecorder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceSummaryRequest extends $tea.Model {
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceSummaryResponse extends $tea.Model {
  requestId: string;
  discoveredResourceSummary: GetDiscoveredResourceSummaryResponseDiscoveredResourceSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceSummary: 'DiscoveredResourceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceSummary: GetDiscoveredResourceSummaryResponseDiscoveredResourceSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveConfigRulesRequest extends $tea.Model {
  configRuleIds: string;
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

export class ActiveConfigRulesResponse extends $tea.Model {
  requestId: string;
  operateRuleResult: ActiveConfigRulesResponseOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: ActiveConfigRulesResponseOperateRuleResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigRulesRequest extends $tea.Model {
  configRuleIds: string;
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

export class StopConfigRulesResponse extends $tea.Model {
  requestId: string;
  operateRuleResult: StopConfigRulesResponseOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: StopConfigRulesResponseOperateRuleResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryRequest extends $tea.Model {
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryResponse extends $tea.Model {
  requestId: string;
  complianceSummary: DescribeComplianceSummaryResponseComplianceSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      complianceSummary: 'ComplianceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      complianceSummary: DescribeComplianceSummaryResponseComplianceSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesRequest extends $tea.Model {
  configRuleState?: string;
  complianceType?: string;
  riskLevel?: number;
  messageType?: string;
  pageNumber?: number;
  pageSize?: number;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleState: 'ConfigRuleState',
      complianceType: 'ComplianceType',
      riskLevel: 'RiskLevel',
      messageType: 'MessageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleState: 'string',
      complianceType: 'string',
      riskLevel: 'number',
      messageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponse extends $tea.Model {
  requestId: string;
  configRules: ListConfigRulesResponseConfigRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRules: 'ConfigRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRules: ListConfigRulesResponseConfigRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
  configRuleName: string;
  description?: string;
  inputParameters?: string;
  sourceOwner: string;
  sourceIdentifier: string;
  sourceDetailMessageType: string;
  sourceMaximumExecutionFrequency?: string;
  scopeComplianceResourceId?: string;
  scopeComplianceResourceTypes: string;
  riskLevel: number;
  clientToken?: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      inputParameters: 'InputParameters',
      sourceOwner: 'SourceOwner',
      sourceIdentifier: 'SourceIdentifier',
      sourceDetailMessageType: 'SourceDetailMessageType',
      sourceMaximumExecutionFrequency: 'SourceMaximumExecutionFrequency',
      scopeComplianceResourceId: 'ScopeComplianceResourceId',
      scopeComplianceResourceTypes: 'ScopeComplianceResourceTypes',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      description: 'string',
      inputParameters: 'string',
      sourceOwner: 'string',
      sourceIdentifier: 'string',
      sourceDetailMessageType: 'string',
      sourceMaximumExecutionFrequency: 'string',
      scopeComplianceResourceId: 'string',
      scopeComplianceResourceTypes: 'string',
      riskLevel: 'number',
      clientToken: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigRuleResponse extends $tea.Model {
  configRuleId: string;
  requestId: string;
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

export class DescribeEvaluationResultsRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  complianceType?: string;
  pageNumber?: number;
  pageSize?: number;
  configRuleId?: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      complianceType: 'ComplianceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      configRuleId: 'ConfigRuleId',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      complianceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      configRuleId: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponse extends $tea.Model {
  requestId: string;
  evaluationResults: DescribeEvaluationResultsResponseEvaluationResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      evaluationResults: 'EvaluationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      evaluationResults: DescribeEvaluationResultsResponseEvaluationResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigRulesRequest extends $tea.Model {
  configRuleIds: string;
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

export class DeleteConfigRulesResponse extends $tea.Model {
  requestId: string;
  operateRuleResult: DeleteConfigRulesResponseOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: DeleteConfigRulesResponseOperateRuleResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  complianceType?: string;
  configRuleId?: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      complianceType: 'string',
      configRuleId: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceResponse extends $tea.Model {
  requestId: string;
  complianceResult: DescribeComplianceResponseComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      complianceResult: 'ComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      complianceResult: DescribeComplianceResponseComplianceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsRequest extends $tea.Model {
  groupByKey?: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      groupByKey: 'GroupByKey',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupByKey: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsResponse extends $tea.Model {
  requestId: string;
  groupedResourceCounts: GetDiscoveredResourceCountsResponseGroupedResourceCounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupedResourceCounts: 'GroupedResourceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupedResourceCounts: GetDiscoveredResourceCountsResponseGroupedResourceCounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesRequest extends $tea.Model {
  resourceId?: string;
  resourceDeleted?: number;
  pageSize: number;
  pageNumber: number;
  resourceTypes?: string;
  regions?: string;
  complianceType?: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceDeleted: 'ResourceDeleted',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceTypes: 'ResourceTypes',
      regions: 'Regions',
      complianceType: 'ComplianceType',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceDeleted: 'number',
      pageSize: 'number',
      pageNumber: 'number',
      resourceTypes: 'string',
      regions: 'string',
      complianceType: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponse extends $tea.Model {
  requestId: string;
  discoveredResourceProfiles: ListDiscoveredResourcesResponseDiscoveredResourceProfiles;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceProfiles: 'DiscoveredResourceProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceProfiles: ListDiscoveredResourcesResponseDiscoveredResourceProfiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRecorderRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRecorderResponse extends $tea.Model {
  requestId: string;
  configurationRecorder: DescribeConfigurationRecorderResponseConfigurationRecorder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationRecorder: 'ConfigurationRecorder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationRecorder: DescribeConfigurationRecorderResponseConfigurationRecorder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiscoveredResourceRequest extends $tea.Model {
  resourceId: string;
  resourceType: string;
  region?: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      region: 'Region',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      region: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiscoveredResourceResponse extends $tea.Model {
  requestId: string;
  discoveredResourceDetail: DescribeDiscoveredResourceResponseDiscoveredResourceDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceDetail: 'DiscoveredResourceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceDetail: DescribeDiscoveredResourceResponseDiscoveredResourceDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderRequest extends $tea.Model {
  enterpriseEdition?: boolean;
  static names(): { [key: string]: string } {
    return {
      enterpriseEdition: 'EnterpriseEdition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseEdition: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponse extends $tea.Model {
  requestId: string;
  configurationRecorder: StartConfigurationRecorderResponseConfigurationRecorder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationRecorder: 'ConfigurationRecorder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationRecorder: StartConfigurationRecorderResponseConfigurationRecorder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleRequest extends $tea.Model {
  configRuleId: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponse extends $tea.Model {
  requestId: string;
  configRule: DescribeConfigRuleResponseConfigRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRule: 'ConfigRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRule: DescribeConfigRuleResponseConfigRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedResourceTypesRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupportedResourceTypesResponse extends $tea.Model {
  requestId: string;
  resourceTypes: string[];
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

export class PutDeliveryChannelRequest extends $tea.Model {
  clientToken?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelType: string;
  deliveryChannelTargetArn: string;
  deliveryChannelAssumeRoleArn: string;
  deliveryChannelCondition?: string;
  description?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelType: 'DeliveryChannelType',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelType: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      description: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutDeliveryChannelResponse extends $tea.Model {
  requestId: string;
  deliveryChannelId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deliveryChannelId: 'DeliveryChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deliveryChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEvaluationsRequest extends $tea.Model {
  resultToken: string;
  evaluations?: string;
  static names(): { [key: string]: string } {
    return {
      resultToken: 'ResultToken',
      evaluations: 'Evaluations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultToken: 'string',
      evaluations: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEvaluationsResponse extends $tea.Model {
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

export class StartConfigRuleEvaluationRequest extends $tea.Model {
  configRuleId: string;
  multiAccount?: boolean;
  memberId?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      multiAccount: 'boolean',
      memberId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigRuleEvaluationResponse extends $tea.Model {
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

export class GetResourceComplianceTimelineResponseResourceComplianceTimelineComplianceList extends $tea.Model {
  accountId: string;
  availabilityZone: string;
  captureTime: number;
  configuration: string;
  configurationDiff: string;
  region: string;
  resourceCreateTime: number;
  resourceId: string;
  resourceName: string;
  resourceStatus: string;
  resourceType: string;
  tags: string;
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

export class GetResourceComplianceTimelineResponseResourceComplianceTimeline extends $tea.Model {
  limit: number;
  totalCount: number;
  nextToken: string;
  complianceList: GetResourceComplianceTimelineResponseResourceComplianceTimelineComplianceList[];
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      totalCount: 'TotalCount',
      nextToken: 'NextToken',
      complianceList: 'ComplianceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      totalCount: 'number',
      nextToken: 'string',
      complianceList: { 'type': 'array', 'itemType': GetResourceComplianceTimelineResponseResourceComplianceTimelineComplianceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseResourceConfigurationTimelineConfigurationList extends $tea.Model {
  accountId: number;
  availabilityZone: string;
  captureTime: string;
  configurationDiff: string;
  region: string;
  relationship: string;
  relationshipDiff: string;
  resourceCreateTime: string;
  resourceId: string;
  resourceName: string;
  resourceType: string;
  tags: string;
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

export class GetResourceConfigurationTimelineResponseResourceConfigurationTimeline extends $tea.Model {
  nextToken: string;
  limit: number;
  totalCount: number;
  configurationList: GetResourceConfigurationTimelineResponseResourceConfigurationTimelineConfigurationList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      limit: 'Limit',
      totalCount: 'TotalCount',
      configurationList: 'ConfigurationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      limit: 'number',
      totalCount: 'number',
      configurationList: { 'type': 'array', 'itemType': GetResourceConfigurationTimelineResponseResourceConfigurationTimelineConfigurationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryChannelsResponseDeliveryChannels extends $tea.Model {
  deliveryChannelId: string;
  deliveryChannelName: string;
  deliveryChannelType: string;
  deliveryChannelTargetArn: string;
  deliveryChannelAssumeRoleArn: string;
  deliveryChannelCondition: string;
  description: string;
  status: number;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelType: 'DeliveryChannelType',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      description: 'Description',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelType: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      description: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigurationRecorderResponseConfigurationRecorder extends $tea.Model {
  accountId: number;
  configurationRecorderStatus: string;
  organizationMasterId: number;
  organizationEnableStatus: string;
  resourceTypes: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      organizationMasterId: 'OrganizationMasterId',
      organizationEnableStatus: 'OrganizationEnableStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationRecorderStatus: 'string',
      organizationMasterId: 'number',
      organizationEnableStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceSummaryResponseDiscoveredResourceSummary extends $tea.Model {
  resourceCount: number;
  resourceTypeCount: number;
  regionCount: number;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceTypeCount: 'ResourceTypeCount',
      regionCount: 'RegionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceTypeCount: 'number',
      regionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveConfigRulesResponseOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId: string;
  errorCode: string;
  success: boolean;
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

export class ActiveConfigRulesResponseOperateRuleResult extends $tea.Model {
  operateRuleItemList: ActiveConfigRulesResponseOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': ActiveConfigRulesResponseOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigRulesResponseOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId: string;
  errorCode: string;
  success: boolean;
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

export class StopConfigRulesResponseOperateRuleResult extends $tea.Model {
  operateRuleItemList: StopConfigRulesResponseOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': StopConfigRulesResponseOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryResponseComplianceSummaryComplianceSummaryByConfigRule extends $tea.Model {
  complianceSummaryTimestamp: number;
  compliantCount: number;
  nonCompliantCount: number;
  totalCount: number;
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

export class DescribeComplianceSummaryResponseComplianceSummaryComplianceSummaryByResource extends $tea.Model {
  complianceSummaryTimestamp: number;
  compliantCount: number;
  nonCompliantCount: number;
  totalCount: number;
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

export class DescribeComplianceSummaryResponseComplianceSummary extends $tea.Model {
  complianceSummaryByConfigRule: DescribeComplianceSummaryResponseComplianceSummaryComplianceSummaryByConfigRule;
  complianceSummaryByResource: DescribeComplianceSummaryResponseComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: DescribeComplianceSummaryResponseComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: DescribeComplianceSummaryResponseComplianceSummaryComplianceSummaryByResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseConfigRulesConfigRuleListCompliance extends $tea.Model {
  complianceType: string;
  count: number;
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

export class ListConfigRulesResponseConfigRulesConfigRuleListCreateBy extends $tea.Model {
  creatorId: string;
  creatorName: string;
  creatorType: string;
  configRuleSceneId: string;
  configRuleSceneName: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
      configRuleSceneId: 'ConfigRuleSceneId',
      configRuleSceneName: 'ConfigRuleSceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
      configRuleSceneId: 'string',
      configRuleSceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseConfigRulesConfigRuleList extends $tea.Model {
  accountId: number;
  configRuleArn: string;
  configRuleId: string;
  configRuleName: string;
  configRuleState: string;
  description: string;
  riskLevel: number;
  sourceIdentifier: string;
  sourceOwner: string;
  automationType: string;
  compliance: ListConfigRulesResponseConfigRulesConfigRuleListCompliance;
  createBy: ListConfigRulesResponseConfigRulesConfigRuleListCreateBy;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      description: 'Description',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      automationType: 'AutomationType',
      compliance: 'Compliance',
      createBy: 'CreateBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      description: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      automationType: 'string',
      compliance: ListConfigRulesResponseConfigRulesConfigRuleListCompliance,
      createBy: ListConfigRulesResponseConfigRulesConfigRuleListCreateBy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseConfigRules extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  configRuleList: ListConfigRulesResponseConfigRulesConfigRuleList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      configRuleList: 'ConfigRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      configRuleList: { 'type': 'array', 'itemType': ListConfigRulesResponseConfigRulesConfigRuleList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  configRuleArn: string;
  configRuleId: string;
  configRuleName: string;
  resourceId: string;
  resourceType: string;
  regionId: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      resourceId: 'string',
      resourceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  orderingTimestamp: number;
  evaluationResultQualifier: DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  static names(): { [key: string]: string } {
    return {
      orderingTimestamp: 'OrderingTimestamp',
      evaluationResultQualifier: 'EvaluationResultQualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderingTimestamp: 'number',
      evaluationResultQualifier: DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultList extends $tea.Model {
  annotation: string;
  complianceType: string;
  configRuleInvokedTimestamp: number;
  invokingEventMessageType: string;
  resultRecordedTimestamp: number;
  riskLevel: number;
  evaluationResultIdentifier: DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  static names(): { [key: string]: string } {
    return {
      annotation: 'Annotation',
      complianceType: 'ComplianceType',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      invokingEventMessageType: 'InvokingEventMessageType',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      riskLevel: 'RiskLevel',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      complianceType: 'string',
      configRuleInvokedTimestamp: 'number',
      invokingEventMessageType: 'string',
      resultRecordedTimestamp: 'number',
      riskLevel: 'number',
      evaluationResultIdentifier: DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseEvaluationResults extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  evaluationResultList: DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      evaluationResultList: 'EvaluationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      evaluationResultList: { 'type': 'array', 'itemType': DescribeEvaluationResultsResponseEvaluationResultsEvaluationResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigRulesResponseOperateRuleResultOperateRuleItemList extends $tea.Model {
  configRuleId: string;
  errorCode: string;
  success: boolean;
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

export class DeleteConfigRulesResponseOperateRuleResult extends $tea.Model {
  operateRuleItemList: DeleteConfigRulesResponseOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': DeleteConfigRulesResponseOperateRuleResultOperateRuleItemList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceResponseComplianceResultCompliances extends $tea.Model {
  complianceType: string;
  count: number;
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

export class DescribeComplianceResponseComplianceResult extends $tea.Model {
  totalCount: number;
  compliances: DescribeComplianceResponseComplianceResultCompliances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      compliances: 'Compliances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      compliances: { 'type': 'array', 'itemType': DescribeComplianceResponseComplianceResultCompliances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsResponseGroupedResourceCountsGroupedResourceCountList extends $tea.Model {
  groupName: string;
  resourceCount: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      resourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsResponseGroupedResourceCounts extends $tea.Model {
  groupByKey: string;
  groupedResourceCountList: GetDiscoveredResourceCountsResponseGroupedResourceCountsGroupedResourceCountList[];
  static names(): { [key: string]: string } {
    return {
      groupByKey: 'GroupByKey',
      groupedResourceCountList: 'GroupedResourceCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupByKey: 'string',
      groupedResourceCountList: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsResponseGroupedResourceCountsGroupedResourceCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponseDiscoveredResourceProfilesDiscoveredResourceProfileList extends $tea.Model {
  accountId: number;
  region: string;
  resourceCreationTime: number;
  resourceDeleted: number;
  resourceId: string;
  resourceName: string;
  resourceStatus: string;
  resourceType: string;
  tags: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
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

export class ListDiscoveredResourcesResponseDiscoveredResourceProfiles extends $tea.Model {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  discoveredResourceProfileList: ListDiscoveredResourcesResponseDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      discoveredResourceProfileList: 'DiscoveredResourceProfileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListDiscoveredResourcesResponseDiscoveredResourceProfilesDiscoveredResourceProfileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRecorderResponseConfigurationRecorder extends $tea.Model {
  accountId: number;
  configurationRecorderStatus: string;
  organizationMasterId: number;
  organizationEnableStatus: string;
  resourceTypes: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      organizationMasterId: 'OrganizationMasterId',
      organizationEnableStatus: 'OrganizationEnableStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationRecorderStatus: 'string',
      organizationMasterId: 'number',
      organizationEnableStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiscoveredResourceResponseDiscoveredResourceDetail extends $tea.Model {
  accountId: number;
  resourceId: string;
  resourceType: string;
  resourceName: string;
  region: string;
  availabilityZone: string;
  resourceCreationTime: number;
  resourceStatus: string;
  resourceDeleted: number;
  tags: string;
  configuration: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      resourceName: 'ResourceName',
      region: 'Region',
      availabilityZone: 'AvailabilityZone',
      resourceCreationTime: 'ResourceCreationTime',
      resourceStatus: 'ResourceStatus',
      resourceDeleted: 'ResourceDeleted',
      tags: 'Tags',
      configuration: 'Configuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      resourceId: 'string',
      resourceType: 'string',
      resourceName: 'string',
      region: 'string',
      availabilityZone: 'string',
      resourceCreationTime: 'number',
      resourceStatus: 'string',
      resourceDeleted: 'number',
      tags: 'string',
      configuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponseConfigurationRecorder extends $tea.Model {
  accountId: number;
  configurationRecorderStatus: string;
  organizationMasterId: number;
  organizationEnableStatus: string;
  resourceTypes: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      organizationMasterId: 'OrganizationMasterId',
      organizationEnableStatus: 'OrganizationEnableStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationRecorderStatus: 'string',
      organizationMasterId: 'number',
      organizationEnableStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseConfigRuleCreateBy extends $tea.Model {
  creatorType: string;
  creatorId: string;
  creatorName: string;
  configRuleSceneId: string;
  configRuleSceneName: string;
  static names(): { [key: string]: string } {
    return {
      creatorType: 'CreatorType',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      configRuleSceneId: 'ConfigRuleSceneId',
      configRuleSceneName: 'ConfigRuleSceneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorType: 'string',
      creatorId: 'string',
      creatorName: 'string',
      configRuleSceneId: 'string',
      configRuleSceneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseConfigRuleConfigRuleEvaluationStatus extends $tea.Model {
  firstActivatedTimestamp: number;
  firstEvaluationStarted: boolean;
  lastErrorCode: string;
  lastErrorMessage: string;
  lastFailedEvaluationTimestamp: number;
  lastFailedInvocationTimestamp: number;
  lastSuccessfulEvaluationTimestamp: number;
  lastSuccessfulInvocationTimestamp: number;
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

export class DescribeConfigRuleResponseConfigRuleManagedRuleSourceDetails extends $tea.Model {
  eventSource: string;
  maximumExecutionFrequency: string;
  messageType: string;
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

export class DescribeConfigRuleResponseConfigRuleManagedRule extends $tea.Model {
  managedRuleName: string;
  description: string;
  identifier: string;
  compulsoryInputParameterDetails: { [key: string]: any };
  optionalInputParameterDetails: { [key: string]: any };
  helpUrl: string;
  sourceDetails: DescribeConfigRuleResponseConfigRuleManagedRuleSourceDetails[];
  labels: string[];
  static names(): { [key: string]: string } {
    return {
      managedRuleName: 'ManagedRuleName',
      description: 'Description',
      identifier: 'Identifier',
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      helpUrl: 'HelpUrl',
      sourceDetails: 'SourceDetails',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleName: 'string',
      description: 'string',
      identifier: 'string',
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      helpUrl: 'string',
      sourceDetails: { 'type': 'array', 'itemType': DescribeConfigRuleResponseConfigRuleManagedRuleSourceDetails },
      labels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseConfigRuleSourceSourceConditions extends $tea.Model {
  desiredValue: string;
  name: string;
  operator: string;
  required: boolean;
  selectPath: string;
  tips: string;
  static names(): { [key: string]: string } {
    return {
      desiredValue: 'DesiredValue',
      name: 'Name',
      operator: 'Operator',
      required: 'Required',
      selectPath: 'SelectPath',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredValue: 'string',
      name: 'string',
      operator: 'string',
      required: 'boolean',
      selectPath: 'string',
      tips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseConfigRuleSourceSourceDetails extends $tea.Model {
  eventSource: string;
  maximumExecutionFrequency: string;
  messageType: string;
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

export class DescribeConfigRuleResponseConfigRuleSource extends $tea.Model {
  identifier: string;
  owner: string;
  sourceConditions: DescribeConfigRuleResponseConfigRuleSourceSourceConditions[];
  sourceDetails: DescribeConfigRuleResponseConfigRuleSourceSourceDetails[];
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      owner: 'Owner',
      sourceConditions: 'SourceConditions',
      sourceDetails: 'SourceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      owner: 'string',
      sourceConditions: { 'type': 'array', 'itemType': DescribeConfigRuleResponseConfigRuleSourceSourceConditions },
      sourceDetails: { 'type': 'array', 'itemType': DescribeConfigRuleResponseConfigRuleSourceSourceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseConfigRuleScope extends $tea.Model {
  complianceResourceId: string;
  complianceResourceTypes: string[];
  static names(): { [key: string]: string } {
    return {
      complianceResourceId: 'ComplianceResourceId',
      complianceResourceTypes: 'ComplianceResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceId: 'string',
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseConfigRule extends $tea.Model {
  configRuleArn: string;
  configRuleId: string;
  configRuleName: string;
  configRuleState: string;
  createTimestamp: number;
  description: string;
  inputParameters: { [key: string]: any };
  modifiedTimestamp: number;
  riskLevel: number;
  maximumExecutionFrequency: string;
  createBy: DescribeConfigRuleResponseConfigRuleCreateBy;
  configRuleEvaluationStatus: DescribeConfigRuleResponseConfigRuleConfigRuleEvaluationStatus;
  managedRule: DescribeConfigRuleResponseConfigRuleManagedRule;
  source: DescribeConfigRuleResponseConfigRuleSource;
  scope: DescribeConfigRuleResponseConfigRuleScope;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      inputParameters: 'InputParameters',
      modifiedTimestamp: 'ModifiedTimestamp',
      riskLevel: 'RiskLevel',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      createBy: 'CreateBy',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      managedRule: 'ManagedRule',
      source: 'Source',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      createTimestamp: 'number',
      description: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modifiedTimestamp: 'number',
      riskLevel: 'number',
      maximumExecutionFrequency: 'string',
      createBy: DescribeConfigRuleResponseConfigRuleCreateBy,
      configRuleEvaluationStatus: DescribeConfigRuleResponseConfigRuleConfigRuleEvaluationStatus,
      managedRule: DescribeConfigRuleResponseConfigRuleManagedRule,
      source: DescribeConfigRuleResponseConfigRuleSource,
      scope: DescribeConfigRuleResponseConfigRuleScope,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-shanghai': "config.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "config.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("config", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async getResourceComplianceTimelineWithOptions(request: GetResourceComplianceTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceTimelineResponse> {
    Util.validateModel(request);
    return $tea.cast<GetResourceComplianceTimelineResponse>(await this.doRequest("GetResourceComplianceTimeline", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new GetResourceComplianceTimelineResponse({}));
  }

  async getResourceComplianceTimeline(request: GetResourceComplianceTimelineRequest): Promise<GetResourceComplianceTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceComplianceTimelineWithOptions(request, runtime);
  }

  async getResourceConfigurationTimelineWithOptions(request: GetResourceConfigurationTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceConfigurationTimelineResponse> {
    Util.validateModel(request);
    return $tea.cast<GetResourceConfigurationTimelineResponse>(await this.doRequest("GetResourceConfigurationTimeline", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new GetResourceConfigurationTimelineResponse({}));
  }

  async getResourceConfigurationTimeline(request: GetResourceConfigurationTimelineRequest): Promise<GetResourceConfigurationTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceConfigurationTimelineWithOptions(request, runtime);
  }

  async describeDeliveryChannelsWithOptions(request: DescribeDeliveryChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeliveryChannelsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDeliveryChannelsResponse>(await this.doRequest("DescribeDeliveryChannels", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeDeliveryChannelsResponse({}));
  }

  async describeDeliveryChannels(request: DescribeDeliveryChannelsRequest): Promise<DescribeDeliveryChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeliveryChannelsWithOptions(request, runtime);
  }

  async putConfigurationRecorderWithOptions(request: PutConfigurationRecorderRequest, runtime: $Util.RuntimeOptions): Promise<PutConfigurationRecorderResponse> {
    Util.validateModel(request);
    return $tea.cast<PutConfigurationRecorderResponse>(await this.doRequest("PutConfigurationRecorder", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new PutConfigurationRecorderResponse({}));
  }

  async putConfigurationRecorder(request: PutConfigurationRecorderRequest): Promise<PutConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putConfigurationRecorderWithOptions(request, runtime);
  }

  async getDiscoveredResourceSummaryWithOptions(request: GetDiscoveredResourceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceSummaryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDiscoveredResourceSummaryResponse>(await this.doRequest("GetDiscoveredResourceSummary", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new GetDiscoveredResourceSummaryResponse({}));
  }

  async getDiscoveredResourceSummary(request: GetDiscoveredResourceSummaryRequest): Promise<GetDiscoveredResourceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceSummaryWithOptions(request, runtime);
  }

  async activeConfigRulesWithOptions(request: ActiveConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ActiveConfigRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ActiveConfigRulesResponse>(await this.doRequest("ActiveConfigRules", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new ActiveConfigRulesResponse({}));
  }

  async activeConfigRules(request: ActiveConfigRulesRequest): Promise<ActiveConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeConfigRulesWithOptions(request, runtime);
  }

  async stopConfigRulesWithOptions(request: StopConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<StopConfigRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<StopConfigRulesResponse>(await this.doRequest("StopConfigRules", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new StopConfigRulesResponse({}));
  }

  async stopConfigRules(request: StopConfigRulesRequest): Promise<StopConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopConfigRulesWithOptions(request, runtime);
  }

  async describeComplianceSummaryWithOptions(request: DescribeComplianceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComplianceSummaryResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeComplianceSummaryResponse>(await this.doRequest("DescribeComplianceSummary", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeComplianceSummaryResponse({}));
  }

  async describeComplianceSummary(request: DescribeComplianceSummaryRequest): Promise<DescribeComplianceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComplianceSummaryWithOptions(request, runtime);
  }

  async listConfigRulesWithOptions(request: ListConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListConfigRulesResponse>(await this.doRequest("ListConfigRules", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new ListConfigRulesResponse({}));
  }

  async listConfigRules(request: ListConfigRulesRequest): Promise<ListConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRulesWithOptions(request, runtime);
  }

  async putConfigRuleWithOptions(request: PutConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutConfigRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<PutConfigRuleResponse>(await this.doRequest("PutConfigRule", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new PutConfigRuleResponse({}));
  }

  async putConfigRule(request: PutConfigRuleRequest): Promise<PutConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putConfigRuleWithOptions(request, runtime);
  }

  async describeEvaluationResultsWithOptions(request: DescribeEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluationResultsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeEvaluationResultsResponse>(await this.doRequest("DescribeEvaluationResults", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeEvaluationResultsResponse({}));
  }

  async describeEvaluationResults(request: DescribeEvaluationResultsRequest): Promise<DescribeEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluationResultsWithOptions(request, runtime);
  }

  async deleteConfigRulesWithOptions(request: DeleteConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteConfigRulesResponse>(await this.doRequest("DeleteConfigRules", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new DeleteConfigRulesResponse({}));
  }

  async deleteConfigRules(request: DeleteConfigRulesRequest): Promise<DeleteConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigRulesWithOptions(request, runtime);
  }

  async describeComplianceWithOptions(request: DescribeComplianceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComplianceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeComplianceResponse>(await this.doRequest("DescribeCompliance", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeComplianceResponse({}));
  }

  async describeCompliance(request: DescribeComplianceRequest): Promise<DescribeComplianceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComplianceWithOptions(request, runtime);
  }

  async getDiscoveredResourceCountsWithOptions(request: GetDiscoveredResourceCountsRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceCountsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDiscoveredResourceCountsResponse>(await this.doRequest("GetDiscoveredResourceCounts", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new GetDiscoveredResourceCountsResponse({}));
  }

  async getDiscoveredResourceCounts(request: GetDiscoveredResourceCountsRequest): Promise<GetDiscoveredResourceCountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsWithOptions(request, runtime);
  }

  async listDiscoveredResourcesWithOptions(request: ListDiscoveredResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDiscoveredResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDiscoveredResourcesResponse>(await this.doRequest("ListDiscoveredResources", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new ListDiscoveredResourcesResponse({}));
  }

  async listDiscoveredResources(request: ListDiscoveredResourcesRequest): Promise<ListDiscoveredResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDiscoveredResourcesWithOptions(request, runtime);
  }

  async describeConfigurationRecorderWithOptions(request: DescribeConfigurationRecorderRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigurationRecorderResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeConfigurationRecorderResponse>(await this.doRequest("DescribeConfigurationRecorder", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeConfigurationRecorderResponse({}));
  }

  async describeConfigurationRecorder(request: DescribeConfigurationRecorderRequest): Promise<DescribeConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigurationRecorderWithOptions(request, runtime);
  }

  async describeDiscoveredResourceWithOptions(request: DescribeDiscoveredResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiscoveredResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDiscoveredResourceResponse>(await this.doRequest("DescribeDiscoveredResource", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeDiscoveredResourceResponse({}));
  }

  async describeDiscoveredResource(request: DescribeDiscoveredResourceRequest): Promise<DescribeDiscoveredResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiscoveredResourceWithOptions(request, runtime);
  }

  async startConfigurationRecorderWithOptions(request: StartConfigurationRecorderRequest, runtime: $Util.RuntimeOptions): Promise<StartConfigurationRecorderResponse> {
    Util.validateModel(request);
    return $tea.cast<StartConfigurationRecorderResponse>(await this.doRequest("StartConfigurationRecorder", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new StartConfigurationRecorderResponse({}));
  }

  async startConfigurationRecorder(request: StartConfigurationRecorderRequest): Promise<StartConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConfigurationRecorderWithOptions(request, runtime);
  }

  async describeConfigRuleWithOptions(request: DescribeConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeConfigRuleResponse>(await this.doRequest("DescribeConfigRule", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new DescribeConfigRuleResponse({}));
  }

  async describeConfigRule(request: DescribeConfigRuleRequest): Promise<DescribeConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigRuleWithOptions(request, runtime);
  }

  async getSupportedResourceTypesWithOptions(request: GetSupportedResourceTypesRequest, runtime: $Util.RuntimeOptions): Promise<GetSupportedResourceTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSupportedResourceTypesResponse>(await this.doRequest("GetSupportedResourceTypes", "HTTPS", "GET", "2019-01-08", "AK", $tea.toMap(request), null, runtime), new GetSupportedResourceTypesResponse({}));
  }

  async getSupportedResourceTypes(request: GetSupportedResourceTypesRequest): Promise<GetSupportedResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupportedResourceTypesWithOptions(request, runtime);
  }

  async putDeliveryChannelWithOptions(request: PutDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<PutDeliveryChannelResponse> {
    Util.validateModel(request);
    return $tea.cast<PutDeliveryChannelResponse>(await this.doRequest("PutDeliveryChannel", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new PutDeliveryChannelResponse({}));
  }

  async putDeliveryChannel(request: PutDeliveryChannelRequest): Promise<PutDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDeliveryChannelWithOptions(request, runtime);
  }

  async putEvaluationsWithOptions(request: PutEvaluationsRequest, runtime: $Util.RuntimeOptions): Promise<PutEvaluationsResponse> {
    Util.validateModel(request);
    return $tea.cast<PutEvaluationsResponse>(await this.doRequest("PutEvaluations", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new PutEvaluationsResponse({}));
  }

  async putEvaluations(request: PutEvaluationsRequest): Promise<PutEvaluationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEvaluationsWithOptions(request, runtime);
  }

  async startConfigRuleEvaluationWithOptions(request: StartConfigRuleEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<StartConfigRuleEvaluationResponse> {
    Util.validateModel(request);
    return $tea.cast<StartConfigRuleEvaluationResponse>(await this.doRequest("StartConfigRuleEvaluation", "HTTPS", "POST", "2019-01-08", "AK", null, $tea.toMap(request), runtime), new StartConfigRuleEvaluationResponse({}));
  }

  async startConfigRuleEvaluation(request: StartConfigRuleEvaluationRequest): Promise<StartConfigRuleEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationWithOptions(request, runtime);
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
