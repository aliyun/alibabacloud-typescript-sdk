// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushTask } from "./PushTask";


export class PushV2Request extends $dara.Model {
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

