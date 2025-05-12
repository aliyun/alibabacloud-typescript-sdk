// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesWithEcsInfoResponseBodyData } from "./ListInstancesWithEcsInfoResponseBodyData";


export class ListInstancesWithEcsInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListInstancesWithEcsInfoResponseBodyData[];
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 319
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
      data: { 'type': 'array', 'itemType': ListInstancesWithEcsInfoResponseBodyData },
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

