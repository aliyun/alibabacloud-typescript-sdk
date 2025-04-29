// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachVServerGroupsRequestVServerGroupsVServerGroupAttributes } from "./AttachVserverGroupsRequestVserverGroupsVserverGroupAttributes";


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

