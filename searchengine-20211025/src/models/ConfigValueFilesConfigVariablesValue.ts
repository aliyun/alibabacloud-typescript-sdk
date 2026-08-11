// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigValueFilesConfigVariablesValue extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether the user can modify this
   * 
   * @example
   * true
   */
  disableModify?: boolean;
  /**
   * @remarks
   * Whether this has been modified
   * 
   * @example
   * false
   */
  isModify?: boolean;
  /**
   * @remarks
   * Normal variable: NORMAL, function variable: FUNCTION
   * 
   * @example
   * NORMAL
   */
  type?: string;
  /**
   * @remarks
   * Variable
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

