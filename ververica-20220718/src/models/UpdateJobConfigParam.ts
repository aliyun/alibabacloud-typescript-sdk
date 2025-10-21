// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobConfigParam extends $dara.Model {
  newFlinkConf?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      newFlinkConf: 'newFlinkConf',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newFlinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.newFlinkConf) {
      $dara.Model.validateMap(this.newFlinkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

