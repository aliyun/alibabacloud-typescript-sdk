// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies the knowledge base. You can call ListCatalogs to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the namespace. The name is specified upon creation and cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * Filters search results by document metadata. The value is a JSON expression tree. Nodes are divided into two types: logical nodes and leaf conditions. Logical nodes include {"AndAll": [child nodes...]} (all conditions met), {"OrAll": [child nodes...]} (any condition met), and {"NotAll": [child nodes...]} (no conditions met). Arbitrary nesting is supported. Leaf conditions are in the format of {"Key": field name, "Operator": operator, "Value": value}. For the In and NotIn operators, use "Values": [values...]. Valid values for Operator: Equals, NotEquals, In, NotIn, GreaterThan, GreaterThanOrEqual, LessThan, and LessThanOrEqual (the last four range operators apply only to LONG, DOUBLE, and DATETIME fields), StartsWith, and StringContains (applies only to STRING fields). The field must be declared in the knowledge base schema. The nesting depth cannot exceed 5, and the total number of leaf conditions cannot exceed 20. Valid formats for DATETIME field values: ISO-8601 with time zone, yyyy-MM-dd HH:mm:ss, or yyyy-MM-dd.
   * 
   * @example
   * {"AndAll": [{"Key": "env", "Operator": "In", "Values": ["prod", "staging"]}, {"OrAll": [{"Key": "score", "Operator": "GreaterThan", "Value": "0.8"}, {"Key": "owner", "Operator": "Equals", "Value": "alice"}]}]}
   */
  metadataFilter?: string;
  /**
   * @remarks
   * The retrieve mode. Valid values:
   * - KEYWORD: keyword retrieve.
   * - VECTOR: AISearch.
   * - HYBRID: hybrid retrieve.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies the knowledge base. You can call ListNamespaces to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The retrieve text. Both keyword retrieve and AISearch are based on this text.
   * 
   * This parameter is required.
   * 
   * @example
   * How to configure event rules
   */
  query?: string;
  /**
   * @remarks
   * Optional. Overrides the fusion algorithm configured for the knowledge base in this request. This parameter takes effect only in HYBRID search mode. Valid values: RRF for reciprocal rank fusion, and WEIGHTED for weighted normalization fusion (used with VectorWeight). If you set this parameter to WEIGHTED in KEYWORD or VECTOR single mode, the InvalidParameter error is returned.
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
   * Optional. Overrides the reranking model configured for the knowledge base in this request. This parameter takes effect when reranking is enabled across all search modes. Valid values: qwen3-rerank, gte-rerank-v2, and qwen3-vl-rerank. If this parameter is not specified, the value configured for the knowledge base is used. If no value is configured, the default value is qwen3-rerank. Score distributions of different models cannot be compared horizontally. We recommend that you use a fixed model for each knowledge base.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * Optional. Overrides the RRF fusion parameter k configured for the knowledge base in this request. This parameter takes effect only in HYBRID search mode and must be greater than 0.
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
   * Optional. The vector path weight for the WEIGHTED fusion algorithm. Valid values: 0 to 1. The keyword path weight is 1 minus this value. If this parameter is not specified, the value configured for the knowledge base is used. If no value is configured, the default value is 0.7.
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

