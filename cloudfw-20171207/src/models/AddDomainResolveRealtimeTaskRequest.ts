// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainResolveRealtimeTaskRequest extends $dara.Model {
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * internet
   */
  firewallType?: string;
  /**
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

