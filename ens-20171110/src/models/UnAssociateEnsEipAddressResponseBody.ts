// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssociateEnsEipAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A431388-2D4B-46F4-A96B-D4E6BD0688C1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

