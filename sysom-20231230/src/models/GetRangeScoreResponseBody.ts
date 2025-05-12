// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRangeScoreResponseBodyData } from "./GetRangeScoreResponseBodyData";


export class GetRangeScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * Success
   */
  code?: string;
  data?: GetRangeScoreResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 2
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
      data: { 'type': 'array', 'itemType': GetRangeScoreResponseBodyData },
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

