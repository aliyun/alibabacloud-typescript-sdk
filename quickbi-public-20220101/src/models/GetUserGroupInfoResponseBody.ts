// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Creation time of the user group.
   * 
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @remarks
   * Creator of the sub-user group. This is the UserID in Quick BI, not the UID in Alibaba Cloud.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  createUser?: string;
  /**
   * @remarks
   * Directory level of the user group.
   */
  identifiedPath?: string;
  /**
   * @remarks
   * Last modified time of the user group.
   * 
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Modifier of the user group. This is the UserID in Quick BI, not the UID in Alibaba Cloud.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  modifyUser?: string;
  /**
   * @remarks
   * Parent user group ID.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  parentUsergroupId?: string;
  /**
   * @remarks
   * Description of the user group.
   * 
   * @example
   * test
   */
  usergroupDesc?: string;
  /**
   * @remarks
   * User group ID.
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****
   */
  usergroupId?: string;
  /**
   * @remarks
   * Name of the user group.
   * 
   * @example
   * test
   */
  usergroupName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      identifiedPath: 'IdentifiedPath',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      parentUsergroupId: 'ParentUsergroupId',
      usergroupDesc: 'UsergroupDesc',
      usergroupId: 'UsergroupId',
      usergroupName: 'UsergroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      identifiedPath: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      parentUsergroupId: 'string',
      usergroupDesc: 'string',
      usergroupId: 'string',
      usergroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D7980306-1F08-5A88-9FE7-ECB8B9C4C0F5
   */
  requestId?: string;
  /**
   * @remarks
   * User group information.
   */
  result?: GetUserGroupInfoResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': GetUserGroupInfoResponseBodyResult },
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

