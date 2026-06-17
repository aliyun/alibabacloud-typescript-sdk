// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentHostsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter for Alibaba Cloud Elastic Compute Service (ECS) instances. Valid values:
   * 
   * - true (default): Returns only ECS instances.
   * 
   * - false: Returns only hosts that are not ECS instances.
   * 
   * @example
   * true
   */
  aliyunHost?: boolean;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * hostNam1
   */
  hostName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-a3d1q1pm2f9yr29e****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search.
   * 
   * @example
   * host1
   */
  keyWord?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - 10
   * 
   * - 20
   * 
   * - 50
   * 
   * - 100
   * 
   * > Alibaba Cloud does not limit the maximum value of this parameter. However, setting this parameter to a large value may cause a timeout.
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
   * A globally unique serial number is generated after the CloudMonitor agent is successfully installed on a host. Hosts that are not Alibaba Cloud instances do not have an instance ID, but have a serial number.
   * 
   * > Use this parameter to find a specific monitored host.
   * 
   * @example
   * a1ab31a3-1234-40f2-9e95-c8caa8f0****
   */
  serialNumbers?: string;
  /**
   * @remarks
   * The status of the host. Valid values:
   * 
   * - Running: The host is running.
   * 
   * - Stopped: The host is stopped, the agent is not installed, or the agent installation failed.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The status of SysOM. Valid values:
   * 
   * - installing: SysOM is being enabled.
   * 
   * - running: SysOM is running.
   * 
   * - stopped: SysOM is stopped.
   * 
   * - uninstalling: SysOM is being disabled.
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

