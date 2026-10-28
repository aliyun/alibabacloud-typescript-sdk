// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBindRamUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FB9DCA3-DA56-5B43-A9A0-68E3D0E6AA84
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned by the node. Valid values:
   * - **true**: The current Resource Access Management (RAM) user is attached to a database account.
   * - **false**: The current Resource Access Management (RAM) user is not attached to a database account.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

