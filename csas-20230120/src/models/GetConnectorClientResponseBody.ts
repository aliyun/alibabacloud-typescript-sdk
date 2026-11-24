// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorClientResponseBodyConnectorClient extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs of the ConnectorClient.
   * 
   * @example
   * 16
   */
  CPUSize?: string;
  /**
   * @remarks
   * The connection status of the ConnectorClient. Valid values:
   * - **Connected**: The client is connected.
   * - **Disconnected**: The client is disconnected.
   * 
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The connector ID.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The version of the connector client.
   * 
   * @example
   * 1.0.0
   */
  connectorVersion?: string;
  /**
   * @remarks
   * The time when the ConnectorClient was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  /**
   * @remarks
   * The unique identifier of the ConnectorClient device.
   * 
   * @example
   * E86266A0-2859-58EF-8F5B-EDE226FF6EB2
   */
  devTag?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * connector_client_hostname
   */
  hosname?: string;
  /**
   * @remarks
   * The kernel version of the ConnectorClient.
   * 
   * @example
   * 22.3.0
   */
  kernelVersion?: string;
  /**
   * @remarks
   * The memory size of the ConnectorClient. Unit: MB.
   * 
   * @example
   * 32768
   */
  memorySize?: string;
  /**
   * @remarks
   * The O&M status. Valid values:
   * - **Running**: O&M is in progress.
   * - **Failed**: O&M failed.
   * - (Empty string): Not in an O&M state.
   * 
   * @example
   * Running
   */
  operationStatus?: string;
  /**
   * @remarks
   * The private IP address of the ConnectorClient.
   * 
   * @example
   * 192.168.0.1
   */
  privateIp?: string;
  /**
   * @remarks
   * The runtime of the program. Unit: seconds.
   * 
   * @example
   * 100
   */
  processRunTime?: number;
  /**
   * @remarks
   * The public IP address of the ConnectorClient.
   * 
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @remarks
   * The release notes.
   */
  releaseNotes?: string[];
  /**
   * @remarks
   * The enabling status of the ConnectorClient. You can use this parameter to force the client offline. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The upgrade status of the connector. Valid values:
   * - **Latest**: The connector is of the latest version.
   * - **NewVersionAvailable**: A newer version is available for upgrade.
   * 
   * @example
   * latest
   */
  upgradeStatus?: string;
  /**
   * @remarks
   * The version to roll back to.
   * 
   * @example
   * 1.0.0
   */
  versionToRollback?: string;
  static names(): { [key: string]: string } {
    return {
      CPUSize: 'CPUSize',
      connectionStatus: 'ConnectionStatus',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
      createTime: 'CreateTime',
      devTag: 'DevTag',
      hosname: 'Hosname',
      kernelVersion: 'KernelVersion',
      memorySize: 'MemorySize',
      operationStatus: 'OperationStatus',
      privateIp: 'PrivateIp',
      processRunTime: 'ProcessRunTime',
      publicIp: 'PublicIp',
      releaseNotes: 'ReleaseNotes',
      status: 'Status',
      upgradeStatus: 'UpgradeStatus',
      versionToRollback: 'VersionToRollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUSize: 'string',
      connectionStatus: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
      createTime: 'string',
      devTag: 'string',
      hosname: 'string',
      kernelVersion: 'string',
      memorySize: 'string',
      operationStatus: 'string',
      privateIp: 'string',
      processRunTime: 'number',
      publicIp: 'string',
      releaseNotes: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      upgradeStatus: 'string',
      versionToRollback: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.releaseNotes)) {
      $dara.Model.validateArray(this.releaseNotes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectorClientResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ConnectorClient.
   */
  connectorClient?: GetConnectorClientResponseBodyConnectorClient;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectorClient: 'ConnectorClient',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorClient: GetConnectorClientResponseBodyConnectorClient,
      requestId: 'string',
    };
  }

  validate() {
    if(this.connectorClient && typeof (this.connectorClient as any).validate === 'function') {
      (this.connectorClient as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

