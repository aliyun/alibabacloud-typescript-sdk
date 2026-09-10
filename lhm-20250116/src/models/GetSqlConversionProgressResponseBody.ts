// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlConversionProgressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of failed scripts.
   * 
   * @example
   * 0
   */
  fail?: number;
  /**
   * @remarks
   * The number of completed scripts.
   * 
   * @example
   * 8
   */
  finish?: number;
  /**
   * @remarks
   * The completion percentage.
   * 
   * @example
   * 66.67
   */
  percent?: number;
  /**
   * @remarks
   * The number of scripts being converted.
   * 
   * @example
   * 4
   */
  running?: number;
  /**
   * @remarks
   * The total number of scripts.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      fail: 'fail',
      finish: 'finish',
      percent: 'percent',
      running: 'running',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fail: 'number',
      finish: 'number',
      percent: 'number',
      running: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlConversionProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data body returned by the operation. For the field structure, see the child field descriptions.
   */
  data?: GetSqlConversionProgressResponseBodyData;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues with this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed. Check errCode and errMessage for troubleshooting.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSqlConversionProgressResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
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

