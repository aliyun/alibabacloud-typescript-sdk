// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentResponseBodyEntitiesEntities extends $dara.Model {
  description?: string;
  entity?: string;
  fileName?: string;
  id?: string;
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
  content?: string;
  fileName?: string;
  fileURL?: string;
  id?: string;
  loaderMetadata?: string;
  metadata?: { [key: string]: string };
  rerankScore?: number;
  retrievalSource?: number;
  score?: number;
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
  description?: string;
  fileName?: string;
  id?: string;
  sourceEntity?: string;
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
   * 
   * > An entry is the number of operations during vectorization for text or images. For example, processing text once counts as 1 entry, and processing an image once counts as 2 entries.
   * 
   * @example
   * 10
   */
  embeddingEntries?: string;
  /**
   * @remarks
   * The number of tokens used for vectorization.
   * 
   * > A token is the smallest unit into which the input text is divided. A token can be a word, a phrase, a punctuation mark, or a character.
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
  content?: string;
  fileName?: string;
  id?: string;
  loaderMetadata?: string;
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
   * The number of tokens used for vectorization.
   * 
   * > A token is the smallest unit into which the input text is divided. A token can be a word, a phrase, a punctuation mark, or a character.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  entities?: QueryContentResponseBodyEntities;
  matches?: QueryContentResponseBodyMatches;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
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
   * The status. Valid values:
   * 
   * - **success**: The operation was successful.
   * 
   * - **fail**: The operation failed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The resource usage for the query.
   */
  usage?: QueryContentResponseBodyUsage;
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

