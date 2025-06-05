// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupEventsResponseBodyDataEventsMetadata } from "./DescribeContainerGroupEventsResponseBodyDataEventsMetadata";
import { DescribeContainerGroupEventsResponseBodyDataEventsSource } from "./DescribeContainerGroupEventsResponseBodyDataEventsSource";
import { DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject } from "./DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject";


export class DescribeContainerGroupEventsResponseBodyDataEvents extends $dara.Model {
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The first occurrence time of the event.
   * 
   * @example
   * 2021-10-04T09:08:04Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The most recent occurrence time of the event.
   * 
   * @example
   * 2021-10-04T09:08:04Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Started container
   */
  message?: string;
  /**
   * @remarks
   * The metadata of the event.
   */
  metadata?: DescribeContainerGroupEventsResponseBodyDataEventsMetadata;
  /**
   * @remarks
   * The cause of the event.
   * 
   * @example
   * Started
   */
  reason?: string;
  /**
   * @remarks
   * The component from which the event is reported.
   * 
   * @example
   * test
   */
  reportingComponent?: string;
  /**
   * @remarks
   * The instance from which the event is reported.
   * 
   * @example
   * test
   */
  reportingInstance?: string;
  /**
   * @remarks
   * The source.
   */
  source?: DescribeContainerGroupEventsResponseBodyDataEventsSource;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The resource object that the event is about.
   */
  involvedObject?: DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      metadata: 'Metadata',
      reason: 'Reason',
      reportingComponent: 'ReportingComponent',
      reportingInstance: 'ReportingInstance',
      source: 'Source',
      type: 'Type',
      involvedObject: 'involvedObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      metadata: DescribeContainerGroupEventsResponseBodyDataEventsMetadata,
      reason: 'string',
      reportingComponent: 'string',
      reportingInstance: 'string',
      source: DescribeContainerGroupEventsResponseBodyDataEventsSource,
      type: 'string',
      involvedObject: DescribeContainerGroupEventsResponseBodyDataEventsInvolvedObject,
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.involvedObject && typeof (this.involvedObject as any).validate === 'function') {
      (this.involvedObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

