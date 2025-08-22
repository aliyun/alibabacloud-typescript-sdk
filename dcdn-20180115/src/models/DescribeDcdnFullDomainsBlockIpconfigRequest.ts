// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnFullDomainsBlockIPConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address or CIDR block to query. Separate multiple values with commas (,). You can specify up to 50 IP addresses or CIDR blocks.
   * 
   * @example
   * 10.XX.XX.10/24
   */
  IPList?: string;
  static names(): { [key: string]: string } {
    return {
      IPList: 'IPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

