// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventCountResponseBodySystemEventCountsSystemEventCount extends $dara.Model {
  /**
   * @remarks
   * The description of the system event.
   */
  content?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 17285****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ECS-test
   */
  instanceName?: string;
  /**
   * @remarks
   * The level of the system event. Valid values:
   * 
   * *   Critical
   * *   Warn
   * *   Info
   * 
   * @example
   * Info
   */
  level?: string;
  /**
   * @remarks
   * The name of the system event.
   * 
   * @example
   * Instance:StateChange
   */
  name?: string;
  /**
   * @remarks
   * The number of times that the system event has occurred.
   * 
   * @example
   * 3
   */
  num?: number;
  /**
   * @remarks
   * The name of the cloud service in which the system event occurred.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-rj99xc6cptkk64ml****
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the system event.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The time when the system event occurred. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635993751000
   */
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
  /**
   * @remarks
   * The details of the system event.
   */
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

