// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSinkSinkOpenSourceRabbitMQParametersRoutingKey extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @example
   * {"Form": "CONSTANT", "Value": "my-routing-key"}
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

