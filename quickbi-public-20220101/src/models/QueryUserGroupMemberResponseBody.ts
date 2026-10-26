// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserGroupMemberResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * ID of the user group or the user group member.
   * 
   * @example
   * 3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether it is a user group. Possible values:
   * 
   * - true: It is a user group.
   * - false: It is a user.
   * 
   * @example
   * true
   */
  isUserGroup?: boolean;
  /**
   * @remarks
   * Name or nickname of the user group or its member.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * ID of the parent user group.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * Name of the parent user group.
   * 
   * @example
   * test
   */
  parentUserGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      isUserGroup: 'IsUserGroup',
      name: 'Name',
      parentUserGroupId: 'ParentUserGroupId',
      parentUserGroupName: 'ParentUserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isUserGroup: 'boolean',
      name: 'string',
      parentUserGroupId: 'string',
      parentUserGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserGroupMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 48C930FF-DFCF-5986-902B-E24C202E2443
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request for the user group member list.
   */
  result?: QueryUserGroupMemberResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
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
      result: { 'type': 'array', 'itemType': QueryUserGroupMemberResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

