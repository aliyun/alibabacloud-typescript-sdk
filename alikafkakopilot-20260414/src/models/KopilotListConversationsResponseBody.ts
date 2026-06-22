// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotListConversationsResponseBodyData extends $dara.Model {
  conversationIds?: string[];
  count?: number;
  page?: number;
  size?: number;
  total?: number;
  totalPages?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationIds: 'ConversationIds',
      count: 'Count',
      page: 'Page',
      size: 'Size',
      total: 'Total',
      totalPages: 'TotalPages',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationIds: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
      page: 'number',
      size: 'number',
      total: 'number',
      totalPages: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conversationIds)) {
      $dara.Model.validateArray(this.conversationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KopilotListConversationsResponseBody extends $dara.Model {
  code?: number;
  data?: KopilotListConversationsResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: KopilotListConversationsResponseBodyData,
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

