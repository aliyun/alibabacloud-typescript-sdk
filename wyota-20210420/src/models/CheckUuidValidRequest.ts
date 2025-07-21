// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUuidValidRequest extends $dara.Model {
  bluetooth?: string;
  buildId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chipId?: string;
  clientId?: string;
  clientVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  customId?: string;
  etherMac?: string;
  hostOsInfo?: string;
  loginRegionId?: string;
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serialNo?: string;
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uuid?: string;
  wlan?: string;
  wosAppVersion?: string;
  static names(): { [key: string]: string } {
    return {
      bluetooth: 'Bluetooth',
      buildId: 'BuildId',
      chipId: 'ChipId',
      clientId: 'ClientId',
      clientVersion: 'ClientVersion',
      customId: 'CustomId',
      etherMac: 'EtherMac',
      hostOsInfo: 'HostOsInfo',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      serialNo: 'SerialNo',
      sessionId: 'SessionId',
      uuid: 'Uuid',
      wlan: 'Wlan',
      wosAppVersion: 'WosAppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bluetooth: 'string',
      buildId: 'string',
      chipId: 'string',
      clientId: 'string',
      clientVersion: 'string',
      customId: 'string',
      etherMac: 'string',
      hostOsInfo: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      serialNo: 'string',
      sessionId: 'string',
      uuid: 'string',
      wlan: 'string',
      wosAppVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

