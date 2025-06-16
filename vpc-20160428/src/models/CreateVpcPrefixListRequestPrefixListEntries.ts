// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcPrefixListRequestPrefixListEntries extends $dara.Model {
  /**
   * @remarks
   * The CIDR block specified in the prefix list.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the CIDR block specified in the prefix list.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * CIDR
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

