// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainResolveRealtimeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the Cloud Firewall.
   * 
   * @example
   * internet
   */
  firewallType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      firewallType: 'FirewallType',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      firewallType: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

