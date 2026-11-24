// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachServerGroupsRequestServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port number used by the ECS instance or ECI instance after Auto Scaling adds it to the server group.
   * 
   * Valid values: 1 to 65535.
   * > This parameter is required for ALB and NLB load balancing. You cannot modify the Settings of this parameter for GWLB load balancing, and the default value is 6081.
   * 
   * @example
   * 22
   */
  port?: number;
  /**
   * @remarks
   * The ID of the load balancing server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-5yc3bd9lfyh*****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The type of the load balancing server group. Valid values:
   * 
   * - ALB: Application Load Balancer (ALB).
   * - NLB: Network Load Balancer (NLB).
   * - GWLB: Gateway Load Balancer (GWLB).
   * 
   * This parameter is required.
   * 
   * @example
   * ALB
   */
  type?: string;
  /**
   * @remarks
   * The weight of the ECS instance or ECI instance as a backend server after Auto Scaling adds it to the server group. Valid values: 0 to 100.
   * 
   * A higher weight indicates that Auto Scaling will allocate more access requests to the ECS instance or ECI instance. If the weight is set to 0, the instance does not receive access requests.
   * 
   * > This parameter is required for ALB and NLB load balancing. You cannot modify the Settings of this parameter for GWLB load balancing.
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
   * The client token that is used to ensure the idempotence of the request. You can generate the token value from your client and ensure that it is unique across different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to add the existing ECS instances or ECI instances in the scaling group to the newly added server groups. Valid values:
   * 
   * - true: adds the instances.
   * 
   * - false: does not add the instances.
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
   * The information about the load balancing server groups.
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

