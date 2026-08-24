// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopHotKeysRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  consoleContext?: string;
  /**
   * @remarks
   * The end of the query time range, specified as a UNIX timestamp in milliseconds.
   * 
   * > - The end time must be later than the start time.
   * >
   * > - You can query data within the last four days.
   * >
   * > - The maximum time interval between **StartTime** and **EndTime** is three hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1596177993001
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the Redis instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard of the Redis instance.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The start of the query time range, specified as a UNIX timestamp in milliseconds.
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

