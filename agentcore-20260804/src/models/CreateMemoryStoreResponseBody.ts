// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryStoreResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
   * 
   * @example
   * 2026-09-23T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the memory store.
   * 
   * @example
   * Used to store the long-term preferences of users
   */
  description?: string;
  /**
   * @remarks
   * The number of events. You can query this value by calling GetMemoryStore.
   * 
   * @example
   * 20
   */
  eventCount?: number;
  /**
   * @remarks
   * The custom extraction instructions.
   * 
   * @example
   * Extract only long-term preferences explicitly expressed by users
   */
  extractInstructions?: string;
  /**
   * @remarks
   * The number of valid memories. You can query this value by calling GetMemoryStore.
   * 
   * @example
   * 10
   */
  memoryCount?: number;
  /**
   * @remarks
   * The ID of the memory store.
   * 
   * @example
   * ms-2f5f9c5a8d0e4c3b
   */
  memoryStoreId?: string;
  /**
   * @remarks
   * The name of the memory store. The name cannot be modified after creation.
   * 
   * @example
   * customer-memory
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The lifecycle status of the memory store.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The last updated time. The time is in RFC 3339 format. The Z at the end of the example indicates the UTC time zone.
   * 
   * @example
   * 2026-09-23T10:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the AgentCore workspace.
   * 
   * @example
   * ws-2f5f9c5a8d0e4c3b
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      eventCount: 'eventCount',
      extractInstructions: 'extractInstructions',
      memoryCount: 'memoryCount',
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
      eventCount: 'number',
      extractInstructions: 'string',
      memoryCount: 'number',
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

export class CreateMemoryStoreResponseBody extends $dara.Model {
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
   * The details of the memory store.
   */
  data?: CreateMemoryStoreResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
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
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateMemoryStoreResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

