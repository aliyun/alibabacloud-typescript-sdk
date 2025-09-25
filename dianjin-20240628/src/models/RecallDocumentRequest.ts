// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecallDocumentRequestFiltersAnd extends $dara.Model {
  /**
   * @example
   * 20
   */
  boost?: number;
  /**
   * @example
   * docType
   */
  key?: string;
  /**
   * @example
   * contains
   */
  operator?: string;
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
   * @example
   * 30
   */
  boost?: number;
  /**
   * @example
   * researcher
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
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
  and?: RecallDocumentRequestFiltersAnd[];
  /**
   * @example
   * Text
   */
  chunkType?: string;
  docIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdbjhvs
   */
  libraryId?: string;
  or?: RecallDocumentRequestFiltersOr[];
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
  filters?: RecallDocumentRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * false
   */
  rearrangement?: boolean;
  /**
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

