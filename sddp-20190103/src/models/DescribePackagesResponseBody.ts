// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackagesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the data asset package was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The unique ID of the data asset package.
   * 
   * @example
   * 111111
   */
  id?: number;
  /**
   * @remarks
   * The ID of the asset instance to which the data asset package belongs.
   * 
   * @example
   * 223453332
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the data asset package.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The account of the data asset package owner.
   * 
   * @example
   * cou-2221
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the risk level for the data asset package.
   * 
   * - **1**: N/A: No sensitive data is detected.
   * 
   * - **2**: S1: Level 1 sensitive data.
   * 
   * - **3**: S2: Level 2 sensitive data.
   * 
   * - **4**: S3: Level 3 sensitive data.
   * 
   * - **5**: S4: Level 4 sensitive data.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level for the package.
   * 
   * @example
   * S3
   */
  riskLevelName?: string;
  /**
   * @remarks
   * Indicates whether the data asset package contains sensitive data.
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total number of sensitive data entries in the data asset package. For example, the total number of sensitive tables in MaxCompute.
   * 
   * @example
   * 123
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The total number of data entries in the data asset package. For example, the total number of tables in MaxCompute.
   * 
   * @example
   * 321
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      owner: 'Owner',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      id: 'number',
      instanceId: 'number',
      name: 'string',
      owner: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The information about the data asset packages.
   */
  items?: DescribePackagesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribePackagesResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

