// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApSsidConfigRequest extends $dara.Model {
  acctPort?: number;
  acctSecret?: string;
  acctServer?: string;
  acctStatusServerWork?: number;
  apAssetId?: number;
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
  arpProxyEnable?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  authCache?: string;
  authPort?: number;
  authSecret?: string;
  authServer?: string;
  authStatusServerWork?: number;
  cir?: number;
  cirStep?: number;
  cirType?: number;
  cirUl?: number;
  daeClient?: string;
  daePort?: number;
  daeSecret?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disabled?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disassocLowAck?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  disassocWeakRssi?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicVlan?: number;
  encKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  encryption?: string;
  fourthAuthPort?: number;
  fourthAuthSecret?: string;
  fourthAuthServer?: string;
  ftOverDs?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  hidden?: string;
  id?: number;
  ieee80211r?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ieee80211w?: string;
  ignoreWeakProbe?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  isolate?: string;
  liteEffect?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  mac?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maxInactivity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  maxassoc?: number;
  mobilityDomain?: string;
  multicastForward?: number;
  nasid?: string;
  ndProxyWork?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  network?: number;
  ownip?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  radioIndex?: string;
  secondaryAcctPort?: number;
  secondaryAcctSecret?: string;
  secondaryAcctServer?: string;
  secondaryAuthPort?: number;
  secondaryAuthSecret?: string;
  secondaryAuthServer?: string;
  sendConfigToAp?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  shortPreamble?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ssid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ssidLb?: number;
  thirdAuthPort?: number;
  thirdAuthSecret?: string;
  thirdAuthServer?: string;
  type?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  vlanDhcp?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  wmm?: string;
  static names(): { [key: string]: string } {
    return {
      acctPort: 'AcctPort',
      acctSecret: 'AcctSecret',
      acctServer: 'AcctServer',
      acctStatusServerWork: 'AcctStatusServerWork',
      apAssetId: 'ApAssetId',
      appCode: 'AppCode',
      appName: 'AppName',
      arpProxyEnable: 'ArpProxyEnable',
      authCache: 'AuthCache',
      authPort: 'AuthPort',
      authSecret: 'AuthSecret',
      authServer: 'AuthServer',
      authStatusServerWork: 'AuthStatusServerWork',
      cir: 'Cir',
      cirStep: 'CirStep',
      cirType: 'CirType',
      cirUl: 'CirUl',
      daeClient: 'DaeClient',
      daePort: 'DaePort',
      daeSecret: 'DaeSecret',
      disabled: 'Disabled',
      disassocLowAck: 'DisassocLowAck',
      disassocWeakRssi: 'DisassocWeakRssi',
      dynamicVlan: 'DynamicVlan',
      encKey: 'EncKey',
      encryption: 'Encryption',
      fourthAuthPort: 'FourthAuthPort',
      fourthAuthSecret: 'FourthAuthSecret',
      fourthAuthServer: 'FourthAuthServer',
      ftOverDs: 'FtOverDs',
      hidden: 'Hidden',
      id: 'Id',
      ieee80211r: 'Ieee80211r',
      ieee80211w: 'Ieee80211w',
      ignoreWeakProbe: 'IgnoreWeakProbe',
      isolate: 'Isolate',
      liteEffect: 'LiteEffect',
      mac: 'Mac',
      maxInactivity: 'MaxInactivity',
      maxassoc: 'Maxassoc',
      mobilityDomain: 'MobilityDomain',
      multicastForward: 'MulticastForward',
      nasid: 'Nasid',
      ndProxyWork: 'NdProxyWork',
      network: 'Network',
      ownip: 'Ownip',
      radioIndex: 'RadioIndex',
      secondaryAcctPort: 'SecondaryAcctPort',
      secondaryAcctSecret: 'SecondaryAcctSecret',
      secondaryAcctServer: 'SecondaryAcctServer',
      secondaryAuthPort: 'SecondaryAuthPort',
      secondaryAuthSecret: 'SecondaryAuthSecret',
      secondaryAuthServer: 'SecondaryAuthServer',
      sendConfigToAp: 'SendConfigToAp',
      shortPreamble: 'ShortPreamble',
      ssid: 'Ssid',
      ssidLb: 'SsidLb',
      thirdAuthPort: 'ThirdAuthPort',
      thirdAuthSecret: 'ThirdAuthSecret',
      thirdAuthServer: 'ThirdAuthServer',
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
      acctStatusServerWork: 'number',
      apAssetId: 'number',
      appCode: 'string',
      appName: 'string',
      arpProxyEnable: 'number',
      authCache: 'string',
      authPort: 'number',
      authSecret: 'string',
      authServer: 'string',
      authStatusServerWork: 'number',
      cir: 'number',
      cirStep: 'number',
      cirType: 'number',
      cirUl: 'number',
      daeClient: 'string',
      daePort: 'number',
      daeSecret: 'string',
      disabled: 'string',
      disassocLowAck: 'string',
      disassocWeakRssi: 'number',
      dynamicVlan: 'number',
      encKey: 'string',
      encryption: 'string',
      fourthAuthPort: 'number',
      fourthAuthSecret: 'string',
      fourthAuthServer: 'string',
      ftOverDs: 'number',
      hidden: 'string',
      id: 'number',
      ieee80211r: 'number',
      ieee80211w: 'string',
      ignoreWeakProbe: 'number',
      isolate: 'string',
      liteEffect: 'boolean',
      mac: 'string',
      maxInactivity: 'number',
      maxassoc: 'number',
      mobilityDomain: 'string',
      multicastForward: 'number',
      nasid: 'string',
      ndProxyWork: 'number',
      network: 'number',
      ownip: 'string',
      radioIndex: 'string',
      secondaryAcctPort: 'number',
      secondaryAcctSecret: 'string',
      secondaryAcctServer: 'string',
      secondaryAuthPort: 'number',
      secondaryAuthSecret: 'string',
      secondaryAuthServer: 'string',
      sendConfigToAp: 'boolean',
      shortPreamble: 'string',
      ssid: 'string',
      ssidLb: 'number',
      thirdAuthPort: 'number',
      thirdAuthSecret: 'string',
      thirdAuthServer: 'string',
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

