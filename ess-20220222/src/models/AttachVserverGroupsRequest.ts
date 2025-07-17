// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number over which Auto Scaling adds ECS instances or elastic container instances to the new vServer group. Valid values: 1 to 65535.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * lb-bp1u7etiogg38yvwz****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of an ECS instance or elastic container instance as a backend server. Valid values: 0 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
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

export class AttachVServerGroupsRequestVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance to which the new vServer group belongs.
   * 
   * @example
   * rsp-bp1jp1rge****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the vServer group.
   */
  VServerGroupAttributes?: AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes },
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

export class AttachVServerGroupsRequest extends $dara.Model {
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
   * Specifies whether to add the existing Elastic Compute Service (ECS) instances or elastic container instances in the scaling group to the new vServer group. Valid values:
   * 
   * *   true
   * *   false
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
   * The region ID of the scaling group. Examples: cn-hangzhou and cn-shanghai. For information about regions and zones, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
   * The information about the vServer groups.
   * 
   * This parameter is required.
   */
  VServerGroups?: AttachVServerGroupsRequestVServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
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
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      VServerGroups: { 'type': 'array', 'itemType': AttachVServerGroupsRequestVServerGroups },
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

