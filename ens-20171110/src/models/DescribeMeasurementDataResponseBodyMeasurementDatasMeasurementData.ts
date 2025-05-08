// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas } from "./DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas";
import { DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData } from "./DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData";
import { DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails } from "./DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails";


export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData extends $dara.Model {
  /**
   * @remarks
   * The bandwidth data returned.
   */
  bandWidthFeeDatas?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas;
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
  /**
   * @remarks
   * The information about computing resources.
   */
  resourceFeeData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData;
  /**
   * @remarks
   * Details of the computing resources.
   */
  resourceFeeDataDetails?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails;
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeDatas: 'BandWidthFeeDatas',
      chargeModel: 'ChargeModel',
      costCycle: 'CostCycle',
      costEndTime: 'CostEndTime',
      costStartTime: 'CostStartTime',
      resourceFeeData: 'ResourceFeeData',
      resourceFeeDataDetails: 'ResourceFeeDataDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeDatas: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas,
      chargeModel: 'string',
      costCycle: 'string',
      costEndTime: 'string',
      costStartTime: 'string',
      resourceFeeData: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData,
      resourceFeeDataDetails: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails,
    };
  }

  validate() {
    if(this.bandWidthFeeDatas && typeof (this.bandWidthFeeDatas as any).validate === 'function') {
      (this.bandWidthFeeDatas as any).validate();
    }
    if(this.resourceFeeData && typeof (this.resourceFeeData as any).validate === 'function') {
      (this.resourceFeeData as any).validate();
    }
    if(this.resourceFeeDataDetails && typeof (this.resourceFeeDataDetails as any).validate === 'function') {
      (this.resourceFeeDataDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

