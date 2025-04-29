// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHpcClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the HPC cluster. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testHPCDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the HPC cluster. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * hpc-Cluster-01
   */
  name?: string;
  /**
   * @remarks
   * RAM用户的账号登录名称。
   * 
   * @example
   * ECSforCloud@Alibaba.com
   */
  ownerAccount?: string;
  /**
   * @remarks
   * RAM用户的虚拟账号ID。
   * 
   * @example
   * 1234567890
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the HPC cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
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
   * ECSforCloud
   */
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * 资源主账号的ID，亦即UID。
   * 
   * @example
   * 1234567890
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

