// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchInfoRequestKnowledgeBaseFilters extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pai_qa
   */
  collectionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * what is pai
   */
  query?: string;
  /**
   * @example
   * 5
   */
  resultLimit?: number;
  /**
   * @example
   * 0.7827883223
   */
  scoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      query: 'Query',
      resultLimit: 'ResultLimit',
      scoreThreshold: 'ScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      query: 'string',
      resultLimit: 'number',
      scoreThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInfoRequestWebFilters extends $dara.Model {
  category?: string;
  includeSites?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * what is dsw
   */
  query?: string;
  /**
   * @example
   * 5
   */
  resultLimit?: number;
  /**
   * @example
   * 0.832883223
   */
  scoreThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      includeSites: 'IncludeSites',
      query: 'Query',
      resultLimit: 'ResultLimit',
      scoreThreshold: 'ScoreThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      includeSites: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      resultLimit: 'number',
      scoreThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.includeSites)) {
      $dara.Model.validateArray(this.includeSites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchInfoRequest extends $dara.Model {
  knowledgeBaseFilters?: SearchInfoRequestKnowledgeBaseFilters[];
  webFilters?: SearchInfoRequestWebFilters[];
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseFilters: 'KnowledgeBaseFilters',
      webFilters: 'WebFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseFilters: { 'type': 'array', 'itemType': SearchInfoRequestKnowledgeBaseFilters },
      webFilters: { 'type': 'array', 'itemType': SearchInfoRequestWebFilters },
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseFilters)) {
      $dara.Model.validateArray(this.knowledgeBaseFilters);
    }
    if(Array.isArray(this.webFilters)) {
      $dara.Model.validateArray(this.webFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

