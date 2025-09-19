// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The number of assets on which high-risk vulnerabilities are detected.
   * 
   * @example
   * 11
   */
  asapVulInstanceCount?: number;
  /**
   * @remarks
   * The number of assets that are protected by the specified edition.
   * 
   * @example
   * 205
   */
  authVersionCheckCount?: number;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * testA
   */
  fieldAliasName?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * *   **0**: the default group
   * *   **1**: other group
   * 
   * @example
   * 1
   */
  groupFlag?: number;
  /**
   * @remarks
   * The number of cores of assets in the specified asset type.
   * 
   * >  If the **MachineTypes** request parameter is not specified, the value of the InstanceCoreCount parameter indicates the total number of cores of assets within your account.
   * 
   * @example
   * 610
   */
  instanceCoreCount?: number;
  /**
   * @remarks
   * The total number of assets that belong to the specified type.
   * 
   * >  If the **MachineTypes** request parameter is not specified, the value of the InstanceCount parameter is the total number of your assets.
   * 
   * @example
   * 205
   */
  instanceCount?: string;
  /**
   * @remarks
   * The operating system type of the asset. Valid values:
   * 
   * * **windows**
   * * **linux**
   * 
   * > This parameter is returned only when Lang is set to zh.
   * 
   * @example
   * windows
   */
  os?: string;
  /**
   * @remarks
   * The number of assets that are at risk.
   * 
   * @example
   * 172
   */
  riskInstanceCount?: string;
  /**
   * @remarks
   * The number of assets that are not protected by Security Center.
   * 
   * @example
   * 32
   */
  unProtectedInstanceCount?: string;
  static names(): { [key: string]: string } {
    return {
      asapVulInstanceCount: 'AsapVulInstanceCount',
      authVersionCheckCount: 'AuthVersionCheckCount',
      fieldAliasName: 'FieldAliasName',
      groupFlag: 'GroupFlag',
      instanceCoreCount: 'InstanceCoreCount',
      instanceCount: 'InstanceCount',
      os: 'Os',
      riskInstanceCount: 'RiskInstanceCount',
      unProtectedInstanceCount: 'UnProtectedInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapVulInstanceCount: 'number',
      authVersionCheckCount: 'number',
      fieldAliasName: 'string',
      groupFlag: 'number',
      instanceCoreCount: 'number',
      instanceCount: 'string',
      os: 'string',
      riskInstanceCount: 'string',
      unProtectedInstanceCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedInstancesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 5
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
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

export class DescribeGroupedInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the assets.
   */
  instances?: DescribeGroupedInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeGroupedInstancesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 52A3AEE6-114A-499D-8990-4BA9B27FE0AA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeGroupedInstancesResponseBodyInstances },
      pageInfo: DescribeGroupedInstancesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

