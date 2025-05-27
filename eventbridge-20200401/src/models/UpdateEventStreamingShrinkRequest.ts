// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingShrinkRequest extends $dara.Model {
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
   * The parameters that are configured for the runtime environment.
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
  transformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptionsShrink: 'RunOptions',
      sinkShrink: 'Sink',
      sourceShrink: 'Source',
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
      transformsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

