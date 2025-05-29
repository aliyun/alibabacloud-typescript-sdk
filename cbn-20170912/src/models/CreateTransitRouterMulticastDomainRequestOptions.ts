// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterMulticastDomainRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IGMP feature is enabled for the multicast domain. Once enabled, hosts can dynamically join or leave multicast groups by using IGMP protocol. Valid values:
   * 
   * *   **enable**: enables IGMP.
   * *   **disable**(default): disables IGMP.
   * 
   * > *   The IGMP feature is in beta testing. To use it, contact your account manager.
   * > *   If you select this option, you cannot disable IPv6 after the VBR is created.
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

