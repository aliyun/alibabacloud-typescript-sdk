// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AskLumaResult } from "./AskLumaResult";


export class PollAskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * - Success: The request was successful.
   * - Other values: An error occurred. For more information, see error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: AskLumaResult;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * A995F07C-E503-XXXXXX-9CECA8566876
   */
  requestId?: string;
  /**
   * @remarks
   * Returns true if the operation is successful.
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
      data: AskLumaResult,
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

