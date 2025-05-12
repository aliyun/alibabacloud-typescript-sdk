// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListRecordResponseBodyData } from "./GetListRecordResponseBodyData";


export class GetListRecordResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetListRecordResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * 19
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetListRecordResponseBodyData },
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

