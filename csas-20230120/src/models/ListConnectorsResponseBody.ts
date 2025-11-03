// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsResponseBodyConnectorsApplications extends $dara.Model {
  /**
   * @remarks
   * Internal network access application ID.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * Internal network access application name.
   * 
   * @example
   * application_name
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsConnectorClients extends $dara.Model {
  /**
   * @remarks
   * Connection status between ConnectorClient and ConnectorServer.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * Unique device identifier for the ConnectorClient.
   * 
   * @example
   * C50A2386-F851-4F11-920B-DF7148DA0C22
   */
  devTag?: string;
  /**
   * @remarks
   * Hostname of the ConnectorClient.
   * 
   * @example
   * connector_client
   */
  hostname?: string;
  /**
   * @remarks
   * Public IP of the ConnectorClient.
   * 
   * @example
   * 192.0.2.1
   */
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      devTag: 'DevTag',
      hostname: 'Hostname',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      devTag: 'string',
      hostname: 'string',
      publicIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsUpgradeTime extends $dara.Model {
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 23:00
   */
  end?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 20:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectors extends $dara.Model {
  accelerateStatus?: string;
  /**
   * @remarks
   * Collection of associated internal network access applications.
   */
  applications?: ListConnectorsResponseBodyConnectorsApplications[];
  /**
   * @remarks
   * Cluster IP.
   * 
   * @example
   * 1.1.1.1
   */
  clusterIP?: string;
  /**
   * @remarks
   * Cluster port.
   * 
   * @example
   * 8000
   */
  clusterPort?: string;
  /**
   * @remarks
   * Collection of deployed ConnectorClients.
   */
  connectorClients?: ListConnectorsResponseBodyConnectorsConnectorClients[];
  /**
   * @remarks
   * Connector ID.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * Creation time of the Connector.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * Connector name.
   * 
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Connector connection status. Values:
   * - **Online**: Online.
   * - **Offline**: Offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * Connector instance status. Values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * Connector upgrade time.
   */
  upgradeTime?: ListConnectorsResponseBodyConnectorsUpgradeTime;
  static names(): { [key: string]: string } {
    return {
      accelerateStatus: 'AccelerateStatus',
      applications: 'Applications',
      clusterIP: 'ClusterIP',
      clusterPort: 'ClusterPort',
      connectorClients: 'ConnectorClients',
      connectorId: 'ConnectorId',
      createTime: 'CreateTime',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      switchStatus: 'SwitchStatus',
      upgradeTime: 'UpgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateStatus: 'string',
      applications: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsApplications },
      clusterIP: 'string',
      clusterPort: 'string',
      connectorClients: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsConnectorClients },
      connectorId: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      switchStatus: 'string',
      upgradeTime: ListConnectorsResponseBodyConnectorsUpgradeTime,
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.connectorClients)) {
      $dara.Model.validateArray(this.connectorClients);
    }
    if(this.upgradeTime && typeof (this.upgradeTime as any).validate === 'function') {
      (this.upgradeTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of Connectors.
   */
  connectors?: ListConnectorsResponseBodyConnectors[];
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of Connectors.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      connectors: 'Connectors',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectors: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectors },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.connectors)) {
      $dara.Model.validateArray(this.connectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

