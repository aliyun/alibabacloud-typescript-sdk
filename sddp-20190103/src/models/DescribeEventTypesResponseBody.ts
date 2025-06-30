// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventTypesResponseBodyEventTypeList } from "./DescribeEventTypesResponseBodyEventTypeList";


export class DescribeEventTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the types of anomalous events.
   * 
   * > If you leave the ParentTypeId parameter empty, anomalous event types are returned. If you set the ParentTypeId parameter, anomalous event subtypes under the specified anomalous event type are returned.
   */
  eventTypeList?: DescribeEventTypesResponseBodyEventTypeList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypeList: 'EventTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypeList: { 'type': 'array', 'itemType': DescribeEventTypesResponseBodyEventTypeList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypeList)) {
      $dara.Model.validateArray(this.eventTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

