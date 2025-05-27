// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestRunOptions } from "./UpdateEventStreamingRequestRunOptions";
import { UpdateEventStreamingRequestSink } from "./UpdateEventStreamingRequestSink";
import { UpdateEventStreamingRequestSource } from "./UpdateEventStreamingRequestSource";
import { UpdateEventStreamingRequestTransforms } from "./UpdateEventStreamingRequestTransforms";


export class UpdateEventStreamingRequest extends $dara.Model {
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
  runOptions?: UpdateEventStreamingRequestRunOptions;
  /**
   * @remarks
   * The event target. You must and can specify only one event target.
   * 
   * This parameter is required.
   */
  sink?: UpdateEventStreamingRequestSink;
  /**
   * @remarks
   * The event provider, which is also known as the event source. You must and can specify only one event source.
   * 
   * This parameter is required.
   */
  source?: UpdateEventStreamingRequestSource;
  transforms?: UpdateEventStreamingRequestTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: UpdateEventStreamingRequestRunOptions,
      sink: UpdateEventStreamingRequestSink,
      source: UpdateEventStreamingRequestSource,
      transforms: { 'type': 'array', 'itemType': UpdateEventStreamingRequestTransforms },
    };
  }

  validate() {
    if(this.runOptions && typeof (this.runOptions as any).validate === 'function') {
      (this.runOptions as any).validate();
    }
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(Array.isArray(this.transforms)) {
      $dara.Model.validateArray(this.transforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

