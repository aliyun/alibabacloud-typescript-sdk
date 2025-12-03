// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreSummaryResponseBodyRescordsRescord extends $dara.Model {
  /**
   * @example
   * 1/1
   */
  bulkLoadProcess?: string;
  /**
   * @example
   * 2020-11-05T06:45:14Z
   */
  createTime?: string;
  /**
   * @example
   * 2020-11-05T06:45:51Z
   */
  finishTime?: string;
  /**
   * @example
   * 1/1
   */
  hfileRestoreProcess?: string;
  /**
   * @example
   * 0/0
   */
  logProcess?: string;
  /**
   * @example
   * 20201105144514
   */
  recordId?: string;
  /**
   * @example
   * 1/1
   */
  schemaProcess?: string;
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bulkLoadProcess: 'BulkLoadProcess',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      hfileRestoreProcess: 'HfileRestoreProcess',
      logProcess: 'LogProcess',
      recordId: 'RecordId',
      schemaProcess: 'SchemaProcess',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bulkLoadProcess: 'string',
      createTime: 'string',
      finishTime: 'string',
      hfileRestoreProcess: 'string',
      logProcess: 'string',
      recordId: 'string',
      schemaProcess: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBodyRescords extends $dara.Model {
  rescord?: DescribeRestoreSummaryResponseBodyRescordsRescord[];
  static names(): { [key: string]: string } {
    return {
      rescord: 'Rescord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rescord: { 'type': 'array', 'itemType': DescribeRestoreSummaryResponseBodyRescordsRescord },
    };
  }

  validate() {
    if(Array.isArray(this.rescord)) {
      $dara.Model.validateArray(this.rescord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  hasMoreRestoreRecord?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * AE639ED7-F0F3-4A71-911E-CF8EC088816E
   */
  requestId?: string;
  rescords?: DescribeRestoreSummaryResponseBodyRescords;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMoreRestoreRecord: 'HasMoreRestoreRecord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rescords: 'Rescords',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMoreRestoreRecord: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rescords: DescribeRestoreSummaryResponseBodyRescords,
      total: 'number',
    };
  }

  validate() {
    if(this.rescords && typeof (this.rescords as any).validate === 'function') {
      (this.rescords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

