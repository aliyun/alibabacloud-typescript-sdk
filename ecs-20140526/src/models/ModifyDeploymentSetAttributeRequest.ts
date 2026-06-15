// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDeploymentSetAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The affinity level of the deployment set. Instances in the deployment set are distributed based on this affinity level. Valid values: 1 to 10. Default value: 1.>Notice:  The affinity setting is available only when the deployment strategy is set to high availability (`Strategy = Availability`).
   * 
   * @example
   * 3
   */
  affinity?: number;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * This parameter is required.
   * 
   * @example
   * ds-bp1frxuzdg87zh4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The new name of the deployment set. The name must be 2 to 128 characters long and can contain letters, digits, Chinese characters, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DeploymentSetTestName
   */
  deploymentSetName?: string;
  /**
   * @remarks
   * The new description of the deployment set. It must be 2 to 256 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * TestDescription
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the deployment set. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to obtain the latest list of Alibaba Cloud regions.
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
      affinity: 'Affinity',
      deploymentSetId: 'DeploymentSetId',
      deploymentSetName: 'DeploymentSetName',
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
      affinity: 'number',
      deploymentSetId: 'string',
      deploymentSetName: 'string',
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

