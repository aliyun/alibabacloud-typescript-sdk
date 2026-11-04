// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IPConfig extends $dara.Model {
  /**
   * @remarks
   * The description of the IP rule. The description can be up to 128 characters in length.
   * 
   * @example
   * Office network egress address
   */
  description?: string;
  /**
   * @remarks
   * The IPv4 address or CIDR block. IPv6 is not supported.
   * 
   * @example
   * 203.0.113.25/32
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      ipAddress: 'ipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

