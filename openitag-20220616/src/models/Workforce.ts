// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SimpleUser } from "./SimpleUser";


export class Workforce extends $dara.Model {
  /**
   * @remarks
   * Node name.  
   * Valid values include: SAMPLING, CHECK, MARK.
   * 
   * @example
   * CHECK
   */
  nodeType?: string;
  /**
   * @remarks
   * List of user information
   */
  users?: SimpleUser[];
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * 2
   */
  workNodeId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      users: 'Users',
      workNodeId: 'WorkNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      users: { 'type': 'array', 'itemType': SimpleUser },
      workNodeId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

