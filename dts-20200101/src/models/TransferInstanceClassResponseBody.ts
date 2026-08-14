// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferInstanceClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - **POSTPAY**: pay-as-you-go.
   * - **PREPAY**: subscription.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the data migration or data synchronization task.
   * 
   * @example
   * r4yr723m199****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the %**s** variable in the **ErrMessage** parameter.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * > This parameter is returned only when ChargeType is set to **PREPAY**.
   * 
   * @example
   * 2021-08-04T16:00:00.000+00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
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
   * dtsr4yr723m199****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 716DB03E-2D0B-4DC3-BC4C-F7A9EE21****
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

