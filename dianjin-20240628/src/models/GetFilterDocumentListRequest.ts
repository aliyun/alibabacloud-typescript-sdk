// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFilterDocumentListRequestAnd extends $dara.Model {
  /**
   * @remarks
   * Weight of the value in the text retrieval engine. Default is 1.
   * 
   * @example
   * 1
   */
  boost?: number;
  /**
   * @remarks
   * Metadata key in the document library.
   * 
   * @example
   * company
   */
  key?: string;
  /**
   * @remarks
   * ### Relationship between the stored metadata value and your input value
   * 
   * - eq: The stored metadata value equals your input value.
   * 
   * - contains: The stored metadata value list contains your input value.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * Input metadata value.
   * 
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
   * @remarks
   * Weight of the value in the text retrieval engine. Default is 1.
   * 
   * @example
   * 1
   */
  boost?: number;
  /**
   * @remarks
   * Metadata key in the document library.
   * 
   * @example
   * company
   */
  key?: string;
  /**
   * @remarks
   * ### Relationship between the stored metadata value and your input value
   * 
   * - eq: The stored metadata value equals your input value.
   * 
   * - contains: The stored metadata value list contains your input value.
   * 
   * @example
   * contains
   */
  operator?: string;
  /**
   * @remarks
   * Input metadata value.
   * 
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
  /**
   * @remarks
   * AND expression to filter documents or document chunks.
   */
  and?: GetFilterDocumentListRequestAnd[];
  /**
   * @remarks
   * List of document IDs to filter documents or document chunks.
   */
  docIdList?: string[];
  /**
   * @remarks
   * Document library ID to filter documents or document chunks.
   * 
   * This parameter is required.
   * 
   * @example
   * cjshcxxxx
   */
  libraryId?: string;
  /**
   * @remarks
   * OR expression to filter documents or document chunks.
   */
  or?: GetFilterDocumentListRequestOr[];
  /**
   * @remarks
   * Page number for pagination.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Number of records per page for pagination.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of document statuses to filter documents.
   * 
   * ### Document parsing status codes
   * 
   * *Status codes: WaitRefresh, InQueue, FetchingData, Embedding, Completed, FormatError, Error*
   * 
   * - Completed: Active. Document parsing completed.
   * 
   * - Error: Inactive. Document parsing failed.
   * 
   * - FormatError: File format error. Re-upload the file in the correct format if it is encrypted or incomplete.
   * 
   * - InQueue: Pending. Document is waiting for parsing.
   * 
   * - Parsed: Parsing completed.
   * 
   * - Other statuses are internal system states. For example, WaitRefresh means the task is scheduled. FetchingData means parsing is in progress. Embedding means index building is in progress.
   */
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

