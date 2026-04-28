// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";


export class AddressGroup extends $dara.Model {
  /**
   * @remarks
   * The information about the site.
   */
  addressDetail?: Address;
  /**
   * @remarks
   * The number of files in the site group.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The ID of the cover image of the site.
   */
  coverFileId?: string;
  /**
   * @remarks
   * The URL of the cover image of the site.
   */
  coverUrl?: string;
  /**
   * @remarks
   * The latitude and longitude of the site.
   * 
   * @example
   * 30.12231,120.1212
   */
  location?: string;
  /**
   * @remarks
   * The name of the site.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addressDetail: 'address_detail',
      count: 'count',
      coverFileId: 'cover_file_id',
      coverUrl: 'cover_url',
      location: 'location',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressDetail: Address,
      count: 'number',
      coverFileId: 'string',
      coverUrl: 'string',
      location: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.addressDetail && typeof (this.addressDetail as any).validate === 'function') {
      (this.addressDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

