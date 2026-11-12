// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingShrinkRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
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
   * The event filtering rule. If you do not specify this parameter, all events are matched.
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
   * The resource group ID. If you do not specify this parameter, the created event stream belongs to the default resource group of the account.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The runtime environment parameters.
   */
  runOptionsShrink?: string;
  /**
   * @remarks
   * The event target. You must select exactly one type of sink to configure.
   */
  sinkShrink?: string;
  /**
   * @remarks
   * The event provider. You must select exactly one source type and configure its parameters.
   */
  sourceShrink?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tags?: CreateEventStreamingShrinkRequestTags[];
  /**
   * @remarks
   * The configuration for transforms.
   */
  transformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      metadata: 'Metadata',
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

