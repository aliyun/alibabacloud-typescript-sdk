// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBatchResultDetailResponseBodyBatchResultDetailsBatchResultDetail extends $dara.Model {
  batchType?: string;
  domain?: string;
  line?: string;
  newRr?: string;
  newValue?: string;
  operateDateStr?: string;
  priority?: string;
  reason?: string;
  recordId?: string;
  remark?: string;
  rr?: string;
  rrStatus?: string;
  status?: boolean;
  ttl?: string;
  type?: string;
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

