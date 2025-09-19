// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions. The value of this parameter is in the JSON format and is case-sensitive.
   * 
   * >  You can search for an asset by using the search conditions, such as the instance ID, instance name, VPC ID, region, or public IP address. You can call the [DescribeCriteria](https://help.aliyun.com/document_detail/149773.html) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"riskStatus","value":"YES"},{"name":"internetIp","value":"1.2.XX.XX"}]
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
   * Asset vendor. Multiple asset vendors should be separated by a comma (,). Values:
   * - **0**: an asset provided by Alibaba Cloud
   * - **1**: an asset outside Alibaba Cloud
   * - **2**: an asset in a data center
   * - **3**, **4**, **5**, **7**, **14**, **16**: an asset from a third-party cloud service provider
   * - **8**: a lightweight asset
   * - **9**: a Serverless App Engine (SAE) instance
   * - **10**: an instance in Platform for AI (PAI)
   * 
   * @example
   * 1,2,3
   */
  flags?: string;
  /**
   * @remarks
   * The importance of the asset. Valid values:
   * 
   * *   **2**: an important asset
   * *   **1**: a common asset
   * *   **0**: a test asset
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The logical relationship among multiple search conditions. Valid values:
   * 
   * *   **OR**: The logical relationship among search conditions is **OR**.
   * *   **AND**: The logical relationship among search conditions is **AND**.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The type of asset to be queried. Values:
   * - **ecs**: Server 
   * - **cloud_product**: Cloud Product 
   * - **eci**: Elastic Container Instance 
   * - **rund**: RunD Container Instance 
   * - **runc**: RunC Container Instance
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The value of NextToken that is returned when the NextToken method is used. You do not need to specify this parameter for the first request.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to internationalize the name of the default group. Valid values:
   * 
   * *   **true**: The system returns the Chinese name of the default group for the GroupTrace response parameter.
   * *   **false**: The system returns default for the GroupTrace response parameter.
   * 
   * @example
   * false
   */
  noGroupTrace?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the asset resides.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve a new page of results. If you set UseNextToken to true, the value of TotalCount is not returned. Valid values:
   * 
   * - **true**: The NextToken method is used.
   * - **false**: The NextToken method is not used.
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

