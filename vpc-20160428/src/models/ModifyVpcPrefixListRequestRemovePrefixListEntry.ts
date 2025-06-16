// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcPrefixListRequestRemovePrefixListEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR block that you want to delete from the prefix list.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the CIDR block that you want to delete.
   * 
   * @example
   * cidr
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

