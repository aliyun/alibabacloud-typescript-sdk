// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunIdDeductionsResponseBodyDeductions extends $dara.Model {
  /**
   * @remarks
   * The agent type: `CREDIT_PACKAGE` / `JVS_CLAW` / `OPEN_CLAW` / `JVS_COPILOT`.
   * 
   * @example
   * OpenClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The end time of the period.
   * 
   * @example
   * 2024-07-31T03:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The group resource type.
   * 
   * @example
   * GROUP_CREDIT_PACKAGE、GROUP_BUSINESS_CREDIT_PACKAGE
   */
  groupResourceType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * jvs-xxxx
   */
  instanceId?: string;
  model?: string;
  /**
   * @remarks
   * The credit or plan package ID.
   * 
   * @example
   * crp-xxx
   */
  packageId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * sunwyic.com
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * CreditPackage、BusinessCreditPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The unique run ID.
   * 
   * @example
   * run-szwB1fYHCTocjGkFAIf6V8A
   */
  runId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-12-16T02:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The summary of the large language model call.
   * 
   * @example
   * How is the weather today
   */
  summary?: string;
  /**
   * @remarks
   * The usage duration. Unit: seconds. Do not use this field for AI scenarios.
   * 
   * @example
   * 360000000
   */
  usedTime?: number;
  /**
   * @remarks
   * The credits used.
   * 
   * @example
   * 1.23
   */
  usedTimeDecimal?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      endTime: 'EndTime',
      groupResourceType: 'GroupResourceType',
      instanceId: 'InstanceId',
      model: 'Model',
      packageId: 'PackageId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      runId: 'RunId',
      startTime: 'StartTime',
      summary: 'Summary',
      usedTime: 'UsedTime',
      usedTimeDecimal: 'UsedTimeDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      endTime: 'string',
      groupResourceType: 'string',
      instanceId: 'string',
      model: 'string',
      packageId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      runId: 'string',
      startTime: 'string',
      summary: 'string',
      usedTime: 'number',
      usedTimeDecimal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRunIdDeductionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deduction details.
   */
  deductions?: DescribeRunIdDeductionsResponseBodyDeductions[];
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
   * Id of the request
   * 
   * @example
   * 68BD3312-53D8-123E-BB32-1A9F25E07A03
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of core-hour package deduction details in the query result.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total usage duration. Unit: seconds. Do not use this field for AI scenarios.
   * 
   * @example
   * 100000
   */
  totalUsedTime?: number;
  /**
   * @remarks
   * The total credits used that match the specified conditions.
   * 
   * @example
   * 1.23
   */
  totalUsedTimeDecimal?: string;
  static names(): { [key: string]: string } {
    return {
      deductions: 'Deductions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalUsedTime: 'TotalUsedTime',
      totalUsedTimeDecimal: 'TotalUsedTimeDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductions: { 'type': 'array', 'itemType': DescribeRunIdDeductionsResponseBodyDeductions },
      maxResults: 'number',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalUsedTime: 'number',
      totalUsedTimeDecimal: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deductions)) {
      $dara.Model.validateArray(this.deductions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

