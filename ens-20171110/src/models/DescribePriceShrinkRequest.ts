// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceShrinkRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GB. If this field is not empty, it takes precedence.
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
   * The size of the system cloud disk. Unit: GB.
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
   * The data cloud disks. If DataDisk.1.Size is empty and this field is not empty, this field takes precedence.
   */
  dataDisksShrink?: string;
  /**
   * @remarks
   * The edge zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ens.sn1.tiny
   */
  instanceType?: string;
  /**
   * @remarks
   * The Billable methods for ENS bandwidth. Valid values:
   * 
   * - BandwidthByDay: daily peak bandwidth.
   * - 95BandwidthByMonth: monthly 95th percentile bandwidth.
   * - PayByBandwidth4thMonth: monthly fourth peak bandwidth.
   * - PayByBandwidth: bandwidth with defined specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The subscription duration of the resource.
   * 
   * - If PeriodUnit is not specified, the default billing cycle is month. Only Day and Month are supported.
   * - If PeriodUnit is set to Day, Period can only be set to 3.
   * - If PeriodUnit is set to Month, Period can be set to 1 to 9 or 12.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle for querying the prices of ENS resources. Valid values:
   * 
   * - Month (default): monthly billing cycle.
   * - Day: daily billing cycle.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The quantity.
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

