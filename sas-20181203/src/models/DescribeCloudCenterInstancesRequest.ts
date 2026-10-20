// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Pay attention to the case sensitivity when you specify this parameter.
   * > You can search for assets by conditions such as instance ID, instance name, VPC ID, region, and public IP address. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
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
   * The asset provider. Separate multiple asset providers with commas (,). Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-Alibaba Cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**, **14**, and **16**: asset on other cloud platforms
   * - **8**: lightweight asset
   * - **9**: SAE
   * - **10**: PAI
   * 
   * @example
   * 1,2,3
   */
  flags?: string;
  /**
   * @remarks
   * The importance of the asset. Valid values:
   * - **2**: important asset
   * - **1**: general asset
   * - **0**: test asset
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Default value: **OR**. Valid values:
   * 
   * - **OR**: The logical relationship between multiple search conditions is **OR**.
   * - **AND**: The logical relationship between multiple search conditions is **AND**.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The type of the asset to query. Valid values:
   * 
   * - **ecs**: server
   * - **cloud_product**: cloud service
   * - **eci**: elastic container instance
   * - **rund**: RunD container instance
   * - **runc**: RunC container instance
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The NextToken value returned when the NextToken method is used. Leave this parameter empty for the first query.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to internationalize the default group **Ungrouped**. Default value: **false**. Valid values:
   * 
   * - **true**: does not internationalize the default group. If the value of the GroupTrace response parameter is the default group **Ungrouped** in Security Center, **Ungrouped** is still displayed as **Ungrouped**.
   * - **false**: internationalizes the default group. If the value of the GroupTrace response parameter is the default group **Ungrouped** in Security Center, **Ungrouped** is displayed as **default**.
   * 
   * @example
   * false
   */
  noGroupTrace?: boolean;
  /**
   * @remarks
   * The number of Asset entries to display on each page when you configure paging for a paged query through Settings. Default value: **20**, which indicates that 20 pieces of Asset information are displayed on each page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the member accounts in the resource folder belong.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to pull asset list data. If you use this parameter, TotalCount is not returned. Valid values:
   * 
   * - **true**: uses the NextToken method.
   * - **false**: does not use the NextToken method.
   * 
   * @example
   * false
   */
  useNextToken?: boolean;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      flags: 'Flags',
      importance: 'Importance',
      lang: 'Lang',
      logicalExp: 'LogicalExp',
      machineTypes: 'MachineTypes',
      nextToken: 'NextToken',
      noGroupTrace: 'NoGroupTrace',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      useNextToken: 'UseNextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      flags: 'string',
      importance: 'number',
      lang: 'string',
      logicalExp: 'string',
      machineTypes: 'string',
      nextToken: 'string',
      noGroupTrace: 'boolean',
      pageSize: 'number',
      regionId: 'string',
      resourceDirectoryAccountId: 'number',
      useNextToken: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

