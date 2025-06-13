// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The key of the query string. The key must be 1 to 100 characters in length, and can contain printable characters such as lowercase letters, asterisks (\\*), and question marks (?). The key cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string. The value must be 1 to 128 characters in length, and can contain printable characters such as lowercase letters, asterisks (\\*), and question marks (?). The value cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

