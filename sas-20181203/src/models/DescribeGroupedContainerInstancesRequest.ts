// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedContainerInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The conditions for searching assets. This parameter is in JSON format. Separate multiple conditions with commas (,). Example: `[{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]`.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other conditions. Call [DescribeCriteria](~~DescribeCriteria~~) to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The search condition for the specified group type. Set the search condition based on the type specified by GroupField:
   * - If **GroupField** is set to **pod**: specify the pod name to query.
   * - If **GroupField** is set to **appName**: specify the application name to query.
   * - If **GroupField** is set to **namespace**: specify the namespace to query.
   * - If **GroupField** is set to **clusterId**: specify the cluster ID to query.
   * - If **GroupField** is set to **image**: specify the image name to query.
   * > All the preceding search conditions support fuzzy match.
   * 
   * @example
   * cas-adad-qeqwe
   */
  fieldValue?: string;
  /**
   * @remarks
   * The group type to query. Valid values:
   * - **pod**: pod
   * - **appName**: application name
   * - **namespace**: namespace
   * - **clusterId**: cluster ID
   * - **image**: image.
   * 
   * This parameter is required.
   * 
   * @example
   * pod
   */
  groupField?: string;
  /**
   * @remarks
   * The logical relationship among multiple search conditions. Valid values:
   * - **OR**: The search conditions are evaluated with a logical OR.
   * - **AND**: The search conditions are evaluated with a logical AND.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of container assets to display on each page when paging is used. Default value: **20**, which indicates that 20 container assets are displayed on each page.
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
      fieldValue: 'FieldValue',
      groupField: 'GroupField',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      fieldValue: 'string',
      groupField: 'string',
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

