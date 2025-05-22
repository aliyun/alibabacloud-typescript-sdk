// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method of the DTS instance. Only **PREPAY** may be returned, which indicates the subscription billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * > This parameter will be removed in the future.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the data synchronization or change tracking task.
   * 
   * @example
   * qi0r643lc31****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the value of **ErrMessage**.
   * 
   * > If the return value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the return value of **DynamicMessage** is **DtsJobId**, the specified value of **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The time when the DTS instance expires after renewal. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ssZZZ* format. The time is displayed in UTC.
   * 
   * > **ZZZ** indicates the offset of the time zone, which is displayed in the format of a plus sign (+) or a minus sign (-) followed by hours and minutes, such as **+00:00**.
   * 
   * @example
   * 2021-08-04T16:00:00.000+00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
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
   * The ID of the instance
   * 
   * @example
   * dtsqi0r643lc31****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1112E255-0C38-4970-8159-1D54AD92****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      dtsJobId: 'DtsJobId',
      dynamicMessage: 'DynamicMessage',
      endTime: 'EndTime',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      dtsJobId: 'string',
      dynamicMessage: 'string',
      endTime: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

