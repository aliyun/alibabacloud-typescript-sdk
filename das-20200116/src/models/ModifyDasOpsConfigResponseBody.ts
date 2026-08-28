// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDasOpsConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The payment method.
   * 
   * @example
   * prepay
   */
  chargeType?: string;
  /**
   * @remarks
   * The Alibaba Cloud Managed Services instance ID.
   * 
   * @example
   * pc-2zelo5v5u0678jx04
   */
  commodityInstanceId?: string;
  /**
   * @remarks
   * Indicates whether DAS Economy Edition is enabled.
   * 
   * @example
   * true
   */
  ecoEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud Managed Services feature is enabled (including DAS Economy Edition).
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether Alibaba Cloud Managed Services is enabled.
   */
  opsEnable?: boolean;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 285412912420536
   */
  orderId?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1672531200000
   */
  startTime?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * - **INIT**: Pending scheduling.
   * - **RUNNING**: Running.
   * - **FAILED**: Failed.
   * - **CANCELED**: Canceled.
   * - **COMPLETED**: Completed.
   * 
   * > When the task is in the **COMPLETED** state, you can view the task result.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityInstanceId: 'CommodityInstanceId',
      ecoEnable: 'EcoEnable',
      enable: 'Enable',
      endTime: 'EndTime',
      opsEnable: 'OpsEnable',
      orderId: 'OrderId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityInstanceId: 'string',
      ecoEnable: 'boolean',
      enable: 'boolean',
      endTime: 'number',
      opsEnable: 'boolean',
      orderId: 'number',
      startTime: 'number',
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

export class ModifyDasOpsConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * SqlLogConfig
   */
  data?: ModifyDasOpsConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
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
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyDasOpsConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

