// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEipAddressAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the pay-as-you-go EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uj6i0d****
   */
  allocationId?: string;
  /**
   * @remarks
   * The new maximum bandwidth of the EIP. Valid values:
   * 
   * *   **1** to **200** if the metering method is pay-by-data-transfer. Unit: Mbit/s.
   * *   **1** to **500** if the metering method is pay-by-bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @remarks
   * The new description of the EIP.
   * 
   * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  description?: string;
  /**
   * @remarks
   * The new name of the EIP.
   * 
   * The name must be 1 to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Test123
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the EIP.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      bandwidth: 'string',
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

