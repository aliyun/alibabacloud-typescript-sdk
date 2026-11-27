// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCallbackMetaRequestCallback extends $dara.Model {
  /**
   * @remarks
   * The callback code.
   * 
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  conf?: string;
  /**
   * @remarks
   * The sub-events.
   * Recording events:
   * - **2010**: Recording service status change.
   * - **2011**: Recording audio stream status change.
   * - **2012**: Recording video stream status change.
   */
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
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 223***JQb
   */
  appId?: string;
  /**
   * @remarks
   * The callback configuration.
   * 
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

