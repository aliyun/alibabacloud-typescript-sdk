// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppJVMConfigResponseBodyJvmInfoList extends $dara.Model {
  /**
   * @remarks
   * The version of the agent.
   * 
   * @example
   * 1.7.0-SNAPSHOT_3.0.3_3756244
   */
  agentVersion?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * host_name
   */
  hostName?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 47.91.59.244
   */
  ip?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * dsv9zcel92@1455182510c5369
   */
  pid?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 1
   */
  procId?: string;
  /**
   * @remarks
   * The VM parameters.
   * 
   * @example
   * [-javaagent:/home/admin/.opt/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar, -Doneagent.plugin.arms-agent.enabled=true, -Darms.licenseKey=[******], -Darms.agent.env=K8s, -Darms.agent.podinfo.path=/etc/podinfo, -Darms.appName=productservice, -Doneagent.region=cn-hangzhou, -Dproject.name=Product]
   */
  vmArgs?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      hostName: 'HostName',
      ip: 'Ip',
      pid: 'Pid',
      procId: 'ProcId',
      vmArgs: 'VmArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      hostName: 'string',
      ip: 'string',
      pid: 'string',
      procId: 'string',
      vmArgs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppJVMConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values: 2XX: The request is successful. 3XX: A redirection message is returned. 4XX: The request is invalid. 5XX: A server error occurs.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The list of JVM information.
   */
  jvmInfoList?: GetAppJVMConfigResponseBodyJvmInfoList[];
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jvmInfoList: 'JvmInfoList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      jvmInfoList: { 'type': 'array', 'itemType': GetAppJVMConfigResponseBodyJvmInfoList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.jvmInfoList)) {
      $dara.Model.validateArray(this.jvmInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

