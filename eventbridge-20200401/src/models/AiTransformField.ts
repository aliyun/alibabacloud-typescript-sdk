// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiTransformField extends $dara.Model {
  /**
   * @remarks
   * The value form. Currently uses JSONPATH.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The JSONPath expression.
   * 
   * @example
   * $.data.message
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
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

