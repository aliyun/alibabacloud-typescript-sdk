// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Catalog extends $dara.Model {
  extensionConf?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  properties?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      extensionConf: 'extensionConf',
      name: 'name',
      properties: 'properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensionConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.extensionConf) {
      $dara.Model.validateMap(this.extensionConf);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

