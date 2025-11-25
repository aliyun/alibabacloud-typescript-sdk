// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserAlarmConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 3B168A0F-A43D-5FD0-8059-B51BDD6E****
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

