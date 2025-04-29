// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingGroupRequestVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number used by each ECS instance as a backend server in the vServer group. Valid values: 1 to 65535.
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
   * rsp-bp1443g77****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The weight of each ECS instance as a backend server in the vServer group. If you increase the weight for an ECS instance, the number of requests that are forwarded to the ECS instance also increases. If you set the weight for an ECS instance to 0, no requests are forwarded to the ECS instance. Valid values: 0 to 100.
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

