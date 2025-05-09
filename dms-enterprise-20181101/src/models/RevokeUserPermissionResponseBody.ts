// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeUserPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * MissingUserId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * UserId is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A99CD576-1E18-4E86-931E-C3CCE56D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

