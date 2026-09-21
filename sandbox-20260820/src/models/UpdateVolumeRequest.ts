// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateVolumeInput } from "./UpdateVolumeInput";


export class UpdateVolumeRequest extends $dara.Model {
  body?: UpdateVolumeInput;
  /**
   * @example
   * 9f5a1fe9-****
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateVolumeInput,
      teamID: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

