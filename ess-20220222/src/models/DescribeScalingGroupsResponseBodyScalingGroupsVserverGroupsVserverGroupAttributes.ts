// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupsResponseBodyScalingGroupsVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number that is used by the load balancer to provide external services.
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
   * rsp-bp12bjrny****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of the backend vServer group.
   * 
   * @example
   * 1
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

