// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryKnowledgeBasesContentResponseBodyEntitiesEntities extends $dara.Model {
  /**
   * @example
   * A former advisor at DeepMind.
   */
  description?: string;
  /**
   * @example
   * Dr. Wang
   */
  entity?: string;
  /**
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
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
  content?: string;
  /**
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @example
   * https://xxx-cn-beijing.aliyuncs.com/image/test.png
   */
  fileURL?: string;
  /**
   * @example
   * doca-1234
   */
  id?: string;
  /**
   * @example
   * {"page_pos": 1}
   */
  loaderMetadata?: string;
  metadata?: { [key: string]: string };
  /**
   * @example
   * 6.2345
   */
  rerankScore?: number;
  /**
   * @example
   * 1
   */
  retrievalSource?: number;
  /**
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
   * @example
   * Dr. Wang previously served as an advisor at DeepMind.
   */
  description?: string;
  /**
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  sourceEntity?: string;
  /**
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
   * @example
   * 10
   */
  embeddingEntries?: string;
  /**
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
   * @example
   * 100
   */
  embeddingTokens?: string;
  entities?: QueryKnowledgeBasesContentResponseBodyEntities;
  matches?: QueryKnowledgeBasesContentResponseBodyMatches;
  /**
   * @example
   * success
   */
  message?: string;
  relations?: QueryKnowledgeBasesContentResponseBodyRelations;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  status?: string;
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

