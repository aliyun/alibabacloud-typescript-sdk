// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockUnbindResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. It is a unique identifier that Alibaba Cloud generates for the request. You can use it to troubleshoot issues.
   * 
   * @example
   * F0A8A039-930D-5EC1-97C8-43F05776188A
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

