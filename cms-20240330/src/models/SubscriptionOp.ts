// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubscriptionForModify } from "./SubscriptionForModify";


export class SubscriptionOp extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   */
  op?: string;
  /**
   * @remarks
   * Required for create and update operations.
   */
  payload?: SubscriptionForModify;
  /**
   * @remarks
   * Required for update and remove operations.
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      op: 'op',
      payload: 'payload',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      op: 'string',
      payload: SubscriptionForModify,
      uuid: 'string',
    };
  }

  validate() {
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

