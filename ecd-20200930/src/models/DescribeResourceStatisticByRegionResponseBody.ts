// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceStatisticByRegionResponseBodyStatisticRegionStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of assigned users in the current region.
   * 
   * @example
   * 0
   */
  assignedEndUserCount?: number;
  /**
   * @remarks
   * The number of connected users in the current region.
   * 
   * @example
   * 0
   */
  connectedEndUserCount?: number;
  /**
   * @remarks
   * The number of cloud desktops in the current region.
   * 
   * @example
   * 0
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of shared cloud desktops in the current region.
   * 
   * @example
   * 0
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The number of network packages in the current region.
   * 
   * @example
   * 0
   */
  networkPackageCount?: number;
  /**
   * @remarks
   * The number of policy groups in the current region.
   * 
   * @example
   * 0
   */
  policyGroupCount?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://next.api.aliyun.com/document/ecd/2020-09-30/DescribeRegions) operation to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedEndUserCount: 'AssignedEndUserCount',
      connectedEndUserCount: 'ConnectedEndUserCount',
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      networkPackageCount: 'NetworkPackageCount',
      policyGroupCount: 'PolicyGroupCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedEndUserCount: 'number',
      connectedEndUserCount: 'number',
      desktopCount: 'number',
      desktopGroupCount: 'number',
      networkPackageCount: 'number',
      policyGroupCount: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceStatisticByRegionResponseBodyStatistic extends $dara.Model {
  /**
   * @remarks
   * The statistics by region.
   */
  regionStatistics?: DescribeResourceStatisticByRegionResponseBodyStatisticRegionStatistics[];
  static names(): { [key: string]: string } {
    return {
      regionStatistics: 'RegionStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionStatistics: { 'type': 'array', 'itemType': DescribeResourceStatisticByRegionResponseBodyStatisticRegionStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.regionStatistics)) {
      $dara.Model.validateArray(this.regionStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceStatisticByRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics information.
   */
  statistic?: DescribeResourceStatisticByRegionResponseBodyStatistic;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistic: 'Statistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistic: DescribeResourceStatisticByRegionResponseBodyStatistic,
    };
  }

  validate() {
    if(this.statistic && typeof (this.statistic as any).validate === 'function') {
      (this.statistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

