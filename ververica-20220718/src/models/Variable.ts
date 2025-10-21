// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Variable extends $dara.Model {
  /**
   * @example
   * This is a variable description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Plain
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * variableName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * variableValue
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

