// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseRequestBody extends $dara.Model {
  /**
   * @remarks
   * The JSON expression tree used to filter search results by document metadata. The maximum length is 8,192 characters. Logical nodes include {"AndAll":[child nodes...]} (all conditions met), {"OrAll":[child nodes...]} (any condition met), and {"NotAll":[child nodes...]} (no conditions met). Nesting is supported. Leaf nodes are in the format of {"Key":field name,"Operator":operator,"Value":value}. For In and NotIn operators, use "Values":[values...]. Valid operators include Equals, NotEquals, In, NotIn, GreaterThan, GreaterThanOrEqual, LessThan, LessThanOrEqual, StartsWith, and StringContains. Range operators apply only to LONG, DOUBLE, and DATETIME types. String operators apply only to the STRING type. Fields must be declared in the metadataSchema of the knowledge base. The nesting depth cannot exceed 5, and the total number of leaf conditions cannot exceed 20. DATETIME values accept ISO-8601 format with time zone, yyyy-MM-dd HH:mm:ss, or yyyy-MM-dd. OTS DSL, system fields, and tenant control fields are not accepted.
   * 
   * @example
   * {"AndAll":[{"Key":"env","Operator":"In","Values":["prod","staging"]},{"Key":"score","Operator":"GreaterThan","Value":"0.8"}]}
   */
  metadataFilter?: string;
  /**
   * @remarks
   * The search mode. KEYWORD indicates keyword retrieve, VECTOR indicates vector retrieve, and HYBRID indicates hybrid retrieve. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is HYBRID.
   * 
   * @example
   * HYBRID
   */
  mode?: string;
  /**
   * @remarks
   * The text used for both keyword retrieve and vector retrieve. The maximum length is 4,096 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Product documentation
   */
  query?: string;
  /**
   * @remarks
   * The fusion algorithm. RRF indicates reciprocal rank fusion, and WEIGHTED indicates weighted normalization fusion. This parameter takes effect only in HYBRID mode. If WEIGHTED is explicitly passed in a non-HYBRID mode, an InvalidParameter error is returned. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is RRF.
   * 
   * @example
   * RRF
   */
  rankAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to enable reranking. This parameter applies to the KEYWORD, VECTOR, and HYBRID modes. An explicit value overrides the knowledge base configuration. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is false.
   */
  rerank?: boolean;
  /**
   * @remarks
   * The reranking model. This parameter takes effect in all search modes when reranking is enabled. Valid values: qwen3-rerank, qwen3.7-text-rerank, gte-rerank-v2, and qwen3-vl-rerank. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is qwen3-rerank. Do not compare score distributions across different models. Use the same model for a given knowledge base.
   * 
   * @example
   * qwen3-rerank
   */
  rerankModel?: string;
  /**
   * @remarks
   * The RRF fusion parameter k that overrides the knowledge base configuration for the current request. This parameter takes effect only in HYBRID mode and must be greater than 0. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is 60.
   * 
   * @example
   * 60
   */
  rrfK?: number;
  /**
   * @remarks
   * The expected number of results. Valid values: 1 to 100. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is 10. The actual number of results may be smaller after permission and filtering verification.
   * 
   * @example
   * 10
   */
  topK?: number;
  /**
   * @remarks
   * The vector leg weight for WEIGHTED fusion. Valid values: 0 to 1. The keyword leg weight is 1 minus this value. If this parameter is omitted, the knowledge base configuration is used. If the knowledge base is not configured, the default value is 0.7.
   * 
   * @example
   * 0.7
   */
  vectorWeight?: number;
  static names(): { [key: string]: string } {
    return {
      metadataFilter: 'metadataFilter',
      mode: 'mode',
      query: 'query',
      rankAlgorithm: 'rankAlgorithm',
      rerank: 'rerank',
      rerankModel: 'rerankModel',
      rrfK: 'rrfK',
      topK: 'topK',
      vectorWeight: 'vectorWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataFilter: 'string',
      mode: 'string',
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

export class SearchKnowledgeBaseRequest extends $dara.Model {
  /**
   * @remarks
   * The search text and the search configuration overrides for the current request. If the mode, count, fusion, and reranking parameters are omitted, the knowledge base configuration is used. If the knowledge base is not configured, the system default values specified in each field description are used. If metadataFilter is omitted, no metadata filtering is applied.
   * 
   * This parameter is required.
   */
  body?: SearchKnowledgeBaseRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: SearchKnowledgeBaseRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

