// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclChecksResponseBodyCheckRecordsRecords extends $dara.Model {
  /**
   * @remarks
   * The number of pending ACL check tasks.
   * 
   * @example
   * 1
   */
  aclPendingCount?: number;
  /**
   * @remarks
   * The total number of ACL checks.
   * 
   * @example
   * 10
   */
  aclTotalCount?: number;
  /**
   * @remarks
   * The name of the ACL check.
   * 
   * @example
   * AddressBookDomainValid
   */
  checkName?: string;
  /**
   * @remarks
   * The status of the ACL check item.
   * 
   * @example
   * Checked
   */
  checkStatus?: string;
  /**
   * @remarks
   * The type of ACL check.
   * 
   * @example
   * AddressBookGather
   */
  checkType?: string;
  /**
   * @remarks
   * The UNIX timestamp of the last check, in seconds.
   * 
   * @example
   * 1724982259
   */
  lastCheckTime?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * Medium
   */
  level?: string;
  /**
   * @remarks
   * The ID of the ACL check task.
   * 
   * @example
   * task-c92d4544ef7b6a42
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPendingCount: 'AclPendingCount',
      aclTotalCount: 'AclTotalCount',
      checkName: 'CheckName',
      checkStatus: 'CheckStatus',
      checkType: 'CheckType',
      lastCheckTime: 'LastCheckTime',
      level: 'Level',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPendingCount: 'number',
      aclTotalCount: 'number',
      checkName: 'string',
      checkStatus: 'string',
      checkType: 'string',
      lastCheckTime: 'string',
      level: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclChecksResponseBodyCheckRecords extends $dara.Model {
  /**
   * @remarks
   * The type of ACL check.
   * 
   * @example
   * Internet
   */
  aclType?: string;
  /**
   * @remarks
   * The list of ACL check records.
   */
  records?: DescribeAclChecksResponseBodyCheckRecordsRecords[];
  static names(): { [key: string]: string } {
    return {
      aclType: 'AclType',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      records: { 'type': 'array', 'itemType': DescribeAclChecksResponseBodyCheckRecordsRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclChecksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ACL check records.
   */
  checkRecords?: DescribeAclChecksResponseBodyCheckRecords;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AABB1B7-C81F-5158-9EF9-B2DD5D3D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkRecords: 'CheckRecords',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRecords: DescribeAclChecksResponseBodyCheckRecords,
      requestId: 'string',
    };
  }

  validate() {
    if(this.checkRecords && typeof (this.checkRecords as any).validate === 'function') {
      (this.checkRecords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

