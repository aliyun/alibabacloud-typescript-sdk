// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomExtractionStrategy } from "./CustomExtractionStrategy";


export class GetMemoryStoreResponseBodyShortTermStorage extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service Logstore name.
   * 
   * @example
   * memory-store
   */
  logstore?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
   * 
   * @example
   * wk_cms_data_warehouse
   */
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
  /**
   * @remarks
   * Specifies whether to include LLM output in memory extraction.
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The Simple Log Service query statement used to filter traces.
   * 
   * @example
   * (serviceName : "langchain-rag" or serviceName : "agentscope-code-correction") and hostname = frontend-proxy-999c48c8d-hvk6c
   */
  query?: string;
  /**
   * @remarks
   * The workspace where the trace resides.
   * 
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
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  createTime?: string;
  /**
   * @remarks
   * The custom extraction strategies.
   */
  customExtractionStrategies?: CustomExtractionStrategy[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The extraction strategies. Valid values: Episodic, Summary, and Fact.
   */
  extractionStrategies?: string[];
  /**
   * @remarks
   * The memory store name.
   * 
   * @example
   * test-memory-store
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B9377D9-C56B-5C2E-A8A4-A01D6CC3F4B8
   */
  requestId?: string;
  /**
   * @remarks
   * The short-term memory storage.
   */
  shortTermStorage?: GetMemoryStoreResponseBodyShortTermStorage;
  /**
   * @remarks
   * The retention period of short-term memory.
   * 
   * @example
   * 10
   */
  shortTermTtl?: number;
  /**
   * @remarks
   * The memory source.
   * 
   * @example
   * Trace
   */
  sourceType?: string;
  /**
   * @remarks
   * The configuration used when sourceType is set to Trace.
   */
  traceSourceConfig?: GetMemoryStoreResponseBodyTraceSourceConfig;
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace name.
   * 
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

