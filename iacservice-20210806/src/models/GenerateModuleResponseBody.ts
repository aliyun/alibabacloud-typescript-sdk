// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateModuleResponseBody extends $dara.Model {
  /**
   * @example
   * demo
   */
  module?: string;
  /**
   * @example
   * {}
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * 6B40D088-E929-504B-8802-C1759A993FA2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'module',
      properties: 'properties',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
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

