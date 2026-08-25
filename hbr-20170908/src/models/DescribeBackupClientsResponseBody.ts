// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupClientsResponseBodyClientsSettings extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to send alerts for partially completed jobs. This setting applies only to File Backup and ECS File Backup Essential Edition.
   * 
   * @example
   * false
   */
  alertOnPartialComplete?: boolean;
  /**
   * @remarks
   * The type of the data plane endpoint. Valid values:
   * 
   * - **PUBLIC**: public network.
   * - **VPC**: VPC network.
   * - **CLASSIC**: classic network.
   * 
   * @example
   * VPC
   */
  dataNetworkType?: string;
  /**
   * @remarks
   * The data plane proxy setting. Valid values:
   * 
   * - **DISABLE**: No proxy is used.
   * - **USE_CONTROL_PROXY** (default): The same configuration as the control plane is used.
   * - **CUSTOM**: A custom configuration is used (HTTP protocol).
   * 
   * @example
   * USE_CONTROL_PROXY
   */
  dataProxySetting?: string;
  /**
   * @remarks
   * The number of CPU cores used by a single backup job. A value of 0 indicates no limit.
   * 
   * @example
   * 1
   */
  maxCpuCore?: string;
  /**
   * @remarks
   * The maximum memory that the client can use. Unit: bytes. Only versions 2.13.0 and later are supported.
   * 
   * @example
   * 0
   */
  maxMemory?: number;
  /**
   * @remarks
   * The number of concurrent workers for a single backup job. A value of 0 indicates no limit.
   * 
   * @example
   * 1
   */
  maxWorker?: string;
  /**
   * @remarks
   * The IP address of the custom data plane proxy server.
   * 
   * @example
   * 192.168.11.100
   */
  proxyHost?: string;
  /**
   * @remarks
   * The password of the custom data plane proxy server.
   * 
   * @example
   * ******
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The port of the custom data plane proxy server.
   * 
   * @example
   * 3128
   */
  proxyPort?: number;
  /**
   * @remarks
   * The username of the custom data plane proxy server.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * Indicates whether HTTPS is used to transmit data plane data.
   * 
   * - true: HTTPS is used for transmission.
   * - false: HTTP is used for transmission.
   * 
   * @example
   * false
   */
  useHttps?: string;
  static names(): { [key: string]: string } {
    return {
      alertOnPartialComplete: 'AlertOnPartialComplete',
      dataNetworkType: 'DataNetworkType',
      dataProxySetting: 'DataProxySetting',
      maxCpuCore: 'MaxCpuCore',
      maxMemory: 'MaxMemory',
      maxWorker: 'MaxWorker',
      proxyHost: 'ProxyHost',
      proxyPassword: 'ProxyPassword',
      proxyPort: 'ProxyPort',
      proxyUser: 'ProxyUser',
      useHttps: 'UseHttps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOnPartialComplete: 'boolean',
      dataNetworkType: 'string',
      dataProxySetting: 'string',
      maxCpuCore: 'string',
      maxMemory: 'number',
      maxWorker: 'string',
      proxyHost: 'string',
      proxyPassword: 'string',
      proxyPort: 'number',
      proxyUser: 'string',
      useHttps: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBodyClientsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the backup vault. Valid values of N: 1 to 20.
   * 
   * - The tag key cannot start with `aliyun` or `acs:`. 
   * - The tag key cannot contain `http://` or `https://`.
   * - The tag key cannot be an empty string.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the backup vault. Valid values of N: 1 to 20.
   * 
   * - The tag value cannot start with `aliyun` or `acs:`. 
   * - The tag value cannot contain `http://` or `https://`.
   * - The tag value cannot be an empty string.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBodyClients extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the client is a hardware monitoring appliance client.
   * 
   * - true: The client is a hardware monitoring appliance client.
   * - false: The client is not a hardware monitoring appliance client.
   * 
   * @example
   * false
   */
  appliance?: boolean;
  /**
   * @remarks
   * This parameter is valid only when **ClientType** is set to **ECS_CLIENT**. The system architecture of the backup client. Valid values:
   * * **amd64**
   * * **386**
   * 
   * @example
   * amd64
   */
  archType?: string;
  /**
   * @remarks
   * The protection status of the backup client. Valid values:
   * * **UNPROTECTED**: The server is not protected.
   * * **PROTECTED**: The server is protected.
   * 
   * @example
   * PROTECTED
   */
  backupStatus?: string;
  /**
   * @remarks
   * The ID of the backup client.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The type of the backup client. The value **ECS_CLIENT** indicates an ECS File Backup client.
   * 
   * @example
   * ECS_CLIENT
   */
  clientType?: string;
  /**
   * @remarks
   * The version number of the backup client.
   * 
   * @example
   * 2.4.5
   */
  clientVersion?: string;
  /**
   * @remarks
   * The time when the backup client was created. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The hostname of the backup client.
   * 
   * @example
   * hostname
   */
  hostname?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * - If the client type is ECS File Backup client, this parameter indicates the ECS instance ID.
   * - If the client type is local file backup client, this parameter indicates the hardware fingerprint generated based on system information.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is valid only when **ClientType** is set to **ECS_CLIENT**. The name of the ECS instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The time of the last heartbeat of the backup client. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  lastHeartBeatTime?: number;
  /**
   * @remarks
   * The latest version number of the backup client.
   * 
   * @example
   * 2.4.5
   */
  maxClientVersion?: string;
  /**
   * @remarks
   * This parameter is valid only when **ClientType** is set to **ECS_CLIENT**. The operating system type of the client. Valid values:
   * * **windows**
   * * **linux**
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * This parameter is valid only when **ClientType** is set to **ECS_CLIENT**. The internal IP address of the ECS instance.
   * 
   * @example
   * 192.168.1.1
   */
  privateIpV4?: string;
  /**
   * @remarks
   * The configuration information of the backup client.
   */
  settings?: DescribeBackupClientsResponseBodyClientsSettings;
  /**
   * @remarks
   * The status of the backup client. Valid values:
   * * **REGISTERED**: The client is registered.
   * * **ACTIVATED**: The client is activated.
   * * **DEACTIVATED**: The client activation has expired.
   * * **INSTALLING**: The client is being installed.
   * * **INSTALL_FAILED**: The client installation failed.
   * * **NOT_INSTALLED**: The client is not installed.
   * * **UPGRADING**: The client is being upgraded.
   * * **UPGRADE_FAILED**: The client upgrade failed.
   * * **UNINSTALLING**: The client is being uninstalled.
   * * **UNINSTALL_FAILED**: The client uninstallation failed.
   * * **STOPPED**: The client service is stopped.
   * * **UNKNOWN**: The client is disconnected.
   * 
   * @example
   * ACTIVATED
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: DescribeBackupClientsResponseBodyClientsTags[];
  /**
   * @remarks
   * The time when the backup client was last updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * This parameter is valid only when **ClientType** is set to **ECS_CLIENT**. The zone ID.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appliance: 'Appliance',
      archType: 'ArchType',
      backupStatus: 'BackupStatus',
      clientId: 'ClientId',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      createdTime: 'CreatedTime',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lastHeartBeatTime: 'LastHeartBeatTime',
      maxClientVersion: 'MaxClientVersion',
      osType: 'OsType',
      privateIpV4: 'PrivateIpV4',
      settings: 'Settings',
      status: 'Status',
      tags: 'Tags',
      updatedTime: 'UpdatedTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliance: 'boolean',
      archType: 'string',
      backupStatus: 'string',
      clientId: 'string',
      clientType: 'string',
      clientVersion: 'string',
      createdTime: 'number',
      hostname: 'string',
      instanceId: 'string',
      instanceName: 'string',
      lastHeartBeatTime: 'number',
      maxClientVersion: 'string',
      osType: 'string',
      privateIpV4: 'string',
      settings: DescribeBackupClientsResponseBodyClientsSettings,
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClientsTags },
      updatedTime: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup clients.
   * 
   * @example
   * {\\"Client\\": []}
   */
  clients?: DescribeBackupClientsResponseBodyClients[];
  /**
   * @remarks
   * The response code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. The value "successful" is returned for successful requests. An error message is returned for failed requests.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1. Maximum value: 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of backup clients that meet the specified conditions.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': DescribeBackupClientsResponseBodyClients },
      code: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

