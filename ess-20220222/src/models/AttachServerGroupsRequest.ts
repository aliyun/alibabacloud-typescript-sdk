// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachServerGroupsRequestServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port used by ECS or ECI instances after being added as backend servers to the server group.
   * 
   * Valid values: 1 to 65535.
   * 
   * > For ALB and NLB types, this parameter is required. GWLB type cannot set this parameter and the default value is 6081.
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
   * sgp-5yc3bd9lfyh*****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The type of the server group. Valid Values:
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
  /**
   * @remarks
   * The weight of an ECS or ECI instance as a backend server of the server group. Valid values: 0 to 100
   * 
   * If you assign a higher weight to an instance, the instance is allocated a larger proportion of access requests. If the weight is 0, the ECS or ECI instance does not receive access requests.
   * 
   * > For ALB and NLB types, this parameter is required. GWLB type cannot be set.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
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

export class AttachServerGroupsRequest extends $dara.Model {
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
   * Specifies whether to add the existing Elastic Compute Service (ECS) instances or elastic container instances (ECI) in the scaling group to the server group. Valid values:
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
   * asg-bp1fo0dbtsbmqa9h****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The information about the server groups.
   * 
   * This parameter is required.
   */
  serverGroups?: AttachServerGroupsRequestServerGroups[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
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
      forceAttach: 'boolean',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      serverGroups: { 'type': 'array', 'itemType': AttachServerGroupsRequestServerGroups },
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

