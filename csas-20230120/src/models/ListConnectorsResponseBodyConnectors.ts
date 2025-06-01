// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListConnectorsResponseBodyConnectorsApplications } from "./ListConnectorsResponseBodyConnectorsApplications";
import { ListConnectorsResponseBodyConnectorsConnectorClients } from "./ListConnectorsResponseBodyConnectorsConnectorClients";
import { ListConnectorsResponseBodyConnectorsUpgradeTime } from "./ListConnectorsResponseBodyConnectorsUpgradeTime";


export class ListConnectorsResponseBodyConnectors extends $dara.Model {
  applications?: ListConnectorsResponseBodyConnectorsApplications[];
  connectorClients?: ListConnectorsResponseBodyConnectorsConnectorClients[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  /**
   * @example
   * Enabled
   */
  switchStatus?: string;
  upgradeTime?: ListConnectorsResponseBodyConnectorsUpgradeTime;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
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
      applications: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsApplications },
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

