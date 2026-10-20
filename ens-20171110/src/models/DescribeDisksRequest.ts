// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The disk category.
   * 
   * - cloud_efficiency: ultra cloud disk
   * - cloud_ssd: all-flash cloud disk
   * - local_hdd: local HDD
   * - local_ssd: local SSD
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * - prepay: subscription
   * - postpay: pay-as-you-go
   * 
   * @example
   * prepay
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * @example
   * d-5soak1gqa507lyfzvz0xo****
   */
  diskId?: string;
  /**
   * @remarks
   * The disk IDs.
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
   * The disk purchase method.
   * 
   * - ServiceDisk: disk created by an edge service
   * - ResoureDisk: purchased with an instance
   * - PostPayDisk: purchased separately
   * 
   * @example
   * PostPayDisk
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * @example
   * cn-kunming-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The list of edge zones.
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The instance to which the cloud disk is mounted.
   * 
   * @example
   * i-5t77rb0yoz79m28ku60sx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The sorting parameter. Format example: {"EnsRegionId":"desc"}. By default, results are sorted by edge zone ID in descending order.
   * 
   * @example
   * { "DiskNameSort":"desc","EnsRegionIdSort":"asc" }
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number of the query list. Minimum value: **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **50**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-897654321****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The disk status.
   * 
   * - In-use: in use
   * - Available: to be mounted
   * - Attaching: being mounted
   * - Detaching: being unmounted
   * - Creating: being created
   * - ReIniting: being reset
   * - Deleting: being released
   * - Deleted: released
   * - Expiring: about to expire
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The disk property.
   * 
   * - system: system cloud disk
   * - data: data cloud disk
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

