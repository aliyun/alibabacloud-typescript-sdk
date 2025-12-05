// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeResourceGroupInput } from "./ChangeResourceGroupInput";


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The request details for updating the resource group.
   */
  body?: ChangeResourceGroupInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ChangeResourceGroupInput,
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

