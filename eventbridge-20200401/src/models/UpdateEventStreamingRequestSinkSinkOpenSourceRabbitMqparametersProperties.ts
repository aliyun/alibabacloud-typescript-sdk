// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkOpenSourceRabbitMQParametersProperties extends $dara.Model {
  /**
   * @remarks
   * The method that you want to use to transform events. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template based on which you want events to be transformed.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * {"env": "prod"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
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

