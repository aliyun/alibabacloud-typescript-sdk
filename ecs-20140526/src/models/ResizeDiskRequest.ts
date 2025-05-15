// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * > This parameter is returned only when you resize subscription disks.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the disk. You can call the [DescribeDisks](https://help.aliyun.com/document_detail/25514.html) operation to query available disk IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The new disk capacity. Unit: GiB. Valid values:
   * 
   * *   System disk:
   * 
   *     *   Basic disk (cloud): 20 to 500.
   * 
   *     *   ESSD (cloud_essd): The valid values vary based on the performance level of the ESSD.
   * 
   *         *   Valid values when SystemDisk.PerformanceLevel is set to PL0: 1 to 2048.
   *         *   Valid values when SystemDisk.PerformanceLevel is set to PL1: 20 to 2048.
   *         *   Valid values when SystemDisk.PerformanceLevel is set to PL2: 461 to 2048.
   *         *   Valid values when SystemDisk.PerformanceLevel is set to PL3: 1261 to 2048.
   * 
   *     *   ESSD AutoPL disk: 1 to 2048.
   * 
   *     *   Other disk categories: 20 to 2048.
   * 
   * *   Data disk:
   * 
   *     *   Ultra disk (cloud_efficiency): 20 to 32768.
   * 
   *     *   Standard SSD (cloud_ssd): 20 to 32768.
   * 
   *     *   ESSD (cloud_essd): The valid values vary based on the performance level of the ESSD.`` To query the performance level of an ESSD, call the [DescribeDisks](https://help.aliyun.com/document_detail/25514.html) operation to query disk information and check the `PerformanceLevel` value in the response.
   * 
   *         *   PL0 ESSD: 1 to 65536.
   *         *   PL1 ESSD: 20 to 65536.
   *         *   PL2 ESSD: 461 to 65536.
   *         *   PL3 ESSD: 1261 to 65536.
   * 
   *     *   Basic disk (cloud): 5 to 2000.
   * 
   *     *   ESSD AutoPL disk (cloud_auto): 1 to 65536.
   * 
   *     *   Standard elastic ephemeral disk (elastic_ephemeral_disk_standard): 64 to 8192.
   * 
   *     *   Premium elastic ephemeral disk (elastic_ephemeral_disk_premium): 64 to 8192.
   * 
   * >  The new disk capacity must be larger than the original disk capacity. Otherwise, an error is reported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1900
   */
  newSize?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The method that you want to use to resize the disk. Valid values:
   * 
   * *   offline (default): resizes the disk offline. After you resize a disk offline, you must [restart the associated instance](https://help.aliyun.com/document_detail/25440.html) in the ECS console or by calling the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) operation for the resizing operation to take effect.
   * *   online: resizes the disk online. After you resize a disk online, the resizing operation immediately takes effect. You do not need to restart the associated instance. You can resize ultra disks, standard SSDs, ESSDs, and elastic ephemeral disks online.
   * 
   * @example
   * offline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      newSize: 'NewSize',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      newSize: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

