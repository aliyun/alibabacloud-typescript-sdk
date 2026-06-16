// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextStoreRequestConfigSource extends $dara.Model {
  /**
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
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

export class UpdateContextStoreRequestConfig extends $dara.Model {
  /**
   * @example
   * {"userId":"user_id","sessionId":"session_id"}
   */
  metadataField?: { [key: string]: string };
  source?: UpdateContextStoreRequestConfigSource;
  static names(): { [key: string]: string } {
    return {
      metadataField: 'metadataField',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataField: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      source: UpdateContextStoreRequestConfigSource,
    };
  }

  validate() {
    if(this.metadataField) {
      $dara.Model.validateMap(this.metadataField);
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

export class UpdateContextStoreRequest extends $dara.Model {
  config?: UpdateContextStoreRequestConfig;
  /**
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
      contextType: 'contextType',
      description: 'description',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateContextStoreRequestConfig,
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

