// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrivateAccessPolicyRequestCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity source ID of the custom user group. Required when the custom user group type is **department**.
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
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * Custom user group attribute values. - When the user group type is **username**, it represents the value of the username. The length should be 1 to 128 characters, supporting Chinese and case-sensitive English letters, and can include numbers, half-width periods (.), underscores (_), hyphens (-), asterisks (*), at symbols (@), and spaces. - When the user group type is **department**, it represents the value of the department. For example: OU=Department1,OU=SASE DingTalk. - When the user group type is **email**, it represents the value of the email. For example: username@example.com. - When the user group type is **telephone**, it represents the value of the mobile phone. For example: 13900001234.
   * 
   * This parameter is required.
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

