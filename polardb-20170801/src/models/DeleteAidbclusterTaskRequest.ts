// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAIDBClusterTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID. Note: This parameter specifies the ID of the model operator task instance created by calling CreateAIDBClusterTask, which is prefixed with pm-*. It does not refer to the PolarDB cluster ID, which is prefixed with pc-*. You can obtain the task ID by calling DescribeAIDBClusterTasks.
   * 
   * @example
   * pm-2ze9***
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The PolarDB database instance ID for AI model services. Note: When you invoke this operation, this parameter is practically required. If it is not provided, a valid DBClusterId will result in an InvalidDBClusterId.Malformed (400) error. This parameter specifies the parent PolarDB AI cluster (prefixed with pc-*) to which the task belongs.
   * 
   * @example
   * pc-2zejpr***
   */
  relativeDBClusterId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relativeDBClusterId: 'RelativeDBClusterId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      relativeDBClusterId: 'string',
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

