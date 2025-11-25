// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSdlProtectedAssetResponseBody extends $dara.Model {
  /**
   * @example
   * F93A490D-9E92-5AA4-BA79-600FFC09****
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

