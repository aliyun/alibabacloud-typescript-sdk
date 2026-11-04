// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business isolation ID. It is used to isolate data between different business applications under the same Alibaba Cloud account. It supports uppercase and lowercase English letters and digits.
   * 
   * For example, if you have facial recognition businesses in Region A and Region B, you can set different business isolation IDs to distinguish the facial recognition businesses in Region A and Region B.
   * 
   * >Notice: 
   * Save the business isolation ID properly for use when you call other API operations in this business isolation zone.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The name of the user group. Specify a custom value. The value can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * TestUserGroup
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      isolationId: 'IsolationId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolationId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

