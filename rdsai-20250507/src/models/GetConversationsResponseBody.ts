// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1764055092
   */
  createdAt?: string;
  /**
   * @example
   * 60b335ca-124d-4ee1-864b-de554987****
   */
  id?: string;
  introduction?: string;
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
  data?: GetConversationsResponseBodyData[];
  /**
   * @example
   * true
   */
  hasMore?: string;
  /**
   * @example
   * 100
   */
  limit?: number;
  /**
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

