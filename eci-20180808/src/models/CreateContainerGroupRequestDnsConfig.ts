// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestDnsConfigOption } from "./CreateContainerGroupRequestDnsConfigOption";


export class CreateContainerGroupRequestDnsConfig extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of DNS servers.
   * 
   * @example
   * 172.10.*.**
   */
  nameServer?: string[];
  /**
   * @remarks
   * Configuration options of the DNS server.
   */
  option?: CreateContainerGroupRequestDnsConfigOption[];
  /**
   * @remarks
   * The search domains of DNS servers.
   * 
   * @example
   * svc.local.kubenetes
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
      option: { 'type': 'array', 'itemType': CreateContainerGroupRequestDnsConfigOption },
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

