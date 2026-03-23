// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApBasicConfigRequest extends $dara.Model {
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
  country?: string;
  dai?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  echoInt?: number;
  failover?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  insecureAllowed?: number;
  lanIp?: string;
  lanMask?: string;
  lanStatus?: number;
  logIp?: string;
  logLevel?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  passwd?: string;
  protocol?: string;
  route?: string;
  scan?: number;
  tokenServer?: string;
  vpn?: string;
  workMode?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appName: 'AppName',
      country: 'Country',
      dai: 'Dai',
      description: 'Description',
      echoInt: 'EchoInt',
      failover: 'Failover',
      id: 'Id',
      insecureAllowed: 'InsecureAllowed',
      lanIp: 'LanIp',
      lanMask: 'LanMask',
      lanStatus: 'LanStatus',
      logIp: 'LogIp',
      logLevel: 'LogLevel',
      name: 'Name',
      passwd: 'Passwd',
      protocol: 'Protocol',
      route: 'Route',
      scan: 'Scan',
      tokenServer: 'TokenServer',
      vpn: 'Vpn',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appName: 'string',
      country: 'string',
      dai: 'string',
      description: 'string',
      echoInt: 'number',
      failover: 'number',
      id: 'number',
      insecureAllowed: 'number',
      lanIp: 'string',
      lanMask: 'string',
      lanStatus: 'number',
      logIp: 'string',
      logLevel: 'number',
      name: 'string',
      passwd: 'string',
      protocol: 'string',
      route: 'string',
      scan: 'number',
      tokenServer: 'string',
      vpn: 'string',
      workMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

