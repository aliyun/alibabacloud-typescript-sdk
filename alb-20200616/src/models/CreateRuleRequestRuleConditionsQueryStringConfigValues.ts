// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * They key of the query string.
   * 
   * *   The key must be 1 to 100 characters in length.
   * *   You can use asterisks (\\*) and question marks (?) as wildcard characters. It can contain printable characters, excluding uppercase letters, space characters, and the following special characters: `# [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string.
   * 
   * *   The value must be 1 to 128 characters in length.
   * *   It can contain printable characters, but cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > &`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
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

