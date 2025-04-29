// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes";


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptions extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The CPU option step size.
   * 
   * @example
   * 2
   */
  coreFactor?: number;
  /**
   * @remarks
   * Indicates whether HT can be enabled or disabled.
   * 
   * @example
   * true
   */
  hyperThreadingAdjustable?: boolean;
  /**
   * @remarks
   * The CPU topology types of the instance type.
   */
  supportedTopologyTypes?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes;
  /**
   * @remarks
   * The number of threads per CPU core.
   * 
   * >  `If the value of CpuOptions.ThreadPerCore is 1, Hyper-Threading (HT) is disabled.`
   * 
   * @example
   * 2
   */
  threadsPerCore?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      coreFactor: 'CoreFactor',
      hyperThreadingAdjustable: 'HyperThreadingAdjustable',
      supportedTopologyTypes: 'SupportedTopologyTypes',
      threadsPerCore: 'ThreadsPerCore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      coreFactor: 'number',
      hyperThreadingAdjustable: 'boolean',
      supportedTopologyTypes: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeCpuOptionsSupportedTopologyTypes,
      threadsPerCore: 'number',
    };
  }

  validate() {
    if(this.supportedTopologyTypes && typeof (this.supportedTopologyTypes as any).validate === 'function') {
      (this.supportedTopologyTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

