// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData extends $dara.Model {
  /**
   * @remarks
   * The code of the bandwidth plan.
   * 
   * @example
   * cn-cmcc-1
   */
  costCode?: string;
  /**
   * @remarks
   * The name of the bandwidth plan.
   * 
   * @example
   * Beijing, Shanghai, and Guangzhou Mobile
   */
  costName?: string;
  /**
   * @remarks
   * The bandwidth consumption. Unit: bit/second.
   * 
   * @example
   * 16486
   */
  costVal?: number;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costVal: 'CostVal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costVal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $dara.Model {
  bandWidthFeeData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
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

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeData extends $dara.Model {
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 24
   */
  memory?: number;
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 12
   */
  vcpu?: number;
  static names(): { [key: string]: string } {
    return {
      memory: 'Memory',
      storage: 'Storage',
      vcpu: 'Vcpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'number',
      storage: 'number',
      vcpu: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail extends $dara.Model {
  /**
   * @remarks
   * The code of the resource.
   * 
   * @example
   * vCPU
   */
  costCode?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * vCPU
   */
  costName?: string;
  /**
   * @remarks
   * The consumption of the resource.
   * 
   * *   Memory unit: GB.
   * *   CPU unit: vCPU.
   * *   Storage unit: GB.
   * 
   * @example
   * 55
   */
  costVal?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * vCPU
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      costCode: 'CostCode',
      costName: 'CostName',
      costVal: 'CostVal',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCode: 'string',
      costName: 'string',
      costVal: 'number',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails extends $dara.Model {
  resourceFeeDataDetail?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail[];
  static names(): { [key: string]: string } {
    return {
      resourceFeeDataDetail: 'ResourceFeeDataDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceFeeDataDetail: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail },
    };
  }

  validate() {
    if(Array.isArray(this.resourceFeeDataDetail)) {
      $dara.Model.validateArray(this.resourceFeeDataDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeMeasurementDataResponseBodyMeasurementDatas extends $dara.Model {
  measurementData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData },
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

export class DescribeMeasurementDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metering data returned.
   */
  measurementDatas?: DescribeMeasurementDataResponseBodyMeasurementDatas;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
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
      measurementDatas: DescribeMeasurementDataResponseBodyMeasurementDatas,
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

