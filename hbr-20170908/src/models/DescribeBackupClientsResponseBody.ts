// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupClientsResponseBodyClientsSettings extends $dara.Model {
  /**
   * @remarks
   * Indicates whether alerts are generated for partially completed jobs. This parameter is valid only for on-premises file backup and ECS file backup.
   * 
   * @example
   * false
   */
  alertOnPartialComplete?: boolean;
  /**
   * @remarks
   * The type of the endpoint on the data plane. Valid values:
   * 
   * *   **PUBLIC**: Internet
   * *   **VPC**: virtual private cloud (VPC)
   * *   **CLASSIC**: classic network
   * 
   * @example
   * VPC
   */
  dataNetworkType?: string;
  /**
   * @remarks
   * The proxy configuration on the data plane. Valid values:
   * 
   * *   **DISABLE**: The proxy is not used.
   * *   **USE_CONTROL_PROXY** (default): The configuration is the same as that on the control plane.
   * *   **CUSTOM**: The configuration is customized (HTTP).
   * 
   * @example
   * USE_CONTROL_PROXY
   */
  dataProxySetting?: string;
  /**
   * @remarks
   * The number of CPU cores used by a single backup job. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxCpuCore?: string;
  /**
   * @remarks
   * The maximum memory that can be used by the client. Unit: bytes. Only V2.13.0 and later are supported.
   * 
   * @example
   * 0
   */
  maxMemory?: number;
  /**
   * @remarks
   * The number of concurrent backup jobs. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxWorker?: string;
  /**
   * @remarks
   * The custom host IP address of the proxy server on the data plane.
   * 
   * @example
   * 192.168.11.100
   */
  proxyHost?: string;
  /**
   * @remarks
   * The custom password of the proxy server on the data plane.
   * 
   * @example
   * ******
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The custom host port of the proxy server on the data plane.
   * 
   * @example
   * 3128
   */
  proxyPort?: number;
  /**
   * @remarks
   * The custom username of the proxy server on the data plane.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * Indicates whether data on the data plane is transmitted over HTTPS. Valid values:
   * 
   * *   true: Data is transmitted over HTTPS.
   * *   false: Data is transmitted over HTTP.
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
   * The tag key of the backup vault. Valid values of N: 1 to 20
   * 
   * *   The tag key cannot start with `aliyun` or `acs:`.
   * *   The tag key cannot contain `http://` or `https://`.
   * *   The tag key cannot be an empty string.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the backup vault. Valid values of N: 1 to 20
   * 
   * *   The tag value cannot start with `aliyun` or `acs:`.
   * *   The tag value cannot contain `http://` or `https://`.
   * *   The tag value cannot be an empty string.
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
   * Indicates whether the client is installed on an all-in-one PC that integrates hardware and monitoring program. Valid values:
   * 
   * *   true: The client is installed on an all-in-one PC that integrates hardware and monitoring program.
   * *   false: The client is not installed on an all-in-one PC that integrates hardware and monitoring program.
   * 
   * @example
   * false
   */
  appliance?: boolean;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the system architecture where the backup client resides. Valid values:
   * 
   * *   **amd64**
   * *   **386**
   * 
   * @example
   * amd64
   */
  archType?: string;
  /**
   * @remarks
   * The protection status of the backup client. Valid values:
   * 
   * *   **UNPROTECTED**: The backup client is not protected.
   * *   **PROTECTED**: The backup client is protected.
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
   * The type of the backup client. Valid value: **ECS_CLIENT**, which indicates a client for ECS file backup.
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
   * The time when the backup client was created. The value is a UNIX timestamp. Unit: seconds.
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
   * *   If the client is used to back up ECS files, this parameter indicates the ID of an ECS instance.
   * *   If the client is used to back up on-premises files, this parameter indicates the hardware fingerprint that is generated based on the system information.
   * 
   * @example
   * i-*********************
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the name of the ECS instance.
   * 
   * @example
   * instancename
   */
  instanceName?: string;
  /**
   * @remarks
   * The last heartbeat time of the backup client. The value is a UNIX timestamp. Unit: seconds.
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
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the operating system type of the backup client. Valid values:
   * 
   * *   **windows**
   * *   **linux**
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the internal IP address of the ECS instance.
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
   * 
   * *   **REGISTERED**: The backup client is registered.
   * *   **ACTIVATED**: The backup client is activated.
   * *   **DEACTIVATED**: The backup client fails to be activated.
   * *   **INSTALLING**: The backup client is being installed.
   * *   **INSTALL_FAILED**: The backup client fails to be installed.
   * *   **NOT_INSTALLED**: The backup client is not installed.
   * *   **UPGRADING**: The backup client is being upgraded.
   * *   **UPGRADE_FAILED**: The backup client fails to be upgraded.
   * *   **UNINSTALLING**: The backup client is being uninstalled.
   * *   **UNINSTALL_FAILED**: The backup client fails to be uninstalled.
   * *   **STOPPED**: The backup client is out of service.
   * *   **UNKNOWN**: The backup client is disconnected.
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
   * The time when the backup client was updated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * This parameter is valid only if the **ClientType** parameter is set to **ECS_CLIENT**. This parameter indicates the zone of the backup client.
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
   * The queried backup clients.
   * 
   * @example
   * {\\"Client\\": []}
   */
  clients?: DescribeBackupClientsResponseBodyClients[];
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned HBR clients that meet the specified conditions.
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

