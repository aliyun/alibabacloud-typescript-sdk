// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunIdDeductionsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent type. Valid values: CREDIT_PACKAGE, JVS_CLAW, OPEN_CLAW, and JVS_COPILOT.
   * 
   * @example
   * JVSCopilot、JVSClaw、OpenClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The list of agent types.
   */
  agentTypes?: string[];
  /**
   * @remarks
   * The Alibaba Cloud UID.
   * 
   * @example
   * 1457450820614624
   */
  aliUid?: number;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * ENTERPRISE、BUSINESS
   */
  bizType?: string;
  /**
   * @remarks
   * The consumption WyId.
   * 
   * @example
   * 2892766fb8521756
   */
  consumeWyId?: string;
  /**
   * @remarks
   * The Wuying user IDs. You can obtain the IDs by calling the GetLoginToken logon operation. The returned parameter is WyId.
   */
  consumeWyIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * uuid
   */
  deductionRequestId?: string;
  /**
   * @remarks
   * The deduction types. Do not specify this parameter for non-knowledge base scenarios.
   */
  deductionTypes?: string[];
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1785205179000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of additional grouping fields when aggregating by runId, such as model to distinguish between different models.
   */
  groupByFields?: string[];
  /**
   * @remarks
   * The list of grouped resource types.
   */
  groupResourceTypes?: string[];
  /**
   * @remarks
   * Specifies whether to group the results by deduction type.
   * 
   * @example
   * false
   */
  groupSeparator?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mdp-0c62ayep0nk4v****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID type. Do not specify this parameter for non-knowledge base scenarios.
   * 
   * @example
   * KnowledgeSpaceId、AgentId
   */
  instanceIdType?: string;
  /**
   * @remarks
   * The list of cloud computer IDs. If this field is specified, the PackageIds field is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-3.8
   */
  model?: string;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the nextToken value returned in the previous response.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of core-hour package IDs in JSON format.
   */
  packageIds?: string[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The Settings for the number of entries per page during paging in a paged query.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Enterprise Edition: CreditPackage, Business Edition: BusinessCreditPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource types in JSON array format.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * t-xxx
   */
  runId?: string;
  /**
   * @remarks
   * The list of run IDs.
   */
  runIdList?: string[];
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1785205179000
   */
  startTime?: number;
  /**
   * @remarks
   * The globally unique ID of the Wuying user.
   * 
   * @example
   * wy-123456****
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      agentTypes: 'AgentTypes',
      aliUid: 'AliUid',
      bizType: 'BizType',
      consumeWyId: 'ConsumeWyId',
      consumeWyIds: 'ConsumeWyIds',
      deductionRequestId: 'DeductionRequestId',
      deductionTypes: 'DeductionTypes',
      endTime: 'EndTime',
      groupByFields: 'GroupByFields',
      groupResourceTypes: 'GroupResourceTypes',
      groupSeparator: 'GroupSeparator',
      instanceId: 'InstanceId',
      instanceIdType: 'InstanceIdType',
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      model: 'Model',
      nextToken: 'NextToken',
      packageIds: 'PackageIds',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      resourceTypes: 'ResourceTypes',
      runId: 'RunId',
      runIdList: 'RunIdList',
      startTime: 'StartTime',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      agentTypes: { 'type': 'array', 'itemType': 'string' },
      aliUid: 'number',
      bizType: 'string',
      consumeWyId: 'string',
      consumeWyIds: { 'type': 'array', 'itemType': 'string' },
      deductionRequestId: 'string',
      deductionTypes: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      groupByFields: { 'type': 'array', 'itemType': 'string' },
      groupResourceTypes: { 'type': 'array', 'itemType': 'string' },
      groupSeparator: 'boolean',
      instanceId: 'string',
      instanceIdType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      model: 'string',
      nextToken: 'string',
      packageIds: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      resourceType: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      runId: 'string',
      runIdList: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      wyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentTypes)) {
      $dara.Model.validateArray(this.agentTypes);
    }
    if(Array.isArray(this.consumeWyIds)) {
      $dara.Model.validateArray(this.consumeWyIds);
    }
    if(Array.isArray(this.deductionTypes)) {
      $dara.Model.validateArray(this.deductionTypes);
    }
    if(Array.isArray(this.groupByFields)) {
      $dara.Model.validateArray(this.groupByFields);
    }
    if(Array.isArray(this.groupResourceTypes)) {
      $dara.Model.validateArray(this.groupResourceTypes);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    if(Array.isArray(this.runIdList)) {
      $dara.Model.validateArray(this.runIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

