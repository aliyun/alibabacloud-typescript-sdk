// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLayerVersionInput } from "./CreateLayerVersionInput";


export class CreateLayerVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The information about layer configurations.
   * 
   * This parameter is required.
   */
  body?: CreateLayerVersionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateLayerVersionInput,
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

