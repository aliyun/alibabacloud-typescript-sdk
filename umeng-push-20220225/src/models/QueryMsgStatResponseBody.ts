// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMsgStatResponseBodyData extends $dara.Model {
  accept?: number;
  arrive?: number;
  closePush?: number;
  dismiss?: number;
  msgId?: string;
  open?: number;
  sent?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accept: 'Accept',
      arrive: 'Arrive',
      closePush: 'ClosePush',
      dismiss: 'Dismiss',
      msgId: 'MsgId',
      open: 'Open',
      sent: 'Sent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accept: 'number',
      arrive: 'number',
      closePush: 'number',
      dismiss: 'number',
      msgId: 'string',
      open: 'number',
      sent: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMsgStatResponseBody extends $dara.Model {
  code?: string;
  data?: QueryMsgStatResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMsgStatResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

