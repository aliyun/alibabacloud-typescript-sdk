// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ABTestExperiment extends $dara.Model {
  name?: string;
  online?: boolean;
  params?: { [key: string]: string };
  serialNumber?: number;
  traffic?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      online: 'online',
      params: 'params',
      serialNumber: 'serialNumber',
      traffic: 'traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      online: 'boolean',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serialNumber: 'number',
      traffic: 'number',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

