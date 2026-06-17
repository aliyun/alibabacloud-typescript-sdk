// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemEventAttributeResponseBodySystemEventsSystemEvent extends $dara.Model {
  content?: string;
  groupId?: string;
  id?: string;
  instanceName?: string;
  level?: string;
  name?: string;
  product?: string;
  regionId?: string;
  resourceId?: string;
  status?: string;
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
   * > The status code 200 indicates that the call is successful.
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

