// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundOrderCmd } from "./RefundOrderCmd";


export class CreateRefundOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: RefundOrderCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: RefundOrderCmd,
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

