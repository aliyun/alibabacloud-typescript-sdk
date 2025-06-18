// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema extends $dara.Model {
  /**
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @example
   * {"k1":"${k1}","k2":"${k2}"}
   */
  template?: string;
  /**
   * @example
   * {"k1":"value1","k2":"value2"}
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

