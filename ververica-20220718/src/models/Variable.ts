// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Variable extends $dara.Model {
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The type of the variable. `Clear` indicates plaintext and `Encrypted` indicates ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * Encrypted
   */
  kind?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlPassword
   */
  name?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * This parameter is required.
   * 
   * @example
   * myPassword
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      kind: 'kind',
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      kind: 'string',
      name: 'string',
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

