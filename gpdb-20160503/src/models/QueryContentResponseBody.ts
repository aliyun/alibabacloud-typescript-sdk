// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentResponseBodyEntitiesEntities extends $dara.Model {
  /**
   * @remarks
   * Entity description.
   * 
   * @example
   * A former advisor at DeepMind.
   */
  description?: string;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * Dr. Wang
   */
  entity?: string;
  /**
   * @remarks
   * The file name.
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
   * 
   * @example
   * Figure
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

export class QueryContentResponseBodyEntities extends $dara.Model {
  entities?: QueryContentResponseBodyEntitiesEntities[];
  static names(): { [key: string]: string } {
    return {
      entities: 'entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': QueryContentResponseBodyEntitiesEntities },
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

export class QueryContentResponseBodyMatchesMatchListVector extends $dara.Model {
  vectorList?: number[];
  static names(): { [key: string]: string } {
    return {
      vectorList: 'VectorList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vectorList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.vectorList)) {
      $dara.Model.validateArray(this.vectorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyMatchesMatchList extends $dara.Model {
  /**
   * @remarks
   * The content that is used for full-text search. If you leave this parameter empty, only vector search is used. If you do not leave this parameter empty, two-way retrieval based on vector search and full-text search is used.
   * 
   * >  You must specify at least one of the Content and Vector parameters.
   * 
   * @example
   * Cloud-native data warehouse AnalyticDB PostgreSQL Edition provides a simple, fast, and cost-effective PB-level cloud data warehouse solution.
   */
  content?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * >  You can call the [ListDocuments](https://help.aliyun.com/document_detail/2618453.html) operation to query a list of documents.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The public URL of the query result image, valid for 2 hours
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
   * Metadata during document loader loading.
   * 
   * @example
   * {"page_pos": 1}
   */
  loaderMetadata?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * Re-ranking score.
   * 
   * @example
   * 6.2345
   */
  rerankScore?: number;
  /**
   * @remarks
   * Source of the retrieval results:
   * 
   * - 1 indicates vector retrieval
   * - 2 indicates full-text retrieval
   * - 3 indicates dual-path recall
   * 
   * @example
   * 1
   */
  retrievalSource?: number;
  /**
   * @remarks
   * The similarity score of the data. It is related to the `l2, ip, or cosine` algorithm that is specified when you create an index.
   * 
   * @example
   * 0.12345
   */
  score?: number;
  /**
   * @remarks
   * The vector data. The length of the value must be the same as that of the Dimension parameter in the [CreateCollection](https://help.aliyun.com/document_detail/2401497.html) operation.
   * 
   * >  If you leave this parameter empty, only full-text search results are returned.
   */
  vector?: QueryContentResponseBodyMatchesMatchListVector;
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
      vector: 'Vector',
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
      vector: QueryContentResponseBodyMatchesMatchListVector,
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.vector && typeof (this.vector as any).validate === 'function') {
      (this.vector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyMatches extends $dara.Model {
  matchList?: QueryContentResponseBodyMatchesMatchList[];
  static names(): { [key: string]: string } {
    return {
      matchList: 'MatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchList: { 'type': 'array', 'itemType': QueryContentResponseBodyMatchesMatchList },
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

export class QueryContentResponseBodyRelationsRelations extends $dara.Model {
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
   * The file name.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the relationship edge.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The source entity.
   * 
   * @example
   * Former DeepMind consultant
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

export class QueryContentResponseBodyRelations extends $dara.Model {
  relations?: QueryContentResponseBodyRelationsRelations[];
  static names(): { [key: string]: string } {
    return {
      relations: 'relations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relations: { 'type': 'array', 'itemType': QueryContentResponseBodyRelationsRelations },
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

export class QueryContentResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The number of entries used for vectorization.
   * > An entry refers to the number of processing items when performing vectorization on text or images. For example, processing one piece of text counts as 1 entry, while processing one image counts as 2 entries.
   * 
   * @example
   * 10
   */
  embeddingEntries?: string;
  /**
   * @remarks
   * Number of tokens used for vectorization.
   * 
   * > A token refers to the smallest unit into which the input text is divided; a token can be a word, a phrase, a punctuation mark, or a character, etc.
   * 
   * @example
   * 100
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

export class QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch extends $dara.Model {
  /**
   * @remarks
   * Text content.
   * 
   * @example
   * AnalyticDB for PostgreSQL is a cloud-native data warehouse service that provides large-scale parallel processing (MPP) capabilities for massive online data analysis.
   */
  content?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * Unique ID of the vector data.
   * 
   * @example
   * doca-2345
   */
  id?: string;
  /**
   * @remarks
   * Metadata information when the document loader was loaded.
   * 
   * @example
   * {"page_pos": 2}
   */
  loaderMetadata?: string;
  /**
   * @remarks
   * Metadata map.
   */
  metadata?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch extends $dara.Model {
  windowMatch?: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch[];
  static names(): { [key: string]: string } {
    return {
      windowMatch: 'windowMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatch: { 'type': 'array', 'itemType': QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch },
    };
  }

  validate() {
    if(Array.isArray(this.windowMatch)) {
      $dara.Model.validateArray(this.windowMatch);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyWindowMatchesWindowMatches extends $dara.Model {
  /**
   * @remarks
   * List of individual top windowed matches.
   */
  windowMatch?: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch;
  static names(): { [key: string]: string } {
    return {
      windowMatch: 'WindowMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatch: QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatch,
    };
  }

  validate() {
    if(this.windowMatch && typeof (this.windowMatch as any).validate === 'function') {
      (this.windowMatch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBodyWindowMatches extends $dara.Model {
  windowMatches?: QueryContentResponseBodyWindowMatchesWindowMatches[];
  static names(): { [key: string]: string } {
    return {
      windowMatches: 'windowMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      windowMatches: { 'type': 'array', 'itemType': QueryContentResponseBodyWindowMatchesWindowMatches },
    };
  }

  validate() {
    if(Array.isArray(this.windowMatches)) {
      $dara.Model.validateArray(this.windowMatches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Number of tokens used for vectorization.
   * 
   * > A token refers to the smallest unit into which the input text is divided; a token can be a word, a phrase, a punctuation mark, or a character, etc.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  /**
   * @remarks
   * The entities.
   */
  entities?: QueryContentResponseBodyEntities;
  /**
   * @remarks
   * The retrieved data.
   */
  matches?: QueryContentResponseBodyMatches;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The list of relationship edges.
   */
  relations?: QueryContentResponseBodyRelations;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The execution state of the operation. Valid values:
   * 
   * *   **false**: The operation fails.
   * *   **true**: The operation is successful.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Resource usage for this query.
   */
  usage?: QueryContentResponseBodyUsage;
  /**
   * @remarks
   * List of windowed matches.
   */
  windowMatches?: QueryContentResponseBodyWindowMatches;
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
      windowMatches: 'WindowMatches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingTokens: 'string',
      entities: QueryContentResponseBodyEntities,
      matches: QueryContentResponseBodyMatches,
      message: 'string',
      relations: QueryContentResponseBodyRelations,
      requestId: 'string',
      status: 'string',
      usage: QueryContentResponseBodyUsage,
      windowMatches: QueryContentResponseBodyWindowMatches,
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
    if(this.windowMatches && typeof (this.windowMatches as any).validate === 'function') {
      (this.windowMatches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

