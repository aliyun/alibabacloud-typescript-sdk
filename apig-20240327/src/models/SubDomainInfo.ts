// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubDomainInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name ID.
   * 
   * @example
   * d-cpudb0llhtgl2djvq2sg
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * abc.com
   */
  name?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * Valid values:
   * 
   * *   Intranet
   * *   Internet
   * 
   * @example
   * Intranet
   */
  networkType?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * Valid values:
   * 
   * *   HTTPS
   * *   HTTP
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
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

