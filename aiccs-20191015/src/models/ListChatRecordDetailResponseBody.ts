// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatRecordDetailResponseBodyResultDataDataMessageList extends $dara.Model {
  /**
   * @remarks
   * The content of the sent message.
   * 
   * @example
   * Hello
   */
  content?: string;
  /**
   * @remarks
   * The time when the message was sent.
   * 
   * @example
   * 1614578400000
   */
  createTime?: number;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * MSG
   */
  msgType?: string;
  /**
   * @remarks
   * The account that sent the message.
   * 
   * @example
   * account1
   */
  senderName?: string;
  /**
   * @remarks
   * The type of the sender. Valid values:
   * - **1**: customer.
   * - **2**: customer service representative.
   * 
   * @example
   * 2
   */
  senderType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      msgType: 'MsgType',
      senderName: 'SenderName',
      senderType: 'SenderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'number',
      msgType: 'string',
      senderName: 'string',
      senderType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultDataData extends $dara.Model {
  /**
   * @remarks
   * The end time of the online session.
   * 
   * @example
   * 1614578410000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of online session details.
   */
  messageList?: ListChatRecordDetailResponseBodyResultDataDataMessageList[];
  /**
   * @remarks
   * The account of the customer service representative.
   * 
   * @example
   * 123@123.com
   */
  servicerName?: string;
  /**
   * @remarks
   * The start time of the online session.
   * 
   * @example
   * 1614578400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      messageList: 'MessageList',
      servicerName: 'ServicerName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      messageList: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataDataMessageList },
      servicerName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The query result.
   */
  data?: ListChatRecordDetailResponseBodyResultDataData[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  onePageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatRecordDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   */
  resultData?: ListChatRecordDetailResponseBodyResultData;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resultData: 'ResultData',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resultData: ListChatRecordDetailResponseBodyResultData,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resultData && typeof (this.resultData as any).validate === 'function') {
      (this.resultData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

