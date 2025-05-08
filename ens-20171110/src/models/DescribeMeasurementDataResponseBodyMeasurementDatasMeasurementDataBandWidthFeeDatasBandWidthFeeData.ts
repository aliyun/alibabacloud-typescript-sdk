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

