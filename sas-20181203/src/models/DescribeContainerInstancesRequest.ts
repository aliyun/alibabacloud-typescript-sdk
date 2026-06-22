// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Note that field names are case-sensitive. The following fields are included:
   * 
   * - **name**: the search item.
   * - **value**: the value of the search item.
   * - **logicalExp**: the logical relationship between multiple conditions. Valid values:
   *     - **OR**: The conditions are in an OR relationship.
   *     - **AND**: The conditions are in an AND relationship.
   * > You can search for assets by container ID, cluster ID, cluster name, cluster type, risk level, region, and other conditions. Call the [DescribeContainerCriteria](~~DescribeContainerCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"flag","value":"0|8","logicalExp":"AND"},{"name":"ecsType","value":"!8","logicalExp":"AND"}][{"name":"clusterType","value":"NotManagedKubernetes","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Valid values:
   * - **OR**: The conditions are in an OR relationship.
   * - **AND**: The conditions are in an AND relationship.
   * 
   * @example
   * AND
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

