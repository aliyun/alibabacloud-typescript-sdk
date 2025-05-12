// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAgentResponseBodyData } from "./GetAgentResponseBodyData";


export class GetAgentResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAgentResponseBodyData;
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
      data: GetAgentResponseBodyData,
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

