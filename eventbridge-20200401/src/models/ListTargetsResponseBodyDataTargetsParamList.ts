// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetsResponseBodyDataTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The format that is used by the event target parameter.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource parameter of the event target.
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The template that is used by the event target parameter.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value of the event target parameter.
   * 
   * @example
   * {\\"key\\"=\\"value\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
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

