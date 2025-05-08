// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $dara.Model {
  /**
   * @remarks
   * The code of the billable item.
   * 
   * @example
   * cn-cmcc-1
   */
  costCode?: string;
  /**
   * @remarks
   * The name of the billable item.
   * 
   * @example
   * Beijing, Shanghai, and Guangzhou Mobile
   */
  costName?: string;
  /**
   * @remarks
   * Metering method
   * 
   * *   SpeedUp: bandwidth of intelligent acceleration
   * *   IntranetConnection: internal bandwidth
   * 
   * @example
   * SpeedUp
   */
  costType?: string;
  /**
   * @remarks
   * The value of the billable item.
   * 
   * @example
   * 16486
   */
  costVal?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * This parameter is not currently in use.
   */
  ispLine?: string;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costType: 'CostType',
      costVal: 'CostVal',
      ispLine: 'IspLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costType: 'string',
      costVal: 'number',
      ispLine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

