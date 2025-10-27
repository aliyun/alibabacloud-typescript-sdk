// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushV2ShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ****530646
   */
  appKey?: number;
  /**
   * @example
   * c8016d13-6e76-****-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
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

