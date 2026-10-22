// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryStoresResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The MemoryStore description.
   * 
   * @example
   * Used to store long-term user preferences
   */
  description?: string;
  /**
   * @remarks
   * The custom extraction instructions.
   * 
   * @example
   * Extract only long-term preferences explicitly expressed by the user
   */
  extractInstructions?: string;
  /**
   * @remarks
   * The MemoryStore ID.
   * 
   * @example
   * ms-2f5f9c5a8d0e4c3b
   */
  memoryStoreId?: string;
  /**
   * @remarks
   * The MemoryStore name. It cannot be modified after creation.
   * 
   * @example
   * customer-memory
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The lifecycle state of the MemoryStore.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 2026-09-23T10:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The AgentCore workspace ID.
   * 
   * @example
   * ws-2f5f9c5a8d0e4c3b
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      extractInstructions: 'extractInstructions',
      memoryStoreId: 'memoryStoreId',
      memoryStoreName: 'memoryStoreName',
      status: 'status',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      extractInstructions: 'string',
      memoryStoreId: 'string',
      memoryStoreName: 'string',
      status: 'string',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMemoryStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of MemoryStores.
   */
  items?: ListMemoryStoresResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJvZmZzZXQiOjEwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A00000-0000-0000-0000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListMemoryStoresResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

