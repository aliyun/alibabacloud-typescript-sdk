// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the data disk. Unit: GB. If you specify this parameter, this parameter takes precedence over the Size property in DataDisks.
   * 
   * @example
   * 50
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceShrinkRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceShrinkRequest extends $dara.Model {
  dataDisk?: DescribePriceShrinkRequestDataDisk[];
  systemDisk?: DescribePriceShrinkRequestSystemDisk;
  /**
   * @remarks
   * If you leave DataDisk.1.Size empty, the value that you specified for this parameter is used.
   */
  dataDisksShrink?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The specifications of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ens.sn1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The bandwidth metering method of the instance. Valid values:
   * 
   * *   BandwidthByDay: Pay by daily peak bandwidth
   * *   95BandwidthByMonth: Pay by monthly 95th percentile bandwidth
   * *   PayByBandwidth4thMonth: Pay by monthly fourth peak bandwidth
   * *   PayByBandwidth: Pay by fixed bandwidth
   * 
   * This parameter is required.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   If you leave the PeriodUnit parameter empty, the instance is purchased on a monthly basis. Valid values: Day and Month.
   * *   If you set PeriodUnit to Day, you can set Period only to 3.
   * *   If you set PeriodUnit to Month, you can set Period to a number from 1 to 9, or set Period to 12.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle of the ENS instance. Valid values:
   * 
   * *   Month (default):
   * *   Day
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      systemDisk: 'SystemDisk',
      dataDisksShrink: 'DataDisks',
      ensRegionId: 'EnsRegionId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribePriceShrinkRequestDataDisk },
      systemDisk: DescribePriceShrinkRequestSystemDisk,
      dataDisksShrink: 'string',
      ensRegionId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      quantity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

