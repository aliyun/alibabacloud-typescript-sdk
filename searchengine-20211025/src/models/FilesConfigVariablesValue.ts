// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilesConfigVariablesValue extends $dara.Model {
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * Custom variable
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the variable is not allowed to be modified.
   * 
   * @example
   * true
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Specifies whether the variable is modified.
   * 
   * @example
   * true
   */
  isModify?: boolean;
  /**
   * @remarks
   * The variable type. Valid values: NORMAL: common variable. FUNCTION: function variable.
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableModify: 'disableModify',
      isModify: 'isModify',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableModify: 'boolean',
      isModify: 'boolean',
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

