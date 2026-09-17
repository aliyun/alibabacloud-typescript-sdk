// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies a knowledge base. You can call ListCatalogs to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name is unique within a namespace and is specified at creation time. It cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * Filters search results by document metadata. The value is a JSON expression tree. Nodes are classified into two types: logical nodes {"AndAll": [child nodes...]} (all conditions must be met), {"OrAll": [child nodes...]} (any condition must be met), or {"NotAll": [child nodes...]} (none of the conditions must be met), which support arbitrary nesting; and leaf conditions {"Key": field name, "Operator": operator, "Value": value}, where the In and NotIn operators use "Values": [values...]. Valid values of Operator: Equals, NotEquals, In, NotIn, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual (the last four range operators apply only to LONG, DOUBLE, or DATETIME fields), StartsWith, and StringContains (applies only to STRING fields). Fields must be declared in the knowledge base schema. The nesting depth cannot exceed 5, and the total number of leaf conditions cannot exceed 20. DATETIME field value format: ISO-8601 with time zone, yyyy-MM-dd HH:mm:ss, or yyyy-MM-dd.
   * 
   * @example
   * {"AndAll": [{"Key": "env", "Operator": "In", "Values": ["prod", "staging"]}, {"OrAll": [{"Key": "score", "Operator": "GreaterThan", "Value": "0.8"}, {"Key": "owner", "Operator": "Equals", "Value": "alice"}]}]}
   */
  metadataFilter?: string;
  /**
   * @remarks
   * The retrieval mode. KEYWORD indicates keyword retrieval. VECTOR indicates vector retrieval. HYBRID indicates hybrid retrieval.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies a knowledge base. You can call ListNamespaces to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The query text. Both keyword retrieval and vector retrieval are based on this text.
   * 
   * This parameter is required.
   * 
   * @example
   * How to configure event rules
   */
  query?: string;
  /**
   * @remarks
   * Optional. Overrides the fusion algorithm configured for the knowledge base for this request. This parameter takes effect only in hybrid search (HYBRID) mode. RRF indicates reciprocal rank fusion. WEIGHTED indicates weighted normalization fusion (used together with VectorWeight). If you set this parameter to WEIGHTED in keyword-only or vector-only mode, an InvalidParameter error is returned.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking for search results. Default value: false.
   * 
   * @example
   * false
   */
  rerank?: boolean;
  /**
   * @remarks
   * Optional. Overrides the reranking model configured for the knowledge base for this request. This parameter takes effect when reranking is enabled (in all search modes). Valid values: qwen3-rerank, gte-rerank-v2, and qwen3-vl-rerank. If this parameter is not specified, the value configured for the knowledge base is used. If no value is configured, the default value qwen3-rerank is used. Score distributions differ across models and cannot be compared. Use the same model consistently for a given knowledge base.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * Optional. Overrides the reciprocal rank fusion (RRF) parameter k configured for the knowledge base for this request. This parameter takes effect only in hybrid search (HYBRID) mode. The value must be greater than 0.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The number of most relevant results to return. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * Optional. The vector weight for the WEIGHTED fusion algorithm. Valid values: 0 to 1. The keyword weight equals 1 minus this value. If this parameter is not specified, the value configured for the knowledge base is used. If no value is configured, the default value 0.7 is used.
   * 
   * @example
   * 0.7
   */
  vectorWeight?: number;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      knowledgeBaseName: 'KnowledgeBaseName',
      metadataFilter: 'MetadataFilter',
      mode: 'Mode',
      namespace: 'Namespace',
      query: 'Query',
      rankAlgorithm: 'RankAlgorithm',
      rerank: 'Rerank',
      rerankModel: 'RerankModel',
      rrfK: 'RrfK',
      topK: 'TopK',
      vectorWeight: 'VectorWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      knowledgeBaseName: 'string',
      metadataFilter: 'string',
      mode: 'string',
      namespace: 'string',
      query: 'string',
      rankAlgorithm: 'string',
      rerank: 'boolean',
      rerankModel: 'string',
      rrfK: 'number',
      topK: 'number',
      vectorWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

