// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientsResponseBodyClientsClient extends $dara.Model {
  /**
   * @remarks
   * The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.
   * 
   * @example
   * INHERITED
   */
  alertSetting?: string;
  /**
   * @remarks
   * The ID of the Cloud Backup client.
   * 
   * @example
   * c-00062uu******2fgj
   */
  clientId?: string;
  /**
   * @remarks
   * The client name.
   * 
   * @example
   * client-20211224-101226
   */
  clientName?: string;
  /**
   * @remarks
   * The type of the Cloud Backup client. Valid value: **ECS_AGENT**, which indicates an SAP HANA backup client.
   * 
   * @example
   * ECS_AGENT
   */
  clientType?: string;
  /**
   * @remarks
   * The version number of the Cloud Backup client.
   * 
   * @example
   * 1.11.16
   */
  clientVersion?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0008c48frr******ncpk
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the Cloud Backup client was created.
   * 
   * @example
   * 1554347313
   */
  createdTime?: number;
  /**
   * @remarks
   * The latest heartbeat time of the Cloud Backup client. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  heartBeatTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9b6wya******n8yo
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * swh-hbr
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum version number of the Cloud Backup client.
   * 
   * @example
   * 1.11.23
   */
  maxVersion?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **CLASSIC**: the classic network
   * *   **VPC**: the virtual private cloud (VPC)
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the Cloud Backup client. Valid values:
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
   * The status information.
   * 
   * @example
   * HANA_NOT_SUPPORT
   */
  statusMessage?: string;
  /**
   * @remarks
   * The time when the Cloud Backup client was updated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1554347313
   */
  updatedTime?: number;
  /**
   * @remarks
   * Indicates whether data is transmitted over HTTPS. Valid values:
   * 
   * *   true: Data is transmitted over HTTPS.
   * *   false: Data is transmitted over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-00029mx6o******n85lg
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertSetting: 'AlertSetting',
      clientId: 'ClientId',
      clientName: 'ClientName',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      heartBeatTime: 'HeartBeatTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxVersion: 'MaxVersion',
      networkType: 'NetworkType',
      status: 'Status',
      statusMessage: 'StatusMessage',
      updatedTime: 'UpdatedTime',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertSetting: 'string',
      clientId: 'string',
      clientName: 'string',
      clientType: 'string',
      clientVersion: 'string',
      clusterId: 'string',
      createdTime: 'number',
      heartBeatTime: 'number',
      instanceId: 'string',
      instanceName: 'string',
      maxVersion: 'string',
      networkType: 'string',
      status: 'string',
      statusMessage: 'string',
      updatedTime: 'number',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBodyClients extends $dara.Model {
  client?: DescribeClientsResponseBodyClientsClient[];
  static names(): { [key: string]: string } {
    return {
      client: 'Client',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: { 'type': 'array', 'itemType': DescribeClientsResponseBodyClientsClient },
    };
  }

  validate() {
    if(Array.isArray(this.client)) {
      $dara.Model.validateArray(this.client);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Cloud Backup clients.
   */
  clients?: DescribeClientsResponseBodyClients;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.
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
   * 17189276-465D-5EF3-8FFD-0FF51B5A41A0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
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
      clients: DescribeClientsResponseBodyClients,
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
    if(this.clients && typeof (this.clients as any).validate === 'function') {
      (this.clients as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

