// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachServerGroupsRequestServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port used by ECS instances or elastic container instances as backend servers of the server group.
   * 
   * >  For ALB and NLB types, this parameter is required. GWLB type cannot set this parameter and the default value is 6081.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-1gv2uidn2msy****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * *   ALB
   * *   NLB
   * *   GWLB
   * 
   * This parameter is required.
   * 
   * @example
   * ALB
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachServerGroupsRequest extends $dara.Model {
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
   * Specifies whether to remove the existing Elastic Compute Service (ECS) instances or elastic container instances in the scaling group from the server group marked for detachment.
   * 
   * *   true
   * *   false
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
  /**
   * @remarks
   * The information about the server groups.
   * 
   * This parameter is required.
   */
  serverGroups?: DetachServerGroupsRequestServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      serverGroups: 'ServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceDetach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      serverGroups: { 'type': 'array', 'itemType': DetachServerGroupsRequestServerGroups },
    };
  }

  validate() {
    if(Array.isArray(this.serverGroups)) {
      $dara.Model.validateArray(this.serverGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

