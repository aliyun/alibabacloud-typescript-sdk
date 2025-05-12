// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAgentTaskResponseBodyData } from "./GetAgentTaskResponseBodyData";


export class GetAgentTaskResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAgentTaskResponseBodyData;
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: GetAgentTaskResponseBodyData,
      message: 'string',
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

