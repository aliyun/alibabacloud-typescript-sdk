// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveKnowledgeBaseResponseBodyDataMatches extends $dara.Model {
  /**
   * @example
   * GraphRAG (Graph Retrieval-Augmented Generation) is an advanced AI framework that combines Knowledge Graphs with Large Language Models (LLMs) to improve the accuracy, context, and reasoning capabilities of information retrieval and generation.
   */
  content?: string;
  /**
   * @example
   * 1.txt
   */
  fileName?: string;
  /**
   * @example
   * 3b35c95-57f3-442f-9220-xxxxx
   */
  id?: string;
  /**
   * @example
   * {"page_pos": 1}
   */
  loaderMetadata?: string;
  /**
   * @example
   * {"title":"test"}
   */
  metadata?: { [key: string]: any };
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
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class RetrieveKnowledgeBaseResponseBodyDataResults extends $dara.Model {
  /**
   * @example
   * GraphRAG (Graph Retrieval-Augmented Generation) is an advanced AI framework that combines Knowledge Graphs with Large Language Models (LLMs) to improve the accuracy, context, and reasoning capabilities of information retrieval and generation.
   */
  content?: string;
  /**
   * @example
   * 1.txt
   */
  fileName?: string;
  /**
   * @example
   * 3b35c95-57f3-442f-9220-xxxxx
   */
  id?: string;
  /**
   * @example
   * {"page_pos": 1}
   */
  loaderMetadata?: string;
  /**
   * @example
   * {"title":"test"}
   */
  metadata?: { [key: string]: any };
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
   * 0.81
   */
  score?: number;
  vector?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
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
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rerankScore: 'number',
      retrievalSource: 'number',
      score: 'number',
      vector: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.vector)) {
      $dara.Model.validateArray(this.vector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgeBaseResponseBodyData extends $dara.Model {
  matches?: RetrieveKnowledgeBaseResponseBodyDataMatches[];
  results?: RetrieveKnowledgeBaseResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      matches: 'Matches',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matches: { 'type': 'array', 'itemType': RetrieveKnowledgeBaseResponseBodyDataMatches },
      results: { 'type': 'array', 'itemType': RetrieveKnowledgeBaseResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.matches)) {
      $dara.Model.validateArray(this.matches);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveKnowledgeBaseResponseBody extends $dara.Model {
  data?: RetrieveKnowledgeBaseResponseBodyData;
  /**
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RetrieveKnowledgeBaseResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

