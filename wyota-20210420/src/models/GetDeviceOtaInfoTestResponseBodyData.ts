// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceOtaInfoTestResponseBodyDataVersion } from "./GetDeviceOtaInfoTestResponseBodyDataVersion";


export class GetDeviceOtaInfoTestResponseBodyData extends $dara.Model {
  version?: GetDeviceOtaInfoTestResponseBodyDataVersion;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: GetDeviceOtaInfoTestResponseBodyDataVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

