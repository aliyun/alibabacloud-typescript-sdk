// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneGlobalReplyResponseBodyDataReplyMessagList extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * namespace_qa_query
   */
  replyType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      replyType: 'ReplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      replyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBodyData extends $dara.Model {
  code?: number;
  replyMessagList?: GetInterveneGlobalReplyResponseBodyDataReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      replyMessagList: { 'type': 'array', 'itemType': GetInterveneGlobalReplyResponseBodyDataReplyMessagList },
    };
  }

  validate() {
    if(Array.isArray(this.replyMessagList)) {
      $dara.Model.validateArray(this.replyMessagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetInterveneGlobalReplyResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
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
      data: GetInterveneGlobalReplyResponseBodyData,
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

