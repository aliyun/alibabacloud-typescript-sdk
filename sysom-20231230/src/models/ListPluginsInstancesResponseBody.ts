// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginsInstancesResponseBodyData } from "./ListPluginsInstancesResponseBodyData";


export class ListPluginsInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListPluginsInstancesResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 42
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
      data: { 'type': 'array', 'itemType': ListPluginsInstancesResponseBodyData },
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

