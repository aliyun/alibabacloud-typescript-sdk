// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushTask } from "./PushTask";


export class MassPushV2Request extends $dara.Model {
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

