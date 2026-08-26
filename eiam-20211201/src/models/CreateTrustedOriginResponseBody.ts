// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrustedOriginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-example
   */
  requestId?: string;
  /**
   * @remarks
   * The trusted origin ID.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trustedOriginId: 'TrustedOriginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trustedOriginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

