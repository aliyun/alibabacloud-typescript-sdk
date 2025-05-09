// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersForInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174****
   */
  instanceId?: string;
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
   * 3****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

