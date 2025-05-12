// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourcesResponseBodyData } from "./GetResourcesResponseBodyData";


export class GetResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetResourcesResponseBodyData;
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetResourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

