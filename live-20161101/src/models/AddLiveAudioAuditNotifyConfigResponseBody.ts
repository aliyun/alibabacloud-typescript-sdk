// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAudioAuditNotifyConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BF95F2A-3B24-4CDE-9346-7F6FA86697A1
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

