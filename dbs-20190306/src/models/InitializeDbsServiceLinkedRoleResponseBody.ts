// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeDbsServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value is null.
   * 
   * @example
   * null
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * EntityAlreadyExists.Role : The role already exists:AliyunServiceRoleForDBS\\r\\nRequestId : 73******-3B4D-501A-9505-FA8B9******
   */
  errMessage?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * EntityAlreadyExists.Role
   */
  errorCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F1888AC-1138-4995-B9FE-D2734F61C058
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
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errMessage: 'ErrMessage',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errMessage: 'string',
      errorCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

