// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNumberRequestCustomers extends $dara.Model {
  /**
   * @example
   * http://test.com
   */
  clientUrl?: string;
  /**
   * @example
   * 13541251222,18665214444
   */
  number?: string;
  /**
   * @example
   * 示例值
   */
  numberMD5?: string;
  /**
   * @example
   * {"testt":"123"}
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * tag1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      clientUrl: 'ClientUrl',
      number: 'Number',
      numberMD5: 'NumberMD5',
      properties: 'Properties',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUrl: 'string',
      number: 'string',
      numberMD5: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tag: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

