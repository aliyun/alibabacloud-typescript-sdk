// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SNAT entry that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * snat-5tfi6f8gds82mjmlofeym****
   */
  snatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      snatEntryId: 'SnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

