// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomLineRequest extends $dara.Model {
  dnsCategory?: string;
  /**
   * @remarks
   * An array of IPv4 address ranges for the custom line. Specify each range in the `StartIP-EndIP` format.
   * 
   * This parameter is required.
   */
  ipv4s?: string[];
  /**
   * @remarks
   * The language of the response. Valid values: `en` and `zh`. Default value: `en`.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * This parameter is required.
   * 
   * @example
   * 100003
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   * 
   * @example
   * Test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dnsCategory: 'DnsCategory',
      ipv4s: 'Ipv4s',
      lang: 'Lang',
      lineId: 'LineId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsCategory: 'string',
      ipv4s: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      lineId: 'string',
      name: 'string',
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

