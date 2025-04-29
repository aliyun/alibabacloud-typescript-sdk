// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHpcClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the HPC cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hpc-cxvr5uzy54j0ya****
   */
  hpcClusterId?: string;
  /**
   * @example
   * EcsforCloud@Alibaba.com
   */
  ownerAccount?: string;
  /**
   * @remarks
   * RAM用户的虚拟账号ID。
   * 
   * @example
   * 155780923770
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the HPC cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 资源主账号的账号名称。
   * 
   * @example
   * EcsforCloud
   */
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * 资源主账号的ID，亦即UID。
   * 
   * @example
   * 155780923770
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      hpcClusterId: 'HpcClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      hpcClusterId: 'string',
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

