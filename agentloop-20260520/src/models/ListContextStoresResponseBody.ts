// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresResponseBodyResults extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 我的上下文库
   */
  description?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
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
      status: 'status',
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
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextStoresResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  results?: ListContextStoresResponseBodyResults[];
  /**
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

