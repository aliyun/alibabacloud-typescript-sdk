// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkRocketMQParametersDeliveryOrderType extends $dara.Model {
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
   * None
   */
  template?: string;
  /**
   * @remarks
   * The type of the message delivery order. Valid values:
   * 
   * *   **Orderly**
   * *   **Concurrently**
   * 
   * @example
   * Concurrently
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

