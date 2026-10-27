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
   * The current page number during paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of data entries returned per page during paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The ID of the specified target asset.
   * 
   * @example
   * 032b618f-b220-4a0d-bd37-fbdc6*******
   */
  target?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * - **uuid**: asset ID
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
   * The UNIX timestamp when the IP block against brute-force attacks expires.
   * 
   * @example
   * 1671506882063
   */
  blockExpireDate?: number;
  /**
   * @remarks
   * The IP address blocked to prevent brute-force attacks.
   * 
   * @example
   * 45.227.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The direction of the IP address blocked by the server interception policy against brute-force attacks. Valid values:
   * - **in**: inbound
   * - **out**: outbound
   * 
   * @example
   * in
   */
  bound?: string;
  /**
   * @remarks
   * The number of servers on which the block takes effect.
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
   * The total number of servers on which the IP block is expected to take effect.
   * 
   * @example
   * 6
   */
  serverCount?: number;
  /**
   * @remarks
   * The source from which the rule was delivered.
   * 
   * @example
   * UserRule
   */
  source?: string;
  /**
   * @remarks
   * The status of the defense rule against brute-force attacks. Valid values:
   * - **0**: invalid
   * - **1**: enabled
   * - **2**: failed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The servers on which the rule takes effect.
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
   * The list of policies.
   */
  recordList?: DescribeCustomBlockRecordsResponseBodyRecordList[];
  /**
   * @remarks
   * The ID of the request.
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

