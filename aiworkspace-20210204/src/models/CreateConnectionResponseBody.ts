// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * conn-pai9m***mi47
   */
  connectionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'string',
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

