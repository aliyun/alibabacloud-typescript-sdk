// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchLumaKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The name of the data catalog bound to the Agent. You can call ListLumaCatalogs to obtain the catalog name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the knowledge base bound to the Agent. You can call ListLumaKnowledgeBases to obtain the knowledge base name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * A JSON string that filters the retrieval scope based on document metadata. For available fields, refer to the MetadataSchema of the knowledge base.
   * 
   * @example
   * {"category":"faq"}
   */
  metadataFilter?: string;
  /**
   * @remarks
   * Valid values: vector (AISearch), keyword (keyword match), hybrid (hybrid search). If not specified, the retrieve configuration of the knowledge base is used.
   * 
   * @example
   * hybrid
   */
  mode?: string;
  /**
   * @remarks
   * The name of the namespace bound to the Agent. You can call ListLumaNamespaces to obtain the namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The natural language query for retrieval.
   * 
   * This parameter is required.
   * 
   * @example
   * How to configure event rules
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking for the retrieved results. Reranking improves accuracy but increases latency. If not specified, the retrieval configuration of the knowledge base is used.
   * 
   * @example
   * true
   */
  rerank?: boolean;
  /**
   * @remarks
   * Valid values: 1 to 100. If not specified, the retrieval configuration of the knowledge base is used.
   * 
   * @example
   * 5
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      knowledgeBaseName: 'KnowledgeBaseName',
      metadataFilter: 'MetadataFilter',
      mode: 'Mode',
      namespace: 'Namespace',
      query: 'Query',
      rerank: 'Rerank',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      knowledgeBaseName: 'string',
      metadataFilter: 'string',
      mode: 'string',
      namespace: 'string',
      query: 'string',
      rerank: 'boolean',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

