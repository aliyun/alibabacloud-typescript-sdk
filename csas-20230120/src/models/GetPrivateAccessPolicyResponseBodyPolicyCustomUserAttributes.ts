// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID for the custom user group. This field is required when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * Custom user group relationship. Values: - **Equal**: Equal to. - **Unequal**: Not equal to.
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
   * The value of the custom user group attribute.
   * - When the user group type is **username**, it represents the value of the username. The length should be 1 to 128 characters, supporting Chinese and case-sensitive English letters, and can include numbers, periods (.), underscores (_), and hyphens (-).
   * - When the user group type is **department**, it represents the value of the department. For example: OU=Department1,OU=SASE DingTalk.
   * - When the user group type is **email**, it represents the value of the email. For example: username@example.com.
   * - When the user group type is **telephone**, it represents the value of the phone number. For example: 13900001234.
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

