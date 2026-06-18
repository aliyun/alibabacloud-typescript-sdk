// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndicesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the knowledge base. You can use this parameter to search for a knowledge base by name. The name must be 1 to 20 characters in length and can contain characters classified as letters in Unicode (including English letters, Chinese characters, and digits). The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: empty, which queries all knowledge bases in the specified workspace.
   * 
   * @example
   * idx_status_score
   */
  indexName?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of knowledge bases to display per page in a paging query. No maximum limit.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      indexName: 'IndexName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

