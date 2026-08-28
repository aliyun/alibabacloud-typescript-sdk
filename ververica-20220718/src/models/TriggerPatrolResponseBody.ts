// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerPatrolResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The generated report ID.
   * 
   * @example
   * inspection-cf8f8843-64e4-4b45-9500-06790107130f
   */
  reportId?: string;
  /**
   * @remarks
   * The report status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reportId: 'reportId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerPatrolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data of the triggered inspection.
   */
  data?: TriggerPatrolResponseBodyData;
  /**
   * @remarks
   * When success is false, this value is not empty and indicates the business error code. When success is true, this value is empty.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * When success is false, this value is not empty and indicates the business error message. When success is true, this value is empty.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code, which is uniformly 200. Use success to determine whether the business request is successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TriggerPatrolResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
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

