// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting field. This parameter is left empty by default. Valid values:
   * 
   * *   Name: the version name.
   * *   CreateTime: the time when the version was created.
   * *   UpdateTime: the time when the version was last modified.
   * 
   * @example
   * CreateTime
   */
  orderKey?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. This parameter is left empty by default. Valid values:
   * 
   * *   ASC: in ascending order.
   * *   DESC: in descending order.
   * 
   * @example
   * Asc
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: **1**. Valid values: 1 to 65535.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * ver-1005682639679266816
   */
  searchKey?: string;
  /**
   * @remarks
   * The search criterion based on which you want to perform fuzzy search. Valid values:
   * 
   * *   Appid: the application ID.
   * *   Name: the application name.
   * 
   * @example
   * Appid
   */
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      searchType: 'SearchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderKey: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      searchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

