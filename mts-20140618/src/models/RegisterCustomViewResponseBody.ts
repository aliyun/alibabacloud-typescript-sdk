// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterCustomViewResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  customViewId?: string;
  /**
   * @example
   * 580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customViewId: 'CustomViewId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

