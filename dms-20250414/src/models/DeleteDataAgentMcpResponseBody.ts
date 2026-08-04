// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataAgentMcpResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the deletion status is updated. A value of true indicates that at least one matching record has been logically deleted.
   * 
   * @example
   * true
   */
  data?: any;
  /**
   * @remarks
   * The return code. The value success is returned for a successful request. An error code is returned for a failed request.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when a system-level request failure occurs.
   * 
   * @example
   * Ready MCP Servers not found
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate this call.
   * 
   * @example
   * 550e84***44
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
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

