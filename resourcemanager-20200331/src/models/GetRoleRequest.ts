// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the description of the role. Valid values:
   * 
   * *   en: English
   * *   zh-CN: Chinese
   * *   ja: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ECSAdmin
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

