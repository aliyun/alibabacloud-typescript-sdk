// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachServerGroupsRequestServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port used by ECS instances or elastic container instances after being added as backend servers to the server group.
   * 
   * Valid values: 1 to 65535.
   * 
   * This parameter is required.
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
   * The type of the server group. Valid values:
   * 
   * *   ALB
   * *   NLB
   * 
   * This parameter is required.
   * 
   * @example
   * ALB
   */
  type?: string;
  /**
   * @remarks
   * The weight of an ECS instance or elastic container instance as a backend server of the server group. Valid values: 0 to 100.
   * 
   * If you assign a higher weight to an instance, the instance is allocated a larger proportion of access requests. If you assign zero weight to an instance, the instance is allocated no access requests.
   * 
   * This parameter is required.
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

