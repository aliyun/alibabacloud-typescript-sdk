// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushV2ShrinkRequest extends $dara.Model {
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
  pushTaskShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      idempotentToken: 'IdempotentToken',
      pushTaskShrink: 'PushTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      idempotentToken: 'string',
      pushTaskShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

