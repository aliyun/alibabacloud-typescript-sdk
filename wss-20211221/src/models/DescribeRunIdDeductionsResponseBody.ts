// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRunIdDeductionsResponseBodyDeductions extends $dara.Model {
  /**
   * @remarks
   * The agent type. Valid values: CREDIT_PACKAGE, JVS_CLAW, OPEN_CLAW, and JVS_COPILOT.
   * 
   * @example
   * OpenClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The end time of the period. The time is in ISO 8601 format and displayed in UTC.
   * 
   * @example
   * 2024-07-31T03:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The grouped resource type to which the deduction record belongs.
   * 
   * @example
   * GROUP_CREDIT_PACKAGE
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
  /**
   * @remarks
   * The identifier of the called large language model. This field is used to distinguish the consumption of each model when grouping by model.
   * 
   * @example
   * qwen-3.7
   */
  model?: string;
  /**
   * @remarks
   * The ID of the credit or package.
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
   * The unique ID of the run.
   * 
   * @example
   * run-szwB1fYHCTocjGkFAIf6V8A
   */
  runId?: string;
  /**
   * @remarks
   * The start time. The time is in ISO 8601 format and displayed in UTC.
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
   * How is the weather today?
   */
  summary?: string;
  /**
   * @remarks
   * The usage duration. Unit: seconds. Do not use this field in AI scenarios.
   * 
   * @example
   * 360000000
   */
  usedTime?: number;
  /**
   * @remarks
   * The used credits.
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
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the nextToken value returned in the previous response.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
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
   * The unique identifier of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 68BD3312-53D8-123E-BB32-1A9F25E07A03
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of core-hour package deduction details returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total usage duration. Unit: seconds. Do not use this field in AI scenarios.
   * 
   * @example
   * 100000
   */
  totalUsedTime?: number;
  /**
   * @remarks
   * The total used credits that meet the conditions.
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

