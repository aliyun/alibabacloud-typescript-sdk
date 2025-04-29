// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * null
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * null
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * Valid values:
   * 
   * *   String
   * *   Number
   * *   Boolean
   * 
   * @example
   * null
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

