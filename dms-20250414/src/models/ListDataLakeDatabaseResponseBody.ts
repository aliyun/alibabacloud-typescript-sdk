// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLDatabase } from "./Dldatabase";


export class ListDataLakeDatabaseResponseBody extends $dara.Model {
  databaseList?: DLDatabase[];
  /**
   * @example
   * 400
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * NesLoKLEdIZrKhDT7I2g****
   */
  nextToken?: string;
  /**
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3****
   */
  requestId?: string;
  /**
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

