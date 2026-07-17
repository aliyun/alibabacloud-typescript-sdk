// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormFsUsedDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. Call the [GetLindormInstanceList](https://help.aliyun.com/document_detail/426069.html) API to obtain it.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-xxxx
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located. Call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) API to obtain it.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

