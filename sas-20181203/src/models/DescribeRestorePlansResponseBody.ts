// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestorePlansResponseBodyPageInfo extends $dara.Model {
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
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 33
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

export class DescribeRestorePlansResponseBodyRestorePlans extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the restoration task was created. Unit: milliseconds.
   * 
   * @example
   * 1655174753****
   */
  createdTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * Bankup****
   */
  databaseName?: string;
  /**
   * @remarks
   * The name of the server on which the database resides.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The name of the anti-ransomware policy.
   * 
   * @example
   * KtDataBase
   */
  policyName?: string;
  /**
   * @remarks
   * The point in time to which data is restored.
   * 
   * @example
   * 165875100****
   */
  restorePoint?: number;
  /**
   * @remarks
   * The status of the restoration task. Valid values:
   * 
   * *   **init**: initializing
   * *   **created**: creating
   * *   **running**: running
   * *   **completed**: complete
   * *   **error**: failed
   * *   **restoring**: restoring
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * @example
   * OABak
   */
  targetDatabaseName?: string;
  /**
   * @remarks
   * The ID of the destination server.
   * 
   * @example
   * i-2zehqflgbl9ep2he****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the destination server.
   * 
   * @example
   * hbr-detection-hh
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The timestamp when the restoration task was last updated. Unit: milliseconds.
   * 
   * @example
   * 166849080****
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      databaseName: 'DatabaseName',
      instanceName: 'InstanceName',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      restorePoint: 'RestorePoint',
      status: 'Status',
      targetDatabaseName: 'TargetDatabaseName',
      targetInstanceId: 'TargetInstanceId',
      targetInstanceName: 'TargetInstanceName',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      databaseName: 'string',
      instanceName: 'string',
      policyId: 'number',
      policyName: 'string',
      restorePoint: 'number',
      status: 'string',
      targetDatabaseName: 'string',
      targetInstanceId: 'string',
      targetInstanceName: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestorePlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeRestorePlansResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the restoration tasks.
   */
  restorePlans?: DescribeRestorePlansResponseBodyRestorePlans[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      restorePlans: 'RestorePlans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeRestorePlansResponseBodyPageInfo,
      requestId: 'string',
      restorePlans: { 'type': 'array', 'itemType': DescribeRestorePlansResponseBodyRestorePlans },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.restorePlans)) {
      $dara.Model.validateArray(this.restorePlans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

