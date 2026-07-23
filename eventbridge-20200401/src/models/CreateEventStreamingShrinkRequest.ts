// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingShrinkRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The event filtering rule. If not specified, all events are matched.
   * 
   * @example
   * {
   * "source": [
   * {
   * "prefix": "acs:mns"
   * }
   * ],
   * "type": [
   * {
   * "prefix": "mns:Queue"
   * }
   * ],
   * "subject": [
   * {
   * "prefix": "acs:mns:cn-hangzhou:123456789098****:queues/zeus"
   * }
   * ]
   * }
   */
  filterPattern?: string;
  metadata?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptionsShrink?: string;
  /**
   * @remarks
   * The event target. You must select exactly one Sink type.
   */
  sinkShrink?: string;
  /**
   * @remarks
   * The event provider. You must select exactly one Source type.
   */
  sourceShrink?: string;
  /**
   * @remarks
   * The tag list. A maximum of 20 items are supported.
   */
  tags?: CreateEventStreamingShrinkRequestTags[];
  /**
   * @remarks
   * The Transform-related configurations.
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
      tags: 'Tags',
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

