// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBagRemainingResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: number;
  /**
   * @example
   * 6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

