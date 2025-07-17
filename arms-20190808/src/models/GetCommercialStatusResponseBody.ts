// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommercialStatusResponseBodyUserAndCommodityStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you are using the Basic Edition.
   * 
   * @example
   * false
   */
  basic?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * usage
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether the service is activated.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * info
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The number of days during which the service is free of charge.
   * 
   * @example
   * 10
   */
  freeDays?: number;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * NEW
   */
  lable?: string;
  /**
   * @remarks
   * The commercialization status.
   * 
   * Valid values:
   * 
   * *   Normal: The service is activated.
   * *   Abnormal: An exception occurs during activation.
   * *   Free: The service is not activated.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      basic: 'Basic',
      chargeType: 'ChargeType',
      enable: 'Enable',
      extraInfo: 'ExtraInfo',
      freeDays: 'FreeDays',
      lable: 'Lable',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basic: 'boolean',
      chargeType: 'string',
      enable: 'boolean',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      freeDays: 'number',
      lable: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommercialStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49C82193-E991-5F6A-AF3E-1664D8D05CA3
   */
  requestId?: string;
  /**
   * @remarks
   * The commercialization status of the service.
   */
  userAndCommodityStatus?: GetCommercialStatusResponseBodyUserAndCommodityStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userAndCommodityStatus: 'UserAndCommodityStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userAndCommodityStatus: GetCommercialStatusResponseBodyUserAndCommodityStatus,
    };
  }

  validate() {
    if(this.userAndCommodityStatus && typeof (this.userAndCommodityStatus as any).validate === 'function') {
      (this.userAndCommodityStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

