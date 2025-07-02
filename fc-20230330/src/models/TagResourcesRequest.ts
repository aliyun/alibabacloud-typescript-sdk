// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TagResourcesInput } from "./TagResourcesInput";


export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the resource tag.
   * 
   * This parameter is required.
   */
  body?: TagResourcesInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TagResourcesInput,
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

