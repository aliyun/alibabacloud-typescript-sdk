// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromVbrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45B7AA4A-4658-5FFC-90DD-9B8729F301BB
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

