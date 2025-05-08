// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnatAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * snat-5tc08qfj5ecblfdn2rqr9****
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

