// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcCancelSipInviteResponseBody extends $dara.Model {
  /**
   * @example
   * EB3C3C75-74D5-5F01-9F3C-9974261BAED4
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

