// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The scope of the instance types to query. Default value: `Public`.
   * 
   * @example
   * Public
   */
  appliedScope?: string;
  businessChannel?: string;
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
   * The ID of the desktop group to reconfigure. If you specify this parameter, the response returns only the instance types that are compatible with the specified group.
   * 
   * @example
   * dg-abcdefg****
   */
  desktopGroupIdForModify?: string;
  /**
   * @remarks
   * The ID of the WUYING Workspace to reconfigure. If you specify this parameter, the response returns only the instance types that are compatible with the specified workspace.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopIdForModify?: string;
  desktopScenario?: string;
  /**
   * @remarks
   * The ID of the instance type.
   * 
   * > If you omit both the `InstanceTypeFamily` and `DesktopTypeId` parameters, the operation returns all available WUYING Workspace instance types.
   * 
   * @example
   * ecd.graphics.xlarge
   */
  desktopTypeId?: string;
  /**
   * @remarks
   * An array of instance type IDs.
   */
  desktopTypeIdList?: string[];
  /**
   * @remarks
   * The number of vGPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The GPU driver type.
   * 
   * @example
   * A10
   */
  gpuDriverType?: string;
  gpuMemory?: number;
  /**
   * @remarks
   * The instance type family.
   * 
   * > If you omit both the `InstanceTypeFamily` and `DesktopTypeId` parameters, the operation returns all available WUYING Workspace instance types.
   * 
   * @example
   * ecd.graphics
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The memory size, in MiB.
   * 
   * @example
   * 4096
   */
  memorySize?: number;
  officeSiteId?: string;
  /**
   * @remarks
   * The property by which to sort the results. If you omit this parameter, the results are sorted by creation time in descending order.
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
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions that Elastic Desktop Service supports.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The billing method of the instance types.
   * 
   * @example
   * FastBuy
   */
  scope?: string;
  scopeSet?: string[];
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * ASC
   */
  sortType?: string;
  /**
   * @remarks
   * Filters for instance types that support at least the specified number of concurrent sessions. This parameter applies only to multi-session instance types.
   * 
   * @example
   * 2
   */
  supportMinSessionCount?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 无
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedScope: 'AppliedScope',
      businessChannel: 'BusinessChannel',
      cpuCount: 'CpuCount',
      desktopGroupIdForModify: 'DesktopGroupIdForModify',
      desktopIdForModify: 'DesktopIdForModify',
      desktopScenario: 'DesktopScenario',
      desktopTypeId: 'DesktopTypeId',
      desktopTypeIdList: 'DesktopTypeIdList',
      gpuCount: 'GpuCount',
      gpuDriverType: 'GpuDriverType',
      gpuMemory: 'GpuMemory',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      officeSiteId: 'OfficeSiteId',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      scope: 'Scope',
      scopeSet: 'ScopeSet',
      sortType: 'SortType',
      supportMinSessionCount: 'SupportMinSessionCount',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedScope: 'string',
      businessChannel: 'string',
      cpuCount: 'number',
      desktopGroupIdForModify: 'string',
      desktopIdForModify: 'string',
      desktopScenario: 'string',
      desktopTypeId: 'string',
      desktopTypeIdList: { 'type': 'array', 'itemType': 'string' },
      gpuCount: 'number',
      gpuDriverType: 'string',
      gpuMemory: 'number',
      instanceTypeFamily: 'string',
      memorySize: 'number',
      officeSiteId: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      scope: 'string',
      scopeSet: { 'type': 'array', 'itemType': 'string' },
      sortType: 'string',
      supportMinSessionCount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopTypeIdList)) {
      $dara.Model.validateArray(this.desktopTypeIdList);
    }
    if(Array.isArray(this.scopeSet)) {
      $dara.Model.validateArray(this.scopeSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

