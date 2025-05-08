// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSnatIpForSnatEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD1FFCC6-5E9E-5C31-A014-13D02737B0EA
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

