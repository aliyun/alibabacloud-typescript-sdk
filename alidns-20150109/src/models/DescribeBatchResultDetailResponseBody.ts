// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail extends $dara.Model {
  /**
   * @remarks
   * The type of the batch operation.
   * 
   * @example
   * DOMAIN_ADD
   */
  batchType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The line code.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The new hostname.
   * 
   * @example
   * demo-batch-7
   */
  newRr?: string;
  /**
   * @remarks
   * The new record value.
   * 
   * @example
   * 192.0.2.254
   */
  newValue?: string;
  /**
   * @remarks
   * The time when the operation was performed. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-22 18:02:58
   */
  operateDateStr?: string;
  /**
   * @remarks
   * The priority of the mail exchanger (MX) record.
   * 
   * @example
   * 10
   */
  priority?: string;
  /**
   * @remarks
   * The cause of the execution failure.
   * 
   * @example
   * Task lock fail
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 123456789
   */
  recordId?: string;
  /**
   * @remarks
   * The description of the DNS record.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * www
   */
  rr?: string;
  /**
   * @remarks
   * The status of the DNS record.
   * 
   * @example
   * stop
   */
  rrStatus?: string;
  /**
   * @remarks
   * The execution result of the batch operation. Valid values: **true**: The operation succeeded. **false**: The operation failed.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The time-to-live (TTL) of the DNS record.
   * 
   * @example
   * 600
   */
  ttl?: string;
  /**
   * @remarks
   * The type of the DNS record.
   * 
   * @example
   * A
   */
  type?: string;
  /**
   * @remarks
   * The value of the DNS record.
   * 
   * @example
   * 192.0.2.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      domain: 'Domain',
      line: 'Line',
      newRr: 'NewRr',
      newValue: 'NewValue',
      operateDateStr: 'OperateDateStr',
      priority: 'Priority',
      reason: 'Reason',
      recordId: 'RecordId',
      remark: 'Remark',
      rr: 'Rr',
      rrStatus: 'RrStatus',
      status: 'Status',
      ttl: 'Ttl',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'string',
      domain: 'string',
      line: 'string',
      newRr: 'string',
      newValue: 'string',
      operateDateStr: 'string',
      priority: 'string',
      reason: 'string',
      recordId: 'string',
      remark: 'string',
      rr: 'string',
      rrStatus: 'string',
      status: 'boolean',
      ttl: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponseBodyBatchResultDetails extends $dara.Model {
  batchResultDetail?: DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail[];
  static names(): { [key: string]: string } {
    return {
      batchResultDetail: 'BatchResultDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResultDetail: { 'type': 'array', 'itemType': DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail },
    };
  }

  validate() {
    if(Array.isArray(this.batchResultDetail)) {
      $dara.Model.validateArray(this.batchResultDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBatchResultDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed results of the batch operation.
   */
  batchResultDetails?: DescribeBatchResultDetailResponseBodyBatchResultDetails;
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
   * The number of entries per page.
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
   * 75446CC1-FC9A-4595-8D96-089D73D7A63D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      batchResultDetails: 'BatchResultDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResultDetails: DescribeBatchResultDetailResponseBodyBatchResultDetails,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.batchResultDetails && typeof (this.batchResultDetails as any).validate === 'function') {
      (this.batchResultDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

