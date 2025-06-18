// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * b4bf375515f6440f942e3a20c33d****
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

