// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckStsTokenAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 185685871307****
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 898F7AA7-CECD-5EC7-AF4D-664C601B****
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

