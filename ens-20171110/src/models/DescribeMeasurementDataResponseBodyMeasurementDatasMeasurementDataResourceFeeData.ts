// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

