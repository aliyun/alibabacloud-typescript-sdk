// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The sorting field. Valid values:
   * 
   * *   Name: the version name.
   * *   CreateTime: the time when the version was created.
   * *   UpdateTime: the time when the version was last modified.
   * 
   * @example
   * Name
   */
  orderKey?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   ASC: in ascending order.
   * *   DESC: in descending order.
   * 
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 65535.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used for the search.
   * 
   * @example
   * ver-100568263967926****
   */
  searchKey?: string;
  /**
   * @remarks
   * The parameter used for fuzzy search. Valid values: VersionId and Name.
   * 
   * @example
   * VersionId
   */
  searchType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
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
      appId: 'string',
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

