// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCallbackMetaRequestCallback extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  subEvent?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      conf: 'Conf',
      subEvent: 'SubEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      conf: 'string',
      subEvent: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.subEvent)) {
      $dara.Model.validateArray(this.subEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

