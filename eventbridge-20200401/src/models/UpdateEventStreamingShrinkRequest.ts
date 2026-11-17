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
   * The event filter pattern. If you do not specify this parameter, all events are matched. For more information, see [Event patterns](https://www.alibabacloud.com/help/en/eventbridge/user-guide/event-patterns).
   * 
   * @example
   * {
   *     "source": [
   *         {
   *             "prefix": "acs:mns"
   *         }
   *     ],
   *     "type": [
   *         {
   *             "prefix": "mns:Queue"
   *         }
   *     ],
   *     "subject": [
   *         {
   *             "prefix": "acs:mns:cn-hangzhou:123456789098****:queues/zeus"
   *         }
   *     ]
   * }
   */
  filterPattern?: string;
  /**
   * @remarks
   * The common JSON configurations for the event provider. This parameter is mutually exclusive with Source.
   * 
   * @example
   * {"key":"value"}
   */
  metadata?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptionsShrink?: string;
  /**
   * @remarks
   * The event target. You must select exactly one sink.
   */
  sinkShrink?: string;
  /**
   * @remarks
   * The event provider. You must specify one and only one source type.
   */
  sourceShrink?: string;
  /**
   * @remarks
   * The transform configurations.
   */
  transformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      metadata: 'Metadata',
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
      metadata: 'string',
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

