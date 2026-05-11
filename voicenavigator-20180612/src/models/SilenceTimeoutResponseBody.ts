// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SilenceTimeoutResponseBody extends $dara.Model {
  /**
   * @example
   * TransferToAgent
   */
  action?: string;
  /**
   * @example
   * { "skillGroupId": "ABC"}
   */
  actionParams?: string;
  /**
   * @example
   * false
   */
  interruptible?: boolean;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  textResponse?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      interruptible: 'Interruptible',
      requestId: 'RequestId',
      textResponse: 'TextResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      interruptible: 'boolean',
      requestId: 'string',
      textResponse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

