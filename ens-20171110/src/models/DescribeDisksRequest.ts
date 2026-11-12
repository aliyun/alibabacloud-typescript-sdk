// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the cloud disk. Valid values:
   * 
   * - cloud_efficiency: Ultra cloud disk.
   * - cloud_ssd: All-flash cloud disk.
   * - local_hdd: Local HDD.
   * - local_ssd: Local SSD.
   * 
   * @example
   * local_ssd
   */
  category?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - prepay: Subscription.
   * - postpay: Pay-as-you-go.
   * 
   * @example
   * prepay
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * @example
   * d-5soak1gqa507lyfzvz0xo****
   */
  diskId?: string;
  /**
   * @remarks
   * The IDs of the cloud disks.
   * 
   * @example
   * [\\"d-wz99njena32z90ki****\\"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The name of the cloud disk.
   * 
   * @example
   * DiskName
   */
  diskName?: string;
  /**
   * @remarks
   * The purchase method of the cloud disk. Valid values:
   * 
   * - ServiceDisk: Created by Edge Node Service.
   * - ResoureDisk: Purchased with an instance.
   * - PostPayDisk: Purchased separately.
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
   * The list of edge zone IDs.
   * 
   * @example
   * ["cn-suzhou-telecom","cn-chengdu-telecom"]
   */
  ensRegionIds?: string;
  /**
   * @remarks
   * The ID of the instance to which the cloud disk is attached.
   * 
   * @example
   * i-5t77rb0yoz79m28ku60sx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The sorting parameter. Format example: {"EnsRegionId":"desc"}. By default, the results are sorted in descending order of edge zone ID.
   * 
   * @example
   * { "DiskNameSort":"desc","EnsRegionIdSort":"asc" }
   */
  orderByParams?: string;
  /**
   * @remarks
   * The page number of the query list. The minimum value is **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**.
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
   * The status of the cloud disk. Valid values:
   * 
   * - In-use: In use.
   * - Available: Unattached.
   * - Attaching: Attaching.
   * - Detaching: Detaching.
   * - Creating: Creating.
   * - ReIniting: Reinitializing.
   * - Deleting: Releasing.
   * - Deleted: Released.
   * - Expiring: Expiring.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The type of the cloud disk. Valid values:
   * 
   * - system: System cloud disk.
   * - data: Data cloud disk.
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

