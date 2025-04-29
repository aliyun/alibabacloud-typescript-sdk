// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryUsageStatisticsByTagIdResponseBodyData } from "./QueryUsageStatisticsByTagIdResponseBodyData";


export class QueryUsageStatisticsByTagIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. **OK** indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryUsageStatisticsByTagIdResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D45CC751-34DF-5797-81FB-9A2ED6DC024B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * *   true
   * *   false
   * 
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
      data: { 'type': 'array', 'itemType': QueryUsageStatisticsByTagIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

