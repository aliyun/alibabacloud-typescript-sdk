// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexFileDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the returned file details list by file name. Default value: empty, which means the results are not filtered by file name.
   * 
   * @example
   * TranslationPlatformO&MDocument.
   */
  documentName?: string;
  /**
   * @remarks
   * Filters the returned file list by file import status. Valid values:
   * 
   * - INSERT_ERROR: Import to index failed.
   * - RUNNING: Index building in progress.
   * - DELETED: Deleted.
   * - FINISH: Index building succeeded.
   * - PARSE_FAILED: Parsing failed.
   * - DOC_PARSING: Parsing in progress.
   * 
   * Default value: empty, which means the results are not filtered by file import status.
   * 
   * @example
   * FINISH
   */
  documentStatus?: string;
  /**
   * @remarks
   * Specifies whether to enable fuzzy matching for file names. This parameter is used together with the `DocumentName` parameter. Valid values:
   * 
   * - true: Performs fuzzy matching on the returned file list based on the file name.
   * - false: Performs exact matching on the returned file list based on the file name.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableNameLike?: string;
  /**
   * @remarks
   * The knowledge base ID, which is the `Data.Id` returned by the **CreateIndex** operation.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The page number to query. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of files to display per page in a paginated query. Maximum value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      documentName: 'DocumentName',
      documentStatus: 'DocumentStatus',
      enableNameLike: 'EnableNameLike',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentName: 'string',
      documentStatus: 'string',
      enableNameLike: 'string',
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

