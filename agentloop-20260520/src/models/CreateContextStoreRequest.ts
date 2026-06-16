// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateContextStoreRequestConfigSource extends $dara.Model {
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

export class CreateContextStoreRequestConfig extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["order-service","payment-service"]
   */
  serviceNames?: string[];
  source?: CreateContextStoreRequestConfigSource;
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
      source: CreateContextStoreRequestConfigSource,
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

export class CreateContextStoreRequest extends $dara.Model {
  config?: CreateContextStoreRequestConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-context-store
   */
  contextStoreName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * experience
   */
  contextType?: string;
  /**
   * @example
   * 我的上下文库
   */
  description?: string;
  /**
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      description: 'description',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateContextStoreRequestConfig,
      contextStoreName: 'string',
      contextType: 'string',
      description: 'string',
      clientToken: 'string',
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

