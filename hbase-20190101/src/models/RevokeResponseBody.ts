// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeResponseBody extends $dara.Model {
  /**
   * @example
   * C9085433-A56A-4089-B49A-DF5A4E2B7B06
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

