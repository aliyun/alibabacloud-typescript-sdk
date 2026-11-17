// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnvironmentVariablesValue extends $dara.Model {
  /**
   * @remarks
   * The type of the environment variable. Valid values:
   * - `plain_text`: Plain text.
   * - `secret_text`: Encrypted text.
   * 
   * @example
   * plain_text
   */
  type?: string;
  /**
   * @remarks
   * The value of the environment variable.
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

