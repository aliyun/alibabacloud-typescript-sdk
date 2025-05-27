// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes } from "./ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes";


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

