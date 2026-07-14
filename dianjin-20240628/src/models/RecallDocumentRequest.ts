// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallDocumentRequestFiltersAnd extends $dara.Model {
  /**
   * @remarks
   * Keyword weight.
   * 
   * @example
   * 20
   */
  boost?: number;
  /**
   * @remarks
   * The key of the metadata in the document library.
   * 
   * @example
   * docType
   */
  key?: string;
  /**
   * @remarks
   * The relationship between the value stored in the document library metadata key and the value you enter.
   * 
   * - eq: The value stored in the document library metadata key equals the value you enter.
   * 
   * - lte: The value stored in the document library metadata key is less than or equal to the value you enter.
   * 
   * - gte: The value stored in the document library metadata key is greater than or equal to the value you enter.
   * 
   * - lt: The value stored in the document library metadata key is less than the value you enter.
   * 
   * - gt: The value stored in the document library metadata key is greater than the value you enter.
   * 
   * - contains: The list of values stored in the document library metadata key contains the value you enter.
   * 
   * @example
   * contains
   */
  operator?: string;
  /**
   * @remarks
   * The value of the metadata you enter.
   * 
   * @example
   * 策略报告
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFiltersOr extends $dara.Model {
  /**
   * @remarks
   * Keyword weight.
   * 
   * @example
   * 30
   */
  boost?: number;
  /**
   * @remarks
   * The key of the metadata in the document library.
   * 
   * @example
   * researcher
   */
  key?: string;
  /**
   * @remarks
   * The relationship between the value stored in the document library metadata key and the value you enter.
   * 
   * - eq: The value stored in the document library metadata key equals the value you enter.
   * 
   * - lte: The value stored in the document library metadata key is less than or equal to the value you enter.
   * 
   * - gte: The value stored in the document library metadata key is greater than or equal to the value you enter.
   * 
   * - lt: The value stored in the document library metadata key is less than the value you enter.
   * 
   * - gt: The value stored in the document library metadata key is greater than the value you enter.
   * 
   * - contains: The list of values stored in the document library metadata key contains the value you enter.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The value of the metadata you enter.
   * 
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      boost: 'boost',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boost: 'number',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequestFilters extends $dara.Model {
  /**
   * @remarks
   * AND expression, used to filter documents/document chunks.
   */
  and?: RecallDocumentRequestFiltersAnd[];
  /**
   * @remarks
   * Document chunk type, used to filter document chunks, such as: Text, Graph, Table, FAQ.
   * 
   * @example
   * Text
   */
  chunkType?: string;
  /**
   * @remarks
   * Document ID list, used to filter documents/document chunks.
   */
  docIdList?: string[];
  /**
   * @remarks
   * Document library ID, used to filter documents/document chunks.
   * 
   * This parameter is required.
   * 
   * @example
   * sdbjhvs
   */
  libraryId?: string;
  /**
   * @remarks
   * OR expression, used to filter documents/document chunks.
   */
  or?: RecallDocumentRequestFiltersOr[];
  /**
   * @remarks
   * Document status list, used to filter documents.
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      chunkType: 'chunkType',
      docIdList: 'docIdList',
      libraryId: 'libraryId',
      or: 'or',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': RecallDocumentRequestFiltersAnd },
      chunkType: 'string',
      docIdList: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
      or: { 'type': 'array', 'itemType': RecallDocumentRequestFiltersOr },
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.and)) {
      $dara.Model.validateArray(this.and);
    }
    if(Array.isArray(this.docIdList)) {
      $dara.Model.validateArray(this.docIdList);
    }
    if(Array.isArray(this.or)) {
      $dara.Model.validateArray(this.or);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecallDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Metadata filter conditions.
   */
  filters?: RecallDocumentRequestFilters[];
  /**
   * @remarks
   * Text.
   * 
   * This parameter is required.
   * 
   * @example
   * 欧洲杯历史上有哪些球队因为球员的适应新文化而受益
   */
  query?: string;
  /**
   * @remarks
   * Enable parent-child document chunk retrieval.
   * 
   * - Parent-child document chunks: During document parsing, a complete semantic block, such as a paragraph or a section, might split into multiple document chunks. This depends on your chunking strategy. When you enable parent-child document retrieval, the system attempts to complete the semantic block of the retrieved document chunk. This makes the corpus more semantically complete when constructing prompts, improving answer completeness and accuracy.
   * 
   * @example
   * false
   */
  rearrangement?: boolean;
  /**
   * @remarks
   * The number of document chunks to retrieve.
   * 
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'filters',
      query: 'query',
      rearrangement: 'rearrangement',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': RecallDocumentRequestFilters },
      query: 'string',
      rearrangement: 'boolean',
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

