// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecallDocumentRequestFiltersAnd } from "./RecallDocumentRequestFiltersAnd";
import { RecallDocumentRequestFiltersOr } from "./RecallDocumentRequestFiltersOr";


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

