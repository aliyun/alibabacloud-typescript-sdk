// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperatingObjectFavoritesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The to-do card type description.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The follow time. The value is a Unix timestamp in seconds.
   * 
   * @example
   * 1787822400
   */
  followedAt?: number;
  /**
   * @remarks
   * The graph name.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the recommended item. The value can be a **feedId** or a micro-application ID.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * 469ac312-403c-41fb-aae3-de5260e30906
   */
  objectName?: string;
  /**
   * @remarks
   * The bound object type, such as customer or project.
   * 
   * @example
   * table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      followedAt: 'followedAt',
      graphName: 'graphName',
      objectId: 'objectId',
      objectName: 'objectName',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      followedAt: 'number',
      graphName: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperatingObjectFavoritesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The graph name. Call listGraphs to retrieve available graphs.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * Indicates whether more pages are available.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The MCP card list.
   */
  items?: ListOperatingObjectFavoritesResponseBodyItems[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * @example
   * eyJ2IjoxLCJpZCI6OTAyfQ.c2lnbmF0dXJlX2V4YW1wbGU
   */
  nextToken?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * @example
   * contract
   */
  objectType?: string;
  /**
   * @remarks
   * The digital employee name (operating object name).
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1001
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      hasMore: 'hasMore',
      items: 'items',
      message: 'message',
      nextToken: 'nextToken',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListOperatingObjectFavoritesResponseBodyItems },
      message: 'string',
      nextToken: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

