// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingShrinkRequestTags } from "./CreateEventStreamingShrinkRequestTags";


export class CreateEventStreamingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event stream.
   * 
   * @example
   * rocketmq2mns
   */
  description?: string;
  /**
   * @remarks
   * The name of the event stream.
   * 
   * This parameter is required.
   * 
   * @example
   * myeventstreaming
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The rule that is used to filter events. If you leave this parameter empty, all events are matched.
   * 
   * This parameter is required.
   */
  filterPattern?: string;
  /**
   * @remarks
   * The configurations of the runtime environment.
   */
  runOptionsShrink?: string;
  /**
   * @remarks
   * The event target. You must and can specify only one event target.
   * 
   * This parameter is required.
   */
  sinkShrink?: string;
  /**
   * @remarks
   * The event provider, which is also known as the event source. You must and can specify only one event source.
   * 
   * This parameter is required.
   */
  sourceShrink?: string;
  tags?: CreateEventStreamingShrinkRequestTags[];
  transformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptionsShrink: 'RunOptions',
      sinkShrink: 'Sink',
      sourceShrink: 'Source',
      tags: 'Tags',
      transformsShrink: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptionsShrink: 'string',
      sinkShrink: 'string',
      sourceShrink: 'string',
      tags: { 'type': 'array', 'itemType': CreateEventStreamingShrinkRequestTags },
      transformsShrink: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

