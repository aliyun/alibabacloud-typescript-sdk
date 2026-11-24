// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachDBInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of the ApsaraDB RDS instances. You can remove up to five ApsaraDB RDS instances at a time.
   * 
   * This parameter is required.
   */
  DBInstances?: string[];
  /**
   * @remarks
   * Specifies whether to remove the private IP addresses of the instances in the scaling group from the IP whitelist of the RDS instance. Valid values:
   * 
   * - true: removes the private IP addresses of the instances.
   * 
   * - false: does not remove the private IP addresses of the instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceDetach?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is valid only for databases whose `AttachMode` is set to `SecurityGroup`. Valid values:
   * 
   * - true: removes the security group ID that was added when the scaling group was associated with the database.
   * - false: retains the security group ID that was added when the scaling group was associated with the database.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  removeSecurityGroup?: boolean;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstances: 'DBInstances',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeSecurityGroup: 'RemoveSecurityGroup',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstances: { 'type': 'array', 'itemType': 'string' },
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      removeSecurityGroup: 'boolean',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

