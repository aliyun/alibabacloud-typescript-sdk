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

export class VariablesValue extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the variable is not allowed to be modified.
   * 
   * @example
   * false
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Specifies whether the variable is modified.
   * 
   * @example
   * false
   */
  isModify?: boolean;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * ""
   */
  value?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The template value of the variable.
   * 
   * @example
   * ""
   */
  templateValue?: string;
  /**
   * @remarks
   * The variable type. Valid values:
   * 
   * *   NORMAL: common variable
   * *   FUNCTION: function variable
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * The function variables.
   */
  funcValue?: VariablesValueFuncValue;
  static names(): { [key: string]: string } {
    return {
      disableModify: 'disableModify',
      isModify: 'isModify',
      value: 'value',
      description: 'description',
      templateValue: 'templateValue',
      type: 'type',
      funcValue: 'funcValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableModify: 'boolean',
      isModify: 'boolean',
      value: 'string',
      description: 'string',
      templateValue: 'string',
      type: 'string',
      funcValue: VariablesValueFuncValue,
    };
  }

  validate() {
    if(this.funcValue && typeof (this.funcValue as any).validate === 'function') {
      (this.funcValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

