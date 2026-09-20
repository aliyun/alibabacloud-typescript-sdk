// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreSummaryResponseBodyRescordsRescord extends $dara.Model {
  bulkLoadProcess?: string;
  createTime?: string;
  finishTime?: string;
  hfileRestoreProcess?: string;
  logProcess?: string;
  recordId?: string;
  schemaProcess?: string;
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
   * @remarks
   * Indicates whether there is a next page. This parameter is currently not used.
   * 
   * @example
   * 0
   */
  hasMoreRestoreRecord?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE639ED7-F0F3-4A71-911E-CF8EC088816E
   */
  requestId?: string;
  rescords?: DescribeRestoreSummaryResponseBodyRescords;
  /**
   * @remarks
   * The total number of records.
   * 
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

