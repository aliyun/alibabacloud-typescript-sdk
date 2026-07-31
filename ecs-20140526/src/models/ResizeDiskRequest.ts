// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk ID. You can call [DescribeDisks](https://help.aliyun.com/document_detail/25514.html) to query disk IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The new disk capacity that you want to expand to. Unit: GiB. Valid values:
   * - System disk:
   *   - Basic disk: 20 to 500.
   *   - Enterprise SSD:
   *     - PL0: 1 to 2048.
   *     - PL1: 20 to 2048.
   *     - PL2: 461 to 2048.
   *     - PL3: 1261 to 2048.
   *   - ESSD AutoPL disk: 1 to 2048.
   *   - Other disk types: 20 to 2048.
   * 
   * - Data disk:
   *     - Ultra disk (cloud_efficiency): 20 to 32768.
   *     - Standard SSD (cloud_ssd): 20 to 32768.
   *     - Enterprise SSD (cloud_essd): The valid values depend on the value of `PerformanceLevel`. You can call [DescribeDisks](https://help.aliyun.com/document_detail/25514.html) to query disk information and then check the valid values based on the `PerformanceLevel` parameter in the response.
   *         - PL0: 1 to 65536.
   *         - PL1: 20 to 65536.
   *         - PL2: 461 to 65536.
   *         - PL3: 1261 to 65536.
   *     - Basic disk (cloud): 5 to 2000.
   *     - ESSD AutoPL disk (cloud_auto): 1 to 65536.
   * <props="china">
   *     - ESSD Entry disk (cloud_essd_entry): 10 to 32768.
   * 
   *   - Elastic ephemeral disk - Standard (elastic_ephemeral_disk_standard): 64 to 8,192.
   *   - Elastic ephemeral disk - Premium (elastic_ephemeral_disk_premium): 64 to 8,192.
   * 
   * >The specified new disk capacity must be greater than the original disk capacity. Otherwise, an error is returned.
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
   * The method used to expand the disk. Valid values:
   * 
   * - offline (default): offline expansion. After the expansion, you must restart the instance in the console by following the instructions in [Restart an instance](https://help.aliyun.com/document_detail/25440.html) or by calling the [RebootInstance](https://help.aliyun.com/document_detail/25502.html) operation for the changes to take effect.
   *  
   * - online: online expansion. The expansion takes effect without restarting the instance. Supported disk types include ultra disks, standard SSDs, enterprise SSDs, and elastic ephemeral disks.
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

