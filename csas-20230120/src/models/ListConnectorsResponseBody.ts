// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorsResponseBodyConnectorsApplications extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the internal access application.
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
   * The connection status between the connector client and the connector server.
   * 
   * @example
   * Disconnected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The unique device identifier of the connector client.
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
   * The end time.
   * 
   * @example
   * 23:00
   */
  end?: string;
  /**
   * @remarks
   * The start time.
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
   * Specifies whether global acceleration is enabled. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  accelerateStatus?: string;
  /**
   * @remarks
   * The internal access applications associated with the connector.
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
   * The deployed connector clients.
   */
  connectorClients?: ListConnectorsResponseBodyConnectorsConnectorClients[];
  /**
   * @remarks
   * The unique ID of the connector.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The time when the connector was created. The time is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the connector.
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
   * - **Online**: online.
   * - **Offline**: offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The instance status of the connector. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: shutdown.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * The upgrade time of the connector.
   */
  upgradeTime?: ListConnectorsResponseBodyConnectorsUpgradeTime;
  /**
   * @remarks
   * The CIDR block of the virtual IP address.
   * 
   * @example
   * 10.0.0.0/24
   */
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
   * The list of connectors.
   */
  connectors?: ListConnectorsResponseBodyConnectors[];
  /**
   * @remarks
   * The ID of the request.
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

