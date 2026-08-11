// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class VariablesValueFuncValue extends $dara.Model {
  /**
   * @remarks
   * The method class name.
   * 
   * @example
   * ModifyFile
   */
  funcClassName?: string;
  /**
   * @remarks
   * The template.
   * 
   * @example
   * test-template
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
   * Specifies whether modification is not allowed.
   * 
   * @example
   * false
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Indicates whether the variable has been modified.
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
   * qrs_connection_timeout
   */
  value?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 超时时间
   */
  description?: string;
  /**
   * @remarks
   * The template value.
   * 
   * @example
   * 800
   */
  templateValue?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - NORMAL: normal variable
   * - FUNCTION: function variable
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * The function variable.
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

