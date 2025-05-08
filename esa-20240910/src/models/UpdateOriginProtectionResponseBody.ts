// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginProtectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C6B5E5A-42FC-5DF2-986C-4DAAE3C55086
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

