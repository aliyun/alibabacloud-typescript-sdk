// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnFullDomainsBlockIPConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address or CIDR block to query. Separate multiple values with commas (,). You can specify up to 50 IP addresses or CIDR blocks.
   * 
   * @example
   * 1.XXX.XXX.1,2.XXX.XXX.2
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

