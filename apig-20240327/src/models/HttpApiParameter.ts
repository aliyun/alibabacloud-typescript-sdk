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
   * The description.
   * 
   * @example
   * User ID
   */
  description?: string;
  /**
   * @remarks
   * The example value of the parameter.
   * 
   * @example
   * 123
   */
  exampleValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * userId
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * The type of the parameter.
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

