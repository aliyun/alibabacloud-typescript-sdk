// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCategoryCallbackRequestCallback extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RecordEvent
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCategoryCallbackRequest extends $dara.Model {
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
  callback?: StopCategoryCallbackRequestCallback;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callback: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callback: StopCategoryCallbackRequestCallback,
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

