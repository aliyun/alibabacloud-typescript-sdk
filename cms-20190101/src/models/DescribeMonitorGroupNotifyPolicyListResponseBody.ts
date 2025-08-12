// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1551761781273
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 6780****
   */
  groupId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 123****
   */
  id?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1551761781273
   */
  startTime?: number;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * PauseNotify
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      id: 'Id',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      id: 'string',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList extends $dara.Model {
  notifyPolicy?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy[];
  static names(): { [key: string]: string } {
    return {
      notifyPolicy: 'NotifyPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyPolicy: { 'type': 'array', 'itemType': DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyListNotifyPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.notifyPolicy)) {
      $dara.Model.validateArray(this.notifyPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupNotifyPolicyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The returned policies.
   */
  notifyPolicyList?: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6072F026-C441-41A6-B114-35A1E8F8FDD3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      notifyPolicyList: 'NotifyPolicyList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      notifyPolicyList: DescribeMonitorGroupNotifyPolicyListResponseBodyNotifyPolicyList,
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.notifyPolicyList && typeof (this.notifyPolicyList as any).validate === 'function') {
      (this.notifyPolicyList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

