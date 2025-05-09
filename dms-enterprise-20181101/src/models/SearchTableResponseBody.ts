// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchTableResponseBodySearchTableList } from "./SearchTableResponseBodySearchTableList";


export class SearchTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1489257F-1B5D-4B5B-89EF-923C12CEEBD1
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the tables.
   */
  searchTableList?: SearchTableResponseBodySearchTableList;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      searchTableList: 'SearchTableList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      searchTableList: SearchTableResponseBodySearchTableList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.searchTableList && typeof (this.searchTableList as any).validate === 'function') {
      (this.searchTableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

