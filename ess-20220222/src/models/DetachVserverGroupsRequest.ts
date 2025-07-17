// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number that Auto Scaling employs to incorporate instances into the vServer group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend vServer group.
   * 
   * @example
   * rsp-bp1jp1rge****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequestVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer to which the vServer group belongs.
   * 
   * >  You can detach vServer groups of up to five load balancers from a scaling group in one call.
   * 
   * @example
   * lb-bp1p90y3ya9h8s62d****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend vServer group.
   */
  VServerGroupAttributes?: DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes },
    };
  }

  validate() {
    if(Array.isArray(this.VServerGroupAttributes)) {
      $dara.Model.validateArray(this.VServerGroupAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachVServerGroupsRequest extends $dara.Model {
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
   * Specifies whether to remove the existing instances in the scaling group from the vServer group marked for detachment.
   * 
   * *   true: If you set this parameter to `true`, the detachment of the load balancer from the scaling group causes automatic removal of the existing instances in the scaling group from the corresponding vServer group.
   * *   false: If you set this parameter to `false`, the detachment of the load balancer from the scaling group does not cause automatic removal of the existing instances in the scaling group from the corresponding vServer group.
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
   * asg-bp1fo0dbtsbmqa9h****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The collection of information about the vServer groups marked for detachment.
   * 
   * This parameter is required.
   */
  VServerGroups?: DetachVServerGroupsRequestVServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      VServerGroups: 'VServerGroups',
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
      VServerGroups: { 'type': 'array', 'itemType': DetachVServerGroupsRequestVServerGroups },
    };
  }

  validate() {
    if(Array.isArray(this.VServerGroups)) {
      $dara.Model.validateArray(this.VServerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

