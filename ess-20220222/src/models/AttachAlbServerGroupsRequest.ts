// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AttachAlbServerGroupsRequestAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * You can attach only a limited number of ALB server groups to a scaling group. To view the predefined quota limit or manually request a quota increase, go to [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port used by ECS instances or elastic container instances after being added as backend servers to the ALB server group.
   * 
   * Valid values: 1 to 65535.
   * 
   * This parameter is required.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The weight of an ECS instance or elastic container instance after being added as a backend server to the ALB server group. Valid values: 0 to 100.
   * 
   * If you assign a higher weight to an instance, the instance is allocated a larger proportion of access requests. If you assign zero weight to an instance, the instance is allocated no access requests.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      albServerGroupId: 'AlbServerGroupId',
      port: 'Port',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroupId: 'string',
      port: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAlbServerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the ALB server groups.
   * 
   * This parameter is required.
   */
  albServerGroups?: AttachAlbServerGroupsRequestAlbServerGroups[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to add the existing Elastic Compute Service (ECS) instances or elastic container instances in the scaling group to the new ALB server group. Valid values:
   * 
   * *   true: adds the existing ECS instances or elastic container instances in the scaling group to the new ALB server group and returns the value of `ScalingActivityId`. You can query the value of ScalingActivityId to check whether the existing ECS instances are added to the ALB server group.
   * *   false: does not add the existing ECS instances or elastic container instances in the scaling group to the new ALB server group.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceAttach?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * Examples: `cn-hangzhou` and `cn-shanghai`. For more information about regions and zones, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      forceAttach: 'ForceAttach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albServerGroups: { 'type': 'array', 'itemType': AttachAlbServerGroupsRequestAlbServerGroups },
      clientToken: 'string',
      forceAttach: 'boolean',
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

