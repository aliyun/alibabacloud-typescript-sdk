// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * - If `code == Success`, the authorization succeeded.
   * - Any other status code indicates that the authorization failed. In this case, check the `message` field for detailed error information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * This API returns no data.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Error message
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the error message.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
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

