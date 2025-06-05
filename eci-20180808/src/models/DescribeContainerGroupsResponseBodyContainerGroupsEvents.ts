// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsEvents extends $dara.Model {
  /**
   * @remarks
   * The number of the events.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The start time of the event.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The end time of the event.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The event message.
   * 
   * @example
   * Started container
   */
  message?: string;
  /**
   * @remarks
   * The category to which the event belongs.
   * 
   * @example
   * test-xxx
   */
  name?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * Created
   */
  reason?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      name: 'Name',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      name: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

