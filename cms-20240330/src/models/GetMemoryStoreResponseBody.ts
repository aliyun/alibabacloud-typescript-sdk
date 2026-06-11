// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomExtractionStrategy } from "./CustomExtractionStrategy";


export class GetMemoryStoreResponseBodyShortTermStorage extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * memory-store
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Project.
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
   * Indicates whether to include Large Language Model (LLM) output in the memory extraction.
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The query to filter traces from Simple Log Service.
   * 
   * @example
   * (serviceName : "langchain-rag" or serviceName : "agentscope-code-correction") and hostname = frontend-proxy-999c48c8d-hvk6c
   */
  query?: string;
  /**
   * @remarks
   * The workspace where the trace is located.
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
   * The Unix timestamp (in milliseconds) when the memory store was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  createTime?: string;
  /**
   * @remarks
   * A list of custom extraction strategies.
   */
  customExtractionStrategies?: CustomExtractionStrategy[];
  /**
   * @remarks
   * The description of the memory store.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The built-in extraction strategies. Valid values are `Episodic`, `Summary`, and `Fact`.
   */
  extractionStrategies?: string[];
  /**
   * @remarks
   * The name of the memory store.
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
   * The configuration for short-term memory storage.
   */
  shortTermStorage?: GetMemoryStoreResponseBodyShortTermStorage;
  /**
   * @remarks
   * The short-term memory retention time, in seconds.
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
   * The configuration for the trace source. This parameter is returned only when `sourceType` is set to `Trace`.
   */
  traceSourceConfig?: GetMemoryStoreResponseBodyTraceSourceConfig;
  /**
   * @remarks
   * The Unix timestamp (in milliseconds) when the memory store was last updated.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1764556182850
   */
  updateTime?: string;
  /**
   * @remarks
   * The name of the workspace.
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

