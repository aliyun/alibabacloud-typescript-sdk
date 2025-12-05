// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutScalingConfigInput } from "./PutScalingConfigInput";


export class PutScalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The function scalability configuration.
   */
  body?: PutScalingConfigInput;
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
      body: PutScalingConfigInput,
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

