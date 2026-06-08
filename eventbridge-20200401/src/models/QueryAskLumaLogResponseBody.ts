// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAskLumaLogResult } from "./QueryAskLumaLogResult";


export class QueryAskLumaLogResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: QueryAskLumaLogResult;
  /**
   * @example
   * AgentNotFound
   */
  message?: string;
  /**
   * @example
   * 6FB52207-7621-5292-BDF2-A17E2E984160
   */
  requestId?: string;
  /**
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

