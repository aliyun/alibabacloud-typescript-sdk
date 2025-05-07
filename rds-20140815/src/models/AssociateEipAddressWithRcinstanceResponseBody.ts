// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEipAddressWithRCInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFFC7565-B3CF-5CFA-9E1F-164DD1E1F498
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

