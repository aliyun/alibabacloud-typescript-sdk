// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

