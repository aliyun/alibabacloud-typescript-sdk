// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsDataSourceRequest extends $dara.Model {
  config?: { [key: string]: any };
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * vpc-uf6pc2vordian33gobzfr:cn-shanghai
   */
  networklink?: string;
  /**
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      name: 'name',
      networklink: 'networklink',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      networklink: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

