// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMongoDBCurrentOpRequest extends $dara.Model {
  /**
   * @remarks
   * The `db.currentOp()` command that is used to filter sessions. For more information, see [db.currentOp()](https://docs.mongodb.com/manual/reference/method/db.currentOp/) of MongoDB Documentation.
   * 
   * @example
   * { "active" : true }
   */
  filterDoc?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-uf608087********
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  If you do not specify a node ID, the sessions of the primary node are queried by default.
   * 
   * @example
   * 23302531
   */
  nodeId?: string;
  /**
   * @remarks
   * A reserved parameter. You do not need to specify the parameter.
   * 
   * @example
   * None
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      filterDoc: 'FilterDoc',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterDoc: 'string',
      instanceId: 'string',
      nodeId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

