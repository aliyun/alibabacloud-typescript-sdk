// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrefixListRequestRemoveEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR block in entry N to be deleted from the prefix list. Valid values of N: 0 to 200.
   * 
   * Take note of the following items when you delete the entries:
   * 
   * *   You cannot specify duplicate CIDR blocks.
   * *   The CIDR blocks cannot be the same as the `AddEntry.N.Cidr` values.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

