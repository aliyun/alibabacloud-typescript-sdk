// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PrepayOrderInfo } from "./PrepayOrderInfo";


export class RenewAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The renewal request body.
   */
  body?: PrepayOrderInfo;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 74db41d8cd3c784209093aa76afbe89e
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PrepayOrderInfo,
      clientToken: 'string',
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

