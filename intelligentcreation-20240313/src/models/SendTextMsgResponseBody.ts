// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTextMsgResponseBody extends $dara.Model {
  /**
   * @example
   * 827BF714-19E7-51B5-A434-C21BFEE05983
   */
  requestId?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

