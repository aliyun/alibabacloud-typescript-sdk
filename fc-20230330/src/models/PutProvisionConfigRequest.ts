// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutProvisionConfigInput } from "./PutProvisionConfigInput";


export class PutProvisionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The provisioned configuration information.
   * 
   * This parameter is required.
   */
  body?: PutProvisionConfigInput;
  /**
   * @remarks
   * The function alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PutProvisionConfigInput,
      qualifier: 'string',
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

