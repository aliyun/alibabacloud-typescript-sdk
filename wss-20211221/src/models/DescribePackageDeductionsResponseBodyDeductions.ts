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
  /**
   * @example
   * Deleted
   */
  instanceState?: string;
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
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopType: 'DesktopType',
      endTime: 'EndTime',
      instanceState: 'InstanceState',
      memory: 'Memory',
      osType: 'OsType',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      staTime: 'StaTime',
      usedCoreTime: 'UsedCoreTime',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      desktopId: 'string',
      desktopName: 'string',
      desktopType: 'string',
      endTime: 'string',
      instanceState: 'string',
      memory: 'number',
      osType: 'string',
      regionId: 'string',
      resourceType: 'string',
      staTime: 'string',
      usedCoreTime: 'number',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

