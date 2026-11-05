// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageDeductionsResponseBodyDeductions extends $dara.Model {
  /**
   * @remarks
   * The agent type.
   * 
   * @example
   * OpenClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * r-xxxx
   */
  deductionRequestId?: string;
  /**
   * @remarks
   * The deduction types.
   * 
   * @example
   * KNOWLEDGE_SPACE/CONVESATION
   */
  deductionType?: string;
  /**
   * @remarks
   * The Cloud Desktop ID.
   * 
   * @example
   * ecd-6wye9optu0kag****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud desktop.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The specifications of the cloud desktop.
   * 
   * @example
   * eds.enterprise_office.4c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The end time of the deduction record in UTC. The format is yyyy-MM-ddTHH:mm:ssZ. For records aggregated by hour, the format can be yyyy-MM-ddTHH:mmZ with seconds omitted.
   * 
   * @example
   * 2024-07-31T03:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The group resource type to which the deduction record belongs.
   * 
   * @example
   * GROUP_CORE_PACKAGE
   */
  groupResourceType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * A specific instance ID
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the core-hour package.
   * 
   * @example
   * Deleted
   */
  instanceState?: string;
  /**
   * @remarks
   * The instance specifications for the deduction.
   * 
   * @example
   * ec.agentbay-pc
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-3.7
   */
  model?: string;
  /**
   * @remarks
   * The operating system type of the cloud desktop.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The ID of the credit package.
   * 
   * @example
   * crp-xxx
   */
  packageId?: string;
  /**
   * @remarks
   * The region ID of the cloud desktop.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the first resource in the deduction item.
   * 
   * @example
   * ecd-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the session associated with the deduction record.
   * 
   * @example
   * ai-123456****
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time of the deduction record in UTC. The format is yyyy-MM-ddTHH:mm:ssZ. For records aggregated by hour, the format can be yyyy-MM-ddTHH:mmZ with seconds omitted.
   * 
   * @example
   * 2024-07-31T02:00:00Z
   */
  staTime?: string;
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * Summary of the AI query
   */
  summary?: string;
  /**
   * @remarks
   * The number of cores deducted.
   * 
   * @example
   * 4.0
   */
  usedCoreTime?: number;
  /**
   * @remarks
   * The usage duration. Unit: seconds.
   * 
   * @example
   * 3600
   */
  usedTime?: number;
  /**
   * @remarks
   * The usage calculated from UsedTime by using a precision factor, rounded to four decimal places. This field is returned only for applicable resource types and must be read based on the metering criteria of the corresponding resource.
   * 
   * @example
   * 1.0000
   */
  usedTimeDecimal?: string;
  /**
   * @remarks
   * The usage that includes the deduction coefficient. In scenarios where deduction is based on duration, the value is measured in seconds and returned as an integer.
   * 
   * @example
   * 3600
   */
  usedTimeWithScale?: number;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      cpu: 'Cpu',
      deductionRequestId: 'DeductionRequestId',
      deductionType: 'DeductionType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      groupResourceType: 'GroupResourceType',
      instanceId: 'InstanceId',
      instanceState: 'InstanceState',
      instanceType: 'InstanceType',
      memory: 'Memory',
      model: 'Model',
      osType: 'OsType',
      packageId: 'PackageId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      sessionId: 'SessionId',
      staTime: 'StaTime',
      summary: 'Summary',
      usedCoreTime: 'UsedCoreTime',
      usedTime: 'UsedTime',
      usedTimeDecimal: 'UsedTimeDecimal',
      usedTimeWithScale: 'UsedTimeWithScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      cpu: 'number',
      deductionRequestId: 'string',
      deductionType: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopType: 'string',
      endTime: 'string',
      groupResourceType: 'string',
      instanceId: 'string',
      instanceState: 'string',
      instanceType: 'string',
      memory: 'number',
      model: 'string',
      osType: 'string',
      packageId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      sessionId: 'string',
      staTime: 'string',
      summary: 'string',
      usedCoreTime: 'number',
      usedTime: 'number',
      usedTimeDecimal: 'string',
      usedTimeWithScale: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackageDeductionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of deduction details.
   */
  deductions?: DescribePackageDeductionsResponseBodyDeductions[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page in the Settings for paging during a paged query.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of core-hour package deduction details queried.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total deducted core-hours.
   * 
   * @example
   * 10.1
   */
  totalUsedCoreTime?: number;
  /**
   * @remarks
   * The total usage duration.
   * 
   * @example
   * 100000
   */
  totalUsedTime?: number;
  /**
   * @remarks
   * The total usage calculated by using a precision factor, rounded to four decimal places. This field uses the same metering criteria as UsedTimeDecimal in the details.
   * 
   * @example
   * 10.0000
   */
  totalUsedTimeDecimal?: string;
  static names(): { [key: string]: string } {
    return {
      deductions: 'Deductions',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalUsedCoreTime: 'TotalUsedCoreTime',
      totalUsedTime: 'TotalUsedTime',
      totalUsedTimeDecimal: 'TotalUsedTimeDecimal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deductions: { 'type': 'array', 'itemType': DescribePackageDeductionsResponseBodyDeductions },
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalUsedCoreTime: 'number',
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

