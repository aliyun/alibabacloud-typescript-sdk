// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestDnsConfigOption } from "./UpdateContainerGroupRequestDnsConfigOption";


export class UpdateContainerGroupRequestDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of DNS servers.
   * 
   * @example
   * 1.2.3.4
   */
  nameServer?: string[];
  /**
   * @remarks
   * The configurations of DNS.
   */
  option?: UpdateContainerGroupRequestDnsConfigOption[];
  /**
   * @remarks
   * The search domains of the Domain Name System (DNS) server.
   * 
   * @example
   * my.dns.search.suffix
   */
  search?: string[];
  static names(): { [key: string]: string } {
    return {
      nameServer: 'NameServer',
      option: 'Option',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServer: { 'type': 'array', 'itemType': 'string' },
      option: { 'type': 'array', 'itemType': UpdateContainerGroupRequestDnsConfigOption },
      search: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nameServer)) {
      $dara.Model.validateArray(this.nameServer);
    }
    if(Array.isArray(this.option)) {
      $dara.Model.validateArray(this.option);
    }
    if(Array.isArray(this.search)) {
      $dara.Model.validateArray(this.search);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

