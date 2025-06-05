// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageCachesResponseBodyImageCachesEvents extends $dara.Model {
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The time when the event started.
   * 
   * @example
   * 2021-02-09T02:24:48Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The time when the event ended.
   * 
   * @example
   * 2021-02-09T02:24:48Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The message about the event.
   * 
   * @example
   * Successfully check image cache resource.
   */
  message?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * imagetest.1661f31f851a****
   */
  name?: string;
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
   * The type of the event. Valid values:
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

