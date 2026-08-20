// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushTask } from "./PushTask";


export class MassPushV2Request extends $dara.Model {
  /**
   * @remarks
   * The AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267***
   */
  appKey?: number;
  /**
   * @remarks
   * An idempotent parameter used to prevent duplicate pushes caused by API call retries on the client side. If the same IdempotentToken is used for calls within 15 minutes, only one push is performed, and subsequent calls return the result of the first successful push.
   * 
   * > 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit in the range 0-9 or a-f, case-insensitive.
   * > - This parameter only prevents duplicate pushes caused by retries. It cannot prevent duplicate pushes caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-****-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * The batch push tasks.
   * 
   * This parameter is required.
   */
  pushTasks?: PushTask[];
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      idempotentToken: 'IdempotentToken',
      pushTasks: 'PushTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      idempotentToken: 'string',
      pushTasks: { 'type': 'array', 'itemType': PushTask },
    };
  }

  validate() {
    if(Array.isArray(this.pushTasks)) {
      $dara.Model.validateArray(this.pushTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

