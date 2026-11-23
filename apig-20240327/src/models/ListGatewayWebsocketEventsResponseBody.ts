// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayWebsocketEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data basis.
   * 
   * @example
   * observed
   */
  basis?: string;
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The observability events.
   * 
   * @example
   * []
   */
  items?: { [key: string]: any }[];
  /**
   * @remarks
   * The actual number of results per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * opaque-token-from-previous-page
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      basis: 'basis',
      hasMore: 'hasMore',
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basis: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      maxResults: 'number',
      nextToken: 'string',
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

export class ListGatewayWebsocketEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The query results.
   * 
   * @example
   * {}
   */
  data?: ListGatewayWebsocketEventsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified gateway does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D0A6A1A0-8793-4C10-AB1A-2C03E770A912
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayWebsocketEventsResponseBodyData,
      message: 'string',
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

