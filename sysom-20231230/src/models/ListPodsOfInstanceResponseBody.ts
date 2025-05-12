// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPodsOfInstanceResponseBodyData } from "./ListPodsOfInstanceResponseBodyData";


export class ListPodsOfInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListPodsOfInstanceResponseBodyData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance not exists
   */
  message?: string;
  /**
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPodsOfInstanceResponseBodyData },
      message: 'string',
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

