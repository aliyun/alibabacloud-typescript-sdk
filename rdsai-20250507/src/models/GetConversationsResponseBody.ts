// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time of the conversation.
   * 
   * @example
   * 1764055092
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the history conversation.
   * 
   * @example
   * 60b335ca-124d-4ee1-864b-de554987****
   */
  id?: string;
  /**
   * @remarks
   * The introduction to the conversation.
   */
  introduction?: string;
  /**
   * @remarks
   * The name of the history conversation.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      introduction: 'Introduction',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      introduction: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: GetConversationsResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * true
   */
  hasMore?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      hasMore: 'HasMore',
      limit: 'Limit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetConversationsResponseBodyData },
      hasMore: 'string',
      limit: 'number',
      requestId: 'string',
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

