// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId extends $dara.Model {
  /**
   * @remarks
   * The method that is used to transform the event. Default value: CONSTANT.
   * 
   * @example
   * CONSTANT
   */
  form?: string;
  /**
   * @remarks
   * The template style.
   */
  template?: string;
  /**
   * @remarks
   * The ID of the Message Queue for RabbitMQ instance.
   * 
   * @example
   * e5c9b727-e06c-4d7e-84d5-f8ce644e00bf
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

