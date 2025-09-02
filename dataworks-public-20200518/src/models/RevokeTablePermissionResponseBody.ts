// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTablePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the permissions are revoked.
   * 
   * @example
   * true
   */
  revokeSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      revokeSuccess: 'RevokeSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      revokeSuccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

