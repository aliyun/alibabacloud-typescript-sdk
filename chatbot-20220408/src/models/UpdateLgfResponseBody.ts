// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLgfResponseBody extends $dara.Model {
  /**
   * @example
   * 2342556223532
   */
  lgfId?: number;
  /**
   * @example
   * 289dfa131adf23wqe2r
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lgfId: 'LgfId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfId: 'number',
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

