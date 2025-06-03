// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCallbackMetaRequestCallback } from "./ModifyCallbackMetaRequestCallback";


export class ModifyCallbackMetaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callback?: ModifyCallbackMetaRequestCallback;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: ModifyCallbackMetaRequestCallback,
      ownerId: 'number',
    };
  }

  validate() {
    if(this.callback && typeof (this.callback as any).validate === 'function') {
      (this.callback as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

