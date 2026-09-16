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
   * The historical conversation ID.
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
  isRunning?: boolean;
  /**
   * @remarks
   * The historical conversation name.
   * 
   * @example
   * Search for RDS resources
   */
  name?: string;
  /**
   * @remarks
   * The session status. Valid values:
   * - idle: The session is idle.
   * - running: The session is generating a response.
   * - pending_approval: The session is waiting for approval or manual review.
   * 
   * If both pending_approval and running conditions are met, pending_approval is returned.
   * 
   * @example
   * idle
   */
  status?: string;
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

