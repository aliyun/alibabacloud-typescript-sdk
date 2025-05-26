// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBindRamUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FB9DCA3-DA56-5B43-A9A0-68E3D0E6AA84
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result of the request. Valid values:
   * 
   * *   **true**: the database account is associated with a RAM user.
   * *   **false**: the database account is not associated with a RAM user.
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

