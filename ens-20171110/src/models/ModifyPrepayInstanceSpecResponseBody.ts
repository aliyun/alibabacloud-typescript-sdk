// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD94C8E8-128E-525C-A0C3-60E063B70330
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

