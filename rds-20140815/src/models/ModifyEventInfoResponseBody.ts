// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEventInfoResponseBody extends $dara.Model {
  errorCode?: string;
  errorEventId?: string;
  requestId?: string;
  successCount?: number;
  successEventId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorEventId: 'ErrorEventId',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      successEventId: 'SuccessEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorEventId: 'string',
      requestId: 'string',
      successCount: 'number',
      successEventId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

