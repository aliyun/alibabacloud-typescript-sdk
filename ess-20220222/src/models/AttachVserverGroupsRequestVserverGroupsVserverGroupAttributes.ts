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

