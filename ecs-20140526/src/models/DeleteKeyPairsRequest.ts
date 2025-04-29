// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The names of SSH key pairs. The value can be a JSON array that consists of up to 100 SSH key pair names. Separate the names with commas (,).
   * 
   * >  Before you delete an SSH key pair, you can call the [DescribeKeyPairs](https://help.aliyun.com/document_detail/51773.html) operation to query existing key pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["skp-bp67acfmxazb41****", "skp-bp67acfmxazb42****", … "skp-bp67acfmxazb4p3***"]
   */
  keyPairNames?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
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

