// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandWithdChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the metering method.
   * 
   * @example
   * { "BandWidthName": "Monthly peak bandwidth of 95", 			"BandWidthType": "95BandwidthByMonth" 		}
   */
  bandWithTypeInfo?: string;
  /**
   * @remarks
   * The metering type.
   * 
   * *   ChargeByUnified: unified metering.
   * *   ChargeByGrade: differential metering.
   * 
   * @example
   * ChargeByGrade
   */
  chargeContractType?: string;
  /**
   * @remarks
   * The metering cycle. Currently, this parameter is empty in the response.
   * 
   * @example
   * {null}
   */
  chargeCycleInfo?: string;
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 791049FD-49CE-4667-BD6C-F23094DEDA7A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandWithTypeInfo: 'BandWithTypeInfo',
      chargeContractType: 'ChargeContractType',
      chargeCycleInfo: 'ChargeCycleInfo',
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWithTypeInfo: 'string',
      chargeContractType: 'string',
      chargeCycleInfo: 'string',
      code: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

