// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format. Note that the parameter names are case-sensitive.
   * 
   * @example
   * {\\"contactIds\\":[\\"job-658854766790086656\\",\\"job-658854801112113152\\"]}
   */
  criteria?: string;
  /**
   * @remarks
   * The current page number.
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
   * 0,10,13
   */
  flags?: string;
  /**
   * @remarks
   * The importance level of the asset. Valid values:
   * 
   * @example
   * 2
   */
  importance?: number;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The logical relationship between multiple search conditions. Valid values:
   * 
   * @example
   * AND
   */
  logicalExp?: string;
  /**
   * @remarks
   * The type of asset to query. Valid values:
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. If no more results are available, this field is not returned.
   * 
   * @example
   * AAAAAZak7VOTMl2OSt/xmc4J6gbg4Z5eXuWnrvKgOsGARL76TVbKERXHXKNFurqjtfDdRw==
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to internationalize the default group name **Ungrouped**. Default value: **false**. Valid values:
   * 
   * @example
   * true
   */
  noGroupTrace?: boolean;
  /**
   * @remarks
   * The number of assets to display per page in a paged query. Default value: 20, which indicates that 20 asset records are displayed per page.
   * 
   * @example
   * 99
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder.
   * 
   * @example
   * 1587359978118481
   */
  resourceDirectoryAccountId?: string;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve the vulnerability list data. If this parameter is used, TotalCount is no longer returned. Valid values:
   * 
   * @example
   * true
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
      pageSize: 'string',
      resourceDirectoryAccountId: 'string',
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

export class DescribeCloudCenterInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request.
   */
  sdkRequest?: DescribeCloudCenterInstancesRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: DescribeCloudCenterInstancesRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

