// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsResponseBodyConnectorsApplications extends $dara.Model {
  /**
   * @remarks
   * The private access application ID.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The private access application name.
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
   * The connection status between the connector client and connector server.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The unique device ID of the connector client.
   * 
   * @example
   * C50A2386-F851-4F11-920B-DF7148DA0C22
   */
  devTag?: string;
  /**
   * @remarks
   * The hostname of the connector client.
   * 
   * @example
   * connector_client
   */
  hostname?: string;
  /**
   * @remarks
   * The public IP address of the connector client.
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
   * The end time of the upgrade window.
   * 
   * @example
   * 23:00
   */
  end?: string;
  /**
   * @remarks
   * The start time of the upgrade window.
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
  /**
   * @remarks
   * Indicates whether global acceleration is enabled. Valid values:
   * 
   * - **Enabled**: Global acceleration is enabled.
   * 
   * - **Disabled**: Global acceleration is disabled.
   * 
   * @example
   * Enabled
   */
  accelerateStatus?: string;
  /**
   * @remarks
   * A list of associated private access applications.
   */
  applications?: ListConnectorsResponseBodyConnectorsApplications[];
  /**
   * @remarks
   * The cluster IP address.
   * 
   * @example
   * 1.1.1.1
   */
  clusterIP?: string;
  /**
   * @remarks
   * The cluster port.
   * 
   * @example
   * 8000
   */
  clusterPort?: string;
  /**
   * @remarks
   * A list of deployed connector clients.
   */
  connectorClients?: ListConnectorsResponseBodyConnectorsConnectorClients[];
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
   * The time the connector was created.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * The connector name.
   * 
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The connection status of the connector. Valid values:
   * 
   * - **Online**: The connector is online.
   * 
   * - **Offline**: The connector is offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The status of the connector instance. Valid values:
   * 
   * - **Enabled**: The connector is enabled.
   * 
   * - **Disabled**: The connector is disabled.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * The upgrade window for the connector.
   */
  upgradeTime?: ListConnectorsResponseBodyConnectorsUpgradeTime;
  vipCidr?: string;
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
      vipCidr: 'VipCidr',
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
      vipCidr: 'string',
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
   * A list of connectors.
   */
  connectors?: ListConnectorsResponseBodyConnectors[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of connectors.
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

