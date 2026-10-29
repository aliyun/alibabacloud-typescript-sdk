// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchLumaKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The name of the data catalog bound to the agent. You can call ListLumaCatalogs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the knowledge base bound to the agent. You can call ListLumaKnowledgeBases to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The metadata filter conditions. The value is a JSON string used to filter the recall scope based on document metadata. For available fields, see the MetadataSchema of the knowledge base.
   * 
   * @example
   * {"category":"faq"}
   */
  metadataFilter?: string;
  /**
   * @remarks
   * The retrieve mode. Valid values: vector (AISearch), keyword (keyword retrieve), and hybrid (hybrid retrieve). If you do not specify this parameter, the retrieve configuration of the knowledge base is used.
   * 
   * @example
   * hybrid
   */
  mode?: string;
  /**
   * @remarks
   * The name of the namespace bound to the agent. You can call ListLumaNamespaces to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The search query in natural language.
   * 
   * This parameter is required.
   * 
   * @example
   * How to configure event rules
   */
  query?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking. If enabled, the recalled results are reranked to improve precision at the cost of longer execution duration. If you do not specify this parameter, the search configuration of the knowledge base is used.
   * 
   * @example
   * true
   */
  rerank?: boolean;
  /**
   * @remarks
   * The number of text chunks to return. Valid values: 1 to 100. If you do not specify this parameter, the search configuration of the knowledge base is used.
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

