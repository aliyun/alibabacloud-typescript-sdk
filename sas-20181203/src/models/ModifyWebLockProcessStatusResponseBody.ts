// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockProcessStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 6A540B52-2441-5493-902B-37376C412776
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

