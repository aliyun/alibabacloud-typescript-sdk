// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperatingObjectFavoritesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the to-do card type.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The subscription time, which is a UNIX timestamp in seconds.
   * 
   * @example
   * 1787822400
   */
  followedAt?: number;
  /**
   * @remarks
   * The name of the graph.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the recommended item, which can be a **feedId** or a mini-app ID.
   * 
   * @example
   * 2676
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * 469ac312-403c-41fb-aae3-de5260e30906
   */
  objectName?: string;
  /**
   * @remarks
   * The object type of the attached object, such as customer or project.
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
   * The name of the graph. You can call the listGraphs operation to obtain the graph name.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * Indicates whether more pages exist.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of MCP cards.
   */
  items?: ListOperatingObjectFavoritesResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
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
   * The name of the digital worker, which is the name of the operating object.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Logtail pipeline configurations in the current project.
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

