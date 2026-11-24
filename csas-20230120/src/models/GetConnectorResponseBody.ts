// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorResponseBodyConnectorUpgradeTime extends $dara.Model {
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

export class GetConnectorResponseBodyConnector extends $dara.Model {
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
   * The time when the connector was created, in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-05-16 17:18:46
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
   * - **Online**: Online.
   * - **Offline**: Offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The instance status of the connector. Valid values:
   * - **Enabled**: enabled
   * - **Disabled**: shutdown
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * The upgrade time of the connector.
   */
  upgradeTime?: GetConnectorResponseBodyConnectorUpgradeTime;
  /**
   * @remarks
   * The virtual IP address CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  vipCidr?: string;
  static names(): { [key: string]: string } {
    return {
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
      connectorId: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      switchStatus: 'string',
      upgradeTime: GetConnectorResponseBodyConnectorUpgradeTime,
      vipCidr: 'string',
    };
  }

  validate() {
    if(this.upgradeTime && typeof (this.upgradeTime as any).validate === 'function') {
      (this.upgradeTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connector.
   */
  connector?: GetConnectorResponseBodyConnector;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connector: 'Connector',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connector: GetConnectorResponseBodyConnector,
      requestId: 'string',
    };
  }

  validate() {
    if(this.connector && typeof (this.connector as any).validate === 'function') {
      (this.connector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

