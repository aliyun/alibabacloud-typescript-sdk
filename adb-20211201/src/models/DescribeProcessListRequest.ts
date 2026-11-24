// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL Data Lakehouse Edition clusters in a specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-xxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The filter keyword. Only **SELECT** is supported.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The sorting rule in JSON format. Example: `[{"Field":"Time","Type":"Desc" },{ "Field":"User", "Type":"Asc" }]`. Parameters:
   * - **Field**: The field name used for sorting. Valid values: Time, User, Host, and DB.
   * - **Type**: The sort order. Valid values: **Desc** (descending) and **Asc** (ascending).
   * 
   * @example
   * [ { "Field":"Time","Type":"Desc" },  { "Field":"User", "Type":"Asc" }]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
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
   * Filters queries by runtime and displays only queries whose runtime exceeds the specified value. Unit: seconds.
   * 
   * @example
   * 20
   */
  runningTime?: number;
  /**
   * @remarks
   * Specifies whether to display the full SQL statement. Valid values:
   * - **True**: Displays the full SQL statement.
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

