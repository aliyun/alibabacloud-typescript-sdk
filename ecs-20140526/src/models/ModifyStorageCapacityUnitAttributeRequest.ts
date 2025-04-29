// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStorageCapacityUnitAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the SCU. The description must be 2 to 256 characters in length and cannot start with [http:// or https://.](http://https://。)
   * 
   * @example
   * testNewScuDescription
   */
  description?: string;
  /**
   * @remarks
   * The new name of the SCU. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with [http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).](http://https://。、（:）、（_）（-）。)
   * 
   * @example
   * testNewScuName
   */
  name?: string;
  /**
   * @example
   * hide
   */
  ownerAccount?: string;
  /**
   * @example
   * 111
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SCU. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * hide
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 111
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the SCU.
   * 
   * This parameter is required.
   * 
   * @example
   * scu-bp67acfmxazb4p****
   */
  storageCapacityUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageCapacityUnitId: 'StorageCapacityUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageCapacityUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

