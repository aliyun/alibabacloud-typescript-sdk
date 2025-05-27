// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsRunOptions } from "./ListEventStreamingsResponseBodyDataEventStreamingsRunOptions";
import { ListEventStreamingsResponseBodyDataEventStreamingsSink } from "./ListEventStreamingsResponseBodyDataEventStreamingsSink";
import { ListEventStreamingsResponseBodyDataEventStreamingsSource } from "./ListEventStreamingsResponseBodyDataEventStreamingsSource";
import { ListEventStreamingsResponseBodyDataEventStreamingsTransforms } from "./ListEventStreamingsResponseBodyDataEventStreamingsTransforms";


export class ListEventStreamingsResponseBodyDataEventStreamings extends $dara.Model {
  /**
   * @remarks
   * The description of the event stream.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The name of the event stream.
   * 
   * @example
   * name
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The rule that is used to filter events. If you leave this parameter empty, all events are matched.
   */
  filterPattern?: string;
  /**
   * @remarks
   * The parameters that are returned for the runtime environment.
   */
  runOptions?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions;
  /**
   * @remarks
   * The event target.
   */
  sink?: ListEventStreamingsResponseBodyDataEventStreamingsSink;
  /**
   * @remarks
   * The event provider, which is also known as the event source.
   */
  source?: ListEventStreamingsResponseBodyDataEventStreamingsSource;
  /**
   * @remarks
   * The status of the event stream that is returned.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The transformation-related configurations.
   */
  transforms?: ListEventStreamingsResponseBodyDataEventStreamingsTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      status: 'Status',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions,
      sink: ListEventStreamingsResponseBodyDataEventStreamingsSink,
      source: ListEventStreamingsResponseBodyDataEventStreamingsSource,
      status: 'string',
      transforms: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsTransforms },
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

