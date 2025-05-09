// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDatabaseResponseBodySearchDatabaseList } from "./SearchDatabaseResponseBodySearchDatabaseList";


export class SearchDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
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
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the databases.
   */
  searchDatabaseList?: SearchDatabaseResponseBodySearchDatabaseList;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
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
      searchDatabaseList: 'SearchDatabaseList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      searchDatabaseList: SearchDatabaseResponseBodySearchDatabaseList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.searchDatabaseList && typeof (this.searchDatabaseList as any).validate === 'function') {
      (this.searchDatabaseList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

