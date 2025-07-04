// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class VariablesValueFuncValue extends $dara.Model {
  /**
   * @remarks
   * The class name of the function variable.
   * 
   * @example
   * ""
   */
  funcClassName?: string;
  /**
   * @remarks
   * The template of the function variable.
   * 
   * @example
   * ""
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      funcClassName: 'funcClassName',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcClassName: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

