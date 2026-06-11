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
   * The error code.
   * 
   * @example
   * 400
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
   * The maximum number of entries returned per page. This parameter is used with \\`NextToken\\` for paging.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this parameter is empty, no more results are available.
   * 
   * @example
   * NesLoKLEdIZrKhDT7I2g****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID, used for log tracing and troubleshooting.
   * 
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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

