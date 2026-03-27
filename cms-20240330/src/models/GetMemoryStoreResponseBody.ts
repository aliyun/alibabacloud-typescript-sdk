// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomExtractionStrategy } from "./CustomExtractionStrategy";


export class GetMemoryStoreResponseBodyShortTermStorage extends $dara.Model {
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryStoreResponseBodyTraceSourceConfig extends $dara.Model {
  includeOutput?: boolean;
  /**
   * @example
   * (serviceName : "langchain-rag" or serviceName : "agentscope-code-correction") and hostname = frontend-proxy-999c48c8d-hvk6c
   */
  query?: string;
  /**
   * @example
   * test-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      includeOutput: 'includeOutput',
      query: 'query',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeOutput: 'boolean',
      query: 'string',
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

export class GetMemoryStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  createTime?: string;
  customExtractionStrategies?: CustomExtractionStrategy[];
  /**
   * @example
   * test
   */
  description?: string;
  extractionStrategies?: string[];
  /**
   * @example
   * test-memory-store
   */
  memoryStoreName?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  shortTermStorage?: GetMemoryStoreResponseBodyShortTermStorage;
  /**
   * @example
   * 10
   */
  shortTermTtl?: number;
  /**
   * @example
   * Trace
   */
  sourceType?: string;
  traceSourceConfig?: GetMemoryStoreResponseBodyTraceSourceConfig;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  updateTime?: string;
  /**
   * @example
   * default-cms-xxxxxx-cn-beijing
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      customExtractionStrategies: 'customExtractionStrategies',
      description: 'description',
      extractionStrategies: 'extractionStrategies',
      memoryStoreName: 'memoryStoreName',
      regionId: 'regionId',
      requestId: 'requestId',
      shortTermStorage: 'shortTermStorage',
      shortTermTtl: 'shortTermTtl',
      sourceType: 'sourceType',
      traceSourceConfig: 'traceSourceConfig',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customExtractionStrategies: { 'type': 'array', 'itemType': CustomExtractionStrategy },
      description: 'string',
      extractionStrategies: { 'type': 'array', 'itemType': 'string' },
      memoryStoreName: 'string',
      regionId: 'string',
      requestId: 'string',
      shortTermStorage: GetMemoryStoreResponseBodyShortTermStorage,
      shortTermTtl: 'number',
      sourceType: 'string',
      traceSourceConfig: GetMemoryStoreResponseBodyTraceSourceConfig,
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customExtractionStrategies)) {
      $dara.Model.validateArray(this.customExtractionStrategies);
    }
    if(Array.isArray(this.extractionStrategies)) {
      $dara.Model.validateArray(this.extractionStrategies);
    }
    if(this.shortTermStorage && typeof (this.shortTermStorage as any).validate === 'function') {
      (this.shortTermStorage as any).validate();
    }
    if(this.traceSourceConfig && typeof (this.traceSourceConfig as any).validate === 'function') {
      (this.traceSourceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

