// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApgroupSsidConfigRequest extends $dara.Model {
  acctPort?: number;
  acctSecret?: string;
  acctServer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  apgroupId?: string;
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
  authCache?: string;
  authPort?: number;
  authSecret?: string;
  authServer?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  binding?: string;
  cir?: number;
  daeClient?: string;
  daePort?: number;
  daeSecret?: string;
  disabled?: string;
  disassocLowAck?: string;
  disassocWeakRssi?: number;
  dynamicVlan?: number;
  effect?: boolean;
  encKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  encryption?: string;
  hidden?: string;
  id?: number;
  ieee80211w?: string;
  ignoreWeakProbe?: number;
  isolate?: string;
  liteEffect?: boolean;
  maxInactivity?: number;
  maxassoc?: string;
  multicastForward?: number;
  nasid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  network?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  newSsid?: string;
  ownip?: string;
  secondaryAcctPort?: number;
  secondaryAcctSecret?: string;
  secondaryAcctServer?: string;
  secondaryAuthPort?: number;
  secondaryAuthSecret?: string;
  secondaryAuthServer?: string;
  shortPreamble?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ssid?: string;
  ssidLb?: number;
  type?: number;
  vlanDhcp?: number;
  wmm?: string;
  static names(): { [key: string]: string } {
    return {
      acctPort: 'AcctPort',
      acctSecret: 'AcctSecret',
      acctServer: 'AcctServer',
      apgroupId: 'ApgroupId',
      appCode: 'AppCode',
      appName: 'AppName',
      authCache: 'AuthCache',
      authPort: 'AuthPort',
      authSecret: 'AuthSecret',
      authServer: 'AuthServer',
      binding: 'Binding',
      cir: 'Cir',
      daeClient: 'DaeClient',
      daePort: 'DaePort',
      daeSecret: 'DaeSecret',
      disabled: 'Disabled',
      disassocLowAck: 'DisassocLowAck',
      disassocWeakRssi: 'DisassocWeakRssi',
      dynamicVlan: 'DynamicVlan',
      effect: 'Effect',
      encKey: 'EncKey',
      encryption: 'Encryption',
      hidden: 'Hidden',
      id: 'Id',
      ieee80211w: 'Ieee80211w',
      ignoreWeakProbe: 'IgnoreWeakProbe',
      isolate: 'Isolate',
      liteEffect: 'LiteEffect',
      maxInactivity: 'MaxInactivity',
      maxassoc: 'Maxassoc',
      multicastForward: 'MulticastForward',
      nasid: 'Nasid',
      network: 'Network',
      newSsid: 'NewSsid',
      ownip: 'Ownip',
      secondaryAcctPort: 'SecondaryAcctPort',
      secondaryAcctSecret: 'SecondaryAcctSecret',
      secondaryAcctServer: 'SecondaryAcctServer',
      secondaryAuthPort: 'SecondaryAuthPort',
      secondaryAuthSecret: 'SecondaryAuthSecret',
      secondaryAuthServer: 'SecondaryAuthServer',
      shortPreamble: 'ShortPreamble',
      ssid: 'Ssid',
      ssidLb: 'SsidLb',
      type: 'Type',
      vlanDhcp: 'VlanDhcp',
      wmm: 'Wmm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acctPort: 'number',
      acctSecret: 'string',
      acctServer: 'string',
      apgroupId: 'string',
      appCode: 'string',
      appName: 'string',
      authCache: 'string',
      authPort: 'number',
      authSecret: 'string',
      authServer: 'string',
      binding: 'string',
      cir: 'number',
      daeClient: 'string',
      daePort: 'number',
      daeSecret: 'string',
      disabled: 'string',
      disassocLowAck: 'string',
      disassocWeakRssi: 'number',
      dynamicVlan: 'number',
      effect: 'boolean',
      encKey: 'string',
      encryption: 'string',
      hidden: 'string',
      id: 'number',
      ieee80211w: 'string',
      ignoreWeakProbe: 'number',
      isolate: 'string',
      liteEffect: 'boolean',
      maxInactivity: 'number',
      maxassoc: 'string',
      multicastForward: 'number',
      nasid: 'string',
      network: 'number',
      newSsid: 'string',
      ownip: 'string',
      secondaryAcctPort: 'number',
      secondaryAcctSecret: 'string',
      secondaryAcctServer: 'string',
      secondaryAuthPort: 'number',
      secondaryAuthSecret: 'string',
      secondaryAuthServer: 'string',
      shortPreamble: 'string',
      ssid: 'string',
      ssidLb: 'number',
      type: 'number',
      vlanDhcp: 'number',
      wmm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

