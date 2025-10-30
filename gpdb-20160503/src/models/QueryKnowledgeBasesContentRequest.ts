// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentRequestMergeMethodArgsRrf extends $dara.Model {
  /**
   * @example
   * 60
   */
  k?: number;
  static names(): { [key: string]: string } {
    return {
      k: 'K',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestMergeMethodArgsWeight extends $dara.Model {
  weights?: number[];
  static names(): { [key: string]: string } {
    return {
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weights: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.weights)) {
      $dara.Model.validateArray(this.weights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestMergeMethodArgs extends $dara.Model {
  rrf?: QueryKnowledgeBasesContentRequestMergeMethodArgsRrf;
  weight?: QueryKnowledgeBasesContentRequestMergeMethodArgsWeight;
  static names(): { [key: string]: string } {
    return {
      rrf: 'Rrf',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rrf: QueryKnowledgeBasesContentRequestMergeMethodArgsRrf,
      weight: QueryKnowledgeBasesContentRequestMergeMethodArgsWeight,
    };
  }

  validate() {
    if(this.rrf && typeof (this.rrf as any).validate === 'function') {
      (this.rrf as any).validate();
    }
    if(this.weight && typeof (this.weight as any).validate === 'function') {
      (this.weight as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs extends $dara.Model {
  /**
   * @example
   * 60
   */
  graphTopK?: number;
  static names(): { [key: string]: string } {
    return {
      graphTopK: 'GraphTopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphTopK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollectionQueryParams extends $dara.Model {
  /**
   * @example
   * id = \\"llm-52tvykqt6u67iw73_j6ovptwjk7_file_6ce3da1f7e69495d9f491f2180c86973_11967297\\"
   */
  filter?: string;
  /**
   * @example
   * true
   */
  graphEnhance?: boolean;
  graphSearchArgs?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs;
  /**
   * @example
   * Cascaded
   */
  hybridSearch?: string;
  hybridSearchArgs?: { [key: string]: any };
  /**
   * @example
   * cosine
   */
  metrics?: string;
  /**
   * @example
   * 20
   */
  offset?: number;
  /**
   * @example
   * file_id,sort_num
   */
  orderBy?: string;
  recallWindow?: number[];
  /**
   * @example
   * 2.0
   */
  rerankFactor?: number;
  /**
   * @example
   * 776
   */
  topK?: number;
  /**
   * @example
   * false
   */
  useFullTextRetrieval?: boolean;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      graphEnhance: 'GraphEnhance',
      graphSearchArgs: 'GraphSearchArgs',
      hybridSearch: 'HybridSearch',
      hybridSearchArgs: 'HybridSearchArgs',
      metrics: 'Metrics',
      offset: 'Offset',
      orderBy: 'OrderBy',
      recallWindow: 'RecallWindow',
      rerankFactor: 'RerankFactor',
      topK: 'TopK',
      useFullTextRetrieval: 'UseFullTextRetrieval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      graphEnhance: 'boolean',
      graphSearchArgs: QueryKnowledgeBasesContentRequestSourceCollectionQueryParamsGraphSearchArgs,
      hybridSearch: 'string',
      hybridSearchArgs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: 'string',
      offset: 'number',
      orderBy: 'string',
      recallWindow: { 'type': 'array', 'itemType': 'number' },
      rerankFactor: 'number',
      topK: 'number',
      useFullTextRetrieval: 'boolean',
    };
  }

  validate() {
    if(this.graphSearchArgs && typeof (this.graphSearchArgs as any).validate === 'function') {
      (this.graphSearchArgs as any).validate();
    }
    if(this.hybridSearchArgs) {
      $dara.Model.validateMap(this.hybridSearchArgs);
    }
    if(Array.isArray(this.recallWindow)) {
      $dara.Model.validateArray(this.recallWindow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequestSourceCollection extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * knowledge22
   */
  collection?: string;
  /**
   * @example
   * ns_cloud_index
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns_password
   */
  namespacePassword?: string;
  queryParams?: QueryKnowledgeBasesContentRequestSourceCollectionQueryParams;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      queryParams: 'QueryParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      queryParams: QueryKnowledgeBasesContentRequestSourceCollectionQueryParams,
    };
  }

  validate() {
    if(this.queryParams && typeof (this.queryParams as any).validate === 'function') {
      (this.queryParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @example
   * RRF
   */
  mergeMethod?: string;
  mergeMethodArgs?: QueryKnowledgeBasesContentRequestMergeMethodArgs;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 2
   */
  rerankFactor?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceCollection?: QueryKnowledgeBasesContentRequestSourceCollection[];
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DBInstanceId: 'DBInstanceId',
      mergeMethod: 'MergeMethod',
      mergeMethodArgs: 'MergeMethodArgs',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rerankFactor: 'RerankFactor',
      sourceCollection: 'SourceCollection',
      topK: 'TopK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DBInstanceId: 'string',
      mergeMethod: 'string',
      mergeMethodArgs: QueryKnowledgeBasesContentRequestMergeMethodArgs,
      ownerId: 'number',
      regionId: 'string',
      rerankFactor: 'number',
      sourceCollection: { 'type': 'array', 'itemType': QueryKnowledgeBasesContentRequestSourceCollection },
      topK: 'number',
    };
  }

  validate() {
    if(this.mergeMethodArgs && typeof (this.mergeMethodArgs as any).validate === 'function') {
      (this.mergeMethodArgs as any).validate();
    }
    if(Array.isArray(this.sourceCollection)) {
      $dara.Model.validateArray(this.sourceCollection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

