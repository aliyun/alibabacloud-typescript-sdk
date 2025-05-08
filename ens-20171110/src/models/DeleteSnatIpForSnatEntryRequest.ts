// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnatIpForSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * snat-5tfi6f8gds82mjmlofeym****
   */
  snatEntryId?: string;
  /**
   * @remarks
   * The EIP that you want to delete from the SNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 120.72.56.71
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

