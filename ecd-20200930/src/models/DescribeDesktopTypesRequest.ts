// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopTypesRequest extends $dara.Model {
  /**
   * @remarks
   * Applicable Scope of specifications. Default value: `Public`
   * 
   * @example
   * Public
   */
  appliedScope?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The ID of the cloud computer share you want to modify. If this parameter is provided, the response will include compatibility information for the specified specification.
   * 
   * @example
   * dg-abcdefg****
   */
  desktopGroupIdForModify?: string;
  /**
   * @remarks
   * The ID of the cloud computer when you change instance types of cloud computers. If you specify this parameter, the information about whether the instance type is compatible with the cloud computer is included in the response.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopIdForModify?: string;
  /**
   * @remarks
   * The specification ID.
   * 
   * >  If both `InstanceTypeFamily` and `DesktopTypeId` are empty, all cloud computer specifications will be queried.
   * 
   * Valid values:
   * 
   * *   eds.enterprise_office.4c8g
   * *   eds.hf.4c8g
   * *   ecd.basic.large
   * *   ecd.advanced.large
   * *   eds.enterprise_office.8c16g
   * *   ecd.basic.small
   * *   ecd.graphics.2xlarge
   * *   eds.hf.8c16g
   * *   eds.hf.12c24g
   * *   eds.general.8c16g
   * *   eds.general.16c32g
   * *   ecd.advanced.xlarge
   * *   eds.graphics.16c1t4
   * *   ecd.graphics.xlarge
   * *   ecd.performance.2xlarge
   * *   eds.general.8c32g
   * *   eds.general.2c2g
   * *   eds.general.2c4g
   * *   eds.graphics.24c1t4
   * *   eds.general.4c8g
   * *   eds.enterprise_office.2c4g
   * *   eds.general.4c16g
   * *   eds.general.2c8g
   * 
   * @example
   * ecd.graphics.xlarge
   */
  desktopTypeId?: string;
  /**
   * @remarks
   * The specification IDs.
   */
  desktopTypeIdList?: string[];
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver type.
   * 
   * Valid values:
   * 
   * *   T4
   * *   A10
   * *   G28
   * *   G39
   * 
   * @example
   * A10
   */
  gpuDriverType?: string;
  /**
   * @remarks
   * The GPU memory size. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The name of the specification family.
   * 
   * >  If both `InstanceTypeFamily` and `DesktopTypeId` are empty, all specification families will be queried.
   * 
   * Valid values:
   * 
   * *   ecd.advanced
   * *   eds.graphics
   * *   ecd.basic
   * *   eds.enterprise_office
   * *   eds.hf
   * *   ecd.graphics
   * *   eds.general
   * *   ecd.performance
   * 
   * @example
   * ecd.graphics
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 4
   */
  memorySize?: number;
  /**
   * @remarks
   * The sorting field. If this parameter is not provided, results are sorted by creation time in descending order.
   * 
   * Valid values:
   * 
   * *   Memory: sorts by memory size.
   * *   Cpu: sorts by the number of vCPUs.
   * 
   * @example
   * Memory
   */
  orderBy?: string;
  /**
   * @remarks
   * The order type.
   * 
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sales mode of the specification.
   * 
   * Valid values:
   * 
   * *   MonthPackage: the monthly subscription mode.
   * *   FastBuy: the quick purchase mode.
   * 
   * @example
   * FastBuy
   */
  scope?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   ASC (default): the ascending order.
   * *   DESC: the descending order.
   * 
   * @example
   * ASC
   */
  sortType?: string;
  /**
   * @remarks
   * The number of sessions supported by the specification.
   * 
   * @example
   * 2
   */
  supportMinSessionCount?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedScope: 'AppliedScope',
      cpuCount: 'CpuCount',
      desktopGroupIdForModify: 'DesktopGroupIdForModify',
      desktopIdForModify: 'DesktopIdForModify',
      desktopTypeId: 'DesktopTypeId',
      desktopTypeIdList: 'DesktopTypeIdList',
      gpuCount: 'GpuCount',
      gpuDriverType: 'GpuDriverType',
      gpuMemory: 'GpuMemory',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      scope: 'Scope',
      sortType: 'SortType',
      supportMinSessionCount: 'SupportMinSessionCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedScope: 'string',
      cpuCount: 'number',
      desktopGroupIdForModify: 'string',
      desktopIdForModify: 'string',
      desktopTypeId: 'string',
      desktopTypeIdList: { 'type': 'array', 'itemType': 'string' },
      gpuCount: 'number',
      gpuDriverType: 'string',
      gpuMemory: 'number',
      instanceTypeFamily: 'string',
      memorySize: 'number',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      scope: 'string',
      sortType: 'string',
      supportMinSessionCount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopTypeIdList)) {
      $dara.Model.validateArray(this.desktopTypeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

