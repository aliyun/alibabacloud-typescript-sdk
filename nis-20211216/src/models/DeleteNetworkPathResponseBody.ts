// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result of operation.
   * 
   * - **true**: Delete Success.
   * - **false**: Delete Fail.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4331873-C534-590F-A905-F66C53B88A47
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
      data: 'boolean',
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

