// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexDocumentsResponseBodyDataDocuments } from "./ListIndexDocumentsResponseBodyDataDocuments";


export class ListIndexDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of documents in the knowledge base.
   */
  documents?: ListIndexDocumentsResponseBodyDataDocuments[];
  /**
   * @remarks
   * The primary key ID of the knowledge base.
   * 
   * @example
   * pno97tn8iu
   */
  indexId?: string;
  /**
   * @remarks
   * The specified page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The specified number of documents on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of documents returned.
   * 
   * @example
   * 2437
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': ListIndexDocumentsResponseBodyDataDocuments },
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

