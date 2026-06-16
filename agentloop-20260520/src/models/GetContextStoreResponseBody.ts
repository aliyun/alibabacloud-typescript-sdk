// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreResponseBodyConfigSource extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBodyConfig extends $dara.Model {
  /**
   * @example
   * {"userId":"user_id","sessionId":"session_id"}
   */
  metadataField?: { [key: string]: string };
  /**
   * @example
   * 1d
   */
  miningInterval?: string;
  /**
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  source?: GetContextStoreResponseBodyConfigSource;
  static names(): { [key: string]: string } {
    return {
      metadataField: 'metadataField',
      miningInterval: 'miningInterval',
      serviceNames: 'serviceNames',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      miningInterval: 'string',
      serviceNames: { 'type': 'array', 'itemType': 'string' },
      source: GetContextStoreResponseBodyConfigSource,
    };
  }

  validate() {
    if(this.metadataField) {
      $dara.Model.validateMap(this.metadataField);
    }
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContextStoreResponseBody extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  config?: GetContextStoreResponseBodyConfig;
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
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
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
      config: 'config',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      createTime: 'createTime',
      description: 'description',
      regionId: 'regionId',
      requestId: 'requestId',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      config: GetContextStoreResponseBodyConfig,
      contextStoreName: 'string',
      contextType: 'string',
      createTime: 'string',
      description: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

