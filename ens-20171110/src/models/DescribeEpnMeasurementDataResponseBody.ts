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

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $dara.Model {
  bandWidthFeeData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  validate() {
    if(Array.isArray(this.bandWidthFeeData)) {
      $dara.Model.validateArray(this.bandWidthFeeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeEpnMeasurementDataResponseBodyMeasurementDatas extends $dara.Model {
  measurementData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementData },
    };
  }

  validate() {
    if(Array.isArray(this.measurementData)) {
      $dara.Model.validateArray(this.measurementData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEpnMeasurementDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metering data returned.
   */
  measurementDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatas;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6328C33-6304-5291-8641-0A00A99D0DD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measurementDatas: 'MeasurementDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.measurementDatas && typeof (this.measurementDatas as any).validate === 'function') {
      (this.measurementDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

