// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterConfigChangeLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration file that you want to modify. For a compute cluster, set the value to be.conf. For a frontend (FE) cluster, set the value to fe.conf.
   * 
   * @example
   * be.conf
   */
  configKey?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213c8yvv09-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-jia3ma3b003
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-08T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-25T09:48:23Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      DBClusterId: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
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

