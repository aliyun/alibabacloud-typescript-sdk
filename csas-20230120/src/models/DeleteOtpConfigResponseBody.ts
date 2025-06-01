// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOtpConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 54A4055A-343D-583E-9EAC-D12231148A68
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

