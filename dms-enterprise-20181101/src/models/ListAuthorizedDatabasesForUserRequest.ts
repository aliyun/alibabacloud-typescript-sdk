// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedDatabasesForUserRequest extends $dara.Model {
  /**
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @example
   * product
   */
  envType?: string;
  /**
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * policy_test
   */
  searchKey?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 51****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      logic: 'boolean',
      pageNumber: 'string',
      pageSize: 'string',
      searchKey: 'string',
      tid: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

