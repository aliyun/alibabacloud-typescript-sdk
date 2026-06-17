// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserIPSWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic direction for the Internet Border.
   * 
   * @example
   * 1
   */
  direction?: number;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The type of address in the Internet Border whitelist.
   * 
   * @example
   * 2
   */
  listType?: number;
  /**
   * @remarks
   * The value of the Internet Border whitelist.
   * 
   * - If ListType is set to `Custom`: the name of the address book.
   * 
   * - If ListType is set to `Address book`: the IPv4 address.
   * 
   * @example
   * 115.236.36.114/32
   */
  listValue?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of source or destination for which the Internet Border whitelist takes effect.
   * 
   * @example
   * 2
   */
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      ipVersion: 'IpVersion',
      lang: 'Lang',
      listType: 'ListType',
      listValue: 'ListValue',
      sourceIp: 'SourceIp',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      ipVersion: 'string',
      lang: 'string',
      listType: 'number',
      listValue: 'string',
      sourceIp: 'string',
      whiteType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

