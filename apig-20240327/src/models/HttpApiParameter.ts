// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiParameter extends $dara.Model {
  defaultValue?: string;
  description?: string;
  exampleValue?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * string
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

