// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataLevelPermissionWhiteListResponseBodyResultUsersModel } from "./ListDataLevelPermissionWhiteListResponseBodyResultUsersModel";


export class ListDataLevelPermissionWhiteListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * Type of dataset row and column permissions. Possible values:
   * 
   * - ROW_LEVEL: Row-level permission
   * - COLUMN_LEVEL: Column-level permission
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @remarks
   * Whitelist information.
   */
  usersModel?: ListDataLevelPermissionWhiteListResponseBodyResultUsersModel;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      ruleType: 'RuleType',
      usersModel: 'UsersModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      ruleType: 'string',
      usersModel: ListDataLevelPermissionWhiteListResponseBodyResultUsersModel,
    };
  }

  validate() {
    if(this.usersModel && typeof (this.usersModel as any).validate === 'function') {
      (this.usersModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

