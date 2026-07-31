// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostClusterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated host cluster. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter. The name cannot contain `http://` or `https://`.
   * 
   * @example
   * newClusterName
   */
  dedicatedHostClusterName?: string;
  /**
   * @remarks
   * The description of the dedicated host cluster. The description must be 2 to 256 characters in length. The description cannot start with `http://` or `https://`.
   * 
   * @example
   * newClusterDescription
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the dedicated host cluster. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostClusterName: 'DedicatedHostClusterName',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
      dedicatedHostClusterName: 'string',
      description: 'string',
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

