// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachAlbServerGroupsRequestAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by the ECS instances in the ALB server group.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachAlbServerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Details of the ALB server groups.
   * 
   * This parameter is required.
   */
  albServerGroups?: DetachAlbServerGroupsRequestAlbServerGroups[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence of a request](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to remove the existing Elastic Compute Service (ECS) instances from the Application Load Balancer (ALB) server group marked for detachment. Valid values:
   * 
   * *   true: removes the existing ECS instances from the ALB server group and returns the value of `ScalingActivityId`. You can query the value of ScalingActivityId to check whether the existing ECS instances are removed from the ALB server group.
   * *   false: does not remove the existing ECS instances from the ALB server group.
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
   * The region ID of the scaling group. Examples: cn-hangzhou and cn-shanghai.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      albServerGroups: 'AlbServerGroups',
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroups: { 'type': 'array', 'itemType': DetachAlbServerGroupsRequestAlbServerGroups },
      clientToken: 'string',
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.albServerGroups)) {
      $dara.Model.validateArray(this.albServerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

