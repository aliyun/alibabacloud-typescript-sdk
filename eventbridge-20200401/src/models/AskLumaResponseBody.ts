// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AskLumaResult } from "./AskLumaResult";


export class AskLumaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * AgentNotFound
   */
  code?: string;
  /**
   * @remarks
   * The response body.
   */
  data?: AskLumaResult;
  /**
   * @remarks
   * The error message. This value is null if the request is successful.
   * 
   * @example
   * Agent with name \\"xxx\\" not found for account 1186xxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97FB3BAE-XXXXXX-36435495B7EB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

