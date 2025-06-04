// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the queried documents. The default value is null, which means the names are not used to filter the results.
   */
  documentName?: string;
  /**
   * @remarks
   * The import status of the documents to be queried. Valid values:
   * 
   * *   INSERT_ERROR
   * *   RUNNING
   * *   DELETED
   * *   FINISH
   * 
   * The default value is null, which means the import status is not used to filter the results.
   * 
   * @example
   * FINISH
   */
  documentStatus?: string;
  enableNameLike?: string;
  /**
   * @remarks
   * The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 79c0aly8zw
   */
  indexId?: string;
  /**
   * @remarks
   * The page numbers of the pages to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of documents displayed on each page. No maximum value. Default value: 10.
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

