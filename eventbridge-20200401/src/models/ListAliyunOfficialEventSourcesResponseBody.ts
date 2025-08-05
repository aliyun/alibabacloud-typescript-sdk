// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes extends $dara.Model {
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * name
   */
  eventSourceName?: string;
  /**
   * @remarks
   * The name of the group to which the event type belongs.
   * 
   * @example
   * aliyuncvc:MeetingEvent
   */
  groupName?: string;
  /**
   * @remarks
   * The full name of the event type.
   * 
   * @example
   * aliyuncvc:MeetingEvent:MeetingStateEvent
   */
  name?: string;
  /**
   * @remarks
   * The short name of the event type.
   * 
   * @example
   * MeetingStateEvent
   */
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceName: 'EventSourceName',
      groupName: 'GroupName',
      name: 'Name',
      shortName: 'ShortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceName: 'string',
      groupName: 'string',
      name: 'string',
      shortName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event bus.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:SYSTEM:eventsource/acs.aliyuncvc
   */
  arn?: string;
  /**
   * @remarks
   * The time when the event source was created. Unit: milliseconds.
   * 
   * @example
   * 1607071602000
   */
  ctime?: number;
  /**
   * @remarks
   * The description of the event source.
   */
  description?: string;
  /**
   * @remarks
   * The name of the event source to which the event type belongs.
   * 
   * @example
   * acs.aliyuncvc
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event types.
   */
  eventTypes?: ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes[];
  /**
   * @remarks
   * The full name of the event source.
   * 
   * @example
   * E-MapReduce
   */
  fullName?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * acs.aliyuncvc
   */
  name?: string;
  /**
   * @remarks
   * The status of the event source. Valid value: Activated.
   * 
   * @example
   * Activated
   */
  status?: string;
  /**
   * @remarks
   * The type of the event source.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      ctime: 'Ctime',
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTypes: 'EventTypes',
      fullName: 'FullName',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      ctime: 'number',
      description: 'string',
      eventBusName: 'string',
      eventTypes: { 'type': 'array', 'itemType': ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes },
      fullName: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event sources.
   */
  eventSourceList?: ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList[];
  static names(): { [key: string]: string } {
    return {
      eventSourceList: 'EventSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceList: { 'type': 'array', 'itemType': ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList },
    };
  }

  validate() {
    if(Array.isArray(this.eventSourceList)) {
      $dara.Model.validateArray(this.eventSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAliyunOfficialEventSourcesResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5f80e9b3-98d5-4f51-8412-c758818a03e4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. If the operation is successful, the value true is returned.
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
      data: ListAliyunOfficialEventSourcesResponseBodyData,
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

