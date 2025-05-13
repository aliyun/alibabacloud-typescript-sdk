// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 100600017
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * Owner not allowed to delete
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

