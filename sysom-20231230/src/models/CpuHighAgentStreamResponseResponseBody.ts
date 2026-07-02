// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CpuHighAgentStreamResponseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If code is Success, the authorization is successful.
   * - Other status codes indicate authorization failed. Check the message field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * <SSEResponse>
   */
  data?: string;
  /**
   * @remarks
   * The error message.
   * - If code is Success, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

