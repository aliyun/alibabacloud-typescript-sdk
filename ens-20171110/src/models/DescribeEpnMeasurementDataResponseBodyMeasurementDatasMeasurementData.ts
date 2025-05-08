// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas } from "./DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas";


export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth data returned.
   */
  bandWidthFeeDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas;
  /**
   * @remarks
   * The metering method. Valid values:
   * 
   * *   ChargeByUnified: unified metering.
   * *   ChargeByGrade: differential metering.
   * 
   * @example
   * ChargeByGrade
   */
  chargeModel?: string;
  /**
   * @remarks
   * The metering cycle.
   * 
   * @example
   * 2019-07-30
   */
  costCycle?: string;
  /**
   * @remarks
   * The end time of the metering cycle.
   * 
   * @example
   * 2019-07-30T16:00:00Z
   */
  costEndTime?: string;
  /**
   * @remarks
   * The start time of the metering cycle.
   * 
   * @example
   * 2019-07-29T16:00:00Z
   */
  costStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costEndTime: 'CostEndTime',
      costStartTime: 'CostStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas,
      chargeModel: 'string',
      costCycle: 'string',
      costEndTime: 'string',
      costStartTime: 'string',
    };
  }

  validate() {
    if(this.bandWidthFeeDatas && typeof (this.bandWidthFeeDatas as any).validate === 'function') {
      (this.bandWidthFeeDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

