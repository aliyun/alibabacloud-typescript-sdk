// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleConditionsCookieConfigValues extends $dara.Model {
  /**
   * @remarks
   * The cookie key.
   * 
   * *   The cookie key must be 1 to 100 characters in length.
   * *   You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * *   The value can contain printable characters, excluding uppercase letters, space characters, and the following special characters: `; # [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value.
   * 
   * *   The cookie value must be 1 to 100 characters in length.
   * *   You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * *   The value can contain printable characters, excluding uppercase letters, space characters, and the following special characters: `; # [ ] { } \\ | < > & "`.
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

