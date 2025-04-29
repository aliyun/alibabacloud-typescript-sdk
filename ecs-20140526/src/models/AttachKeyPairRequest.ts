// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of instances to which you want to bind the SSH key pair. The value can be a JSON array that consists of up to 50 instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-bp1gtjxuuvwj17zr****", "i-bp17b7zrsbjwvmfy****", … "i-bp1h6jmbefj1ytos****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SSH key pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairName: 'KeyPairName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      keyPairName: 'string',
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

