// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrefixListRequestAddEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR block in entry N to be added to the prefix list. Valid values of N: 0 to 200.
   * 
   * Take note of the following items when you add the entries:
   * 
   * *   The total number of entries in the prefix list cannot exceed the maximum number of entries you specified for the prefix list. You can call the [DescribePrefixListAttributes](https://help.aliyun.com/document_detail/205872.html) operation to query the maximum number of entries that the prefix list can contain.
   * *   You cannot specify duplicate CIDR blocks.
   * *   The CIDR blocks cannot be the same as the `RemoveEntry.N.Cidr` values.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.2.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description in entry N. The description must be 2 to 32 characters in length and cannot start with `http://` or `https://`. Valid values of N: 0 to 200.
   * 
   * @example
   * Description Sample 01
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

