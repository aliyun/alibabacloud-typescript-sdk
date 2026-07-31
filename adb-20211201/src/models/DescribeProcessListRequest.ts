// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the AnalyticDB for MySQL Data Lakehouse Edition.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to view details of all AnalyticDB for MySQL Data Lakehouse Edition clusters in the destination region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Filter keyword. Currently, only **SELECT** is supported.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * Sort by the specified field in JSON format, `[{"Field":"Time","Type":"Desc" },{ "Field":"User", "Type":"Asc" }]`. Values:
   * 
   * - **Field**: The name of the field to sort by. Supports Time, User, Host, and DB fields.
   * 
   * - **Type**: Sort type. **Desc** for descending order, **Asc** for ascending order.
   * 
   * @example
   * [ { "Field":"Time","Type":"Desc" },  { "Field":"User", "Type":"Asc" }]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Must be a positive integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page. Values:
   * 
   * - **30** (Default value)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Filter by running time. Displays queries that have run longer than the specified time. Unit: seconds.
   * 
   * @example
   * 20
   */
  runningTime?: number;
  /**
   * @remarks
   * Specifies whether to display the full SQL statement. Values:
   * 
   * - **True**: Displays the full SQL statement.
   * 
   * - **False**: Displays only the first 100 characters of the SQL statement.
   * 
   * > Default value: False.
   * 
   * @example
   * True
   */
  showFull?: boolean;
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * admin
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      runningTime: 'RunningTime',
      showFull: 'ShowFull',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      runningTime: 'number',
      showFull: 'boolean',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

