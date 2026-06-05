// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppConversationMessagesRequest extends $dara.Model {
  /**
   * @example
   * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
   */
  conversationId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 734600510965856
   */
  siteId?: string;
  /**
   * @example
   * null
   */
  startCreateTime?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      siteId: 'SiteId',
      startCreateTime: 'StartCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      siteId: 'string',
      startCreateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

