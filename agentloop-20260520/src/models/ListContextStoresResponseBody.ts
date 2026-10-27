// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the context store belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The name of the context store.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * The type of the context store, such as experience or memory.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * The time when the context store was created, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the context store.
   * 
   * @example
   * My context store
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region where the context store resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of service names. This parameter has a value only for the experience type. It is used together with the data source AgentSpace to locate the trace data source.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The memory data source type, such as manual, trajectory, or dataset. This parameter has a value only for the memory type.
   * 
   * @example
   * trajectory
   */
  sourceType?: string;
  /**
   * @remarks
   * The status of the context store. Valid values include ACTIVE, INITIALIZING, and FAILED.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The memory storage mode, such as event or upsert. This parameter has a value only for the memory type.
   * 
   * @example
   * upsert
   */
  storageMode?: string;
  storageModes?: string[];
  /**
   * @remarks
   * The time when the context store was last updated, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      createTime: 'createTime',
      description: 'description',
      regionId: 'regionId',
      serviceNames: 'serviceNames',
      sourceType: 'sourceType',
      status: 'status',
      storageMode: 'storageMode',
      storageModes: 'storageModes',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      contextStoreName: 'string',
      contextType: 'string',
      createTime: 'string',
      description: 'string',
      regionId: 'string',
      serviceNames: { 'type': 'array', 'itemType': 'string' },
      sourceType: 'string',
      status: 'string',
      storageMode: 'string',
      storageModes: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    if(Array.isArray(this.storageModes)) {
      $dara.Model.validateArray(this.storageModes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results per page specified in the request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty string indicates that the last page is reached.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, which can be used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The list of context stores.
   */
  results?: ListContextStoresResponseBodyResults[];
  /**
   * @remarks
   * The total number of context stores that meet the query conditions.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ListContextStoresResponseBodyResults },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

