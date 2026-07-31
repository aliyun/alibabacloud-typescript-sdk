// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the SSH key pairs. The value is a JSON array of SSH key pair names. You can specify up to 100 SSH key pairs. Separate multiple names with commas (,).
   * 
   * > Before you delete SSH key pairs, you can call [DescribeKeyPairs](https://help.aliyun.com/document_detail/51773.html) to query existing key pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["TestKeyPairName-1", "TestKeyPairName-2", … "TestKeyPairName-100"]
   */
  keyPairNames?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SSH key pairs. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      keyPairNames: 'KeyPairNames',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairNames: 'string',
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

