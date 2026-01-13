// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCDiskAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
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

