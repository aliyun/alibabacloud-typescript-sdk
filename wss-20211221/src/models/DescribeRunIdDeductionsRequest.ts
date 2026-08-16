// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunIdDeductionsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent type: `CREDIT_PACKAGE` / `JVS_CLAW` / `OPEN_CLAW` / `JVS_COPILOT`.
   * 
   * @example
   * JVSCopilot、JVSClaw、OpenClaw
   */
  agentType?: string;
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
   * The deduction types. Do not specify this parameter for non-knowledge base scenarios.
   */
  deductionTypes?: string[];
  /**
   * @remarks
   * The end time of the period.
   * 
   * @example
   * Millisecond timestamp: 1785205179000
   */
  endTime?: number;
  groupByFields?: string[];
  groupResourceTypes?: string[];
  /**
   * @remarks
   * Specifies whether to group results by deduction type.
   * 
   * @example
   * false
   */
  groupSeparator?: boolean;
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
   * The list of cloud computer IDs. If this field has a value, the `PackageIds` field is required.
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
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the `nextToken` value from the previous response.
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
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
   * Enterprise Edition: CreditPackage, Commercial Edition: BusinessCreditPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource types in JSON array format.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * Millisecond timestamp: 1785205179000
   */
  startTime?: number;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      agentTypes: 'AgentTypes',
      aliUid: 'AliUid',
      bizType: 'BizType',
      deductionTypes: 'DeductionTypes',
      endTime: 'EndTime',
      groupByFields: 'GroupByFields',
      groupResourceTypes: 'GroupResourceTypes',
      groupSeparator: 'GroupSeparator',
      instanceIdType: 'InstanceIdType',
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packageIds: 'PackageIds',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      resourceTypes: 'ResourceTypes',
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
      deductionTypes: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      groupByFields: { 'type': 'array', 'itemType': 'string' },
      groupResourceTypes: { 'type': 'array', 'itemType': 'string' },
      groupSeparator: 'boolean',
      instanceIdType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      packageIds: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      resourceType: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      wyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentTypes)) {
      $dara.Model.validateArray(this.agentTypes);
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

