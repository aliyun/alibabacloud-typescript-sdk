// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserCustomLogConfigResponseBodyConfigIds extends $dara.Model {
  configId?: string[];
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.configId)) {
      $dara.Model.validateArray(this.configId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

