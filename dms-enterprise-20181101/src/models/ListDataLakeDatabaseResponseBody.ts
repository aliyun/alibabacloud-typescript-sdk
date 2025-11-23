// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLDatabase } from "./Dldatabase";


export class ListDataLakeDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of databases.
   */
  databaseList?: DLDatabase[];
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned in a request. You can use this parameter and NextToken to implement paging.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. Set this parameter to the value of NextToken obtained from the previous query.
   * 
   * @example
   * NesLoKLEdIZrKhDT7I2gSw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3471A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: { 'type': 'array', 'itemType': DLDatabase },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.databaseList)) {
      $dara.Model.validateArray(this.databaseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

