// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserSuppressionResponseBody extends $dara.Model {
  /**
   * @example
   * 1A846D66-5EC7-551B-9687-5BF1963DCFC1
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

