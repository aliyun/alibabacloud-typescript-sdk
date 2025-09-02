// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMeasureDataResponseBodyMeasureDatas extends $dara.Model {
  /**
   * @remarks
   * The measurement component.
   * 
   * @example
   * Count
   */
  componentCode?: string;
  /**
   * @remarks
   * The item that is measured.
   * 
   * @example
   * DideAlarmPhone
   */
  domainCode?: string;
  /**
   * @remarks
   * The end timestamp of the measurement period, in milliseconds.
   * 
   * @example
   * 1717430400000
   */
  endTime?: number;
  /**
   * @remarks
   * The start timestamp of the measurement period, in milliseconds.
   * 
   * @example
   * 1717344000000
   */
  startTime?: number;
  /**
   * @remarks
   * The total quantity used within the measurement period.
   * 
   * @example
   * 10
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'ComponentCode',
      domainCode: 'DomainCode',
      endTime: 'EndTime',
      startTime: 'StartTime',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      domainCode: 'string',
      endTime: 'number',
      startTime: 'number',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMeasureDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 100001001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The user is not in tenant.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The measurement results.
   */
  measureDatas?: ListMeasureDataResponseBodyMeasureDatas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      measureDatas: 'MeasureDatas',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      measureDatas: { 'type': 'array', 'itemType': ListMeasureDataResponseBodyMeasureDatas },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.measureDatas)) {
      $dara.Model.validateArray(this.measureDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

