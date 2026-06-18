// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the returned file list by file name (without the file extension). Default value: empty, which means the results are not filtered by file name.
   * 
   * @example
   * product-overview
   */
  documentName?: string;
  /**
   * @remarks
   * Filters the returned file list by file import status. Valid values:
   * - INSERT_ERROR: The file failed to be imported.
   * - RUNNING: The file is being imported.
   * - DELETED: The file has been deleted.
   * - FINISH: The file was imported.
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
   * - true: Fuzzy matching is used to filter the returned file list by file name.
   * - false: Exact matching is used to filter the returned file list by file name.
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
   * This parameter is required.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of files to display per page in a paging query. No maximum limit.
   * Default value: 10.
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

