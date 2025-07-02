// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeviceOtaInfoResponseBodyDataVersion } from "./GetDeviceOtaInfoResponseBodyDataVersion";


export class GetDeviceOtaInfoResponseBodyData extends $dara.Model {
  version?: GetDeviceOtaInfoResponseBodyDataVersion;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: GetDeviceOtaInfoResponseBodyDataVersion,
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

