// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHealthPercentageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Health level of the edge zone/pod
   * 
   * @example
   * health
   */
  type?: string;
  /**
   * @remarks
   * Quantity
   * 
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code  
   * - `code == Success` indicates that authorization succeeded.  
   * - Other status codes indicate that authorization failed. When authorization fails, view the `message` field to obtain detailed error information.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetHealthPercentageResponseBodyData[];
  /**
   * @remarks
   * Error Details
   * 
   * @example
   * ""
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetHealthPercentageResponseBodyData },
      message: 'string',
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

