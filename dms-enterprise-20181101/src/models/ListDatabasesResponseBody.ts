// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabasesResponseBodyDatabaseList } from "./ListDatabasesResponseBodyDatabaseList";


export class ListDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the databases.
   */
  databaseList?: ListDatabasesResponseBodyDatabaseList;
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
   * 5541CDA6-F674-435C-81BD-40C2FB926CE3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of databases that belong to an instance.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: ListDatabasesResponseBodyDatabaseList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.databaseList && typeof (this.databaseList as any).validate === 'function') {
      (this.databaseList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

