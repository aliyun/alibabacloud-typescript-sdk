// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDestinationPortEventRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the attack event that you want to query. Valid values:
   * 
   * *   **defense**: attack events that trigger traffic scrubbing.
   * *   **blackhole**: attack events that trigger blackhole filtering.
   * 
   * This parameter is required.
   * 
   * @example
   * defense
   */
  eventType?: string;
  /**
   * @remarks
   * The IP address of the attacker.
   * 
   * This parameter is required.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The number of destination ports to return. The ports are sorted in descending order of the number of received request packets. By default, the first **10** ports are returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  range?: number;
  /**
   * @remarks
   * The region in which your service is deployed. Valid values:
   * 
   * *   **cn**: a region in the Chinese mainland.
   * *   **cn-hongkong**: a region outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn
   */
  region?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * >  This UNIX timestamp must indicate a point in time that is accurate to the minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 1720059000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      ip: 'Ip',
      range: 'Range',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      ip: 'string',
      range: 'number',
      region: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

