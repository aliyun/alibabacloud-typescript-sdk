// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkApacheRocketMQCheckpointParametersConsumeTimestamp extends $dara.Model {
  /**
   * @example
   * CONSTANT
   */
  form?: string;
  template?: string;
  /**
   * @example
   * 1636597951964
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

