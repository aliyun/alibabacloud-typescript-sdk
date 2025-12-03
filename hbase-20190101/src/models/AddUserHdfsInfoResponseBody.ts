// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserHdfsInfoResponseBody extends $dara.Model {
  /**
   * @example
   * FB0B7918-198C-46A8-AB9B-FE15403B1F0A
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

