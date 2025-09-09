// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRecursionRecordsResponseBodyRecordsRecord extends $dara.Model {
  /**
   * @example
   * 2025-06-16T02:18Z
   */
  createTime?: string;
  /**
   * @example
   * 1615182315000
   */
  createTimestamp?: number;
  /**
   * @example
   * 1521021611066866
   */
  creator?: number;
  /**
   * @example
   * custom
   */
  creatorSubType?: string;
  /**
   * @example
   * user
   */
  creatorType?: string;
  /**
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * record ID
   * 
   * @example
   * 1927184083990351872
   */
  recordId?: string;
  /**
   * @example
   * vxwk
   */
  remark?: string;
  /**
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @example
   * wap
   */
  rr?: string;
  /**
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 2022-10-28T13:07Z
   */
  updateTime?: string;
  /**
   * @example
   * 1722107570000
   */
  updateTimestamp?: number;
  /**
   * @example
   * 14.19.85.71
   */
  value?: string;
  /**
   * @example
   * 4
   */
  weight?: string;
  /**
   * @remarks
   * zone ID
   * 
   * @example
   * 169783221000012
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      creator: 'Creator',
      creatorSubType: 'CreatorSubType',
      creatorType: 'CreatorType',
      enableStatus: 'EnableStatus',
      priority: 'Priority',
      recordId: 'RecordId',
      remark: 'Remark',
      requestSource: 'RequestSource',
      rr: 'Rr',
      ttl: 'Ttl',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      value: 'Value',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimestamp: 'number',
      creator: 'number',
      creatorSubType: 'string',
      creatorType: 'string',
      enableStatus: 'string',
      priority: 'number',
      recordId: 'string',
      remark: 'string',
      requestSource: 'string',
      rr: 'string',
      ttl: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      value: 'string',
      weight: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRecursionRecordsResponseBodyRecords extends $dara.Model {
  record?: SearchRecursionRecordsResponseBodyRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': SearchRecursionRecordsResponseBodyRecordsRecord },
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

export class SearchRecursionRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  records?: SearchRecursionRecordsResponseBodyRecords;
  /**
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      records: SearchRecursionRecordsResponseBodyRecords,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.records && typeof (this.records as any).validate === 'function') {
      (this.records as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

