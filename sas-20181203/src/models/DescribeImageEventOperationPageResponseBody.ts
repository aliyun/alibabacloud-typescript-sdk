// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageEventOperationPageResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The rule conditions in JSON format. Valid keys:
   * - **condition**: the matching condition.
   * - **type**: the matching type.
   * - **value**: the matching value.
   * 
   * @example
   * [{\\"condition\\": \\"MD5\\", \\"type\\": \\"equals\\", \\"value\\": \\"0083a31cc0083a31ccf7c10367a6e783e\\"}]
   */
  conditions?: string;
  /**
   * @remarks
   * The keyword of the alert metric.
   * 
   * @example
   * PEM
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the alert metric.
   * 
   * @example
   * PEM
   */
  eventName?: string;
  /**
   * @remarks
   * The alerting type. Valid values:
   * - **sensitiveFile**: sensitive file tampering.
   * 
   * @example
   * sensitiveFile
   */
  eventType?: string;
  /**
   * @remarks
   * The primary key of the alert handling rule.
   * 
   * @example
   * 2646624
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * xxx
   */
  note?: string;
  /**
   * @remarks
   * The operation code. Valid values:
   * - **whitelist**: whitelist.
   * 
   * @example
   * whitelist
   */
  operationCode?: string;
  /**
   * @remarks
   * The rule scope in JSON format. Valid keys:
   * - **type**: the scope type.
   * - **value**: the scope value.
   * 
   * @example
   * {\\"type\\": \\"repo\\", \\"value\\": \\"test-aaa/shenzhen-repo-01\\"}
   */
  scenarios?: string;
  /**
   * @remarks
   * The source of the alert handling rule. Valid values:
   * - **default**: image
   * - **agentless**: agentless.
   * 
   * @example
   * default
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      note: 'Note',
      operationCode: 'OperationCode',
      scenarios: 'Scenarios',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      eventKey: 'string',
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      note: 'string',
      operationCode: 'string',
      scenarios: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageEventOperationPageResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.
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
   * 109
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeImageEventOperationPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of alert handling rules.
   */
  list?: DescribeImageEventOperationPageResponseBodyDataList[];
  /**
   * @remarks
   * The paged query parameters.
   */
  pageInfo?: DescribeImageEventOperationPageResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeImageEventOperationPageResponseBodyDataList },
      pageInfo: DescribeImageEventOperationPageResponseBodyDataPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageEventOperationPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeImageEventOperationPageResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C61****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeImageEventOperationPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

