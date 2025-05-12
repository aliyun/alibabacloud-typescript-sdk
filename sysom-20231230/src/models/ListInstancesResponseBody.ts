// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyData } from "./ListInstancesResponseBodyData";


export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: ListInstancesResponseBodyData[];
  /**
   * @example
   * Requests for llm service failed
   */
  message?: string;
  /**
   * @example
   * 9515E5A0-8905-59B0-9BBF-5F0BE568C3A0
   */
  requestId?: string;
  /**
   * @example
   * 623
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

