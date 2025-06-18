// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataDetailedStatus } from "./GetEventStreamingResponseBodyDataDetailedStatus";
import { GetEventStreamingResponseBodyDataRunOptions } from "./GetEventStreamingResponseBodyDataRunOptions";
import { GetEventStreamingResponseBodyDataSink } from "./GetEventStreamingResponseBodyDataSink";
import { GetEventStreamingResponseBodyDataSource } from "./GetEventStreamingResponseBodyDataSource";
import { GetEventStreamingResponseBodyDataTransforms } from "./GetEventStreamingResponseBodyDataTransforms";


export class GetEventStreamingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the event stream that is returned.
   * 
   * @example
   * RocketMQ-to-RocketMQ
   */
  description?: string;
  detailedStatus?: GetEventStreamingResponseBodyDataDetailedStatus;
  /**
   * @remarks
   * The name of the event stream that is returned.
   * 
   * @example
   * rocketmq-sync
   */
  eventStreamingName?: string;
  /**
   * @remarks
   * The rule that is used to filter events. If you leave this parameter empty, all events are matched.
   */
  filterPattern?: string;
  /**
   * @remarks
   * The runtime environment-related configurations.
   */
  runOptions?: GetEventStreamingResponseBodyDataRunOptions;
  /**
   * @remarks
   * The event target.
   */
  sink?: GetEventStreamingResponseBodyDataSink;
  /**
   * @remarks
   * The event source.
   */
  source?: GetEventStreamingResponseBodyDataSource;
  /**
   * @remarks
   * The status of the event stream that is returned.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  transforms?: GetEventStreamingResponseBodyDataTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      detailedStatus: 'DetailedStatus',
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
      detailedStatus: GetEventStreamingResponseBodyDataDetailedStatus,
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: GetEventStreamingResponseBodyDataRunOptions,
      sink: GetEventStreamingResponseBodyDataSink,
      source: GetEventStreamingResponseBodyDataSource,
      status: 'string',
      transforms: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataTransforms },
    };
  }

  validate() {
    if(this.detailedStatus && typeof (this.detailedStatus as any).validate === 'function') {
      (this.detailedStatus as any).validate();
    }
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

