// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRulesResponseBodyData } from "./ListRulesResponseBodyData";


export class ListRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The value Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ListRulesResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * Specified parameter Limit is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7043799-F4DA-5290-9249-97C359876D97
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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
      data: ListRulesResponseBodyData,
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

