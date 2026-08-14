// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferPayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method after conversion. Valid values:
   * - **PrePaid**: subscription.
   * - **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The error code. This parameter will be deprecated.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * o4nh3g7jg56****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** variable in the **ErrMessage** parameter.
   * > For example, if **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The time when the subscription instance expires, in UNIX timestamp format.
   * > - If the instance is converted to pay-as-you-go, this value is empty.
   * - You can use a search engine to find a UNIX timestamp conversion tool.
   * 
   * @example
   * 1614916318
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
   * The Value of Input Parameter %s is not valid.
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
   * dtso4nh3g7jg56****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 601B6F25-21E7-4484-99D5-3EF2625C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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

