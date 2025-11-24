// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateASMNamespaceFromGuestClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC6122-ACEC-183D-8451-8E0A1A******
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

