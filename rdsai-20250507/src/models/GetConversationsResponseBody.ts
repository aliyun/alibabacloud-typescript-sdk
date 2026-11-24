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
   * Test searching for RDS resources
   */
  introduction?: string;
  /**
   * @remarks
   * Indicates whether the session is running.
   * 
   * @example
   * true
   */
  isRunning?: boolean;
  /**
   * @remarks
   * The name of the historical conversation.
   * 
   * @example
   * Search for RDS resources
   */
  name?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * idle
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1785919275
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      introduction: 'Introduction',
      isRunning: 'IsRunning',
      name: 'Name',
      status: 'Status',
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
      status: 'string',
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
   * Indicates whether more pages are available.
   * 
   * @example
   * true
   */
  hasMore?: string;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The ID of the request.
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

