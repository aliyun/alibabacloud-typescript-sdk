// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclChecksResponseBodyCheckRecordsRecords extends $dara.Model {
  /**
   * @example
   * 1
   */
  aclPendingCount?: number;
  /**
   * @example
   * 10
   */
  aclTotalCount?: number;
  /**
   * @example
   * AddressBookDomainValid
   */
  checkName?: string;
  /**
   * @example
   * Checked
   */
  checkStatus?: string;
  /**
   * @example
   * AddressBookGather
   */
  checkType?: string;
  /**
   * @example
   * 1724982259
   */
  lastCheckTime?: string;
  /**
   * @example
   * Medium
   */
  level?: string;
  /**
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
   * @example
   * Internet
   */
  aclType?: string;
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
  checkRecords?: DescribeAclChecksResponseBodyCheckRecords;
  /**
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

