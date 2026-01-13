// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindInstance2VpcResponseBody extends $dara.Model {
  /**
   * @example
   * 18DD77BF-F967-576D-80D1-79121399AB53
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

