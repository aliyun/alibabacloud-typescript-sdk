// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients extends $dara.Model {
  /**
   * @remarks
   * The bonding of network interface card.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 74.73.100.1
   */
  IP?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-20p36bqet39
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * prod-gf-cn.juequling.com
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

