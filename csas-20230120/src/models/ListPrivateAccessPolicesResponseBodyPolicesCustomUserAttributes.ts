// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The ID of the identity provider (IdP) for the user group. If the value of UserGroupType is **department**, this parameter is returned.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The logical operator for the user group. Valid values:
   * 
   * *   **Equal**
   * *   **Unequal**
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group, which is the key of the attribute. Valid values:
   * 
   * *   **username**
   * *   **department**
   * *   **email**
   * *   **telephone**
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * *   If the value of UserGroupType is **username**, the value of this parameter is a username. The value must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), underscores (_), and periods (.).
   * *   If the value of UserGroupType is **department**, the value of this parameter is a department. Examples: OU=Department 1, OU=SASE DingTalk.
   * *   If the value of UserGroupType is **email**, the value of this parameter is an email address. Example: username@example.com.
   * *   If the value of UserGroupType is **telephone**, the value of this parameter is a mobile phone number. Example: 13900001234.
   * 
   * @example
   * OU=Department 1, OU=SASE DingTalk
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

