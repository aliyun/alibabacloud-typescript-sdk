// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleTagStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69D55DEC-B219-569F-A686-AC2F67A1****
   */
  requestId?: string;
  /**
   * @remarks
   * The tag status of the ReplicaSet node. Valid values:
   * 
   * - **true**: The tag is created.
   * 
   * - **false**: The tag is not created.
   * 
   * > If the instance is a sharded cluster, this parameter returns false.
   * 
   * @example
   * false
   */
  roleTagStatus?: string;
  /**
   * @remarks
   * The tag status of each node in the sharded cluster. Valid values:
   * 
   * - **true**: The tag is created.
   * 
   * - **false**: The tag is not created.
   * 
   * @example
   * {
   *     "d-2ze204b4db58****": "false",
   *     "d-2zeb9716646e***": "false"
   * }
   */
  shardRoleTagStatus?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roleTagStatus: 'RoleTagStatus',
      shardRoleTagStatus: 'ShardRoleTagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roleTagStatus: 'string',
      shardRoleTagStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.shardRoleTagStatus) {
      $dara.Model.validateMap(this.shardRoleTagStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

