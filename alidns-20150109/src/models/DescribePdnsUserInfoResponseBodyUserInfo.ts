// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsUserInfoResponseBodyUserInfo extends $dara.Model {
  /**
   * @remarks
   * The enabled access security types.
   * 
   * @example
   * SECURE
   */
  availableAccessSecurityType?: string;
  /**
   * @remarks
   * The enabled public recursive DNS service.
   * 
   * @example
   * HTTP,HTTPS
   */
  availableService?: string;
  /**
   * @remarks
   * The configuration ID of the users in public recursive DNS.
   * 
   * @example
   * 10001
   */
  pdnsId?: number;
  /**
   * @remarks
   * The SecretKey configured for a UDP-based CIDR block.
   * 
   * @example
   * 1c092d715b7a48de
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
   * The status of the traffic analysis switch for the user in public recursive DNS service.
   * 
   * @example
   * CLOSED
   */
  statisticSwitchStatus?: string;
  /**
   * @remarks
   * The disabled public recursive DNS service.
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

