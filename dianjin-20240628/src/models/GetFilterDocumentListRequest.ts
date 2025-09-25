// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilterDocumentListRequestAnd extends $dara.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * eq
   */
  operator?: string;
  /**
   * @example
   * alibaba
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

export class GetFilterDocumentListRequestOr extends $dara.Model {
  /**
   * @example
   * 1
   */
  boost?: number;
  /**
   * @example
   * company
   */
  key?: string;
  /**
   * @example
   * contains
   */
  operator?: string;
  /**
   * @example
   * alibaba
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

export class GetFilterDocumentListRequest extends $dara.Model {
  and?: GetFilterDocumentListRequestAnd[];
  docIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  or?: GetFilterDocumentListRequestOr[];
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      and: 'and',
      docIdList: 'docIdList',
      libraryId: 'libraryId',
      or: 'or',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      and: { 'type': 'array', 'itemType': GetFilterDocumentListRequestAnd },
      docIdList: { 'type': 'array', 'itemType': 'string' },
      libraryId: 'string',
      or: { 'type': 'array', 'itemType': GetFilterDocumentListRequestOr },
      page: 'number',
      pageSize: 'number',
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

