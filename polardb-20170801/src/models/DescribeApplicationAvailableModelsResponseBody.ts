// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationAvailableModelsResponseBodyAsrModels extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * paraformer-realtime-v2
   */
  name?: string;
  /**
   * @remarks
   * The protocol used by the speech recognition model.
   * 
   * @example
   * websocket
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultEmbeddingModel extends $dara.Model {
  /**
   * @remarks
   * The default vector dimensions of the model.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The list of vector dimensions supported by the model.
   */
  dimensions?: number[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * text-embedding-v3
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensions: 'Dimensions',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      dimensions: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultGraphLLMModel extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultLLMModel extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultRerankModel extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * gte-rerank-v2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultVLModel extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-vl-max
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultVisualEmbedderModel extends $dara.Model {
  /**
   * @remarks
   * The default dimension.
   * 
   * @example
   * 2560
   */
  dimension?: number;
  /**
   * @remarks
   * The available dimensions.
   */
  dimensions?: number[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3.7-text-embedding
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensions: 'Dimensions',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      dimensions: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyDefaultVisualLlmModel extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3.6-flash
   */
  name?: string;
  /**
   * @remarks
   * The supported modalities.
   */
  supportedModalities?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      supportedModalities: 'SupportedModalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      supportedModalities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedModalities)) {
      $dara.Model.validateArray(this.supportedModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyEmbeddingModels extends $dara.Model {
  /**
   * @remarks
   * The default vector dimensions of the model.
   * 
   * @example
   * 1024
   */
  dimension?: number;
  /**
   * @remarks
   * The list of vector dimensions supported by the model.
   */
  dimensions?: number[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * text-embedding-v3
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensions: 'Dimensions',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      dimensions: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyGraphLlmModels extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyLlmModels extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyRerankModels extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * gte-rerank-v2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyVLModels extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-vl-max
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyVisualEmbedderModels extends $dara.Model {
  /**
   * @remarks
   * The default dimension.
   * 
   * @example
   * 2560
   */
  dimension?: number;
  /**
   * @remarks
   * The available dimensions.
   */
  dimensions?: number[];
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3.7-text-embedding
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensions: 'Dimensions',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      dimensions: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBodyVisualLlmModels extends $dara.Model {
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3.6-flash
   */
  name?: string;
  /**
   * @remarks
   * The supported modalities.
   */
  supportedModalities?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      supportedModalities: 'SupportedModalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      supportedModalities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedModalities)) {
      $dara.Model.validateArray(this.supportedModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAvailableModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of speech recognition models.
   */
  asrModels?: DescribeApplicationAvailableModelsResponseBodyAsrModels[];
  /**
   * @remarks
   * The default text embedding model.
   */
  defaultEmbeddingModel?: DescribeApplicationAvailableModelsResponseBodyDefaultEmbeddingModel;
  /**
   * @remarks
   * The default graph large language model.
   */
  defaultGraphLLMModel?: DescribeApplicationAvailableModelsResponseBodyDefaultGraphLLMModel;
  /**
   * @remarks
   * The default large language model.
   */
  defaultLLMModel?: DescribeApplicationAvailableModelsResponseBodyDefaultLLMModel;
  /**
   * @remarks
   * The default memory type.
   * 
   * @example
   * TEXT
   */
  defaultMemoryType?: string;
  /**
   * @remarks
   * The default reranking model.
   */
  defaultRerankModel?: DescribeApplicationAvailableModelsResponseBodyDefaultRerankModel;
  /**
   * @remarks
   * The default vision-language model.
   */
  defaultVLModel?: DescribeApplicationAvailableModelsResponseBodyDefaultVLModel;
  /**
   * @remarks
   * The default VisualEmbedder model.
   */
  defaultVisualEmbedderModel?: DescribeApplicationAvailableModelsResponseBodyDefaultVisualEmbedderModel;
  /**
   * @remarks
   * The default VisualLLM model.
   */
  defaultVisualLlmModel?: DescribeApplicationAvailableModelsResponseBodyDefaultVisualLlmModel;
  /**
   * @remarks
   * The list of available text embedding models.
   */
  embeddingModels?: DescribeApplicationAvailableModelsResponseBodyEmbeddingModels[];
  /**
   * @remarks
   * The list of available graph large language models.
   */
  graphLlmModels?: DescribeApplicationAvailableModelsResponseBodyGraphLlmModels[];
  /**
   * @remarks
   * The list of available large language models.
   */
  llmModels?: DescribeApplicationAvailableModelsResponseBodyLlmModels[];
  /**
   * @remarks
   * The available memory types.
   */
  memoryTypes?: string[];
  /**
   * @remarks
   * Indicates whether the current account supports Mem0 multimodal.
   * 
   * @example
   * true
   */
  multimodalSupported?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of available reranking models.
   */
  rerankModels?: DescribeApplicationAvailableModelsResponseBodyRerankModels[];
  /**
   * @remarks
   * The list of available vision-language models.
   */
  VLModels?: DescribeApplicationAvailableModelsResponseBodyVLModels[];
  /**
   * @remarks
   * The list of available VisualEmbedder models.
   */
  visualEmbedderModels?: DescribeApplicationAvailableModelsResponseBodyVisualEmbedderModels[];
  /**
   * @remarks
   * The list of available VisualLLM models.
   */
  visualLlmModels?: DescribeApplicationAvailableModelsResponseBodyVisualLlmModels[];
  static names(): { [key: string]: string } {
    return {
      asrModels: 'AsrModels',
      defaultEmbeddingModel: 'DefaultEmbeddingModel',
      defaultGraphLLMModel: 'DefaultGraphLLMModel',
      defaultLLMModel: 'DefaultLLMModel',
      defaultMemoryType: 'DefaultMemoryType',
      defaultRerankModel: 'DefaultRerankModel',
      defaultVLModel: 'DefaultVLModel',
      defaultVisualEmbedderModel: 'DefaultVisualEmbedderModel',
      defaultVisualLlmModel: 'DefaultVisualLlmModel',
      embeddingModels: 'EmbeddingModels',
      graphLlmModels: 'GraphLlmModels',
      llmModels: 'LlmModels',
      memoryTypes: 'MemoryTypes',
      multimodalSupported: 'MultimodalSupported',
      requestId: 'RequestId',
      rerankModels: 'RerankModels',
      VLModels: 'VLModels',
      visualEmbedderModels: 'VisualEmbedderModels',
      visualLlmModels: 'VisualLlmModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyAsrModels },
      defaultEmbeddingModel: DescribeApplicationAvailableModelsResponseBodyDefaultEmbeddingModel,
      defaultGraphLLMModel: DescribeApplicationAvailableModelsResponseBodyDefaultGraphLLMModel,
      defaultLLMModel: DescribeApplicationAvailableModelsResponseBodyDefaultLLMModel,
      defaultMemoryType: 'string',
      defaultRerankModel: DescribeApplicationAvailableModelsResponseBodyDefaultRerankModel,
      defaultVLModel: DescribeApplicationAvailableModelsResponseBodyDefaultVLModel,
      defaultVisualEmbedderModel: DescribeApplicationAvailableModelsResponseBodyDefaultVisualEmbedderModel,
      defaultVisualLlmModel: DescribeApplicationAvailableModelsResponseBodyDefaultVisualLlmModel,
      embeddingModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyEmbeddingModels },
      graphLlmModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyGraphLlmModels },
      llmModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyLlmModels },
      memoryTypes: { 'type': 'array', 'itemType': 'string' },
      multimodalSupported: 'boolean',
      requestId: 'string',
      rerankModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyRerankModels },
      VLModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyVLModels },
      visualEmbedderModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyVisualEmbedderModels },
      visualLlmModels: { 'type': 'array', 'itemType': DescribeApplicationAvailableModelsResponseBodyVisualLlmModels },
    };
  }

  validate() {
    if(Array.isArray(this.asrModels)) {
      $dara.Model.validateArray(this.asrModels);
    }
    if(this.defaultEmbeddingModel && typeof (this.defaultEmbeddingModel as any).validate === 'function') {
      (this.defaultEmbeddingModel as any).validate();
    }
    if(this.defaultGraphLLMModel && typeof (this.defaultGraphLLMModel as any).validate === 'function') {
      (this.defaultGraphLLMModel as any).validate();
    }
    if(this.defaultLLMModel && typeof (this.defaultLLMModel as any).validate === 'function') {
      (this.defaultLLMModel as any).validate();
    }
    if(this.defaultRerankModel && typeof (this.defaultRerankModel as any).validate === 'function') {
      (this.defaultRerankModel as any).validate();
    }
    if(this.defaultVLModel && typeof (this.defaultVLModel as any).validate === 'function') {
      (this.defaultVLModel as any).validate();
    }
    if(this.defaultVisualEmbedderModel && typeof (this.defaultVisualEmbedderModel as any).validate === 'function') {
      (this.defaultVisualEmbedderModel as any).validate();
    }
    if(this.defaultVisualLlmModel && typeof (this.defaultVisualLlmModel as any).validate === 'function') {
      (this.defaultVisualLlmModel as any).validate();
    }
    if(Array.isArray(this.embeddingModels)) {
      $dara.Model.validateArray(this.embeddingModels);
    }
    if(Array.isArray(this.graphLlmModels)) {
      $dara.Model.validateArray(this.graphLlmModels);
    }
    if(Array.isArray(this.llmModels)) {
      $dara.Model.validateArray(this.llmModels);
    }
    if(Array.isArray(this.memoryTypes)) {
      $dara.Model.validateArray(this.memoryTypes);
    }
    if(Array.isArray(this.rerankModels)) {
      $dara.Model.validateArray(this.rerankModels);
    }
    if(Array.isArray(this.VLModels)) {
      $dara.Model.validateArray(this.VLModels);
    }
    if(Array.isArray(this.visualEmbedderModels)) {
      $dara.Model.validateArray(this.visualEmbedderModels);
    }
    if(Array.isArray(this.visualLlmModels)) {
      $dara.Model.validateArray(this.visualLlmModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

