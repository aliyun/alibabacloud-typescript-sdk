// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSourcePluginsValue extends $dara.Model {
  name?: string;
  fromFields?: string;
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      fromFields: 'fromFields',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      fromFields: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

