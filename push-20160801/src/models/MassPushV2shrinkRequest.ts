// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appKey?: number;
  idempotentToken?: string;
  /**
   * @remarks
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

