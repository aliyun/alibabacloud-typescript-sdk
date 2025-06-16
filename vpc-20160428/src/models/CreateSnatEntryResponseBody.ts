// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnatEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD97C3
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the SNAT entry.
   * 
   * @example
   * snat-kmd6nv8fy****
   */
  snatEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snatEntryId: 'SnatEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

