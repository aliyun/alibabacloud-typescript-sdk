// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMsgStatResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  accept?: number;
  /**
   * @example
   * 1
   */
  arrive?: number;
  /**
   * @example
   * 0
   */
  closePush?: number;
  /**
   * @example
   * 0
   */
  dismiss?: number;
  /**
   * @example
   * ufe29y2167046828041801
   */
  msgId?: string;
  /**
   * @example
   * 1
   */
  open?: number;
  /**
   * @example
   * 1
   */
  sent?: number;
  /**
   * @example
   * 2
   */
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
  /**
   * @example
   * 0
   */
  code?: string;
  data?: QueryMsgStatResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 86C4236B-D6C2-1E31-8370-2FAEC5CFE012
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

