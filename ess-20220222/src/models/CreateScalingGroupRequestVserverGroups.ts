// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateScalingGroupRequestVServerGroupsVServerGroupAttributes } from "./CreateScalingGroupRequestVserverGroupsVserverGroupAttributes";


export class CreateScalingGroupRequestVServerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance to which the backend vServer group belongs.
   * 
   * @example
   * lb-bp1u7etiogg38yvwz****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The attributes of the backend vServer group.
   */
  VServerGroupAttributes?: CreateScalingGroupRequestVServerGroupsVServerGroupAttributes[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      VServerGroupAttributes: 'VServerGroupAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      VServerGroupAttributes: { 'type': 'array', 'itemType': CreateScalingGroupRequestVServerGroupsVServerGroupAttributes },
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

