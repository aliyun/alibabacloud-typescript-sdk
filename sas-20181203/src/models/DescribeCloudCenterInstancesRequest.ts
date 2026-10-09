// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The search criteria for assets. This parameter is in JSON format. Pay attention to case sensitivity when entering parameter values.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other criteria. Call [DescribeCriteria](~~DescribeCriteria~~) to query the supported search criteria.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number from which to start displaying query results. Default value: **1**. This means results are displayed starting from page 1.
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
   * - **1**: off-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**, **14**, **16**: assets from other cloud vendors
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
   * - **1**: general asset
   * - **0**: test asset
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The language of the request and response messages. Default value: **zh**. Valid values:
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
   * The logical relationship between multiple search criteria. Default value: **OR**. Valid values:
   * 
   * - **OR**: The multiple search criteria have an OR relationship.
   * - **AND**: The multiple search criteria have an AND relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The type of assets to query. Valid values:
   * 
   * - **ecs**: server
   * - **cloud_product**: cloud product
   * - **eci**: Elastic Container Instance
   * - **rund**: RunD container instance
   * - **runc**: RunC container instance
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The NextToken value returned when using the NextToken method. Leave this parameter empty for the first request.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to apply internationalization to the default group **Ungrouped**. Default value: **false**. Valid values:
   * 
   * - **true**: Internationalization is not applied. When the GroupTrace parameter returns the Security Center default group **Ungrouped**, it is still displayed as **Ungrouped**.
   * - **false**: Internationalization is applied. When the GroupTrace parameter returns the Security Center default group **Ungrouped**, it is displayed as **default**.
   * 
   * @example
   * false
   */
  noGroupTrace?: boolean;
  /**
   * @remarks
   * The number of assets to display per page in a paged query. Settings take effect per page. Default value: **20**. This means 20 assets are displayed per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance to query resides.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The primary account ID of the resource directory member accounts.
   * > Call [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the asset list. If this parameter is set to true, TotalCount is no longer returned. Valid values:
   * 
   * - **true**: Use the NextToken method.
   * - **false**: Do not use the NextToken method.
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

