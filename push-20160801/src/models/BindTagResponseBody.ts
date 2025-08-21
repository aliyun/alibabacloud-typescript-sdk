// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindTagResponseBody extends $dara.Model {
  /**
   * @example
   * 82FD0A09-5BB8-40FB-8221-9A11FE92D620
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

