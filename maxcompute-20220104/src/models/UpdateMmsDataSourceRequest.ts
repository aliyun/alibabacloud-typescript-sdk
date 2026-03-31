// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsDataSourceRequest extends $dara.Model {
  action?: string;
  config?: { [key: string]: any };
  name?: string;
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

