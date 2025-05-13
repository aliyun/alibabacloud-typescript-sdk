// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallLogstashPluginRequest extends $dara.Model {
  /**
   * @example
   * ["logstash-input-datahub", "logstash-input-maxcompute" ]
   */
  body?: string[];
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

