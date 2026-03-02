// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Property extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * userA
   */
  defaultValue?: string;
  /**
   * @remarks
   * Indicates whether the format is defined.
   * 
   * @example
   * flase
   */
  definesFormat?: boolean;
  /**
   * @remarks
   * The description of the parameter.
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter key.
   * 
   * @example
   * username
   */
  key?: string;
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
   * Indiactes whether the data is sensitive.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      definesFormat: 'definesFormat',
      description: 'description',
      key: 'key',
      required: 'required',
      sensitive: 'sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      definesFormat: 'boolean',
      description: 'string',
      key: 'string',
      required: 'boolean',
      sensitive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

