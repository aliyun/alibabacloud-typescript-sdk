// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNumberV2RequestCustomers extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  clientUrl?: string;
  /**
   * @example
   * 示例值示例值
   */
  number?: string;
  /**
   * @example
   * 示例值示例值
   */
  numberMD5?: string;
  properties?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
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

