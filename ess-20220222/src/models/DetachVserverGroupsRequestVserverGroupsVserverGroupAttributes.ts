// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVServerGroupsRequestVServerGroupsVServerGroupAttributes extends $dara.Model {
  /**
   * @remarks
   * The port number that Auto Scaling employs to incorporate instances into the vServer group. Valid values: 1 to 65535.
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
   * rsp-bp1jp1rge****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

