// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes } from "./DetachVserverGroupsRequestVserverGroupsVserverGroupAttributes";


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

