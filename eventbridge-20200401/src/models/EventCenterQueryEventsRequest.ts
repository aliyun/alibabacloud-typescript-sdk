// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventCenterQueryEventsRequestBody } from "./EventCenterQueryEventsRequestBody";


export class EventCenterQueryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   * 
   * This parameter is required.
   */
  body?: EventCenterQueryEventsRequestBody;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * default
   */
  busName?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 10000. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * 用来标记当前开始读取的位置。置空表示从头开始。
   * 
   * @example
   * 100
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      busName: 'BusName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: EventCenterQueryEventsRequestBody,
      busName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

