// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentHostsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query Elastic Compute Service (ECS) instances that are provided by Alibaba Cloud or to query hosts that are not provided by Alibaba Cloud. Valid values:
   * 
   * *   true (default value): queries all the ECS instances that are provided by Alibaba Cloud.
   * *   false: queries all the hosts that are not provided by Alibaba Cloud.
   * 
   * @example
   * true
   */
  aliyunHost?: boolean;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * hostNam1
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-a3d1q1pm2f9yr29e****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The keyword that is used in fuzzy match.
   * 
   * @example
   * host1
   */
  keyWord?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   10
   * *   20
   * *   50
   * *   100
   * 
   * > Although Alibaba Cloud does not limit the maximum value of this parameter, we recommend that you do not set it to an excessively large value. If you set it to an excessively large value, a timeout error may occur.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The serial number of the host.
   * 
   * After the CloudMonitor agent is installed on a host, a globally unique serial number is generated. A host that is not provided by Alibaba Cloud has a serial number instead of an instance ID.
   * 
   * > This parameter can be used to accurately search for a monitored host.
   * 
   * @example
   * a1ab31a3-1234-40f2-9e95-c8caa8f0****
   */
  serialNumbers?: string;
  /**
   * @remarks
   * The status of the hosts that you want to query. Valid values:
   * 
   * *   Running: queries the hosts that are running.
   * *   Stopped: queries the hosts that are stopped, are not installed, or fail to be installed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The status of SysOM. Valid values:
   * 
   * *   installing: SysOM is being installed.
   * *   running: SysOM is running.
   * *   stopped: SysOM is stopped.
   * *   uninstalling: SysOM is being uninstalled.
   * 
   * @example
   * running
   */
  sysomStatus?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunHost: 'AliyunHost',
      hostName: 'HostName',
      instanceIds: 'InstanceIds',
      instanceRegionId: 'InstanceRegionId',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      serialNumbers: 'SerialNumbers',
      status: 'Status',
      sysomStatus: 'SysomStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunHost: 'boolean',
      hostName: 'string',
      instanceIds: 'string',
      instanceRegionId: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      serialNumbers: 'string',
      status: 'string',
      sysomStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

