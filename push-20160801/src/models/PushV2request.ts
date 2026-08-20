// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushTask } from "./PushTask";


export class PushV2Request extends $dara.Model {
  /**
   * @remarks
   * The AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * ****530646
   */
  appKey?: number;
  /**
   * @remarks
   * An idempotence parameter that prevents duplicate push notifications caused by retries from the API caller. If you use the same IdempotentToken within 15 minutes, only one push notification is sent, and subsequent calls return the result of the first successful push.
   * 
   * > 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit in the range 0-9 or a-f, case-insensitive.
   * > - This parameter only prevents duplicate push notifications caused by retries. It cannot prevent duplicate push notifications caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-****-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * The push task.
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

