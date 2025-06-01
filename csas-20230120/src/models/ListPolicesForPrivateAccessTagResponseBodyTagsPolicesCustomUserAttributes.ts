// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * 用户组的身份源ID。当自定义用户组类型为**department**时，存在该值。
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * 用户组的关系。取值：
   * - **Equal**：等于。
   * - **Unequal**：不等于。
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * 用户组的类型。取值：
   * - **username**：用户名。
   * - **department**：部门。
   * - **email**：邮箱。
   * - **telephone**：手机。
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * 用户组属性的值。
   * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
   * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
   * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

