// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallCloudMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is required to install the CloudMonitor agent. You can call the [DescribeMonitoringAgentAccessKey](https://help.aliyun.com/document_detail/114948.html) operation to query the AccessKey ID.
   * 
   * > This parameter is required only when you install the CloudMonitor agent on servers that are not deployed on Alibaba Cloud.
   * 
   * @example
   * usY*****R_U
   */
  agentAccessKey?: string;
  /**
   * @remarks
   * The AccessKey secret that is required to install the CloudMonitor agent. You can call the [DescribeMonitoringAgentAccessKey](https://help.aliyun.com/document_detail/114948.html) operation to query the AccessKey secret.
   * 
   * > This parameter is required only when you install the CloudMonitor agent on servers that are not deployed on Alibaba Cloud.
   * 
   * @example
   * UCxF2R1sIO90XlU9****
   */
  agentSecretKey?: string;
  /**
   * @remarks
   * The version of the CloudMonitor agent that you want to install on the servers. For more information about the latest version of the CloudMonitor agent, see [Overview](https://help.aliyun.com/document_detail/183431.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3.5.6
   */
  argusVersion?: string;
  /**
   * @remarks
   * The IDs of the servers on which you want to install the CloudMonitor agent. Separate multiple IDs with commas (,).
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The UUIDs of the servers on which you want to install the CloudMonitor agent. Separate multiple UUIDs with commas (,).
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

