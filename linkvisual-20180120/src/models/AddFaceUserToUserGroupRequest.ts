// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceUserToUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business isolation ID. It is used to isolate data between different business applications under the same Alibaba Cloud account.
   * 
   * >Notice: 
   * The user and the user group must be under the same isolation ID. Make sure that this parameter is consistent with the **IsolationId** parameter that you specified when you called the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add the user and the [AddFaceUserGroup](https://help.aliyun.com/document_detail/288341.html) operation to create the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The user group ID. Set this parameter to the user group ID that you obtained and saved locally after you called the [AddFaceUserGroup](https://help.aliyun.com/document_detail/288341.html) operation to create the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * kvjy****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user ID. Set this parameter to the user ID that you obtained and saved locally after you called the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 3mtjaqebeq4d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

