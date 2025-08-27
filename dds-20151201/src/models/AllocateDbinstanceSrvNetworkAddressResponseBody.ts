// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDBInstanceSrvNetworkAddressResponseBody extends $dara.Model {
  /**
   * @example
   * 6B82A9EF-9961-5A31-A19F-009B7098ACCA
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

