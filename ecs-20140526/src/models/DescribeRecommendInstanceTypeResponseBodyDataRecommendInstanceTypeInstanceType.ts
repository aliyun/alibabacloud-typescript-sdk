// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceTypeInstanceType extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs of the instance type.
   * 
   * @example
   * 1
   */
  cores?: number;
  /**
   * @remarks
   * The generation of the instance family.
   * 
   * @example
   * ecs-4
   */
  generation?: string;
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * ecs.hfg6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecs.hfg6
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * Indicates whether the instance type supports I/O optimization.
   * 
   * @example
   * optimized
   */
  supportIoOptimized?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      generation: 'Generation',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      memory: 'Memory',
      supportIoOptimized: 'SupportIoOptimized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      generation: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      memory: 'number',
      supportIoOptimized: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

