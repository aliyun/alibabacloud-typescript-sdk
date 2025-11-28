// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentResponseBodyEntitiesEntities extends $dara.Model {
  /**
   * @remarks
   * The entity description.
   * 
   * @example
   * A former advisor at DeepMind.
   */
  description?: string;
  /**
   * @remarks
   * The name of the entity.
   * 
   * @example
   * Dr. Wang
   */
  entity?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The entity type.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entity: 'Entity',
      fileName: 'FileName',
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entity: 'string',
      fileName: 'string',
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBodyEntities extends $dara.Model {
  entities?: QueryKnowledgeBasesContentResponseBodyEntitiesEntities[];
  static names(): { [key: string]: string } {
    return {
      entities: 'entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': QueryKnowledgeBasesContentResponseBodyEntitiesEntities },
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBodyMatchesMatchList extends $dara.Model {
  /**
   * @remarks
   * The content of the text.
   */
  content?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The public network URL of the image result. By default, the URL is valid for 2 hours.
   * 
   * You can use the UrlExpiration parameter to specify a validity period.
   * 
   * @example
   * https://xxx-cn-beijing.aliyuncs.com/image/test.png
   */
  fileURL?: string;
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * @example
   * doca-1234
   */
  id?: string;
  /**
   * @remarks
   * Document loader metadata.
   * 
   * @example
   * {"page_pos": 1}
   */
  loaderMetadata?: string;
  /**
   * @remarks
   * The metadata map.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The rerank score.
   * 
   * @example
   * 6.2345
   */
  rerankScore?: number;
  /**
   * @remarks
   * The source of the retrieval results. 1 indicates vector retrieval, 2 indicates full-text retrieval, and 3 indicates dual-path retrieval.
   * 
   * @example
   * 1
   */
  retrievalSource?: number;
  /**
   * @remarks
   * The similarity score of the data. It is related to the algorithm (l2, ip, or cosine) that is specified when you create an index.
   * 
   * @example
   * 0.12345
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      fileURL: 'FileURL',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
      rerankScore: 'RerankScore',
      retrievalSource: 'RetrievalSource',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      fileURL: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rerankScore: 'number',
      retrievalSource: 'number',
      score: 'number',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBodyMatches extends $dara.Model {
  matchList?: QueryKnowledgeBasesContentResponseBodyMatchesMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': QueryKnowledgeBasesContentResponseBodyMatchesMatchList },
    };
  }

  validate() {
    if(Array.isArray(this.matchList)) {
      $dara.Model.validateArray(this.matchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBodyRelationsRelations extends $dara.Model {
  /**
   * @remarks
   * The description of the relationship edge.
   * 
   * @example
   * Dr. Wang previously served as an advisor at DeepMind.
   */
  description?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the link.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The source entity.
   */
  sourceEntity?: string;
  /**
   * @remarks
   * The destination entity.
   * 
   * @example
   * Dr. Wang
   */
  targetEntity?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileName: 'FileName',
      id: 'Id',
      sourceEntity: 'SourceEntity',
      targetEntity: 'TargetEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileName: 'string',
      id: 'string',
      sourceEntity: 'string',
      targetEntity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBodyRelations extends $dara.Model {
  relations?: QueryKnowledgeBasesContentResponseBodyRelationsRelations[];
  static names(): { [key: string]: string } {
    return {
      relations: 'relations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relations: { 'type': 'array', 'itemType': QueryKnowledgeBasesContentResponseBodyRelationsRelations },
    };
  }

  validate() {
    if(Array.isArray(this.relations)) {
      $dara.Model.validateArray(this.relations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The number of entries that are used during vectorization.
   * 
   * >  An entry refers to a single unit of vectorization processing. Processing one text input counts as 1 entry, while processing one image counts as 2 entries.
   * 
   * @example
   * 10
   */
  embeddingEntries?: string;
  /**
   * @remarks
   * The number of tokens that are used for vectorization.
   * 
   * >  A token is the minimum unit for splitting text. A token can be a word, phrase, punctuation, or character.
   * 
   * @example
   * 475
   */
  embeddingTokens?: string;
  static names(): { [key: string]: string } {
    return {
      embeddingEntries: 'EmbeddingEntries',
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingEntries: 'string',
      embeddingTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryKnowledgeBasesContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of tokens that are used during vectorization.
   * 
   * >  A token is the minimum unit for segmenting text. A token can be a word, phrase, punctuation, or character.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  /**
   * @remarks
   * The details of the entity.
   */
  entities?: QueryKnowledgeBasesContentResponseBodyEntities;
  /**
   * @remarks
   * A single data record.
   */
  matches?: QueryKnowledgeBasesContentResponseBodyMatches;
  /**
   * @remarks
   * The returned information.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The details of the relationship edge.
   */
  relations?: QueryKnowledgeBasesContentResponseBodyRelations;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **success**.
   * *   **fail**.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The total number of tokens that are consumed by this query.
   */
  usage?: QueryKnowledgeBasesContentResponseBodyUsage;
  static names(): { [key: string]: string } {
    return {
      embeddingTokens: 'EmbeddingTokens',
      entities: 'Entities',
      matches: 'Matches',
      message: 'Message',
      relations: 'Relations',
      requestId: 'RequestId',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'string',
      entities: QueryKnowledgeBasesContentResponseBodyEntities,
      matches: QueryKnowledgeBasesContentResponseBodyMatches,
      message: 'string',
      relations: QueryKnowledgeBasesContentResponseBodyRelations,
      requestId: 'string',
      status: 'string',
      usage: QueryKnowledgeBasesContentResponseBodyUsage,
    };
  }

  validate() {
    if(this.entities && typeof (this.entities as any).validate === 'function') {
      (this.entities as any).validate();
    }
    if(this.matches && typeof (this.matches as any).validate === 'function') {
      (this.matches as any).validate();
    }
    if(this.relations && typeof (this.relations as any).validate === 'function') {
      (this.relations as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

