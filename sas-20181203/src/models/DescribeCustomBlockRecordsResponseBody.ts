// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomBlockRecordsResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 3
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
   * 708
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

export class DescribeCustomBlockRecordsResponseBodyRecordListTargetList extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination asset.
   * 
   * @example
   * 032b618f-b220-4a0d-bd37-fbdc6*******
   */
  target?: string;
  /**
   * @remarks
   * The type of the query. Valid values:
   * 
   * *   Set the value to **uuid**.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomBlockRecordsResponseBodyRecordList extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the block action on the IP address becomes invalid.
   * 
   * @example
   * 1671506882063
   */
  blockExpireDate?: number;
  /**
   * @remarks
   * The blocked IP address.
   * 
   * @example
   * 45.227.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The direction of the traffic that is sent by the blocked IP address. Valid values:
   * 
   * *   **in**
   * *   **out**
   * 
   * @example
   * in
   */
  bound?: string;
  /**
   * @remarks
   * The number of servers for which the defense rule is enabled.
   * 
   * @example
   * 4
   */
  enableCount?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 353376
   */
  id?: number;
  /**
   * @remarks
   * The total number of servers on which the IP address is blocked.
   * 
   * @example
   * 6
   */
  serverCount?: number;
  /**
   * @remarks
   * The source of the defense rule.
   * 
   * @example
   * UserRule
   */
  source?: string;
  /**
   * @remarks
   * The status of the defense rule against brute-force attacks. Valid values:
   * 
   * *   **0**: invalid.
   * *   **1**: enabled.
   * *   **2**: failed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The servers for which the defense rule is enabled.
   */
  targetList?: DescribeCustomBlockRecordsResponseBodyRecordListTargetList[];
  static names(): { [key: string]: string } {
    return {
      blockExpireDate: 'BlockExpireDate',
      blockIp: 'BlockIp',
      bound: 'Bound',
      enableCount: 'EnableCount',
      id: 'Id',
      serverCount: 'ServerCount',
      source: 'Source',
      status: 'Status',
      targetList: 'TargetList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireDate: 'number',
      blockIp: 'string',
      bound: 'string',
      enableCount: 'number',
      id: 'number',
      serverCount: 'number',
      source: 'string',
      status: 'number',
      targetList: { 'type': 'array', 'itemType': DescribeCustomBlockRecordsResponseBodyRecordListTargetList },
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomBlockRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCustomBlockRecordsResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the defense rules.
   */
  recordList?: DescribeCustomBlockRecordsResponseBodyRecordList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 028CF634-5268-5660-9575-48C9ED6B7T8Y
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      recordList: 'RecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeCustomBlockRecordsResponseBodyPageInfo,
      recordList: { 'type': 'array', 'itemType': DescribeCustomBlockRecordsResponseBodyRecordList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.recordList)) {
      $dara.Model.validateArray(this.recordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

