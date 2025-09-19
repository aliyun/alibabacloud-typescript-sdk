// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedContainerInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. Specify the value in the JSON format. Separate multiple search conditions with commas (,). Example: `[{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]`.
   * 
   * >  Supported search conditions include the instance ID, instance name, virtual private cloud (VPC) ID, region, and public IP address. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword that you want to use to query containers. This parameter depends on the value of the GroupField parameter.
   * 
   * *   If the **GroupField** parameter is set to **pod**, set this parameter to the name of the pod that you want to query.
   * *   If the **GroupField** parameter is set to **appName**, set this parameter to the name of the application that you want to query.
   * *   If the **GroupField** parameter is set to **namespace**, set this parameter to the namespace that you want to query.
   * *   If the **GroupField** parameter is set to **clusterId**, set this parameter to the ID of the cluster that you want to query.
   * *   If the **GroupField** parameter is set to **image**, set this parameter to the name of the image that you want to query.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * cas-adad-qeqwe
   */
  fieldValue?: string;
  /**
   * @remarks
   * The group type that you want to use to query containers. Valid values:
   * 
   * *   **pod**
   * *   **appName**
   * *   **namespace**
   * *   **clusterId**
   * *   **image**
   * 
   * This parameter is required.
   * 
   * @example
   * pod
   */
  groupField?: string;
  /**
   * @remarks
   * The logical relationship that you want to use to evaluate multiple search conditions. Valid values:
   * 
   * *   **OR**: Search conditions are evaluated by using a logical **OR**.
   * *   **AND**: Search conditions are evaluated by using a logical **AND**.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * >  We recommend that you do not leave this parameter empty.
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

