// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AttachAlbServerGroupsRequestAlbServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB server group.
   * 
   * A scaling group can be associated with a limited number of ALB server groups. To view the quota or manually apply for a quota increase, go to the [Quota Center](https://quotas.console.aliyun.com/products/ess/quotas).
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-ddwb0y0g6y9bjm****
   */
  albServerGroupId?: string;
  /**
   * @remarks
   * The port number used by the ECS instance or elastic container instance after Auto Scaling adds the instance to the ALB server group.
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
   * The weight of the ECS instance or elastic container instance as a backend server after Auto Scaling adds the instance to the ALB server group. Valid values: 0 to 100.
   * 
   * A higher weight specifies that more access requests are distributed to the ECS instance or elastic container instance. If the weight is 0, the ECS instance or elastic container instance does not receive access requests.
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
   * The details of the ALB server groups.
   * 
   * This parameter is required.
   */
  albServerGroups?: AttachAlbServerGroupsRequestAlbServerGroups[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to add the existing Elastic Compute Service (ECS) instances or elastic container instances in the scaling group to the newly added ALB server groups. Valid values:
   * 
   * - true: adds ECS instances and returns `ScalingActivityId`. You can check whether the existing instances are added by viewing the ID of the scaling activity.
   * 
   * - false: does not add ECS instances.
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
   * The ID of the region to which the scaling group belongs.
   * 
   * Examples: `cn-hangzhou` and `cn-shanghai`. For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

