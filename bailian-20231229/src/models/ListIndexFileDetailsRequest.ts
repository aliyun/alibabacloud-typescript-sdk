// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexFileDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the documents to return. If you do not specify this parameter, the results are not filtered by name.
   * 
   * @example
   * 翻译平台运维文档
   */
  documentName?: string;
  /**
   * @remarks
   * The import status of the documents to return. Valid values:
   * 
   * - INSERT_ERROR: The document failed to be imported.
   * 
   * - RUNNING: The document is being imported.
   * 
   * - DELETED: The document has been deleted.
   * 
   * - FINISH: The document was imported successfully.
   * 
   * If you do not specify this parameter, the results are not filtered by import status.
   * 
   * @example
   * FINISH
   */
  documentStatus?: string;
  /**
   * @remarks
   * Specifies whether to perform a fuzzy search based on the document name. This parameter is used with the `DocumentName` parameter. Valid values:
   * 
   * - true: Performs a fuzzy search based on the document name.
   * 
   * - false: Performs an exact match based on the document name.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableNameLike?: string;
  /**
   * @remarks
   * The ID of the knowledge base. This is the value of the `Data.Id` parameter returned by the **CreateIndex** operation.
   * 
   * @example
   * 79c0alxxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The number of the page to return. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of documents to return on each page. Maximum value: 10.
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

