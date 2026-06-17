// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent extends $dara.Model {
  content?: string;
  groupId?: string;
  id?: string;
  name?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBodyCustomEvents extends $dara.Model {
  customEvent?: DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent[];
  static names(): { [key: string]: string } {
    return {
      customEvent: 'CustomEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEvent: { 'type': 'array', 'itemType': DescribeCustomEventAttributeResponseBodyCustomEventsCustomEvent },
    };
  }

  validate() {
    if(Array.isArray(this.customEvent)) {
      $dara.Model.validateArray(this.customEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomEventAttributeResponseBody extends $dara.Model {
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
  customEvents?: DescribeCustomEventAttributeResponseBodyCustomEvents;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * userId:173651113438**** and name:"BABEL_CHECK"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60912C8D-B340-4253-ADE7-61ACDFD25CFC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customEvents: 'CustomEvents',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customEvents: DescribeCustomEventAttributeResponseBodyCustomEvents,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.customEvents && typeof (this.customEvents as any).validate === 'function') {
      (this.customEvents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

