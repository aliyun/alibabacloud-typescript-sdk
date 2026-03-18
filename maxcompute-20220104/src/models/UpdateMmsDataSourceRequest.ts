// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the update operation:
   * 
   * 1. UPDATE_CONFIG: updates the data source configuration.
   * 2. START: starts the data source instance.
   * 3. STOP: shuts down the data source instance.
   * 4. RENAME: renames the data source.
   * 
   * @example
   * UPDATE_CONFIG
   */
  action?: string;
  /**
   * @remarks
   * The data source configuration. The configuration items vary based on the data source.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The new name of the data source.
   * 
   * @example
   * dept1
   */
  name?: string;
  /**
   * @remarks
   * Tests the data source configuration.
   * 
   * @example
   * true
   */
  test?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      config: 'config',
      name: 'name',
      test: 'test',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      test: 'boolean',
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

