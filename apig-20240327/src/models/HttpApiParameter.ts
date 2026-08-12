// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiParameter extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 123
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * The example description.
   */
  description?: string;
  /**
   * @remarks
   * The sample value of the parameter.
   * 
   * @example
   * 123
   */
  exampleValue?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * userId
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * The parameter type.
   * 
   * Valid values:
   * 
   * *   Integer
   * *   Number
   * *   String
   * *   Boolean
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      exampleValue: 'exampleValue',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      exampleValue: 'string',
      name: 'string',
      required: 'boolean',
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

