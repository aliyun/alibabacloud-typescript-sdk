// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1764055092
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the historical conversation.
   * 
   * @example
   * 60b335ca-124d-4ee1-864b-de554987****
   */
  id?: string;
  /**
   * @remarks
   * The conversation introduction.
   * 
   * @example
   * 测试搜索RDS资源
   */
  introduction?: string;
  isRunning?: boolean;
  /**
   * @remarks
   * The name of the historical conversation.
   * 
   * @example
   * 搜索RDS资源。
   */
  name?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      introduction: 'Introduction',
      isRunning: 'IsRunning',
      name: 'Name',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      id: 'string',
      introduction: 'string',
      isRunning: 'boolean',
      name: 'string',
      updatedAt: 'string',
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
   * The request result.
   */
  data?: GetConversationsResponseBodyData[];
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * true
   */
  hasMore?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 100. Default value: 100.
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

