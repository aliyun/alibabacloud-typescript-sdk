// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnsAssociationResponseBody extends $dara.Model {
  /**
   * @example
   * 0x123456789012345678901234567890123456****
   */
  address?: string;
  /**
   * @example
   * 3ECD5439-39A2-477D-9A19-64FCA1F77EEB
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

