// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserLogFieldConfigResponseBody extends $dara.Model {
  /**
   * @example
   * E2D63742-9BAA-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

