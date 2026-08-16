// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageDeductionsResponseBodyDeductions extends $dara.Model {
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
   * The cloud computer ID.
   * 
   * @example
   * ecd-6wye9optu0kag****
   */
  desktopId?: string;
  /**
   * @remarks
   * The name of the cloud computer.
   * 
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @remarks
   * The specifications of the cloud computer.
   * 
   * @example
   * eds.enterprise_office.4c8g
   */
  desktopType?: string;
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
   */
  groupResourceType?: string;
  /**
   * @remarks
   * The instance ID.
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
   * The instance type.
   */
  instanceType?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The operating system type of the cloud computer.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The region ID of the cloud computer.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The session ID.
   */
  sessionId?: string;
  /**
   * @remarks
   * The start time of the period.
   * 
   * @example
   * 2024-07-31T02:00Z
   */
  staTime?: string;
  /**
   * @remarks
   * The number of cores deducted in this period.
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
   * The usage duration in decimal format.
   */
  usedTimeDecimal?: string;
  /**
   * @remarks
   * The usage duration after proportional scaling.
   */
  usedTimeWithScale?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      groupResourceType: 'GroupResourceType',
      instanceId: 'InstanceId',
      instanceState: 'InstanceState',
      instanceType: 'InstanceType',
      memory: 'Memory',
      osType: 'OsType',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sessionId: 'SessionId',
      staTime: 'StaTime',
      usedCoreTime: 'UsedCoreTime',
      usedTime: 'UsedTime',
      usedTimeDecimal: 'UsedTimeDecimal',
      usedTimeWithScale: 'UsedTimeWithScale',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      desktopId: 'string',
      desktopName: 'string',
      desktopType: 'string',
      endTime: 'string',
      groupResourceType: 'string',
      instanceId: 'string',
      instanceState: 'string',
      instanceType: 'string',
      memory: 'number',
      osType: 'string',
      regionId: 'string',
      resourceType: 'string',
      sessionId: 'string',
      staTime: 'string',
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
   * The number of entries per page in a paged query. Settings the number of rows per page for paging.
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
   * The total number of deduction detail records returned.
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
   * The total usage duration in decimal format.
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

