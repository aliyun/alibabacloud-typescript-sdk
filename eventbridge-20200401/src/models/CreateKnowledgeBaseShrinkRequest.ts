// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The EventHouse catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies the knowledge base. This parameter cannot be modified after the knowledge base is created. System catalogs cannot be bound.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Optional. The default chunking strategy for the knowledge base. This strategy applies only to documents uploaded after the configuration is set. If this parameter is not specified, the system default chunking strategy is used.
   */
  chunkConfigurationShrink?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * Product documentation knowledge base
   */
  description?: string;
  /**
   * @remarks
   * Optional. The vector dimensions. The value is validated against the embedding model: text-embedding-v3 supports 64, 128, 256, 512, 768, and 1024. text-embedding-v4 supports 64, 128, 256, 512, 768, 1024, 1536, and 2048. qwen3.7-text-embedding supports 256, 512, 768, 1024, 1536, 2048, and 2560. qwen3.7-text-embedding-flash supports 256, 512, 768, and 1024. Default value: 1024 (the default dimension of the model). This parameter cannot be modified after the knowledge base is created. Even if the dimensions are the same, you must rebuild the knowledge base when switching models.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * Optional. The embedding model used for vectorization. This parameter cannot be modified after the knowledge base is created. Valid values: text-embedding-v3, text-embedding-v4, qwen3.7-text-embedding, and qwen3.7-text-embedding-flash. Only Bailian Tongyi models are supported. Third-party models are not supported. Default value: text-embedding-v4.
   * 
   * @example
   * text-embedding-v4
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * product-docs
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * Declares the metadata fields of the knowledge base. When you upload documents, the metadata can contain only the fields declared here. This parameter cannot be modified after the knowledge base is created.
   * 
   * @example
   * [{"Name":"department","Type":"STRING"}]
   */
  metadataSchemaShrink?: string;
  /**
   * @remarks
   * The EventHouse namespace to which the knowledge base belongs. The namespace must belong to the specified catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies the knowledge base. This parameter cannot be modified after the knowledge base is created.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Optional. The default search configuration at the knowledge base level. This configuration takes effect when the corresponding parameters are not specified in search requests. You can modify this configuration after creation by calling UpdateKnowledgeBase.
   */
  searchConfigurationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      chunkConfigurationShrink: 'ChunkConfiguration',
      description: 'Description',
      embeddingDimension: 'EmbeddingDimension',
      embeddingModel: 'EmbeddingModel',
      knowledgeBaseName: 'KnowledgeBaseName',
      metadataSchemaShrink: 'MetadataSchema',
      namespace: 'Namespace',
      searchConfigurationShrink: 'SearchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      chunkConfigurationShrink: 'string',
      description: 'string',
      embeddingDimension: 'number',
      embeddingModel: 'string',
      knowledgeBaseName: 'string',
      metadataSchemaShrink: 'string',
      namespace: 'string',
      searchConfigurationShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

