// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCopilotMessagesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The client message ID.
   * 
   * @example
   * 366932fb-9a83-4a2d-94dd-c925b35f****
   */
  clientMessageId?: string;
  /**
   * @remarks
   * The sent content.
   * 
   * @example
   * The correlation analysis of alerts and network logs has been completed
   */
  content?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-11T02:01:36Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * AB917534-C484-5BA0-9077-0D5D1D2F****
   */
  messageId?: string;
  /**
   * @remarks
   * The message sequence number.
   * 
   * @example
   * 1
   */
  messageSequence?: number;
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * dc18b894-19a3-45ee-8768-a59478e0****
   */
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      clientMessageId: 'ClientMessageId',
      content: 'Content',
      createdAt: 'CreatedAt',
      messageId: 'MessageId',
      messageSequence: 'MessageSequence',
      role: 'Role',
      status: 'Status',
      turnId: 'TurnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMessageId: 'string',
      content: 'string',
      createdAt: 'string',
      messageId: 'string',
      messageSequence: 'number',
      role: 'string',
      status: 'string',
      turnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCopilotMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API version.
   * >You can call the [DescribeGroupProductions](~~DescribeGroupProductions~~) operation to obtain this parameter.
   * 
   * @example
   * v1.2
   */
  apiVersion?: string;
  /**
   * @remarks
   * The list of conversation messages.
   */
  items?: ListCopilotMessagesResponseBodyItems[];
  /**
   * @remarks
   * The maximum amount of data read in this query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      items: { 'type': 'array', 'itemType': ListCopilotMessagesResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

