// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount extends $dara.Model {
  content?: string;
  groupId?: string;
  instanceName?: string;
  level?: string;
  name?: string;
  num?: number;
  product?: string;
  regionId?: string;
  resourceId?: string;
  status?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      level: 'Level',
      name: 'Name',
      num: 'Num',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      status: 'Status',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      instanceName: 'string',
      level: 'string',
      name: 'string',
      num: 'number',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      status: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBodySystemEventCounts extends $dara.Model {
  systemEventCount?: DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount[];
  static names(): { [key: string]: string } {
    return {
      systemEventCount: 'SystemEventCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEventCount: { 'type': 'array', 'itemType': DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount },
    };
  }

  validate() {
    if(Array.isArray(this.systemEventCount)) {
      $dara.Model.validateArray(this.systemEventCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status codes.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * If the request was successful, a success message is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7A7B776-0ACE-5A93-9B07-DE8008D9CCDF
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
  systemEventCounts?: DescribeSystemEventCountResponseBodySystemEventCounts;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEventCounts: 'SystemEventCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEventCounts: DescribeSystemEventCountResponseBodySystemEventCounts,
    };
  }

  validate() {
    if(this.systemEventCounts && typeof (this.systemEventCounts as any).validate === 'function') {
      (this.systemEventCounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

