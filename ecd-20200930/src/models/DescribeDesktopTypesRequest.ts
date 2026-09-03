// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The applicable scope of the specification. Default value: `Public`.
   * 
   * @example
   * Public
   */
  appliedScope?: string;
  /**
   * @remarks
   * The business channel. Valid values:
   * Enterprise: Enterprise Edition.
   * Business: Business Edition.
   * 
   * @example
   * Enterprise
   */
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
   * The ID of the shared cloud computer for which you want to change the specification. If this parameter is specified, the response includes compatibility information between the specification and the shared cloud computer.
   * 
   * @example
   * dg-abcdefg****
   */
  desktopGroupIdForModify?: string;
  /**
   * @remarks
   * The ID of the cloud computer for which you want to change the specification. If this parameter is specified, the response includes compatibility information between the specification and the cloud computer.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopIdForModify?: string;
  /**
   * @remarks
   * The scenarios of the cloud computer.
   * 
   * @example
   * office
   */
  desktopScenario?: string;
  /**
   * @remarks
   * The specification ID.
   * 
   * > If both `InstanceTypeFamily` and `DesktopTypeId` are left empty, information about all cloud computer specifications is returned.
   * 
   * @example
   * ecd.graphics.xlarge
   */
  desktopTypeId?: string;
  /**
   * @remarks
   * The list of specification IDs.
   */
  desktopTypeIdList?: string[];
  /**
   * @remarks
   * The number of GPU cores.
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
  /**
   * @remarks
   * The GPU memory size. This parameter is meaningful only for GPU-accelerated cloud computers. Unit: MB.
   * 
   * @example
   * 2048
   */
  gpuMemory?: number;
  /**
   * @remarks
   * The instance family name.
   * 
   * > If both `InstanceTypeFamily` and `DesktopTypeId` are left empty, information about all cloud computer specifications is returned.
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
   * 4096
   */
  memorySize?: number;
  /**
   * @remarks
   * The ID of the office network to which the shared cloud computer belongs.
   * 
   * @example
   * cn-hangzhou+os-c5cy7q578s8jc****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The field by which to sort the results. If this parameter is not specified, results are sorted by creation time in descending order.
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
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The billing method of the specification.
   * 
   * @example
   * FastBuy
   */
  scope?: string;
  /**
   * @remarks
   * The list of applicable scopes.
   */
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
   * The minimum number of multi-sessions supported by the specification.
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
   * cn-hangzhou-j
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

