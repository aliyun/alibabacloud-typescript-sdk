// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDeploymentSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment set to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ds-bp1g5ahlkal88d7x****
   */
  deploymentSetId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the deployment set. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent Alibaba Cloud region list.
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
      deploymentSetId: 'DeploymentSetId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetId: 'string',
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

