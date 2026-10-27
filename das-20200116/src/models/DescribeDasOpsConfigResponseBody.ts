// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDasOpsConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * * **true**: Auto-renewal is enabled.
   * * **false** (default): Auto-renewal is disabled.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * http://prodpopscanGGfYbZif.302prod.xaliyun.com
   */
  chargeType?: string;
  /**
   * @remarks
   * The instance ID of Alibaba Cloud Managed Services.
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
   * false
   */
  ecoEnable?: boolean;
  /**
   * @remarks
   * Indicates whether Alibaba Cloud Managed Services is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The end time. The time is a UNIX timestamp in milliseconds.
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
   * 275772887390786
   */
  orderId?: number;
  /**
   * @remarks
   * The start time. The time is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1672531200000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      commodityInstanceId: 'CommodityInstanceId',
      ecoEnable: 'EcoEnable',
      enable: 'Enable',
      endTime: 'EndTime',
      opsEnable: 'OpsEnable',
      orderId: 'OrderId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      commodityInstanceId: 'string',
      ecoEnable: 'boolean',
      enable: 'boolean',
      endTime: 'number',
      opsEnable: 'boolean',
      orderId: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDasOpsConfigResponseBody extends $dara.Model {
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
  data?: DescribeDasOpsConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
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
   * D00DB161-FEF6-5428-B37A-8D29A4C2****
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
      data: DescribeDasOpsConfigResponseBodyData,
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

