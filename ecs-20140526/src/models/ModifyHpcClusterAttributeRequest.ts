// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHpcClusterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the HPC cluster. The description must be 2 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the HPC cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hpc-b8bq705cvx1****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * The name of the HPC cluster. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testName
   */
  name?: string;
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
   * 1234567890
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * 1234567890
   */
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      hpcClusterId: 'HpcClusterId',
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
      hpcClusterId: 'string',
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

