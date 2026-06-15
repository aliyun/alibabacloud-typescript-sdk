// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267***
   */
  appKey?: number;
  /**
   * @remarks
   * An idempotency token to prevent duplicate pushes caused by API retries. If you call this API with the same IdempotentToken within 15 minutes, only one push is sent. Subsequent calls return the result of the first successful push.
   * 
   * > - The token must be a standard 36-character UUID in 8-4-4-4-12 format. Valid characters are hexadecimal digits 0–9 and a–f. Case does not matter.
   * >
   * > - This parameter prevents duplicates only from retries. It does not prevent duplicates from concurrent calls.
   * 
   * @example
   * c8016d13-6e76-****-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * Batch push tasks.
   * 
   * This parameter is required.
   */
  pushTasksShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      idempotentToken: 'IdempotentToken',
      pushTasksShrink: 'PushTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      idempotentToken: 'string',
      pushTasksShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

