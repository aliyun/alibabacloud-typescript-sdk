// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @example
   * x86
   */
  cpuArch?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **DescribeZones**.
   * 
   * @example
   * single
   */
  deployType?: string;
  /**
   * @remarks
   * The deployment mode.
   * 
   * @example
   * NORMAL
   */
  series?: string;
  static names(): { [key: string]: string } {
    return {
      cpuArch: 'CpuArch',
      deployType: 'DeployType',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArch: 'string',
      deployType: 'string',
      series: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

