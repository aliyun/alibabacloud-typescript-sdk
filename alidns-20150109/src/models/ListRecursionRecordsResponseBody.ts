// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecursionRecordsResponseBodyRecordsRecord extends $dara.Model {
  /**
   * @example
   * 2023-06-28T09:16Z
   */
  createTime?: string;
  /**
   * @example
   * 1721119172000
   */
  createTimestamp?: number;
  /**
   * @example
   * 123121312
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
   * 10
   */
  priority?: number;
  /**
   * @example
   * 1897105298264316928
   */
  recordId?: string;
  /**
   * @example
   * 1150
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
   * 2024-10-22T09:54Z
   */
  updateTime?: string;
  /**
   * @example
   * 1620283051000
   */
  updateTimestamp?: number;
  /**
   * @example
   * 120.38.70.54
   */
  value?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  /**
   * @example
   * 169439170000011
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
      weight: 'number',
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

export class ListRecursionRecordsResponseBodyRecords extends $dara.Model {
  record?: ListRecursionRecordsResponseBodyRecordsRecord[];
  static names(): { [key: string]: string } {
    return {
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      record: { 'type': 'array', 'itemType': ListRecursionRecordsResponseBodyRecordsRecord },
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

export class ListRecursionRecordsResponseBody extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  records?: ListRecursionRecordsResponseBodyRecords;
  /**
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @example
   * 5
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
      records: ListRecursionRecordsResponseBodyRecords,
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

