// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTriggerInput } from "./UpdateTriggerInput";


export class UpdateTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The trigger configurations.
   * 
   * This parameter is required.
   */
  body?: UpdateTriggerInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateTriggerInput,
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

