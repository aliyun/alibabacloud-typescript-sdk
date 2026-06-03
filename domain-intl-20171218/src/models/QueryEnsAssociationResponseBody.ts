// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnsAssociationResponseBody extends $dara.Model {
  /**
   * @example
   * 0x0000000000000000000000000000000000000003
   */
  address?: string;
  /**
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
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

