// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserSuppressionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1A846D66-5EC7-551B-9687-5BF1963DCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * Invalid address number
   * 
   * @example
   * 59511
   */
  suppressionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suppressionId: 'SuppressionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suppressionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

