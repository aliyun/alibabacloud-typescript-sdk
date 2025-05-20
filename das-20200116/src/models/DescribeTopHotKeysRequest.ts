// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopHotKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   Only data within the last four days can be queried.
   * 
   * *   The maximum interval between the **start time** and the** end time** is 3 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1596177993001
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB for Redis instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard on the ApsaraDB for Redis instance.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1596177993000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      consoleContext: 'ConsoleContext',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleContext: 'string',
      endTime: 'string',
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

