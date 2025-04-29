// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes } from "./DescribeScalingGroupsResponseBodyScalingGroupsVserverGroupsVserverGroupAttributes";


export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the load balancer to which the backend vServer group belongs.
   * 
   * @example
   * 147b46d767c-cn-qingdao-cm5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend vServer groups.
   */
  VServerGroupAttributes?: DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes },
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

