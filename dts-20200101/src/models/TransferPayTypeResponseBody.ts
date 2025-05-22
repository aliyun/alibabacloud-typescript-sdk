// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferPayTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing method of the DTS instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The error code. This parameter will be removed in the future.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the DTS task.
   * 
   * @example
   * o4nh3g7jg56****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * >  If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The expiration time of the subscription instance. The value is a UNIX timestamp.
   * 
   * > 
   * *   If the DTS instance is a pay-as-you-go instance, the value of this parameter is empty.
   * *   You can use a search engine to obtain a UNIX timestamp converter.
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
   * The ID of the DTS instance.
   * 
   * @example
   * dtso4nh3g7jg56****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 601B6F25-21E7-4484-99D5-3EF2625C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   **true**: The call was successful.
   * *   **false**: The call failed.
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

