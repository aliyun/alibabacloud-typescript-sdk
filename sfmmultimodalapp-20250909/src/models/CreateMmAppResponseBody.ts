// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmAppResponseBody extends $dara.Model {
  /**
   * @example
   * mm-xxxx
   */
  appId?: string;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

