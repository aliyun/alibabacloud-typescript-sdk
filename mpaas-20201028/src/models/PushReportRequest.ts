// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  appVersion?: string;
  channel?: string;
  connectType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryToken?: string;
  imei?: string;
  imsi?: string;
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  osType?: number;
  pushVersion?: string;
  tenantId?: string;
  thirdChannel?: number;
  thirdChannelDeviceToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      channel: 'Channel',
      connectType: 'ConnectType',
      deliveryToken: 'DeliveryToken',
      imei: 'Imei',
      imsi: 'Imsi',
      model: 'Model',
      osType: 'OsType',
      pushVersion: 'PushVersion',
      tenantId: 'TenantId',
      thirdChannel: 'ThirdChannel',
      thirdChannelDeviceToken: 'ThirdChannelDeviceToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      channel: 'string',
      connectType: 'string',
      deliveryToken: 'string',
      imei: 'string',
      imsi: 'string',
      model: 'string',
      osType: 'number',
      pushVersion: 'string',
      tenantId: 'string',
      thirdChannel: 'number',
      thirdChannelDeviceToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

