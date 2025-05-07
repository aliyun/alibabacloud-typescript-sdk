// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NASMountConfig } from "./NasmountConfig";


export class NASConfig extends $dara.Model {
  mountPoints?: NASMountConfig[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': NASMountConfig },
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

