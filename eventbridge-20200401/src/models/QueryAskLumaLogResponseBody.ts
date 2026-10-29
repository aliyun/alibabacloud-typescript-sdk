// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAskLumaLogResult } from "./QueryAskLumaLogResult";


export class QueryAskLumaLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the API operation:
   * 
   * 200: The call is successful.    
   * 
   * Other values: An error code. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: QueryAskLumaLogResult;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * AgentNotFound
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6FB52207-7621-5292-BDF2-A17E2E984160
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAskLumaLogResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

