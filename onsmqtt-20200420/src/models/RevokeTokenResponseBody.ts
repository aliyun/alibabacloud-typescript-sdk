// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This parameter is a common parameter.
   * 
   * @example
   * 833EDFCB-C447-4CE3-B21F-3A4C2D1B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

