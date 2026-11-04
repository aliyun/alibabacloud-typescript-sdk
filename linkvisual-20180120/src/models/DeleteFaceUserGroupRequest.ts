// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business isolation ID, which is used to isolate data between different business applications under the same Alibaba Cloud account. This value must be the same as the **IsolationId** specified when you call the [AddFaceUserGroup](https://help.aliyun.com/document_detail/288341.html) operation to add a user.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The ID of the user group. Specify the user group ID that you obtained and saved locally after calling the [AddFaceUserGroup](https://help.aliyun.com/document_detail/288341.html) operation to add the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * kvjy****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

