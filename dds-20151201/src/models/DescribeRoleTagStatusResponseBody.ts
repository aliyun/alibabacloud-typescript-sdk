// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleTagStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 69D55DEC-B219-569F-A686-AC2F67A1****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  roleTagStatus?: string;
  /**
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

