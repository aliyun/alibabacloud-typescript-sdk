// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk ID. You can call the [DescribeDisks](https://help.aliyun.com/document_detail/25514.html) operation to query the disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The target capacity for the disk scale-out. Unit: GiB. Valid values:
   * - System disks:
   *   - Basic disks: 20 to 500.
   *   - Enterprise SSDs:
   *     - PL0: 1 to 2048.
   *     - PL1: 20 to 2048.
   *     - PL2: 461 to 2048.
   *     - PL3: 1261 to 2048.
   *   - ESSD AutoPL disks: 1 to 2048.
   *   - Other disk types: 20 to 2048.
   * 
   * - Data disks:
   *     - Ultra disks (cloud_efficiency): 20 to 32768.
   *     - Standard SSDs (cloud_ssd): 20 to 32768.
   *     - Enterprise SSDs (cloud_essd): The valid values vary based on the `PerformanceLevel` parameter. You can invoke the [DescribeDisks](https://help.aliyun.com/document_detail/25514.html) operation to query disk information and check the valid values based on the `PerformanceLevel` parameter in the response.
   *         - PL0: 1 to 65536.
   *         - PL1: 20 to 65536.
   *         - PL2: 461 to 65536.
   *         - PL3: 1261 to 65536.
   *     - Basic disks (cloud): 5 to 2000.
   *     - ESSD AutoPL disks (cloud_auto): 1 to 65536.
   * <props="china">
   *     - ESSD Entry disks (cloud_essd_entry): 10 to 32768.
   * 
   *   - Standard Edition elastic ephemeral disks (elastic_ephemeral_disk_standard): 64 to 8192.
   *   - Premium Edition elastic ephemeral disks (elastic_ephemeral_disk_premium): 64 to 8192.
   * 
   * > The specified new capacity must be greater than the original capacity. Otherwise, an error is returned when you invoke the API operation.
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
   * The method for disk scale-out. Valid values:
   * 
   * - offline (default): offline scale-out. After the scale-out, you must [restart the instance](https://help.aliyun.com/document_detail/25440.html) in the console or invoke the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) API operation for the scale-out to take effect.
   *  
   * - online: online scale-out. The scale-out is completed without the need to restart the instance. This value is supported for ultra disks, standard SSDs, enterprise SSDs, and elastic ephemeral disks.
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

