// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSnatIpForSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * snat-5xkzf89dndkzh8yg9stzqz9m4
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The EIP in the SNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 219.152.XX.XX
   */
  snatIp?: string;
  static names(): { [key: string]: string } {
    return {
      snatEntryId: 'SnatEntryId',
      snatIp: 'SnatIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntryId: 'string',
      snatIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

