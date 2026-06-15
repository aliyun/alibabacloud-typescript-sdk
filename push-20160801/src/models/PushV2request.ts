// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushTask } from "./PushTask";


export class PushV2Request extends $dara.Model {
  /**
   * @remarks
   * AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * ****530646
   */
  appKey?: number;
  /**
   * @remarks
   * An idempotency token to prevent duplicate pushes caused by client-side retries. If you call this API with the same IdempotentToken within 15 minutes, only one push is sent. Subsequent calls return the result of the first successful push.
   * 
   * > - Format the token as a standard 36-character UUID (8-4-4-4-12). Valid characters are hexadecimal digits 0–9 and a–f. Case-insensitive.
   * >
   * > - This parameter prevents duplicates only from retries. It does not prevent duplicates from concurrent calls.
   * 
   * @example
   * c8016d13-6e76-****-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * Push task definition.
   * 
   * This parameter is required.
   */
  pushTask?: PushTask;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      idempotentToken: 'IdempotentToken',
      pushTask: 'PushTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      idempotentToken: 'string',
      pushTask: PushTask,
    };
  }

  validate() {
    if(this.pushTask && typeof (this.pushTask as any).validate === 'function') {
      (this.pushTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

