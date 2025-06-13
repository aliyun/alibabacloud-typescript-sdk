// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveServersFromServerGroupRequestServers extends $dara.Model {
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**.
   * 
   * >  This parameter is required when you set **ServerType** to **Ecs**, **Eni**, **Eci**, or **Ip**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID.
   * 
   * *   If the server group is of the **Instance** type, set ServerId to the ID of a resource of the **Ecs**, **Eni**, or **Eci** type.
   * *   If the server group is of the **Ip** type, set this parameter to IP addresses.
   * *   If the server group is of the **Fc** type, set ServerId to the Alibaba Cloud Resource Name (ARN) of a function.
   * 
   * >  You can call the [ListServerGroups](https://help.aliyun.com/document_detail/2254862.html) operation to query information about the server group type so that you can set ServerId to a proper value.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f9kdprbgy9uiu****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the elastic network interface (ENI) in inclusive mode.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: Elastic Compute Service (ECS) instance
   * *   **Eni**: ENI
   * *   **Eci**: elastic container instance
   * *   **Ip**: IP address
   * *   **Fc**: Function Compute instance
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

