// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnassignedNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * Page number for paging, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Performs Fuzzy Matching based on the number. This parameter is optional and defaults to empty. An empty value indicates no filtering.
   * 
   * @example
   * 0833
   */
  searchPattern?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

