// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubDomainRecordsResponseBodyDomainRecordsRecord extends $dara.Model {
  domainName?: string;
  line?: string;
  locked?: boolean;
  priority?: number;
  RR?: string;
  recordId?: string;
  remark?: string;
  status?: string;
  TTL?: number;
  type?: string;
  value?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      line: 'Line',
      locked: 'Locked',
      priority: 'Priority',
      RR: 'RR',
      recordId: 'RecordId',
      remark: 'Remark',
      status: 'Status',
      TTL: 'TTL',
      type: 'Type',
      value: 'Value',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      line: 'string',
      locked: 'boolean',
      priority: 'number',
      RR: 'string',
      recordId: 'string',
      remark: 'string',
      status: 'string',
      TTL: 'number',
      type: 'string',
      value: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponseBodyDomainRecords extends $dara.Model {
  record?: DescribeSubDomainRecordsResponseBodyDomainRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': DescribeSubDomainRecordsResponseBodyDomainRecordsRecord },
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubDomainRecordsResponseBody extends $dara.Model {
  domainRecords?: DescribeSubDomainRecordsResponseBodyDomainRecords;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
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
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainRecords: 'DomainRecords',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainRecords: DescribeSubDomainRecordsResponseBodyDomainRecords,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainRecords && typeof (this.domainRecords as any).validate === 'function') {
      (this.domainRecords as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

