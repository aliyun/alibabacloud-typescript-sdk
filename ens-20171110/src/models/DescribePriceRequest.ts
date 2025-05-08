// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePriceRequestDataDisk } from "./DescribePriceRequestDataDisk";
import { DescribePriceRequestSystemDisk } from "./DescribePriceRequestSystemDisk";
import { DescribePriceRequestDataDisks } from "./DescribePriceRequestDataDisks";


export class DescribePriceRequest extends $dara.Model {
  dataDisk?: DescribePriceRequestDataDisk[];
  systemDisk?: DescribePriceRequestSystemDisk;
  /**
   * @remarks
   * If you leave DataDisk.1.Size empty, the value that you specified for this parameter is used.
   */
  dataDisks?: DescribePriceRequestDataDisks[];
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
      dataDisks: 'DataDisks',
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
      dataDisk: { 'type': 'array', 'itemType': DescribePriceRequestDataDisk },
      systemDisk: DescribePriceRequestSystemDisk,
      dataDisks: { 'type': 'array', 'itemType': DescribePriceRequestDataDisks },
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
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

