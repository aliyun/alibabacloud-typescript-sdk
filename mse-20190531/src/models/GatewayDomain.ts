// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayDomain extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate in use.
   * 
   * @example
   * 595xx36-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * test
   */
  gatewayName?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c9bc5afd61014165bd58f621b491****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the gateway was created.
   * 
   * @example
   * 2022-07-31 10:16:46
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the gateway was modified.
   * 
   * @example
   * 2022-08-11 15:28:47
   */
  gmtModified?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 36
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether HTTPS is forcibly used.
   * 
   * @example
   * true
   */
  mustHttps?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * test.com
   */
  name?: string;
  /**
   * @remarks
   * The domain protocol.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mustHttps: 'MustHttps',
      name: 'Name',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      gatewayId: 'number',
      gatewayName: 'string',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mustHttps: 'string',
      name: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

