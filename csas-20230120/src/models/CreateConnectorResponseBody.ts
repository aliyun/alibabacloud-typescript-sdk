// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectorResponseBodyConnectorUpgradeTime extends $dara.Model {
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

export class CreateConnectorResponseBodyConnector extends $dara.Model {
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
   * The connector creation time.
   * 
   * @example
   * 2023-05-16 17:18:46
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
   * The connector connection status. Valid values:
   * - **Online**: Online.
   * - **Offline**: Offline.
   * 
   * @example
   * Online
   */
  status?: string;
  /**
   * @remarks
   * The connector instance status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Shutdown.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  /**
   * @remarks
   * The connector upgrade time.
   */
  upgradeTime?: CreateConnectorResponseBodyConnectorUpgradeTime;
  static names(): { [key: string]: string } {
    return {
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
      connectorId: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      switchStatus: 'string',
      upgradeTime: CreateConnectorResponseBodyConnectorUpgradeTime,
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

export class CreateConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * Connector。
   */
  connector?: CreateConnectorResponseBodyConnector;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A1367BB2-A5D8-5E79-9403-2446757AC03C
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
      connector: CreateConnectorResponseBodyConnector,
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

