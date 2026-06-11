// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryStoresResponseBodyMemoryStores extends $dara.Model {
  /**
   * @remarks
   * The time when the memory store was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the memory store.
   * 
   * @example
   * Created by taishan-module-recovery
   */
  description?: string;
  /**
   * @remarks
   * The name of the memory store.
   * 
   * @example
   * qianyi_test_1
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the memory store was last updated.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  updateTime?: string;
  /**
   * @remarks
   * Workspace
   * 
   * @example
   * default-cms-1646467597142798-cn-shenzhen
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      memoryStoreName: 'memoryStoreName',
      regionId: 'regionId',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      memoryStoreName: 'string',
      regionId: 'string',
      updateTime: 'string',
      workspace: 'string',
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
   * The maximum number of returned entries.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of memory stores.
   */
  memoryStores?: ListMemoryStoresResponseBodyMemoryStores[];
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16C0A6D6-C3E7-511D-A60B-A87FD85F5BA7
   */
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      memoryStores: 'memoryStores',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      memoryStores: { 'type': 'array', 'itemType': ListMemoryStoresResponseBodyMemoryStores },
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memoryStores)) {
      $dara.Model.validateArray(this.memoryStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

