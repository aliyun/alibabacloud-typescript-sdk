// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity source for the custom user group. Required when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * Relation of the custom user group. Values:
   * - **Equal**: Equal.
   * - **Unequal**: Not equal.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * Type of the custom user group. Values:
   * - **username**: Username.
   * - **department**: Department.
   * - **email**: Email.
   * - **telephone**: Telephone.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * Value of the custom user group attribute.
   * - When the user group type is **username**, it represents the value of the username. The length is 1 to 128 characters, supporting Chinese and uppercase and lowercase English letters, and can include numbers, periods (.), underscores (_), hyphens (-), asterisks (*), at (@) symbols, and spaces.
   * - When the user group type is **department**, it represents the value of the department. For example: OU=Department1,OU=SASE DingTalk.
   * - When the user group type is **email**, it represents the value of the email. For example: username@example.com.
   * - When the user group type is **telephone**, it represents the value of the telephone. For example: 13900001234.
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

