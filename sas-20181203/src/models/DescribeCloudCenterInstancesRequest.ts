// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Pay attention to the case sensitivity when you specify this parameter.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other conditions. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number to return from the query results. Default value: **1**, which indicates that query results are returned starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The asset vendor. Separate multiple vendors with commas (,). Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**, **14**, **16**: third-party cloud asset
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
   * The importance level of the asset. Valid values:
   * - **2**: important asset
   * - **1**: normal asset
   * - **0**: test asset
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
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
   * - **OR**: The search conditions are in the **OR** relationship.
   * - **AND**: The search conditions are in the **AND** relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The type of the asset that you want to query. Valid values:
   * 
   * - **ecs**: server
   * - **cloud_product**: cloud product
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
   * The NextToken value returned when the NextToken method is used. Leave this parameter empty for the first request.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to internationalize the default group name **Ungrouped**. Default value: **false**. Valid values:
   * 
   * - **true**: does not internationalize the group name. If the value of the GroupTrace response parameter is the default group **Ungrouped** in Security Center, the group name is still displayed as **Ungrouped** in Chinese.
   * - **false**: internationalizes the group name. If the value of the GroupTrace response parameter is the default group **Ungrouped** in Security Center, the group name is displayed as **default**.
   * 
   * @example
   * false
   */
  noGroupTrace?: boolean;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: **20**, which indicates that 20 entries of asset information are displayed per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance you want to query resides.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member account in the resource directory.
   * >You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve asset list data. If this parameter is used, the TotalCount parameter is no longer returned. Valid values:
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

