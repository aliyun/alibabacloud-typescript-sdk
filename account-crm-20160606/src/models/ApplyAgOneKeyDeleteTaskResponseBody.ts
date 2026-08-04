// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAgOneKeyDeleteTaskResponseBody extends $dara.Model {
  code?: string;
  data?: string;
  message?: string;
  needAbandonSpAfterPay?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      needAbandonSpAfterPay: 'NeedAbandonSpAfterPay',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      needAbandonSpAfterPay: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

