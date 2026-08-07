// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * zgrjap8j-us04-owef-fpmo-kdpr80pbss0k
   */
  messageId?: string;
  /**
   * @remarks
   * The message level.
   * 
   * @example
   * WARNING
   */
  messageLevel?: string;
  /**
   * @remarks
   * The message name.
   * 
   * @example
   * MyMessage
   */
  messageName?: string;
  /**
   * @remarks
   * The message source ID.
   * 
   * @example
   * p-123***7890
   */
  messageSourceId?: string;
  /**
   * @remarks
   * The region ID of the message source.
   * 
   * @example
   * cn-hangzhou
   */
  messageSourceRegionId?: string;
  /**
   * @remarks
   * The message source type.
   * 
   * @example
   * PROTECTION_POLICY
   */
  messageSourceType?: string;
  /**
   * @remarks
   * The message time.
   * 
   * @example
   * 1740019609
   */
  messageTime?: number;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * SUB_PROTECTION_POLICY_MODIFIED
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      messageLevel: 'MessageLevel',
      messageName: 'MessageName',
      messageSourceId: 'MessageSourceId',
      messageSourceRegionId: 'MessageSourceRegionId',
      messageSourceType: 'MessageSourceType',
      messageTime: 'MessageTime',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      messageLevel: 'string',
      messageName: 'string',
      messageSourceId: 'string',
      messageSourceRegionId: 'string',
      messageSourceType: 'string',
      messageTime: 'number',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response content.
   */
  content?: ListMessagesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of results requested.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * eKDyCM0zFQ5op7jVMWmNNA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
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

export class ListMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListMessagesResponseBodyData;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 5748C531-80B1-5C31-8421-63A1830B9E48
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMessagesResponseBodyData,
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

