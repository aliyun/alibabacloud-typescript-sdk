// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgreementStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 6BDB1964-A6E9-5946-89A4-523D35645BB6
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

