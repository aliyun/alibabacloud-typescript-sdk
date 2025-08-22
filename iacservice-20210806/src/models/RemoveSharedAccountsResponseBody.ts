// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSharedAccountsResponseBody extends $dara.Model {
  /**
   * @example
   * 8294F4ED-8DBA-5441-B3F2-61C3C5374990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

