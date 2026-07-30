// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSiteBridgeInfoResponseBodyBridge extends $dara.Model {
  /**
   * @remarks
   * The access type of the management page.
   * 
   * @example
   * intranet
   */
  accessType?: string;
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * @example
   * vb-sofiahfish***
   */
  bridgeId?: string;
  /**
   * @remarks
   * The virtual bridge specifications.
   * 
   * @example
   * vb.pro
   */
  bridgeLevel?: string;
  /**
   * @remarks
   * The virtual bridge status.
   * 
   * @example
   * inuse
   */
  bridgeStatus?: string;
  /**
   * @remarks
   * The third-party plugin type of the virtual bridge.
   * 
   * @example
   * unsr
   */
  bridgeType?: string;
  /**
   * @remarks
   * The default password for the administrator page.
   * 
   * @example
   * password
   */
  defaultPassword?: string;
  /**
   * @remarks
   * The default account for the administrator page.
   * 
   * @example
   * user
   */
  defaultUser?: string;
  /**
   * @remarks
   * The deployment time of the virtual bridge.
   * 
   * @example
   * 2025-11-07T02:02:00Z
   */
  deployTime?: string;
  /**
   * @remarks
   * The expiration time of the virtual bridge.
   * 
   * @example
   * 2026-03-18T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The public network address.
   * 
   * @example
   * http://8.*.*.*:8080
   */
  internetUrl?: string;
  /**
   * @remarks
   * The internal network address.
   * 
   * @example
   * http://10.0.0.0:8080
   */
  intranetUrl?: string;
  /**
   * @remarks
   * The ID of the locked convenience office network.
   * 
   * @example
   * cn-beijing+dir-0211574032
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name. The name must be 2 to 255 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter or Chinese character and cannot start with `http://` or `https://`.
   * 
   * @example
   * P0801-1
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The start time of the virtual bridge.
   * 
   * @example
   * 2025-11-07T02:02:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      bridgeId: 'BridgeId',
      bridgeLevel: 'BridgeLevel',
      bridgeStatus: 'BridgeStatus',
      bridgeType: 'BridgeType',
      defaultPassword: 'DefaultPassword',
      defaultUser: 'DefaultUser',
      deployTime: 'DeployTime',
      expireTime: 'ExpireTime',
      internetUrl: 'InternetUrl',
      intranetUrl: 'IntranetUrl',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      bridgeId: 'string',
      bridgeLevel: 'string',
      bridgeStatus: 'string',
      bridgeType: 'string',
      defaultPassword: 'string',
      defaultUser: 'string',
      deployTime: 'string',
      expireTime: 'string',
      internetUrl: 'string',
      intranetUrl: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSiteBridgeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The virtual bridge information.
   */
  bridge?: DescribeOfficeSiteBridgeInfoResponseBodyBridge;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7E4322D-D679-5ACB-A909-490D2F0E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bridge: 'Bridge',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridge: DescribeOfficeSiteBridgeInfoResponseBodyBridge,
      requestId: 'string',
    };
  }

  validate() {
    if(this.bridge && typeof (this.bridge as any).validate === 'function') {
      (this.bridge as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

