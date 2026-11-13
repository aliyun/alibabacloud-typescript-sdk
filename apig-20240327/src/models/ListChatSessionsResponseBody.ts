// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatSessionsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The name of the chat session.
   * 
   * @example
   * Product consultation session
   */
  name?: string;
  /**
   * @remarks
   * The list of API products associated with the session. The list element is named product.
   */
  products?: string[];
  /**
   * @remarks
   * The chat session ID. You can use this ID to locate the session in operations such as UpdateChatSession, DeleteChatSession, and ListConversations.
   * 
   * @example
   * ses-xxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The conversation type of the session. Valid values: MODEL and AGENT. This set of valid values is declared in the talkType enum of the CreateChatSession request parameter, and no @enums annotation is attached to this response parameter.
   * 
   * @example
   * MODEL
   */
  talkType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      products: 'products',
      sessionId: 'sessionId',
      talkType: 'talkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      products: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      talkType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatSessionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of chat sessions. The list element is named session, and each element represents a chat session.
   */
  content?: ListChatSessionsResponseBodyDataContent[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListChatSessionsResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatSessionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListChatSessionsResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The cursor for the next page. An empty value indicates that the last page is reached.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListChatSessionsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
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

