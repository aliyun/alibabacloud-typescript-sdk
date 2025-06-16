// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcPrefixListEntriesResponseBodyPrefixListEntry extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks specified in the prefix list.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the prefix list.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-0b7hwu67****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The region ID of the prefix list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      prefixListId: 'PrefixListId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      prefixListId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

