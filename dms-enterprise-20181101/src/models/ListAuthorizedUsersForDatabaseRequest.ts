// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersForDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 135***
   */
  dbId?: string;
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
   * poc_test
   */
  searchKey?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      logic: 'boolean',
      pageNumber: 'string',
      pageSize: 'string',
      searchKey: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

