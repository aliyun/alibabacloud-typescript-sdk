// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateVolumeInput } from "./UpdateVolumeInput";


export class UpdateVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for updating the volume.
   */
  body?: UpdateVolumeInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateVolumeInput,
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

