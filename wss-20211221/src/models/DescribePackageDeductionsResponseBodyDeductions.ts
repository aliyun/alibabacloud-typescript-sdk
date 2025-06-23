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

