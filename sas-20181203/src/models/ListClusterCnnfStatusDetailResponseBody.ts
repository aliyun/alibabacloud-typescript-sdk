// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterCnnfStatusDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c8ca91e0907d94efaba7fb0827eb9****
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether the container firewall plug-in is installed.
   * 
   * @example
   * true
   */
  installed?: boolean;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * i-bp180bogui4fc0z4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The public IP address of the associated instance.
   * 
   * @example
   * 172.16.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the associated instance.
   * 
   * @example
   * 10.42.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The cause why the plug-in is invalid. Valid values:
   * 
   * *   **PLUGIN_OFFLINE**: The plug-in is offline.
   * *   **PLUGIN_NOT_INSTALLED**: The plug-in is not installed.
   * *   **PLUGIN_INVALID_VERSION**: The version of the plug-in is invalid.
   * 
   * @example
   * PLUGIN_OFFLINE
   */
  invalidType?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * security
   */
  machineName?: string;
  /**
   * @remarks
   * The machine type of the instance. The value is fixed as **ecs**.
   * 
   * @example
   * ecs
   */
  machineType?: number;
  /**
   * @remarks
   * The name of the plug-in. The value is fixed as **alinet**.
   * 
   * @example
   * alinet
   */
  pluginName?: string;
  /**
   * @remarks
   * The version of the plug-in.
   * 
   * @example
   * 3.3
   */
  pluginVersion?: string;
  /**
   * @remarks
   * The online status of the plug-in. Valid values:
   * 
   * *   **false**: The plug-in is offline.
   * *   **true**: The plug-in is online.
   * 
   * @example
   * false
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 6690a46c-0edb-4663-a641-3629d1a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      installed: 'Installed',
      instanceId: 'InstanceId',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      invalidType: 'InvalidType',
      machineName: 'MachineName',
      machineType: 'MachineType',
      pluginName: 'PluginName',
      pluginVersion: 'PluginVersion',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      installed: 'boolean',
      instanceId: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      invalidType: 'string',
      machineName: 'string',
      machineType: 'number',
      pluginName: 'string',
      pluginVersion: 'string',
      status: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterCnnfStatusDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the protection status of the container firewall.
   */
  data?: ListClusterCnnfStatusDetailResponseBodyData[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 64329F40-5C94-51D3-A400-37AA7BAC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListClusterCnnfStatusDetailResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

