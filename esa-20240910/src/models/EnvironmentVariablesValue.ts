// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvironmentVariablesValue extends $dara.Model {
  /**
   * @remarks
   * The environment variable type.
   * 
   * Valid values:
   * - `plain_text`: plain text
   * - `secret_text`: encrypted text
   * 
   * @example
   * plain_text
   */
  type?: string;
  /**
   * @remarks
   * The environment variable value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

