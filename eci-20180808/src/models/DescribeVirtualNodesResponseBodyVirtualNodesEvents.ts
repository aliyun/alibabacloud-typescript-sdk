// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualNodesResponseBodyVirtualNodesEvents extends $dara.Model {
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
   * 2021-09-08T02:24:48Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The time when the event ended.
   * 
   * @example
   * 2021-09-08T02:24:52Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The message of the event.
   * 
   * @example
   * Successfully
   */
  message?: string;
  /**
   * @remarks
   * The name of the object to which the event belongs.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The name of the event.
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

