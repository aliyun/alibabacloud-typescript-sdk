// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFundAccountTransferResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1BB79-5B23-3EA-BB4F-352F93E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: 'any',
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

