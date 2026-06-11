// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomExtractionStrategy } from "./CustomExtractionStrategy";


export class CreateMemoryStoreRequestTraceSourceConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the output in the trace.
   */
  includeOutput?: boolean;
  /**
   * @remarks
   * The query to filter traces.
   * 
   * @example
   * (serviceName : "langchain-rag" or serviceName : "agentscope-code-correction") and hostname = frontend-proxy-999c48c8d-hvk6c
   */
  query?: string;
  /**
   * @remarks
   * The name of the workspace that contains the trace source.
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

export class CreateMemoryStoreRequest extends $dara.Model {
  /**
   * @remarks
   * A list of custom extraction strategies.
   */
  customExtractionStrategies?: CustomExtractionStrategy[];
  /**
   * @remarks
   * The description of the MemoryStore.
   * 
   * @example
   * Test memory store for demonstration.
   */
  description?: string;
  /**
   * @remarks
   * The extraction strategies to use. Valid values include `Episodic`, `Summary`, and `Fact`.
   */
  extractionStrategies?: string[];
  /**
   * @remarks
   * The name of the MemoryStore. The name must be unique within the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test-memory-store
   */
  memoryStoreName?: string;
  /**
   * @remarks
   * The short-term TTL, which is the number of conversation rounds to retain.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  shortTermTtl?: number;
  /**
   * @remarks
   * The source type of the memory. Valid values are `None` and `Trace`.
   * 
   * @example
   * None/Trace
   */
  sourceType?: string;
  /**
   * @remarks
   * Configuration for the trace source. Required if `sourceType` is `Trace`.
   */
  traceSourceConfig?: CreateMemoryStoreRequestTraceSourceConfig;
  static names(): { [key: string]: string } {
    return {
      customExtractionStrategies: 'customExtractionStrategies',
      description: 'description',
      extractionStrategies: 'extractionStrategies',
      memoryStoreName: 'memoryStoreName',
      shortTermTtl: 'shortTermTtl',
      sourceType: 'sourceType',
      traceSourceConfig: 'traceSourceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExtractionStrategies: { 'type': 'array', 'itemType': CustomExtractionStrategy },
      description: 'string',
      extractionStrategies: { 'type': 'array', 'itemType': 'string' },
      memoryStoreName: 'string',
      shortTermTtl: 'number',
      sourceType: 'string',
      traceSourceConfig: CreateMemoryStoreRequestTraceSourceConfig,
    };
  }

  validate() {
    if(Array.isArray(this.customExtractionStrategies)) {
      $dara.Model.validateArray(this.customExtractionStrategies);
    }
    if(Array.isArray(this.extractionStrategies)) {
      $dara.Model.validateArray(this.extractionStrategies);
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

