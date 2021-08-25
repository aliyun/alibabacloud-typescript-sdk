// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  requestId?: string;
  operateRuleResult?: ActiveConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: ActiveConfigRulesResponseBodyOperateRuleResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActiveConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActiveConfigRulesResponseBody,
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
  requestId?: string;
  operateRuleResult?: DeleteConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: DeleteConfigRulesResponseBodyOperateRuleResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConfigRulesResponseBody,
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

export class DescribeComplianceResponseBody extends $tea.Model {
  requestId?: string;
  complianceResult?: DescribeComplianceResponseBodyComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      complianceResult: 'ComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      complianceResult: DescribeComplianceResponseBodyComplianceResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeComplianceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeComplianceResponseBody,
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

export class DescribeComplianceSummaryResponseBody extends $tea.Model {
  requestId?: string;
  complianceSummary?: DescribeComplianceSummaryResponseBodyComplianceSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      complianceSummary: 'ComplianceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      complianceSummary: DescribeComplianceSummaryResponseBodyComplianceSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeComplianceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeComplianceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
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

export class DescribeConfigRuleResponseBody extends $tea.Model {
  requestId?: string;
  configRule?: DescribeConfigRuleResponseBodyConfigRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRule: 'ConfigRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRule: DescribeConfigRuleResponseBodyConfigRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRecorderResponseBody extends $tea.Model {
  requestId?: string;
  configurationRecorder?: DescribeConfigurationRecorderResponseBodyConfigurationRecorder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationRecorder: 'ConfigurationRecorder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationRecorder: DescribeConfigurationRecorderResponseBodyConfigurationRecorder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRecorderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConfigurationRecorderResponseBody,
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

export class DescribeDeliveryChannelsResponseBody extends $tea.Model {
  deliveryChannels?: DescribeDeliveryChannelsResponseBodyDeliveryChannels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannels: 'DeliveryChannels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': DescribeDeliveryChannelsResponseBodyDeliveryChannels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryChannelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeliveryChannelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeliveryChannelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiscoveredResourceRequest extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
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

export class DescribeDiscoveredResourceResponseBody extends $tea.Model {
  requestId?: string;
  discoveredResourceDetail?: DescribeDiscoveredResourceResponseBodyDiscoveredResourceDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceDetail: 'DiscoveredResourceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceDetail: DescribeDiscoveredResourceResponseBodyDiscoveredResourceDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiscoveredResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiscoveredResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiscoveredResourceResponseBody,
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

export class DescribeEvaluationResultsResponseBody extends $tea.Model {
  requestId?: string;
  evaluationResults?: DescribeEvaluationResultsResponseBodyEvaluationResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      evaluationResults: 'EvaluationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      evaluationResults: DescribeEvaluationResultsResponseBodyEvaluationResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeEvaluationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeEvaluationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceRequest extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  region?: string;
  aggregatorId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      region: 'Region',
      aggregatorId: 'AggregatorId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      region: 'string',
      aggregatorId: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponseBody extends $tea.Model {
  requestId?: string;
  discoveredResourceDetail?: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceDetail: 'DiscoveredResourceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceDetail: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAggregateDiscoveredResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAggregateDiscoveredResourceResponseBody,
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

export class GetDiscoveredResourceCountsResponseBody extends $tea.Model {
  requestId?: string;
  groupedResourceCounts?: GetDiscoveredResourceCountsResponseBodyGroupedResourceCounts;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      groupedResourceCounts: 'GroupedResourceCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      groupedResourceCounts: GetDiscoveredResourceCountsResponseBodyGroupedResourceCounts,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDiscoveredResourceCountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDiscoveredResourceCountsResponseBody,
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

export class GetDiscoveredResourceSummaryResponseBody extends $tea.Model {
  requestId?: string;
  discoveredResourceSummary?: GetDiscoveredResourceSummaryResponseBodyDiscoveredResourceSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceSummary: 'DiscoveredResourceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceSummary: GetDiscoveredResourceSummaryResponseBodyDiscoveredResourceSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDiscoveredResourceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDiscoveredResourceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  multiAccount?: boolean;
  memberId?: string;
  region?: string;
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
  resourceId?: string;
  startTime?: number;
  endTime?: number;
  limit?: number;
  resourceType?: string;
  region?: string;
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

export class GetSupportedResourceTypesResponseBody extends $tea.Model {
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

export class GetSupportedResourceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSupportedResourceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSupportedResourceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesRequest extends $tea.Model {
  resourceId?: string;
  resourceDeleted?: number;
  pageSize?: number;
  pageNumber?: number;
  resourceTypes?: string;
  regions?: string;
  complianceType?: string;
  aggregatorId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceDeleted: 'ResourceDeleted',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      resourceTypes: 'ResourceTypes',
      regions: 'Regions',
      complianceType: 'ComplianceType',
      aggregatorId: 'AggregatorId',
      resourceOwnerId: 'ResourceOwnerId',
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
      aggregatorId: 'string',
      resourceOwnerId: 'number',
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
  headers: { [key: string]: string };
  body: ListAggregateDiscoveredResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAggregateDiscoveredResourcesResponseBody,
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
  pageNumber?: number;
  pageSize?: number;
  multiAccount?: boolean;
  memberId?: number;
  configRuleName?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleState: 'ConfigRuleState',
      complianceType: 'ComplianceType',
      riskLevel: 'RiskLevel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      multiAccount: 'MultiAccount',
      memberId: 'MemberId',
      configRuleName: 'ConfigRuleName',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleState: 'string',
      complianceType: 'string',
      riskLevel: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      multiAccount: 'boolean',
      memberId: 'number',
      configRuleName: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  configRules?: ListConfigRulesResponseBodyConfigRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRules: 'ConfigRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRules: ListConfigRulesResponseBodyConfigRules,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesRequest extends $tea.Model {
  resourceId?: string;
  resourceDeleted?: number;
  pageSize?: number;
  pageNumber?: number;
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

export class ListDiscoveredResourcesResponseBody extends $tea.Model {
  requestId?: string;
  discoveredResourceProfiles?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceProfiles: 'DiscoveredResourceProfiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceProfiles: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDiscoveredResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDiscoveredResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesRequest extends $tea.Model {
  remediationType?: string;
  managedRuleIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      remediationType: 'RemediationType',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationType: 'string',
      managedRuleIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  remediationTemplates?: ListRemediationTemplatesResponseBodyRemediationTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationTemplates: 'RemediationTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationTemplates: { 'type': 'array', 'itemType': ListRemediationTemplatesResponseBodyRemediationTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRemediationTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRemediationTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
  configRuleName?: string;
  description?: string;
  inputParameters?: string;
  sourceOwner?: string;
  sourceIdentifier?: string;
  sourceDetailMessageType?: string;
  sourceMaximumExecutionFrequency?: string;
  scopeComplianceResourceId?: string;
  scopeComplianceResourceTypes?: string;
  riskLevel?: number;
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

export class PutConfigRuleResponseBody extends $tea.Model {
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

export class PutConfigRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutConfigRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutConfigRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigurationRecorderRequest extends $tea.Model {
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

export class PutConfigurationRecorderResponseBody extends $tea.Model {
  requestId?: string;
  configurationRecorder?: PutConfigurationRecorderResponseBodyConfigurationRecorder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationRecorder: 'ConfigurationRecorder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationRecorder: PutConfigurationRecorderResponseBodyConfigurationRecorder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigurationRecorderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutConfigurationRecorderResponseBody,
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
  deliveryChannelType?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelAssumeRoleArn?: string;
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

export class PutDeliveryChannelResponseBody extends $tea.Model {
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

export class PutDeliveryChannelResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutDeliveryChannelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutDeliveryChannelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEvaluationsRequest extends $tea.Model {
  resultToken?: string;
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

export class PutEvaluationsResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEvaluationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutEvaluationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutEvaluationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigRuleEvaluationRequest extends $tea.Model {
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

export class StartConfigRuleEvaluationResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigRuleEvaluationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartConfigRuleEvaluationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartConfigRuleEvaluationResponseBody,
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

export class StartConfigurationRecorderResponseBody extends $tea.Model {
  requestId?: string;
  configurationRecorder?: StartConfigurationRecorderResponseBodyConfigurationRecorder;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configurationRecorder: 'ConfigurationRecorder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configurationRecorder: StartConfigurationRecorderResponseBodyConfigurationRecorder,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartConfigurationRecorderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartConfigurationRecorderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigRulesRequest extends $tea.Model {
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

export class StopConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  operateRuleResult?: StopConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: StopConfigRulesResponseBodyOperateRuleResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopConfigRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopConfigRulesResponseBody,
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

export class DescribeComplianceResponseBodyComplianceResultCompliances extends $tea.Model {
  count?: number;
  complianceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      complianceType: 'ComplianceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      complianceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceResponseBodyComplianceResult extends $tea.Model {
  totalCount?: number;
  compliances?: DescribeComplianceResponseBodyComplianceResultCompliances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      compliances: 'Compliances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      compliances: { 'type': 'array', 'itemType': DescribeComplianceResponseBodyComplianceResultCompliances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $tea.Model {
  complianceSummaryTimestamp?: number;
  compliantCount?: number;
  totalCount?: number;
  nonCompliantCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      totalCount: 'TotalCount',
      nonCompliantCount: 'NonCompliantCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      totalCount: 'number',
      nonCompliantCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $tea.Model {
  complianceSummaryTimestamp?: number;
  compliantCount?: number;
  totalCount?: number;
  nonCompliantCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      totalCount: 'TotalCount',
      nonCompliantCount: 'NonCompliantCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      totalCount: 'number',
      nonCompliantCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComplianceSummaryResponseBodyComplianceSummary extends $tea.Model {
  complianceSummaryByConfigRule?: DescribeComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  complianceSummaryByResource?: DescribeComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: DescribeComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: DescribeComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $tea.Model {
  messageType?: string;
  eventSource?: string;
  maximumExecutionFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      messageType: 'MessageType',
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageType: 'string',
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleSourceSourceConditions extends $tea.Model {
  desiredValue?: string;
  tips?: string;
  operator?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desiredValue: 'DesiredValue',
      tips: 'Tips',
      operator: 'Operator',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredValue: 'string',
      tips: 'string',
      operator: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleSource extends $tea.Model {
  sourceDetails?: DescribeConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  owner?: string;
  sourceConditions?: DescribeConfigRuleResponseBodyConfigRuleSourceSourceConditions[];
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDetails: 'SourceDetails',
      owner: 'Owner',
      sourceConditions: 'SourceConditions',
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDetails: { 'type': 'array', 'itemType': DescribeConfigRuleResponseBodyConfigRuleSourceSourceDetails },
      owner: 'string',
      sourceConditions: { 'type': 'array', 'itemType': DescribeConfigRuleResponseBodyConfigRuleSourceSourceConditions },
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $tea.Model {
  messageType?: string;
  eventSource?: string;
  maximumExecutionFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      messageType: 'MessageType',
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageType: 'string',
      eventSource: 'string',
      maximumExecutionFrequency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleManagedRule extends $tea.Model {
  sourceDetails?: DescribeConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
  description?: string;
  labels?: string[];
  identifier?: string;
  optionalInputParameterDetails?: { [key: string]: any };
  managedRuleName?: string;
  compulsoryInputParameterDetails?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      sourceDetails: 'SourceDetails',
      description: 'Description',
      labels: 'Labels',
      identifier: 'Identifier',
      optionalInputParameterDetails: 'OptionalInputParameterDetails',
      managedRuleName: 'ManagedRuleName',
      compulsoryInputParameterDetails: 'CompulsoryInputParameterDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDetails: { 'type': 'array', 'itemType': DescribeConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
      description: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      identifier: 'string',
      optionalInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      managedRuleName: 'string',
      compulsoryInputParameterDetails: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleScope extends $tea.Model {
  complianceResourceTypes?: string[];
  complianceResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResourceTypes: 'ComplianceResourceTypes',
      complianceResourceId: 'ComplianceResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResourceTypes: { 'type': 'array', 'itemType': 'string' },
      complianceResourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $tea.Model {
  lastErrorCode?: string;
  lastSuccessfulEvaluationTimestamp?: number;
  firstActivatedTimestamp?: number;
  firstEvaluationStarted?: boolean;
  lastSuccessfulInvocationTimestamp?: number;
  lastErrorMessage?: string;
  lastFailedEvaluationTimestamp?: number;
  lastFailedInvocationTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      lastErrorCode: 'LastErrorCode',
      lastSuccessfulEvaluationTimestamp: 'LastSuccessfulEvaluationTimestamp',
      firstActivatedTimestamp: 'FirstActivatedTimestamp',
      firstEvaluationStarted: 'FirstEvaluationStarted',
      lastSuccessfulInvocationTimestamp: 'LastSuccessfulInvocationTimestamp',
      lastErrorMessage: 'LastErrorMessage',
      lastFailedEvaluationTimestamp: 'LastFailedEvaluationTimestamp',
      lastFailedInvocationTimestamp: 'LastFailedInvocationTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastErrorCode: 'string',
      lastSuccessfulEvaluationTimestamp: 'number',
      firstActivatedTimestamp: 'number',
      firstEvaluationStarted: 'boolean',
      lastSuccessfulInvocationTimestamp: 'number',
      lastErrorMessage: 'string',
      lastFailedEvaluationTimestamp: 'number',
      lastFailedInvocationTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigRuleResponseBodyConfigRule extends $tea.Model {
  riskLevel?: number;
  inputParameters?: { [key: string]: any };
  source?: DescribeConfigRuleResponseBodyConfigRuleSource;
  configRuleState?: string;
  maximumExecutionFrequency?: string;
  managedRule?: DescribeConfigRuleResponseBodyConfigRuleManagedRule;
  configRuleArn?: string;
  description?: string;
  configRuleName?: string;
  scope?: DescribeConfigRuleResponseBodyConfigRuleScope;
  configRuleEvaluationStatus?: DescribeConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  modifiedTimestamp?: number;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      inputParameters: 'InputParameters',
      source: 'Source',
      configRuleState: 'ConfigRuleState',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      managedRule: 'ManagedRule',
      configRuleArn: 'ConfigRuleArn',
      description: 'Description',
      configRuleName: 'ConfigRuleName',
      scope: 'Scope',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      modifiedTimestamp: 'ModifiedTimestamp',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: DescribeConfigRuleResponseBodyConfigRuleSource,
      configRuleState: 'string',
      maximumExecutionFrequency: 'string',
      managedRule: DescribeConfigRuleResponseBodyConfigRuleManagedRule,
      configRuleArn: 'string',
      description: 'string',
      configRuleName: 'string',
      scope: DescribeConfigRuleResponseBodyConfigRuleScope,
      configRuleEvaluationStatus: DescribeConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      modifiedTimestamp: 'number',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationRecorderResponseBodyConfigurationRecorder extends $tea.Model {
  accountId?: number;
  configurationRecorderStatus?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeliveryChannelsResponseBodyDeliveryChannels extends $tea.Model {
  status?: number;
  deliveryChannelName?: string;
  deliveryChannelId?: string;
  deliveryChannelType?: string;
  deliveryChannelAssumeRoleArn?: string;
  description?: string;
  deliveryChannelCondition?: string;
  deliveryChannelTargetArn?: string;
  configurationSnapshot?: boolean;
  configurationItemChangeNotification?: boolean;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelType: 'DeliveryChannelType',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      description: 'Description',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      configurationSnapshot: 'ConfigurationSnapshot',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      deliveryChannelName: 'string',
      deliveryChannelId: 'string',
      deliveryChannelType: 'string',
      deliveryChannelAssumeRoleArn: 'string',
      description: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelTargetArn: 'string',
      configurationSnapshot: 'boolean',
      configurationItemChangeNotification: 'boolean',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $tea.Model {
  availabilityZone?: string;
  resourceType?: string;
  configuration?: string;
  region?: string;
  resourceCreationTime?: number;
  tags?: string;
  accountId?: number;
  resourceId?: string;
  resourceDeleted?: number;
  resourceName?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      tags: 'Tags',
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceDeleted: 'ResourceDeleted',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      resourceType: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      tags: 'string',
      accountId: 'number',
      resourceId: 'string',
      resourceDeleted: 'number',
      resourceName: 'string',
      resourceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  configRuleArn?: string;
  resourceType?: string;
  configRuleName?: string;
  resourceId?: string;
  configRuleId?: string;
  resourceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleArn: 'ConfigRuleArn',
      resourceType: 'ResourceType',
      configRuleName: 'ConfigRuleName',
      resourceId: 'ResourceId',
      configRuleId: 'ConfigRuleId',
      resourceName: 'ResourceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleArn: 'string',
      resourceType: 'string',
      configRuleName: 'string',
      resourceId: 'string',
      configRuleId: 'string',
      resourceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  orderingTimestamp?: number;
  evaluationResultQualifier?: DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  static names(): { [key: string]: string } {
    return {
      orderingTimestamp: 'OrderingTimestamp',
      evaluationResultQualifier: 'EvaluationResultQualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderingTimestamp: 'number',
      evaluationResultQualifier: DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  riskLevel?: number;
  complianceType?: string;
  resultRecordedTimestamp?: number;
  annotation?: string;
  configRuleInvokedTimestamp?: number;
  invokingEventMessageType?: string;
  remediationEnabled?: boolean;
  evaluationResultIdentifier?: DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      complianceType: 'ComplianceType',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      annotation: 'Annotation',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      invokingEventMessageType: 'InvokingEventMessageType',
      remediationEnabled: 'RemediationEnabled',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      complianceType: 'string',
      resultRecordedTimestamp: 'number',
      annotation: 'string',
      configRuleInvokedTimestamp: 'number',
      invokingEventMessageType: 'string',
      remediationEnabled: 'boolean',
      evaluationResultIdentifier: DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  evaluationResultList?: DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
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
      evaluationResultList: { 'type': 'array', 'itemType': DescribeEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $tea.Model {
  availabilityZone?: string;
  resourceType?: string;
  configuration?: string;
  region?: string;
  resourceCreationTime?: number;
  tags?: string;
  accountId?: number;
  resourceId?: string;
  resourceDeleted?: number;
  resourceName?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      tags: 'Tags',
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceDeleted: 'ResourceDeleted',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityZone: 'string',
      resourceType: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      tags: 'string',
      accountId: 'number',
      resourceId: 'string',
      resourceDeleted: 'number',
      resourceName: 'string',
      resourceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsResponseBodyGroupedResourceCountsGroupedResourceCountList extends $tea.Model {
  groupName?: string;
  resourceCount?: number;
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

export class GetDiscoveredResourceCountsResponseBodyGroupedResourceCounts extends $tea.Model {
  groupByKey?: string;
  groupedResourceCountList?: GetDiscoveredResourceCountsResponseBodyGroupedResourceCountsGroupedResourceCountList[];
  static names(): { [key: string]: string } {
    return {
      groupByKey: 'GroupByKey',
      groupedResourceCountList: 'GroupedResourceCountList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupByKey: 'string',
      groupedResourceCountList: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsResponseBodyGroupedResourceCountsGroupedResourceCountList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceSummaryResponseBodyDiscoveredResourceSummary extends $tea.Model {
  resourceTypeCount?: number;
  regionCount?: number;
  resourceCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceTypeCount: 'ResourceTypeCount',
      regionCount: 'RegionCount',
      resourceCount: 'ResourceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCount: 'number',
      regionCount: 'number',
      resourceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $tea.Model {
  accountId?: string;
  tags?: string;
  availabilityZone?: string;
  resourceType?: string;
  resourceCreateTime?: number;
  configuration?: string;
  region?: string;
  captureTime?: number;
  configurationDiff?: string;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      tags: 'Tags',
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      resourceCreateTime: 'ResourceCreateTime',
      configuration: 'Configuration',
      region: 'Region',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      tags: 'string',
      availabilityZone: 'string',
      resourceType: 'string',
      resourceCreateTime: 'number',
      configuration: 'string',
      region: 'string',
      captureTime: 'number',
      configurationDiff: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $tea.Model {
  nextToken?: string;
  totalCount?: number;
  limit?: number;
  complianceList?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      limit: 'Limit',
      complianceList: 'ComplianceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      totalCount: 'number',
      limit: 'number',
      complianceList: { 'type': 'array', 'itemType': GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList extends $tea.Model {
  resourceEventType?: string;
  accountId?: number;
  tags?: string;
  availabilityZone?: string;
  resourceType?: string;
  resourceCreateTime?: string;
  region?: string;
  captureTime?: string;
  configurationDiff?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceEventType: 'ResourceEventType',
      accountId: 'AccountId',
      tags: 'Tags',
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      resourceCreateTime: 'ResourceCreateTime',
      region: 'Region',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceEventType: 'string',
      accountId: 'number',
      tags: 'string',
      availabilityZone: 'string',
      resourceType: 'string',
      resourceCreateTime: 'string',
      region: 'string',
      captureTime: 'string',
      configurationDiff: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $tea.Model {
  nextToken?: string;
  totalCount?: number;
  limit?: number;
  configurationList?: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
      limit: 'Limit',
      configurationList: 'ConfigurationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      totalCount: 'number',
      limit: 'number',
      configurationList: { 'type': 'array', 'itemType': GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList extends $tea.Model {
  resourceType?: string;
  region?: string;
  resourceCreationTime?: number;
  tags?: string;
  accountId?: number;
  resourceId?: string;
  resourceName?: string;
  resourceDeleted?: number;
  resourceStatus?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      tags: 'Tags',
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceDeleted: 'ResourceDeleted',
      resourceStatus: 'ResourceStatus',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      tags: 'string',
      accountId: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceDeleted: 'number',
      resourceStatus: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $tea.Model {
  discoveredResourceProfileList?: ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceProfileList: 'DiscoveredResourceProfileList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListAggregateDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
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

export class ListConfigRulesResponseBodyConfigRulesConfigRuleList extends $tea.Model {
  compliancePackId?: string;
  riskLevel?: number;
  sourceOwner?: string;
  accountId?: number;
  configRuleState?: string;
  compliance?: ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance;
  sourceIdentifier?: string;
  configRuleArn?: string;
  description?: string;
  createBy?: ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
  automationType?: string;
  configRuleName?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      riskLevel: 'RiskLevel',
      sourceOwner: 'SourceOwner',
      accountId: 'AccountId',
      configRuleState: 'ConfigRuleState',
      compliance: 'Compliance',
      sourceIdentifier: 'SourceIdentifier',
      configRuleArn: 'ConfigRuleArn',
      description: 'Description',
      createBy: 'CreateBy',
      automationType: 'AutomationType',
      configRuleName: 'ConfigRuleName',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      riskLevel: 'number',
      sourceOwner: 'string',
      accountId: 'number',
      configRuleState: 'string',
      compliance: ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance,
      sourceIdentifier: 'string',
      configRuleArn: 'string',
      description: 'string',
      createBy: ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy,
      automationType: 'string',
      configRuleName: 'string',
      configRuleId: 'string',
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
  resourceType?: string;
  region?: string;
  resourceCreationTime?: number;
  tags?: string;
  accountId?: number;
  resourceId?: string;
  resourceName?: string;
  resourceDeleted?: number;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      tags: 'Tags',
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceDeleted: 'ResourceDeleted',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      tags: 'string',
      accountId: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceDeleted: 'number',
      resourceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiscoveredResourcesResponseBodyDiscoveredResourceProfiles extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  discoveredResourceProfileList?: ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList[];
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
      discoveredResourceProfileList: { 'type': 'array', 'itemType': ListDiscoveredResourcesResponseBodyDiscoveredResourceProfilesDiscoveredResourceProfileList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponseBodyRemediationTemplates extends $tea.Model {
  remediationType?: string;
  templateIdentifier?: string;
  templateName?: string;
  templateDefinition?: string;
  static names(): { [key: string]: string } {
    return {
      remediationType: 'RemediationType',
      templateIdentifier: 'TemplateIdentifier',
      templateName: 'TemplateName',
      templateDefinition: 'TemplateDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationType: 'string',
      templateIdentifier: 'string',
      templateName: 'string',
      templateDefinition: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConfigurationRecorderResponseBodyConfigurationRecorder extends $tea.Model {
  accountId?: number;
  configurationRecorderStatus?: string;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      configurationRecorderStatus: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartConfigurationRecorderResponseBodyConfigurationRecorder extends $tea.Model {
  organizationEnableStatus?: string;
  configurationRecorderStatus?: string;
  organizationMasterId?: number;
  accountId?: number;
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      organizationEnableStatus: 'OrganizationEnableStatus',
      configurationRecorderStatus: 'ConfigurationRecorderStatus',
      organizationMasterId: 'OrganizationMasterId',
      accountId: 'AccountId',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationEnableStatus: 'string',
      configurationRecorderStatus: 'string',
      organizationMasterId: 'number',
      accountId: 'number',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
  errorCode?: string;
  success?: boolean;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      success: 'Success',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      success: 'boolean',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopConfigRulesResponseBodyOperateRuleResult extends $tea.Model {
  operateRuleItemList?: StopConfigRulesResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': StopConfigRulesResponseBodyOperateRuleResultOperateRuleItemList },
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

  async activeConfigRulesWithOptions(request: ActiveConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ActiveConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ActiveConfigRulesResponse>(await this.doRPCRequest("ActiveConfigRules", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new ActiveConfigRulesResponse({}));
  }

  async activeConfigRules(request: ActiveConfigRulesRequest): Promise<ActiveConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activeConfigRulesWithOptions(request, runtime);
  }

  async deleteConfigRulesWithOptions(request: DeleteConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConfigRulesResponse>(await this.doRPCRequest("DeleteConfigRules", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConfigRulesResponse({}));
  }

  async deleteConfigRules(request: DeleteConfigRulesRequest): Promise<DeleteConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConfigRulesWithOptions(request, runtime);
  }

  async describeComplianceWithOptions(request: DescribeComplianceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComplianceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeComplianceResponse>(await this.doRPCRequest("DescribeCompliance", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeComplianceResponse({}));
  }

  async describeCompliance(request: DescribeComplianceRequest): Promise<DescribeComplianceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComplianceWithOptions(request, runtime);
  }

  async describeComplianceSummaryWithOptions(request: DescribeComplianceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComplianceSummaryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeComplianceSummaryResponse>(await this.doRPCRequest("DescribeComplianceSummary", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeComplianceSummaryResponse({}));
  }

  async describeComplianceSummary(request: DescribeComplianceSummaryRequest): Promise<DescribeComplianceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComplianceSummaryWithOptions(request, runtime);
  }

  async describeConfigRuleWithOptions(request: DescribeConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeConfigRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeConfigRuleResponse>(await this.doRPCRequest("DescribeConfigRule", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeConfigRuleResponse({}));
  }

  async describeConfigRule(request: DescribeConfigRuleRequest): Promise<DescribeConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigRuleWithOptions(request, runtime);
  }

  async describeConfigurationRecorderWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeConfigurationRecorderResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeConfigurationRecorderResponse>(await this.doRPCRequest("DescribeConfigurationRecorder", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeConfigurationRecorderResponse({}));
  }

  async describeConfigurationRecorder(): Promise<DescribeConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeConfigurationRecorderWithOptions(runtime);
  }

  async describeDeliveryChannelsWithOptions(request: DescribeDeliveryChannelsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeliveryChannelsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDeliveryChannelsResponse>(await this.doRPCRequest("DescribeDeliveryChannels", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDeliveryChannelsResponse({}));
  }

  async describeDeliveryChannels(request: DescribeDeliveryChannelsRequest): Promise<DescribeDeliveryChannelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeliveryChannelsWithOptions(request, runtime);
  }

  async describeDiscoveredResourceWithOptions(request: DescribeDiscoveredResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiscoveredResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDiscoveredResourceResponse>(await this.doRPCRequest("DescribeDiscoveredResource", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDiscoveredResourceResponse({}));
  }

  async describeDiscoveredResource(request: DescribeDiscoveredResourceRequest): Promise<DescribeDiscoveredResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiscoveredResourceWithOptions(request, runtime);
  }

  async describeEvaluationResultsWithOptions(request: DescribeEvaluationResultsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEvaluationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeEvaluationResultsResponse>(await this.doRPCRequest("DescribeEvaluationResults", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeEvaluationResultsResponse({}));
  }

  async describeEvaluationResults(request: DescribeEvaluationResultsRequest): Promise<DescribeEvaluationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEvaluationResultsWithOptions(request, runtime);
  }

  async getAggregateDiscoveredResourceWithOptions(request: GetAggregateDiscoveredResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateDiscoveredResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateDiscoveredResourceResponse>(await this.doRPCRequest("GetAggregateDiscoveredResource", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateDiscoveredResourceResponse({}));
  }

  async getAggregateDiscoveredResource(request: GetAggregateDiscoveredResourceRequest): Promise<GetAggregateDiscoveredResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateDiscoveredResourceWithOptions(request, runtime);
  }

  async getDiscoveredResourceCountsWithOptions(request: GetDiscoveredResourceCountsRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceCountsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDiscoveredResourceCountsResponse>(await this.doRPCRequest("GetDiscoveredResourceCounts", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetDiscoveredResourceCountsResponse({}));
  }

  async getDiscoveredResourceCounts(request: GetDiscoveredResourceCountsRequest): Promise<GetDiscoveredResourceCountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceCountsWithOptions(request, runtime);
  }

  async getDiscoveredResourceSummaryWithOptions(request: GetDiscoveredResourceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetDiscoveredResourceSummaryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDiscoveredResourceSummaryResponse>(await this.doRPCRequest("GetDiscoveredResourceSummary", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetDiscoveredResourceSummaryResponse({}));
  }

  async getDiscoveredResourceSummary(request: GetDiscoveredResourceSummaryRequest): Promise<GetDiscoveredResourceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiscoveredResourceSummaryWithOptions(request, runtime);
  }

  async getResourceComplianceTimelineWithOptions(request: GetResourceComplianceTimelineRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceComplianceTimelineResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetResourceComplianceTimelineResponse>(await this.doRPCRequest("GetResourceComplianceTimeline", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetResourceComplianceTimelineResponse({}));
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
    return $tea.cast<GetResourceConfigurationTimelineResponse>(await this.doRPCRequest("GetResourceConfigurationTimeline", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetResourceConfigurationTimelineResponse({}));
  }

  async getResourceConfigurationTimeline(request: GetResourceConfigurationTimelineRequest): Promise<GetResourceConfigurationTimelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceConfigurationTimelineWithOptions(request, runtime);
  }

  async getSupportedResourceTypesWithOptions(runtime: $Util.RuntimeOptions): Promise<GetSupportedResourceTypesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetSupportedResourceTypesResponse>(await this.doRPCRequest("GetSupportedResourceTypes", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new GetSupportedResourceTypesResponse({}));
  }

  async getSupportedResourceTypes(): Promise<GetSupportedResourceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSupportedResourceTypesWithOptions(runtime);
  }

  async listAggregateDiscoveredResourcesWithOptions(request: ListAggregateDiscoveredResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListAggregateDiscoveredResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListAggregateDiscoveredResourcesResponse>(await this.doRPCRequest("ListAggregateDiscoveredResources", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new ListAggregateDiscoveredResourcesResponse({}));
  }

  async listAggregateDiscoveredResources(request: ListAggregateDiscoveredResourcesRequest): Promise<ListAggregateDiscoveredResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAggregateDiscoveredResourcesWithOptions(request, runtime);
  }

  async listConfigRulesWithOptions(request: ListConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListConfigRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListConfigRulesResponse>(await this.doRPCRequest("ListConfigRules", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new ListConfigRulesResponse({}));
  }

  async listConfigRules(request: ListConfigRulesRequest): Promise<ListConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConfigRulesWithOptions(request, runtime);
  }

  async listDiscoveredResourcesWithOptions(request: ListDiscoveredResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListDiscoveredResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDiscoveredResourcesResponse>(await this.doRPCRequest("ListDiscoveredResources", "2019-01-08", "HTTPS", "GET", "AK", "json", req, runtime), new ListDiscoveredResourcesResponse({}));
  }

  async listDiscoveredResources(request: ListDiscoveredResourcesRequest): Promise<ListDiscoveredResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDiscoveredResourcesWithOptions(request, runtime);
  }

  async listRemediationTemplatesWithOptions(request: ListRemediationTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListRemediationTemplatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListRemediationTemplatesResponse>(await this.doRPCRequest("ListRemediationTemplates", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new ListRemediationTemplatesResponse({}));
  }

  async listRemediationTemplates(request: ListRemediationTemplatesRequest): Promise<ListRemediationTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRemediationTemplatesWithOptions(request, runtime);
  }

  async putConfigRuleWithOptions(request: PutConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<PutConfigRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutConfigRuleResponse>(await this.doRPCRequest("PutConfigRule", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new PutConfigRuleResponse({}));
  }

  async putConfigRule(request: PutConfigRuleRequest): Promise<PutConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putConfigRuleWithOptions(request, runtime);
  }

  async putConfigurationRecorderWithOptions(request: PutConfigurationRecorderRequest, runtime: $Util.RuntimeOptions): Promise<PutConfigurationRecorderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutConfigurationRecorderResponse>(await this.doRPCRequest("PutConfigurationRecorder", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new PutConfigurationRecorderResponse({}));
  }

  async putConfigurationRecorder(request: PutConfigurationRecorderRequest): Promise<PutConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putConfigurationRecorderWithOptions(request, runtime);
  }

  async putDeliveryChannelWithOptions(request: PutDeliveryChannelRequest, runtime: $Util.RuntimeOptions): Promise<PutDeliveryChannelResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutDeliveryChannelResponse>(await this.doRPCRequest("PutDeliveryChannel", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new PutDeliveryChannelResponse({}));
  }

  async putDeliveryChannel(request: PutDeliveryChannelRequest): Promise<PutDeliveryChannelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putDeliveryChannelWithOptions(request, runtime);
  }

  async putEvaluationsWithOptions(request: PutEvaluationsRequest, runtime: $Util.RuntimeOptions): Promise<PutEvaluationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutEvaluationsResponse>(await this.doRPCRequest("PutEvaluations", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new PutEvaluationsResponse({}));
  }

  async putEvaluations(request: PutEvaluationsRequest): Promise<PutEvaluationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putEvaluationsWithOptions(request, runtime);
  }

  async startConfigRuleEvaluationWithOptions(request: StartConfigRuleEvaluationRequest, runtime: $Util.RuntimeOptions): Promise<StartConfigRuleEvaluationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartConfigRuleEvaluationResponse>(await this.doRPCRequest("StartConfigRuleEvaluation", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new StartConfigRuleEvaluationResponse({}));
  }

  async startConfigRuleEvaluation(request: StartConfigRuleEvaluationRequest): Promise<StartConfigRuleEvaluationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConfigRuleEvaluationWithOptions(request, runtime);
  }

  async startConfigurationRecorderWithOptions(request: StartConfigurationRecorderRequest, runtime: $Util.RuntimeOptions): Promise<StartConfigurationRecorderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartConfigurationRecorderResponse>(await this.doRPCRequest("StartConfigurationRecorder", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new StartConfigurationRecorderResponse({}));
  }

  async startConfigurationRecorder(request: StartConfigurationRecorderRequest): Promise<StartConfigurationRecorderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startConfigurationRecorderWithOptions(request, runtime);
  }

  async stopConfigRulesWithOptions(request: StopConfigRulesRequest, runtime: $Util.RuntimeOptions): Promise<StopConfigRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopConfigRulesResponse>(await this.doRPCRequest("StopConfigRules", "2019-01-08", "HTTPS", "POST", "AK", "json", req, runtime), new StopConfigRulesResponse({}));
  }

  async stopConfigRules(request: StopConfigRulesRequest): Promise<StopConfigRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopConfigRulesWithOptions(request, runtime);
  }

}
