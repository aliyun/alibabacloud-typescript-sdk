// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCategoryCallbackShrinkRequest extends $dara.Model {
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
  callbackShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackShrink: 'Callback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

