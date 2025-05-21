// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword in an SQL statement, which is used to filter queries. Set the value to **SELECT**.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The order in which queries are sorted based on the specified fields. Specify this parameter as an ordered JSON array in the `[{"Field":"Time","Type":"Desc" },{ "Field":"User", "Type":"Asc" }]` format.
   * 
   * *   **Field** specifies the field used to sort queries. Valid values: Time, User, Host, and DB.
   * *   **Type** specifies the sorting sequence. Valid values: **Desc** and **Asc**.
   * 
   * @example
   * [ { "Field":"Time","Type":"Desc" },  { "Field":"User", "Type":"Asc" }]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The execution duration used to filter queries. Queries that take a longer time than the specified execution duration are displayed. Unit: seconds.
   * 
   * @example
   * 5
   */
  runningTime?: number;
  /**
   * @remarks
   * Specifies whether to show a complete SQL statement. Valid values:
   * 
   * *   **True**: shows a complete SQL statement.
   * *   **False**: shows only the first 100 characters of an SQL statement.
   * 
   * >  The default value is False.
   * 
   * @example
   * True
   */
  showFull?: boolean;
  /**
   * @remarks
   * The name of the user used to filter queries.
   * 
   * @example
   * test
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

