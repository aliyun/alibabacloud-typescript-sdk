// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackagesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The point in time when the MaxCompute package was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the package.
   * 
   * @example
   * 111111
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance to which the package belongs.
   * 
   * @example
   * 223453332
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The account of the user that owns the package.
   * 
   * @example
   * cou-2221
   */
  owner?: string;
  /**
   * @remarks
   * The sensitivity level of the package. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the package.
   * 
   * @example
   * Highest sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * Indicates whether the package contains sensitive data. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total volume of sensitive data in the package. For example, the value can be the total number of sensitive tables in the MaxCompute package.
   * 
   * @example
   * 123
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The total volume of data in the package. For example, the value can be the total number of tables in the MaxCompute package.
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
   * An array that consists of the information about the packages.
   */
  items?: DescribePackagesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page.
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

