// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTopologyRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The end time of the time range for querying historical instances in the topology. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-10-22T10:30:45Z 04:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to query the historical topology.
   * 
   * @example
   * true
   */
  minuteSimple?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the time range for querying historical instances in the topology. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2021-10-21T10:30:45Z 04:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      endTime: 'EndTime',
      minuteSimple: 'MinuteSimple',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      endTime: 'string',
      minuteSimple: 'boolean',
      regionId: 'string',
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

