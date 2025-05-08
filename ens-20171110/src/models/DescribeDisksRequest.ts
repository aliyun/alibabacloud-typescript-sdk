// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the disk.
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: all-flash disk.
   * *   local_hdd: local HDD.
   * *   local_ssd: local SSD.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * *   prePay: subscription.
   * *   postpay: pay-as-you-go.
   * 
   * @example
   * prepay
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-5soak1gqa507lyfzvz0xo****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * [\\"d-wz99njena32z90ki****\\"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * DiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The purchase method of the disk. Valid values:
   * 
   * *   ServiceDisk: The disk is purchased when ENS is activated.
   * *   ResoureDisk: The disk is purchased when the instance is created.
   * *   PostPayDisk: The disk is separately purchased.
   * 
   * @example
   * PostPayDisk
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-kunming-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The node information.
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The ID of the instance to which the disk is attached.
   * 
   * @example
   * i-5t77rb0yoz79m28ku60sx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned data. Example: {"EnsRegionId":"desc"}. By default, the nodes are sorted by IDs in descending order.
   * 
   * @example
   * { "DiskNameSort":"desc","EnsRegionIdSort":"asc" }
   */
  orderByParams?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **50**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * @example
   * s-897654321****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the disk. Valid values:
   * 
   * *   In-use: The disk is in use.
   * *   Available: The disk can be attached.
   * *   Attaching: The disk is being attached.
   * *   Detaching: The disk is being detached.
   * *   Creating: The disk is being created.
   * *   ReIniting: The disk is being reset.
   * *   Deleting: The disk is being released.
   * *   Deleted: The disk is released.
   * *   Expiring: The disk is about to expire.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskIds: 'DiskIds',
      diskName: 'DiskName',
      diskType: 'DiskType',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      instanceId: 'InstanceId',
      orderByParams: 'OrderByParams',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshotId: 'SnapshotId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskIds: 'string',
      diskName: 'string',
      diskType: 'string',
      ensRegionId: 'string',
      ensRegionIds: 'string',
      instanceId: 'string',
      orderByParams: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      snapshotId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

