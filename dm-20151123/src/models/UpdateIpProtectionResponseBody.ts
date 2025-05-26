// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B653A6FC-D1AD-5936-A262-F50994ED2574
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

