// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * - **Name**: the version name.
   * - **CreateTime**: the version creation time.
   * - **ModifyTime**: the version modification time.
   * 
   * @example
   * Name
   */
  orderKey?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - **Asc**: ascending order.
   * 
   * - **Desc**: descending order.
   * 
   * @example
   * Desc
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Valid values: any integer from **1** to **65535**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: any integer from **1** to **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query parameter.
   * 
   * @example
   * ver-100568263967926****
   */
  searchKey?: string;
  /**
   * @remarks
   * The type for fuzzy match. Supported values: VersionId and Name.
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

