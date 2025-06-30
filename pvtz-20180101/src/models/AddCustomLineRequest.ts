// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomLineRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * INTRANET
   */
  dnsCategory?: string;
  /**
   * @remarks
   * The IPv4 CIDR blocks.
   * 
   * This parameter is required.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the custom line.
   * 
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is not available. You can ignore it.
   * 
   * @example
   * GLOBAL
   */
  shareScope?: string;
  static names(): { [key: string]: string } {
    return {
      dnsCategory: 'DnsCategory',
      ipv4s: 'Ipv4s',
      lang: 'Lang',
      name: 'Name',
      shareScope: 'ShareScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsCategory: 'string',
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      name: 'string',
      shareScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4s)) {
      $dara.Model.validateArray(this.ipv4s);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

