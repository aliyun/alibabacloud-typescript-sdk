// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcPrefixListRequestAddPrefixListEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR block to be added to the prefix list.
   * 
   * >  If the CIDR block already exists in the prefix list, you can only modify the description of the CIDR block by setting the **AddPrefixListEntry.N.Description** parameter.
   * 
   * @example
   * 172.16.0.0/12
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the CIDR block to be added to the prefix list.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * newcidr
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

