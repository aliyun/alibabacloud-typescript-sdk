// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSharedAccountPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * C68B41B4-A646-5680-8A33-67884E3823A8
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

