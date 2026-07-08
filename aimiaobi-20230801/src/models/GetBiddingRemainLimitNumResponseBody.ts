// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBiddingRemainLimitNumResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Remaining quantity
   * 
   * @example
   * 1
   */
  remainNum?: number;
  static names(): { [key: string]: string } {
    return {
      remainNum: 'RemainNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBiddingRemainLimitNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetBiddingRemainLimitNumResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Fault message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful: true for success, false for failure
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBiddingRemainLimitNumResponseBodyData,
      httpStatusCode: 'number',
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

