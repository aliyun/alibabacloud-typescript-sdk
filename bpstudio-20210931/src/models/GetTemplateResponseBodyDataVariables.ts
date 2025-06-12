// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateResponseBodyDataVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * instance_name
   */
  attribute?: string;
  /**
   * @remarks
   * The type of the variable.
   * 
   * @example
   * String
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the variable.
   * 
   * @example
   * cadt-app-01
   */
  defaultValue?: string;
  options?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * ${name}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      dataType: 'DataType',
      defaultValue: 'DefaultValue',
      options: 'Options',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      dataType: 'string',
      defaultValue: 'string',
      options: 'string',
      variable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

