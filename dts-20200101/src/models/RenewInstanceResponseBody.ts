// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method. Set the value to **PREPAY**, which indicates the subscription billing method.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * > This parameter will be deprecated.
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
   * The dynamic error message, which is used to replace the %**s** variable in the **ErrMessage** response parameter.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The time when the renewal instance expires. The time is displayed in the format of <i>yyyy-MM-dd</i>T<i>HH:mm:ssZZZ</i> (UTC).
   * 
   * > **ZZZ** indicates the full time zone offset ("+" or "-" followed by hours and minutes), for example, **+00:00**.
   * 
   * @example
   * 2021-08-04T16:00:00.000+00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
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
   * The instance ID.
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
   * - **true**: The request was successful.
   * - **false**: The request failed.
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

