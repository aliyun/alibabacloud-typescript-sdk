// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTargetsResponseBodyData } from "./ListTargetsResponseBodyData";


export class ListTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTargetsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventRuleNotExisted
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DAF96FB-A4B6-548C-B999-0BFDCB2261B9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
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
      data: ListTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

