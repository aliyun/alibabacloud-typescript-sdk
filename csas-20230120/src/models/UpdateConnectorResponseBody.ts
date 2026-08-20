// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectorResponseBodyConnectorUpgradeTime extends $dara.Model {
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

export class UpdateConnectorResponseBodyConnector extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Global Accelerator. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  accelerateStatus?: string;
  /**
   * @remarks
   * ConnectorID。
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @remarks
   * The creation time of the Connector.
   * 
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  /**
   * @remarks
   * The Connector name.
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
   * The connection status of the Connector. Valid values:
   * - **Online**: Online.
   * - **Offline**: Offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The instance status of the Connector. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Shutdown.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * The upgrade time of the Connector.
   */
  upgradeTime?: UpdateConnectorResponseBodyConnectorUpgradeTime;
  /**
   * @remarks
   * The virtual IP address.
   * 
   * @example
   * 10.0.0.0/24
   */
  vipCidr?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateStatus: 'AccelerateStatus',
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
      connectorId: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      switchStatus: 'string',
      upgradeTime: UpdateConnectorResponseBodyConnectorUpgradeTime,
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

export class UpdateConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * Connector。
   */
  connector?: UpdateConnectorResponseBodyConnector;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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
      connector: UpdateConnectorResponseBodyConnector,
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

