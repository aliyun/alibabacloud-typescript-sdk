// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundRenderCmd } from "./RefundRenderCmd";


export class RenderRefundOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: RefundRenderCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: RefundRenderCmd,
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

