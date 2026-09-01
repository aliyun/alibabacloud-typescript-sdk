// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The conditions for searching assets. This parameter is in JSON format. Note that the parameter values are case-sensitive.
   * > You can search for assets by instance ID, instance name, VPC ID, region, public IP address, and other conditions. Call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the first page to return. Default value: **1**, which indicates that the query results are returned starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The asset vendor. Separate multiple asset vendors with commas (,). Valid values:
   * 
   * @example
   * 1,2,3
   */
  flags?: string;
  /**
   * @remarks
   * The importance level of the asset. Valid values:
   * - **2**: Important asset.
   * - **1**: General asset.
   * - **0**: Test asset.
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
   * - **OR**: The search conditions have an **OR** relationship.
   * - **AND**: The search conditions have an **AND** relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The type of asset to query. Valid values:
   * 
   * - **ecs**: server.
   * - **cloud_product**: cloud product.
   * - **eci**: elastic container instance.
   * - **rund**: RunD container instance.
   * - **runc**: RunC container instance.
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
   * Specifies whether to disable internationalization for the default group name **未分组**. Default value: **false**. Valid values:
   * 
   * - **true**: Internationalization is disabled. If the value of the GroupTrace response parameter is the default Security Center group **未分组**, the value is still displayed as **未分组**.
   * - **false**: Internationalization is enabled. If the value of the GroupTrace response parameter is the default Security Center group **未分组**, the value is displayed as **default**.
   * 
   * @example
   * false
   */
  noGroupTrace?: boolean;
  /**
   * @remarks
   * The number of assets to display on each page in a paged conditional query. Default value: **20**, which indicates that 20 asset records are displayed on each page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance to query.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that corresponds to the member account in the resource directory.
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve asset list data. If this parameter is set to true, TotalCount is no longer returned. Valid values:
   * 
   * - **true**: Uses the NextToken method.
   * - **false**: Does not use the NextToken method.
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

