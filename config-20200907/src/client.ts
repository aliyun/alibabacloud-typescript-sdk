// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DeleteAggregateConfigRulesRequest extends $tea.Model {
  configRuleIds?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  operateRuleResult?: DeleteAggregateConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: DeleteAggregateConfigRulesResponseBodyOperateRuleResult,
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

export class DeactiveAggregateConfigRulesRequest extends $tea.Model {
  configRuleIds?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveAggregateConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  operateRuleResult?: DeactiveAggregateConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: DeactiveAggregateConfigRulesResponseBodyOperateRuleResult,
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
  requestId?: string;
  configRulesReport?: GetAggregateConfigRulesReportResponseBodyConfigRulesReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRulesReport: 'ConfigRulesReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRulesReport: GetAggregateConfigRulesReportResponseBodyConfigRulesReport,
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

export class ListAggregateConfigRuleEvaluationResultsRequest extends $tea.Model {
  complianceType?: string;
  nextToken?: string;
  maxResults?: number;
  configRuleId?: string;
  resourceOwnerId?: number;
  aggregatorId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      configRuleId: 'ConfigRuleId',
      resourceOwnerId: 'ResourceOwnerId',
      aggregatorId: 'AggregatorId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      configRuleId: 'string',
      resourceOwnerId: 'number',
      aggregatorId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBody extends $tea.Model {
  requestId?: string;
  evaluationResults?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      evaluationResults: 'EvaluationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      evaluationResults: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults,
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

export class ListAggregateRemediationsRequest extends $tea.Model {
  configRuleIds?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationsResponseBody extends $tea.Model {
  requestId?: string;
  remediations?: ListAggregateRemediationsResponseBodyRemediations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediations: 'Remediations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediations: { 'type': 'array', 'itemType': ListAggregateRemediationsResponseBodyRemediations },
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
  requestId?: string;
  aggregator?: GetAggregatorResponseBodyAggregator;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aggregator: 'Aggregator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aggregator: GetAggregatorResponseBodyAggregator,
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

export class GetResourceComplianceTimelineRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  startTime?: number;
  endTime?: number;
  maxResults?: number;
  region?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
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
      maxResults: 'number',
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

export class GenerateAggregateConfigRulesReportRequest extends $tea.Model {
  clientToken?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAggregateConfigRulesReportResponseBody extends $tea.Model {
  requestId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aggregatorId: 'string',
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

export class ListAggregateCompliancePacksRequest extends $tea.Model {
  status?: string;
  aggregatorId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      aggregatorId: 'AggregatorId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      aggregatorId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBody extends $tea.Model {
  requestId?: string;
  compliancePacksResult?: ListAggregateCompliancePacksResponseBodyCompliancePacksResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compliancePacksResult: 'CompliancePacksResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compliancePacksResult: ListAggregateCompliancePacksResponseBodyCompliancePacksResult,
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

export class ListConfigRuleEvaluationResultsRequest extends $tea.Model {
  complianceType?: string;
  nextToken?: string;
  maxResults?: number;
  configRuleId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      configRuleId: 'ConfigRuleId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      configRuleId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBody extends $tea.Model {
  requestId?: string;
  evaluationResults?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      evaluationResults: 'EvaluationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      evaluationResults: ListConfigRuleEvaluationResultsResponseBodyEvaluationResults,
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

export class DeleteCompliancePacksRequest extends $tea.Model {
  compliancePackIds?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackIds: 'CompliancePackIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackIds: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCompliancePacksResponseBody extends $tea.Model {
  requestId?: string;
  operateCompliancePacksResult?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateCompliancePacksResult: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult,
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

export class UpdateAggregateRemediationRequest extends $tea.Model {
  remediationId?: string;
  remediationType?: string;
  remediationTemplateId?: string;
  invokeType?: string;
  sourceType?: string;
  params?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      remediationType: 'RemediationType',
      remediationTemplateId: 'RemediationTemplateId',
      invokeType: 'InvokeType',
      sourceType: 'SourceType',
      params: 'Params',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      remediationType: 'string',
      remediationTemplateId: 'string',
      invokeType: 'string',
      sourceType: 'string',
      params: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateRemediationResponseBody extends $tea.Model {
  requestId?: string;
  remediationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationId: 'RemediationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationId: 'string',
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

export class DeleteAggregateCompliancePacksRequest extends $tea.Model {
  compliancePackIds?: string;
  clientToken?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackIds: 'CompliancePackIds',
      clientToken: 'ClientToken',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackIds: 'string',
      clientToken: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateCompliancePacksResponseBody extends $tea.Model {
  requestId?: string;
  operateCompliancePacksResult?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateCompliancePacksResult: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult,
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

export class ListAggregatorsRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponseBody extends $tea.Model {
  requestId?: string;
  aggregatorsResult?: ListAggregatorsResponseBodyAggregatorsResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aggregatorsResult: 'AggregatorsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aggregatorsResult: ListAggregatorsResponseBodyAggregatorsResult,
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

export class UpdateAggregateCompliancePackRequest extends $tea.Model {
  compliancePackId?: string;
  description?: string;
  riskLevel?: number;
  configRules?: UpdateAggregateCompliancePackRequestConfigRules[];
  clientToken?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      description: 'Description',
      riskLevel: 'RiskLevel',
      configRules: 'ConfigRules',
      clientToken: 'ClientToken',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      description: 'string',
      riskLevel: 'number',
      configRules: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestConfigRules },
      clientToken: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateCompliancePackShrinkRequest extends $tea.Model {
  compliancePackId?: string;
  description?: string;
  riskLevel?: number;
  configRulesShrink?: string;
  clientToken?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      description: 'Description',
      riskLevel: 'RiskLevel',
      configRulesShrink: 'ConfigRules',
      clientToken: 'ClientToken',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      description: 'string',
      riskLevel: 'number',
      configRulesShrink: 'string',
      clientToken: 'string',
      aggregatorId: 'string',
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

export class GetAggregateCompliancePackRequest extends $tea.Model {
  compliancePackId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBody extends $tea.Model {
  requestId?: string;
  compliancePack?: GetAggregateCompliancePackResponseBodyCompliancePack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compliancePack: 'CompliancePack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compliancePack: GetAggregateCompliancePackResponseBodyCompliancePack,
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

export class DeleteAggregateRemediationsRequest extends $tea.Model {
  remediationIds?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationIds: 'RemediationIds',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationIds: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateRemediationsResponseBody extends $tea.Model {
  requestId?: string;
  remediationDeleteResults?: DeleteAggregateRemediationsResponseBodyRemediationDeleteResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationDeleteResults: 'RemediationDeleteResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationDeleteResults: { 'type': 'array', 'itemType': DeleteAggregateRemediationsResponseBodyRemediationDeleteResults },
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

export class GetAggregateResourceComplianceByPackRequest extends $tea.Model {
  compliancePackId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceByPackResponseBody extends $tea.Model {
  resourceComplianceResult?: GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceComplianceResult: 'ResourceComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceComplianceResult: GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult,
      requestId: 'string',
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
  requestId?: string;
  remediationDeleteResults?: DeleteRemediationsResponseBodyRemediationDeleteResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationDeleteResults: 'RemediationDeleteResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationDeleteResults: { 'type': 'array', 'itemType': DeleteRemediationsResponseBodyRemediationDeleteResults },
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

export class ListCompliancePacksRequest extends $tea.Model {
  status?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponseBody extends $tea.Model {
  requestId?: string;
  compliancePacksResult?: ListCompliancePacksResponseBodyCompliancePacksResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compliancePacksResult: 'CompliancePacksResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compliancePacksResult: ListCompliancePacksResponseBodyCompliancePacksResult,
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

export class ActiveAggregateConfigRulesRequest extends $tea.Model {
  configRuleIds?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleIds: 'ConfigRuleIds',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleIds: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  operateRuleResult?: ActiveAggregateConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: ActiveAggregateConfigRulesResponseBodyOperateRuleResult,
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
  resourceComplianceResult?: GetResourceComplianceByPackResponseBodyResourceComplianceResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceComplianceResult: 'ResourceComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceComplianceResult: GetResourceComplianceByPackResponseBodyResourceComplianceResult,
      requestId: 'string',
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

export class ListResourceOwnerInAllAggregatorResponseBody extends $tea.Model {
  requestId?: string;
  accountInAggregator?: ListResourceOwnerInAllAggregatorResponseBodyAccountInAggregator[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountInAggregator: 'AccountInAggregator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountInAggregator: { 'type': 'array', 'itemType': ListResourceOwnerInAllAggregatorResponseBodyAccountInAggregator },
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

export class ListCompliancePackTemplatesRequest extends $tea.Model {
  compliancePackTemplateId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
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

export class UpdateRemediationRequest extends $tea.Model {
  remediationId?: string;
  remediationType?: string;
  remediationTemplateId?: string;
  invokeType?: string;
  sourceType?: string;
  params?: string;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      remediationType: 'RemediationType',
      remediationTemplateId: 'RemediationTemplateId',
      invokeType: 'InvokeType',
      sourceType: 'SourceType',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      remediationType: 'string',
      remediationTemplateId: 'string',
      invokeType: 'string',
      sourceType: 'string',
      params: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRemediationResponseBody extends $tea.Model {
  requestId?: string;
  remediationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationId: 'RemediationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationId: 'string',
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

export class GetAggregateAccountComplianceByPackRequest extends $tea.Model {
  compliancePackId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBody extends $tea.Model {
  requestId?: string;
  accountComplianceResult?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accountComplianceResult: 'AccountComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accountComplianceResult: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult,
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

export class CreateConfigRuleRequest extends $tea.Model {
  configRuleName?: string;
  description?: string;
  inputParameters?: { [key: string]: any };
  configRuleTriggerTypes?: string;
  maximumExecutionFrequency?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  sourceOwner?: string;
  sourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      inputParameters: 'InputParameters',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      sourceOwner: 'SourceOwner',
      sourceIdentifier: 'SourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configRuleTriggerTypes: 'string',
      maximumExecutionFrequency: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      sourceOwner: 'string',
      sourceIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConfigRuleShrinkRequest extends $tea.Model {
  configRuleName?: string;
  description?: string;
  inputParametersShrink?: string;
  configRuleTriggerTypes?: string;
  maximumExecutionFrequency?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  sourceOwner?: string;
  sourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      inputParametersShrink: 'InputParameters',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      sourceOwner: 'SourceOwner',
      sourceIdentifier: 'SourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      inputParametersShrink: 'string',
      configRuleTriggerTypes: 'string',
      maximumExecutionFrequency: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      sourceOwner: 'string',
      sourceIdentifier: 'string',
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

export class GetAggregateResourceConfigurationTimelineRequest extends $tea.Model {
  resourceId?: string;
  startTime?: number;
  endTime?: number;
  maxResults?: number;
  resourceType?: string;
  region?: string;
  aggregatorId?: string;
  resourceOwnerId?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      resourceType: 'ResourceType',
      region: 'Region',
      aggregatorId: 'AggregatorId',
      resourceOwnerId: 'ResourceOwnerId',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      startTime: 'number',
      endTime: 'number',
      maxResults: 'number',
      resourceType: 'string',
      region: 'string',
      aggregatorId: 'string',
      resourceOwnerId: 'number',
      nextToken: 'string',
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
  requestId?: string;
  operateAggregatorsResult?: DeleteAggregatorsResponseBodyOperateAggregatorsResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateAggregatorsResult: 'OperateAggregatorsResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateAggregatorsResult: DeleteAggregatorsResponseBodyOperateAggregatorsResult,
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

export class CreateRemediationRequest extends $tea.Model {
  configRuleId?: string;
  remediationType?: string;
  remediationTemplateId?: string;
  invokeType?: string;
  sourceType?: string;
  params?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      remediationType: 'RemediationType',
      remediationTemplateId: 'RemediationTemplateId',
      invokeType: 'InvokeType',
      sourceType: 'SourceType',
      params: 'Params',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      remediationType: 'string',
      remediationTemplateId: 'string',
      invokeType: 'string',
      sourceType: 'string',
      params: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRemediationResponseBody extends $tea.Model {
  requestId?: string;
  remediationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationId: 'RemediationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationId: 'string',
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
  requestId?: string;
  compliancePack?: GetCompliancePackResponseBodyCompliancePack;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compliancePack: 'CompliancePack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compliancePack: GetCompliancePackResponseBodyCompliancePack,
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

export class GetConfigRulesReportResponseBody extends $tea.Model {
  requestId?: string;
  configRulesReport?: GetConfigRulesReportResponseBodyConfigRulesReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRulesReport: 'ConfigRulesReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRulesReport: GetConfigRulesReportResponseBodyConfigRulesReport,
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

export class GetResourceConfigurationTimelineRequest extends $tea.Model {
  resourceId?: string;
  startTime?: number;
  endTime?: number;
  maxResults?: number;
  resourceType?: string;
  region?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      resourceType: 'ResourceType',
      region: 'Region',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      startTime: 'number',
      endTime: 'number',
      maxResults: 'number',
      resourceType: 'string',
      region: 'string',
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
  requestId?: string;
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary },
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

export class CreateAggregatorRequest extends $tea.Model {
  aggregatorName?: string;
  description?: string;
  aggregatorAccounts?: CreateAggregatorRequestAggregatorAccounts[];
  clientToken?: string;
  aggregatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorName: 'AggregatorName',
      description: 'Description',
      aggregatorAccounts: 'AggregatorAccounts',
      clientToken: 'ClientToken',
      aggregatorType: 'AggregatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorName: 'string',
      description: 'string',
      aggregatorAccounts: { 'type': 'array', 'itemType': CreateAggregatorRequestAggregatorAccounts },
      clientToken: 'string',
      aggregatorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorShrinkRequest extends $tea.Model {
  aggregatorName?: string;
  description?: string;
  aggregatorAccountsShrink?: string;
  clientToken?: string;
  aggregatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorName: 'AggregatorName',
      description: 'Description',
      aggregatorAccountsShrink: 'AggregatorAccounts',
      clientToken: 'ClientToken',
      aggregatorType: 'AggregatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorName: 'string',
      description: 'string',
      aggregatorAccountsShrink: 'string',
      clientToken: 'string',
      aggregatorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregatorResponseBody extends $tea.Model {
  requestId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aggregatorId: 'string',
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

export class ListAggregateConfigRulesRequest extends $tea.Model {
  configRuleState?: string;
  complianceType?: string;
  riskLevel?: number;
  configRuleName?: string;
  aggregatorId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleState: 'ConfigRuleState',
      complianceType: 'ComplianceType',
      riskLevel: 'RiskLevel',
      configRuleName: 'ConfigRuleName',
      aggregatorId: 'AggregatorId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleState: 'string',
      complianceType: 'string',
      riskLevel: 'number',
      configRuleName: 'string',
      aggregatorId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBody extends $tea.Model {
  requestId?: string;
  configRules?: ListAggregateConfigRulesResponseBodyConfigRules;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRules: 'ConfigRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRules: ListAggregateConfigRulesResponseBodyConfigRules,
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

export class GenerateAggregateResourceInventoryRequest extends $tea.Model {
  regions?: string;
  resourceTypes?: string;
  accountIds?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      resourceTypes: 'ResourceTypes',
      accountIds: 'AccountIds',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: 'string',
      resourceTypes: 'string',
      accountIds: 'string',
      aggregatorId: 'string',
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

export class CreateAggregateConfigRuleRequest extends $tea.Model {
  configRuleName?: string;
  description?: string;
  inputParameters?: { [key: string]: any };
  configRuleTriggerTypes?: string;
  maximumExecutionFrequency?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  aggregatorId?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  sourceOwner?: string;
  sourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      inputParameters: 'InputParameters',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      aggregatorId: 'AggregatorId',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      sourceOwner: 'SourceOwner',
      sourceIdentifier: 'SourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      configRuleTriggerTypes: 'string',
      maximumExecutionFrequency: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      aggregatorId: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      sourceOwner: 'string',
      sourceIdentifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateConfigRuleShrinkRequest extends $tea.Model {
  configRuleName?: string;
  description?: string;
  inputParametersShrink?: string;
  configRuleTriggerTypes?: string;
  maximumExecutionFrequency?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  aggregatorId?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  sourceOwner?: string;
  sourceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleName: 'ConfigRuleName',
      description: 'Description',
      inputParametersShrink: 'InputParameters',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      aggregatorId: 'AggregatorId',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      sourceOwner: 'SourceOwner',
      sourceIdentifier: 'SourceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleName: 'string',
      description: 'string',
      inputParametersShrink: 'string',
      configRuleTriggerTypes: 'string',
      maximumExecutionFrequency: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      aggregatorId: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      sourceOwner: 'string',
      sourceIdentifier: 'string',
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
  configRuleId?: string;
  remediationType?: string;
  remediationTemplateId?: string;
  invokeType?: string;
  sourceType?: string;
  params?: string;
  aggregatorId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      remediationType: 'RemediationType',
      remediationTemplateId: 'RemediationTemplateId',
      invokeType: 'InvokeType',
      sourceType: 'SourceType',
      params: 'Params',
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      remediationType: 'string',
      remediationTemplateId: 'string',
      invokeType: 'string',
      sourceType: 'string',
      params: 'string',
      aggregatorId: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateRemediationResponseBody extends $tea.Model {
  requestId?: string;
  remediationId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediationId: 'RemediationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediationId: 'string',
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

export class StartAggregateConfigRuleEvaluationRequest extends $tea.Model {
  configRuleId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      aggregatorId: 'string',
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

export class GenerateAggregateCompliancePackReportRequest extends $tea.Model {
  compliancePackId?: string;
  clientToken?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      clientToken: 'ClientToken',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      clientToken: 'string',
      aggregatorId: 'string',
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
  requestId?: string;
  compliancePackReport?: GetCompliancePackReportResponseBodyCompliancePackReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compliancePackReport: 'CompliancePackReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compliancePackReport: GetCompliancePackReportResponseBodyCompliancePackReport,
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

export class ListResourceEvaluationResultsRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  complianceType?: string;
  nextToken?: string;
  maxResults?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      complianceType: 'ComplianceType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      complianceType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBody extends $tea.Model {
  requestId?: string;
  evaluationResults?: ListResourceEvaluationResultsResponseBodyEvaluationResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      evaluationResults: 'EvaluationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      evaluationResults: ListResourceEvaluationResultsResponseBodyEvaluationResults,
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

export class UpdateCompliancePackRequest extends $tea.Model {
  compliancePackId?: string;
  description?: string;
  riskLevel?: number;
  configRules?: UpdateCompliancePackRequestConfigRules[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      description: 'Description',
      riskLevel: 'RiskLevel',
      configRules: 'ConfigRules',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      description: 'string',
      riskLevel: 'number',
      configRules: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRules },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCompliancePackShrinkRequest extends $tea.Model {
  compliancePackId?: string;
  description?: string;
  riskLevel?: number;
  configRulesShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      description: 'Description',
      riskLevel: 'RiskLevel',
      configRulesShrink: 'ConfigRules',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      description: 'string',
      riskLevel: 'number',
      configRulesShrink: 'string',
      clientToken: 'string',
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

export class ListAggregateResourceEvaluationResultsRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  complianceType?: string;
  nextToken?: string;
  maxResults?: number;
  region?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      complianceType: 'ComplianceType',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      region: 'Region',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      complianceType: 'string',
      nextToken: 'string',
      maxResults: 'number',
      region: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBody extends $tea.Model {
  requestId?: string;
  evaluationResults?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      evaluationResults: 'EvaluationResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      evaluationResults: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults,
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
  requestId?: string;
  configRule?: GetConfigRuleResponseBodyConfigRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRule: 'ConfigRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRule: GetConfigRuleResponseBodyConfigRule,
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
  requestId?: string;
  operateRuleResult?: DeactiveConfigRulesResponseBodyOperateRuleResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      operateRuleResult: 'OperateRuleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      operateRuleResult: DeactiveConfigRulesResponseBodyOperateRuleResult,
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

export class CreateCompliancePackRequest extends $tea.Model {
  compliancePackTemplateId?: string;
  compliancePackName?: string;
  description?: string;
  riskLevel?: number;
  configRules?: CreateCompliancePackRequestConfigRules[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackName: 'CompliancePackName',
      description: 'Description',
      riskLevel: 'RiskLevel',
      configRules: 'ConfigRules',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackName: 'string',
      description: 'string',
      riskLevel: 'number',
      configRules: { 'type': 'array', 'itemType': CreateCompliancePackRequestConfigRules },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompliancePackShrinkRequest extends $tea.Model {
  compliancePackTemplateId?: string;
  compliancePackName?: string;
  description?: string;
  riskLevel?: number;
  configRulesShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackName: 'CompliancePackName',
      description: 'Description',
      riskLevel: 'RiskLevel',
      configRulesShrink: 'ConfigRules',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackName: 'string',
      description: 'string',
      riskLevel: 'number',
      configRulesShrink: 'string',
      clientToken: 'string',
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
  requestId?: string;
  discoveredResourceCountsSummary?: GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary },
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

export class GetAggregateConfigRuleComplianceByPackRequest extends $tea.Model {
  compliancePackId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBody extends $tea.Model {
  requestId?: string;
  configRuleComplianceResult?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRuleComplianceResult: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
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

export class GetAggregateResourceComplianceByConfigRuleRequest extends $tea.Model {
  complianceType?: string;
  configRuleId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
      aggregatorId: 'string',
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
  requestId?: string;
  configRuleSummaries?: GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRuleSummaries: 'ConfigRuleSummaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRuleSummaries: { 'type': 'array', 'itemType': GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries },
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

export class UpdateConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
  description?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  configRuleTriggerTypes?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      description: 'Description',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      description: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      configRuleTriggerTypes: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRuleShrinkRequest extends $tea.Model {
  configRuleId?: string;
  description?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  configRuleTriggerTypes?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      description: 'Description',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      description: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      configRuleTriggerTypes: 'string',
      resourceGroupIdsScope: 'string',
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

export class GetAggregateResourceComplianceTimelineRequest extends $tea.Model {
  resourceType?: string;
  resourceId?: string;
  startTime?: number;
  endTime?: number;
  maxResults?: number;
  aggregatorId?: string;
  resourceOwnerId?: number;
  region?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      aggregatorId: 'AggregatorId',
      resourceOwnerId: 'ResourceOwnerId',
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
      maxResults: 'number',
      aggregatorId: 'string',
      resourceOwnerId: 'number',
      region: 'string',
      nextToken: 'string',
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

export class UpdateAggregateConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
  description?: string;
  inputParameters?: { [key: string]: any };
  maximumExecutionFrequency?: string;
  resourceTypesScope?: string[];
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  configRuleTriggerTypes?: string;
  aggregatorId?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      description: 'Description',
      inputParameters: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      aggregatorId: 'AggregatorId',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      description: 'string',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maximumExecutionFrequency: 'string',
      resourceTypesScope: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      configRuleTriggerTypes: 'string',
      aggregatorId: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregateConfigRuleShrinkRequest extends $tea.Model {
  configRuleId?: string;
  description?: string;
  inputParametersShrink?: string;
  maximumExecutionFrequency?: string;
  resourceTypesScopeShrink?: string;
  riskLevel?: number;
  clientToken?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  configRuleTriggerTypes?: string;
  aggregatorId?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      description: 'Description',
      inputParametersShrink: 'InputParameters',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      resourceTypesScopeShrink: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      clientToken: 'ClientToken',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
      aggregatorId: 'AggregatorId',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      description: 'string',
      inputParametersShrink: 'string',
      maximumExecutionFrequency: 'string',
      resourceTypesScopeShrink: 'string',
      riskLevel: 'number',
      clientToken: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      configRuleTriggerTypes: 'string',
      aggregatorId: 'string',
      resourceGroupIdsScope: 'string',
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

export class GetAggregateCompliancePackReportRequest extends $tea.Model {
  compliancePackId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportResponseBody extends $tea.Model {
  requestId?: string;
  compliancePackReport?: GetAggregateCompliancePackReportResponseBodyCompliancePackReport;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      compliancePackReport: 'CompliancePackReport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      compliancePackReport: GetAggregateCompliancePackReportResponseBodyCompliancePackReport,
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

export class CreateAggregateCompliancePackRequest extends $tea.Model {
  compliancePackTemplateId?: string;
  compliancePackName?: string;
  description?: string;
  riskLevel?: number;
  aggregatorId?: string;
  configRules?: CreateAggregateCompliancePackRequestConfigRules[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackName: 'CompliancePackName',
      description: 'Description',
      riskLevel: 'RiskLevel',
      aggregatorId: 'AggregatorId',
      configRules: 'ConfigRules',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackName: 'string',
      description: 'string',
      riskLevel: 'number',
      aggregatorId: 'string',
      configRules: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestConfigRules },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAggregateCompliancePackShrinkRequest extends $tea.Model {
  compliancePackTemplateId?: string;
  compliancePackName?: string;
  description?: string;
  riskLevel?: number;
  aggregatorId?: string;
  configRulesShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackTemplateId: 'CompliancePackTemplateId',
      compliancePackName: 'CompliancePackName',
      description: 'Description',
      riskLevel: 'RiskLevel',
      aggregatorId: 'AggregatorId',
      configRulesShrink: 'ConfigRules',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackTemplateId: 'string',
      compliancePackName: 'string',
      description: 'string',
      riskLevel: 'number',
      aggregatorId: 'string',
      configRulesShrink: 'string',
      clientToken: 'string',
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

export class GetAggregateResourceCountsGroupByResourceTypeRequest extends $tea.Model {
  region?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByResourceTypeResponseBody extends $tea.Model {
  requestId?: string;
  discoveredResourceCountsSummary?: GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetAggregateResourceCountsGroupByResourceTypeResponseBodyDiscoveredResourceCountsSummary },
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

export class GetAggregateConfigRuleRequest extends $tea.Model {
  configRuleId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBody extends $tea.Model {
  requestId?: string;
  configRule?: GetAggregateConfigRuleResponseBodyConfigRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRule: 'ConfigRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRule: GetAggregateConfigRuleResponseBodyConfigRule,
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

export class GetAggregateResourceCountsGroupByRegionRequest extends $tea.Model {
  resourceType?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByRegionResponseBody extends $tea.Model {
  requestId?: string;
  discoveredResourceCountsSummary?: GetAggregateResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      discoveredResourceCountsSummary: 'DiscoveredResourceCountsSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      discoveredResourceCountsSummary: { 'type': 'array', 'itemType': GetAggregateResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary },
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
  requestId?: string;
  configRuleComplianceResult?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRuleComplianceResult: 'ConfigRuleComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRuleComplianceResult: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult,
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
  requestId?: string;
  configRuleSummaries?: GetConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      configRuleSummaries: 'ConfigRuleSummaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      configRuleSummaries: { 'type': 'array', 'itemType': GetConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries },
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
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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

export class GenerateCompliancePackReportRequest extends $tea.Model {
  compliancePackId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      clientToken: 'string',
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

export class StartAggregateRemediationRequest extends $tea.Model {
  configRuleId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAggregateRemediationResponseBody extends $tea.Model {
  requestId?: string;
  data?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'boolean',
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
  requestId?: string;
  remediations?: ListRemediationsResponseBodyRemediations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      remediations: 'Remediations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      remediations: { 'type': 'array', 'itemType': ListRemediationsResponseBodyRemediations },
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

export class UpdateAggregatorRequest extends $tea.Model {
  aggregatorId?: string;
  aggregatorName?: string;
  description?: string;
  aggregatorAccounts?: UpdateAggregatorRequestAggregatorAccounts[];
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      description: 'Description',
      aggregatorAccounts: 'AggregatorAccounts',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      description: 'string',
      aggregatorAccounts: { 'type': 'array', 'itemType': UpdateAggregatorRequestAggregatorAccounts },
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorShrinkRequest extends $tea.Model {
  aggregatorId?: string;
  aggregatorName?: string;
  description?: string;
  aggregatorAccountsShrink?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      description: 'Description',
      aggregatorAccountsShrink: 'AggregatorAccounts',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      description: 'string',
      aggregatorAccountsShrink: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorResponseBody extends $tea.Model {
  requestId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aggregatorId: 'string',
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

export class DeleteAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
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

export class DeactiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
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

export class GetAggregateConfigRulesReportResponseBodyConfigRulesReport extends $tea.Model {
  reportUrl?: string;
  reportStatus?: string;
  accountId?: number;
  aggregatorId?: string;
  reportCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      reportUrl: 'ReportUrl',
      reportStatus: 'ReportStatus',
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportUrl: 'string',
      reportStatus: 'string',
      accountId: 'number',
      aggregatorId: 'string',
      reportCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceInventoryResponseBodyResourceInventory extends $tea.Model {
  downloadUrl?: string;
  status?: string;
  accountId?: number;
  resourceInventoryGenerateTime?: number;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      status: 'Status',
      accountId: 'AccountId',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      status: 'string',
      accountId: 'number',
      resourceInventoryGenerateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  resourceOwnerId?: number;
  configRuleArn?: string;
  resourceType?: string;
  configRuleName?: string;
  resourceId?: string;
  configRuleId?: string;
  resourceName?: string;
  regionId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      configRuleArn: 'ConfigRuleArn',
      resourceType: 'ResourceType',
      configRuleName: 'ConfigRuleName',
      resourceId: 'ResourceId',
      configRuleId: 'ConfigRuleId',
      resourceName: 'ResourceName',
      regionId: 'RegionId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      configRuleArn: 'string',
      resourceType: 'string',
      configRuleName: 'string',
      resourceId: 'string',
      configRuleId: 'string',
      resourceName: 'string',
      regionId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  orderingTimestamp?: number;
  evaluationResultQualifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  static names(): { [key: string]: string } {
    return {
      orderingTimestamp: 'OrderingTimestamp',
      evaluationResultQualifier: 'EvaluationResultQualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderingTimestamp: 'number',
      evaluationResultQualifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  riskLevel?: number;
  complianceType?: string;
  resultRecordedTimestamp?: number;
  annotation?: string;
  configRuleInvokedTimestamp?: number;
  invokingEventMessageType?: string;
  evaluationResultIdentifier?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  remediationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      complianceType: 'ComplianceType',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      annotation: 'Annotation',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      invokingEventMessageType: 'InvokingEventMessageType',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      remediationEnabled: 'RemediationEnabled',
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
      evaluationResultIdentifier: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      remediationEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  evaluationResultList?: ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      evaluationResultList: 'EvaluationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateRemediationsResponseBodyRemediations extends $tea.Model {
  remediationTemplateId?: string;
  remediationDynamicParams?: string;
  remediationSourceType?: string;
  remediationType?: string;
  lastSuccessfulInvocationId?: string;
  accountId?: number;
  aggregatorId?: string;
  lastSuccessfulInvocationType?: string;
  remediationId?: string;
  invokeType?: string;
  configRuleId?: string;
  lastSuccessfulInvocationTime?: number;
  static names(): { [key: string]: string } {
    return {
      remediationTemplateId: 'RemediationTemplateId',
      remediationDynamicParams: 'RemediationDynamicParams',
      remediationSourceType: 'RemediationSourceType',
      remediationType: 'RemediationType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediationId: 'RemediationId',
      invokeType: 'InvokeType',
      configRuleId: 'ConfigRuleId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationTemplateId: 'string',
      remediationDynamicParams: 'string',
      remediationSourceType: 'string',
      remediationType: 'string',
      lastSuccessfulInvocationId: 'string',
      accountId: 'number',
      aggregatorId: 'string',
      lastSuccessfulInvocationType: 'string',
      remediationId: 'string',
      invokeType: 'string',
      configRuleId: 'string',
      lastSuccessfulInvocationTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBodyAggregatorAggregatorAccounts extends $tea.Model {
  recorderStatus?: string;
  accountId?: number;
  accountType?: string;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      recorderStatus: 'RecorderStatus',
      accountId: 'AccountId',
      accountType: 'AccountType',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recorderStatus: 'string',
      accountId: 'number',
      accountType: 'string',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatorResponseBodyAggregator extends $tea.Model {
  aggregatorCreateTimestamp?: string;
  aggregatorAccounts?: GetAggregatorResponseBodyAggregatorAggregatorAccounts[];
  aggregatorAccountCount?: number;
  description?: string;
  aggregatorName?: string;
  aggregatorStatus?: number;
  aggregatorType?: string;
  accountId?: number;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorCreateTimestamp: 'AggregatorCreateTimestamp',
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorAccountCount: 'AggregatorAccountCount',
      description: 'Description',
      aggregatorName: 'AggregatorName',
      aggregatorStatus: 'AggregatorStatus',
      aggregatorType: 'AggregatorType',
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorCreateTimestamp: 'string',
      aggregatorAccounts: { 'type': 'array', 'itemType': GetAggregatorResponseBodyAggregatorAggregatorAccounts },
      aggregatorAccountCount: 'number',
      description: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      accountId: 'number',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $tea.Model {
  tags?: string;
  accountId?: string;
  availabilityZone?: string;
  resourceType?: string;
  resourceCreateTime?: number;
  region?: string;
  configuration?: string;
  captureTime?: number;
  configurationDiff?: string;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      resourceCreateTime: 'ResourceCreateTime',
      region: 'Region',
      configuration: 'Configuration',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: 'string',
      accountId: 'string',
      availabilityZone: 'string',
      resourceType: 'string',
      resourceCreateTime: 'number',
      region: 'string',
      configuration: 'string',
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
  maxResults?: number;
  complianceList?: GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      complianceList: 'ComplianceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      complianceList: { 'type': 'array', 'itemType': GetResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $tea.Model {
  status?: string;
  riskLevel?: number;
  compliancePackId?: string;
  description?: string;
  compliancePackName?: string;
  accountId?: number;
  aggregatorId?: string;
  compliancePackTemplateId?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      riskLevel: 'RiskLevel',
      compliancePackId: 'CompliancePackId',
      description: 'Description',
      compliancePackName: 'CompliancePackName',
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      riskLevel: 'number',
      compliancePackId: 'string',
      description: 'string',
      compliancePackName: 'string',
      accountId: 'number',
      aggregatorId: 'string',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateCompliancePacksResponseBodyCompliancePacksResult extends $tea.Model {
  compliancePacks?: ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks[];
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': ListAggregateCompliancePacksResponseBodyCompliancePacksResultCompliancePacks },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
  resourceOwnerId?: number;
  configRuleArn?: string;
  resourceType?: string;
  configRuleName?: string;
  resourceId?: string;
  configRuleId?: string;
  resourceName?: string;
  regionId?: string;
  compliancePackId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceOwnerId: 'ResourceOwnerId',
      configRuleArn: 'ConfigRuleArn',
      resourceType: 'ResourceType',
      configRuleName: 'ConfigRuleName',
      resourceId: 'ResourceId',
      configRuleId: 'ConfigRuleId',
      resourceName: 'ResourceName',
      regionId: 'RegionId',
      compliancePackId: 'CompliancePackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceOwnerId: 'number',
      configRuleArn: 'string',
      resourceType: 'string',
      configRuleName: 'string',
      resourceId: 'string',
      configRuleId: 'string',
      resourceName: 'string',
      regionId: 'string',
      compliancePackId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  orderingTimestamp?: number;
  evaluationResultQualifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  static names(): { [key: string]: string } {
    return {
      orderingTimestamp: 'OrderingTimestamp',
      evaluationResultQualifier: 'EvaluationResultQualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderingTimestamp: 'number',
      evaluationResultQualifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  riskLevel?: number;
  complianceType?: string;
  resultRecordedTimestamp?: number;
  annotation?: string;
  configRuleInvokedTimestamp?: number;
  invokingEventMessageType?: string;
  evaluationResultIdentifier?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  remediationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      complianceType: 'ComplianceType',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      annotation: 'Annotation',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      invokingEventMessageType: 'InvokingEventMessageType',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      remediationEnabled: 'RemediationEnabled',
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
      evaluationResultIdentifier: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      remediationEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRuleEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  evaluationResultList?: ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      evaluationResultList: 'EvaluationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      evaluationResultList: { 'type': 'array', 'itemType': ListConfigRuleEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
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

export class ListAggregatorsResponseBodyAggregatorsResultAggregators extends $tea.Model {
  aggregatorCreateTimestamp?: number;
  aggregatorAccountCount?: number;
  description?: string;
  aggregatorName?: string;
  aggregatorStatus?: number;
  aggregatorType?: string;
  accountId?: number;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorCreateTimestamp: 'AggregatorCreateTimestamp',
      aggregatorAccountCount: 'AggregatorAccountCount',
      description: 'Description',
      aggregatorName: 'AggregatorName',
      aggregatorStatus: 'AggregatorStatus',
      aggregatorType: 'AggregatorType',
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorCreateTimestamp: 'number',
      aggregatorAccountCount: 'number',
      description: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      accountId: 'number',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponseBodyAggregatorsResult extends $tea.Model {
  nextToken?: string;
  aggregators?: ListAggregatorsResponseBodyAggregatorsResultAggregators[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      aggregators: 'Aggregators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      aggregators: { 'type': 'array', 'itemType': ListAggregatorsResponseBodyAggregatorsResultAggregators },
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
  managedRuleIdentifier?: string;
  configRuleParameters?: UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters[];
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      configRuleParameters: 'ConfigRuleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': UpdateAggregateCompliancePackRequestConfigRulesConfigRuleParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters extends $tea.Model {
  required?: boolean;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      required: 'Required',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'boolean',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePackConfigRules extends $tea.Model {
  managedRuleIdentifier?: string;
  configRuleName?: string;
  configRuleId?: string;
  configRuleParameters?: GetAggregateCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      configRuleName: 'ConfigRuleName',
      configRuleId: 'ConfigRuleId',
      configRuleParameters: 'ConfigRuleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      configRuleName: 'string',
      configRuleId: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackResponseBodyCompliancePack extends $tea.Model {
  status?: string;
  riskLevel?: number;
  compliancePackId?: string;
  description?: string;
  configRules?: GetAggregateCompliancePackResponseBodyCompliancePackConfigRules[];
  compliancePackName?: string;
  accountId?: number;
  aggregatorId?: string;
  compliancePackTemplateId?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      riskLevel: 'RiskLevel',
      compliancePackId: 'CompliancePackId',
      description: 'Description',
      configRules: 'ConfigRules',
      compliancePackName: 'CompliancePackName',
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      riskLevel: 'number',
      compliancePackId: 'string',
      description: 'string',
      configRules: { 'type': 'array', 'itemType': GetAggregateCompliancePackResponseBodyCompliancePackConfigRules },
      compliancePackName: 'string',
      accountId: 'number',
      aggregatorId: 'string',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregateRemediationsResponseBodyRemediationDeleteResults extends $tea.Model {
  remediationId?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      errorMessage: 'string',
      success: 'boolean',
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

export class DeleteRemediationsResponseBodyRemediationDeleteResults extends $tea.Model {
  remediationId?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      remediationId: 'RemediationId',
      errorMessage: 'ErrorMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationId: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks extends $tea.Model {
  status?: string;
  compliancePackId?: string;
  riskLevel?: number;
  description?: string;
  compliancePackName?: string;
  accountId?: number;
  compliancePackTemplateId?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      compliancePackId: 'CompliancePackId',
      riskLevel: 'RiskLevel',
      description: 'Description',
      compliancePackName: 'CompliancePackName',
      accountId: 'AccountId',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      compliancePackId: 'string',
      riskLevel: 'number',
      description: 'string',
      compliancePackName: 'string',
      accountId: 'number',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePacksResponseBodyCompliancePacksResult extends $tea.Model {
  compliancePacks?: ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks[];
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePacks: 'CompliancePacks',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacks: { 'type': 'array', 'itemType': ListCompliancePacksResponseBodyCompliancePacksResultCompliancePacks },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActiveAggregateConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
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

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters extends $tea.Model {
  required?: boolean;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      required: 'Required',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'boolean',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules extends $tea.Model {
  description?: string;
  managedRuleIdentifier?: string;
  managedRuleName?: string;
  configRuleParameters?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters[];
  riskLevel?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      managedRuleName: 'ManagedRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      managedRuleIdentifier: 'string',
      managedRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters },
      riskLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates extends $tea.Model {
  riskLevel?: number;
  description?: string;
  configRules?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules[];
  compliancePackTemplateName?: string;
  compliancePackTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      description: 'Description',
      configRules: 'ConfigRules',
      compliancePackTemplateName: 'CompliancePackTemplateName',
      compliancePackTemplateId: 'CompliancePackTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      description: 'string',
      configRules: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules },
      compliancePackTemplateName: 'string',
      compliancePackTemplateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResult extends $tea.Model {
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  compliancePackTemplates?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      compliancePackTemplates: 'CompliancePackTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      compliancePackTemplates: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances extends $tea.Model {
  complianceType?: string;
  accountId?: number;
  accountName?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      accountId: 'AccountId',
      accountName: 'AccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      accountId: 'number',
      accountName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult extends $tea.Model {
  compliancePackId?: string;
  nonCompliantCount?: number;
  totalCount?: number;
  accountCompliances?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances[];
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
      accountCompliances: 'AccountCompliances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      totalCount: 'number',
      accountCompliances: { 'type': 'array', 'itemType': GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList extends $tea.Model {
  tags?: string;
  accountId?: number;
  resourceEventType?: string;
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
      tags: 'Tags',
      accountId: 'AccountId',
      resourceEventType: 'ResourceEventType',
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
      tags: 'string',
      accountId: 'number',
      resourceEventType: 'string',
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

export class GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  configurationList?: GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      configurationList: 'ConfigurationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      configurationList: { 'type': 'array', 'itemType': GetAggregateResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAggregatorsResponseBodyOperateAggregatorsResultOperateAggregators extends $tea.Model {
  errorCode?: string;
  success?: boolean;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      success: 'Success',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      success: 'boolean',
      aggregatorId: 'string',
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

export class GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters extends $tea.Model {
  required?: boolean;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      required: 'Required',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      required: 'boolean',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePackConfigRules extends $tea.Model {
  managedRuleIdentifier?: string;
  configRuleName?: string;
  configRuleId?: string;
  configRuleParameters?: GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      configRuleName: 'ConfigRuleName',
      configRuleId: 'ConfigRuleId',
      configRuleParameters: 'ConfigRuleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      configRuleName: 'string',
      configRuleId: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackResponseBodyCompliancePack extends $tea.Model {
  status?: string;
  compliancePackId?: string;
  riskLevel?: number;
  description?: string;
  configRules?: GetCompliancePackResponseBodyCompliancePackConfigRules[];
  compliancePackName?: string;
  accountId?: number;
  compliancePackTemplateId?: string;
  createTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      compliancePackId: 'CompliancePackId',
      riskLevel: 'RiskLevel',
      description: 'Description',
      configRules: 'ConfigRules',
      compliancePackName: 'CompliancePackName',
      accountId: 'AccountId',
      compliancePackTemplateId: 'CompliancePackTemplateId',
      createTimestamp: 'CreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      compliancePackId: 'string',
      riskLevel: 'number',
      description: 'string',
      configRules: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRules },
      compliancePackName: 'string',
      accountId: 'number',
      compliancePackTemplateId: 'string',
      createTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRulesReportResponseBodyConfigRulesReport extends $tea.Model {
  reportStatus?: string;
  reportUrl?: string;
  accountId?: number;
  reportCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      reportStatus: 'ReportStatus',
      reportUrl: 'ReportUrl',
      accountId: 'AccountId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportStatus: 'string',
      reportUrl: 'string',
      accountId: 'number',
      reportCreateTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList extends $tea.Model {
  tags?: string;
  accountId?: number;
  resourceEventType?: string;
  availabilityZone?: string;
  resourceType?: string;
  resourceCreateTime?: string;
  region?: string;
  captureTime?: string;
  configurationDiff?: string;
  resourceId?: string;
  resourceName?: string;
  relationship?: string;
  relationshipDiff?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      accountId: 'AccountId',
      resourceEventType: 'ResourceEventType',
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      resourceCreateTime: 'ResourceCreateTime',
      region: 'Region',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      relationship: 'Relationship',
      relationshipDiff: 'RelationshipDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: 'string',
      accountId: 'number',
      resourceEventType: 'string',
      availabilityZone: 'string',
      resourceType: 'string',
      resourceCreateTime: 'string',
      region: 'string',
      captureTime: 'string',
      configurationDiff: 'string',
      resourceId: 'string',
      resourceName: 'string',
      relationship: 'string',
      relationshipDiff: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimeline extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  configurationList?: GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      configurationList: 'ConfigurationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      configurationList: { 'type': 'array', 'itemType': GetResourceConfigurationTimelineResponseBodyResourceConfigurationTimelineConfigurationList },
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
  compliancePackId?: string;
  aggregatorName?: string;
  compliancePackName?: string;
  creatorName?: string;
  creatorType?: string;
  creatorId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorName: 'AggregatorName',
      compliancePackName: 'CompliancePackName',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
      creatorId: 'CreatorId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorName: 'string',
      compliancePackName: 'string',
      creatorName: 'string',
      creatorType: 'string',
      creatorId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList extends $tea.Model {
  riskLevel?: number;
  sourceOwner?: string;
  accountId?: number;
  configRuleState?: string;
  compliance?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance;
  sourceIdentifier?: string;
  configRuleArn?: string;
  description?: string;
  createBy?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
  automationType?: string;
  configRuleName?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
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
      riskLevel: 'number',
      sourceOwner: 'string',
      accountId: 'number',
      configRuleState: 'string',
      compliance: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance,
      sourceIdentifier: 'string',
      configRuleArn: 'string',
      description: 'string',
      createBy: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy,
      automationType: 'string',
      configRuleName: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRules extends $tea.Model {
  configRuleList?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList[];
  pageSize?: number;
  pageNumber?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleList: 'ConfigRuleList',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleList: { 'type': 'array', 'itemType': ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList },
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompliancePackReportResponseBodyCompliancePackReport extends $tea.Model {
  reportUrl?: string;
  reportStatus?: string;
  compliancePackId?: string;
  accountId?: number;
  reportCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      reportUrl: 'ReportUrl',
      reportStatus: 'ReportStatus',
      compliancePackId: 'CompliancePackId',
      accountId: 'AccountId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportUrl: 'string',
      reportStatus: 'string',
      compliancePackId: 'string',
      accountId: 'number',
      reportCreateTimestamp: 'number',
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
  totalCount?: number;
  compliances?: GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      compliances: 'Compliances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
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

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  orderingTimestamp?: number;
  evaluationResultQualifier?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  static names(): { [key: string]: string } {
    return {
      orderingTimestamp: 'OrderingTimestamp',
      evaluationResultQualifier: 'EvaluationResultQualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderingTimestamp: 'number',
      evaluationResultQualifier: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  riskLevel?: number;
  complianceType?: string;
  resultRecordedTimestamp?: number;
  annotation?: string;
  configRuleInvokedTimestamp?: number;
  invokingEventMessageType?: string;
  evaluationResultIdentifier?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  remediationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      complianceType: 'ComplianceType',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      annotation: 'Annotation',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      invokingEventMessageType: 'InvokingEventMessageType',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      remediationEnabled: 'RemediationEnabled',
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
      evaluationResultIdentifier: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      remediationEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  evaluationResultList?: ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      evaluationResultList: 'EvaluationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      evaluationResultList: { 'type': 'array', 'itemType': ListResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
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
  managedRuleIdentifier?: string;
  configRuleParameters?: UpdateCompliancePackRequestConfigRulesConfigRuleParameters[];
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      configRuleParameters: 'ConfigRuleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': UpdateCompliancePackRequestConfigRulesConfigRuleParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier extends $tea.Model {
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

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier extends $tea.Model {
  orderingTimestamp?: number;
  evaluationResultQualifier?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier;
  static names(): { [key: string]: string } {
    return {
      orderingTimestamp: 'OrderingTimestamp',
      evaluationResultQualifier: 'EvaluationResultQualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderingTimestamp: 'number',
      evaluationResultQualifier: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifierEvaluationResultQualifier,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList extends $tea.Model {
  riskLevel?: number;
  complianceType?: string;
  resultRecordedTimestamp?: number;
  annotation?: string;
  configRuleInvokedTimestamp?: number;
  invokingEventMessageType?: string;
  evaluationResultIdentifier?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier;
  remediationEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      complianceType: 'ComplianceType',
      resultRecordedTimestamp: 'ResultRecordedTimestamp',
      annotation: 'Annotation',
      configRuleInvokedTimestamp: 'ConfigRuleInvokedTimestamp',
      invokingEventMessageType: 'InvokingEventMessageType',
      evaluationResultIdentifier: 'EvaluationResultIdentifier',
      remediationEnabled: 'RemediationEnabled',
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
      evaluationResultIdentifier: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultListEvaluationResultIdentifier,
      remediationEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateResourceEvaluationResultsResponseBodyEvaluationResults extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  evaluationResultList?: ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      evaluationResultList: 'EvaluationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      evaluationResultList: { 'type': 'array', 'itemType': ListAggregateResourceEvaluationResultsResponseBodyEvaluationResultsEvaluationResultList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRuleSourceSourceConditions extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRuleSource extends $tea.Model {
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  owner?: string;
  sourceConditions?: GetConfigRuleResponseBodyConfigRuleSourceSourceConditions[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleSourceSourceDetails },
      owner: 'string',
      sourceConditions: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleSourceSourceConditions },
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRuleManagedRule extends $tea.Model {
  sourceDetails?: GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
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

export class GetConfigRuleResponseBodyConfigRuleCreateBy extends $tea.Model {
  compliancePackId?: string;
  compliancePackName?: string;
  creatorName?: string;
  creatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorName: 'CreatorName',
      creatorId: 'CreatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorName: 'string',
      creatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $tea.Model {
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

export class GetConfigRuleResponseBodyConfigRule extends $tea.Model {
  riskLevel?: number;
  inputParameters?: { [key: string]: any };
  source?: GetConfigRuleResponseBodyConfigRuleSource;
  configRuleState?: string;
  maximumExecutionFrequency?: string;
  managedRule?: GetConfigRuleResponseBodyConfigRuleManagedRule;
  configRuleArn?: string;
  description?: string;
  createBy?: GetConfigRuleResponseBodyConfigRuleCreateBy;
  configRuleName?: string;
  configRuleEvaluationStatus?: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  modifiedTimestamp?: number;
  createTimestamp?: number;
  resourceTypesScope?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  configRuleTriggerTypes?: string;
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
      createBy: 'CreateBy',
      configRuleName: 'ConfigRuleName',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      modifiedTimestamp: 'ModifiedTimestamp',
      createTimestamp: 'CreateTimestamp',
      resourceTypesScope: 'ResourceTypesScope',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: GetConfigRuleResponseBodyConfigRuleSource,
      configRuleState: 'string',
      maximumExecutionFrequency: 'string',
      managedRule: GetConfigRuleResponseBodyConfigRuleManagedRule,
      configRuleArn: 'string',
      description: 'string',
      createBy: GetConfigRuleResponseBodyConfigRuleCreateBy,
      configRuleName: 'string',
      configRuleEvaluationStatus: GetConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      modifiedTimestamp: 'number',
      createTimestamp: 'number',
      resourceTypesScope: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      configRuleTriggerTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactiveConfigRulesResponseBodyOperateRuleResultOperateRuleItemList extends $tea.Model {
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
  managedRuleIdentifier?: string;
  configRuleName?: string;
  configRuleParameters?: CreateCompliancePackRequestConfigRulesConfigRuleParameters[];
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': CreateCompliancePackRequestConfigRulesConfigRuleParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiscoveredResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  resourceCount?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $tea.Model {
  complianceType?: string;
  configRuleName?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleName: 'ConfigRuleName',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleName: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $tea.Model {
  compliancePackId?: string;
  nonCompliantCount?: number;
  configRuleCompliances?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      configRuleCompliances: 'ConfigRuleCompliances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      configRuleCompliances: { 'type': 'array', 'itemType': GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
      totalCount: 'number',
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
  totalCount?: number;
  compliances?: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      compliances: 'Compliances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries extends $tea.Model {
  riskLevel?: number;
  compliantCount?: number;
  nonCompliantCount?: number;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceInventoryResponseBodyResourceInventory extends $tea.Model {
  downloadUrl?: string;
  status?: string;
  accountId?: number;
  resourceInventoryGenerateTime?: number;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      status: 'Status',
      accountId: 'AccountId',
      resourceInventoryGenerateTime: 'ResourceInventoryGenerateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      status: 'string',
      accountId: 'number',
      resourceInventoryGenerateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList extends $tea.Model {
  tags?: string;
  accountId?: string;
  availabilityZone?: string;
  resourceType?: string;
  resourceCreateTime?: number;
  region?: string;
  configuration?: string;
  captureTime?: number;
  configurationDiff?: string;
  resourceId?: string;
  resourceName?: string;
  resourceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      resourceType: 'ResourceType',
      resourceCreateTime: 'ResourceCreateTime',
      region: 'Region',
      configuration: 'Configuration',
      captureTime: 'CaptureTime',
      configurationDiff: 'ConfigurationDiff',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: 'string',
      accountId: 'string',
      availabilityZone: 'string',
      resourceType: 'string',
      resourceCreateTime: 'number',
      region: 'string',
      configuration: 'string',
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

export class GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimeline extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  complianceList?: GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      complianceList: 'ComplianceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      complianceList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceTimelineResponseBodyResourceComplianceTimelineComplianceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateCompliancePackReportResponseBodyCompliancePackReport extends $tea.Model {
  reportUrl?: string;
  reportStatus?: string;
  compliancePackId?: string;
  accountId?: number;
  reportCreateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      reportUrl: 'ReportUrl',
      reportStatus: 'ReportStatus',
      compliancePackId: 'CompliancePackId',
      accountId: 'AccountId',
      reportCreateTimestamp: 'ReportCreateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportUrl: 'string',
      reportStatus: 'string',
      compliancePackId: 'string',
      accountId: 'number',
      reportCreateTimestamp: 'number',
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
  managedRuleIdentifier?: string;
  configRuleName?: string;
  configRuleParameters?: CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters[];
  static names(): { [key: string]: string } {
    return {
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRuleIdentifier: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters },
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

export class GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceConditions extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleSource extends $tea.Model {
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails[];
  owner?: string;
  sourceConditions?: GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceConditions[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails },
      owner: 'string',
      sourceConditions: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceConditions },
      identifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRuleManagedRule extends $tea.Model {
  sourceDetails?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails[];
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
      sourceDetails: { 'type': 'array', 'itemType': GetAggregateConfigRuleResponseBodyConfigRuleManagedRuleSourceDetails },
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

export class GetAggregateConfigRuleResponseBodyConfigRuleCreateBy extends $tea.Model {
  compliancePackId?: string;
  aggregatorName?: string;
  compliancePackName?: string;
  creatorName?: string;
  creatorType?: string;
  creatorId?: string;
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      aggregatorName: 'AggregatorName',
      compliancePackName: 'CompliancePackName',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
      creatorId: 'CreatorId',
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      aggregatorName: 'string',
      compliancePackName: 'string',
      creatorName: 'string',
      creatorType: 'string',
      creatorId: 'string',
      aggregatorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus extends $tea.Model {
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

export class GetAggregateConfigRuleResponseBodyConfigRule extends $tea.Model {
  riskLevel?: number;
  inputParameters?: { [key: string]: any };
  source?: GetAggregateConfigRuleResponseBodyConfigRuleSource;
  configRuleState?: string;
  maximumExecutionFrequency?: string;
  managedRule?: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule;
  configRuleArn?: string;
  description?: string;
  createBy?: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy;
  configRuleName?: string;
  configRuleEvaluationStatus?: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus;
  configRuleId?: string;
  modifiedTimestamp?: number;
  createTimestamp?: number;
  resourceTypesScope?: string;
  regionIdsScope?: string;
  excludeResourceIdsScope?: string;
  resourceGroupIdsScope?: string;
  tagKeyScope?: string;
  tagValueScope?: string;
  configRuleTriggerTypes?: string;
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
      createBy: 'CreateBy',
      configRuleName: 'ConfigRuleName',
      configRuleEvaluationStatus: 'ConfigRuleEvaluationStatus',
      configRuleId: 'ConfigRuleId',
      modifiedTimestamp: 'ModifiedTimestamp',
      createTimestamp: 'CreateTimestamp',
      resourceTypesScope: 'ResourceTypesScope',
      regionIdsScope: 'RegionIdsScope',
      excludeResourceIdsScope: 'ExcludeResourceIdsScope',
      resourceGroupIdsScope: 'ResourceGroupIdsScope',
      tagKeyScope: 'TagKeyScope',
      tagValueScope: 'TagValueScope',
      configRuleTriggerTypes: 'ConfigRuleTriggerTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      inputParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: GetAggregateConfigRuleResponseBodyConfigRuleSource,
      configRuleState: 'string',
      maximumExecutionFrequency: 'string',
      managedRule: GetAggregateConfigRuleResponseBodyConfigRuleManagedRule,
      configRuleArn: 'string',
      description: 'string',
      createBy: GetAggregateConfigRuleResponseBodyConfigRuleCreateBy,
      configRuleName: 'string',
      configRuleEvaluationStatus: GetAggregateConfigRuleResponseBodyConfigRuleConfigRuleEvaluationStatus,
      configRuleId: 'string',
      modifiedTimestamp: 'number',
      createTimestamp: 'number',
      resourceTypesScope: 'string',
      regionIdsScope: 'string',
      excludeResourceIdsScope: 'string',
      resourceGroupIdsScope: 'string',
      tagKeyScope: 'string',
      tagValueScope: 'string',
      configRuleTriggerTypes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateResourceCountsGroupByRegionResponseBodyDiscoveredResourceCountsSummary extends $tea.Model {
  resourceCount?: number;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $tea.Model {
  complianceType?: string;
  configRuleName?: string;
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleName: 'ConfigRuleName',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleName: 'string',
      configRuleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $tea.Model {
  compliancePackId?: string;
  nonCompliantCount?: number;
  configRuleCompliances?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      configRuleCompliances: 'ConfigRuleCompliances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      configRuleCompliances: { 'type': 'array', 'itemType': GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries extends $tea.Model {
  riskLevel?: number;
  compliantCount?: number;
  nonCompliantCount?: number;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationsResponseBodyRemediations extends $tea.Model {
  lastSuccessfulInvocationType?: string;
  remediationTemplateId?: string;
  remediationDynamicParams?: string;
  remediationId?: string;
  remediationSourceType?: string;
  remediationType?: string;
  lastSuccessfulInvocationId?: string;
  accountId?: number;
  invokeType?: string;
  configRuleId?: string;
  lastSuccessfulInvocationTime?: number;
  static names(): { [key: string]: string } {
    return {
      lastSuccessfulInvocationType: 'LastSuccessfulInvocationType',
      remediationTemplateId: 'RemediationTemplateId',
      remediationDynamicParams: 'RemediationDynamicParams',
      remediationId: 'RemediationId',
      remediationSourceType: 'RemediationSourceType',
      remediationType: 'RemediationType',
      lastSuccessfulInvocationId: 'LastSuccessfulInvocationId',
      accountId: 'AccountId',
      invokeType: 'InvokeType',
      configRuleId: 'ConfigRuleId',
      lastSuccessfulInvocationTime: 'LastSuccessfulInvocationTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSuccessfulInvocationType: 'string',
      remediationTemplateId: 'string',
      remediationDynamicParams: 'string',
      remediationId: 'string',
      remediationSourceType: 'string',
      remediationType: 'string',
      lastSuccessfulInvocationId: 'string',
      accountId: 'number',
      invokeType: 'string',
      configRuleId: 'string',
      lastSuccessfulInvocationTime: 'number',
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

  async getResourceInventoryWithOptions(runtime: $Util.RuntimeOptions): Promise<GetResourceInventoryResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetResourceInventoryResponse>(await this.doRPCRequest("GetResourceInventory", "2020-09-07", "HTTPS", "POST", "AK", "json", req, runtime), new GetResourceInventoryResponse({}));
  }

  async getResourceInventory(): Promise<GetResourceInventoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceInventoryWithOptions(runtime);
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

  async listResourceOwnerInAllAggregatorWithOptions(runtime: $Util.RuntimeOptions): Promise<ListResourceOwnerInAllAggregatorResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListResourceOwnerInAllAggregatorResponse>(await this.doRPCRequest("ListResourceOwnerInAllAggregator", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new ListResourceOwnerInAllAggregatorResponse({}));
  }

  async listResourceOwnerInAllAggregator(): Promise<ListResourceOwnerInAllAggregatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceOwnerInAllAggregatorWithOptions(runtime);
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

  async getConfigRulesReportWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConfigRulesReportResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<GetConfigRulesReportResponse>(await this.doRPCRequest("GetConfigRulesReport", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigRulesReportResponse({}));
  }

  async getConfigRulesReport(): Promise<GetConfigRulesReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRulesReportWithOptions(runtime);
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

  async getConfigRuleWithOptions(request: GetConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetConfigRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetConfigRuleResponse>(await this.doRPCRequest("GetConfigRule", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetConfigRuleResponse({}));
  }

  async getConfigRule(request: GetConfigRuleRequest): Promise<GetConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConfigRuleWithOptions(request, runtime);
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

  async getAggregateConfigRuleWithOptions(request: GetAggregateConfigRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetAggregateConfigRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAggregateConfigRuleResponse>(await this.doRPCRequest("GetAggregateConfigRule", "2020-09-07", "HTTPS", "GET", "AK", "json", req, runtime), new GetAggregateConfigRuleResponse({}));
  }

  async getAggregateConfigRule(request: GetAggregateConfigRuleRequest): Promise<GetAggregateConfigRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAggregateConfigRuleWithOptions(request, runtime);
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

}
