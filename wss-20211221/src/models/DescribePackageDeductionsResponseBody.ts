// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageDeductionsResponseBodyDeductions extends $dara.Model {
  /**
   * @example
   * 4
   */
  cpu?: number;
  /**
   * @example
   * ecd-6wye9optu0kag****
   */
  desktopId?: string;
  /**
   * @example
   * DemoComputer
   */
  desktopName?: string;
  /**
   * @example
   * eds.enterprise_office.4c8g
   */
  desktopType?: string;
  /**
   * @example
   * 2024-07-31T03:00Z
   */
  endTime?: string;
  groupResourceType?: string;
  instanceId?: string;
  /**
   * @example
   * Deleted
   */
  instanceState?: string;
  instanceType?: string;
  /**
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceType?: string;
  sessionId?: string;
  /**
   * @example
   * 2024-07-31T02:00Z
   */
  staTime?: string;
  /**
   * @example
   * 4.0
   */
  usedCoreTime?: number;
  /**
   * @example
   * 3600
   */
  usedTime?: number;
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
  deductions?: DescribePackageDeductionsResponseBodyDeductions[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 833C4D2C-09C7-5CE6-8159-06758B964970
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  totalUsedCoreTime?: number;
  totalUsedTime?: number;
  static names(): { [key: string]: string } {
    return {
      deductions: 'Deductions',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalUsedCoreTime: 'TotalUsedCoreTime',
      totalUsedTime: 'TotalUsedTime',
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

