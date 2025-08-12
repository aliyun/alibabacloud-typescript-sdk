// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent extends $dara.Model {
  /**
   * @remarks
   * The details of the event.
   * 
   * @example
   * [{"product":"CloudMonitor","content":"{\\"ipGroup\\":\\"112.126.XX.XX,10.163.XX.XX\\",\\"tianjimonVersion\\":\\"1.2.22\\"}","groupId":"176,177,178,179,180,692,120812,1663836,96,2028302","time":"1552209568000","resourceId":"acs:ecs:cn-beijing:173651113438****:instance/i-25k35****","level":"CRITICAL","status":"stopped","instanceName":"cmssiteprobebj-6","name":"Agent_Status_Stopped","regionId":"cn-beijing"}]
   */
  content?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 12345
   */
  groupId?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * b936efc9-f621-4e8a-a6eb-076be40e****
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * instanceId1
   */
  instanceName?: string;
  /**
   * @remarks
   * The level of the event. Valid values:
   * 
   * *   CRITICAL
   * *   WARN
   * *   INFO
   * 
   * @example
   * WARN
   */
  level?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * Agent_Status_Stopped
   */
  name?: string;
  /**
   * @remarks
   * The abbreviation of the service name.
   * 
   * @example
   * CloudMonitor
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
   * xxxxx-1
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the event.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The time when the event occurred. The value is a timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1552199984000
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      id: 'Id',
      instanceName: 'InstanceName',
      level: 'Level',
      name: 'Name',
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
      id: 'string',
      instanceName: 'string',
      level: 'string',
      name: 'string',
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

export class DescribeSystemEventAttributeResponseBodySystemEvents extends $dara.Model {
  systemEvent?: DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent[];
  static names(): { [key: string]: string } {
    return {
      systemEvent: 'SystemEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemEvent: { 'type': 'array', 'itemType': DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent },
    };
  }

  validate() {
    if(Array.isArray(this.systemEvent)) {
      $dara.Model.validateArray(this.systemEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemEventAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, `success` is returned. If the call fails, an error message is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60912C8D-B340-4253-ADE7-61ACDFD25CFC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: True: The call is successful. false: The call fails.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The details of the event.
   */
  systemEvents?: DescribeSystemEventAttributeResponseBodySystemEvents;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      systemEvents: 'SystemEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
      systemEvents: DescribeSystemEventAttributeResponseBodySystemEvents,
    };
  }

  validate() {
    if(this.systemEvents && typeof (this.systemEvents as any).validate === 'function') {
      (this.systemEvents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

