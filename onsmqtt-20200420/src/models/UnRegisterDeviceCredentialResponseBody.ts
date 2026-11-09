// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnRegisterDeviceCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID that the system generates for the request. This parameter is a common parameter.
   * 
   * @example
   * E4581CCD-62AF-44D9-B5B4-D1DBDC0E****
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

