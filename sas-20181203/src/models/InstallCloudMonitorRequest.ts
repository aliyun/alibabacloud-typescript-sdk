// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey required to install the CloudMonitor agent. You can call the [DescribeMonitoringAgentAccessKey](https://help.aliyun.com/document_detail/114948.html) operation to obtain this parameter.
   * 
   * > This parameter is required only when you install the CloudMonitor agent on a non-Alibaba Cloud server.
   * 
   * @example
   * usY*****R_U
   */
  agentAccessKey?: string;
  /**
   * @remarks
   * The AccessSecret required to install the CloudMonitor agent. You can call the [DescribeMonitoringAgentAccessKey](https://help.aliyun.com/document_detail/114948.html) operation to obtain this parameter.
   * > This parameter is required only when you install the CloudMonitor agent on a non-Alibaba Cloud server.
   * 
   * @example
   * UCxF2R1sIO90XlU9****
   */
  agentSecretKey?: string;
  /**
   * @remarks
   * The version of the CloudMonitor agent to install. You can obtain the latest CloudMonitor agent version from [Plugin overview](https://help.aliyun.com/document_detail/183431.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3.5.6
   */
  argusVersion?: string;
  /**
   * @remarks
   * The list of instance IDs of the servers on which you want to install the CloudMonitor agent. Separate multiple IDs with commas (,).
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The list of UUIDs of the servers on which you want to install the CloudMonitor agent. Separate multiple UUIDs with commas (,).
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentAccessKey: 'AgentAccessKey',
      agentSecretKey: 'AgentSecretKey',
      argusVersion: 'ArgusVersion',
      instanceIdList: 'InstanceIdList',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAccessKey: 'string',
      agentSecretKey: 'string',
      argusVersion: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

