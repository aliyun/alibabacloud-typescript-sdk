// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is empty if the operation is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * None
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the operation is successful.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9531C132-DF05-5C7F-8BB0-96EA8C4D00D7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
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

