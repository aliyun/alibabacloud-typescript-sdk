// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLevelPermissionWhiteListResponseBodyResultUsersModel extends $dara.Model {
  /**
   * @remarks
   * The list of user group IDs.
   * 
   * @example
   * ["0d5fb19b-***-1248fc27ca51"]
   */
  userGroups?: string[];
  /**
   * @remarks
   * The list of Quick BI user IDs.
   * 
   * @example
   * ["4334***358"]
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroups: 'UserGroups',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroups: { 'type': 'array', 'itemType': 'string' },
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataLevelPermissionWhiteListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The type of row and column permission for the dataset. Valid values:
   * 
   * - ROW_LEVEL: row-level permission
   * - COLUMN_LEVEL: column-level permission
   * 
   * @example
   * ROW_LEVEL
   */
  ruleType?: string;
  /**
   * @remarks
   * The whitelist information.
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

export class ListDataLevelPermissionWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D8749D65-E80A-433C-AF1B-CE9C180FF3B4
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelist of the specified row-level or column-level permission type.
   */
  result?: ListDataLevelPermissionWhiteListResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDataLevelPermissionWhiteListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

