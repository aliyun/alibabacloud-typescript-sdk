// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudCenterInstancesRequestSdkRequest extends $dara.Model {
  /**
   * @example
   * {\\"contactIds\\":[\\"job-658854766790086656\\",\\"job-658854801112113152\\"]}
   */
  criteria?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 0,10,13
   */
  flags?: string;
  /**
   * @example
   * 2
   */
  importance?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * AND
   */
  logicalExp?: string;
  /**
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @example
   * AAAAAZak7VOTMl2OSt/xmc4J6gbg4Z5eXuWnrvKgOsGARL76TVbKERXHXKNFurqjtfDdRw==
   */
  nextToken?: string;
  /**
   * @example
   * true
   */
  noGroupTrace?: boolean;
  /**
   * @example
   * 99
   */
  pageSize?: string;
  /**
   * @example
   * 1587359978118481
   */
  resourceDirectoryAccountId?: string;
  /**
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
   * @example
   * cn-beijing
   */
  regionId?: string;
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

