// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IGMP feature is enabled for the multicast domain.
   * 
   * @example
   * enable
   */
  igmpv2Support?: string;
  static names(): { [key: string]: string } {
    return {
      igmpv2Support: 'Igmpv2Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      igmpv2Support: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

