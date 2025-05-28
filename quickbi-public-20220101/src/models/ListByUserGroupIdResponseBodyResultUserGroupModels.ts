// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListByUserGroupIdResponseBodyResultUserGroupModels extends $dara.Model {
  /**
   * @remarks
   * The time when the Secret was created.
   * 
   * @example
   * 2021-03-15 17:13:55
   */
  createTime?: string;
  /**
   * @remarks
   * The UserID of the creator in the Quick BI.
   * 
   * @example
   * 46e5*******ee22e2a292704c8
   */
  createUser?: string;
  /**
   * @remarks
   * The path of the user group.
   * 
   * @example
   * 2fe4fbd8-****-af083ea/34fd1-****-dcbc33f
   */
  identifiedPath?: string;
  /**
   * @remarks
   * The time when the protection policy was last modified.
   * 
   * @example
   * 2021-03-15 20:36:40
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The UserID of the modifier in the Quick BI.
   * 
   * @example
   * 46e5*******ee22e2a292704c8
   */
  modifyUser?: string;
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af083ea
   */
  parentUsergroupId?: string;
  /**
   * @remarks
   * The description of the user group.
   * 
   * @example
   * Description
   */
  usergroupDesc?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 34fd141d-****-4093-8c33-8e066dcbc33f
   */
  usergroupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Test user group
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

