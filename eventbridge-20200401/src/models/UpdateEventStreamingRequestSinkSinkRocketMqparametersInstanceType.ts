// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType extends $dara.Model {
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
   * None.
   */
  template?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   Cloud_4 (default): ApsaraMQ for RocketMQ 4.0 instance
   * *   Cloud_5: ApsaraMQ for RocketMQ 5.0 instance
   * *   SelfBuilt: self-managed Apache RocketMQ cluster
   * 
   * @example
   * Cloud_4
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

