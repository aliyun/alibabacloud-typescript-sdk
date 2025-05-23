// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunClusterInspectRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token that ensures an API request completes no more than one time.
   * 
   * @example
   * c82e6987e2961451182edacd74faf
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

