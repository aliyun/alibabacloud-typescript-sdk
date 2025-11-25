// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGResponseBodySDGsAvaliableRegionIds extends $dara.Model {
  /**
   * @remarks
   * The time when the SDG was created on the node.
   * 
   * @example
   * 2023-02-27 15:13:26
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-hangzhou-26
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * sp-517qu0tgznrg622he7nf4wd7n
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the SDG on the node. Valid values:
   * 
   * *   **sdg_making**
   * *   **sdg_saving**
   * *   **sdg_copying**
   * *   **failed**
   * *   **success**
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
   * The time when the SDG was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-16T06:18:40Z
   */
  creationTime?: string;
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
   * The number of redundant replicas to quickly respond to shared mounts.
   * 
   * @example
   * 2
   */
  redundantNum?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the status was last updated.
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
   * SDGs that have snapshots.
   */
  avaliableRegionIds?: DescribeSDGResponseBodySDGsAvaliableRegionIds[];
  billingCycle?: string;
  /**
   * @example
   * Open
   */
  billingType?: string;
  creationDiskType?: string;
  /**
   * @remarks
   * The ID of the instance on which the SDG is created.
   * 
   * @example
   * aic-5x20dyeos****
   */
  creationInstanceId?: string;
  /**
   * @remarks
   * The ID of the node on which the SDG is created.
   * 
   * @example
   * cn-hangzhou-26
   */
  creationRegionId?: string;
  /**
   * @remarks
   * The time when the first SDG in the node was created.
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
   * Testing SDGs
   */
  description?: string;
  /**
   * @remarks
   * The ID of the source SDG from which you want to create an SDG. The value of this parameter is the value of the **FromSDGId** parameter that you need to specify when you call the [CreateSDG](https://help.aliyun.com/document_detail/608128.html) operation.
   * 
   * @example
   * sdg-xxxxx
   */
  parentSDGId?: string;
  performanceLevel?: string;
  /**
   * @remarks
   * The preload information.
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
   * The status of the SDG creation. Valid values:
   * 
   * *   **sdg_making**
   * *   **sdg_saving**
   * *   **failed**
   * *   **success**
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The information about the SDGs.
   */
  SDGs?: DescribeSDGResponseBodySDGs[];
  /**
   * @remarks
   * The total number of returned entries.
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

