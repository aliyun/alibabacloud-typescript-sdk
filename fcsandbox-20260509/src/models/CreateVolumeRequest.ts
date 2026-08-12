// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVolumeInput } from "./CreateVolumeInput";


export class CreateVolumeRequest extends $dara.Model {
  /**
   * @remarks
   * The form parameters.
   */
  body?: CreateVolumeInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateVolumeInput,
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

