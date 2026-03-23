// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApRadioConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bcastRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  beaconInt?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disabled?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  frag?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  htmode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hwmode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mcastRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mgmtRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  minrate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  noscan?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  probereq?: string;
  requireMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rts?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  shortgi?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  txpower?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uapsd?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      bcastRate: 'BcastRate',
      beaconInt: 'BeaconInt',
      channel: 'Channel',
      disabled: 'Disabled',
      frag: 'Frag',
      htmode: 'Htmode',
      hwmode: 'Hwmode',
      id: 'Id',
      mcastRate: 'McastRate',
      mgmtRate: 'MgmtRate',
      minrate: 'Minrate',
      noscan: 'Noscan',
      probereq: 'Probereq',
      requireMode: 'RequireMode',
      rts: 'Rts',
      shortgi: 'Shortgi',
      txpower: 'Txpower',
      uapsd: 'Uapsd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      bcastRate: 'number',
      beaconInt: 'number',
      channel: 'string',
      disabled: 'string',
      frag: 'number',
      htmode: 'string',
      hwmode: 'string',
      id: 'number',
      mcastRate: 'number',
      mgmtRate: 'number',
      minrate: 'number',
      noscan: 'string',
      probereq: 'string',
      requireMode: 'string',
      rts: 'number',
      shortgi: 'string',
      txpower: 'string',
      uapsd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

