// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Cloud Monitor agent was automatically installed on the simple application server. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * c854dc6f07e74953830bb5808d0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The running status of the Cloud Monitoring plug-in. Possible values are:
   * 
   * - running: Cloud Monitoring plug-in running.
   * 
   * - stopped: Cloud Monitoring plug-in stopped.
   * 
   * - installing: Cloud Monitoring plug-in installing.
   * 
   * - install_faild: Cloud Monitoring plug-in installation failed.
   * 
   * - abnormal: Cloud Monitoring plug-in installation abnormal.
   * 
   * - not_installed: Cloud Monitoring plug-in not installed.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Cloud Monitor agent was automatically installed on the simple application server.
   */
  instanceStatusList?: DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E1FEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusList: 'InstanceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusList: { 'type': 'array', 'itemType': DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatusList)) {
      $dara.Model.validateArray(this.instanceStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

