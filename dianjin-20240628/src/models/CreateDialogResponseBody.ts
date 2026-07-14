// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The opening remarks.
   * 
   * @example
   * 你好，我是XX客服人员。
   */
  openingRemarks?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1728545917713234
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      openingRemarks: 'openingRemarks',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openingRemarks: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: CreateDialogResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 003D019A-1BB3-53EC-A0D2-CE76DA5D73B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2024-01-01 00:00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: CreateDialogResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

