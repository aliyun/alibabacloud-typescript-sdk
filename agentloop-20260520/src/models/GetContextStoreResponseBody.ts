// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextStoreResponseBodyConfigSource extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace where the trace data source resides. This is the same as the AgentSpace specified during creation.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The start time for data backfill, in ISO 8601 UTC format.
   * 
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
   * @remarks
   * The metadata field mapping. The key is the business field and the value is the storage field.
   * 
   * @example
   * {"userId":"user_id","sessionId":"session_id"}
   */
  metadataField?: { [key: string]: string };
  /**
   * @remarks
   * The experience mining interval. Valid values: 1h, 6h, 12h, and 1d. Default value: 1d.
   * 
   * @example
   * 1d
   */
  miningInterval?: string;
  /**
   * @remarks
   * The list of service names. This works together with source.agentSpace to locate the trace data source. This value cannot be changed in the current version.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  /**
   * @remarks
   * The datasource config passed in by the user. This serves only as the root identifier of the data source.
   */
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
   * @remarks
   * The name of the AgentSpace to which the context store belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The configuration of the context store.
   */
  config?: GetContextStoreResponseBodyConfig;
  /**
   * @remarks
   * The context store name.
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
   * 我的上下文库
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the context store.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the context store. Valid values:
   * - ACTIVE
   * - INITIALIZING
   * - FAILED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
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

