// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGResponseBodySDGsAvaliableRegionIds extends $dara.Model {
  /**
   * @remarks
   * The creation time of the SDG in the edge zone.
   * 
   * @example
   * 2023-02-27 15:13:26
   */
  creationTime?: string;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * @example
   * cn-hangzhou-26
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * sp-517qu0tgznrg622he7nf4wd7n
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the SDG in the edge zone. Valid values:
   * 
   * - **sdg_making**: Being created.
   * - **sdg_saving**: Being saved.
   * - **sdg_copying**: Being synchronized across edge zones.
   * - **failed**: Creation failed.
   * - **success**: Creation succeeded.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      regionId: 'string',
      snapshotId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGResponseBodySDGsPreloadInfos extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-16T06:18:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The disk type of the redundant shared disks.
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-20000
   */
  namespace?: string;
  /**
   * @remarks
   * The number of redundant copies for fast shared mounting response.
   * 
   * @example
   * 2
   */
  redundantNum?: number;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The most recent status update time.
   * 
   * @example
   * 2021-01-22T08:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      diskType: 'DiskType',
      namespace: 'Namespace',
      redundantNum: 'RedundantNum',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      diskType: 'string',
      namespace: 'string',
      redundantNum: 'number',
      regionId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGResponseBodySDGs extends $dara.Model {
  /**
   * @remarks
   * The list of edge zones where SDG snapshots exist.
   */
  avaliableRegionIds?: DescribeSDGResponseBodySDGsAvaliableRegionIds[];
  /**
   * @remarks
   * The billing cycle of the shared disk.
   * 
   * @example
   * Day
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * Open
   */
  billingType?: string;
  /**
   * @remarks
   * The disk type of the source disk used to create the SDG.
   * 
   * @example
   * standard
   */
  creationDiskType?: string;
  /**
   * @remarks
   * The instance ID of the instance from which the SDG was created.
   * 
   * @example
   * aic-5x20dyeos****
   */
  creationInstanceId?: string;
  /**
   * @remarks
   * The ID of the edge zone where the SDG was created.
   * 
   * @example
   * cn-hangzhou-26
   */
  creationRegionId?: string;
  /**
   * @remarks
   * The time when the SDG was first created.
   * 
   * @example
   * 2023-02-27 15:07:21
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the SDG.
   * 
   * @example
   * Test SDG
   */
  description?: string;
  /**
   * @remarks
   * The ID of the source SDG for incremental creation. This is the FromSDGId parameter specified when you called [CreateSDG](https://help.aliyun.com/document_detail/608128.html).
   * 
   * @example
   * sdg-xxxxx
   */
  parentSDGId?: string;
  /**
   * @remarks
   * The sharing ratio of the SDG.
   * 
   * @example
   * 100
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The preload configuration information.
   */
  preloadInfos?: DescribeSDGResponseBodySDGsPreloadInfos[];
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-30e1fdba7196bc****
   */
  SDGId?: string;
  /**
   * @remarks
   * The size of the SDG. Unit: GB.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The creation status of the SDG. Valid values:
   * 
   * - **sdg_making**: Being created.
   * - **sdg_saving**: Being saved.
   * - **failed**: Creation failed.
   * - **success**: Creation succeeded.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the SDG was last updated.
   * 
   * @example
   * 2023-02-27 16:04:39
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      avaliableRegionIds: 'AvaliableRegionIds',
      billingCycle: 'BillingCycle',
      billingType: 'BillingType',
      creationDiskType: 'CreationDiskType',
      creationInstanceId: 'CreationInstanceId',
      creationRegionId: 'CreationRegionId',
      creationTime: 'CreationTime',
      description: 'Description',
      parentSDGId: 'ParentSDGId',
      performanceLevel: 'PerformanceLevel',
      preloadInfos: 'PreloadInfos',
      SDGId: 'SDGId',
      size: 'Size',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avaliableRegionIds: { 'type': 'array', 'itemType': DescribeSDGResponseBodySDGsAvaliableRegionIds },
      billingCycle: 'string',
      billingType: 'string',
      creationDiskType: 'string',
      creationInstanceId: 'string',
      creationRegionId: 'string',
      creationTime: 'string',
      description: 'string',
      parentSDGId: 'string',
      performanceLevel: 'string',
      preloadInfos: { 'type': 'array', 'itemType': DescribeSDGResponseBodySDGsPreloadInfos },
      SDGId: 'string',
      size: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.avaliableRegionIds)) {
      $dara.Model.validateArray(this.avaliableRegionIds);
    }
    if(Array.isArray(this.preloadInfos)) {
      $dara.Model.validateArray(this.preloadInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for the current query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  /**
   * @remarks
   * The list of SDG information.
   */
  SDGs?: DescribeSDGResponseBodySDGs[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      SDGs: 'SDGs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      SDGs: { 'type': 'array', 'itemType': DescribeSDGResponseBodySDGs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.SDGs)) {
      $dara.Model.validateArray(this.SDGs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

