// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsUserInfoResponseBodyUserInfo extends $dara.Model {
  /**
   * @remarks
   * The enabled secure access type. INSECURE indicates non-encrypted access. SECURE indicates encrypted access.
   * 
   * @example
   * SECURE
   */
  availableAccessSecurityType?: string;
  /**
   * @remarks
   * The public recursive DNS services that are enabled.
   * 
   * @example
   * HTTP,HTTPS
   */
  availableService?: string;
  /**
   * @remarks
   * The ID of the dedicated configuration for public recursive DNS.
   * 
   * @example
   * 1***1
   */
  pdnsId?: number;
  /**
   * @remarks
   * The SecretKey for configuring the UDP access IP address segment.
   * 
   * @example
   * 1c09*******
   */
  secretKey?: string;
  /**
   * @remarks
   * The type of the public recursive DNS service.
   * 
   * @example
   * normal
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the public recursive DNS service.
   * 
   * @example
   * AVAILABLE
   */
  state?: string;
  /**
   * @remarks
   * The status of the switch for public recursive DNS traffic analysis.
   * 
   * @example
   * CLOSED
   */
  statisticSwitchStatus?: string;
  /**
   * @remarks
   * The public recursive DNS services that are shut down.
   */
  stoppedService?: string;
  static names(): { [key: string]: string } {
    return {
      availableAccessSecurityType: 'AvailableAccessSecurityType',
      availableService: 'AvailableService',
      pdnsId: 'PdnsId',
      secretKey: 'SecretKey',
      serviceType: 'ServiceType',
      state: 'State',
      statisticSwitchStatus: 'StatisticSwitchStatus',
      stoppedService: 'StoppedService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAccessSecurityType: 'string',
      availableService: 'string',
      pdnsId: 'number',
      secretKey: 'string',
      serviceType: 'string',
      state: 'string',
      statisticSwitchStatus: 'string',
      stoppedService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePdnsUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * FD552816-FCC8-4832-B4A2-2DA0C2BA1688
   */
  requestId?: string;
  /**
   * @remarks
   * The user information.
   */
  userInfo?: DescribePdnsUserInfoResponseBodyUserInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userInfo: DescribePdnsUserInfoResponseBodyUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

