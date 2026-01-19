// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerReportSendResponseBody extends $dara.Model {
  /**
   * @example
   * DE9FFFE5-FCAD-4B24-9546-BF49273C562B
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

