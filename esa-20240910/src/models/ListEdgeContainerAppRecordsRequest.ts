// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppRecordsRequest extends $dara.Model {
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
   * *   CreateTime: the time when the domain name was associated.
   * *   CreateTime: the time when the domain name was last modified.
   * 
   * @example
   * CreateTime
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
   * The page number. Valid values: **1** to **100000**. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 500.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword that is used for the search.
   * 
   * @example
   * ver-1006157458290860032
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderKey: 'OrderKey',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

