// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachServerGroupsRequestServerGroups extends $dara.Model {
  /**
   * @remarks
   * The port used by ECS instances or elastic container instances as backend servers of the server group.
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
   * sgp-1gv2uidn2msy****
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
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

